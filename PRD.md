# Product Requirements Document (PRD)

## Project: BatchHub Notes Archive (`BatchHub-notes`)

**Host Repository**: `https://github.com/shreyx404/BatchHub-notes`  
**Deployment Target**: `https://shreyx404.github.io/BatchHub-notes/`  
**Consumer Platform**: **BatchHub** (`https://batch-hub-red.vercel.app/notes`)  
**Status**: Active / Production Ready  
**Version**: 1.6.2  

---

## 1. Executive Summary & Problem Statement

### 1.1 Background
**BatchHub** is an academic management and student cohort portal for VIT Pune engineering students. A primary feature of BatchHub is the `/notes` module, which categorizes, organizes, and displays notes across core curriculum subjects.

### 1.2 The Problem
Traditional academic note distribution relies on bulky PDFs, disparate Google Drive links, or bloated Notion/Word exports. These solutions suffer from:
- **High latency & bandwidth consumption**: PDFs take seconds to download and render on mobile connections.
- **Poor mobile readability**: Multi-column PDFs force horizontal panning and zooming.
- **Lack of embeddability**: Sandboxing PDF viewers or Notion embeds in student dashboards is sluggish and inconsistent across browsers.
- **Subpar print fidelity**: Web exports often break layout, tables, and diagrams when printed for revision.
- **Disjointed ecosystem**: No automated registry linking notes directly to the BatchHub administrative database.

### 1.3 The Solution: BatchHub-notes
A zero-overhead, ultra-fast, static HTML note hosting engine deployed on **GitHub Pages**. 
- Delivers complete, beautifully typeset academic notes in under **50ms**.
- Uses an editorial dark-mode aesthetic built with vanilla HTML5 and CSS3 (no JavaScript framework runtime).
- Exposes a centralized JSON manifest (`notes.json`) generated automatically via Node.js CLI.
- Provides a standalone master index portal with live search, subject filtering, and a one-click **"Copy Link for BatchHub"** clipboard utility designed specifically for `/admin/notes` workflow.

---

## 2. Target Audience & Stakeholders

| Stakeholder | Role | Primary Goal |
|---|---|---|
| **Students (VIT Pune — CSE-IoTCSBT)** | End consumers via BatchHub or direct link | Read distraction-free technical notes on mobile/desktop, search topics quickly, and print clean cheat-sheets. |
| **BatchHub Admin** | Note curator & administrator | Ingest notes into BatchHub via `/admin/notes` in seconds without dealing with file uploads or cloud storage buckets. |
| **Content Contributors & AI Agents** | Note authors | Write or port notes using a standardized template with predefined callout boxes, diagrams, and metadata tags aligned with the syllabus. |

---

## 3. Academic Curriculum & Subject Taxonomy

The repository strictly mirrors the official **Vishwakarma Institute of Technology (VIT Pune)** curriculum:
- **Department**: Computer Science & Engineering (IoT & Cyber Security Including Block Chain Technology) [CSE-IoTCSBT]
- **Pattern**: Pattern 'A-25' · **Level**: Second Year (S.Y. B.Tech.) · **A.Y.**: 2025–26 / 2026–27

### 3.1 Core Technical Subjects (Primary Note Archive)

| Subject Code | Folder | Course Code | Full Subject Title | Teaching Scheme (Th/Lab/Tut) | Credits | Total Units |
|---|---|---|---|---|---|---|
| **`fds`** | `notes/fds/` | `CB2003` | **Fundamentals of Data Structures** | 3 / 2 / 0 | 4 | **6 Units** |
| **`dcn`** | `notes/dcn/` | `CB2004` | **Data Communication and Networking** | 2 / 0 / 1 | 3 | **4 Units** |
| **`biot`** | `notes/biot/` | `CB2005` | **Basics of IoT** | 2 / 2 / 0 | 3 | **4 Units** |
| **`oop`** | `notes/oop/` | `CB2006` | **Object Oriented Programming** | 1 / 2 / 0 | 3 | **4 Units** (C++ & Java) |
| **`pas`** | `notes/pas/` | `MM0501` | **Probability and Statistics** | 2 / 0 / 1 | 3 | **4 Units** |

**Total Core Note Scope**: **22 Units** across 5 subjects.

### 3.2 Ancillary Curriculum Modules (Reference Only)
- `HS2002`: From Campus to Corporate - 1 (2 Credits)
- `HS2001`: Reasoning and Aptitude Development - 3 (1 Credit)
- `CB2001` / `IR2101`: Design Thinking - 1 (1 Credit)
- `CB2002` / `ML2002` / `IR2102`: Engineering Design and Innovation - 1 (2 Credits)

---

## 4. System Architecture & Ecosystem Integration

```
┌────────────────────────────────────────────────────────────────────────┐
│                          BatchHub Ecosystem                            │
├───────────────────────────────┬────────────────────────────────────────┤
│   BatchHub Main App           │   BatchHub Notes Engine                │
│   (Next.js on Vercel)         │   (Static GitHub Pages)                │
│   https://batch-hub-red.vercel│   https://shreyx404.github.io/         │
│   .app/notes                  │   BatchHub-notes/                      │
│                               │                                        │
│  ┌─────────────────────────┐  │  ┌──────────────────────────────────┐  │
│  │ Notes Dashboard         │  │  │ Master Index Portal (index.html) │  │
│  │ (Subject cards & lists) │  │  │ - Instant Search & Filter Pills  │  │
│  └────────────▲────────────┘  │  │ - "Copy Link for BatchHub"       │  │
│               │               │  └──────────────────┬───────────────┘  │
│  ┌────────────┴────────────┐  │                     │                  │
│  │ Admin Portal            │◄─┼─────────────────────┘                  │
│  │ (/admin/notes)          │  │  (Admins copy generated note URLs)     │
│  │ - Select Subject        │  │                                        │
│  │ - Paste Note URL        │  │  ┌──────────────────────────────────┐  │
│  │ - Instant publish       │──┼─►│ Standalone HTML Notes            │  │
│  └─────────────────────────┘  │  │ - notes/dcn/DCNU1.html, DCNU2    │  │
│                               │  │ - notes/oop/OOPU1.html           │  │
│                               │  │ - notes/pas/PASU1.html, PASU2    │  │
│                               │  │ - Sticky TOC, Callouts, Print CSS│  │
│                               │  └──────────────────────────────────┘  │
└───────────────────────────────┴────────────────────────────────────────┘
```

### 4.1 Integration Flow
1. Contributor writes or updates an HTML note in `notes/<subject>/`.
2. Contributor runs `npm run build` to synchronize `notes.json`.
3. Changes are pushed to `main`. GitHub Actions automatically verifies and deploys to GitHub Pages in ~25 seconds.
4. The admin visits `https://shreyx404.github.io/BatchHub-notes/`, clicks **"Copy Link"** on the note card.
5. In BatchHub Admin (`/admin/notes`), the admin creates a note entry under the respective subject (e.g. *Data Communication and Networking*) and pastes the URL.
6. BatchHub links directly to the hosted note for all batch students.

---

## 5. Functional Requirements (FR)

### FR-1: Master Index Portal (`index.html`)
- **Hero Display**: Displays archive branding, subtitle, live note counter badge.
- **Search Engine**: Real-time client-side filter searching across `title`, `subject`, `unit`, `summary`, and `tags`.
- **Subject Filter Pills**: Dynamic buttons allowing one-click filtering by subject code (`All`, `DCN`, `FDS`, `OOP`, `BIOT`, `PAS`).
- **Card Ledger Grid**: Render cards containing:
  - Subject code badge & Unit designation
  - Title and descriptive summary
  - Keyword tag pills
  - Primary button: "Read Notes" (opens in new tab)
  - Secondary button: "Copy Link" (copies canonical GitHub Pages URL with animated toast notification)
- **Zero Framework Footprint**: Built with vanilla ES6 and scoped CSS.

### FR-2: Automated Manifest Pipeline (`scripts/generate-manifest.js`)
- Recursively scans `notes/` directory for `.html` files.
- Extracts standard metadata via regular expressions from HTML `<meta>` and `<title>` tags:
  - `note-id`: Unique alphanumeric identifier
  - `note-subject`: Subject identifier (e.g., `DCN`, `FDS`, `OOP`, `BIOT`, `PAS`)
  - `note-unit`: Unit number (e.g., `Unit 2`)
  - `note-tags`: Comma-delimited keywords
  - `note-summary`: High-level summary of covered concepts
  - `<title>`: Full browser title
- Generates `notes.json` formatted with consistent indentation and sorted by subject and unit.
- Zero external npm runtime dependencies (uses Node.js built-in `fs` and `path`).

### FR-3: Standardized Editorial Note Template & Responsive Architecture (`templates/note-template.html`)
- **Reading Progress Bar**: Subtle accent bar fixed to top viewport edge showing percentage scrolled.
- **Cross-Device Table of Contents (TOC)**:
  - Desktop (>1024px): Fixed sidebar (260px) with smooth scroll tracking and active link indicator.
  - Tablet (641px–1024px): Optimized layout margins with adaptive sidebar or drawer mode.
  - Mobile (<640px down to 320px): Floating toggle button (`.menu-btn` / `.toc-toggle`) with full off-canvas drawer and backdrop scrim overlay (`.scrim`). Automatically closes when links or backdrop are clicked.
- **Universal Responsive Table & Math Blocks**:
  - All data comparison tables, frequency distributions, and formula blocks wrapped or styled with `display: block; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;` to eliminate horizontal page scroll blowouts on small screens.
- **Fluid Typography**: Uses `clamp()` for responsive headings to prevent text clipping and excessive wrapping on narrow mobile screens.
- **Mobile Touch Usability**: Ensures min 40–44px touch targets on all buttons and pills; search inputs enforce `font-size: 16px` on mobile to eliminate iOS Safari viewport auto-zooming.
- **Callout Box System**:
  - `callout key`: Core concepts & definitions (Warm gold theme)
  - `callout tip`: Practical study tips & shortcuts (Emerald green theme)
  - `callout warning`: Common traps & misconceptions (Amber orange theme)
  - `callout exam`: High-frequency exam questions & marks weightage (Indigo theme)
- **Technical Typography**: IBM Plex Sans (body) + IBM Plex Mono (code, metadata, formulas, tables).
- **Print Optimization (`@media print`)**: Automatically strips sidebar, toggle buttons, and progress bar. Inverts colors to high-contrast monochrome with clean page breaks for physical printing and PDF export.

### FR-4: CI/CD Pipeline (`.github/workflows/deploy.yml`)
- Triggered on push to `main` branch or manual dispatch.
- Uses official GitHub actions: `checkout@v4`, `configure-pages@v5`, `upload-pages-artifact@v3`, `deploy-pages@v4`.
- Auto-deploys repository contents directly to GitHub Pages environment.

---

## 6. Non-Functional Requirements (NFR)

| Metric | Target | Verification Method |
|---|---|---|
| **First Contentful Paint (FCP)** | < 250ms on 4G mobile | Chrome DevTools Lighthouse Audit |
| **Page Weight per Note** | < 120KB (including inline SVGs/styles) | Network tab inspection |
| **External Dependencies** | 0 JavaScript packages; 1 Google Fonts stylesheet | Package audit |
| **Browser Compatibility** | Chrome, Edge, Safari, Firefox, iOS Safari, Android Chrome | Cross-browser testing |
| **Print Output** | Zero clipped tables, readable 11pt type, black-and-white ink efficiency | Print Preview / PDF Export |
| **Uptime & Reliability** | 99.99% backed by GitHub Pages Global CDN | Cloud status monitoring |

---

## 7. Security & Privacy Considerations
- **Static Delivery**: No server-side scripting, eliminating SQL injection, RCE, and server SSR exploits.
- **No Third-Party Tracking**: No analytics scripts, cookies, or trackers injected into student notes.
- **CORS & Framing Policy**: Open for safe embedding or referencing across the `batch-hub-red.vercel.app` origin.

---

## 8. Success Metrics & KPIs
1. **Adoption**: 100% of curriculum units (22 units total across 5 core subjects) hosted and linked into BatchHub (Current: 5/22 units, 22.7% published across DCN, OOP, and PAS).
2. **Admin Efficiency**: Less than 15 seconds to grab a link and register a new note into BatchHub's admin console.
3. **Student Satisfaction**: Near-zero load time, high readability during exam preparation, clean single-click printable PDF notes.

---

## 9. Operational Invariant & Maintenance Protocol
- **Continuous Documentation Synchronization**: After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state.
- **Immediate Deployment**: Push the entire codebase to GitHub `main` immediately following verification to trigger the automated GitHub Pages deployment pipeline.
