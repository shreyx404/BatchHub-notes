# Changelog (`CHANGELOG.md`)

All notable changes to the **BatchHub Notes Archive** (`BatchHub-notes`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Ingestion of DCN Units 3 and 4 (`CB2004` IP addressing & TCP/IP Model).
- Ingestion of PAS Units 3 and 4 (`MM0501` Normal Distribution, Sampling & Estimation, Hypothesis Testing).
- Initial units for Fundamentals of Data Structures (`notes/fds/` — `CB2003`).
- Ingestion of OOP Units 2, 3, and 4 (`notes/oop/` — `CB2006`).
- Initial units for Basics of IoT (`notes/biot/` — `CB2005`).
- KaTeX mathematical formula rendering engine.

---

## [1.5.0] - 2026-09-21

### Added
- **Object Oriented Programming (OOP — CB2006) Unit Ingestion**:
  - `notes/oop/OOPU1.html`: Unit 1 — Introduction to OOP with C++ covering 13 comprehensive lecture chapters: foundations of OOP paradigm, C++ syntax fundamentals, const qualifiers & control structures, constructors & member initializers, destructors & copy constructors, the memory map (stack, heap, code, data), friend functions & classes, function overloading, operator overloading, inheritance hierarchies, polymorphism & virtual functions (vtable/vptr), function & class templates, and file handling streams.
  - Added print styles (`@media print`) for clean PDF export and relative back-link (`../../index.html`) to master portal.
  - Attached standard metadata tags (`note-id`, `note-subject`, `note-unit`, `note-tags`, `note-summary`).

### Changed
- **Major Interactive Overhauls & Content Revamps**:
  - `notes/dcn/DCNU1.html`: Unit 1 Examination Notes overhauled with worked CRC stepper, interactive calculation tools, 17 flip-cards for rapid revision, comprehensive tables, and attached standard manifest metadata tags and sidebar back-links.
  - `notes/dcn/DCNU2.html`: Unit 2 OSI Reference Model notes enhanced with interactive 7-layer explorer, animated encapsulation stepper, protocol breakdown tables, print support, and attached standard manifest metadata tags and sidebar back-links.
  - `notes/pas/PASU1.html`: Unit 1 Descriptive Statistics expanded with complete visualization pipelines, interactive self-test Q&As, print formatting, and attached standard manifest metadata tags and sidebar back-links.
- **Manifest & System Synchronization**:
  - Recompiled `notes.json` via `npm run build` tracking 5 published notes across DCN, OOP, and PAS (22.7% curriculum completion).
  - Synchronized all 10 system markdowns to reflect the updated note inventory and latest state.

---

## [1.4.0] - 2026-09-21

### Added
- **Probability & Statistics (PAS — MM0501) Unit Ingestion**:
  - `notes/pas/PASU1.html`: Unit 1 — Descriptive Statistics covering data classification (qualitative vs. quantitative, discrete vs. continuous), frequency distributions, data visualization pipeline (histograms, bar charts, box plots, scatter plots), measures of central tendency (mean, median, mode), and dispersion metrics (range, quartiles, variance, standard deviation, coefficient of variation).
  - `notes/pas/PASU2.html`: Unit 2 — Probability & Distributions covering foundational probability axioms, conditional probability, multiplication theorem, Bayes' Theorem, discrete & continuous random variables, PMF/PDF/CDF definitions, expectation, variance, and distributions (Bernoulli, Binomial, Poisson, Uniform, Exponential).
- **Metadata & Manifest Integration**:
  - Attached standard metadata tags (`note-id`, `note-subject`, `note-unit`, `note-tags`, `note-summary`) to both PAS notes.
  - Added relative navigation back-links (`../../index.html`) to the master portal in note sidebars.
  - Regenerated `notes.json` manifest via `npm run build`, bringing total published notes in the registry to 4 (18.2% curriculum completion).
- **System Documentation Suite Synchronization**:
  - Synchronized all 10 system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the published PAS notes and updated inventory counts.

---

## [1.3.0] - 2026-09-17

### Changed
- **Official Curriculum Ground Truth Alignment**: Fully aligned the repository curriculum, subject naming, and course structures with the official **Vishwakarma Institute of Technology (VIT Pune)** CSE-IoTCSBT (Pattern 'A-25', S.Y. B.Tech) syllabus:
  - Reclassified **`fds`** to **`CB2003: Fundamentals of Data Structures`** (Credits: 4, 6 Units) from the previous placeholder "Fundamentals of Data Science".
  - Normalized official course codes and unit allocations:
    - `CB2003`: Fundamentals of Data Structures (6 Units)
    - `CB2004`: Data Communication and Networking (4 Units)
    - `CB2005`: Basics of IoT (4 Units)
    - `CB2006`: Object Oriented Programming (4 Units: Units 1–2 in C++, Units 3–4 in Java)
    - `MM0501`: Probability and Statistics (4 Units)
  - Normalized total academic note scope to **22 Units** across 5 subjects (with DCN at 50% completion: 2/4 units published).
  - Documented ancillary institutional courses: `HS2002` (Campus to Corporate - 1), `HS2001` (Reasoning & Aptitude - 3), `CB2001` (Design Thinking - 1), and `CB2002` (Engineering Design & Innovation - 1).
- **System Documentation Suite Synchronization**: Synchronized all 10 repository markdown documents (`SYLLABUS.md`, `PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `API.md`, `STYLEGUIDE.md`, `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the authentic syllabus.

---

## [1.2.0] - 2026-09-17

### Added
- **Comprehensive System Documentation Suite**:
  - `SYLLABUS.md`: Canonical academic curriculum reference mapping all units across 5 subjects (`biot`, `dcn`, `fds`, `oop`, `pas`).
  - `STYLEGUIDE.md`: Visual tokens, typography hierarchy, CSS variables dictionary, component patterns, and editorial tone guide.
  - `API.md`: Manifest schema specification, URL contracts, iframe embedding security headers, and BatchHub admin registration interfaces.
  - `CONTRIBUTING.md`: Open-source contributor guidelines, commit standards, and authoring checklists.
  - `CHANGELOG.md`: Chronological release history and semantic versioning tracking.
- **Continuous Documentation & Push Rule**: Enforced non-negotiable invariant across all 10 system markdowns requiring documentation synchronization and immediate push to GitHub on every update.

---

## [1.1.0] - 2026-09-17

### Added
- Standardized documentation: `PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`.
- Subject folder structure strictly mirroring BatchHub: `biot`, `dcn`, `fds`, `oop`, `pas`.

### Changed
- Standardized DCN note naming inside `notes/dcn/`:
  - `notes/dcn/DCNU1.html` (Unit 1: Introduction to Data Communication)
  - `notes/dcn/DCNU2.html` (Unit 2: OSI 7-Layer Reference Model)
- Updated `notes.json` manifest to reflect standardized note paths.
- Updated `README.md` to link directly to the new documentation suite.

### Removed
- Deprecated non-curriculum subject directory `notes/se/`.
- Cleaned up redundant root-level notes (`DCNU1.html`, `OSI_Unit2_Notes.html`).

---

## [1.0.0] - 2026-09-17

### Added
- Initial project scaffolding and zero-dependency `package.json`.
- GitHub Actions CI/CD deployment workflow (`.github/workflows/deploy.yml`) deploying directly to GitHub Pages on push to `main`.
- Master Index Portal (`index.html`) featuring:
  - Dark editorial aesthetic with IBM Plex typography.
  - Live client-side instant search across title, unit, subject, and tags.
  - Dynamic subject filter pills.
  - Responsive cards with "Read Notes" and "Copy Link for BatchHub" clipboard utility.
  - Animated toast notification system.
- Zero-dependency Node.js manifest generator (`scripts/generate-manifest.js`).
- Reusable, distraction-free note template (`templates/note-template.html`) with:
  - Fixed reading progress bar.
  - Sticky / collapsible sidebar Table of Contents with active scroll tracking.
  - Semantic callout suite: Key Concept, Study Tip, Warning, Exam Note.
  - Responsive comparison table wrapper and formula containers.
  - Full `@media print` styling for clean monochrome PDF/print export.
- Initial DCN Unit 1 and Unit 2 HTML notes.

---

## Operational Rule for All Contributors & Agents

> ⚡ **Mandatory Synchronization Invariant**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
