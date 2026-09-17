# Project Tasks & Roadmap (`TASKS.md`)

## Status Dashboard

| Phase | Description | Status | Progress |
|---|---|---|---|
| **Phase 1** | Repository Setup, CI/CD, Portal & Baseline Template | ✅ **Completed** | 100% |
| **Phase 2** | Data Communication & Networks (DCN) Units | 🟡 **In Progress** | 33% (2/6 Units) |
| **Phase 3** | Additional Subjects Ingestion (FDS, OOP, BIoT, PAS) | ⚪ **Planned** | 0% |
| **Phase 4** | Portal & Note Reader Enhancements | ⚪ **Backlog** | 0% |
| **Phase 5** | BatchHub Admin Sync & Batch Integration | 🟡 **In Progress** | 50% |

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
  - [x] Continuous Documentation & Push rule enforced across all markdowns.

---

## Phase 2: DCN (Data Communication & Networks) Ingestion 🟡

- [x] **Unit 1: Introduction to Data Communication** (`notes/dcn/DCNU1.html`)
  - [x] Data communication components & signal types.
  - [x] Transmission modes, multiplexing (FDM/TDM), switching techniques.
  - [x] Network topologies & transmission media.
- [x] **Unit 2: OSI 7-Layer Reference Model** (`notes/dcn/DCNU2.html`)
  - [x] Comprehensive layer breakdown (Physical to Application).
  - [x] Protocols, PDUs, and headers per layer.
  - [x] OSI vs. TCP/IP model comparison table.
- [ ] **Unit 3: Data Link Layer & MAC Sublayer**
  - [ ] Framing techniques (Bit/Byte stuffing).
  - [ ] Flow control protocols (Stop-and-Wait, Go-Back-N, Selective Repeat).
  - [ ] Error detection & correction (Parity, CRC, Hamming code).
  - [ ] CSMA/CD, CSMA/CA, Ethernet architecture.
- [ ] **Unit 4: Network Layer & IP Addressing**
  - [ ] IPv4 vs IPv6 header format and differences.
  - [ ] Classful vs Classless addressing (CIDR, Subnetting, VLSM).
  - [ ] Routing algorithms (Distance Vector / Bellman-Ford, Link State / Dijkstra).
  - [ ] Routing protocols (RIP, OSPF, BGP).
- [ ] **Unit 5: Transport Layer & Reliability**
  - [ ] Port addressing & socket multiplexing.
  - [ ] TCP 3-Way Handshake, teardown, and sliding window flow control.
  - [ ] TCP congestion control (Slow Start, Congestion Avoidance, Fast Retransmit).
  - [ ] UDP lightweight datagrams & use cases.
- [ ] **Unit 6: Application Layer & Network Security**
  - [ ] DNS resolution flow and resource records.
  - [ ] HTTP/1.1 vs HTTP/2 vs HTTP/3.
  - [ ] Cryptography basics: Symmetric vs Asymmetric encryption.
  - [ ] SSL/TLS handshake & HTTPS security.

---

## Phase 3: Multi-Subject Expansion ⚪

### 1. Fundamentals of Data Science (FDS) — `notes/fds/`
- [ ] Unit 1: Introduction to Data Science, Python Data Stack (NumPy, Pandas).
- [ ] Unit 2: Data Cleaning, Preprocessing & Feature Engineering.
- [ ] Unit 3: Exploratory Data Analysis (EDA) & Data Visualization.
- [ ] Unit 4: Statistical Inference, Correlation & Hypothesis Testing.
- [ ] Unit 5: Regression & Classification Models.
- [ ] Unit 6: Unsupervised Learning (Clustering, PCA) & Model Evaluation.

### 2. Object-Oriented Programming (OOP) — `notes/oop/`
- [ ] Unit 1: OOP Paradigms: Encapsulation, Abstraction, Inheritance, Polymorphism.
- [ ] Unit 2: Constructors, Destructors, and Object Lifecycle.
- [ ] Unit 3: Memory Management (Pointers, References, Dynamic Allocation).
- [ ] Unit 4: Operator Overloading & Function Overloading.
- [ ] Unit 5: Exception Handling & Template Metaprogramming (Generics).
- [ ] Unit 6: Standard Template Library (STL / Collections) & Design Patterns.

### 3. Basics of Internet of Things (BIoT) — `notes/biot/`
- [ ] Unit 1: IoT Architecture, Smart Objects, and Sensors/Actuators.
- [ ] Unit 2: Microcontrollers & SBCs (Arduino, ESP32, Raspberry Pi).
- [ ] Unit 3: Wireless Protocols (BLE, Zigbee, LoRaWAN, Wi-Fi).
- [ ] Unit 4: Messaging Protocols (MQTT, CoAP, WebSockets).
- [ ] Unit 5: Cloud & Edge Computing for IoT.
- [ ] Unit 6: IoT Security, Device Provisioning & Case Studies.

### 4. Probability and Statistics (PAS) — `notes/pas/`
- [ ] Unit 1: Probability Theory, Conditional Probability, Bayes' Theorem.
- [ ] Unit 2: Discrete Random Variables (Binomial, Poisson, Geometric).
- [ ] Unit 3: Continuous Distributions (Normal, Uniform, Exponential).
- [ ] Unit 4: Joint Distributions, Covariance & Central Limit Theorem.
- [ ] Unit 5: Point Estimation, Confidence Intervals & Hypothesis Testing.
- [ ] Unit 6: Regression Analysis & Queuing Theory.

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
