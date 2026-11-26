/**
 * audio-utils.js
 * Shared zero-dependency helpers for audio discovery, metadata parsing,
 * MP3/M4A duration calculation, and Audio Note Bar HTML/CSS/JS generation.
 * Uses only Node.js built-ins (fs, path).
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const NOTES_DIR = path.join(ROOT_DIR, 'notes');
const AUDIO_DIR = path.join(ROOT_DIR, 'audio');
const BASE_URL = 'https://shreyx404.github.io/BatchHub-notes';
const CANONICAL_SUBJECTS = ['biot', 'dcn', 'fds', 'oop', 'pas'];
const AUDIO_EXTENSIONS = ['.mp3', '.m4a'];

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Extract content of a <meta name="key" content="value"> tag (supports either attribute order).
 */
function extractMeta(html, name) {
  const forward = new RegExp(
    `<meta\\s+[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`,
    'i'
  );
  const reverse = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*name=["']${name}["']`,
    'i'
  );
  const match = html.match(forward) || html.match(reverse);
  return match ? decodeEntities(match[1].trim()) : '';
}

/**
 * Extract <title>...</title> content.
 */
function extractTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match ? decodeEntities(match[1].trim()) : 'Untitled';
}

/**
 * Recursively find all .html files in a directory.
 */
function findHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

/**
 * Format duration in seconds to M:SS or H:MM:SS.
 */
function formatDuration(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '';
  const rounded = Math.round(totalSeconds);
  const hrs = Math.floor(rounded / 3600);
  const mins = Math.floor((rounded % 3600) / 60);
  const secs = rounded % 60;
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

/**
 * Parse MPEG audio duration from an MP3 buffer without external dependencies.
 * Reads Xing/Info VBR header if present, otherwise scans MPEG frames.
 */
function getMp3DurationSeconds(buf) {
  let offset = 0;

  // Skip ID3v2 tag if present
  if (buf.length >= 10 && buf.toString('ascii', 0, 3) === 'ID3') {
    const tagSize =
      ((buf[6] & 0x7f) << 21) |
      ((buf[7] & 0x7f) << 14) |
      ((buf[8] & 0x7f) << 7) |
      (buf[9] & 0x7f);
    offset = 10 + tagSize;
  }

  const bitratesV1L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
  const bitratesV2L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
  const sampleRates = {
    3: [44100, 48000, 32000], // MPEG 1
    2: [22050, 24000, 16000], // MPEG 2
    0: [11025, 12000, 8000]   // MPEG 2.5
  };

  let totalDuration = 0;
  let framesChecked = 0;

  while (offset + 4 <= buf.length) {
    if (buf[offset] !== 0xff || (buf[offset + 1] & 0xe0) !== 0xe0) {
      offset += 1;
      continue;
    }

    const versionBits = (buf[offset + 1] >> 3) & 0x03;
    const layerBits = (buf[offset + 1] >> 1) & 0x03;
    const bitrateIdx = (buf[offset + 2] >> 4) & 0x0f;
    const sampleRateIdx = (buf[offset + 2] >> 2) & 0x03;
    const padding = (buf[offset + 2] >> 1) & 0x01;
    const channelMode = (buf[offset + 3] >> 6) & 0x03;

    if (
      versionBits === 1 ||
      layerBits !== 1 || // Layer III only (.mp3)
      bitrateIdx === 0 ||
      bitrateIdx === 15 ||
      sampleRateIdx === 3
    ) {
      offset += 1;
      continue;
    }

    const sr = sampleRates[versionBits][sampleRateIdx];
    const br = (versionBits === 3 ? bitratesV1L3[bitrateIdx] : bitratesV2L3[bitrateIdx]) * 1000;
    const samplesPerFrame = versionBits === 3 ? 1152 : 576;
    const frameLength = Math.floor((samplesPerFrame / 8) * br / sr) + padding;

    if (frameLength < 24 || offset + frameLength > buf.length) {
      break;
    }

    // Check first valid frame for Xing / Info VBR header
    if (framesChecked === 0) {
      const sideInfoLen = versionBits === 3
        ? (channelMode === 3 ? 17 : 32)
        : (channelMode === 3 ? 9 : 17);
      const xingOffset = offset + 4 + sideInfoLen;
      if (xingOffset + 12 <= buf.length) {
        const tag = buf.toString('ascii', xingOffset, xingOffset + 4);
        if (tag === 'Xing' || tag === 'Info') {
          const flags = buf.readUInt32BE(xingOffset + 4);
          if (flags & 0x01) {
            const totalFrames = buf.readUInt32BE(xingOffset + 8);
            if (totalFrames > 0) {
              return (totalFrames * samplesPerFrame) / sr;
            }
          }
        }
      }
    }

    totalDuration += samplesPerFrame / sr;
    framesChecked += 1;
    offset += frameLength;
  }

  return framesChecked > 0 ? totalDuration : 0;
}

/**
 * Parse duration from an MP4/M4A moov -> mvhd atom without external dependencies.
 */
function getM4aDurationSeconds(buf) {
  function findAtom(start, end, target) {
    let pos = start;
    while (pos + 8 <= end) {
      let size = buf.readUInt32BE(pos);
      const type = buf.toString('ascii', pos + 4, pos + 8);
      let headerLen = 8;
      if (size === 1 && pos + 16 <= end) {
        size = Number(buf.readBigUInt64BE(pos + 8));
        headerLen = 16;
      } else if (size === 0) {
        size = end - pos;
      }
      if (size < headerLen || pos + size > end) break;
      if (type === target) {
        return { start: pos + headerLen, end: pos + size };
      }
      pos += size;
    }
    return null;
  }

  const moov = findAtom(0, buf.length, 'moov');
  if (!moov) return 0;
  const mvhd = findAtom(moov.start, moov.end, 'mvhd');
  if (!mvhd || mvhd.start + 20 > mvhd.end) return 0;

  const version = buf[mvhd.start];
  if (version === 0 && mvhd.start + 20 <= mvhd.end) {
    const timescale = buf.readUInt32BE(mvhd.start + 12);
    const duration = buf.readUInt32BE(mvhd.start + 16);
    return timescale > 0 ? duration / timescale : 0;
  }
  if (version === 1 && mvhd.start + 32 <= mvhd.end) {
    const timescale = buf.readUInt32BE(mvhd.start + 20);
    const duration = Number(buf.readBigUInt64BE(mvhd.start + 24));
    return timescale > 0 ? duration / timescale : 0;
  }
  return 0;
}

/**
 * Compute formatted duration string (MM:SS) for a local .mp3 or .m4a file.
 */
function getAudioDuration(filePath) {
  try {
    if (!filePath || !fs.existsSync(filePath)) return '';
    const ext = path.extname(filePath).toLowerCase();
    if (!AUDIO_EXTENSIONS.includes(ext)) return '';
    const buf = fs.readFileSync(filePath);
    const seconds = ext === '.mp3' ? getMp3DurationSeconds(buf) : getM4aDurationSeconds(buf);
    return formatDuration(seconds);
  } catch {
    return '';
  }
}

/**
 * Resolve audio metadata and auto-detected audio file for an HTML note.
 */
function resolveAudioForNote(filePath, html) {
  const htmlBasename = path.basename(filePath, '.html');
  const noteId = extractMeta(html, 'note-id') || htmlBasename;
  const subjectFolder = path.basename(path.dirname(filePath)).toLowerCase();
  const metaAudio = extractMeta(html, 'note-audio');
  const metaDuration = extractMeta(html, 'note-audio-duration');

  let audioPath = '';
  let audioUrl = '';
  let localAudioFile = '';
  let missingMetaTarget = false;

  if (metaAudio) {
    if (/^https?:\/\//i.test(metaAudio)) {
      audioUrl = metaAudio;
      if (metaAudio.startsWith(`${BASE_URL}/`)) {
        audioPath = metaAudio.slice(BASE_URL.length + 1);
        localAudioFile = path.join(ROOT_DIR, audioPath);
      }
    } else {
      audioPath = metaAudio.replace(/^\.\//, '').replace(/^\/+/, '').replace(/\\/g, '/');
      audioUrl = `${BASE_URL}/${audioPath}`;
      localAudioFile = path.join(ROOT_DIR, audioPath);
      if (!fs.existsSync(localAudioFile)) {
        missingMetaTarget = true;
      }
    }
  } else {
    const subjectAudioDir = path.join(AUDIO_DIR, subjectFolder);
    if (fs.existsSync(subjectAudioDir)) {
      const entries = fs.readdirSync(subjectAudioDir, { withFileTypes: true })
        .filter(e => e.isFile())
        .map(e => e.name);

      const candidates = [
        `${noteId}.mp3`,
        `${noteId}.m4a`,
        `${htmlBasename}.mp3`,
        `${htmlBasename}.m4a`
      ];

      let matchedName = '';
      for (const candidate of candidates) {
        const exact = entries.find(name => name === candidate);
        if (exact) {
          matchedName = exact;
          break;
        }
        const ci = entries.find(name => name.toLowerCase() === candidate.toLowerCase());
        if (ci) {
          matchedName = ci;
          break;
        }
      }

      if (matchedName) {
        audioPath = `audio/${subjectFolder}/${matchedName}`;
        audioUrl = `${BASE_URL}/${audioPath}`;
        localAudioFile = path.join(subjectAudioDir, matchedName);
      }
    }
  }

  if (!audioUrl) {
    return null;
  }

  const audioDuration =
    metaDuration ||
    (localAudioFile && fs.existsSync(localAudioFile) ? getAudioDuration(localAudioFile) : '');

  return {
    audioPath,
    audioUrl,
    audioDuration,
    localAudioFile,
    missingMetaTarget,
    source: metaAudio ? 'meta' : 'auto'
  };
}

module.exports = {
  ROOT_DIR,
  NOTES_DIR,
  AUDIO_DIR,
  BASE_URL,
  CANONICAL_SUBJECTS,
  AUDIO_EXTENSIONS,
  decodeEntities,
  extractMeta,
  extractTitle,
  findHtmlFiles,
  formatDuration,
  getAudioDuration,
  resolveAudioForNote
};
