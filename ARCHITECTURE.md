# System Architecture (`ARCHITECTURE.md`)

## 1. High-Level Architecture Overview

**`BatchHub-notes`** is designed as a decoupled, zero-maintenance static content layer powering the academic notes section of the **BatchHub** web platform.

```
+-------------------------------------------------------------------------+
|                          DEVELOPMENT WORKFLOW                           |
|                                                                         |
|  +--------------------+        +---------------------+                  |
|  | Author HTML Note   |        | Raw .wav Staging    |                  |
|  | (notes/<sub/file>) |        | (audio-raw/ ignored)|                  |
|  +---------+----------+        +----------+----------+                  |
|            |                              | npm run audio:process       |
|            |                              v (ffmpeg -> 96k/44.1k mp3)   |
|            |                   +---------------------+                  |
|            |                   | audio/<sub/*.mp3>   |                  |
|            |                   +----------+----------+                  |
|            |                              |                             |
|            +--------------+---------------+                             |
|                           | npm run audio:sync / npm run build          |
|                           v                                             |
|                 +--------------------+                                  |
|                 | Updated notes.json |                                  |
|                 | & Audio Note Bars  |                                  |
|                 +---------+----------+                                  |
|                           |                                             |
|                           v                                             |
|                 +--------------------+                                  |
|                 | Update System MDs  |                                  |
|                 | (PRD, AGENTS, etc) |                                  |
|                 +---------+----------+                                  |
+---------------------------|---------------------------------------------+
                            |
                            | git push origin main
                            v
+-------------------------------------------------------------------------+
|                            CI/CD & HOSTING                              |
|                                                                         |
|  +------------------------------------+                                 |
|  | GitHub Actions Workflow            |                                 |
|  | (.github/workflows/deploy.yml)     |                                 |
|  +-----------------+------------------+                                 |
|                    |                                                    |
|                    v                                                    |
|  +------------------------------------+                                 |
|  | GitHub Pages Global CDN            |                                 |
|  | (shreyx404.github.io/BatchHub-notes|                                 |
|  +-----------------+------------------+                                 |
+--------------------|----------------------------------------------------+
                     |
         +-----------+-----------+
         |                       |
         v                       v
+--------------------+  +-------------------------------------------------+
| Master Portal      |  | Standalone Note Pages & Audio Streams           |
| (index.html)       |  | (notes/<sub/file>.html + audio/<sub/*.mp3>)     |
| - Live search      |  | - Sticky Sidebar TOC & Progress Bar             |
| - Subject & Audio  |  | - In-Note Audio Note Bar (when audio exists)    |
|   filter pills     |  | - Print-optimized stylesheet (hides audio bar)  |
| - Inline audio play|  |                                                 |
| - Copy Link / Audio|  |                                                 |
+---------+----------+  +------------------------+------------------------+
          |                                      ^
          | Admin copies Note & Audio URLs       |
          v                                      |
+------------------------------------------------+------------------------+
|                      BATCHHUB MAIN APPLICATION                         |
|                 (https://batch-hub-red.vercel.app)                     |
|                                                                         |
|  +---------------------------+       +-------------------------------+  |
|  | Admin Portal              | ----> | Student Notes & Audio Player  |  |
|  | (/admin/notes)            |       | (/notes?subject=subj-dcn)     |  |
|  +---------------------------+       +-------------------------------+  |
+-------------------------------------------------------------------------+
```

---

## 2. Component Breakdown

### 2.1 The Static Host (GitHub Pages)
- **Zero Server Overhead**: Hosted on GitHub Pages with HTTPS enforced via Let's Encrypt certificates.
- **Global Edge Distribution**: Fastly-backed CDN caching ensures low Time-To-First-Byte (TTFB < 50ms) across regions.
- **Continuous Deployment**: Any push to `main` deploys the entire repository within 30 seconds via GitHub Actions.

### 2.2 The Master Portal (`index.html`)
- **Client-Side Manifest Consumption**: Uses the browser's native `fetch()` API to consume `notes.json`.
- **Search & Filter Subsystem**:
  - Implements multi-field search against title, subject, unit, summary, and tags.
  - Generates subject filter pills dynamically based on available subjects in `notes.json`, alongside an **`🎧 Audio Available`** toggle filter pill in `#filterRow`.
- **Inline Audio Preview & Badges**:
  - Note cards with `audioUrl` display an `🎧 Audio` badge (with duration when present) and a compact shared-stream inline audio player (`▶ Listen` / `⏸ Pause`, scrub bar, time display).
- **Admin Clipboard Utility**:
  - Automatically computes canonical URLs: `https://shreyx404.github.io/BatchHub-notes/<path>`.
  - Provides **"Copy Link"** and (for audio-enabled cards) **"Copy Audio URL"** buttons using `navigator.clipboard.writeText()` (with `execCommand` fallback) and animated toast notifications.

### 2.3 Standalone Note Documents & Responsive Architecture
Each note is an independent, single-file HTML document requiring zero external runtime framework dependencies:
- **Head Assets**: Preconnected typography (Google Fonts `IBM Plex Sans`, `IBM Plex Mono`, `Fraunces`, `Newsreader`).
- **Internal Styles**: Self-contained CSS utilizing CSS variables for theme consistency.
- **Universal Dual-Theme Switcher & Storage Sync**:
  - Topbar or floating switcher button (`#themeBtn`) featuring dynamic SVG Sun and Moon icons across 100% of notes.
  - Dual CSS design token sets (`html[data-theme="dark"]` / `html[data-theme="light"]`) ensuring optimal WCAG AAA contrast for reading and diagram comprehension.
  - Zero-FOUT inline anti-flash script in `<head>` inspecting `localStorage.getItem('batchhub-theme')` or system color-scheme preference before first paint.
  - Centralized preference persistence in `localStorage` (`batchhub-theme`), providing seamless theme synchronization across notes.
- **Reading Progress Tracking**: Tiny vanilla JavaScript scroll listener updates the fixed top progress bar (`#progressBar`).
- **Active Section Highlighting**: IntersectionObserver or bounding-rect computation continuously tracks scroll position to highlight active sections in the TOC.
- **Cross-Device Responsive Engine**:
  - **Desktop (`> 1024px`)**: Fixed 260px sidebar TOC with spacious reading layout (`max-width: 1000px–1180px`).
  - **Tablet (`641px – 1024px`)**: Adaptive layout with reduced padding and drawer or condensed navigation.
  - **Mobile (`< 640px` down to `320px`)**: Floating hamburger trigger (`.toc-trigger` / `.toc-toggle`), full off-canvas TOC drawer, close button (`#tocClose`), and dark backdrop scrim (`.toc-backdrop`) with automatic dismissal on link clicks.
  - **Zero-Blowout Architecture**: Multi-column grids converted to `display: block` at `<=960px`; negative margins strictly banned on mobile containers; root safety constraints (`overflow-x: hidden; max-width: 100vw;`) on `html` and `body`.
  - **Universal Table & Diagram Containers**: Tables and multi-unit diagrams (checkpoints, frame anatomy, pipelines) encapsulated in dedicated scroll containers (`.tblwrap`, `.tw`) with `-webkit-overflow-scrolling: touch;`, completely preventing horizontal page blowouts.
  - **Fluid Headings**: Header typography uses CSS `clamp()` to scale down smoothly across 320px–500px screens without text clipping.
- **Print Styles**: `@media print` directives to convert dark mode to high-contrast ink-efficient monochrome layout with clean page breaks, while hiding interactive UI such as `.theme-btn`, `.sidebar`, `.toc-toggle`, `.progress-bar`, and `.audio-bar`.
- **In-Note Audio Note Bar (`#audioBar`)**: Zero-dependency HTML5 `<audio preload="metadata">` controller using theme tokens (`--surface`, `--surface2`, `--border`, `--warm`, `--text`) for automatic dark/light adaptation. Features Play/Pause, seek/scrub bar, current time/duration, `-15s`/`+15s` skip buttons, and playback speed selector (`1x`, `1.25x`, `1.5x`, `2x`). Conditionally shown on `templates/note-template.html` and automatically injected by `scripts/sync-audio.js` into notes with matching audio files.

---

## 3. Data Flow & Manifest Contract

### 3.1 Metadata Extraction & Audio Resolution Pipeline (`scripts/generate-manifest.js`)
The build script parses all HTML files under `notes/` without parsing the full DOM and resolves matching audio files via `scripts/audio-utils.js`:

```
[ HTML Note File ]                          [ audio/<subject>/ ]
       │                                           │
       ▼  (Regex Pattern Extraction)               ▼  (Auto-detect <id>.mp3/.m4a
<meta name="note-id" content="...">                   or <basename>.mp3/.m4a)
<meta name="note-subject" content="...">           │
<meta name="note-unit" content="...">              │
<meta name="note-tags" content="...">              │
<meta name="note-summary" content="...">           │
<meta name="note-audio" content="..."> (optional)  │
<meta name="note-audio-duration">      (optional)  │
<title>...</title>                                 │
       │                                           │
       └───────────────────┬───────────────────────┘
                           ▼ (Pure-Node MP3/M4A duration fallback)
             [ Canonical JSON Schema Record ]
                           │
                           ▼
                 [ Formatted notes.json ]
```

### 3.2 JSON Schema (`notes.json`)
*(Note: `audioPath`, `audioUrl`, and `audioDuration` are omitted when a note has no audio file yet to preserve backwards compatibility.)*

```json
[
  {
    "id": "dcn-unit2",
    "subject": "DCN",
    "unit": "Unit 2",
    "title": "DCNU2",
    "summary": "Comprehensive examination notes on the OSI 7-Layer Reference Model...",
    "path": "notes/dcn/DCNU2.html",
    "url": "https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU2.html",
    "tags": ["Networking", "OSI", "Reference Model"],
    "audioPath": "audio/dcn/dcn-unit2.mp3",
    "audioUrl": "https://shreyx404.github.io/BatchHub-notes/audio/dcn/dcn-unit2.mp3",
    "audioDuration": "12:30"
  }
]
```

### 3.3 Audio Conversion & Sync Pipeline (`scripts/process-audio.js`, `scripts/sync-audio.js`)
- Uncompressed recordings placed in `audio-raw/` are ignored by Git (`.gitignore` excludes `audio-raw/` and `*.wav`).
- `npm run audio:process` uses `ffmpeg` (`libmp3lame`, `96 kbps`, `44.1 kHz`, mono by default) to convert `.wav` recordings into GitHub-friendly `.mp3` files under `audio/<subject>/`.
- `npm run audio:sync` injects `<meta name="note-audio">`, `<meta name="note-audio-duration">`, and the Audio Note Bar cleanly into every note HTML file that has a corresponding audio file, then rebuilds `notes.json`.

---

## 4. Subject Directory Specification & Academic Mapping

To maintain strict parity with VIT Pune's CSE-IoTCSBT (Pattern A-25) curriculum and BatchHub's database subjects, both `notes/` and `audio/` folder taxonomies are locked:

```
notes/ & audio/
├── biot/     # Basics of IoT (CB2005 - 4 Units; 4/4 Audio MP3s live)
├── dcn/      # Data Communication and Networking (CB2004 - 4 Units)
├── fds/      # Fundamentals of Data Structures (CB2003 - 6 Units)
├── oop/      # Object Oriented Programming (CB2006 - 4 Units: C++ & Java; 2/2 Audio MP3s live)
└── pas/      # Probability and Statistics (MM0501 - 4 Units)
```

| Subject Folder | Course Code | Full Course Title | Total Units | Delivery Method |
|---|---|---|---|---|
| `notes/fds/` | `CB2003` | Fundamentals of Data Structures | 6 Units | Pure HTML5/CSS3 |
| `notes/dcn/` | `CB2004` | Data Communication and Networking | 4 Units | Pure HTML5/CSS3 |
| `notes/biot/` | `CB2005` | Basics of IoT | 4 Units | Pure HTML5/CSS3 |
| `notes/oop/` | `CB2006` | Object Oriented Programming | 4 Units | Pure HTML5/CSS3 |
| `notes/pas/` | `MM0501` | Probability and Statistics | 4 Units | Pure HTML5/CSS3 |

Total Academic Note Scope: **22 Units** (Current: 22/22 units published (20 files) across BIOT (4/4), DCN (4/4), FDS (6/6), OOP (4/4) & PAS (4/4) — CURRICULUM 100% COMPLETE).

---

## 5. Security & Isolation Model

1. **No Backend Exploits**: With no SQL databases, server engines, or Node runtimes in production, attack vectors like SQL injection, SSRF, or remote code execution are completely eliminated.
2. **CSP Compatibility**: All assets are static; styles and scripts are minimal and strictly scoped.
3. **Third-Party Dependency Shield**: Zero npm dependencies exist in the production artifact, mitigating supply-chain attacks.

---

## 6. System Lifecycle & Maintenance Invariant

> **Operational Invariant**:
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
>
> This guarantees that:
> - Architectural documentation never drifts from the physical file structure.
> - The live GitHub Pages deployment is continuously up to date with zero staging lag.
> - Any agent or developer joining the codebase has accurate, verifiable system manuals.
