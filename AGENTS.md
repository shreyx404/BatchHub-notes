# AGENTS.md — Agent & Contributor Operational Manual

> **Scope**: This document defines the operating protocols, architectural invariants, code conventions, and workflows for autonomous AI agents (such as Antigravity, Claude, Copilot) and human contributors modifying or expanding **`BatchHub-notes`**.

---

## 1. System Mission & Core Constraints

`BatchHub-notes` hosts high-performance, distraction-free, standalone academic HTML notes linked directly into **BatchHub** (`https://batch-hub-red.vercel.app/notes`).

### 🔴 Non-Negotiable Invariants
1. **Zero Runtime Frameworks**: NEVER introduce React, Vue, Svelte, Tailwind CSS, or npm runtime dependencies into the notes or portal. All notes must remain pure, standalone HTML5/CSS3.
2. **Deterministic Manifest**: Whenever an HTML note is created, renamed, moved, or deleted, `node scripts/generate-manifest.js` (or `npm run build`) MUST be executed to keep `notes.json` in sync.
3. **Canonical Subjects Only**: The repository strictly mirrors the official VIT Pune CSE-IoTCSBT (Pattern A-25) curriculum subjects:
   - `biot` — Basics of IoT (`CB2005`, 4 Units)
   - `dcn`  — Data Communication and Networking (`CB2004`, 4 Units)
   - `fds`  — Fundamentals of Data Structures (`CB2003`, 6 Units)
   - `oop`  — Object Oriented Programming (`CB2006`, 4 Units: C++ & Java)
   - `pas`  — Probability and Statistics (`MM0501`, 4 Units)
   Do not introduce unauthorized subjects without an approved update to the PRD. Total core syllabus scope is **22 Units**.
4. **Mandatory Metadata Tags**: Every note HTML file MUST include the required `<meta>` tags in its `<head>` for manifest extraction.
5. **Mandatory System Markdown Synchronization & Push**: After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.

---

## 2. Directory Structure Conventions

```
BatchHub-notes/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD: Automated GitHub Pages deployment
├── notes/                        # Subject folders (lowercase codes)
│   ├── biot/                     # Basics of IoT (CB2005 - 4 Units)
│   ├── dcn/                      # Data Communication and Networking (CB2004 - 4 Units)
│   │   ├── DCNU1.html            # Unit 1 Notes (Published)
│   │   └── DCNU2.html            # Unit 2 Notes (Published)
│   ├── fds/                      # Fundamentals of Data Structures (CB2003 - 6 Units)
│   ├── oop/                      # Object Oriented Programming (CB2006 - 4 Units)
│   │   └── OOPU1.html            # Unit 1 Notes (Published)
│   └── pas/                      # Probability and Statistics (MM0501 - 4 Units)
│       ├── PASU1.html            # Unit 1 Notes (Published)
│       └── PASU2.html            # Unit 2 Notes (Published)
├── templates/
│   └── note-template.html        # Gold-standard baseline for new notes
├── scripts/
│   └── generate-manifest.js      # Zero-dependency manifest compiler
├── index.html                    # Master index & portal with live search
├── notes.json                    # Auto-generated index of all notes
├── PRD.md                        # Product Requirements Document
├── ARCHITECTURE.md               # Technical architecture & data flows
├── API.md                        # Manifest schema & integration contracts
├── AGENTS.md                     # This operational manual
├── SYLLABUS.md                   # Academic curriculum & unit reference guide
├── STYLEGUIDE.md                 # Visual design system, CSS tokens & patterns
├── TASKS.md                      # Roadmap, milestones & task backlog
├── CONTRIBUTING.md               # Contributor guidelines & PR protocol
├── CHANGELOG.md                  # Chronological release & revision history
├── README.md                     # Public documentation
└── package.json                  # Scripts (npm run build)
```

---

## 3. Note Authoring Protocol (For Agents Generating Notes)

When instructed to generate notes for a given subject and unit, execute the following procedure:

### Step 1: File Location & Naming
- Subject directory: `notes/<subject_code>/` (e.g., `notes/dcn/`, `notes/fds/`)
- Permitted naming formats:
  - Concise shorthand: `<SUBJECT_CODE_UPPERCASE>U<UNIT_NUMBER>.html` (e.g., `DCNU1.html`, `FDSU1.html`, `OOPU1.html`, `BIOTU1.html`, `PASU1.html`)
  - Descriptive slug: `unit<N>-<topic-slug>.html` (e.g., `unit3-ip-addressing.html`)

### Step 2: Head & Meta Tags Setup
The `<head>` section must define these exact meta tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="note-id"      content="dcn-unit3">
<meta name="note-subject" content="DCN">
<meta name="note-unit"    content="Unit 3">
<meta name="note-tags"    content="Networking, IP Addressing, IPv4, IPv6, Subnetting, CIDR">
<meta name="note-summary" content="Comprehensive notes on IP Addressing: IPv4 classes, subnetting, supernetting, CIDR, and IPv6 representation and auto-configuration.">
<title>Unit III — IP Addressing | DCN Notes</title>
```

### Step 3: Design Tokens & CSS Classes
Use the standardized CSS variable design system defined in `templates/note-template.html`:

```css
:root {
  --bg: #0a0a0a;
  --surface: #111111;
  --surface2: #181818;
  --border: #252525;
  --border2: #2e2e2e;
  --text: #e8e8e8;
  --text-dim: #888;
  --text-dimmer: #444;
  --accent: #f0f0f0;
  --warm: #e8c47c;
  --mono: 'IBM Plex Mono', monospace;
  --sans: 'IBM Plex Sans', sans-serif;
}
```

### Step 4: Component Palette
Always use the standardized components rather than ad-hoc markup:

| Element | HTML Pattern | Best Used For |
|---|---|---|
| **Key Concept** | `<div class="callout key"><div class="callout-label">Key Concept</div><p>...</p></div>` | Core definitions, theorems, golden rules |
| **Study Tip** | `<div class="callout tip"><div class="callout-label">💡 Tip</div><p>...</p></div>` | Mnemonic techniques, calculation shortcuts |
| **Pitfall Warning** | `<div class="callout warning"><div class="callout-label">⚠ Warning</div><p>...</p></div>` | Exam traps, subtle distinctions |
| **Exam Note** | `<div class="callout exam"><div class="callout-label">📝 Exam Note</div><p>...</p></div>` | Weightage, recurring questions |
| **Formula Block** | `<div class="formula">...</div>` | Mathematical formulas and derivations |
| **Comparison Table** | `<div class="table-wrap"><table>...</table></div>` | Protocol comparisons, pros/cons, metrics |
| **Diagram Frame** | `<div class="visual">...<div class="visual-caption">Fig 1.1</div></div>` | ASCII/Flexbox architecture diagrams |

### Step 5: Table of Contents Synchronization
Ensure every `<div class="section" id="...">` has a corresponding link in the `<nav class="sidebar">` TOC:
```html
<nav class="sidebar" id="sidebar">
  <div class="sidebar-brand">
    <a href="../../index.html" class="back-link">← Notes Hub</a>
    <div class="subject">DCN · UNIT 3</div>
    <div class="title">IP Addressing</div>
  </div>
  <div class="nav-section">Contents</div>
  <a href="#section-1">1 · Internet Addressing Mechanics</a>
  <a href="#section-2">2 · IPv4 Classes & Subnetting</a>
</nav>
```

---

## 4. Build, Verification & Sync Workflow

Whenever changes are made to `notes/`:

```bash
# 1. Regenerate notes.json manifest
node scripts/generate-manifest.js
# or
npm run build

# 2. Check git status to verify additions/deletions
git status

# 3. Commit with semantic message
git add .
git commit -m "feat(dcn): add Unit 3 IP Addressing notes"

# 4. Push directly to main (triggers GitHub Pages CI/CD)
git push origin main
```

---

## 5. Verification Checklist for Agents

Before completing any task or reporting back to the user:
- [ ] Has `node scripts/generate-manifest.js` been run?
- [ ] Does `notes.json` contain the note with valid `id`, `subject`, `unit`, `title`, `path`, and `url`?
- [ ] Are all relative links (`../../index.html`) intact in the note sidebar?
- [ ] Does `@media print` exist in the note CSS so students can export to PDF?
- [ ] Are mobile responsive styles present (progress bar, sidebar drawer)?
- [ ] Have all system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) been modified and updated to reflect the latest changes?
- [ ] Is `git status` clean and has the entire codebase been pushed to GitHub `main`?
