# Slop Watch

A showcase catalog of **AI Slop** — each entry is a named specimen with display assets, a primary link, description, selection reason, and supporting references.

Built with **Astro** (latest stable) and **Content Collections**.

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
| `status` | no | `featured` \| `listed` \| `archived` (default `listed`) |
| `references` | no | `{ title, url, summary, source?, publishedAt? }[]` |

Schema lives in `src/content.config.ts`.

## Pages

- `/` — catalog list (featured first, then by date)
- `/slops/<slug>/` — entry detail (reason + references + body)
- `/about` — project blurb
- `/rss.xml` — feed of entries

## License

Content and code for the Slop Watch project.
