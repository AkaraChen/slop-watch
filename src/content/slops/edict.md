---
name: Edict
description: >-
  Edict lines up a pack of AI agents as the Three Departments and Six
  Ministries: someone hands out work, someone plans, someone reviews, and a
  live kanban sits in front. It runs on OpenClaw. The repo is cft0808/edict,
  mostly Python, often pitched against CrewAI and AutoGen. A few months after
  create, GitHub was around 16k stars.
link: https://github.com/cft0808/edict
reason: >-
  It looks like serious architecture and sounds like “ancient bureaucracy runs
  AI.” Peel it back and you mostly get OpenClaw install scripts, role prompts,
  and a dashboard with a new skin. The public fight is part of the story:
  当皇上 (wanikua/danghuangshang) shipped about twenty-one hours earlier with
  the same court setup and overlapping pinyin agent names, then filed issues
  #55 and #94 saying Edict copied without credit. Edict closed them as
  non-technical talk. Stars kept rising. We list it not for one CVE, but
  because the story is thick, the two repos bite each other in public, and the
  homepage points at openclaw.ai instead of a first-party product site. Users
  also report a dead kanban, ministries often offline (#251), and webhook SSRF
  hardening still in flight.
featuredImage: '../../assets/slops/edict-og.png'
icon: '../../assets/slops/edict-icon.png'
lastVerifiedAt: 2026-07-29
publishedAt: 2026-07-29
tags:
  - agent
  - multi-agent
  - openclaw-ecosystem
  - cosplay
  - attribution
  - quality
references:
  - title: cft0808/edict repository
    url: https://github.com/cft0808/edict
    summary: >-
      OpenClaw multi-agent project dressed as an imperial court. About 16k
      stars, created 2026-02-23 UTC, MIT, mostly Python, often marketed with a
      React kanban.
    source: GitHub
  - title: Issue 55 plagiarism or missing attribution claim
    url: https://github.com/cft0808/edict/issues/55
    summary: >-
      wanikua says the core idea and agent design came from their earlier court
      tutorial. Timeline puts Edict about 21 hours later. Closed as
      non-technical.
    source: GitHub Issues
    publishedAt: 2026-03-05
  - title: Issue 94 follow-up originality complaint
    url: https://github.com/cft0808/edict/issues/94
    summary: Second closed issue from the same author, still about credit.
    source: GitHub Issues
    publishedAt: 2026-03-08
  - title: danghuangshang originality notice counterparty repo
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md
    summary: >-
      Lists matching ministry maps, pinyin agent IDs (bingbu, hubu, libu,
      gongbu, xingbu), and similar comparison marketing. The doc says 2025;
      GitHub created_at is 2026.
    source: GitHub
  - title: Issue 318 SSRF hardening on generic webhook channel
    url: https://github.com/cft0808/edict/issues/318
    summary: Security work on webhook URL checks in the court UI (CWE-918).
    source: GitHub Issues
  - title: Issue 317 harden webhook against internal addresses
    url: https://github.com/cft0808/edict/issues/317
    summary: Open request to block private and loopback webhook targets.
    source: GitHub Issues
  - title: Issue 251 court agents often offline
    url: https://github.com/cft0808/edict/issues/251
    summary: Field report that ministry agents often show offline on the board.
    source: GitHub Issues
    publishedAt: 2026-04-02
---

Edict is another OpenClaw multi-agent pack dressed as a court. The story is thick. The public fight is thick too.

### Hard signals
- GitHub create **2026-02-23 14:35 UTC** vs 当皇上 **2026-02-22 17:17 UTC** (about 21 hours later)
- Same pitch: you are the emperor, three departments / six ministries, OpenClaw, one-shot install
- Public issues **#55** and **#94** on plagiarism / credit; maintainer closed them as non-technical
- Last check: about **16k** stars vs about **2.7k** for the earlier twin
- Repo homepage field points at **openclaw.ai**, not a first-party product site
- Field noise: dead kanban, ministries often offline (**#251**), webhook SSRF work (#317 / #318)
