# BatchHub Notes Archive

Static HTML notes repository for **[BatchHub](https://batch-hub-red.vercel.app)** — deployed automatically to GitHub Pages.

**Live URL**: [https://shreyx404.github.io/BatchHub-notes/](https://shreyx404.github.io/BatchHub-notes/)

---

## 📁 Structure

```
BatchHub-notes/
├── .github/workflows/deploy.yml   ← Auto-deploy on push to main
├── notes/                         ← Subject folders
│   ├── dcn/                       ← Data Communication & Networks
│   ├── fds/                       ← Fundamentals of Data Science
│   ├── se/                        ← Software Engineering
│   ├── oop/                       ← Object-Oriented Programming
│   ├── biot/                      ← Basics of IoT
│   └── pas/                       ← Probability and Statistics
├── templates/note-template.html   ← Reusable note template
├── scripts/generate-manifest.js   ← Builds notes.json
├── index.html                     ← Notes archive portal
├── notes.json                     ← Auto-generated manifest
└── package.json
```

---

## 🚀 Setup (One-Time)

### 1. Enable GitHub Pages

1. Go to **[Repository Settings](https://github.com/shreyx404/BatchHub-notes/settings/pages)**
2. Under **Build and deployment** → **Source**, select **GitHub Actions**
3. Done! Every push to `main` triggers automatic deployment.

### 2. Install (optional, for manifest generation)

```bash
# No npm install needed — zero dependencies
# Just run the build script:
npm run build
```

---

## 📝 Adding a New Note

### Step 1: Copy the template

```bash
cp templates/note-template.html notes/SUBJECT/unitN-topic-name.html
```

**Naming convention**: `unitN-topic-name.html` (lowercase, hyphens).

### Step 2: Fill in the metadata

Edit the `<meta>` tags in `<head>`:

```html
<meta name="note-id"      content="dcn-unit3">
<meta name="note-subject" content="DCN">
<meta name="note-unit"    content="Unit 3">
<meta name="note-tags"    content="Networking, TCP/IP, Protocols">
<meta name="note-summary" content="A brief one-line description of the note.">
<title>Unit III — TCP/IP Model | DCN Notes</title>
```

### Step 3: Write the content

Use the template's built-in components:

```html
<!-- Key Concept -->
<div class="callout key">
  <div class="callout-label">Key Concept</div>
  <p>Your explanation here.</p>
</div>

<!-- Tip -->
<div class="callout tip">
  <div class="callout-label">💡 Tip</div>
  <p>Helpful hint.</p>
</div>

<!-- Warning -->
<div class="callout warning">
  <div class="callout-label">⚠ Warning</div>
  <p>Common mistake.</p>
</div>

<!-- Exam Note -->
<div class="callout exam">
  <div class="callout-label">📝 Exam Note</div>
  <p>Frequently asked.</p>
</div>
```

### Step 4: Regenerate manifest & push

```bash
npm run build        # Generates notes.json
git add .
git commit -m "Add DCN Unit 3 notes"
git push
```

The note will be live within ~30 seconds at:
```
https://shreyx404.github.io/BatchHub-notes/notes/dcn/unit3-tcp-ip.html
```

---

## 🔗 Adding Notes to BatchHub

1. Open the [Notes Archive](https://shreyx404.github.io/BatchHub-notes/)
2. Find your note → click **"Copy Link"**
3. In BatchHub, go to **Admin Dashboard** → `/admin/notes`
4. Select the subject, enter the title, paste the copied URL
5. Click **Save** — the note appears instantly in the BatchHub notes gallery!

---

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Scans `notes/` and regenerates `notes.json` |

---

## 📂 Subject Codes

| Code | Subject |
|------|---------|
| `dcn` | Data Communication & Networks |
| `fds` | Fundamentals of Data Science |
| `se` | Software Engineering |
| `oop` | Object-Oriented Programming |
| `biot` | Basics of IoT |
| `pas` | Probability and Statistics |

---

## License

MIT
