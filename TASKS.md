# Project Tasks & Roadmap (`TASKS.md`)

## Status Dashboard

| Phase | Description | Status | Progress |
|---|---|---|---|
| **Phase 1** | Repository Scaffolding, CI/CD, Master Portal & Note Template | ✅ **Completed** | 100% |
| **Phase 2** | Data Communication & Networking (`dcn` - CB2004) | 🟡 **In Progress** | **50%** (2/4 Units) |
| **Phase 3** | Multi-Subject Expansion (`fds`, `oop`, `biot`, `pas`) | 🟡 **In Progress** | **11.1%** (2/18 Units) |
| **Phase 4** | Portal & Note Reader Enhancements | ⚪ **Backlog** | 0% |
| **Phase 5** | BatchHub Admin Sync & Ingestion | 🟡 **In Progress** | 50% |

> **Curriculum Benchmark**: Vishwakarma Institute of Technology (VIT Pune) — CSE-IoTCSBT Pattern A-25.  
> **Total Note Inventory Scope**: **22 Units** across 5 core subjects. Current published: **4 / 22 Units** (18.2%).
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

## Phase 2: DCN (Data Communication and Networking — CB2004) Ingestion 🟡

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
- [ ] **Unit 3: IP addressing** (`notes/dcn/DCNU3.html`) ⚪
  - [ ] Internet addressing mechanism, IPv4 address structure and notation.
  - [ ] Classful addressing (Classes A–E) and default masks.
  - [ ] Subnetting, supernetting, CIDR notation, and subnet mask calculations.
  - [ ] IPv6 addressing representation, address space allocation, SLAAC & auto-configuration.
- [ ] **Unit 4: TCP/IP Model** (`notes/dcn/DCNU4.html`) ⚪
  - [ ] TCP/IP layered architecture vs OSI.
  - [ ] Data Link Layer: Nodes and links, categories of links, link layer addressing.
  - [ ] Address Resolution Protocol (ARP) mechanics and cache.
  - [ ] Transport Layer: Services, connection-oriented (TCP) vs connectionless (UDP).
  - [ ] TCP segment format, 3-way handshake, 4-way teardown, flow/error control.
  - [ ] UDP datagram format and checksum.

---

## Phase 3: Multi-Subject Expansion ⚪

### 1. Fundamentals of Data Structures (FDS — CB2003) — `notes/fds/` (6 Units)
- [ ] Unit 1: Introduction to Data Structures and Complexity (`FDSU1.html`)
  - [ ] ADTs, classification, Big-O / Big-$\Omega$ / Big-$\Theta$ analysis, time-space trade-offs, recursion.
- [ ] Unit 2: Arrays and Searching & Sorting Techniques (`FDSU2.html`)
  - [ ] 1D/2D arrays, sparse matrix, dynamic arrays, Linear & Binary search.
  - [ ] Bubble, Selection, Insertion, Merge, Quick sort analysis. Sensor buffering case study.
- [ ] Unit 3: Linked Lists (`FDSU3.html`)
  - [ ] Singly, Doubly, and Circular linked lists, operations, polynomial arithmetic, memory allocation.
- [ ] Unit 4: Stacks and Queues (`FDSU4.html`)
  - [ ] Stack ADT, infix-to-postfix, expression evaluation, call stack recursion.
  - [ ] Linear, Circular, Priority queues and Deque with real-world applications.
- [ ] Unit 5: Trees (`FDSU5.html`)
  - [ ] Binary trees, BST operations (insert, search, delete, mirror, height).
  - [ ] In-order, Pre-order, Post-order (recursive/iterative), Expression trees, Huffman coding.
- [ ] Unit 6: Graphs (`FDSU6.html`)
  - [ ] Adjacency matrix/list, BFS, DFS, Warshall’s transitive closure, topological sorting.
  - [ ] Networking, social graphs, and attack path modelling case studies.

### 2. Object Oriented Programming (OOP — CB2006) — `notes/oop/` (4 Units) 🟡
- [x] **Unit 1: Introduction to OOP [C++]** (`OOPU1.html`) ✅
  - [x] OOP fundamentals vs C, I/O streams, dynamic memory (`new`/`delete`), classes & objects.
  - [x] Access specifiers, `this` pointer, constructors/destructors, static members, friend functions, overloading.
  - [x] Complete 13-chapter lecture suite: const/control structures, memory map, inheritance, virtual functions, templates, and file handling.
- [ ] Unit 2: OOP Principles [C++ & STL] (`OOPU2.html`)
  - [ ] Inheritance types, base/derived constructors, upcasting/downcasting, virtual functions.
  - [ ] Polymorphism, pure virtual, virtual base class, file handling, templates, STL containers & iterators.
- [ ] Unit 3: Fundamentals of Java Programming and OOP Concepts (`OOPU3.html`)
  - [ ] Java architecture (JDK/JRE/JVM), types, control flow, Java classes/objects, `Scanner`.
  - [ ] `super`/`this`, modifiers, encapsulation, inheritance (`extends`/`implements`), polymorphism, interfaces.
- [ ] Unit 4: Exception Handling, GUI and Database Programming in Java (`OOPU4.html`)
  - [ ] `try`/`catch`/`finally`/`throw`/`throws`, Java AWT & Swing components, layout managers.
  - [ ] Event delegation model, JDBC connectivity (MySQL/Oracle), CRUD operations, Collection framework.

### 3. Basics of IoT (BIoT — CB2005) — `notes/biot/` (4 Units)
- [ ] Unit 1: Introduction to IoT (`BIOTU1.html`)
  - [ ] Definitions, characteristics, physical/logical design, enabling technologies, identifiers, IoT vs M2M.
- [ ] Unit 2: Introduction of Microprocessor & Microcontroller (`BIOTU2.html`)
  - [ ] Microprocessor vs microcontroller, MCS-51 (8051) architecture, pin configuration, port architecture.
  - [ ] Memory organization (RAM/ROM/SFRs) and external memory interfacing.
- [ ] Unit 3: IP based Protocols for IoT (`BIOTU3.html`)
  - [ ] IPv6, 6LoWPAN adaptation, RPL routing, REST web services, AMQP, CoAP, MQTT (pub/sub, QoS).
  - [ ] Authorization and access control in IoT.
- [ ] Unit 4: IoT Security and Privacy (`BIOTU4.html`)
  - [ ] Security challenges, threat landscape, encryption & authentication for constrained nodes.
  - [ ] Privacy concerns, regulations, and security best practices (secure boot, isolation, FOTA).

### 4. Probability and Statistics (PAS — MM0501) — `notes/pas/` (4 Units)
- [x] **Unit 1: Descriptive Statistics** (`PASU1.html`) ✅
  - [x] Qualitative/quantitative data, frequency distributions, visualizations (histograms, box plots).
  - [x] Measures of central tendency (mean, median, mode) and dispersion (variance, SD, CV).
- [x] **Unit 2: Probability Basics and distributions** (`PASU2.html`) ✅
  - [x] Probability axioms, conditional probability, Bayes’ theorem, random variables (PMF, PDF, CDF).
  - [x] Expectation and variance. Discrete (Bernoulli, Binomial, Poisson) & Continuous (Uniform, Exponential).
- [ ] Unit 3: Normal Distribution & Sampling Theory (`PASU3.html`)
  - [ ] Normal distribution properties, $Z$-scores, $P$-values, normal approximation to Binomial/Poisson.
  - [ ] Sampling distributions, sample mean/variance, Standard Error, Central Limit Theorem (CLT).
- [ ] Unit 4: Estimation, Hypothesis Testing, Correlation & Regression (`PASU4.html`)
  - [ ] Point & interval estimation (confidence intervals). Null/alternative hypotheses, Type I/II errors.
  - [ ] One-sample $Z$-test and $t$-test, Chi-Square ($\chi^2$) goodness of fit & independence tests.
  - [ ] One-Way ANOVA ($F$-test), Pearson correlation, regression lines, and method of least squares.

---

## Phase 4: Reader & Portal Enhancements ⚪

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
