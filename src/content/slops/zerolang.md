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
  they are hiring. Chinese PL deep-dives (Zhihu) further document agent-driven
  thrash (whole trees like compiler-zero deleted after critique), stdlib
  primitives (time/rand/fs) hammered into the IR instead of a real runtime, a
  "runtime" module that still only covers http/json while the hardcoding stays,
  and an ownership story implemented with a thin checker.c-style approach —
  fashion features (effect handlers) on top of comedy plumbing. When your pitch
  is "stale hashes get rejected before write" and #425 is "incorrect module
  hash comparison," the comedy writes itself.
featuredImage: '../../assets/slops/zerolang-og.png'
icon: '../../assets/slops/zerolang-icon.png'
lastVerifiedAt: 2026-07-29
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
  - title: PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生（zerolang 扒代码）
    url: https://zhuanlan.zhihu.com/p/2039725076204016063
    summary: >-
      Chinese long-form roast of Zero/zerolang as an "agent-native" language whose
      implementation reads like anti-hype performance art — documents crude IR
      and compiler structure that undercut the graph-first marketing.
    source: Zhihu / 知乎用户名可以重复吗
    publishedAt: 2026-05-18
  - title: 如何评价 Vercel 近期发布的 Zero 编程语言？（续扒）
    url: https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555
    summary: >-
      Follow-up: compiler-zero tree deleted after critique; time/rand/fs still
      modeled in IR; new "runtime" is mostly http/json while hardcoding remains;
      giant EmitContext/RuntimePatch surface; ownership/effect-handler fashion on
      a thin checker — community evidence that agents thrash the tree faster than
      quality lands.
    source: Zhihu / 知乎用户名可以重复吗
    publishedAt: 2026-05-19
---

Zerolang is **compiler-quality slop in agent cosplay**: the pitch is semantic certainty for agents; the public evidence is wrong-code, "don't run this," and community reverse-engineering that shows the agent-native story sitting on IR hardcodes and thrashy trees.

### Hard signals
- Wrong-code / soundness findings with repros on main (#318)
- Host platform backend gaps (#230)
- Explicit community + maintainer acknowledgment of low quality (#181)
- Chinese deep-dives: IR-baked stdlib, cosmetic runtime module, agent-driven delete of whole compiler trees after public roast
- Same Labs packaging pattern as scriptc/native (narrative first, drain later)
