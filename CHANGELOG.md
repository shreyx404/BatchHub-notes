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

## [1.6.2] - 2026-09-22

### Fixed & Optimized
- **Complete Elimination of Horizontal Blowout & Viewport Clipping** (`notes/dcn/DCNU2.html`):
  - Added strict root safety boundaries to `html` and `body` (`overflow-x: hidden; max-width: 100vw; width: 100%; overflow-wrap: break-word;`) to permanently prevent rogue overflow.
  - Converted `.layout` from CSS Grid to `display: block` at `max-width: 960px`, eliminating the automatic minimum-size track blowout caused by `1fr` (`minmax(auto, 1fr)`).
  - Completely removed harmful negative margins (`-16px`, `-12px`) on `.tblwrap` and `.figure` that caused a persistent 16px rightward bleed and text truncation on 375px–500px mobile viewports.
  - Re-architected `.mast-stats` from horizontal rigid borders into responsive wrapped pill badges that stack cleanly on mobile viewports.
  - Encapsulated FIG. 07 (Checkpoints diagram) within `.tw` and `.ckpt-wrap` (`min-width: 520px`), preserving horizontal alignment between the 10 packet boxes and the 3 zone indicators with contained scrolling.
  - Re-anchored FIG. 12 (Anatomy of a Frame) within `.tw` with optimized flex basis, allowing Header, Payload, and Trailer blocks to fit and scroll cleanly without viewport blowout.
  - Added a prominent `✕` close button in the off-canvas TOC drawer header and improved link event delegation using `e.target.closest('a')`.
  - Moved mobile `← Notes Hub` back link cleanly inside `.mast` for uniform alignment with masthead padding.
  - Thoroughly validated with browser subagent across 360px, 390px, and 500px viewports, confirming zero horizontal overflow (`scrollWidth === innerWidth`).

## [1.6.1] - 2026-09-22

### Changed
- **DCNU2 Mobile Optimization Overhaul** (`notes/dcn/DCNU2.html`):
  - Replaced horizontal-scroll TOC strip with a proper **off-canvas TOC drawer** with floating ☰ trigger button, dark backdrop scrim, and Escape key dismissal.
  - Added **three responsive breakpoints** (960px, 640px, 375px) covering tablet, phone, and extra-small screens.
  - Fixed **horizontal blowout** from `white-space: nowrap` on table first-column cells — now wraps naturally on mobile.
  - Made `.sd-grid` (layer detail grid), `.anat` (frame anatomy), `.pipe` (presentation pipeline), `.stepflow` (step cards), `.ckpt` (checkpoints), and `.mnem` (mnemonic grid) **fully responsive with stacked layouts** on narrow screens.
  - Reduced `padding` and `margin` on `.figure`, `.callout`, `.pull`, `.note`, `.enc-stage`, and `.details.q .ans` at mobile breakpoints to reclaim screen real estate.
  - Made PDU bar cells (`.cell.hdr`, `.cell.trl`) progressively shrink at 640px and 375px to prevent overflow.
  - Added `flex-wrap` to `.ckpt` and `.ck-zone` for proper checkpoint row wrapping on small screens.
  - Made presentation pipeline arrows rotate 90° and stack vertically on mobile instead of horizontal overflow.
  - Reduced heading sizes with `clamp()` and tightened section padding for compact mobile reading.
  - Added mobile-visible **"← Notes Hub"** back link above the masthead.
  - Bit-string display now uses `word-break: break-all` to prevent horizontal scroll.


## [1.6.0] - 2026-09-21

### Added
- **Unified Cross-Device Responsive Architecture**:
  - Engineered off-canvas sliding TOC drawers with floating toggle triggers (`#menuBtn` / `.menu-btn`) and dark backdrop scrim overlays (`#scrim`) across `notes/oop/OOPU1.html`, `notes/pas/PASU1.html`, and `notes/pas/PASU2.html`, ensuring seamless table of contents navigation on mobile and tablet screens.
  - Added reading progress bar indicator (`#progressBar`) with high-frequency scroll listeners to `notes/oop/OOPU1.html`.
  - Added tablet breakpoints (`@media (max-width: 1024px)`) and small mobile optimizations (`@media (max-width: 480px)` and `<640px>`) to `templates/note-template.html` and note pages.
- **Universal Responsive Table & Math Block Scroll Containers**:
  - Implemented responsive horizontal table scrolling (`table { display: block; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }`) preventing horizontal viewport blowouts across multi-column data tables in `OOPU1`, `PASU1`, `PASU2`, `DCNU1`, and `DCNU2`.
  - Added touch-friendly scrolling to formula blocks (`.fbox`, `.dmath`, `.tw`, `.tblwrap`, `pre`).

### Changed
- **Typography & Mobile Touch Refinements**:
  - Replaced oversized fixed headings with fluid typography (`clamp()`) across all notes to prevent text clipping and excessive line wrapping on 320px–375px screens.
  - Set `font-size: 16px` on `index.html` `.search-input` for mobile devices to prevent unwanted iOS Safari viewport auto-zoom.
  - Expanded interactive button touch targets (`.btn`, `.pill`, `.menu-btn`) to ensure minimum 40–44px comfortable touch accessibility.
- **System Documentation & Manifest**:
  - Verified manifest with 5 notes (22.7% curriculum completion).
  - Synchronized all 10 system markdowns to establish responsive multi-viewport design invariants.

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
