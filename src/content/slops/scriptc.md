---
name: scriptc
description: >-
  Vercel Labs TypeScript→native compiler: TS through a C intermediate, no
  Node/V8 at runtime — day-one X thread says cold starts are dead; day-one
  issues say Windows, clang, and silent FFI bugs are very much alive.
link: https://github.com/vercel-labs/scriptc
reason: >-
  Fresh compiler drop already exhibiting demo-quality edges: Windows cannot
  run it cleanly (#10/#25), clang compile failures (#23), silent FFI bugs that
  build green then throw at load (#21), and dynamic re-export holes with no
  diagnostics (#19) — while X is wall-to-wall "TS becomes native, cold starts
  die" engagement bait. That gap between meme and toolchain reliability is
  the slop: green checkmarks that fail when you actually execute them.
featuredImage: '../../assets/slops/scriptc-og.png'
icon: '../../assets/slops/scriptc-icon.png'
lastVerifiedAt: 2026-07-28
publishedAt: 2026-07-27
tags:
  - compiler
  - devtools
  - vercel-labs
  - typescript
  - quality
status: featured
references:
  - title: vercel-labs/scriptc repository
    url: https://github.com/vercel-labs/scriptc
    summary: Days-old TypeScript-to-Native compiler with fast star growth and a rising issue list.
    source: GitHub
  - title: Could not run on Windows
    url: https://github.com/vercel-labs/scriptc/issues/25
    summary: Basic platform support failure reported immediately after launch.
    source: GitHub Issues
    publishedAt: 2026-07-28
  - title: scriptc run fails opening TS project on Windows
    url: https://github.com/vercel-labs/scriptc/issues/10
    summary: ts7 createProgram project open failure on 0.0.16 Windows installs.
    source: GitHub Issues
    publishedAt: 2026-07-28
  - title: clang failed compiling (CcCompileError)
    url: https://github.com/vercel-labs/scriptc/issues/23
    summary: C intermediate step dies in clang for user projects.
    source: GitHub Issues
    publishedAt: 2026-07-28
  - title: FFI result dropped — silent build, ReferenceError at load
    url: https://github.com/vercel-labs/scriptc/issues/21
    summary: Incorrect codegen when FFI initializes a never-reassigned local; no build error.
    source: GitHub Issues
    publishedAt: 2026-07-27
  - title: Dynamic named re-exports fail at runtime without diagnostics
    url: https://github.com/vercel-labs/scriptc/issues/19
    summary: --dynamic path accepts broken re-exports at build time and fails later.
    source: GitHub Issues
    publishedAt: 2026-07-27
  - title: Publickey on the TS to C pipeline
    url: https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html
    summary: Explains the intermediate-C design that is already producing clang-shaped failure modes.
    source: Publickey
    publishedAt: 2026-07-28
  - title: Why C instead of LLVM IR?
    url: https://x.com/yukimakura86/status/2081949008277414031
    summary: One of the few technical questions in a sea of launch reposts.
    source: X / @yukimakura86
    publishedAt: 2026-07-28
  - title: Three things Scriptc changes listicle
    url: https://x.com/AiMonyForge/status/2081956565914157336
    summary: Engagement bait listing cold starts and cloud cost with no caveats.
    source: X / @AiMonyForge
    publishedAt: 2026-07-28
  - title: TS-to-Native just dropped template post
    url: https://x.com/0x_Missy22/status/2081955842195411202
    summary: Trend packaging without platform or correctness constraints.
    source: X / @0x_Missy22
    publishedAt: 2026-07-28
---

scriptc is **toolchain slop**: a brand-new compiler marketed as eliminating JS runtimes while day-one issues show silent wrong code and incomplete platforms. The launch thread ships features; the issue tracker ships truth.

### Quality angle
- Green builds that fail at load (FFI)
- Windows users blocked immediately
- Social graph optimizes for slogans, not issue triage

Update as the issue tracker stabilizes — or if it does not.
