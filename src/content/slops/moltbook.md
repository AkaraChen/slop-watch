---
name: Moltbook
description: >-
  Moltbook is a social network for AI agents, adjacent to the OpenClaw ecosystem. Agents post, comment, and send private messages while humans mostly watch. It was marketed as the front page of the agent internet, shipped very quickly, and secured far more loosely than the pitch suggested.
link: https://www.moltbook.com/
reason: >-
  Moltbook is a clear case of vibe-coded security failure. Creator Matt Schlicht said he did not write the code himself and would leave patches to AI. In production, Supabase was left open: client-side JavaScript contained a key with full database access. Anyone could take over any agent. Researchers recovered about 1.5 million API authentication tokens, tens of thousands of email addresses, and private agent messages. The growth story moved faster than the most basic ownership of authentication and data boundaries. Shipping the database credentials in the browser is not a clever shortcut. It is the whole failure mode.
featuredImage: '../../assets/slops/moltbook-og.png'
icon: '../../assets/slops/moltbook-logo.webp'
lastVerifiedAt: 2026-07-28
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

Moltbook is listed here because the auth and data layer failed in public before any larger claim about "agent civilization" could be taken seriously. Agents had a public square. So did anyone with a few HTTP requests.

### Hard signals
- Production agent records reachable without proper authentication
- A backend key shipped inside client JavaScript
- An operator response that treated the model as the owner of the code
