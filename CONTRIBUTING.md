# Contributing Guide (`CONTRIBUTING.md`)

Welcome to the **BatchHub Notes Archive** (`BatchHub-notes`)! This repository hosts static HTML notes for the VIT Pune student batch and directly powers the notes module in [BatchHub](https://batch-hub-red.vercel.app).

Whether you are authoring a new unit note, fixing an academic typo, or enhancing visual diagrams, this guide outlines the workflow and quality standards required for your contributions.

---

## 1. Core Principles

1. **Pure Static Stack**: Do not introduce build frameworks (React, Vue, Vite, Tailwind CSS, or npm runtime dependencies). Notes must remain single, standalone HTML5/CSS3 files.
2. **Deterministic Manifest**: Whenever a note is added, renamed, or modified, run `npm run build` to keep `notes.json` synchronized.
3. **Canonical Subjects Only**: Stick strictly to the 5 official curriculum subjects (VIT Pune CSE-IoTCSBT Pattern A-25):
   - `biot` — Basics of IoT (`CB2005`, 4 Units)
   - `dcn`  — Data Communication and Networking (`CB2004`, 4 Units)
   - `fds`  — Fundamentals of Data Structures (`CB2003`, 6 Units)
   - `oop`  — Object Oriented Programming (`CB2006`, 4 Units: C++ & Java)
   - `pas`  — Probability and Statistics (`MM0501`, 4 Units)
4. **Mandatory System Markdown Synchronization**: Every pull request or task MUST update the system markdown suite (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) and push all changes.

---

## 2. Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Clone the Repository
```bash
git clone https://github.com/shreyx404/BatchHub-notes.git
cd BatchHub-notes
```

*(Note: There are no npm packages to install! Zero dependencies.)*

---

## 3. Step-by-Step Note Authoring Workflow

### Step 1: Branch Creation
Create a descriptive feature branch:
```bash
git checkout -b feat/dcn-unit3-notes
```

### Step 2: Duplicate the Golden Template
Copy the standardized template into the target subject folder:
```bash
# Example: Adding Unit 3 for DCN
cp templates/note-template.html notes/dcn/DCNU3.html
```

> **Permitted Naming Formats**:
> - Shorthand: `<SUBJECT>U<N>.html` (e.g. `DCNU3.html`, `FDSU2.html`, `OOPU1.html`)
> - Descriptive slug: `unit3-tcp-ip.html`

### Step 3: Populate Required `<meta>` Tags in `<head>`
```html
<meta name="note-id"      content="dcn-unit3">
<meta name="note-subject" content="DCN">
<meta name="note-unit"    content="Unit 3">
<meta name="note-tags"    content="Networking, TCP, UDP, Transport Layer">
<meta name="note-summary" content="Complete guide to Transport Layer protocols, sliding window flow control, and TCP 3-way handshake.">
<title>Unit III — Transport Layer Protocols | DCN Notes</title>
```

### Step 4: Author the Academic Content
- Adhere strictly to the unit scope outlined in [`SYLLABUS.md`](SYLLABUS.md).
- Use the standardized UI components described in [`STYLEGUIDE.md`](STYLEGUIDE.md):
  - `<div class="callout key">` for definitions
  - `<div class="callout tip">` for study tips and mnemonics
  - `<div class="callout warning">` for common misconceptions
  - `<div class="callout exam">` for recurring exam questions
  - `<div class="table-wrap">` for all comparison tables
  - `<div class="formula">` for mathematical derivations

### Step 5: Test Locally in Your Browser
- Open `index.html` in your browser to verify search and copy-link functionality.
- Open your note directly (e.g. `file:///.../notes/dcn/DCNU3.html`).
- Test responsiveness by resizing browser window to mobile dimensions.
- Press `Ctrl + P` (Print Preview) to verify clean black-and-white print styling.

### Step 6: Regenerate the Manifest
```bash
npm run build
# or: node scripts/generate-manifest.js
```
Verify that `notes.json` reflects your new note with all metadata populated (currently tracking 4 published units across DCN and PAS).

### Step 7: Update System Markdowns
- Update [`TASKS.md`](TASKS.md) to mark the unit as complete.
- Update [`CHANGELOG.md`](CHANGELOG.md) with your version additions.
- Ensure all other system markdowns remain synchronized.

---

## 4. Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

| Type | Purpose | Example |
|---|---|---|
| `feat` | New note or major portal feature | `feat(dcn): add Unit 3 Transport Layer notes` |
| `fix` | Correcting typos, formula errors, or broken links | `fix(dcn): correct Shannon capacity formula in Unit 1` |
| `docs` | Updating system markdown files | `docs: update SYLLABUS.md and TASKS.md for FDS units` |
| `style` | Layout, CSS, or typography enhancements | `style: improve table wrap padding on mobile viewports` |
| `refactor` | Renaming files or reorganizing asset paths | `refactor(oop): standardize file naming to OOPU1.html` |

---

## 5. Contributor Verification Checklist

Before submitting your pull request or committing to `main`:

- [ ] Does the note contain all mandatory `<meta>` tags (`note-id`, `note-subject`, `note-unit`, `note-tags`, `note-summary`)?
- [ ] Does `npm run build` run without errors and produce valid JSON in `notes.json`?
- [ ] Does the sidebar TOC link correctly to all section anchors (`#section-1`, `#section-2`, etc.)?
- [ ] Does `@media print` render cleanly in Print Preview without background fills or clipped tables?
- [ ] Have all system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) been updated?
- [ ] Is `git status` clean and ready for push?

---

## 6. Operational Rule for All Contributors & Agents

> ⚡ **Mandatory Synchronization Invariant**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
