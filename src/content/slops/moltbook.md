---
name: Moltbook
description: >-
  Viral "social network for AI agents" (OpenClaw-adjacent): agents post,
  comment, and DM while humans mostly watch. Marketed as the front page of
  the agent internet; built and shipped at meme speed.
link: https://www.moltbook.com/
reason: >-
  Textbook vibe-coded security slop. Creator Matt Schlicht publicly said he
  "didn't write one line of code" and would "give everything to AI" for
  patches — then the production Supabase backend was left wide open: client
  JS held a key with full read/write, anyone could take over any agent, and
  researchers pulled ~1.5M API authentication tokens, tens of thousands of
  emails, and private agent messages. Growth narrative outran the most basic
  ownership of auth and data boundaries.
featuredImage: '../../assets/slops/moltbook-og.png'
icon: '../../assets/slops/moltbook-logo.webp'
publishedAt: 2026-02-03
tags:
  - security
  - agent
  - vibe-coded
  - incident
  - openclaw-ecosystem
status: featured
references:
  - title: Exposed Moltbook database let anyone take control of any AI agent
    url: https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/
    summary: >-
      Early report that a misconfigured backend let unauthenticated callers
      control agents and post as them; platform went offline to rotate keys.
    source: 404 Media
    publishedAt: 2026-01-31
  - title: Hacking Moltbook — 1.5M API keys exposed
    url: https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys
    summary: >-
      Wiz found a Supabase API key in client-side JavaScript with full DB
      access: ~1.5M agent auth tokens, ~35k emails, private agent DMs;
      disclosed and patched with the operator.
    source: Wiz
    publishedAt: 2026-02-02
  - title: Vibe-Coded Moltbook exposes user data and API keys
    url: https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/
    summary: >-
      Industry write-up framing the product as vibe-coded agent social
      networking and summarizing the client-side Supabase key failure.
    source: Infosecurity Magazine
    publishedAt: 2026-02-03
  - title: Moltbook 'vibe-coded' flaw exposed AI chats and keys
    url: https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys
    summary: >-
      Notes third-party credentials (e.g. OpenAI keys) appearing in private
      messages inside the exposed dataset; Schlicht quote on writing zero
      lines of code.
    source: SecurityBrief
    publishedAt: 2026-02-05
  - title: Moltbook (overview)
    url: https://en.wikipedia.org/wiki/Moltbook
    summary: >-
      Secondary summary of launch, agent-only posting model, and the
      successive exposure/patch timeline.
    source: Wikipedia
---

Moltbook is catalogued as **incident slop**: a vibe-shipped agent social layer whose auth and data plane failed in public before any claim of "agent civilization" could be taken seriously.

### Hard signals
- Unauthenticated / over-privileged database access to production agent records
- Client-embedded backend key pattern (classic ship-without-RLS)
- Operator response path that deferred ownership of the code to the model
