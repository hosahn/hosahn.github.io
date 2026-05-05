# Hosan's Security Blog — Astro

Modernized rebuild of the legacy Gatsby blog (`../blog/`). Same content, fresh stack.

## Stack

- **Astro 5** — static site generator, zero JS by default
- **TypeScript** — strict mode
- **Sharp** — built-in image optimization
- **Shiki** — syntax highlighting (markdown code blocks)
- **@astrojs/sitemap** — sitemap.xml generation
- **@emailjs/browser** — contact form (client-only)
- **Utterances** — comments (GitHub Issues-backed)
- a
## Style

Hack The Box-inspired dark + neon-green aesthetic. Theme tokens in `src/styles/global.css` (`--bg`, `--accent`, etc.).

## Project layout

```
new-blog/
├── public/                 # static assets served as-is (favicon, profile image, robots.txt)
├── src/
│   ├── components/         # Astro components
│   ├── content/
│   │   └── blog/           # ← drop your *.md posts here (and any colocated images)
│   ├── layouts/            # BaseLayout
│   ├── lib/                # slug + date helpers
│   ├── pages/
│   │   ├── [slug]/index.astro   # post page (URL: /YYMMDD/)
│   │   ├── index.astro
│   │   ├── search.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/global.css
│   └── env.d.ts
├── astro.config.mjs
├── content.config.ts -> src/content.config.ts
├── tsconfig.json
└── package.json
```

## Migrating content from the legacy blog

The schema is compatible with the existing frontmatter. To migrate:

1. **Markdown posts** — copy `../blog/contents/*.md` → `src/content/blog/`
2. **Co-located images** — copy any image files that live next to `.md` files (referenced via `./*.png`) into `src/content/blog/` alongside the post
3. **Shared images** — if you keep using `../contentImages/...` references, copy `../blog/contentImages/` → `src/content/contentImages/`
4. **Profile image / favicon** — copy `../blog/static/profile-image.jpg` and `favicon.png` → `public/`

The frontmatter shape is unchanged:

```yaml
---
date: '2024-09-01'
before: '2024-08-25'
after: '2024-09-04'
title: '...'
categories: ['KOR', 'TUM']
summary: '...'
thumbnail: './celebrate.jpg'
---
```

URL structure is preserved — posts are served at `/<YYMMDD>/` derived from the `date` field, matching the old Gatsby slug.

## Commands

```sh
npm install     # install
npm run dev     # local dev at http://localhost:4321
npm run build   # production build → dist/
npm run preview # preview production build
npm run deploy  # build + push dist/ to master branch (gh-pages)
```

## EmailJS configuration

Defaults match the existing service. To override, create `.env`:

```
PUBLIC_EMAILJS_SERVICE_ID=service_xxx
PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

## Why this rebuild

The Gatsby project carried CVEs from `mdbreact`, `emailjs-com`, the `npm` runtime dep, and `gatsby-remark-external-links@0.0.4`, plus a hand-edit to `node_modules/gh-pages/lib/git.js` that was wiped on every install. Astro removes the React/GraphQL build pipeline entirely; the markdown is the only thing that needed to come along.
