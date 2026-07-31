# Contributing to Slop Watch

Slop Watch is a public catalog of **AI products that went wrong**: quality collapse, breakage, live outages, and security debt — each entry tied to **public proof**.

This file explains how to propose a new entry, how to send a pull request, and what to do if a product’s author wants a page taken down or changed.

中文说明见下文 [中文](#中文).

## What belongs here

**In**

- A **named** product or stack (not a vague trend).
- Public evidence you can open and check: issue trackers, CVEs, security write-ups, credible failure reports, maintainer posts.
- Copy that stays plain: what it is, why it is on the list, and links that back that up.

**Out**

- Promo roundups or star-count brag pages.
- Anonymous scare posts with no named product.
- Claims that only rest on hype or viral praise.
- Editor notes, drafts, or “replace this later” text in published fields.

Site rules in short: [Standards](https://slop-watch.akr.moe/standards/) · [关于收录标准](https://slop-watch.akr.moe/zh/standards/).

## How to propose a new entry

You can use either path. Both are fine.

### Option A — GitHub Issue

1. Open an issue on [AkaraChen/slop-watch](https://github.com/AkaraChen/slop-watch/issues).
2. Title it clearly, e.g. `Propose: ProductName`.
3. Include at least:

| Item | What we need |
| --- | --- |
| Name | Official or commonly used product name |
| Primary link | Homepage or main repository |
| Short description | What the product is (plain sentences) |
| Why list it | Quality failure / incident / security debt in plain language |
| References | URLs to issues, CVEs, reports, posts — with a one-line note for each |
| Tags (optional) | e.g. `agent`, `security`, `compiler` |

Maintainers will review evidence and decide whether it fits the catalog.

### Option B — Pull Request

1. Fork the repo (or branch from `master`).
2. Add a specimen file under `src/content/slops/<slug>.md`.
3. Add images under `src/assets/slops/` and point `featuredImage` / `icon` at them.
4. If you can, add locale overlays in `src/i18n/` (see existing entries). English `description` / `reason` in the Markdown frontmatter are the minimum.
5. Run `npm install` and `npm run build` so content validation passes.
6. Open a PR that explains what you added and lists the public sources.

### Specimen fields (Markdown frontmatter)

There is **no** long body section under the frontmatter. Pages use **description**, **reason**, and **references** only.

| Field | Required | Notes |
| --- | --- | --- |
| `name` | yes | Display title |
| `description` | yes | What this is |
| `link` | yes | Primary URL |
| `reason` | yes | Why it is listed |
| `featuredImage` | yes | Image in this repo |
| `publishedAt` | yes | Catalog date |
| `icon` | no | Small icon |
| `lastVerifiedAt` | no | When evidence was last checked |
| `tags` | no | String tags |
| `references` | no | `{ title, url, summary, source?, publishedAt? }[]` |

Schema: `src/content.config.ts`. Follow the tone of existing files under `src/content/slops/`. Write full sentences. Read the copy aloud; if it sounds like jargon or a telegram, rewrite it.

## Corrections to existing entries

If a fact is wrong (broken link, outdated issue count, bad date), open an **issue** or a **PR** with the fix and a source. Prefer small, checkable changes.

## Author requests: takedown or content changes

If you are the **author or operator** of a product listed here and you want the page **removed** or the **wording adjusted**:

1. Open a GitHub issue on this repository, or contact the maintainer **[@AkaraChen](https://github.com/AkaraChen)** (Eric).
2. Say who you are and which entry you mean (name + URL).
3. Say what you want: full removal, a factual correction, or a wording change.
4. If you dispute the listing, point to public sources that support your side. We still care about evidence, not private pressure alone.

We will respond as maintainers. Listing is based on public trail; we can correct mistakes and we can discuss removal. Please use issue or direct contact — do not open drive-by PRs that only delete an entry without that conversation unless maintainers asked you to.

## Code and site changes

Bug fixes, UI, i18n, and tooling PRs are welcome. Keep the change small and say how you checked it (`npm run build`, screenshots for UI). UI work should include real screenshots when the change is visual.

## License and tone

Keep numbers, URLs, CVE IDs, and issue IDs accurate. Tone may be sharp; evidence must still hold.

---

## 中文

Slop Watch 是公开的 **AI 产品翻车名录**：质量失控、反复损坏、线上事故、安全债。每条都要有**能点开核对的公开材料**。

### 什么适合收录

**收：** 有名字的产品或工具栈；issue / CVE / 安全通告 / 可信事故报道等公开证据；说明「是什么」和「为什么在这」的白话。

**不收：** 安利合集；只有骂没有具名产品；只靠热度或 star 数；正文里夹编辑草稿备注。

细则见 [收录标准](https://slop-watch.akr.moe/zh/standards/)。

### 怎么投稿

两条路都可以。

**Issue：** 在 [AkaraChen/slop-watch](https://github.com/AkaraChen/slop-watch/issues) 开 issue，标题如 `Propose: 产品名`，写上名称、主链接、简介、为何上榜、参考链接（每条一句说明）。

**PR：** 在 `src/content/slops/<slug>.md` 增加条目，图片放 `src/assets/slops/`，本地 `npm run build` 通过后开 PR，并写明公开来源。条目**没有**长正文，只有 description、reason、references（见上表与 `src/content.config.ts`）。

### 纠错

链接失效、数字过时、日期错误：开 issue 或 PR，附上依据。

### 作者要求下架或改文案

如果你是**被收录产品的作者或运营方**，希望**下架**或**调整内容**：

1. 在本仓库开 GitHub issue，或直接联系维护者 **[@AkaraChen](https://github.com/AkaraChen)**（Eric）。
2. 说明身份、是哪一条（名称 + 页面链接）、希望下架还是改哪几句。
3. 若对事实有异议，请附上能公开核对的材料。

我们会按维护流程回复。收录依据公开记录；事实错误可以改，下架可以谈。请先 issue 或私信维护者，不要在未沟通时直接 PR 删条目（除非维护者请你这么做）。

### 代码与站点

修 bug、改 UI、补翻译都欢迎。改动尽量小，并说明你怎么验证的。有界面改动时请附真实截图。
