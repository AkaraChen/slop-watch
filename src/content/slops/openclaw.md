---
name: OpenClaw
description: >-
  OpenClaw is a personal AI assistant you run yourself and talk to through
  chat apps. It can use more than one model and install extra skills. On
  GitHub it has about 380,000 stars. It also has thousands of open issues.
link: https://openclaw.ai/
reason: >-
  The project grew faster than the people behind it could keep up. The main
  repo sits near 6,600 open issues. After an upgrade, plugins often break.
  In demos the agent looks fine. In daily use people report that the gateway
  dies, scheduled jobs never fire, memory disappears mid-chat, and a task is
  marked done when nothing finished. Security is not abstract here either:
  CVE-2026-25253 is a one-click remote code execution bug. Ads still call
  OpenClaw an always-on helper. The public record is closer to a long list of
  outages, breakages, and security write-ups.
featuredImage: '../../assets/slops/openclaw-og.png'
icon: '../../assets/slops/openclaw-icon.png'
lastVerifiedAt: 2026-07-29
publishedAt: 2026-07-28
tags:
  - agent
  - quality
  - reliability
  - security
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

OpenClaw asks you to give it shell access and account passwords. It also cannot clear its own issue queue or keep a normal install steady after an upgrade. The star count is huge. Day-to-day use is where people get tired.

### Hard signals
- Thousands of open issues, while new install guides keep shipping
- A one-click remote code execution bug (CVE-2026-25253) and risky skills
- Users saying tasks finish in silence, or finish when nothing ran
