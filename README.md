# BatchHub Notes Archive

Static HTML notes repository for **[BatchHub](https://batch-hub-red.vercel.app)** — deployed automatically to GitHub Pages.

**Live Archive**: [https://shreyx404.github.io/BatchHub-notes/](https://shreyx404.github.io/BatchHub-notes/)  
**Main Portal**: [https://batch-hub-red.vercel.app/notes](https://batch-hub-red.vercel.app/notes)

---

## 📁 Repository Structure

```
BatchHub-notes/
├── .github/workflows/deploy.yml   ← Auto-deploy to GitHub Pages on push to main
├── notes/                         ← Subject folders (mirrors BatchHub database)
│   ├── biot/                      ← Basics of Internet of Things
│   ├── dcn/                       ← Data Communication & Networks
│   │   ├── DCNU1.html             ← Unit 1: Introduction to Data Communication
│   │   └── DCNU2.html             ← Unit 2: OSI 7-Layer Reference Model
│   ├── fds/                       ← Fundamentals of Data Science
│   ├── oop/                       ← Object-Oriented Programming
│   └── pas/                       ← Probability and Statistics
├── templates/note-template.html   ← Reusable editorial note template
├── scripts/generate-manifest.js   ← Scans notes/ and compiles notes.json
├── index.html                     ← Standalone index portal with live search
├── notes.json                     ← Auto-generated manifest of all notes
├── PRD.md                         ← Product Requirements Document
├── AGENTS.md                      # Agent & Contributor Operational Manual
├── TASKS.md                       # Milestones, task checklist & roadmap
├── ARCHITECTURE.md                # System architecture & integration flows
└── package.json                   ← Build script (npm run build)
```

---

## 🚀 System Documentation

- 📘 **[PRD.md](PRD.md)** — Detailed Product Requirements Document covering ecosystem fit, functional specifications, and design criteria.
- 🤖 **[AGENTS.md](AGENTS.md)** — Operational manual, invariants, CSS tokens, and step-by-step instructions for AI agents and human contributors authoring new notes.
- 📋 **[TASKS.md](TASKS.md)** — Complete project roadmap, unit-by-unit curriculum backlog, and enhancement tracker.
- 🏛️ **[ARCHITECTURE.md](ARCHITECTURE.md)** — Architecture diagrams, data flow between BatchHub and GitHub Pages, and manifest extraction engine specs.

---

## ⚡ Quick Start

### 1. Enable GitHub Pages (One-Time Setup)

1. Go to **[Repository Settings → Pages](https://github.com/shreyx404/BatchHub-notes/settings/pages)**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every push to `main` now automatically builds and publishes the notes within ~30 seconds.

### 2. Generate Manifest Locally

The repository has zero external dependencies — it uses native Node.js:

```bash
npm run build
# or: node scripts/generate-manifest.js
```

---

## 📝 Adding a New Note

### Step 1: Duplicate the template

```bash
# Example: Creating Unit 3 for DCN
cp templates/note-template.html notes/dcn/DCNU3.html
```

> **Naming Convention**: You can use `<SUBJECT>U<N>.html` (e.g. `DCNU3.html`, `FDSU1.html`) or slug format (`unit3-tcp-ip.html`).

### Step 2: Configure `<meta>` tags in `<head>`

```html
<meta name="note-id"      content="dcn-unit3">
<meta name="note-subject" content="DCN">
<meta name="note-unit"    content="Unit 3">
<meta name="note-tags"    content="Networking, TCP, UDP, Transport Layer">
<meta name="note-summary" content="Complete guide to Transport Layer protocols, flow control, and TCP 3-way handshake.">
<title>Unit III — Transport Layer Protocols | DCN Notes</title>
```

### Step 3: Write content using standardized components

The template includes predefined components with dark editorial styling:

```html
<!-- Key Concept -->
<div class="callout key">
  <div class="callout-label">Key Concept</div>
  <p>Fundamental rule or definition.</p>
</div>

<!-- Study Tip -->
<div class="callout tip">
  <div class="callout-label">💡 Tip</div>
  <p>Helpful shortcut or mnemonic.</p>
</div>

<!-- Warning -->
<div class="callout warning">
  <div class="callout-label">⚠ Warning</div>
  <p>Common pitfall or exam misconception.</p>
</div>

<!-- Exam Note -->
<div class="callout exam">
  <div class="callout-label">📝 Exam Note</div>
  <p>Frequently tested 5/10 mark questions.</p>
</div>
```

### Step 4: Update Manifest, Sync System Markdowns & Push

> ⚡ **Golden Operating Rule**:
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**

```bash
npm run build        # Synchronizes notes.json
# Update all system markdowns (TASKS.md, PRD.md, etc.)
git add .
git commit -m "feat: your update description and system docs sync"
git push origin main
```

---

## 🔗 Adding Notes to BatchHub

1. Visit the [Notes Archive](https://shreyx404.github.io/BatchHub-notes/).
2. Locate the note and click **"Copy Link"** (copies canonical URL to clipboard with toast confirmation).
3. In BatchHub, navigate to **Admin Dashboard** (`/admin/notes`).
4. Select the Subject (e.g., *Data Communication & Networks*), enter the title, paste the copied URL, and click **Save Note**.
5. The note instantly appears in the student gallery under [`https://batch-hub-red.vercel.app/notes`](https://batch-hub-red.vercel.app/notes)!

---

## 📂 Official Subject Codes

| Code | Subject Title | Directory |
|---|---|---|
| `biot` | Basics of Internet of Things | `notes/biot/` |
| `dcn` | Data Communication & Networks | `notes/dcn/` |
| `fds` | Fundamentals of Data Science | `notes/fds/` |
| `oop` | Object-Oriented Programming | `notes/oop/` |
| `pas` | Probability and Statistics | `notes/pas/` |

---

## License

MIT © [shreyx404](https://github.com/shreyx404)
