# BatchHub Notes Archive

Static HTML notes repository for **[BatchHub](https://batch-hub-red.vercel.app)** — deployed automatically to GitHub Pages. Engineered for pure distraction-free reading with seamless responsive design across Mobile, Tablet, and Desktop devices.

**Live Archive**: [https://shreyx404.github.io/BatchHub-notes/](https://shreyx404.github.io/BatchHub-notes/)  
**Main Portal**: [https://batch-hub-red.vercel.app/notes](https://batch-hub-red.vercel.app/notes)  
**Academic Curriculum**: Vishwakarma Institute of Technology (VIT Pune) · S.Y. B.Tech (CSE-IoTCSBT) · Pattern A-25  

---

## 📁 Repository Structure

```
BatchHub-notes/
├── .github/workflows/deploy.yml   ← Auto-deploy to GitHub Pages on push to main
├── notes/                         ← Subject folders (mirrors BatchHub database)
│   ├── biot/                      ← Basics of IoT (CB2005 - 4 Units)
│   ├── dcn/                       ← Data Communication and Networking (CB2004 - 4 Units)
│   │   ├── DCNU1.html             ← Unit 1: Data communication and its components
│   │   └── DCNU2.html             ← Unit 2: OSI 7-Layer Reference Model
│   ├── fds/                       ← Fundamentals of Data Structures (CB2003 - 6 Units)
│   ├── oop/                       ← Object Oriented Programming (CB2006 - 4 Units: C++ & Java)
│   │   └── OOPU1.html             ← Unit 1: Introduction to OOP with C++
│   └── pas/                       ← Probability and Statistics (MM0501 - 4 Units)
│       ├── PASU1.html             ← Unit 1: Descriptive Statistics & Visualizations
│       └── PASU2.html             ← Unit 2: Probability Basics & Distributions
├── templates/note-template.html   ← Reusable editorial note template
├── scripts/generate-manifest.js   ← Scans notes/ and compiles notes.json
├── index.html                     ← Standalone index portal with live search
├── notes.json                     ← Auto-generated manifest of all notes
├── PRD.md                         ← Product Requirements Document
├── ARCHITECTURE.md                ← System architecture & integration flows
├── API.md                         ← Manifest schema & BatchHub integration contract
├── AGENTS.md                      ← Agent & Contributor Operational Manual
├── SYLLABUS.md                    ← Academic curriculum & unit reference guide
├── STYLEGUIDE.md                  ← Visual design system, CSS tokens & editorial rules
├── TASKS.md                       ← Roadmap, unit completion backlog & milestones
├── CONTRIBUTING.md                ← Contributor guidelines & pull request protocol
├── CHANGELOG.md                   ← Version history & release notes
├── README.md                      ← Repository overview & public guide
└── package.json                   ← Build script (npm run build)
```

---

## 🚀 System Documentation Suite

| Document | Purpose & Contents |
|---|---|
| 📘 **[PRD.md](PRD.md)** | Product Requirements: Ecosystem fit, target personas, functional requirements, and NFRs. |
| 🏛️ **[ARCHITECTURE.md](ARCHITECTURE.md)** | Technical Architecture: System data flow, GitHub Pages CDN, manifest parser, and security model. |
| 🔌 **[API.md](API.md)** | Integration Contract: `notes.json` schema, URL patterns, iframe embedding, and BatchHub admin interfaces. |
| 🤖 **[AGENTS.md](AGENTS.md)** | Agent Operating Manual: Operational rules, metadata protocols, CSS token dictionary, and verification checklists. |
| 📚 **[SYLLABUS.md](SYLLABUS.md)** | Curriculum Ground Truth: Unit-by-unit syllabus, textbooks, derivations, and exam question weightage for all 5 subjects. |
| 🎨 **[STYLEGUIDE.md](STYLEGUIDE.md)** | Visual & Editorial Guide: CSS variables, typography hierarchy, UI component palette (callouts, formulas, tables, diagrams). |
| 📋 **[TASKS.md](TASKS.md)** | Roadmap & Backlog: Milestone status across Phases 1–5, curriculum unit completion tracker, and enhancements. |
| 🤝 **[CONTRIBUTING.md](CONTRIBUTING.md)** | Contributor Protocol: Branching conventions, step-by-step authoring workflow, commit message standards. |
| 📜 **[CHANGELOG.md](CHANGELOG.md)** | Release History: SemVer releases, additions, deprecations, and structural upgrades. |

---

## 📂 Official Curriculum Matrix (VIT Pattern A-25)

The repository hosts notes for the 5 core technical courses in the Second Year (S.Y. B.Tech) CSE-IoTCSBT curriculum:

| Folder Code | Course Code | Full Course Title | Teaching Scheme | Credits | Scope | Notes Status |
|---|---|---|---|---|---|---|
| **`fds`** | `CB2003` | **Fundamentals of Data Structures** | 3 Th / 2 Lab | 4 | **6 Units** | 0/6 Units |
| **`dcn`** | `CB2004` | **Data Communication and Networking** | 2 Th / 1 Tut | 3 | **4 Units** | 🟡 2/4 Units (50%) |
| **`biot`** | `CB2005` | **Basics of IoT** | 2 Th / 2 Lab | 3 | **4 Units** | 0/4 Units |
| **`oop`** | `CB2006` | **Object Oriented Programming** | 1 Th / 2 Lab | 3 | **4 Units** | 🟡 1/4 Units (25%) |
| **`pas`** | `MM0501` | **Probability and Statistics** | 2 Th / 1 Tut | 3 | **4 Units** | 🟡 2/4 Units (50%) |
 
**Total Academic Scope**: **22 Units** (5 published, 17 planned).

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

> **Naming Convention**: Use `<SUBJECT>U<N>.html` (e.g. `DCNU3.html`, `FDSU1.html`) or slug format (`unit3-ip-addressing.html`).

### Step 2: Configure `<meta>` tags in `<head>`

```html
<meta name="note-id"      content="dcn-unit3">
<meta name="note-subject" content="DCN">
<meta name="note-unit"    content="Unit 3">
<meta name="note-tags"    content="Networking, IP Addressing, Subnetting, IPv4, IPv6">
<meta name="note-summary" content="Complete guide to IP addressing, classful routing, subnetting, CIDR, and IPv6.">
<title>Unit III — IP Addressing | DCN Notes</title>
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
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**

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
4. Select the Subject (e.g., *Data Communication and Networking*), enter the title, paste the copied URL, and click **Save Note**.
5. The note instantly appears in the student gallery under [`https://batch-hub-red.vercel.app/notes`](https://batch-hub-red.vercel.app/notes)!

---

## License

MIT © [shreyx404](https://github.com/shreyx404)
