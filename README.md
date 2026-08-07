# Slop Watch

[![LINUX SB](https://img.shields.io/badge/LINUX%20SB-SB%20%E7%AB%99-FFB003?logo=data:image/svg%2Bxml;base64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgPjxnPjxnPjxjaXJjbGUgZmlsbD0iI0VGRUZFRiIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ij48L2NpcmNsZT48cGF0aCBkPSJNMjc5LjY5MTI0LDI2OS43ODQ1OTQgQzI4OS4wOTIxNDYsMjUzLjQ3MTI1NyAyODMuNTYyMjAxLDIzMi41OTU3MTcgMjY3LjI0ODg2NSwyMjMuMTk0ODExIEMyNTAuOTM1NTI5LDIxMy43OTM5MDYgMjMwLjA1OTk4OSwyMTkuMzIzODUgMjIwLjY1OTA4MywyMzUuNjM3MTg2IEwyMTIuMDg3NjY5LDI1MC40Mjk3ODggQzIwMi42ODY3NjQsMjY2Ljc0MzEyNCAyMDguMjE2NzA4LDI4Ny42MTg2NjQgMjI0LjUzMDA0NCwyOTcuMDE5NTcgQzI0MC44NDMzOCwzMDYuNDIwNDc2IDI2MS43MTg5MjEsMzAwLjg5MDUzMSAyNzEuMTE5ODI2LDI4NC41NzcxOTUgTDI3OS42OTEyNCwyNjkuNzg0NTk0IFoiPjwvcGF0aD48cGF0aCBkPSJNMjk4LjYzMTMsNjguMzU2MzY2MiBDMzA4LjAzMjIwNiw1Mi4wNDMwMzAxIDMwMi41MDIyNjEsMzEuMTY3NDg5NyAyODYuMTg4OTI1LDIxLjc2NjU4NDEgQzI2OS44NzU1ODksMTIuMzY1Njc4NSAyNDkuMDAwMDQ4LDE3Ljg5NTYyMyAyMzkuNTk5MTQzLDM0LjIwODk1OTEgTDE0NS44NjY1ODQsMTk2LjY1MTA3OCBDMTM2LjQ2NTY3OCwyMTIuOTY0NDE0IDE0MS45OTU2MjMsMjMzLjgzOTk1NSAxNTguMzA4OTU5LDI0My4yNDA4NiBDMTc0LjYyMjI5NSwyNTIuNjQxNzY2IDE5NS40OTc4MzYsMjQ3LjExMTgyMSAyMDQuODk4NzQxLDIzMC43OTg0ODUgTDI5OC42MzEzLDY4LjM1NjM2NjIgWiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTUuNDE5NzI1LDMwNy4yNDk4MjkgQzM2NC44MjUyMywyOTAuOTEwMzQ2IDM1OS4yOTI1OCwyNzAuMDAxMzQ2IDM0Mi45NzEyNjMsMjYwLjU4NTM3MyBDMzI2LjY0OTk0NiwyNTEuMTY5NCAzMDUuNzY0MTkzLDI1Ni43MDgyMDcgMjk2LjM1ODY4OSwyNzMuMDQ3NjkxIEwyMDIuNTgwMjc1LDQzNS43NTAxNzEgQzE5My4xNzQ3Nyw0NTIuMDg5NjU0IDE5OC43MDc0Miw0NzIuOTk4NjU0IDIxNS4wMjg3MzcsNDgyLjQxNDYyNyBDMjMxLjM1MDA1NCw0OTEuODMwNiAyNTIuMjM1ODA3LDQ4Ni4yOTE3OTMgMjYxLjY0MTMxMSw0NjkuOTUyMzA5IEwzNTUuNDE5NzI1LDMwNy4yNDk4MjkgWiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+)](https://linux.sb)

A showcase catalog of **AI Slop** — each entry is a named specimen with display assets, a primary link, description, selection reason, and supporting references.

Built with **Astro** (latest stable) and **Content Collections**.

This project used to post and engage in the [LINUX DO](https://linux.do) community — purely for the traffic, honestly. The badge was part of the deal. The truth is, we never really liked it. Now that the updated ideal community [LINUX SB](https://linux.sb) is here, we can finally admit it: goodbye LINUX DO, hello SB 站.

本项目曾为流量在 [linux.do 社区](https://linux.do) 发帖互动，并顺手挂上了推广徽章。说实话，本项目一直看它不爽。如今 [LINUX SB](https://linux.sb)（简称 SB 站）这个"更新的理想型社区"上线，终于可以坦白了：别了 linux.do，你好 SB 站。

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
