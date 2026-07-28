---
name: Zerolang
description: >-
  Vercel Labs' experimental "programming language for agents": the semantic
  graph is the program database, .0 files are just the human-readable
  projection, and agents are supposed to patch nodes instead of fighting text
  diffs. Systems-language cosplay for native binaries — with agent-friendly
  diagnostics and, so far, host-backend honesty issues.
link: https://github.com/vercel-labs/zerolang
reason: >-
  Heavyweight agent-toolchain slop from the same Labs wave as scriptc/native.
  Marketed as the language where agents edit semantic graphs, not fragile text —
  while the public tracker and a 18-bug audit show wrong-code and soundness
  holes on the default macOS host (i64 compares emitted as 32-bit CMP,
  oversized frames silently truncated into segfaults, borrow tracking cleared
  by dynamic array sets). Community issue #181 is literally titled "Low code
  quality. Don't run this on your machine"; maintainers acknowledged and said
  they are hiring. README already warns of security issues and isolation —
  growth posts rarely lead with that gap between agent utopia and emit quality.
  When your pitch is "stale hashes get rejected before write" and #425 is
  "incorrect module hash comparison," the comedy writes itself.
featuredImage: '../../assets/slops/zerolang-og.png'
icon: '../../assets/blog-placeholder-5.jpg'
publishedAt: 2026-05-15
tags:
  - language
  - agent
  - vercel-labs
  - compiler
  - quality
  - soundness
status: listed
references:
  - title: vercel-labs/zerolang repository
    url: https://github.com/vercel-labs/zerolang
    summary: ~5.2k stars, 100+ open issues; homepage zerolang.ai; "Programming Language for Agents".
    source: GitHub
  - title: README safety warning
    url: https://github.com/vercel-labs/zerolang
    summary: Official warning — experimental, expect breaking changes and security issues; isolate, not production/sensitive data.
    source: GitHub README
  - title: Low code quality. Don't run this on your machine.
    url: https://github.com/vercel-labs/zerolang/issues/181
    summary: Community quality blast (contracts, C pointer effects, stringly IR); maintainer acknowledged and noted hiring.
    source: GitHub Issues
    publishedAt: 2026-05-21
  - title: Bug audit — 18 reproduced findings
    url: https://github.com/vercel-labs/zerolang/issues/318
    summary: >-
      Single audit of tokenizer/parser/borrow/backends/stdlib: S1 wrong-code
      i64 CMP on darwin-arm64; S2 silent stack-frame truncate → SIGSEGV; S3
      borrow soundness on dynamic array set; plus parser/stdlib wrong results.
    source: GitHub Issues
    publishedAt: 2026-06-01
  - title: darwin-arm64 Mach-O direct backend missing ops (CGEN004)
    url: https://github.com/vercel-labs/zerolang/issues/230
    summary: Many direct-* examples fail on Apple Silicon host backend — missing byte ops, error/raise paths, etc.
    source: GitHub Issues
  - title: Incorrect module hash comparison
    url: https://github.com/vercel-labs/zerolang/issues/425
    summary: Graph/module hash comparison bug — core to the "stale hash reject" agent story.
    source: GitHub Issues
    publishedAt: 2026-06-20
  - title: Major syntax changes in 0.1.4
    url: https://github.com/vercel-labs/zerolang/issues/290
    summary: Early versions still thrashing syntax — agent skills and human projections both chase a moving target.
    source: GitHub Issues
  - title: Vercel Labs marketing framing (agent graph, not text)
    url: https://x.com/zerolangai/status/2063264734108155978
    summary: Official X account pitch — graph-first, verified refactor; experimental framing often buried under launch energy.
    source: X / @zerolangai
    publishedAt: 2026-06-06
---

Zerolang is **compiler-quality slop in agent cosplay**: the pitch is semantic certainty for agents; the public evidence is wrong-code and "don't run this" on the default Mac backend. Graph-first utopia, segfault-second reality.

### Hard signals
- Wrong-code / soundness findings with repros on main (#318)
- Host platform backend gaps (#230)
- Explicit community + maintainer acknowledgment of low quality (#181)
- Same Labs packaging pattern as scriptc/native (narrative first, drain later)
