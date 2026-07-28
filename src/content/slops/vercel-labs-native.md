---
name: Native SDK (vercel-labs/native)
description: >-
  Vercel Labs toolkit for building native desktop apps with declarative UI and
  TypeScript that "compiles toward native" — sold as the Electron funeral,
  currently still arguing with focus, terminals, and WebView observability in
  the issue tracker.
link: https://github.com/vercel-labs/native
reason: >-
  Early-platform slop dressed as a finished Electron killer. Public discourse
  sells "no WebView / no JS runtime" while the tracker is full of basic
  desktop primitives that still do not work (focus, terminals, WebView
  observability, layout knobs — see #222–#226). Star velocity and
  agent-automation marketing outrun a coherent quality bar. If your revolution
  still cannot tell which terminal fired an event, it is not a revolution —
  it is a launch thread with homework.
featuredImage: '../../assets/slops/native-og.png'
icon: '../../assets/blog-placeholder-5.jpg'
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

Native SDK may mature. Today it is catalogued as **marketing-complete, desktop-incomplete** software — the slop is shipping a revolution pitch while fundamental UI plumbing is still open issues. The funeral for Electron has been scheduled; the body still has focus bugs.

### Quality angle
- Issue titles read like a pre-1.0 platform checklist, not polish
- Social posts rarely mention those gaps
- Agent automation claims collide with WebView/snapshot blind spots in the tracker
