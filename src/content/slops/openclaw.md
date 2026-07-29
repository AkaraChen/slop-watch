---
name: OpenClaw
description: >-
  OpenClaw is a personal AI you host yourself and drive from chat apps. It supports multiple models and a skills marketplace. It has about 380,000 GitHub stars, and a very large pile of open issues to match.
link: https://openclaw.ai/
reason: >-
  It grew faster than maintainers could keep the code steady. The main repo has about 6,600 open issues. Upgrades often break plugins. Agents that look fine in demos fail in daily use: the gateway dies, cron does not fire, memory drops, tasks say done when nothing finished. Security is concrete too: a one-click remote code execution is recorded as CVE-2026-25253. Marketing talks about an always-on operator. The public record is mostly outages and incidents.
featuredImage: '../../assets/slops/openclaw-og.png'
icon: '../../assets/slops/openclaw-icon.png'
lastVerifiedAt: 2026-07-28
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

OpenClaw asks for your shell and credentials, yet it struggles to keep installs stable or clear its own issue pile. The star count looks loud. Day-to-day reliability does not.

### Hard signals
- Thousands of open issues while install marketing continues
- A documented one-click RCE, and a skills market with real risk
- Users report silent failures and “done” tasks that are not done
