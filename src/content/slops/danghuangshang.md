---
name: "当皇上 (Dang Huang Shang)"
description: >-
  当皇上 (wanikua/danghuangshang) is an OpenClaw tutorial and config pack. With one
  command it tries to turn Discord or Feishu into a Ming-style court: cabinet,
  six ministries, and more if you want. The pitch says you can start in five
  minutes, with eighteen-plus agents and sixty-plus skills.
link: https://github.com/wanikua/danghuangshang
reason: >-
  The fun titles are not the problem. Getting it to run is. Issue #144 says
  Docker will not start, and the sample OpenClaw config is too old for the image.
  Issue #131 puts a Ming cabinet file under a Tang folder. If allowBots is wrong,
  Discord bots can talk each other into a loop. In the same week, Edict appeared;
  both sides argued in public about credit (#55). This page does not settle that
  fight. It keeps the public claims and the install failures people already
  described.
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
      OpenClaw court tutorial. Created 2026-02-22 17:17 UTC (about 21 hours
      before Edict). About 2.7k stars. Site danghuangshang.com.
    source: GitHub
  - title: Originality rights notice in-repo
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md
    summary: >-
      Claims first-mover status and lists design parallels with Edict. Prose
      says 2025; GitHub created_at is 2026-02-22.
    source: GitHub
  - title: Edict issue 55 filed by wanikua
    url: https://github.com/cft0808/edict/issues/55
    summary: Public credit demand with a timeline.
    source: GitHub Issues
    publishedAt: 2026-03-05
  - title: Issue 144 Docker cannot start sample config stale
    url: https://github.com/wanikua/danghuangshang/issues/144
    summary: Docker fails to start; sample config does not match OpenClaw in the image.
    source: GitHub Issues
  - title: Issue 131 Tang folder contains Ming cabinet config
    url: https://github.com/wanikua/danghuangshang/issues/131
    summary: Wrong dynasty config under the Tang path.
    source: GitHub Issues
  - title: Discord multi-bot safety documentation
    url: https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md
    summary: allowBots true can start bot-to-bot storms.
    source: GitHub
  - title: Issue 136 MIT is not a free pass to copy
    url: https://github.com/wanikua/danghuangshang/issues/136
    summary: Community thread on the credit fight.
    source: GitHub Issues
---

当皇上 sells a quick throne on Discord or Feishu. Install threads tell a quieter story: Docker that will not come up, sample configs that lag the image, and a same-week credit quarrel with Edict.

### Hard signals
- Created **2026-02-22 17:17 UTC**, about **21 hours** before Edict
- OpenClaw court pack with a one-command pitch
- **docs/originality.md** plus Edict **#55** and **#94**
- **#144** Docker will not start; **#131** wrong dynasty file
- Discord safety notes for multi-bot loops
