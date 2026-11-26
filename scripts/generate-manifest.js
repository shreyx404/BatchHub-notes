#!/usr/bin/env node
/**
 * generate-manifest.js
 * Scans all .html files under notes/ and audio files under audio/ and generates notes.json
 * Zero dependencies — uses only Node.js built-ins (fs, path)
 *
 * Usage:  node scripts/generate-manifest.js
 *   or:  npm run build
 */

const fs = require('fs');
const path = require('path');
const {
  ROOT_DIR,
  NOTES_DIR,
  BASE_URL,
  extractMeta,
  extractTitle,
  findHtmlFiles,
  resolveAudioForNote
} = require('./audio-utils');

const OUTPUT_FILE = path.join(ROOT_DIR, 'notes.json');

/**
 * Main: scan notes, extract metadata & audio links, write manifest
 */
function main() {
  if (!fs.existsSync(NOTES_DIR)) {
    console.error('❌  notes/ directory not found.');
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(NOTES_DIR);

  if (htmlFiles.length === 0) {
    console.log('⚠  No .html files found in notes/');
    fs.writeFileSync(OUTPUT_FILE, '[]', 'utf-8');
    return;
  }

  const manifest = [];
  let audioCount = 0;

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');

    const id = extractMeta(html, 'note-id');
    const subject = extractMeta(html, 'note-subject');
    const unit = extractMeta(html, 'note-unit');
    const tags = extractMeta(html, 'note-tags');
    const summary = extractMeta(html, 'note-summary');
    const title = extractTitle(html);

    const entry = {
      id: id || path.basename(filePath, '.html'),
      subject: subject || path.basename(path.dirname(filePath)).toUpperCase(),
      unit: unit || '',
      title: title,
      summary: summary || '',
      path: relativePath,
      url: `${BASE_URL}/${relativePath}`,
      tags: tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : []
    };

    const audio = resolveAudioForNote(filePath, html);
    if (audio) {
      audioCount += 1;
      if (audio.missingMetaTarget) {
        console.warn(`⚠  Audio referenced by <meta name="note-audio"> in ${relativePath} not found at ${audio.audioPath}`);
      }
      if (audio.audioPath) {
        entry.audioPath = audio.audioPath;
      }
      entry.audioUrl = audio.audioUrl;
      if (audio.audioDuration) {
        entry.audioDuration = audio.audioDuration;
      }
    }

    manifest.push(entry);
  }

  // Sort by subject, then by unit
  manifest.sort((a, b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.unit.localeCompare(b.unit);
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`✅  notes.json generated — ${manifest.length} note(s) found (${audioCount} with audio):\n`);
  for (const note of manifest) {
    console.log(`   ${note.subject} · ${note.unit} · ${note.title}`);
    console.log(`   → ${note.url}`);
    if (note.audioUrl) {
      const dur = note.audioDuration ? ` (${note.audioDuration})` : '';
      console.log(`   🎧 ${note.audioUrl}${dur}`);
    }
    console.log('');
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
