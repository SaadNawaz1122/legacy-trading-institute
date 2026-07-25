# Legacy Trading Institute — Frontend

A premium, dark-mode fintech landing page for a Forex trading education
academy. Frontend only — no backend, auth, database, or payments.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Icons

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`, ready to deploy to any static
host (Vercel, Netlify, S3, etc).

## Project structure

```
src/
  components/       All page sections (Navbar, Hero, About, Courses, ...)
  data/content.js   All copy and structured content in one place
  index.css         Design tokens, color palette, custom animations
  App.jsx           Assembles every section into the page
```

## Notes

- All prices, instructor bios, and market prices are placeholder content
  for demonstration only.
- The contact form and newsletter signup are UI only — submitting shows a
  confirmation message but sends no data anywhere.
- The Live Market ticker and table show static placeholder data, styled to
  resemble a live feed.
