---
name: Edict
description: >-
  Edict runs on OpenClaw and lines agents up like an imperial court: three
  departments, six ministries, and a live board in front. The code lives at
  cft0808/edict, mostly in Python. A few months after it appeared, the repo had
  about sixteen thousand stars. Marketing often sets it next to CrewAI and
  AutoGen.
link: https://github.com/cft0808/edict
reason: >-
  On paper it is a careful bureaucracy for agents. In the tracker, people say
  the ministries often go offline, runs crawl, and status gets stuck—see issue
  #251. Around the same week, 当皇上 filed #55 and #94, saying the design was
  copied without credit; Edict closed those threads as non-technical. Create
  times sit about twenty-one hours apart, with 当皇上 first. The homepage field
  still points at openclaw.ai rather than a product site of their own. There is
  also open work on webhook safety (#317, #318).
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
      OpenClaw multi-agent project with a court theme. About 16k stars, created
      2026-02-23 UTC, MIT, mostly Python.
    source: GitHub
  - title: Issue 55 plagiarism or missing attribution claim
    url: https://github.com/cft0808/edict/issues/55
    summary: >-
      wanikua says the core design came from their earlier court tutorial.
      Timeline puts Edict about 21 hours later. Closed as non-technical.
    source: GitHub Issues
    publishedAt: 2026-03-05
  - title: Issue 94 follow-up originality complaint
    url: https://github.com/cft0808/edict/issues/94
    summary: Second closed issue from the same author about credit.
    source: GitHub Issues
    publishedAt: 2026-03-08
  - title: danghuangshang originality notice counterparty repo
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md
    summary: >-
      Lists matching ministry maps and pinyin agent names. The prose uses 2025
      dates; GitHub created_at is 2026.
    source: GitHub
  - title: Issue 318 SSRF hardening on generic webhook channel
    url: https://github.com/cft0808/edict/issues/318
    summary: Work on webhook URL checks in the UI (CWE-918).
    source: GitHub Issues
  - title: Issue 317 harden webhook against internal addresses
    url: https://github.com/cft0808/edict/issues/317
    summary: Request to block private and loopback webhook targets.
    source: GitHub Issues
  - title: Issue 251 court agents often offline
    url: https://github.com/cft0808/edict/issues/251
    summary: >-
      Users report ministries often offline, runs very slow, and status that
      does not move.
    source: GitHub Issues
    publishedAt: 2026-04-02
---

The board shows six ministry names. Open one and it often will not connect. Issue #251 says the ministries stay offline a lot; runs are very slow and status does not move. There is also a credit fight with 当皇上 that never became a calm technical thread.

### Hard signals
- Created **2026-02-23 14:35 UTC**; 当皇上 created **2026-02-22 17:17 UTC** (about 21 hours earlier)
- Court layout on OpenClaw with a one-shot install pitch
- **#55** and **#94** on credit; closed as non-technical
- About **16k** stars versus about **2.7k** for the earlier twin (last check)
- Homepage field points at **openclaw.ai**
- **#251** offline and slow runs; webhook work in **#317** and **#318**
