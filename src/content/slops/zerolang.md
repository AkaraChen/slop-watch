---
name: Zerolang
description: >-
  Zerolang is an experimental Vercel Labs language meant for agents. The semantic graph is treated as the program itself, and .0 files are a human-readable projection. Agents are supposed to patch graph nodes instead of fighting line-based text diffs. The pitch includes native binaries and agent-friendly diagnostics. Host backend quality is still uneven.
link: https://github.com/vercel-labs/zerolang
reason: >-
  It sits next to scriptc and Native in the same Labs wave. Marketing says agents can safely edit a semantic graph. On the issue tracker, people have said the code quality is low and you should not run it on your own machine (#181). Maintainers agreed and said they were hiring. Later reports list concrete bugs: big integer math that comes out wrong, stack frames that get cut short and crash, and safety checks that disappear. Long write-ups in Chinese add that whole compiler trees were deleted after criticism, and the runtime is thin. Marketing says stale hashes are rejected before write; #425 is about wrong module hash comparison. Those two sit poorly together.
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

Zerolang wraps an agent story around a compiler. The pitch is safe graph edits. Public evidence includes an explicit “don’t run this on your machine,” and write-ups that the implementation does not match the marketing.

### Hard signals
- Reproducible wrong-code and soundness issues on main (#318)
- Host backend gaps on Apple Silicon (#230)
- Community and maintainers both admit poor quality (#181)
- Chinese long-forms on thin runtime and deleted trees after criticism
- Same Labs pattern as scriptc and Native: story first, quality later
