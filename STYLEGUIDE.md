# Visual & Editorial Style Guide (`STYLEGUIDE.md`)

> **Scope**: This document defines the visual design system, CSS variable tokens, UI widget patterns, and editorial tone guidelines for all academic notes hosted in `BatchHub-notes`.
>
> **Goal**: Ensure 100% visual and structural cohesion across all 22 curriculum notes (FDS: 6, DCN: 4, BIOT: 4, OOP: 4, PAS: 4; currently published: 5/22 across DCN, OOP & PAS), whether authored by humans or AI agents.

---

## 1. Design Philosophy

`BatchHub-notes` employs a **high-aesthetic dark editorial theme**:
- **Distraction-Free**: Minimal ornamentation, maximum whitespace and line height for sustained technical study.
- **Deep Contrast with Warm Accents**: Pure charcoal/black surfaces (`#0a0a0a`) punctuated by warm amber accents (`#e8c47c`) and high-legibility light-gray typography (`#e8e8e8`).
- **Technical Rigor**: Monospaced font hierarchy for all parameters, equations, table headers, and metadata.
- **Instant Load & Zero Layout Shift**: Pure CSS3, zero runtime framework scripts, zero third-party font tracking.

---

## 2. Typography Hierarchy

The system loads two primary typefaces from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
```

| Element | Font Family | Weight | Size | Line Height | Usage |
|---|---|---|---|---|---|
| **Document Title (`h1`)** | `IBM Plex Sans` | 600–700 | 36px–38px | 1.15 | Single top-level document heading |
| **Section Heading (`h2`)** | `IBM Plex Sans` | 600 | 22px | 1.3 | Major chapter / topic divisions |
| **Sub-heading (`h3`)** | `IBM Plex Sans` | 600 | 15px–16px | 1.4 | Specific mechanisms / concepts |
| **Minor Heading (`h4`)** | `IBM Plex Mono` | 600 | 13px | 1.4 | Protocol names, parameters |
| **Body Paragraph (`p`, `li`)** | `IBM Plex Sans` | 300 (Light) | 14.5px–15px | 1.75 | Explanations, derivations, proofs |
| **Inline Code (`code`)** | `IBM Plex Mono` | 400 | 13px | 1.0 | Variable names, commands, keywords |
| **Formulas / Tables / Metadata** | `IBM Plex Mono` | 400–500 | 10px–13px | 1.5 | Mathematical formulas, table cells, eyebrows |

---

## 3. CSS Variable Design Tokens

Every note HTML file must include the standardized `:root` design token block in its internal `<style>` tag:

```css
:root {
  /* Surface Layers */
  --bg: #0a0a0a;             /* Canvas background */
  --surface: #111111;        /* Cards, sidebars, diagram frames */
  --surface2: #181818;       /* Table headers, elevated callouts */
  --surface3: #1f1f1f;       /* Subtle active states, hover fills */
  
  /* Borders */
  --border: #252525;         /* Standard hairline divider */
  --border2: #2e2e2e;        /* Elevated border, active tabs */
  
  /* Text & Accents */
  --text: #e8e8e8;           /* Primary reading text */
  --text-dim: #888888;       /* Secondary notes, captions */
  --text-dimmer: #4a4a56;    /* Metadata, borders, section counters */
  --accent: #f0f0f0;         /* High-contrast headings and active labels */
  --warm: #e8c47c;           /* Primary brand accent (BatchHub warm gold) */
  --warm-dim: #c4a060;       /* Secondary warm text */
  --warm-bg: rgba(232, 196, 124, 0.05); /* Tinted callout fill */
  --warm-border: rgba(232, 196, 124, 0.2); /* Tinted callout border */

  /* Semantic Alerts */
  --tip-text: #5cb878;       /* Success / Tip green */
  --tip-bg: rgba(92, 184, 120, 0.06);
  --tip-border: rgba(92, 184, 120, 0.25);
  --warn-text: #e8a050;      /* Warning amber */
  --warn-bg: rgba(232, 160, 80, 0.06);
  --warn-border: rgba(232, 160, 80, 0.25);
  --exam-text: #8898e8;      /* Exam note indigo */
  --exam-bg: rgba(120, 140, 232, 0.06);
  --exam-border: rgba(120, 140, 232, 0.25);

  /* Font Stacks */
  --mono: 'IBM Plex Mono', monospace;
  --sans: 'IBM Plex Sans', sans-serif;
}
```

---

## 4. UI Component Library (HTML Patterns)

### 4.1 Callout Suite

#### 1. Key Concept (`callout key`)
Use for core definitions, laws, and golden engineering rules.
```html
<div class="callout key">
  <div class="callout-label">Key Concept</div>
  <p>The <strong>Nyquist Bit Rate</strong> formula defines the theoretical maximum bit rate for a noiseless channel: <code>BitRate = 2 × Bandwidth × log₂(L)</code>.</p>
</div>
```

#### 2. Study Tip (`callout tip`)
Use for memorization techniques, calculation shortcuts, and mnemonics.
```html
<div class="callout tip">
  <div class="callout-label">💡 Study Tip</div>
  <p>To recall the OSI layers from Layer 7 down to Layer 1, remember: <em>"All People Seem To Need Data Processing"</em>.</p>
</div>
```

#### 3. Warning / Pitfall (`callout warning`)
Use for common student mistakes, boundary condition errors, or confusion between similar protocols.
```html
<div class="callout warning">
  <div class="callout-label">⚠ Warning</div>
  <p>Do not confuse <strong>Flow Control</strong> (preventing sender from overwhelming receiver) with <strong>Congestion Control</strong> (preventing sender from overwhelming intermediate routers).</p>
</div>
```

#### 4. Exam Focus Note (`callout exam`)
Use for high-frequency university exam questions, 5/10 mark recurring patterns, and marking schemes.
```html
<div class="callout exam">
  <div class="callout-label">📝 Exam Note (8–10 Marks)</div>
  <p>A complete derivation of the Go-Back-N ARQ efficiency with sliding window size <code>W = 2^m - 1</code> is frequently asked in Section B.</p>
</div>
```

---

### 4.2 Mathematical Formulas (`formula`)
Wrap mathematical equations in the monospaced `.formula` container:
```html
<div class="formula">
  Capacity = B × log₂(1 + SNR)
</div>
```

---

### 4.3 Comparison & Protocol Tables (`table-wrap`)
Always nest tables inside `<div class="table-wrap">` to guarantee mobile horizontal scrolling without clipping viewport layout:

```html
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>TCP</th>
        <th>UDP</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Connection</strong></td>
        <td>Connection-oriented (3-way handshake)</td>
        <td>Connectionless (Datagrams)</td>
      </tr>
      <tr>
        <td><strong>Reliability</strong></td>
        <td>Guaranteed delivery with ARQ retransmission</td>
        <td>Best-effort, no retransmission</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### 4.4 Diagrams & Architecture Visualizers (`visual`)

#### Standard ASCII / Flow Frame
```html
<div class="visual">
  <div class="flow-row">
    <div class="flow-node">Application</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Transport</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Network</div>
  </div>
  <div class="visual-caption">Figure 2.1 — Top-down Encapsulation Pipeline</div>
</div>
```

#### Bit Visualizer (`err-bits`)
```html
<div class="err-row">
  <span class="err-label">Data Word</span>
  <div class="err-bits">
    <span class="bit">1</span>
    <span class="bit">0</span>
    <span class="bit err">1</span>
    <span class="bit">1</span>
  </div>
</div>
```

---

## 5. Cross-Device Responsive Standards & Breakpoints

All notes MUST render cleanly across **Mobile** (320px–640px), **Tablet** (641px–1024px), and **PC/Laptop** (>1024px) viewports with zero horizontal overflow.

### 5.1 Breakpoint System
- **Desktop / Laptop (`> 1024px`)**: Fixed sidebar TOC with active-section tracking, spacious content column (`max-width: 1000px–1180px`), multi-column comparison tables and diagrams.
- **Tablet (`768px – 1024px`)**: Reduced layout padding, collapsible or condensed TOC drawer, adaptive two-column grids.
- **Mobile (`< 768px` down to `320px`)**:
  - Floating TOC drawer button (`.menu-btn` / `.toc-toggle`) with full-viewport off-canvas drawer and backdrop scrim overlay (`.scrim`).
  - Fluid typography using `clamp(min, preferred, max)` on `h1` and `h2` to prevent word clipping.
  - Universal table horizontal scrolling container (`overflow-x: auto; -webkit-overflow-scrolling: touch;`).
  - Touch target accessibility: Minimum 40–44px tap area on interactive controls.
  - Safe area insets: `padding-top: max(14px, env(safe-area-inset-top));`.

### 5.2 Zero-Blowout Horizontal Invariants
To prevent horizontal page expansion and text truncation on small mobile screens:
1. **Root Boundary**: Set `overflow-x: hidden; max-width: 100vw; width: 100%;` on `html` and `body` with `overflow-wrap: break-word`.
2. **Block Layout on Mobile**: Convert `.layout` from multi-column CSS Grid to `display: block` at `<=960px` to prevent `1fr` minimum-content track blowout.
3. **No Negative Margins**: NEVER apply negative margins (`margin: 14px -16px`) to tables or diagrams on mobile. Negative margins push content past the right edge when container padding fluctuates, causing a persistent 16px horizontal bleed.
4. **Diagram & Table Encapsulation**: Wrap data tables and multi-unit diagrams (checkpoints, frame anatomy, pipelines) in dedicated `.table-wrap` or `.tw` scroll containers:
```css
.table-wrap, .tw, .tblwrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 18px 0 24px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
}
```

---

## 6. Print Optimization (`@media print`)

Every note MUST include this exact print style block so students can cleanly export high-resolution PDFs or print physical cheat-sheets:

```css
@media print {
  .sidebar, .toc-toggle, .progress-bar { display: none !important; }
  .main { margin-left: 0 !important; padding: 10px !important; max-width: 100% !important; }
  body { background: #ffffff !important; color: #111111 !important; font-size: 12px !important; }
  h1, h2, h3, h4, strong { color: #000000 !important; }
  .callout { border-color: #cccccc !important; background: #f9f9f9 !important; }
  .callout p, .callout li { color: #222222 !important; }
  table { font-size: 11px !important; }
  thead th { background: #eeeeee !important; color: #111111 !important; }
  tbody td { border-color: #dddddd !important; color: #222222 !important; }
  .visual { background: #f5f5f5 !important; border-color: #cccccc !important; }
  footer { display: none !important; }
  pre { background: #f5f5f5 !important; border-color: #cccccc !important; }
  pre code { color: #111111 !important; }
}
```

---

## 7. Editorial Guidelines & Voice

1. **High Signal-to-Noise Ratio**: Cut conversational padding. Begin sections directly with definitions, bullet points, and architecture diagrams.
2. **Bold Key Terms**: Always emphasize the primary term on first mention (`<strong>...</strong>`).
3. **Structured Comparative Analysis**: When contrasting two concepts (e.g. TCP vs UDP, Simplex vs Duplex, IPv4 vs IPv6), use structured comparison tables rather than long discursive paragraphs.
4. **Concrete Examples**: Follow abstract definitions immediately with real-world protocol examples (e.g. HTTP, DNS, IEEE 802.3).
5. **Exam-Ready Summary**: End every major unit with a "Key Formulas & Takeaways" section.

---

## 8. Operational Rule for All Contributors & Agents

> ⚡ **Mandatory Synchronization Invariant**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
