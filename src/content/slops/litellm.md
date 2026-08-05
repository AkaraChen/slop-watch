---
name: LiteLLM
description: >-
  LiteLLM is an open-source AI gateway and LLM proxy from BerriAI. One OpenAI-compatible surface can reach many model providers, with cost tracking, load balancing, and logging. Teams put the Python SDK and the proxy server in the middle of real traffic and real keys.
link: https://github.com/BerriAI/litellm
reason: >-
  Two public tracks sit next to each other. On 2026-03-24, PyPI versions litellm 1.82.7 and 1.82.8 were live for about forty minutes with unauthorized malicious packages that stole cloud credentials; the project published a full post. Separately, product and dependency bugs hit hard. CVE-2026-42208 is pre-auth SQL injection on the auth path. CVE-2026-42271 is command injection through MCP test endpoints; it entered CISA KEV with active exploitation reports. CVE-2026-48710 is a Starlette Host-header bypass that research chains with 42271 into unauthenticated RCE on vulnerable trees. On 2026-08-05 the main repo had about 55,589 stars and 1,641 open issues (issues only, not counting PRs). We list it for the security debt of a gateway that sits on keys and traffic—not for having a large if-else matrix.
featuredImage: '../../assets/slops/litellm-og.png'
icon: '../../assets/slops/litellm-icon.png'
lastVerifiedAt: 2026-08-05
publishedAt: 2026-08-05
tags:
  - security
  - gateway
  - proxy
  - llm
  - supply-chain
references:
  - title: BerriAI/litellm repository
    url: https://github.com/BerriAI/litellm
    summary: >-
      Open-source AI gateway and LLM proxy. Snapshot 2026-08-05: about 55,589
      stars, 1,641 open issues (issues only), 3,134 open PRs.
    source: GitHub
  - title: Security Update — suspected supply chain incident (March 2026)
    url: https://docs.litellm.ai/blog/security-update-march-2026
    summary: >-
      Official post: litellm 1.82.7 and 1.82.8 on PyPI were compromised on
      2026-03-24 (~40 minutes from ~10:39 UTC); credential stealer payload;
      Proxy Docker path described as not impacted the same way.
    source: LiteLLM Docs
    publishedAt: 2026-03-24
  - title: Inside the LiteLLM supply chain compromise
    url: https://www.trendmicro.com/en_us/research/26/c/inside-litellm-supply-chain-compromise.html
    summary: >-
      Independent write-up of the March 2026 PyPI poisoning and related
      publishing-pipeline risk.
    source: Trend Micro
  - title: CVE-2026-42208 — SQL injection on auth path
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-42208
    summary: >-
      Pre-auth SQL injection in LiteLLM proxy token verification; public
      write-ups describe key and database exposure risk.
    source: NVD
  - title: GHSA-r75f-5x8p-qvmc — SQL injection advisory
    url: https://github.com/BerriAI/litellm/security/advisories/GHSA-r75f-5x8p-qvmc
    summary: Vendor advisory for the auth-path SQL injection (CVE-2026-42208).
    source: GitHub Security
  - title: CVE-2026-42208 exploitation ~36 hours after disclosure
    url: https://www.sysdig.com/blog/cve-2026-42208-targeted-sql-injection-against-litellms-authentication-path-discovered-36-hours-following-vulnerability-disclosure
    summary: >-
      Sysdig: targeted exploitation observed about 36 hours after the
      vulnerability was disclosed.
    source: Sysdig
  - title: CVE-2026-42271 — command injection via MCP test endpoints
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-42271
    summary: >-
      Command injection in LiteLLM MCP test paths; gateway-class remote code
      execution risk on affected versions.
    source: NVD
  - title: CSA research note on CVE-2026-42271 exploitation
    url: https://labs.cloudsecurityalliance.org/research/csa-research-note-litellm-cve-2026-42271-ai-gateway-exploita/
    summary: >-
      Notes CISA KEV listing and active exploitation reporting for the MCP
      command-injection flaw.
    source: Cloud Security Alliance
  - title: LiteLLM flaw CVE-2026-42271 exploited (KEV coverage)
    url: https://thehackernews.com/2026/06/litellm-flaw-cve-2026-42271-exploited.html
    summary: >-
      Industry report on CVE-2026-42271 exploitation and CISA KEV listing;
      public coverage also notes chaining with Host-header bypass paths on
      vulnerable trees.
    source: The Hacker News
    publishedAt: 2026-06-01
---
