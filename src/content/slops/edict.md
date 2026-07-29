---
name: Edict
description: >-
  Edict runs on OpenClaw and lines agents up like an imperial court: three departments, six ministries, and a live board. The repo is cft0808/edict, mostly Python. A few months after create, GitHub had about sixteen thousand stars. Marketing often sets it next to CrewAI and AutoGen.
link: https://github.com/cft0808/edict
reason: >-
  The board shows six ministry names. Open one and it often will not connect. Issue #251 says the ministries stay offline a lot; runs are very slow and status does not move. Around the same time, 当皇上 filed #55 and #94 saying the design was copied without credit; Edict closed those as non-technical. Create times sit about twenty-one hours apart, with 当皇上 first. The homepage field points at openclaw.ai. There is also open webhook safety work (#317, #318).
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
