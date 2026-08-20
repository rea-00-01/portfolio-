# Riya Kanwar — Portfolio

## Getting started in VS Code

1. Open this folder in VS Code (`File > Open Folder`)
2. Open a terminal in VS Code (`` Ctrl+` ``) and run:
   ```
   npm install
   npm run dev
   ```
3. Open the local URL it prints (usually `http://localhost:5173`)

## Editing content (bio, projects, skills, links)

Everything editable lives in **`src/data/portfolio.js`** — one file, plain
JavaScript objects and arrays. Add/remove a project by adding/removing an
object in the `projects` array. Nothing else needs to change.

## Updating your resume PDF

Replace `public/resume.pdf` with your new file — **keep the filename
exactly `resume.pdf`** and the Contact section's download link updates
automatically, no code changes needed.

## Project structure

```
src/
  data/portfolio.js   ← all editable content lives here
  sections/            ← one file per page section (Hero, About, Skills, Projects, Contact)
  components/          ← shared UI pieces (Nav, etc.)
  index.css            ← design tokens (colors, fonts) — the whole palette lives here
public/
  videos/              ← the hero cat loop video
  resume.pdf           ← swap this file to update your downloadable resume
```

## Build status: Phase 1 complete

This is the static foundation — every section exists with real content,
but animations haven't been added yet (that's Phase 2 onward). Currently:

- ✅ Hero with looping cat video background
- ✅ About Me with bio + education (from resume)
- ✅ Skills grouped by category
- ✅ Projects grid (7 projects from resume)
- ✅ Contact with GitHub/LinkedIn/Instagram/Resume/email/phone

Next up (Phase 2): the falling-rectangle nav intro + custom cat-paw cursor.
