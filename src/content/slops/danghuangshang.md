---
name: "当皇上 (Dang Huang Shang)"
description: >-
  当皇上 (wanikua/danghuangshang) is an OpenClaw tutorial and config pack. It
  turns Discord or Feishu into a Ming-flavored AI court: messengers, a cabinet,
  six ministries, a censorate, and optional novel-writing agents. Pitch:
  one-command enthronement in five minutes, 18-plus agents, 60-plus skills.
link: https://github.com/wanikua/danghuangshang
reason: >-
  Funny job titles are not the point. Selling prompts and configs as statecraft
  is. Install scripts, dynasty templates (Ming, Tang, modern company), and a
  wall of badges sound like you will always have an imperial staff. Open issues
  show something else: version drift, stale samples, Docker that will not start,
  and bot-to-bot storms on Discord when allowBots is wrong. The same week
  brought twin project Edict (cft0808/edict). Both fight in public over who came
  first; both are still court skins on the same OpenClaw gateway. Credit drama
  is loud. Onboarding is brittle. This text does not pick a legal winner. It
  records the public “they look alike” claims and the parts that do not run
  cleanly.
featuredImage: '../../assets/slops/danghuangshang-og.png'
icon: '../../assets/slops/danghuangshang-icon.png'
lastVerifiedAt: 2026-07-29
publishedAt: 2026-07-29
tags:
  - agent
  - multi-agent
  - openclaw-ecosystem
  - cosplay
  - tutorial
  - attribution
  - quality
references:
  - title: wanikua/danghuangshang repository
    url: https://github.com/wanikua/danghuangshang
    summary: >-
      OpenClaw court tutorial and config. Created 2026-02-22 17:17 UTC (about 21
      hours before Edict). About 2.7k stars. TypeScript plus configs. Site
      danghuangshang.com.
    source: GitHub
  - title: Originality rights notice in-repo
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md
    summary: >-
      Claims first-mover status and lists design parallels with Edict plus
      matching pinyin agent IDs. Prose says 2025; GitHub API created_at is
      2026-02-22.
    source: GitHub
  - title: Edict issue 55 filed by wanikua
    url: https://github.com/cft0808/edict/issues/55
    summary: Public credit demand with a timeline and traffic claims for Edict create day.
    source: GitHub Issues
    publishedAt: 2026-03-05
  - title: Issue 144 Docker cannot start sample config stale
    url: https://github.com/wanikua/danghuangshang/issues/144
    summary: Install fails because the sample config does not match OpenClaw in the image.
    source: GitHub Issues
  - title: Issue 131 Tang folder contains Ming cabinet config
    url: https://github.com/wanikua/danghuangshang/issues/131
    summary: Wrong dynasty config packed under the Tang path.
    source: GitHub Issues
  - title: Discord multi-bot safety documentation
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md
    summary: Docs warn that allowBots true can start bot-to-bot storms in multi-agent Discord packs.
    source: GitHub
  - title: Issue 136 MIT is not a free pass to copy
    url: https://github.com/wanikua/danghuangshang/issues/136
    summary: Community thread on the credit fight with more public links.
    source: GitHub Issues
---

This one lets you become emperor in one command and fill Discord or Feishu with ministries. When you actually install it, Docker often will not start, and you still get a public fight with the twin repo next door about who copied whom.

### Hard signals
- Created **2026-02-22 17:17 UTC**, about **21 hours** before cft0808/edict
- Same product shape: court setting, OpenClaw gateway, ministry-named agents, one-shot install
- In-repo **docs/originality.md** plus Edict **#55 / #94**: public plagiarism claims (claims, not a court ruling)
- User issues: **stale samples**, **Docker will not start**, **wrong dynasty config path**
- Discord safety docs exist because multi-bot storms are a known hole in this pack
