# API & Integration Contract (`API.md`)

> **Scope**: This document specifies the data contracts, JSON schemas, URL resolution rules, and iframe embedding interfaces between **`BatchHub-notes`** and the consumer web platform **BatchHub** (`https://batch-hub-red.vercel.app`).

---

## 1. Integration Model Overview

BatchHub integrates with `BatchHub-notes` through a decoupled static architecture:

```
┌───────────────────────────┐                ┌───────────────────────────────┐
│     BatchHub Frontend     │                │       BatchHub-notes          │
│ (batch-hub-red.vercel.app)│                │ (shreyx404.github.io/         │
│                           │                │  BatchHub-notes)              │
│  ┌─────────────────────┐  │                │                               │
│  │ Notes Client Page   │──┼──HTTP GET──────┼─► notes.json (Manifest)       │
│  │ (/notes?subject=...)│  │   (JSON Fetch) │                               │
│  └──────────┬──────────┘  │                │                               │
│             │             │                │                               │
│             │ Render      │                │                               │
│             ▼             │                │                               │
│  ┌─────────────────────┐  │                │                               │
│  │ Direct Tab Link OR  │──┼──HTTP GET──────┼─► notes/<sub/file>.html       │
│  │ Responsive <iframe> │  │   (Render HTML)│                               │
│  └─────────────────────┘  │                │                               │
└───────────────────────────┘                └───────────────────────────────┘
```

---

## 2. Manifest Schema (`notes.json`)

The central manifest is located at the root of the deployment:
`https://shreyx404.github.io/BatchHub-notes/notes.json`

### 2.1 JSON Schema Definition

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "BatchHubNotesManifest",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "subject", "unit", "title", "summary", "path", "url", "tags"],
    "properties": {
      "id": {
        "type": "string",
        "description": "Globally unique alphanumeric identifier (e.g. dcn-unit1, fds-unit2)"
      },
      "subject": {
        "type": "string",
        "enum": ["BIOT", "DCN", "FDS", "OOP", "PAS"],
        "description": "Uppercase curriculum subject code"
      },
      "unit": {
        "type": "string",
        "description": "Formatted unit label (e.g. Unit 1, Unit 2)"
      },
      "title": {
        "type": "string",
        "description": "Full academic note title"
      },
      "summary": {
        "type": "string",
        "description": "1-2 sentence descriptive summary of covered topics"
      },
      "path": {
        "type": "string",
        "description": "Repository-relative file path with forward slashes"
      },
      "url": {
        "type": "string",
        "format": "uri",
        "description": "Fully qualified canonical GitHub Pages URL"
      },
      "tags": {
        "type": "array",
        "items": { "type": "string" },
        "description": "List of searchable technical keywords"
      }
    }
  }
}
```

### 2.2 Subject Catalog & Enum Mapping

| Enum Value | Folder | Course Code | Full Course Title | Total Units | Typical ID Pattern |
|---|---|---|---|---|---|
| `FDS` | `notes/fds/` | `CB2003` | Fundamentals of Data Structures | 6 Units | `fds-unit<1-6>` |
| `DCN` | `notes/dcn/` | `CB2004` | Data Communication and Networking | 4 Units | `dcn-unit<1-4>` |
| `BIOT`| `notes/biot/`| `CB2005` | Basics of IoT | 4 Units | `biot-unit<1-4>`|
| `OOP` | `notes/oop/` | `CB2006` | Object Oriented Programming | 4 Units | `oop-unit<1-4>` |
| `PAS` | `notes/pas/` | `MM0501` | Probability and Statistics | 4 Units | `pas-unit<1-4>` |

### 2.3 Live Example Payload

```json
[
  {
    "id": "dcn-unit1",
    "subject": "DCN",
    "unit": "Unit 1",
    "title": "DCN Unit I — Complete Notes",
    "summary": "Complete introduction to Data Communication & Networks — covering data communication components, signal types, transmission modes, multiplexing, switching, and network topologies.",
    "path": "notes/dcn/DCNU1.html",
    "url": "https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU1.html",
    "tags": [
      "Networking",
      "Data Communication",
      "Fundamentals",
      "Signals",
      "Transmission"
    ]
  },
  {
    "id": "dcn-unit2",
    "subject": "DCN",
    "unit": "Unit 2",
    "title": "Unit II — OSI Reference Model | DCN Notes",
    "summary": "Comprehensive guide to the OSI 7-Layer Reference Model — Physical, Data Link, Network, Transport, Session, Presentation, and Application layers with PDUs, protocols, and comparisons.",
    "path": "notes/dcn/DCNU2.html",
    "url": "https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU2.html",
    "tags": [
      "Networking",
      "OSI",
      "Protocols",
      "Layers",
      "Reference Model"
    ]
  },
  {
    "id": "pas-unit1",
    "subject": "PAS",
    "unit": "Unit 1",
    "title": "MM0501 · Unit I — Complete Study Notes · Data, Visualization, Central Tendency & Dispersion",
    "summary": "Complete study notes for MM0501 Unit 1 covering Descriptive Statistics: data classification, visualization pipelines, measures of central tendency, and dispersion metrics.",
    "path": "notes/pas/PASU1.html",
    "url": "https://shreyx404.github.io/BatchHub-notes/notes/pas/PASU1.html",
    "tags": [
      "Probability",
      "Statistics",
      "Descriptive Statistics",
      "Data Visualization",
      "Central Tendency",
      "Dispersion",
      "Mean",
      "Median",
      "Mode",
      "Variance",
      "Standard Deviation"
    ]
  },
  {
    "id": "pas-unit2",
    "subject": "PAS",
    "unit": "Unit 2",
    "title": "Unit II — Probability & Distributions · Deep Exam Notes",
    "summary": "Comprehensive exam notes for MM0501 Unit 2 covering probability foundations, conditional probability, Bayes theorem, discrete and continuous random variables, and key distributions.",
    "path": "notes/pas/PASU2.html",
    "url": "https://shreyx404.github.io/BatchHub-notes/notes/pas/PASU2.html",
    "tags": [
      "Probability",
      "Distributions",
      "Random Variables",
      "PMF",
      "PDF",
      "CDF",
      "Expectation",
      "Variance",
      "Binomial",
      "Poisson",
      "Uniform",
      "Exponential",
      "Bayes Theorem"
    ]
  }
]
```

---

## 3. Metadata Extraction Engine Specification

The build tool [`scripts/generate-manifest.js`](file:///c:/Users/shrey/Downloads/BatchHub-notes/scripts/generate-manifest.js) parses HTML files statically using regex pattern extraction:

| Target Metadata | Extraction Regex Pattern | Fallback Value |
|---|---|---|
| `note-id` | `<meta\s+name=["']note-id["']\s+content=["']([^"']*)["']` | File basename without `.html` |
| `note-subject` | `<meta\s+name=["']note-subject["']\s+content=["']([^"']*)["']` | Parent folder uppercase |
| `note-unit` | `<meta\s+name=["']note-unit["']\s+content=["']([^"']*)["']` | Empty string `""` |
| `note-tags` | `<meta\s+name=["']note-tags["']\s+content=["']([^"']*)["']` | Empty array `[]` |
| `note-summary` | `<meta\s+name=["']note-summary["']\s+content=["']([^"']*)["']` | Empty string `""` |
| `title` | `<title>([^<]*)<\/title>` | `"Untitled"` |

---

## 4. URL Resolution & Deep Linking Contract

### 4.1 Canonical URL Pattern
All notes resolve at predictable public URLs:
```
https://shreyx404.github.io/BatchHub-notes/notes/<subject>/<filename>.html
```

### 4.2 Fragment Anchor Deep Linking
BatchHub can link directly to specific sections inside any note using standard URL fragment identifiers:
```
https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU2.html#section-4
```
Each note template implements `scroll-behavior: smooth`, so anchored links smoothly scroll the viewport to the target topic.

---

## 5. Embedding Contract (Iframe Security & Headers)

When BatchHub embeds notes directly inside the portal interface:

```html
<iframe 
  src="https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU1.html"
  title="DCN Unit 1 Notes"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin allow-popups"
  style="width: 100%; height: 100vh; border: none;">
</iframe>
```

### 5.1 Security Headers
- **X-Frame-Options**: GitHub Pages serves static files with open framing headers (`ALLOWALL`), allowing seamless embedding on `https://batch-hub-red.vercel.app`.
- **CORS**: Cross-Origin Resource Sharing is enabled for static JSON endpoints on GitHub Pages, permitting `fetch('https://shreyx404.github.io/BatchHub-notes/notes.json')` from client-side React components in BatchHub without proxying.

---

## 6. BatchHub Admin Registration Workflow (`/admin/notes`)

When registering a note in BatchHub Admin:

```json
{
  "title": "Unit II — OSI Reference Model",
  "subjectId": "subj-dcn",
  "unit": 2,
  "externalUrl": "https://shreyx404.github.io/BatchHub-notes/notes/dcn/DCNU2.html",
  "summary": "Comprehensive guide to the OSI 7-Layer Reference Model."
}
```

The master portal (`index.html`) features a dedicated **"Copy Link for BatchHub"** button that places this exact `externalUrl` into the system clipboard with feedback.

---

## 7. Operational Rule for All Contributors & Agents

> ⚡ **Mandatory Synchronization Invariant**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
