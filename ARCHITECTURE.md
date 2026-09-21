# System Architecture (`ARCHITECTURE.md`)

## 1. High-Level Architecture Overview

**`BatchHub-notes`** is designed as a decoupled, zero-maintenance static content layer powering the academic notes section of the **BatchHub** web platform.

```
+-------------------------------------------------------------------------+
|                          DEVELOPMENT WORKFLOW                           |
|                                                                         |
|  +--------------------+        +---------------------+                  |
|  | Author HTML Note   |        | Run Generator       |                  |
|  | (notes/<sub/file>) | -----> | (generate-manifest) |                  |
|  +--------------------+        +----------+----------+                  |
|                                           |                             |
|                                           v                             |
|                                 +--------------------+                  |
|                                 | Updated notes.json |                  |
|                                 +---------+----------+                  |
|                                           |                             |
|                                           v                             |
|                                 +--------------------+                  |
|                                 | Update System MDs  |                  |
|                                 | (PRD, AGENTS, etc) |                  |
|                                 +---------+----------+                  |
+-------------------------------------------|-----------------------------+
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
| Master Portal      |  | Standalone Note Pages                           |
| (index.html)       |  | (notes/dcn/DCNU1.html, notes/oop/OOPU1.html, etc)|
| - Live search      |  | - Sticky Sidebar TOC                            |
| - Filter pills     |  | - Reading progress indicator                    |
| - Copy Link utility|  | - Print-optimized stylesheet                    |
+---------+----------+  +------------------------+------------------------+
          |                                      ^
          | Admin copies URL                     |
          v                                      |
+------------------------------------------------+------------------------+
|                      BATCHHUB MAIN APPLICATION                         |
|                 (https://batch-hub-red.vercel.app)                     |
|                                                                         |
|  +---------------------------+       +-------------------------------+  |
|  | Admin Portal              | ----> | Student Notes Dashboard       |  |
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
  - Generates subject filter pills dynamically based on available subjects in `notes.json`.
- **Admin Clipboard Utility**:
  - Automatically computes canonical URLs: `https://shreyx404.github.io/BatchHub-notes/<path>`.
  - Uses `navigator.clipboard.writeText()` with interactive animated toast notifications.

### 2.3 Standalone Note Documents
Each note is an independent, single-file HTML document requiring zero external script bundles:
- **Head Assets**: Preconnected to Google Fonts (`IBM Plex Sans` & `IBM Plex Mono`).
- **Internal Styles**: Self-contained CSS utilizing CSS variables for theme consistency.
- **Progress Tracking**: Tiny vanilla JavaScript scroll listener updates the top progress bar.
- **Active Heading Observer**: Computes bounding rects to highlight current section in the sidebar TOC.
- **Mobile Drawer**: Toggleable sliding sidebar for smaller viewports.
- **Print Styles**: `@media print` directives to convert dark mode to high-contrast ink-efficient monochrome layout.

---

## 3. Data Flow & Manifest Contract

### 3.1 Metadata Extraction Pipeline (`scripts/generate-manifest.js`)
The build script parses all HTML files under `notes/` without parsing the full DOM:

```
[ HTML Note File ]
       │
       ▼  (Regex Pattern Extraction)
<meta name="note-id" content="...">
<meta name="note-subject" content="...">
<meta name="note-unit" content="...">
<meta name="note-tags" content="...">
<meta name="note-summary" content="...">
<title>...</title>
       │
       ▼
[ Canonical JSON Schema Record ]
       │
       ▼
[ Formatted notes.json ]
```

### 3.2 JSON Schema (`notes.json`)
```json
[
  {
    "id": "dcn-unit1",
    "subject": "DCN",
    "unit": "Unit 1",
    "title": "DCN Unit I — Complete Notes",
    "summary": "Complete introduction to Data Communication & Networks...",
    "path": "notes/dcn/DCNU1.html",
    "url": "https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU1.html",
    "tags": ["Networking", "Data Communication", "Fundamentals", "Signals", "Transmission"]
  }
]
```

---

## 4. Subject Directory Specification & Academic Mapping

To maintain strict parity with VIT Pune's CSE-IoTCSBT (Pattern A-25) curriculum and BatchHub's database subjects, the folder taxonomy is locked:

```
notes/
├── biot/     # Basics of IoT (CB2005 - 4 Units)
├── dcn/      # Data Communication and Networking (CB2004 - 4 Units)
├── fds/      # Fundamentals of Data Structures (CB2003 - 6 Units)
├── oop/      # Object Oriented Programming (CB2006 - 4 Units: C++ & Java)
└── pas/      # Probability and Statistics (MM0501 - 4 Units)
```

| Subject Folder | Course Code | Full Course Title | Total Units | Delivery Method |
|---|---|---|---|---|
| `notes/fds/` | `CB2003` | Fundamentals of Data Structures | 6 Units | Pure HTML5/CSS3 |
| `notes/dcn/` | `CB2004` | Data Communication and Networking | 4 Units | Pure HTML5/CSS3 |
| `notes/biot/` | `CB2005` | Basics of IoT | 4 Units | Pure HTML5/CSS3 |
| `notes/oop/` | `CB2006` | Object Oriented Programming | 4 Units | Pure HTML5/CSS3 |
| `notes/pas/` | `MM0501` | Probability and Statistics | 4 Units | Pure HTML5/CSS3 |

Total Academic Note Scope: **22 Units** (Current: 5 published across DCN, OOP & PAS).

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
