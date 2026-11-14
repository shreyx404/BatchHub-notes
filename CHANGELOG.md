# Changelog (`CHANGELOG.md`)

All notable changes to the **BatchHub Notes Archive** (`BatchHub-notes`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- KaTeX mathematical formula rendering engine.
- In-note search shortcuts and client-side reading progress tracking.

## [2.4.0] - 2026-11-14

### Added
- **Archive-Wide Universal Light/Dark Mode Switcher & Synchronized Themes**:
  - Implemented interactive light/dark mode switcher icon button and functionality to all notes previously lacking it (`BIOTU4`, `DCNU1`, `DCNU2`, `DCNU3`, `DCNU4`, `FDSU1`, `FDSU2`, `FDSU3`, `FDSU4`, `OOPU1`, `PASU1`, `PASU2`, `PASU3`, `PASU4`), bringing theme switching to 100% of notes across the archive.
  - Implemented dual-theme design tokens (`html[data-theme="dark"]`, `html.dark`, `html[data-theme="light"]`, `html.light`) across all notes with high-contrast, WCAG AAA compliant palettes for text, cards, tables, diagrams, and callouts.
  - Added SVG Sun/Moon dynamic vector icons to the switcher buttons that dynamically reflect the active theme state.
  - Added inline anti-flash script in `<head>` across all notes to eliminate Flash of Unstyled Theme (FOUT) upon initial page load.
  - Added universal theme preference synchronization using shared `localStorage` key `batchhub-theme`, while preserving full backward compatibility with legacy note-specific keys.
  - Updated standard template `templates/note-template.html` with light mode tokens, responsive theme switcher button, anti-flash script, and event listener.
- **System Documentation Suite Synchronization (v2.4.0)**:
  - Updated all 10 system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) reflecting the universal light/dark theme system.

## [2.3.0] - 2026-11-14

### Added
- **Global Note Title Uniformity Overhaul**:
  - Normalized `<title>` tags across all 20 note HTML files to match their uppercase filename without extension (`BIOTU1`, `BIOTU2`, `BIOTU3`, `BIOTU4`, `DCNU1`, `DCNU2`, `DCNU3`, `DCNU4`, `FDSU1`, `FDSU2`, `FDSU3`, `FDSU4`, `FDSU5`, `FDSU6`, `OOPU1`, `OOPU2`, `PASU1`, `PASU2`, `PASU3`, `PASU4`).
  - Standardized `templates/note-template.html` with explicit `<title>SUBJECTUN</title>` standard and guidance.
  - Added title tag uniformity requirement to contributor guidelines (`CONTRIBUTING.md`), operational manual (`AGENTS.md`), and style guide (`STYLEGUIDE.md`).
- **Comprehensive Documentation Suite & Version Synchronization (v2.3.0)**:
  - Bumped project version to `2.3.0` across `package.json`, `PRD.md`, and `API.md`.
  - Fully updated and synchronized all 10 system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`).
  - Aligned OOP syllabus mappings across `SYLLABUS.md` and `TASKS.md` reflecting `OOPU1.html` (Units 1 & 2: C++) and `OOPU2.html` (Units 3 & 4: Java).
  - Updated `README.md` curriculum completion matrix and tree to reflect 100% completion across all 22 units.

### Changed
- Regenerated canonical `notes.json` manifest via `npm run build` (20 notes indexed with clean uniform titles).

## [2.2.0] - 2026-11-14

### Added
- **Object Oriented Programming (OOP - CB2006) Curriculum Fully Covered (100% Complete)**:
  - `notes/oop/OOPU1.html` covers Units 1 & 2 (C++): OOP foundations, classes, objects, constructors, destructors, memory map, friend functions, operator overloading, inheritance, virtual functions, templates, file handling.
  - `notes/oop/OOPU2.html` covers Units 3 & 4 (Java Lectures 14-21): JVM architecture, OOP in Java, inheritance, polymorphism, interfaces, packages, exception handling, AWT/Swing GUI, event-driven programming.
  - Updated meta `note-unit` in OOPU1 (Unit 1 → Units 1 & 2) and OOPU2 (Unit 2 → Units 3 & 4).
- **SYLLABUS 100% COMPLETE**: All 22 curriculum units across all 5 subjects now fully published (20 HTML files covering 22 units).

### Changed
- OOP: 50% → 100% Complete.
- Overall curriculum: 22/22 units (100%) covered across 20 published note files.
- notes.json regenerated: OOP entries now reflect Units 1 & 2 and Units 3 & 4.
- All system markdowns updated.

## [2.1.0] - 2026-11-14

### Added
- **Probability and Statistics (PAS — MM0501) Units 3 & 4 Ingested (Subject 100% Complete!)**:
  - `notes/pas/PASU3.html`: Unit III — Normal Distribution, Sampling & Statistical Inference. 3,105 lines covering:
    - Normal Distribution: Bell curve properties, Z-scores, standard normal table, area calculations.
    - Sampling Theory: Sample mean/variance distributions, Standard Error, Central Limit Theorem (CLT).
    - Point Estimation: Unbiased estimators, MLE, method of moments, estimator properties.
    - Confidence Intervals: Z-interval and t-interval construction, margin of error, sample size determination.
    - Hypothesis Testing: Null/alternative hypotheses, Type I & Type II errors, critical regions.
    - P-values, Quality Control, Normal approximation to Binomial and Poisson distributions.
  - `notes/pas/PASU4.html`: Unit IV — Statistical Inference & Regression. 2,663 lines covering:
    - Statistical Estimation: Point and interval estimation, degrees of freedom.
    - Hypothesis-Testing Framework: Z-test and t-test (one/two sample), test statistics, rejection regions.
    - Chi-Square (χ²) tests: Goodness of fit and independence/contingency table tests.
    - One-Way ANOVA (F-test): Between/within group variance, F-distribution, post-hoc analysis.
    - Correlation: Pearson correlation coefficient, scatter plots, interpretation.
    - Regression & Least-Squares Curve Fitting: Simple linear regression, method of least squares, residual analysis.

### Changed
- PAS subject progress updated from 50% → 100% Complete (4/4 Units published).
- Overall curriculum progress: 20/22 Units published (90.9%).
- Injected mandatory manifest meta tags (`note-id`, `note-subject`, `note-unit`, `note-tags`, `note-summary`) into both PASU3 and PASU4.
- `notes.json` regenerated — now indexes **20 notes** total.
- All system markdowns updated to reflect latest state.

## [1.9.0] - 2026-11-08

### Added
- **Fundamentals of Data Structures (FDS — CB2003) Unit 6 Ingested (Subject 100% Complete!)**:
  - `notes/fds/FDSU6.html`: Unit VI — Graphs. 3,200+ lines of comprehensive study notes covering:
    - Graph fundamentals: directed vs undirected, weighted graphs, paths, cycles, degrees, in-degree/out-degree, subgraphs, connectedness.
    - Graph representations: Adjacency matrix vs Adjacency list (memory footprints, algorithmic trade-offs, cache locality).
    - Traversals: Breadth First Search (BFS) and Depth First Search (DFS) with interactive step-by-step visual tracers, call-stack visualization, and edge classification (tree, back, cross, and forward edges).
    - Transitive Closure: Warshall's Algorithm ($O(n^3)$) with full interactive matrix detours stepper ($k = 1\dots 7$).
    - All-Pairs Shortest Paths: Floyd-Warshall Algorithm.
    - Directed Acyclic Graphs (DAGs) and Topological Sorting: Kahn's in-degree algorithm and DFS finish-time reversal algorithm with interactive tracer.
    - Real-world applications: Attack path modelling, network packet routing, social network graphs, IoT network routing, and peer-to-peer blockchain topologies.
    - Integrated metadata tags, topbar navigation with `← Notes Hub` back link, `@media print` styles, and dark/light mode toggle.
- **Object Oriented Programming (OOP — CB2006) Unit 2 Ingested (50% Complete!)**:
  - `notes/oop/OOPU2.html`: Unit II — Java Programming Master Notes (Lectures 14–21). 4,300+ lines covering:
    - JVM / JRE / JDK Architecture & Bytecode execution model (`.java` → `javac` → `.class` → JVM classloader, bytecode verifier, JIT compiler).
    - Java Language Fundamentals: Primitive types, reference types, wrappers, operators, arrays, string immutability, `StringBuilder`.
    - Java OOP Foundations: Classes, objects, heap vs stack memory map, garbage collection basics, constructors, `this` keyword, method overloading.
    - Inheritance & Polymorphism: `extends`, single/multilevel/hierarchical inheritance, constructor chaining with `super()`, method overriding, runtime polymorphism (dynamic method dispatch), `final` keyword, `instanceof` operator.
    - Abstraction & Interfaces: `abstract` classes vs `interface`, multiple interface implementation, default and static methods in interfaces.
    - Packages & Access Modifiers: Package conventions, `CLASSPATH`, access levels (`private`, default, `protected`, `public`).
    - Exception Handling: Exception hierarchy, checked vs unchecked exceptions, `try-catch-finally`, multi-catch, nested try, `throw` vs `throws`, custom exceptions.
    - GUI & Event Programming: AWT vs Swing architecture, container hierarchy (`JFrame`, `JPanel`), layout managers (`BorderLayout`, `FlowLayout`, `GridLayout`, `CardLayout`), event delegation model, and event listeners/adapters.
    - Interactive in-note live search (`/` hotkey), theme toggle (dark/light), reading progress bar, off-canvas sliding TOC drawer with scrim overlay, and `@media print` support.

### Changed & Cleaned
- **Manifest Recompiled** (`notes.json`): Regenerated via `npm run build`, now indexing **18 published notes** across all 5 subjects (**81.8% curriculum coverage**).
- `package.json`: Version bumped to `1.9.0`.
- **System Documentation Synchronized**: Fully synchronized `PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, and `CHANGELOG.md` to reflect the latest state.

### Added
- **Basics of IoT (BIOT — CB2005) Unit 4 Ingested (Subject 100% Complete!)**:
  - `notes/biot/BIOTU4.html`: Unit IV — IoT Security and Privacy. 11 comprehensive modules covering foundations & the CIA triad, IoT challenges, security toolkit, threat landscape & attack anatomy, learn-segment-protect paradigm, encryption techniques (AES, lightweight cryptography, asymmetric), authentication mechanisms (Zero Trust, mutual TLS, OAuth), privacy regulations & GDPR compliance, hardening best practices, and interactive revision checklist with local storage persistence.
- **Data Communication & Networking (DCN — CB2004) Units 3 & 4 Ingested (Subject 100% Complete!)**:
  - `notes/dcn/DCNU3.html`: Unit III — IP Addressing, Routing & Internetworking. 18 chapters covering IP fundamentals, IPv4 addressing, classful classes A–E, CIDR notation & subnetting/supernetting numericals, NAT (PAT/SNAT/DNAT), IPv6 representation & transition mechanisms, ICMP, routing protocols (RIP, OSPF, BGP), ARP/RARP mechanics, MPLS label switching, Mobile IP, and MANET routing (DSR, AODV).
  - `notes/dcn/DCNU4.html`: Unit IV — The TCP/IP Model. 9 modules covering TCP/IP vs OSI architecture, layer encapsulation, link layer addressing, ARP protocol flow & interactive animated simulation, transport layer services, multiplexing/demultiplexing, UDP vs TCP, sliding window flow control (Go-Back-N, Selective Repeat), TCP 3-way handshake interactive player, and TCP congestion control (Slow Start, AIMD, Tahoe/Reno).
- **Fundamentals of Data Structures (FDS — CB2003) Unit 5 Ingested (83.3% Complete!)**:
  - `notes/fds/FDSU5.html`: Unit V — Trees. 15 comprehensive sections with 30+ SVG visuals, 25+ complete C implementations, and 14 solved problems. Covers tree terminology & numerical properties, binary tree ADT, recursive and non-recursive traversals (inorder, preorder, postorder, level-order using stacks/queues), Binary Search Tree (BST) operations (insert, search, delete 3 cases, min/max, height, mirror, copy), Expression trees & prefix/infix/postfix notation conversions, Huffman coding algorithm & prefix property, Inorder Threaded Binary Trees (ITBT) & tag mechanics, and Heaps (min/max heap, insert/delete, heap sort).
- Attached mandatory `<meta>` tags (`note-id`, `note-subject`, `note-unit`, `note-tags`, `note-summary`) to all 4 notes for manifest ingestion.
- Added topbar navigation, back-links to Notes Hub (`../../index.html`), dark mode toggles, and responsive touch layout support to all 4 notes.

### Changed & Cleaned
- **Repository Cleanup**: Removed obsolete `.gitkeep` placeholder files from `notes/biot/`, `notes/fds/`, `notes/oop/`, and `notes/pas/` as all subject folders are now populated and natively tracked by Git.
- **Manifest Recompiled** (`notes.json`): Regenerated via `npm run build`, now tracks **16 published notes** across all 5 subjects (**72.7% curriculum coverage**).
- `package.json`: Version bumped to `1.8.0`.
- **System Documentation Synchronized**: Fully synchronized `PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, and `CHANGELOG.md` to reflect the latest state.

## [1.7.0] - 2026-09-28

### Added
- **Basics of IoT (BIOT — CB2005) Units 1–3 Ingested**:
  - `notes/biot/BIOTU1.html`: Unit 1 — Fundamentals of IoT. Covers definitions & characteristics, physical vs. logical design, enabling technologies, IoT protocol stacks, IoT levels 1–6, RFID deep dive (active/passive, EPC, frequency bands), Wireless Sensor Networks (WSN architecture, LEACH protocol), and M2M vs IoT comparison.
  - `notes/biot/BIOTU2.html`: Unit 2 — Microprocessor & Microcontroller. Covers Microprocessor vs. Microcontroller distinction, Intel 8085 architecture & pin diagram (40-pin DIP, ALE, RD/WR bars, HOLD/HLDA), MCS-51/8051 MCU architecture, memory organization (internal/external RAM, SFRs), and external memory interfacing.
  - `notes/biot/BIOTU3.html`: Unit 3 — IP-Based Protocols for IoT. Covers IPv6 addressing, 6LoWPAN adaptation layer & header compression, RPL routing (DODAG, objective function, ICMPv6 messages), REST web services, AMQP broker model, CoAP (confirmable/non-confirmable messages, proxy), MQTT (pub/sub, QoS levels 0–2, broker), Modbus RTU/TCP, and ZigBee architecture (coordinator, router, end-device roles).
  - All three BIOT notes include mandatory metadata (`note-id`, `note-subject`, `note-unit`, `note-tags`, `note-summary`), `@media print` styles, `../../index.html` back-links, and mobile-responsive layouts.

- **Fundamentals of Data Structures (FDS — CB2003) Units 1–4 Ingested**:
  - `notes/fds/FDSU1.html`: Unit 1 — Data Structures & Analysis of Algorithms. Covers ADT definitions, data structure classifications, algorithm complexity analysis, Big-O / Big-Ω / Big-Θ asymptotic notations, space-time trade-offs, recurrence relations (substitution, master theorem), and Tower of Hanoi recursion with interactive depth visualization.
  - `notes/fds/FDSU2.html`: Unit 2 — Arrays, Searching & Sorting Techniques. Covers 1D/2D array address formulae (row-major/column-major), sparse matrix transpose algorithms, dynamic arrays, Linear Search, Binary Search, and complete analysis of 5 sorting algorithms (Bubble, Selection, Insertion, Merge, Quick Sort) with interactive bar-chart visualizer.
  - `notes/fds/FDSU3.html`: Unit 3 — Linked Lists. Covers node anatomy & pointer mechanics, Singly Linked List (SLL) CRUD operations, Doubly Linked List (DLL), Circular Linked List (CLL), polynomial representation & addition algorithm, Josephus problem simulation, and dynamic memory allocation (free-list, first/best/worst fit).
  - `notes/fds/FDSU4.html`: Unit 4 — Stacks & Queues. Covers Stack ADT (array & linked implementations), infix → postfix conversion (Shunting-Yard), postfix expression evaluator, call-stack recursion tracing, Queue ADT, Linear Queue, Circular Queue, Deque (input/output restricted), and Priority Queue.
  - All four FDS notes include mandatory metadata, `@media print` styles, `../../index.html` back-links, and mobile-responsive layouts.

### Changed
- **Manifest Recompiled** (`notes.json`): Regenerated via `npm run build`, now tracks **12 published notes** across all 5 subjects (54.5% curriculum coverage).
- **System Documentation Synchronized**: Updated `CHANGELOG.md`, `TASKS.md`, `README.md`, `PRD.md`, `ARCHITECTURE.md`, `SYLLABUS.md`, `AGENTS.md`, `STYLEGUIDE.md`, `API.md`, and `CONTRIBUTING.md` to reflect the updated note inventory and v1.7.0 release state.

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
