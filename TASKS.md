# Project Tasks & Roadmap (`TASKS.md`)

## Status Dashboard

| Phase | Description | Status | Progress |
|---|---|---|---|
| **Phase 1** | Repository Scaffolding, CI/CD, Master Portal & Note Template | ✅ **Completed** | 100% |
| **Phase 2** | Data Communication & Networking (`dcn` - CB2004) | ✅ **Completed** | **100%** (4/4 Units) |
| **Phase 3** | Multi-Subject Expansion (`fds`, `oop`, `biot`, `pas`) | ✅ **Completed** | **100%** (22/22 Units) |
| **Phase 4** | Portal & Note Reader Enhancements (Responsive Architecture) | 🟡 **In Progress** | 75% |
| **Phase 5** | BatchHub Admin Sync & Ingestion | 🟡 **In Progress** | 65% |

> **Curriculum Benchmark**: Vishwakarma Institute of Technology (VIT Pune) — CSE-IoTCSBT Pattern A-25.  
> **Total Note Inventory Scope**: **22 Units** across 5 core subjects. Current published: **22 / 22 Units** (**100% — CURRICULUM COMPLETE!**).
>
> ⚡ **Golden Operating Rule**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**

---

## Phase 1: Core Foundation & Infrastructure ✅

- [x] **Repository Scaffolding**
  - [x] Configure `.gitignore` for web assets and OS artifacts.
  - [x] Set up `package.json` with zero-dependency build scripts.
  - [x] Create subject folders: `biot/`, `dcn/`, `fds/`, `oop/`, `pas/`.
- [x] **CI/CD Deployment**
  - [x] Create `.github/workflows/deploy.yml` with official GitHub Pages actions.
  - [x] Verify GitHub Pages deployment permissions (`pages: write`, `id-token: write`).
- [x] **Master Index Portal (`index.html`)**
  - [x] Editorial dark mode with IBM Plex Sans / Mono typography.
  - [x] Real-time search across title, unit, subject, tags, and summary.
  - [x] Subject filter pills (`All`, `DCN`, etc.).
  - [x] One-click "Copy Link for BatchHub" with toast feedback.
  - [x] Responsive layout with mobile support.
- [x] **Manifest Generator Tooling (`scripts/generate-manifest.js`)**
  - [x] Regex-based metadata extraction from HTML `<meta>` tags.
  - [x] Auto-generation of canonical `notes.json`.
- [x] **Reusable Note Template (`templates/note-template.html`)**
  - [x] Reading progress bar.
  - [x] Sticky, active-tracking sidebar Table of Contents.
  - [x] Callout box suite: Key, Tip, Warning, Exam.
  - [x] Comparison table wrappers & formula containers.
  - [x] Print media query (`@media print`) for clean PDF generation.
- [x] **System Documentation Suite (10-Document Standard)**
  - [x] `PRD.md` — Product Requirements Document.
  - [x] `ARCHITECTURE.md` — Technical architecture and data flows.
  - [x] `API.md` — Manifest schema and BatchHub integration contract.
  - [x] `AGENTS.md` — Contributor & Agent Operational Manual.
  - [x] `SYLLABUS.md` — Academic curriculum & unit reference guide.
  - [x] `STYLEGUIDE.md` — Visual design tokens, CSS variables & component library.
  - [x] `TASKS.md` — Roadmap, milestones & task backlog.
  - [x] `CONTRIBUTING.md` — Contributor guidelines & PR protocol.
  - [x] `CHANGELOG.md` — Release history & semantic versioning tracker.
  - [x] `README.md` — Public documentation and landing guide.

---

## Phase 2: DCN (Data Communication and Networking — CB2004) Ingestion ✅ 100% Complete
 
- [x] **Unit 1: Data communication and its components** (`notes/dcn/DCNU1.html`) ✅
  - [x] 5 Components of data communication, protocols, standard organizations.
  - [x] Transmission modes, bandwidth, baud rate vs bit rate, signal properties.
  - [x] Single-bit & burst errors, error detection (LRC, VRC, CRC).
  - [x] IEEE standards (802.1–802.5), 802.11 Wireless LAN architecture & MAC sublayer.
- [x] **Unit 2: OSI Reference Model** (`notes/dcn/DCNU2.html`) ✅
  - [x] Layered architecture, peer-to-peer processes, encapsulation & decapsulation.
  - [x] 7-layer functional breakdown (Physical through Application).
  - [x] PDUs, protocols, and headers per layer.
  - [x] OSI vs. TCP/IP model comparison table.
- [x] **Unit 3: IP addressing** (`notes/dcn/DCNU3.html`) ✅
  - [x] Internet addressing mechanism, IPv4 address structure and notation.
  - [x] Classful addressing (Classes A–E) and default masks.
  - [x] Subnetting, supernetting, CIDR notation, and subnet mask calculations.
  - [x] IPv6 addressing representation, address space allocation, SLAAC & auto-configuration.
  - [x] ICMP, Routing protocols (RIP, OSPF, BGP), ARP/RARP, MPLS, Mobile IP, MANET (DSR, AODV).
- [x] **Unit 4: TCP/IP Model** (`notes/dcn/DCNU4.html`) ✅
  - [x] TCP/IP layered architecture vs OSI.
  - [x] Data Link Layer: Nodes and links, categories of links, link layer addressing.
  - [x] Address Resolution Protocol (ARP) mechanics, cache, and interactive animated stepper.
  - [x] Transport Layer: Services, connection-oriented (TCP) vs connectionless (UDP).
  - [x] TCP segment format, 3-way handshake interactive simulation, 4-way teardown, flow/error control.
  - [x] UDP datagram format and checksum; TCP Tahoe/Reno congestion control.

---

## Phase 3: Multi-Subject Expansion 🟡

### 1. Fundamentals of Data Structures (FDS — CB2003) — `notes/fds/` (6 Units) ✅ 100% Complete
- [x] **Unit 1: Introduction to Data Structures and Complexity** (`FDSU1.html`) ✅
  - [x] ADTs, classification, Big-O / Big-$\Omega$ / Big-$\Theta$ analysis, time-space trade-offs, Tower of Hanoi recursion.
- [x] **Unit 2: Arrays and Searching & Sorting Techniques** (`FDSU2.html`) ✅
  - [x] 1D/2D arrays address calculation, sparse matrix transpose, dynamic arrays, Linear & Binary search.
  - [x] Bubble, Selection, Insertion, Merge, Quick sort analysis with interactive viz and sensor buffering case study.
- [x] **Unit 3: Linked Lists** (`FDSU3.html`) ✅
  - [x] Singly, Doubly, and Circular linked lists, operations, polynomial arithmetic, memory allocation simulation.
- [x] **Unit 4: Stacks and Queues** (`FDSU4.html`) ✅
  - [x] Stack ADT, infix-to-postfix, expression evaluation, call stack recursion.
  - [x] Linear, Circular, Priority queues and Deque with real-world applications.
- [x] **Unit 5: Trees** (`FDSU5.html`) ✅
  - [x] Binary trees, BST operations (insert, search, delete, mirror, height).
  - [x] In-order, Pre-order, Post-order (recursive/iterative), Expression trees, Huffman coding, Threaded binary trees, Heaps & C implementations.
- [x] **Unit 6: Graphs** (`FDSU6.html`) ✅
  - [x] Adjacency matrix/list, BFS, DFS, Warshall’s transitive closure, Floyd-Warshall, topological sorting.
  - [x] Interactive BFS visual tracer, DFS call-stack player, Warshall matrix detours stepper ($k=1\dots 7$), Topological sort stepper.
  - [x] Networking, social graphs, IoT routing, and attack path modelling case studies.

### 2. Object Oriented Programming (OOP — CB2006) — `notes/oop/` (4 Units) ✅ 100% Complete
- [x] **Units 1 & 2: Introduction to OOP & C++ Programming** (`OOPU1.html`) ✅
  - [x] OOP fundamentals vs C, I/O streams, dynamic memory (`new`/`delete`), classes & objects.
  - [x] Access specifiers, `this` pointer, constructors/destructors, static members, friend functions, overloading.
  - [x] Complete 13-chapter lecture suite: const/control structures, memory map, inheritance, virtual functions, templates, and file handling.
- [x] **Units 3 & 4: Java Programming (Lectures 14–21)** (`OOPU2.html`) ✅
  - [x] JVM/JRE/JDK architecture, bytecode execution pipeline, Java primitives, reference types, string immutability.
  - [x] OOP in Java: classes, objects, Heap vs Stack memory, garbage collection, constructors, method overloading.
  - [x] Inheritance (`extends`), `super()`, method overriding, runtime polymorphism (dynamic method dispatch), `final`, `instanceof`.
  - [x] Abstraction: `abstract` classes vs `interface`, multiple interface implementation, packages & access modifiers.
  - [x] Exception handling: `try-catch-finally`, multi-catch, checked vs unchecked exceptions, `throw`/`throws`, custom exceptions.
  - [x] GUI & Event Programming: AWT vs Swing, layout managers (`BorderLayout`, `FlowLayout`, `GridLayout`), event delegation model & listeners.
  - [x] In-note search (`/` hotkey), theme toggle (dark/light), reading progress bar, off-canvas TOC drawer, copyable code snippets, `@media print`.
  *(Covered in OOPU2.html)*
  - [ ] Java Collections Framework (`ArrayList`, `Vector`, `LinkedList`, `HashSet`, `TreeSet`, `HashMap`), Generics, Iterators.
  - [ ] Multithreading basics, Thread lifecycle, synchronization.

  - [ ] JDBC architecture, drivers, `DriverManager`, `Connection`, `Statement`, `PreparedStatement`, `ResultSet`, CRUD operations.
  - [ ] Advanced Swing components, dialogs, menus, table models.

### 3. Basics of IoT (BIoT — CB2005) — `notes/biot/` (4 Units) ✅ 100% Complete
- [x] **Unit 1: Introduction to IoT** (`BIOTU1.html`) ✅
  - [x] Definitions, characteristics, physical/logical design, enabling technologies, identifiers, IoT vs M2M.
- [x] **Unit 2: Introduction of Microprocessor & Microcontroller** (`BIOTU2.html`) ✅
  - [x] Microprocessor vs microcontroller, 8085 architecture, pin diagram, MCS-51 (8051) architecture.
  - [x] Memory organization (RAM/ROM/SFRs) and external memory interfacing.
- [x] **Unit 3: IP based Protocols for IoT** (`BIOTU3.html`) ✅
  - [x] IPv6, 6LoWPAN adaptation, RPL routing, REST web services, AMQP, CoAP, MQTT (pub/sub, QoS).
  - [x] Modbus, ZigBee architecture, authorization and access control in IoT.
- [x] **Unit 4: IoT Security and Privacy** (`BIOTU4.html`) ✅
  - [x] Security challenges, threat landscape, encryption & authentication for constrained nodes.
  - [x] Privacy concerns, regulations (GDPR), and security best practices (secure boot, isolation, FOTA).

### 4. Probability and Statistics (PAS — MM0501) — `notes/pas/` (4 Units)
- [x] **Unit 1: Descriptive Statistics** (`PASU1.html`) ✅
  - [x] Qualitative/quantitative data, frequency distributions, visualizations (histograms, box plots).
  - [x] Measures of central tendency (mean, median, mode) and dispersion (variance, SD, CV).
- [x] **Unit 2: Probability Basics and distributions** (`PASU2.html`) ✅
  - [x] Probability axioms, conditional probability, Bayes’ theorem, random variables (PMF, PDF, CDF).
  - [x] Expectation and variance. Discrete (Bernoulli, Binomial, Poisson) & Continuous (Uniform, Exponential).
- [x] **Unit 3: Normal Distribution & Sampling Theory** (`PASU3.html`) ✅
  - [x] Normal distribution properties, $Z$-scores, $P$-values, normal approximation to Binomial/Poisson.
  - [x] Sampling distributions, sample mean/variance, Standard Error, Central Limit Theorem (CLT).
  - [x] Point Estimation, Confidence Intervals (Z & t), margin of error, sample size determination.
  - [x] Hypothesis testing framework, Quality Control, and tolerances.
  - [ ] Sampling distributions, sample mean/variance, Standard Error, Central Limit Theorem (CLT).
- [x] **Unit 4: Estimation, Hypothesis Testing, Correlation & Regression** (`PASU4.html`) ✅
  - [x] Point & interval estimation (confidence intervals). Null/alternative hypotheses, Type I/II errors.
  - [x] One-sample $Z$-test and $t$-test, Chi-Square ($\chi^2$) goodness of fit & independence tests.
  - [x] One-Way ANOVA ($F$-test), Pearson correlation, regression lines, and method of least squares.

---

## Phase 4: Reader & Portal Enhancements 🟡

- [x] **Cross-Device Responsive Architecture & Mobile Optimization Overhaul**:
  - Engineered off-canvas sliding TOC drawers with trigger buttons and dark scrim backdrop across notes (`DCNU2`, `OOPU1`, `PASU1`, `PASU2`, and `templates/note-template.html`).
  - Implemented 3-tier responsive breakpoints (960px, 640px, 375px) with `clamp()` typography and fluid layout conversions.
  - Eliminated horizontal viewport blowouts across all tables, frame diagrams (`.anat`), checkpoints (`.ckpt`), and pipelines (`.pipe`) with strict zero-overflow verification (`scrollWidth === innerWidth` at 360px, 390px, and 500px).
- [ ] **Mathematical Notation Engine**: Lightweight KaTeX integration for math-intensive subjects (PAS, FDS) without impacting performance.
- [ ] **In-Note Keyword Search**: Quick `Ctrl+K` or search bar within long-form notes.
- [ ] **Dark / Light Mode Toggle**: Optional light theme toggle for high-glare environments.
- [ ] **Local Reading State**: Save scroll position and completed section checkboxes in `localStorage`.
- [ ] **Interactive Code Sandboxes**: Lightweight runnable code snippets for OOP and FDS examples.

---

## Phase 5: BatchHub Portal Integration 🟡

- [x] **URL Schema Verification**: Ensure all note URLs conform to `https://shreyx404.github.io/BatchHub-notes/notes/<subject>/<file>.html`.
- [x] **Copy-to-Clipboard Flow**: Verified instant copy button functionality for `/admin/notes` dashboard.
- [ ] **Ingest DCN Units 1 & 2 into BatchHub**: Add the live links in the BatchHub Admin console.
- [ ] **End-to-End Navigation Test**: Verify opening notes directly from the student `/notes` portal.
