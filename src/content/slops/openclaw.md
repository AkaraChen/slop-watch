---
name: OpenClaw
description: >-
  Self-hosted "personal AI operator" you drive from chat apps — multi-model
  routing, skills marketplace, ~380k GitHub stars… and a matching landfill of
  open issues. The lobster that asked for your shell and then forgot how to
  keep the lights on.
link: https://openclaw.ai/
reason: >-
  Peak quality slop. Growth completely outran ownership of the codebase:
  ~6.6k open issues on the main repo, upgrade paths that nuke plugins,
  demo-ready agents that go silent under real use (gateway/cron/memory/false
  "task complete"), and high-severity security debt including one-click RCE
  (CVE-2026-25253). Marketed as your always-on operator while users and
  researchers keep filing accident reports — the issue tracker is the product
  roadmap, and the roadmap is on fire.
featuredImage: '../../assets/slops/openclaw-og.png'
icon: '../../assets/slops/openclaw-icon.png'
lastVerifiedAt: 2026-07-28
publishedAt: 2026-07-28
tags:
  - agent
  - quality
  - reliability
  - security
status: featured
references:
  - title: openclaw/openclaw repository stats
    url: https://github.com/openclaw/openclaw
    summary: Public star and issue counts make the quality gap measurable (~380k stars vs multi-thousand open issues).
    source: GitHub
  - title: CVE-2026-25253 — one-click RCE via gatewayUrl WebSocket
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-25253
    summary: NVD entry for token exfiltration through automatic WebSocket connection from a crafted query string (pre-2026.1.29).
    source: NVD
  - title: DepthFirst write-up of 1-click RCE
    url: https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys
    summary: Original research on stealing gateway auth and turning it into remote code execution.
    source: DepthFirst
  - title: runZero advisory on OpenClaw RCE
    url: https://www.runzero.com/blog/openclaw/
    summary: Summarizes unauthenticated one-click RCE impact and affected versions.
    source: runZero
  - title: Personal AI agents are a security nightmare
    url: https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare
    summary: Cisco research on malicious skills, exfiltration, and prompt-injection paths in the ecosystem.
    source: Cisco Blogs
  - title: OpenClaw starts fun, then the headaches
    url: https://x.com/rileybrown/status/2051372403494949125
    summary: Power users report gateway issues, cron not firing, skills flaking, memory fall-off, re-auth loops.
    source: X / @rileybrown
    publishedAt: 2026-05-04
  - title: Still not production grade after the commit storm
    url: https://x.com/_brandonbrown_/status/2080412162929934470
    summary: Returned after waiting for stability; basic tasks still fail silently and latency kills conversation.
    source: X / @_brandonbrown_
    publishedAt: 2026-07-23
  - title: Demo worked, production did not
    url: https://x.com/georgeorch/status/2047408078962700566
    summary: Weeks lost to context loss and dropped instructions before abandoning the stack.
    source: X / @georgeorch
    publishedAt: 2026-04-23
  - title: Hygiene meme — thousands of open issues and vulns
    url: https://x.com/___4o____/status/2031313346692264174
    summary: Viral snapshot of open issue/PR and vulnerability counts used as evidence of unmanaged quality.
    source: X
    publishedAt: 2026-03-10
  - title: Where OpenClaw Breaks (field guide)
    url: https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/
    summary: Operator notes that external integrations break regularly through auth failures and related modes.
    source: r/openclaw
---

OpenClaw is the catalog's clearest **garbage specimen**: an agent that asks for shell and credentials while the project cannot drain its own issue queue or keep installs stable across upgrades. Star count as a personality; reliability as an optional DLC.

### Hard signals
- Issue backlog measured in thousands while marketing still ships install funnels
- Security history that includes one-click RCE and hostile skills distribution
- Field reports of silent failure and "false complete" task results
