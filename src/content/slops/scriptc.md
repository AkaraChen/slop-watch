---
name: scriptc
description: >-
  scriptc is a Vercel Labs compiler that turns TypeScript into native binaries. It routes TypeScript through a C intermediate and aims to run without Node or V8. Launch posts focused on killing cold starts. The first issues focused on Windows, clang, and silent FFI bugs.
link: https://github.com/vercel-labs/scriptc
reason: >-
  The compiler shipped with problems that showed up immediately. Windows does not run it cleanly (issues #10 and #25). Real projects hit clang compile failures (#23). Some FFI bugs build successfully and then throw when the program loads (#21). Dynamic re-exports can pass the build with no diagnostics and fail later (#19). At the same time, social posts repeated "TypeScript becomes native" with almost no caveats. That gap is the problem: green builds that do not survive real execution.
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

scriptc is listed as toolchain slop. It is sold as a way to leave JavaScript runtimes behind, while day-one issues already show wrong code and incomplete platform support. Launch posts talk about features. The issue tracker is where the limitations show up.

### Quality angle
- Builds that pass, then fail at load because of FFI
- Windows users blocked right away
- Public posts that optimize for slogans instead of triage
