#!/usr/bin/env node
/**
 * process-audio.js
 * Converts raw uncompressed audio files (.wav, .flac, .m4a, .aac, .ogg) placed in
 * untracked audio-raw/ into speech-optimized .mp3 files in audio/<subject>/.
 *
 * Zero npm dependencies — uses Node.js built-ins (fs, path, child_process) + ffmpeg.
 *
 * Usage:
 *   node scripts/process-audio.js [options]
 *   npm run audio:process -- [options]
 *
 * Options:
 *   --bitrate <rate>   MP3 bitrate (default: 96k)
 *   --stereo           Encode 2 channels instead of mono (default: mono / -ac 1)
 *   --normalize        Apply EBU R128 loudness normalization (-af loudnorm)
 *   --force            Re-encode even if target .mp3 already exists and is newer
 *   --dry-run          Preview planned conversions without invoking ffmpeg
 *   --sync             Run scripts/sync-audio.js after processing to update HTML & notes.json
 *   --check            Check ffmpeg availability and exit
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  ROOT_DIR,
  AUDIO_DIR,
  CANONICAL_SUBJECTS
} = require('./audio-utils');

const RAW_DIR = path.join(ROOT_DIR, 'audio-raw');
const SUPPORTED_INPUT_EXTS = new Set(['.wav', '.wave', '.flac', '.m4a', '.aac', '.ogg', '.aiff']);
const GITHUB_WARN_BYTES = 50 * 1024 * 1024;
const GITHUB_MAX_BYTES = 100 * 1024 * 1024;

function parseArgs(argv) {
  const opts = {
    bitrate: '96k',
    channels: 1,
    sampleRate: 44100,
    normalize: false,
    force: false,
    dryRun: false,
    sync: false,
    check: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--stereo') opts.channels = 2;
    else if (arg === '--mono') opts.channels = 1;
    else if (arg === '--normalize') opts.normalize = true;
    else if (arg === '--force') opts.force = true;
    else if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--sync') opts.sync = true;
    else if (arg === '--check') opts.check = true;
    else if (arg === '--bitrate' && argv[i + 1]) {
      opts.bitrate = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--bitrate=')) {
      opts.bitrate = arg.split('=')[1];
    }
  }
  return opts;
}

function getFfmpegBinary() {
  const bin = process.env.FFMPEG_PATH || 'ffmpeg';
  const res = spawnSync(bin, ['-version'], { encoding: 'utf-8' });
  if (res.error || res.status !== 0) {
    return null;
  }
  const firstLine = (res.stdout || '').split(/\r?\n/)[0] || bin;
  return { bin, version: firstLine };
}

function printFfmpegInstallHelp() {
  console.error('❌  ffmpeg was not found on PATH.');
  console.error('    Install ffmpeg or set FFMPEG_PATH to convert .wav files to .mp3:');
  console.error('      • Windows: winget install Gyan.FFmpeg');
  console.error('      • macOS:   brew install ffmpeg');
  console.error('      • Linux:   sudo apt install ffmpeg');
}

/**
 * Infer canonical subject folder from relative path or filename prefix.
 * Examples:
 *   audio-raw/dcn/dcn-unit2.wav  -> dcn
 *   audio-raw/DCNU2.wav          -> dcn
 *   audio-raw/fds-unit1.wav      -> fds
 */
function inferSubject(relPath) {
  const parts = relPath.replace(/\\/g, '/').split('/').filter(Boolean);
  if (parts.length > 1) {
    const folder = parts[0].toLowerCase();
    if (CANONICAL_SUBJECTS.includes(folder)) return folder;
  }
  const base = path.basename(relPath).toLowerCase();
  for (const subj of CANONICAL_SUBJECTS) {
    if (base.startsWith(subj)) return subj;
  }
  return null;
}

function findRawAudioFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findRawAudioFiles(fullPath, out);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_INPUT_EXTS.has(ext)) {
        out.push(fullPath);
      }
    }
  }
  return out;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const ffmpeg = getFfmpegBinary();

  if (opts.check) {
    if (!ffmpeg) {
      printFfmpegInstallHelp();
      process.exit(1);
    }
    console.log(`✅  ffmpeg detected: ${ffmpeg.version}`);
    return;
  }

  if (!fs.existsSync(RAW_DIR)) {
    console.log('ℹ  No audio-raw/ staging directory found yet.');
    console.log('   Place raw .wav files inside audio-raw/<subject>/ (e.g. audio-raw/dcn/dcn-unit2.wav)');
    console.log('   or copy speech-ready .mp3/.m4a files directly into audio/<subject>/ and run:');
    console.log('   npm run audio:sync');
    return;
  }

  const rawFiles = findRawAudioFiles(RAW_DIR);
  if (rawFiles.length === 0) {
    console.log('ℹ  audio-raw/ exists, but no .wav (or supported raw audio) files were found.');
    return;
  }

  if (!ffmpeg && !opts.dryRun) {
    printFfmpegInstallHelp();
    process.exit(1);
  }

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const srcPath of rawFiles) {
    const relPath = path.relative(RAW_DIR, srcPath);
    const subject = inferSubject(relPath);
    if (!subject) {
      console.warn(`⚠  Skipping ${relPath} — could not determine canonical subject (${CANONICAL_SUBJECTS.join(', ')}).`);
      console.warn('   Move it into audio-raw/<subject>/ or prefix filename with subject code.');
      skipped += 1;
      continue;
    }

    const baseName = path.basename(srcPath, path.extname(srcPath));
    const outDir = path.join(AUDIO_DIR, subject);
    const destPath = path.join(outDir, `${baseName}.mp3`);
    const relDest = path.relative(ROOT_DIR, destPath).replace(/\\/g, '/');

    if (!opts.force && fs.existsSync(destPath)) {
      const srcMtime = fs.statSync(srcPath).mtimeMs;
      const destMtime = fs.statSync(destPath).mtimeMs;
      if (destMtime >= srcMtime) {
        console.log(`⏭  Up to date: ${relDest} (use --force to re-encode)`);
        skipped += 1;
        continue;
      }
    }

    const args = [
      '-hide_banner',
      '-loglevel', 'error',
      opts.force ? '-y' : '-y',
      '-i', srcPath,
      '-vn',
      '-ar', String(opts.sampleRate),
      '-ac', String(opts.channels),
      '-c:a', 'libmp3lame',
      '-b:a', opts.bitrate,
      '-write_xing', '1'
    ];
    if (opts.normalize) {
      args.push('-af', 'loudnorm=I=-16:TP=-1.5:LRA=11');
    }
    args.push(destPath);

    if (opts.dryRun) {
      console.log(`🧪  [dry-run] ${relPath} → ${relDest} (${opts.bitrate}, ${opts.sampleRate} Hz, ${opts.channels === 1 ? 'mono' : 'stereo'})`);
      converted += 1;
      continue;
    }

    fs.mkdirSync(outDir, { recursive: true });
    console.log(`🎙  Encoding ${relPath} → ${relDest} (${opts.bitrate}, ${opts.channels === 1 ? 'mono' : 'stereo'})…`);
    const res = spawnSync(ffmpeg.bin, args, { encoding: 'utf-8' });
    if (res.status !== 0) {
      console.error(`❌  Failed converting ${relPath}: ${res.stderr || 'unknown ffmpeg error'}`);
      failed += 1;
      continue;
    }

    const srcSize = fs.statSync(srcPath).size;
    const destSize = fs.statSync(destPath).size;
    const pct = srcSize > 0 ? ((1 - destSize / srcSize) * 100).toFixed(1) : '0.0';
    console.log(`   ✅ Saved ${relDest} (${formatBytes(srcSize)} → ${formatBytes(destSize)}, ${pct}% smaller)`);

    if (destSize >= GITHUB_MAX_BYTES) {
      console.error(`   🚨 WARNING: ${relDest} exceeds GitHub's 100 MB limit! Lower bitrate (e.g. --bitrate 64k).`);
    } else if (destSize >= GITHUB_WARN_BYTES) {
      console.warn(`   ⚠ Note: ${relDest} is larger than 50 MB (${formatBytes(destSize)}). Consider --bitrate 64k.`);
    }

    converted += 1;
  }

  console.log(`\nSummary: ${converted} converted, ${skipped} skipped, ${failed} failed.`);

  if (failed > 0) {
    process.exit(1);
  }

  if (opts.sync && !opts.dryRun) {
    const syncAudio = require('./sync-audio');
    syncAudio.main();
  } else if (converted > 0 && !opts.dryRun) {
    console.log('\nNext step: run `npm run audio:sync` to inject players into matching notes & rebuild notes.json.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, inferSubject };
