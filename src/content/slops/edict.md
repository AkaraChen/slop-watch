---
name: Edict
description: >-
  Edict packages OpenClaw multi-agent workflows as a Three Departments and Six
  Ministries imperial court: prince routing, planning and review ministries, and
  specialized bureau agents behind a real-time kanban. The GitHub repo
  cft0808/edict is Python-heavy, markets hard against CrewAI and AutoGen, and
  grew to tens of thousands of stars within months of creation.
link: https://github.com/cft0808/edict
reason: >-
  Edict is cosplay architecture sold as systems design. The product story is
  that Tang-style bureaucracy is a superior multi-agent framework with mandatory
  review gates, memorials, and a military-affairs board. Under the metaphor sits
  another OpenClaw orchestration skin with install scripts, SOUL prompts, and a
  dashboard. Public dispute is part of the specimen: wanikua/danghuangshang,
  created about twenty-one hours earlier with the same court framing and
  overlapping pinyin agent IDs, filed plagiarism and attribution issues 55 and
  94. Edict closed them as non-technical discussion. Stars kept climbing. The
  failure mode is not a single CVE; it is hype density around a role-play
  template, twin-repo drama, and homepage branding that points at openclaw.ai
  while the work is a third-party remix. Field issues still include dashboard
  offline reports and webhook SSRF hardening work.
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
      OpenClaw multi-agent court project. About 16k stars, created 2026-02-23
      UTC, MIT, Python plus React dashboard marketing.
    source: GitHub
  - title: Issue 55 plagiarism or missing attribution claim
    url: https://github.com/cft0808/edict/issues/55
    summary: >-
      wanikua alleges core concept and agent design came from their earlier
      court tutorial. Timeline shows Edict created about 21 hours later. Issue
      closed as non-technical.
    source: GitHub Issues
    publishedAt: 2026-03-05
  - title: Issue 94 follow-up originality complaint
    url: https://github.com/cft0808/edict/issues/94
    summary: Second closed issue from the same author escalating the attribution dispute.
    source: GitHub Issues
    publishedAt: 2026-03-08
  - title: danghuangshang originality notice counterparty repo
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md
    summary: >-
      Counterparty evidence chain listing shared ministry mapping, pinyin agent
      IDs (bingbu, hubu, libu, gongbu, xingbu), and CrewAI MetaGPT AutoGen
      comparison framing. Note the doc uses 2025 dates; GitHub created_at is 2026.
    source: GitHub
  - title: Issue 318 SSRF hardening on generic webhook channel
    url: https://github.com/cft0808/edict/issues/318
    summary: Security work on webhook URL validation (CWE-918) under the court UI.
    source: GitHub Issues
  - title: Issue 317 harden webhook against internal addresses
    url: https://github.com/cft0808/edict/issues/317
    summary: Open hardening request for private and loopback webhook targets.
    source: GitHub Issues
  - title: Issue 251 court agents often offline
    url: https://github.com/cft0808/edict/issues/251
    summary: Field report that the three departments and six ministries agents frequently show offline.
    source: GitHub Issues
    publishedAt: 2026-04-02
---

Edict is catalogued as openclaw-ecosystem cosplay slop. Imperial bureaucracy is the packaging for multi-agent orchestration, with a public attribution fight against a near-twin that shipped first.

### Hard signals
- GitHub create time **2026-02-23 14:35 UTC** vs counterparty **2026-02-22 17:17 UTC** (about 21 hours later)
- Same metaphor stack: emperor user, three departments, six ministries, OpenClaw, one-shot install
- Public issues **#55** and **#94** document the dispute; maintainer closed them as non-technical
- Star count far outruns the earlier twin at last check (about 16k vs about 2.7k)
- Repo homepage field points at **openclaw.ai**, not a first-party product site
- Webhook SSRF and dashboard offline reports show ordinary ops debt under the cosplay
- Open issue **#251** reports the court agents frequently offline in the field
