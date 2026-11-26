#!/usr/bin/env node
/**
 * sync-audio.js
 * Scans all notes under notes/ and injects/updates the Audio Note Bar component
 * and <meta name="note-audio"> / <meta name="note-audio-duration"> tags ONLY in
 * note HTML files that have a corresponding audio file (via meta or audio/<subject>/).
 * Then rebuilds notes.json automatically.
 *
 * Zero npm dependencies — uses only Node.js built-ins (fs, path).
 *
 * Usage:
 *   node scripts/sync-audio.js [--clean] [--no-build]
 *   npm run audio:sync
 */

const fs = require('fs');
const path = require('path');
const {
  ROOT_DIR,
  NOTES_DIR,
  extractMeta,
  findHtmlFiles,
  resolveAudioForNote
} = require('./audio-utils');
const { main: buildManifest } = require('./generate-manifest');

const MARKER_STYLE_START = '<!-- BATCHHUB-AUDIO-STYLE:START -->';
const MARKER_STYLE_END = '<!-- BATCHHUB-AUDIO-STYLE:END -->';
const MARKER_PLAYER_START = '<!-- BATCHHUB-AUDIO-PLAYER:START -->';
const MARKER_PLAYER_END = '<!-- BATCHHUB-AUDIO-PLAYER:END -->';
const MARKER_SCRIPT_START = '<!-- BATCHHUB-AUDIO-SCRIPT:START -->';
const MARKER_SCRIPT_END = '<!-- BATCHHUB-AUDIO-SCRIPT:END -->';

function resolveThemeProfile(html, isInnerColumn) {
  const headEnd = html.search(/<\/head>/i);
  const head = headEnd !== -1 ? html.slice(0, headEnd) : html;
  const defined = new Set([...head.matchAll(/(--[a-zA-Z0-9_-]+)\s*:/g)].map(m => m[1]));
  const pick = (candidates, fallback) => {
    for (const v of candidates) {
      if (defined.has(v)) return `var(${v})`;
    }
    return fallback;
  };

  const hasWarm = defined.has('--warm');
  const hasCard = defined.has('--card');
  const isBoxyShadow = /\.box\s*\{[^}]*box-shadow\s*:\s*[3-8]px\s+[3-8]px\s+0/i.test(head);
  const isBlueprintBorder = /\.card\s*\{[^}]*border\s*:\s*1\.5px\s+solid\s+var\(--ink\)/i.test(head);
  const isDoubleLeftMemo = /\.memo\s*\{[^}]*border-left\s*:\s*4px\s+double\s+var\(--ink\)/i.test(head);

  // Primary elevated card surface
  const surface = pick(
    ['--surface', '--card', '--panel', '--paper', '--soft', '--bg'],
    '#111111'
  );

  // Secondary control well surface (avoid --soft when it is a text color like DCNU1/DCNU4/PASU2)
  const softIsText = /--soft\s*:\s*#[0-9a-f]{3,6}/i.test(head) && (defined.has('--wash') || defined.has('--panel') || defined.has('--paper'));
  const surface2Candidates = [
    '--surface2', '--surface-2', '--softer', '--soft2', '--wash', '--paper2', '--paper-2', '--panel2'
  ];
  if (hasCard && defined.has('--panel')) surface2Candidates.push('--panel');
  if (hasCard && defined.has('--paper')) surface2Candidates.push('--paper');
  if (!softIsText) surface2Candidates.push('--soft');
  if (defined.has('--code')) surface2Candidates.push('--code');
  surface2Candidates.push('--bg');
  const surface2 = pick(surface2Candidates, '#181818');

  const border = pick(['--border', '--line', '--hair'], '#252525');
  const border2 = pick(['--border2', '--line2', '--line-2', '--line-strong', '--line', '--hair'], '#2e2e2e');
  const text = pick(['--ink', '--fg', '--txt', '--text'], '#e8e8e8');
  const dim = pick(
    ['--text-dim', '--txt-dim', '--ink-soft', '--ink2', '--ink-2', '--fg2', '--muted', '--mut', '--ink-mute', '--mute', '--g2', '--soft'],
    '#888888'
  );

  let accent, accentInk;
  if (hasWarm) {
    accent = 'var(--warm)';
    accentInk = pick(['--bg', '--paper'], '#0a0a0a');
  } else {
    accent = pick(['--inv', '--hl', '--ink', '--fg', '--white', '--txt', '--text'], '#161616');
    accentInk = pick(['--inv-ink', '--hl-ink', '--card', '--surface', '--panel', '--paper', '--bg'], '#ffffff');
  }

  const mono = pick(['--mono'], "'IBM Plex Mono', ui-monospace, monospace");
  const sans = pick(['--sans', '--body', '--serif'], 'system-ui, sans-serif');

  let radius = pick(['--rad', '--radius', '--r-m', '--r'], '');
  if (!radius) {
    if (isBoxyShadow || isBlueprintBorder) radius = '3px';
    else if (/border-radius\s*:\s*1[2-8]px/i.test(head)) radius = '12px';
    else radius = '8px';
  }

  let widthRule = 'width: 100%; max-width: 100%;';
  if (!isInnerColumn) {
    let maxWidth = '860px';
    if (defined.has('--max')) maxWidth = 'calc(var(--max) - 40px)';
    else if (defined.has('--maxw')) maxWidth = 'var(--maxw)';
    else if (/\.top\s*\{[^}]*max-width\s*:\s*1180px/i.test(head)) maxWidth = '1116px';
    else if (/\.hero\s*\{[^}]*max-width\s*:\s*1140px/i.test(head)) maxWidth = '1104px';
    else if (/\.wrap\s*\{[^}]*max-width\s*:\s*880px/i.test(head)) maxWidth = '816px';
    widthRule = `width: calc(100% - 32px); max-width: ${maxWidth};`;
  }

  let borderRules = 'border: 1px solid var(--ab-border); border-left: 3px solid var(--ab-accent);';
  let shadowRule = 'none';
  if (isBoxyShadow) {
    borderRules = 'border: 1.5px solid var(--ab-accent);';
    shadowRule = '4px 4px 0 var(--ab-border2)';
  } else if (isBlueprintBorder) {
    borderRules = 'border: 1.5px solid var(--ab-accent);';
    shadowRule = '0 2px 0 var(--ab-border)';
  } else if (isDoubleLeftMemo) {
    borderRules = 'border: 1px solid var(--ab-border); border-left: 4px double var(--ab-accent);';
  }

  return {
    surface, surface2, border, border2, text, dim,
    accent, accentInk, mono, sans, radius, widthRule, borderRules, shadowRule
  };
}

function buildInjectedStyle(profile) {
  return `${MARKER_STYLE_START}
<style id="batchhub-audio-style">
  #audioBar {
    --ab-surface: ${profile.surface};
    --ab-surface2: ${profile.surface2};
    --ab-border: ${profile.border};
    --ab-border2: ${profile.border2};
    --ab-text: ${profile.text};
    --ab-dim: ${profile.dim};
    --ab-accent: ${profile.accent};
    --ab-accent-ink: ${profile.accentInk};
    --ab-mono: ${profile.mono};
    --ab-sans: ${profile.sans};
    --ab-pct: 0%;
    background: var(--ab-surface);
    ${profile.borderRules}
    border-radius: ${profile.radius};
    box-shadow: ${profile.shadowRule};
    padding: 16px 20px;
    margin: 22px auto;
    ${profile.widthRule}
    box-sizing: border-box;
    font-family: var(--ab-sans);
    color: var(--ab-text);
  }
  #audioBar[hidden] { display: none !important; }
  #audioBar .ab-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  #audioBar .ab-label-group {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }
  #audioBar .ab-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--ab-mono);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ab-accent);
  }
  #audioBar .ab-badge svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
  #audioBar .ab-status {
    font-family: var(--ab-mono);
    font-size: 10px;
    color: var(--ab-dim);
    letter-spacing: 0.04em;
  }
  #audioBar .ab-rates {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    background: var(--ab-surface2);
    border: 1px solid var(--ab-border);
    border-radius: 6px;
    padding: 2px;
  }
  #audioBar .ab-rate {
    appearance: none;
    border: none;
    background: transparent;
    color: var(--ab-dim);
    font-family: var(--ab-mono);
    font-size: 10px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
    min-height: 26px;
    line-height: 1.2;
  }
  #audioBar .ab-rate:hover { color: var(--ab-text); }
  #audioBar .ab-rate[aria-pressed="true"] {
    background: var(--ab-accent);
    color: var(--ab-accent-ink);
    font-weight: 600;
  }
  #audioBar .ab-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  #audioBar .ab-transport {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  #audioBar .ab-play {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: none;
    background: var(--ab-accent);
    color: var(--ab-accent-ink);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: transform 0.15s, opacity 0.15s;
    padding: 0;
  }
  #audioBar .ab-play:hover { opacity: 0.88; transform: scale(1.04); }
  #audioBar .ab-play:active { transform: scale(0.96); }
  #audioBar .ab-play svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    stroke: none;
  }
  #audioBar .ab-play .ab-ic-pause { display: none; }
  #audioBar .ab-play.is-playing .ab-ic-play { display: none; }
  #audioBar .ab-play.is-playing .ab-ic-pause { display: block; }
  #audioBar .ab-skip {
    height: 34px;
    padding: 0 9px;
    border-radius: 6px;
    border: 1px solid var(--ab-border2);
    background: var(--ab-surface2);
    color: var(--ab-dim);
    font-family: var(--ab-mono);
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
    white-space: nowrap;
  }
  #audioBar .ab-skip:hover { color: var(--ab-text); border-color: var(--ab-accent); }
  #audioBar .ab-progress-wrap {
    flex: 1 1 180px;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  #audioBar .ab-seek {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    min-width: 0;
    height: 6px;
    border-radius: 999px;
    border: none;
    padding: 0;
    margin: 0;
    background: linear-gradient(
      to right,
      var(--ab-accent) 0%,
      var(--ab-accent) var(--ab-pct),
      var(--ab-border2) var(--ab-pct),
      var(--ab-border2) 100%
    );
    outline: none;
    cursor: pointer;
  }
  #audioBar .ab-seek::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--ab-accent);
    border: 2px solid var(--ab-surface);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }
  #audioBar .ab-seek::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--ab-accent);
    border: 2px solid var(--ab-surface);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }
  #audioBar .ab-time {
    font-family: var(--ab-mono);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--ab-dim);
    white-space: nowrap;
    flex-shrink: 0;
  }
  @media (max-width: 560px) {
    #audioBar { padding: 14px; margin: 18px auto; }
    #audioBar .ab-progress-wrap { order: -1; flex: 1 1 100%; width: 100%; }
    #audioBar .ab-controls { justify-content: space-between; }
    #audioBar .ab-play { width: 42px; height: 42px; }
    #audioBar .ab-skip { min-height: 38px; min-width: 44px; padding: 0 10px; }
    #audioBar .ab-rate { min-height: 30px; min-width: 36px; padding: 4px 7px; }
  }
  @media print {
    #audioBar { display: none !important; }
  }
</style>
${MARKER_STYLE_END}`;
}

function buildInjectedPlayerHtml(audioRelPath, durationStr) {
  const safePath = audioRelPath.replace(/"/g, '&quot;');
  const safeDur = (durationStr || '').replace(/"/g, '&quot;');
  const initialTime = safeDur ? `0:00 / ${safeDur}` : '0:00 / 0:00';
  return `${MARKER_PLAYER_START}
<div class="audio-bar" id="audioBar" data-src="${safePath}" data-duration="${safeDur}" role="region" aria-label="Unit audio summary player">
  <div class="ab-head">
    <div class="ab-label-group">
      <span class="ab-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
        Audio Summary
      </span>
      <span class="ab-status" id="abStatus">Ready</span>
    </div>
    <div class="ab-rates" role="group" aria-label="Playback speed">
      <button type="button" class="ab-rate" data-rate="1" aria-pressed="true">1x</button>
      <button type="button" class="ab-rate" data-rate="1.25" aria-pressed="false">1.25x</button>
      <button type="button" class="ab-rate" data-rate="1.5" aria-pressed="false">1.5x</button>
      <button type="button" class="ab-rate" data-rate="2" aria-pressed="false">2x</button>
    </div>
  </div>
  <div class="ab-controls">
    <div class="ab-transport">
      <button type="button" class="ab-skip" id="abBack15" aria-label="Rewind 15 seconds" title="Rewind 15 seconds">-15s</button>
      <button type="button" class="ab-play" id="abPlay" aria-label="Play audio summary" title="Play / Pause">
        <svg class="ab-ic-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v14l11-7-11-7z"/></svg>
        <svg class="ab-ic-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
      </button>
      <button type="button" class="ab-skip" id="abFwd15" aria-label="Forward 15 seconds" title="Forward 15 seconds">+15s</button>
    </div>
    <div class="ab-progress-wrap">
      <input type="range" class="ab-seek" id="abSeek" min="0" max="1000" value="0" step="1" aria-label="Seek audio position">
      <span class="ab-time" id="abTime">${initialTime}</span>
    </div>
  </div>
  <audio id="abAudio" preload="metadata"></audio>
</div>
${MARKER_PLAYER_END}`;
}

function buildInjectedScript() {
  return `${MARKER_SCRIPT_START}
<script id="batchhub-audio-script">
(function () {
  var bar = document.getElementById('audioBar');
  if (!bar) return;
  var audio = document.getElementById('abAudio');
  var playBtn = document.getElementById('abPlay');
  var backBtn = document.getElementById('abBack15');
  var fwdBtn = document.getElementById('abFwd15');
  var seek = document.getElementById('abSeek');
  var timeEl = document.getElementById('abTime');
  var statusEl = document.getElementById('abStatus');
  var rateBtns = bar.querySelectorAll('.ab-rate');

  var metaAudio = document.querySelector('meta[name="note-audio"]');
  var metaDur = document.querySelector('meta[name="note-audio-duration"]');
  var rawSrc = (bar.getAttribute('data-src') || (metaAudio && metaAudio.getAttribute('content')) || '').trim();
  if (!rawSrc) {
    bar.hidden = true;
    return;
  }

  function resolveAudioSrc(src) {
    if (/^(https?:|\\/|\\.\\.?\\/)/i.test(src)) return src;
    var depthPrefix = window.location.pathname.indexOf('/templates/') !== -1 ? '../' : '../../';
    return depthPrefix + src.replace(/^\\/+/, '');
  }

  function fmt(sec) {
    if (!isFinite(sec) || sec < 0) return '0:00';
    var s = Math.floor(sec);
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var r = s % 60;
    if (h > 0) return h + ':' + String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
    return m + ':' + String(r).padStart(2, '0');
  }

  var fallbackDur = (bar.getAttribute('data-duration') || (metaDur && metaDur.getAttribute('content')) || '').trim() || '0:00';
  var seeking = false;

  audio.src = resolveAudioSrc(rawSrc);
  bar.hidden = false;

  function setRate(rate) {
    var r = parseFloat(rate) || 1;
    audio.playbackRate = r;
    rateBtns.forEach(function (btn) {
      btn.setAttribute('aria-pressed', parseFloat(btn.getAttribute('data-rate')) === r ? 'true' : 'false');
    });
    try { localStorage.setItem('batchhub-audio-rate', String(r)); } catch (e) {}
  }

  try {
    var savedRate = localStorage.getItem('batchhub-audio-rate');
    if (savedRate) setRate(savedRate);
  } catch (e) {}

  function syncUI() {
    var dur = isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
    var cur = isFinite(audio.currentTime) ? audio.currentTime : 0;
    if (!seeking) {
      var pct = dur > 0 ? Math.min(100, Math.max(0, (cur / dur) * 100)) : 0;
      seek.value = Math.round(pct * 10);
      bar.style.setProperty('--ab-pct', pct.toFixed(2) + '%');
    }
    timeEl.textContent = fmt(cur) + ' / ' + (dur > 0 ? fmt(dur) : fallbackDur);
  }

  playBtn.addEventListener('click', function () {
    if (audio.paused) {
      var p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { if (statusEl) statusEl.textContent = 'Tap again to play'; });
      }
    } else {
      audio.pause();
    }
  });

  backBtn.addEventListener('click', function () {
    audio.currentTime = Math.max(0, (audio.currentTime || 0) - 15);
    syncUI();
  });

  fwdBtn.addEventListener('click', function () {
    var dur = isFinite(audio.duration) ? audio.duration : Infinity;
    audio.currentTime = Math.min(dur, (audio.currentTime || 0) + 15);
    syncUI();
  });

  rateBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setRate(btn.getAttribute('data-rate'));
    });
  });

  seek.addEventListener('pointerdown', function () { seeking = true; });
  seek.addEventListener('pointerup', function () { seeking = false; });
  seek.addEventListener('input', function () {
    seeking = true;
    var pct = parseFloat(seek.value) / 10;
    bar.style.setProperty('--ab-pct', pct.toFixed(2) + '%');
    if (isFinite(audio.duration) && audio.duration > 0) {
      timeEl.textContent = fmt((pct / 100) * audio.duration) + ' / ' + fmt(audio.duration);
    }
  });
  seek.addEventListener('change', function () {
    var pct = parseFloat(seek.value) / 1000;
    if (isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = pct * audio.duration;
    }
    seeking = false;
    syncUI();
  });

  audio.addEventListener('play', function () {
    playBtn.classList.add('is-playing');
    playBtn.setAttribute('aria-label', 'Pause audio summary');
    if (statusEl) statusEl.textContent = 'Playing';
  });
  audio.addEventListener('pause', function () {
    playBtn.classList.remove('is-playing');
    playBtn.setAttribute('aria-label', 'Play audio summary');
    if (statusEl && !audio.ended) statusEl.textContent = 'Paused';
  });
  audio.addEventListener('ended', function () {
    playBtn.classList.remove('is-playing');
    playBtn.setAttribute('aria-label', 'Play audio summary');
    if (statusEl) statusEl.textContent = 'Finished';
  });
  audio.addEventListener('loadedmetadata', syncUI);
  audio.addEventListener('timeupdate', syncUI);
  audio.addEventListener('error', function () {
    if (statusEl) statusEl.textContent = 'Audio unavailable';
  });
})();
</script>
${MARKER_SCRIPT_END}`;
}

function findBalancedEnd(html, openIdx, tagName) {
  const tagRe = new RegExp(`<(/?)(${tagName})\\b[^>]*>`, 'gi');
  tagRe.lastIndex = openIdx;
  let depth = 0;
  let m;
  while ((m = tagRe.exec(html)) !== null) {
    if (m[1] === '/') {
      depth -= 1;
      if (depth === 0) return m.index + m[0].length;
    } else {
      depth += 1;
    }
  }
  return -1;
}

function findHeroInsertOffset(html) {
  const bodyStart = html.indexOf('<body');
  const h1Idx = html.indexOf('<h1', bodyStart);
  if (bodyStart === -1 || h1Idx === -1) return -1;
  const beforeH1 = html.slice(bodyStart, h1Idx);

  // Pick the outermost enclosing hero/masthead/cover/header block containing h1
  const tagMatches = [...beforeH1.matchAll(/<(header|section|div)\b([^>]*)>/gi)];
  for (let i = 0; i < tagMatches.length; i += 1) {
    const [, tag, attrs] = tagMatches[i];
    const absIdx = bodyStart + tagMatches[i].index;
    const isTopbar = /\b(topbar|top-bar|navbar|nav)\b/i.test(attrs);
    if (isTopbar) continue;
    const isHeroTag =
      tag.toLowerCase() === 'header' ||
      /\bclass=["'][^"']*\b(hero|mast|masthead|cover|top)\b/i.test(attrs);
    if (!isHeroTag) continue;
    const endIdx = findBalancedEnd(html, absIdx, tag);
    if (endIdx > h1Idx) {
      return endIdx;
    }
  }

  const afterH1 = html.slice(h1Idx);
  const nextSec = afterH1.search(/<(?:section|article|div)\s+[^>]*(?:id=["']|class=["'](?:sec|section|ch|card|mod|part|unit))/i);
  if (nextSec > 0) {
    return h1Idx + nextSec;
  }
  return -1;
}

function stripInjectedBlocks(html) {
  const strip = (src, start, end) => {
    const re = new RegExp(`\\r?\\n?${start}[\\s\\S]*?${end}\\r?\\n?`, 'g');
    return src.replace(re, '');
  };
  let out = html;
  out = strip(out, MARKER_STYLE_START, MARKER_STYLE_END);
  out = strip(out, MARKER_PLAYER_START, MARKER_PLAYER_END);
  out = strip(out, MARKER_SCRIPT_START, MARKER_SCRIPT_END);
  return out;
}

function upsertMetaTag(html, name, content) {
  if (!content) return html;
  const existingRe = new RegExp(`(<meta\\s+[^>]*name=["']${name}["'][^>]*content=["'])([^"']*)(["'][^>]*>)`, 'i');
  if (existingRe.test(html)) {
    return html.replace(existingRe, `$1${content}$3`);
  }
  const titleIdx = html.search(/<title>/i);
  if (titleIdx !== -1) {
    const tag = `<meta name="${name}" content="${content}">\n`;
    return html.slice(0, titleIdx) + tag + html.slice(titleIdx);
  }
  return html;
}

function isInsideInnerColumn(html, insertIdx) {
  const headEnd = html.search(/<\/head>/i);
  const head = headEnd !== -1 ? html.slice(0, headEnd) : '';
  const before = html.slice(Math.max(0, insertIdx - 6000), insertIdx);
  for (const cls of ['wrap', 'content', 'inner', 'main']) {
    const marker = `<div class="${cls}"`;
    const pos = before.lastIndexOf(marker);
    if (pos === -1) continue;
    const hasColumnCss = new RegExp(`\\.${cls}\\s*\\{[^}]*(?:max-width|padding)`, 'i').test(head);
    if (!hasColumnCss) continue;
    const afterOpen = before.slice(pos);
    if (findBalancedEnd(afterOpen, 0, 'div') === -1) return true;
  }
  return false;
}

function syncHtmlFile(filePath, { clean = false } = {}) {
  let html = fs.readFileSync(filePath, 'utf-8');
  const audio = resolveAudioForNote(filePath, html);

  if (!audio || audio.missingMetaTarget) {
    if (clean && (html.includes(MARKER_PLAYER_START) || html.includes(MARKER_STYLE_START))) {
      const cleaned = stripInjectedBlocks(html);
      fs.writeFileSync(filePath, cleaned, 'utf-8');
      return 'cleaned';
    }
    return 'unchanged';
  }

  let updated = stripInjectedBlocks(html);

  // Sync <meta name="note-audio"> and <meta name="note-audio-duration">
  if (audio.audioPath) {
    updated = upsertMetaTag(updated, 'note-audio', audio.audioPath);
  }
  if (audio.audioDuration) {
    updated = upsertMetaTag(updated, 'note-audio-duration', audio.audioDuration);
  }

  // Only inject standalone style/player/script if note doesn't already ship native #audioBar outside markers
  if (!updated.includes('id="audioBar"')) {
    const heroInsertIdx = findHeroInsertOffset(updated);
    if (heroInsertIdx === -1) return 'skipped';

    const innerColumn = isInsideInnerColumn(updated, heroInsertIdx);
    const profile = resolveThemeProfile(updated, innerColumn);
    const styleBlock = buildInjectedStyle(profile);
    const playerBlock = buildInjectedPlayerHtml(audio.audioPath || audio.audioUrl, audio.audioDuration);
    const scriptBlock = buildInjectedScript();

    updated = updated.slice(0, heroInsertIdx) + `\n${playerBlock}\n` + updated.slice(heroInsertIdx);

    const headCloseIdx = updated.search(/<\/head>/i);
    if (headCloseIdx === -1) return 'skipped';
    updated = updated.slice(0, headCloseIdx) + `\n${styleBlock}\n` + updated.slice(headCloseIdx);

    const bodyCloseIdx = updated.lastIndexOf('</body>');
    if (bodyCloseIdx === -1) return 'skipped';
    updated = updated.slice(0, bodyCloseIdx) + `\n${scriptBlock}\n` + updated.slice(bodyCloseIdx);
  }

  if (updated !== html) {
    fs.writeFileSync(filePath, updated, 'utf-8');
    return 'synced';
  }
  return 'unchanged';
}

function main() {
  const args = process.argv.slice(2);
  const clean = args.includes('--clean');
  const noBuild = args.includes('--no-build');

  if (!fs.existsSync(NOTES_DIR)) {
    console.error('❌  notes/ directory not found.');
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(NOTES_DIR);
  let syncedCount = 0;
  let cleanedCount = 0;

  for (const filePath of htmlFiles) {
    const result = syncHtmlFile(filePath, { clean });
    const rel = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    if (result === 'synced') {
      syncedCount += 1;
      console.log(`🎧  Synced Audio Note Bar → ${rel}`);
    } else if (result === 'cleaned') {
      cleanedCount += 1;
      console.log(`🧹  Removed Audio Note Bar → ${rel}`);
    }
  }

  if (syncedCount === 0 && cleanedCount === 0) {
    console.log('ℹ  No matching audio files found in audio/ — 0 notes modified.');
  }

  if (!noBuild) {
    buildManifest();
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, syncHtmlFile, findHeroInsertOffset };
