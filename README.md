# Slop Watch

[![LINUX DO](https://img.shields.io/badge/LINUX-DO-FFB003)](https://linux.do)

A showcase catalog of **AI Slop** — each entry is a named specimen with display assets, a primary link, description, selection reason, and supporting references.

Built with **Astro** (latest stable) and **Content Collections**.

This project acknowledges and participates in the [LINUX DO](https://linux.do) community.  
本项目积极参与并认可 [linux.do 社区](https://linux.do)。

## Requirements

- Node.js `>= 22.12.0`

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build + content validation
npm run preview  # preview the production build
```

## Content model (`slops` collection)

Add Markdown/MDX files under `src/content/slops/`. The file name becomes the URL slug (`/slops/<id>/`).

| Field | Required | Notes |
| --- | --- | --- |
| `name` | yes | Display title |
| `description` | yes | What this slop is |
| `link` | yes | Primary external URL |
| `reason` | yes | Why it was listed |
| `featuredImage` | yes | Repo image via Content `image()` |
| `publishedAt` | yes | Catalog date (sorting) |
| `icon` | no | Small icon |
| `tags` | no | e.g. `image`, `seo-farm`, `chatbot` |
| `references` | no | `{ title, url, summary, source?, publishedAt? }[]` |

Schema lives in `src/content.config.ts`.

## Pages

- `/` — catalog (English default)
- `/zh/`, `/de/`, `/it/`, `/ja/`, `/ko/`, `/es/` — same UI + translated description/reason
- `/slops/<slug>/` and `/{lang}/slops/<slug>/` — entry detail
- `/about/` and `/{lang}/about/`
- `/rss.xml` — feed of entries

Locales: `en` (default, no prefix), `zh`, `de`, `it`, `ja`, `ko`, `es`.
UI strings: `src/i18n/ui.ts`. Content overlays: `src/i18n/content.ts`.

## Contributing

How to propose entries (issue or PR), and how product authors can request removal or wording changes: see [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Content and code for the Slop Watch project.
