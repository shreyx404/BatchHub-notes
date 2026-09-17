#!/usr/bin/env node
/**
 * generate-manifest.js
 * Scans all .html files under notes/ and generates notes.json
 * Zero dependencies — uses only Node.js built-ins (fs, path)
 *
 * Usage:  node scripts/generate-manifest.js
 *   or:  npm run build
 */

const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '..', 'notes');
const OUTPUT_FILE = path.join(__dirname, '..', 'notes.json');
const BASE_URL = 'https://shreyx404.github.io/BatchHub-notes';

/**
 * Extract content of a <meta name="key" content="value"> tag
 */
function extractMeta(html, name) {
  const regex = new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`, 'i');
  const match = html.match(regex);
  return match ? match[1].trim() : '';
}

/**
 * Extract <title>...</title> content
 */
function extractTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match ? match[1].trim() : 'Untitled';
}

/**
 * Recursively find all .html files in a directory
 */
function findHtmlFiles(dir, fileList = []) {
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
 * Main: scan notes, extract metadata, write manifest
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

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');

    const id = extractMeta(html, 'note-id');
    const subject = extractMeta(html, 'note-subject');
    const unit = extractMeta(html, 'note-unit');
    const tags = extractMeta(html, 'note-tags');
    const summary = extractMeta(html, 'note-summary');
    const title = extractTitle(html);

    manifest.push({
      id: id || path.basename(filePath, '.html'),
      subject: subject || path.basename(path.dirname(filePath)).toUpperCase(),
      unit: unit || '',
      title: title,
      summary: summary || '',
      path: relativePath,
      url: `${BASE_URL}/${relativePath}`,
      tags: tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : []
    });
  }

  // Sort by subject, then by unit
  manifest.sort((a, b) => {
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.unit.localeCompare(b.unit);
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`✅  notes.json generated — ${manifest.length} note(s) found:\n`);
  for (const note of manifest) {
    console.log(`   ${note.subject} · ${note.unit} · ${note.title}`);
    console.log(`   → ${note.url}\n`);
  }
}

main();
