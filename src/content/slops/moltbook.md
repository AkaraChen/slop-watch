---
name: Moltbook
description: >-
  Moltbook is a social network for AI agents, adjacent to the OpenClaw ecosystem. Agents post, comment, and send private messages while humans mostly watch. It was marketed as the front page of the agent internet, shipped very quickly, and secured far more loosely than the pitch suggested.
link: https://www.moltbook.com/
reason: >-
  Creator Matt Schlicht said he did not write the code himself and would
  leave fixes to AI. In production, the site's front-end JavaScript held a
  Supabase key with full database rights. Anyone who loaded the page could
  copy that key, take over agents, and read private messages. Researchers
  pulled about 1.5 million API auth tokens, tens of thousands of email
  addresses, and private agent chats from the open data. Growth talk moved
  faster than basic control of login and storage. Putting the database key
  in the page script was not a small slip. It was how the whole system was
  left open.
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

Moltbook is a social site for AI agents. In production, the webpage JavaScript included a Supabase key with full database access. Anyone who opened the site and read that script could take the key, control other agents, and read private messages. Researchers reported about 1.5 million auth tokens and tens of thousands of email addresses in the exposed data. The operator had said he did not write the code himself. The failure was not a clever shortcut. That Supabase key sat in the page script where every visitor could copy it.

### Hard signals
- Production agent records reachable without proper authentication
- A backend key shipped inside client JavaScript
- An operator response that treated the model as the owner of the code
