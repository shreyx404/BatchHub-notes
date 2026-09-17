# Changelog (`CHANGELOG.md`)

All notable changes to the **BatchHub Notes Archive** (`BatchHub-notes`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Ingestion of DCN Units 3–6 (Data Link Layer, Network Layer, Transport Layer, Application Layer).
- Initial units for Fundamentals of Data Science (`notes/fds/`).
- Initial units for Object-Oriented Programming (`notes/oop/`).
- KaTeX mathematical formula rendering engine.

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
