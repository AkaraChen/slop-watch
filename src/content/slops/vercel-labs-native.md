---
name: Native SDK (vercel-labs/native)
description: >-
  Native SDK is a Vercel Labs toolkit for building native desktop apps with declarative UI and TypeScript. It is aimed at native binaries and is often pitched as a replacement for Electron. In practice, basic desktop pieces like focus, terminals, and WebView observability are still incomplete in the issue tracker.
link: https://github.com/vercel-labs/native
reason: >-
  This is an early platform sold as if it were already a finished Electron killer. Marketing talks about no WebView and no JavaScript runtime. The tracker is full of basic primitives that still do not work, including focus, terminals, WebView observability, and layout controls (issues #222 through #226). Stars and agent-automation messaging moved faster than a solid quality bar. If the product still cannot tell which terminal fired an event, it is not a finished revolution. It is a launch announcement with a long homework list.
featuredImage: '../../assets/slops/native-og.png'
icon: '../../assets/slops/native-icon.png'
lastVerifiedAt: 2026-07-28
publishedAt: 2026-07-26
tags:
  - desktop
  - devtools
  - vercel-labs
  - quality
status: featured
references:
  - title: vercel-labs/native repository
    url: https://github.com/vercel-labs/native
    summary: ~7k stars with 100+ open issues; README markets zero-runtime native binaries.
    source: GitHub
  - title: WebView is write-only — no console, nav, or crash signals
    url: https://github.com/vercel-labs/native/issues/226
    summary: Embedded WebView content is invisible to automation snapshots and app-side diagnostics.
    source: GitHub Issues
  - title: macOS focus is inferred, not observed
    url: https://github.com/vercel-labs/native/issues/225
    summary: Autofocus and focus transitions lag or never surface; key window resignation unobserved.
    source: GitHub Issues
  - title: Terminal events cannot identify which terminal
    url: https://github.com/vercel-labs/native/issues/224
    summary: on-terminal state carries no pty key; apps cannot disambiguate multi-terminal UIs.
    source: GitHub Issues
  - title: PtySpawnOptions has no cwd
    url: https://github.com/vercel-labs/native/issues/223
    summary: Per-directory terminals must smuggle cd through shell command lines.
    source: GitHub Issues
  - title: Focus effects cannot move focus between views
    url: https://github.com/vercel-labs/native/issues/222
    summary: Documented focus APIs exist but Zig updates cannot actually transfer focus.
    source: GitHub Issues
  - title: Kill Electron style marketing post
    url: https://x.com/chenzeling4/status/2081182734568067120
    summary: Template narrative of no browser runtime and star count presented as the whole argument.
    source: X / @chenzeling4
    publishedAt: 2026-07-26
  - title: Skepticism about reinventing desktop components
    url: https://x.com/crazibeat1/status/2079155682364870886
    summary: Pushback that native desktop widgets keep getting reinvented instead of using mature stacks.
    source: X / @crazibeat1
    publishedAt: 2026-07-20
---

Native SDK may improve. Today it is listed as marketing-complete and desktop-incomplete. The pitch is a revolution. The open issues are still about fundamentals. People keep scheduling Electron's funeral. The product still has focus bugs.

### Quality angle
- Issue titles look like a pre-1.0 checklist
- Social posts rarely mention those gaps
- Agent-automation claims run into WebView and snapshot blind spots
