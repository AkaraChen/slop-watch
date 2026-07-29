---
name: Zerolang
description: >-
  Zerolang is a Vercel Labs experiment: a programming language aimed at AI
  agents. The idea is that the program lives as a graph, and .0 files are only
  a view humans can read. Agents are meant to change the graph, not fight over
  line numbers in text. The pitch also promises small native programs and
  diagnostics agents can read easily.
link: https://github.com/vercel-labs/zerolang
reason: >-
  The ad says agents can edit a program safely through a graph. The open
  issues say something else. On a normal Mac, people have reported wrong code
  for big integers, stack frames that get cut short and crash, and borrow
  checks that go missing (see the audit in issue #318). Issue #181 is titled
  "Low code quality. Don't run this on your machine." Maintainers answered
  that they knew and were hiring. Separate write-ups also note that pieces of
  the standard library were baked into the IR, that a "runtime" module still
  left a lot of that hardcoding in place, and that whole directories vanished
  after public criticism. The README says do not run it against production.
  The marketing posts rarely lead with that line.
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
      Chinese long-form review of Zero/zerolang that walks through crude IR and
      compiler structure and how they undercut the graph-first marketing.
    source: Zhihu / 知乎用户名可以重复吗
    publishedAt: 2026-05-18
  - title: 如何评价 Vercel 近期发布的 Zero 编程语言？（续扒）
    url: https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555
    summary: >-
      Follow-up notes: compiler-zero tree removed after critique; time/rand/fs
      still modeled in IR; runtime module mostly http/json while hardcoding
      remains; large EmitContext/RuntimePatch surface.
    source: Zhihu / 知乎用户名可以重复吗
    publishedAt: 2026-05-19
---

Zerolang is sold as a language for agents. People on the issue tracker have also said: do not run this on your own machine. That gap is why it is here.

### Hard signals
- Issue #181: "Low code quality. Don't run this on your machine."
- Issue #318: wrong code and crashes reproduced on main, including on Mac
- Issue #230: missing pieces on the Apple Silicon backend
- Issue #425: module hash comparison wrong, while ads talk about safe graph edits
- Public write-ups on baked-in IR pieces and a thin "runtime" that still leaves hardcoding in place
