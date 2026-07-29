import type { Locale } from './config';

export type RefOverlay = { title: string; summary: string };
export type ExtraCopy = {
	body: string;
	references: Record<string, RefOverlay>;
};

/** Body + reference title/summary overlays (EN lives in content collections). */
export const extraCopy: Record<string, Partial<Record<Locale, ExtraCopy>>> = {
	openclaw: {
		zh: {
			body: `OpenClaw 是本目录里最典型的反面例子。它会要你的 shell 和凭据，却很难把安装维护稳定，也清不完自己的 issue。星标看起来很唬人，日常可靠性对不上。

### 硬信号
- open issues 以千计，安装推广却还在继续
- 已有公开记录的一键 RCE，以及风险不小的 skills 生态
- 用户反馈静默失败和虚假的「任务完成」`,
			references: {
				'https://github.com/openclaw/openclaw': {
					title: `openclaw/openclaw 仓库数据`,
					summary: `公开 star 与 issue 数量把质量落差量出来（约 38 万星 vs 数千 open issues）。`,
				},
				'https://nvd.nist.gov/vuln/detail/CVE-2026-25253': {
					title: `CVE-2026-25253 — 经 gatewayUrl WebSocket 的一键 RCE`,
					summary: `NVD：特制查询串触发自动 WebSocket 连接导致 token 外泄（影响 2026.1.29 之前）。`,
				},
				'https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys': {
					title: `DepthFirst：一键 RCE 技术拆解`,
					summary: `原始研究：窃取 gateway 鉴权并升级为远程代码执行。`,
				},
				'https://www.runzero.com/blog/openclaw/': {
					title: `runZero：OpenClaw RCE 通告`,
					summary: `汇总未认证一键 RCE 的影响面与受影响版本。`,
				},
				'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare': {
					title: `个人 AI agent 是安全噩梦`,
					summary: `Cisco：恶意 skill、外泄与提示注入等生态路径。`,
				},
				'https://x.com/rileybrown/status/2051372403494949125': {
					title: `OpenClaw 开始好玩，然后就是头痛`,
					summary: `重度用户：网关问题、cron 不响、skill 抽风、记忆掉线、反复重登。`,
				},
				'https://x.com/_brandonbrown_/status/2080412162929934470': {
					title: `提交风暴之后仍非生产级`,
					summary: `等稳定回来后：基础任务仍静默失败，延迟把对话拖死。`,
				},
				'https://x.com/georgeorch/status/2047408078962700566': {
					title: `Demo 能跑，上线不能`,
					summary: `上下文丢失、指令被丢，耗了数周后弃坑。`,
				},
				'https://x.com/___4o____/status/2031313346692264174': {
					title: `卫生段子：上千 open issue 与漏洞`,
					summary: `把 open issue/PR 与漏洞计数做成病毒截图，当作失控质量的证据。`,
				},
				'https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/': {
					title: `OpenClaw 哪里会断（实战笔记）`,
					summary: `运维笔记：外部集成常因鉴权失败等模式反复炸掉。`,
				},
			},
		},
		de: {
			body: `OpenClaw ist das klarste schlechte Beispiel in diesem Katalog. Es verlangt Shell und Zugangsdaten, hält Installationen aber kaum stabil und kommt mit dem eigenen Issue-Berg nicht hinterher. Die Sterne wirken beeindruckend. Die Zuverlässigkeit im Alltag nicht.

### Harte Signale
- Tausende offene Issues, während weiter Install-Funnels gebaut werden
- Dokumentiertes One-Click-RCE und ein riskantes Skills-Ökosystem
- Nutzer berichten stille Fehler und falsche „Task complete“-Meldungen`,
			references: {
				'https://github.com/openclaw/openclaw': {
					title: `openclaw/openclaw Repository-Stats`,
					summary: `Öffentliche Sterne und Issues machen die Qualitätslücke messbar (~380k Sterne vs. mehrere tausend offene Issues).`,
				},
				'https://nvd.nist.gov/vuln/detail/CVE-2026-25253': {
					title: `CVE-2026-25253 — One-Click-RCE via gatewayUrl-WebSocket`,
					summary: `NVD-Eintrag: Token-Exfiltration über automatische WebSocket-Verbindung aus crafted Query-String (vor 2026.1.29).`,
				},
				'https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys': {
					title: `DepthFirst-Analyse zum 1-Click-RCE`,
					summary: `Originalresearch: Gateway-Auth stehlen und in RCE umsetzen.`,
				},
				'https://www.runzero.com/blog/openclaw/': {
					title: `runZero-Advisory zu OpenClaw-RCE`,
					summary: `Fasst unauthentifizierten One-Click-RCE-Impact und betroffene Versionen zusammen.`,
				},
				'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare': {
					title: `Persönliche KI-Agenten sind ein Sicherheitsalbtraum`,
					summary: `Cisco: bösartige Skills, Exfiltration und Prompt-Injection im Ökosystem.`,
				},
				'https://x.com/rileybrown/status/2051372403494949125': {
					title: `OpenClaw startet lustig, dann die Kopfschmerzen`,
					summary: `Power-User: Gateway-Probleme, Cron feuert nicht, Skills flaken, Memory bricht weg, Re-Auth-Schleifen.`,
				},
				'https://x.com/_brandonbrown_/status/2080412162929934470': {
					title: `Nach dem Commit-Sturm immer noch nicht production grade`,
					summary: `Zurückgekehrt nach Stabilitätswartezeit; Basistasks scheitern still, Latenz tötet das Gespräch.`,
				},
				'https://x.com/georgeorch/status/2047408078962700566': {
					title: `Demo lief, Produktion nicht`,
					summary: `Wochen verloren an Kontextverlust und fallengelassene Anweisungen — dann Stack verlassen.`,
				},
				'https://x.com/___4o____/status/2031313346692264174': {
					title: `Hygiene-Meme — Tausende offene Issues und Vulns`,
					summary: `Virales Snapshot von Issue/PR- und Vuln-Zählern als Beleg unkontrollierter Qualität.`,
				},
				'https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/': {
					title: `Where OpenClaw Breaks (Field Guide)`,
					summary: `Operator-Notizen: externe Integrationen brechen regelmäßig über Auth-Fehler und verwandte Modi.`,
				},
			},
		},
		it: {
			body: `OpenClaw è l’esempio negativo più chiaro di questo catalogo. Chiede shell e credenziali, ma non tiene stabili le installazioni e non smaltisce la propria coda di issue. Le stelle impressionano. L’affidabilità quotidiana no.

### Segnali duri
- Migliaia di issue aperte mentre i funnel di install continuano
- Un RCE one-click documentato e un ecosistema skills rischioso
- Utenti che segnalano fallimenti silenziosi e “task complete” falsi`,
			references: {
				'https://github.com/openclaw/openclaw': {
					title: `Statistiche repo openclaw/openclaw`,
					summary: `Stelle e issue pubbliche rendono misurabile il gap di qualità (~380k stelle vs migliaia di issue aperte).`,
				},
				'https://nvd.nist.gov/vuln/detail/CVE-2026-25253': {
					title: `CVE-2026-25253 — RCE one-click via WebSocket gatewayUrl`,
					summary: `Voce NVD: esfiltrazione token tramite connessione WebSocket automatica da query string artigianale (pre-2026.1.29).`,
				},
				'https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys': {
					title: `DepthFirst: analisi RCE 1-click`,
					summary: `Ricerca originale: rubare l’auth del gateway e trasformarla in RCE.`,
				},
				'https://www.runzero.com/blog/openclaw/': {
					title: `Advisory runZero su RCE OpenClaw`,
					summary: `Riassume impatto RCE one-click non autenticato e versioni colpite.`,
				},
				'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare': {
					title: `Gli agent AI personali sono un incubo di sicurezza`,
					summary: `Cisco: skill malevoli, esfiltrazione e prompt injection nell’ecosistema.`,
				},
				'https://x.com/rileybrown/status/2051372403494949125': {
					title: `OpenClaw inizia divertente, poi il mal di testa`,
					summary: `Power user: gateway, cron muto, skill che flakano, memoria che cala, loop di re-auth.`,
				},
				'https://x.com/_brandonbrown_/status/2080412162929934470': {
					title: `Dopo la tempesta di commit ancora non production grade`,
					summary: `Tornato dopo aver atteso stabilità; i task base falliscono in silenzio e la latenza uccide la chat.`,
				},
				'https://x.com/georgeorch/status/2047408078962700566': {
					title: `La demo funzionava, la produzione no`,
					summary: `Settimane perse per perdita di contesto e istruzioni droppate prima di abbandonare lo stack.`,
				},
				'https://x.com/___4o____/status/2031313346692264174': {
					title: `Meme igiene — migliaia di issue e vuln aperte`,
					summary: `Snapshot virale di conteggi issue/PR/vuln usato come prova di qualità fuori controllo.`,
				},
				'https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/': {
					title: `Where OpenClaw Breaks (guida sul campo)`,
					summary: `Note operative: le integrazioni esterne si rompono regolarmente per auth fallita e modi affini.`,
				},
			},
		},
		ja: {
			body: `OpenClaw はこのカタログでいちばんわかりやすい悪い例です。シェルと資格情報を要求するのに、インストールを安定させきれず、自分の issue も片付けられません。star 数は派手です。日常の信頼性は伴っていません。

### ハードシグナル
- open issues が数千あるのに、インストール導線はまだ増える
- 公開済みのワンクリック RCE と、リスクのある skills 生態
- 黙って失敗する、偽の「タスク完了」といった現場報告`,
			references: {
				'https://github.com/openclaw/openclaw': {
					title: `openclaw/openclaw リポジトリ統計`,
					summary: `公開の star と issue 数で品質ギャップが測れる（約38万 star vs 数千 open issues）。`,
				},
				'https://nvd.nist.gov/vuln/detail/CVE-2026-25253': {
					title: `CVE-2026-25253 — gatewayUrl WebSocket によるワンクリック RCE`,
					summary: `NVD：細工したクエリ文字列からの自動 WebSocket 接続でトークン窃取（2026.1.29 より前）。`,
				},
				'https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys': {
					title: `DepthFirst：1クリック RCE の解説`,
					summary: `オリジナル調査：gateway 認証の奪取と RCE 化。`,
				},
				'https://www.runzero.com/blog/openclaw/': {
					title: `runZero：OpenClaw RCE アドバイザリ`,
					summary: `未認証ワンクリック RCE の影響と対象バージョンを要約。`,
				},
				'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare': {
					title: `個人 AI エージェントはセキュリティの悪夢`,
					summary: `Cisco：悪意ある skill、窃取、プロンプトインジェクション経路。`,
				},
				'https://x.com/rileybrown/status/2051372403494949125': {
					title: `OpenClaw は最初楽しい、その後は頭痛`,
					summary: `パワーユーザー：gateway 不調、cron 不発、skill フレーク、記憶欠落、再認証ループ。`,
				},
				'https://x.com/_brandonbrown_/status/2080412162929934470': {
					title: `コミット嵐のあとも production grade ではない`,
					summary: `安定待ちで戻っても基本タスクは黙って失敗、遅延が会話を殺す。`,
				},
				'https://x.com/georgeorch/status/2047408078962700566': {
					title: `デモは動いた、本番は動かなかった`,
					summary: `文脈喪失と指示ドロップに数週間溶かしてスタックを捨てた。`,
				},
				'https://x.com/___4o____/status/2031313346692264174': {
					title: `衛生ミーム — 数千の open issue と脆弱性`,
					summary: `issue/PR/脆弱性カウントのウイルス画像を、品質失控の証拠として流通。`,
				},
				'https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/': {
					title: `Where OpenClaw Breaks（現場ガイド）`,
					summary: `運用メモ：外部連携が認証失敗などで定期的に壊れる。`,
				},
			},
		},
		ko: {
			body: `OpenClaw는 이 목록에서 가장 분명한 나쁜 예입니다. 셸과 자격 증명을 요구하면서도 설치를 안정적으로 유지하지 못하고, 자기 이슈도 처리하지 못합니다. 스타 수는 인상적입니다. 일상적인 신뢰성은 그렇지 않습니다.

### 하드 시그널
- open issues가 수천 개인데도 설치 유도는 계속됨
- 문서화된 원클릭 RCE와 위험한 스킬 생태계
- 조용한 실패와 거짓 “작업 완료” 보고`,
			references: {
				'https://github.com/openclaw/openclaw': {
					title: `openclaw/openclaw 저장소 통계`,
					summary: `공개 스타·이슈 수로 품질 격차를 측정할 수 있다(약 38만 스타 vs 수천 open issues).`,
				},
				'https://nvd.nist.gov/vuln/detail/CVE-2026-25253': {
					title: `CVE-2026-25253 — gatewayUrl WebSocket 원클릭 RCE`,
					summary: `NVD: 조작된 쿼리 문자열의 자동 WebSocket 연결로 토큰 유출(2026.1.29 이전).`,
				},
				'https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys': {
					title: `DepthFirst: 1클릭 RCE 분석`,
					summary: `원본 연구: 게이트웨이 인증 탈취 후 RCE로 전환.`,
				},
				'https://www.runzero.com/blog/openclaw/': {
					title: `runZero: OpenClaw RCE 권고`,
					summary: `비인증 원클릭 RCE 영향과 대상 버전 요약.`,
				},
				'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare': {
					title: `개인 AI 에이전트는 보안 악몽`,
					summary: `Cisco: 악성 skill, 유출, 프롬프트 인젝션 경로.`,
				},
				'https://x.com/rileybrown/status/2051372403494949125': {
					title: `OpenClaw는 처음엔 재밌고, 그다음엔 두통`,
					summary: `파워 유저: 게이트웨이 문제, cron 미동작, skill 플래이크, 메모리 손실, 재인증 루프.`,
				},
				'https://x.com/_brandonbrown_/status/2080412162929934470': {
					title: `커밋 폭풍 후에도 production grade 아님`,
					summary: `안정화를 기다렸다 돌아와도 기본 태스크가 조용히 실패하고 지연이 대화를 죽인다.`,
				},
				'https://x.com/georgeorch/status/2047408078962700566': {
					title: `데모는 됐고 프로덕션은 안 됐다`,
					summary: `컨텍스트 손실·지시 드롭에 몇 주를 태운 뒤 스택을 버렸다.`,
				},
				'https://x.com/___4o____/status/2031313346692264174': {
					title: `위생 밈 — 수천 open issue와 취약점`,
					summary: `issue/PR/취약점 카운트 스냅샷이 품질 통제 실패의 증거로 퍼짐.`,
				},
				'https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/': {
					title: `Where OpenClaw Breaks (현장 가이드)`,
					summary: `운영 메모: 외부 연동이 인증 실패 등으로 자주 깨진다.`,
				},
			},
		},
		es: {
			body: `OpenClaw es el peor ejemplo más claro de este catálogo. Pide shell y credenciales, pero no mantiene estables las instalaciones ni drena su propia cola de issues. Las estrellas impresionan. La fiabilidad diaria no.

### Señales duras
- Miles de issues abiertas mientras siguen los embudos de instalación
- Un RCE de un clic documentado y un ecosistema de skills con riesgo real
- Usuarios que reportan fallos silenciosos y “tarea completada” falsas`,
			references: {
				'https://github.com/openclaw/openclaw': {
					title: `Estadísticas del repo openclaw/openclaw`,
					summary: `Estrellas e issues públicas hacen medible la brecha de calidad (~380k estrellas vs miles de issues abiertas).`,
				},
				'https://nvd.nist.gov/vuln/detail/CVE-2026-25253': {
					title: `CVE-2026-25253 — RCE de un clic vía WebSocket gatewayUrl`,
					summary: `Entrada NVD: exfiltración de token por conexión WebSocket automática desde query string manipulada (antes de 2026.1.29).`,
				},
				'https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys': {
					title: `DepthFirst: análisis del RCE 1-clic`,
					summary: `Investigación original: robar la auth del gateway y convertirla en RCE.`,
				},
				'https://www.runzero.com/blog/openclaw/': {
					title: `Aviso runZero sobre RCE de OpenClaw`,
					summary: `Resume impacto del RCE one-click no autenticado y versiones afectadas.`,
				},
				'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare': {
					title: `Los agentes de IA personales son una pesadilla de seguridad`,
					summary: `Cisco: skills maliciosas, exfiltración e inyección de prompts en el ecosistema.`,
				},
				'https://x.com/rileybrown/status/2051372403494949125': {
					title: `OpenClaw empieza divertido, luego el dolor de cabeza`,
					summary: `Power users: problemas de gateway, cron que no dispara, skills flakey, memoria que cae, bucles de re-auth.`,
				},
				'https://x.com/_brandonbrown_/status/2080412162929934470': {
					title: `Tras la tormenta de commits sigue sin ser production grade`,
					summary: `Volvió tras esperar estabilidad; las tareas básicas fallan en silencio y la latencia mata la conversación.`,
				},
				'https://x.com/georgeorch/status/2047408078962700566': {
					title: `La demo funcionó, la producción no`,
					summary: `Semanas perdidas por pérdida de contexto e instrucciones caídas antes de abandonar el stack.`,
				},
				'https://x.com/___4o____/status/2031313346692264174': {
					title: `Meme de higiene — miles de issues y vulns abiertas`,
					summary: `Captura viral de contadores issue/PR/vuln usada como prueba de calidad sin control.`,
				},
				'https://www.reddit.com/r/openclaw/comments/1rewrct/where_openclaw_breaks_a_field_guide_from_running/': {
					title: `Where OpenClaw Breaks (guía de campo)`,
					summary: `Notas de operador: las integraciones externas se rompen a menudo por fallos de auth y modos afines.`,
				},
			},
		},
	},
	moltbook: {
		zh: {
			body: `Moltbook 被收进这里，是因为它的鉴权和数据层在公开场合先垮了，后面任何「agent 文明」的大话都站不住。agent 有广场，会发请求的人也有。

### 硬信号
- 生产环境的 agent 记录没有得到应有的鉴权保护
- 后端密钥直接出现在客户端 JavaScript 里
- 运营把代码责任推给模型`,
			references: {
				'https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/': {
					title: `暴露的 Moltbook 数据库可让人接管任意 AI agent`,
					summary: `早期报道：配置错误的后端让未认证调用者控制 agent 并代发；平台下线轮换密钥。`,
				},
				'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys': {
					title: `入侵 Moltbook — 150 万 API 密钥暴露`,
					summary: `Wiz：客户端 JS 中的 Supabase 密钥具备完整库权限：约 150 万 agent token、约 3.5 万邮箱、私信；已披露并与运营方修复。`,
				},
				'https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/': {
					title: `Vibe-Coded 的 Moltbook 暴露用户数据与 API 密钥`,
					summary: `行业综述：把产品框定为 vibe-coded agent 社交，并总结客户端 Supabase 密钥事故。`,
				},
				'https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys': {
					title: `Moltbook「vibe-coded」缺陷暴露 AI 聊天与密钥`,
					summary: `指出暴露数据集中出现第三方凭据（如 OpenAI key）；引用 Schlicht「几乎没写一行代码」。`,
				},
				'https://en.wikipedia.org/wiki/Moltbook': {
					title: `Moltbook（概览）`,
					summary: `对上线、仅 agent 发帖模式，以及连续暴露/修补时间线的二手摘要。`,
				},
			},
		},
		de: {
			body: `Moltbook steht hier, weil Auth und Datenebene öffentlich scheiterten, bevor größere Erzählungen über „Agentenzivilisation“ ernst klingen konnten. Agenten hatten einen öffentlichen Platz. Jeder mit ein paar HTTP-Requests auch.

### Harte Signale
- Produktionsdaten von Agenten ohne ordentliche Authentifizierung erreichbar
- Ein Backend-Key im Client-JavaScript
- Eine Operator-Antwort, die dem Modell die Code-Verantwortung zuschiebt`,
			references: {
				'https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/': {
					title: `Exponierte Moltbook-DB: Übernahme jedes AI-Agents`,
					summary: `Früher Report: Fehlkonfiguriertes Backend ließ unauthentifizierte Caller Agents steuern und posten; Plattform offline für Key-Rotation.`,
				},
				'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys': {
					title: `Moltbook gehackt — 1,5M API-Keys offen`,
					summary: `Wiz: Supabase-Key in Client-JS mit vollem DB-Zugriff: ~1,5M Agent-Tokens, ~35k E-Mails, private DMs; disclosed und gepatcht.`,
				},
				'https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/': {
					title: `Vibe-Coded Moltbook leakt Userdaten und API-Keys`,
					summary: `Branchenstück: Produkt als vibe-coded Agent-Social, plus Client-Supabase-Key-Fail.`,
				},
				'https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys': {
					title: `Moltbook-„vibe-coded“-Lücke leakte AI-Chats und Keys`,
					summary: `Drittcredentials (z. B. OpenAI) in privaten Messages im Leak; Schlicht-Zitat zu null Codezeilen.`,
				},
				'https://en.wikipedia.org/wiki/Moltbook': {
					title: `Moltbook (Überblick)`,
					summary: `Sekundär-Zusammenfassung Launch, agent-only Posting und Exposure/Patch-Timeline.`,
				},
			},
		},
		it: {
			body: `Moltbook è qui perché auth e data plane sono falliti in pubblico prima che qualsiasi racconto di “civiltà degli agent” potesse essere preso sul serio. Gli agent avevano una piazza. Chiunque con qualche richiesta HTTP pure.

### Segnali duri
- Record di agent in produzione raggiungibili senza autenticazione adeguata
- Una chiave backend spedita nel JavaScript client
- Una risposta dell’operatore che tratta il modello come proprietario del codice`,
			references: {
				'https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/': {
					title: `Database Moltbook esposto: controllo di qualsiasi AI agent`,
					summary: `Report precoce: backend misconfigurato permetteva a caller non autenticati di controllare agent e postare; piattaforma offline per ruotare le chiavi.`,
				},
				'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys': {
					title: `Hacking Moltbook — 1,5M API key esposte`,
					summary: `Wiz: chiave Supabase nel JS client con accesso DB completo: ~1,5M token agent, ~35k email, DM private; disclosed e patchata.`,
				},
				'https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/': {
					title: `Moltbook vibe-coded espone dati utente e API key`,
					summary: `Pezzo di settore: prodotto come social agent vibe-coded e sintesi del fail della chiave Supabase client-side.`,
				},
				'https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys': {
					title: `Fallo “vibe-coded” di Moltbook: chat AI e chiavi esposte`,
					summary: `Credenziali terze (es. OpenAI) nei messaggi privati del dataset; citazione Schlicht su zero righe di codice.`,
				},
				'https://en.wikipedia.org/wiki/Moltbook': {
					title: `Moltbook (panoramica)`,
					summary: `Sintesi secondaria di launch, posting solo-agent e timeline esposizione/patch.`,
				},
			},
		},
		ja: {
			body: `Moltbook がここに載っている理由は、認証とデータ面が公開の場で先に壊れたからです。そのあとで「エージェント文明」を語っても説得力がありません。エージェントには広場がありました。HTTP を少し叩ける人にもありました。

### ハードシグナル
- 本番のエージェント記録が十分な認証なしで届いていた
- バックエンドキーがクライアント JavaScript に入っていた
- 運営がコードの責任をモデルに預けた`,
			references: {
				'https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/': {
					title: `露出した Moltbook DB で任意 AI agent を乗っ取れる`,
					summary: `初期報道：設定ミスのバックエンドが未認証呼び出しで agent 制御と投稿を許した；鍵ローテのため停止。`,
				},
				'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys': {
					title: `Moltbook ハック — 150 万 API キー露出`,
					summary: `Wiz：クライアント JS の Supabase 鍵が DB 全権限：約150万 agent トークン、約3.5万メール、私信；開示と修正済み。`,
				},
				'https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/': {
					title: `Vibe-Coded な Moltbook がユーザーデータと API キーを露出`,
					summary: `業界記事：バイブコーディング agent SNS としての位置づけとクライアント側 Supabase 鍵事故の要約。`,
				},
				'https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys': {
					title: `Moltbook の「vibe-coded」欠陥が AI チャットと鍵を露出`,
					summary: `漏洩データ内の第三者資格情報（OpenAI など）；Schlicht の「ほぼ一行も書いていない」発言。`,
				},
				'https://en.wikipedia.org/wiki/Moltbook': {
					title: `Moltbook（概要）`,
					summary: `ローンチ、agent 専用投稿、連続する露出/修正タイムラインの二次要約。`,
				},
			},
		},
		ko: {
			body: `Moltbook이 여기 있는 이유는 인증과 데이터 계층이 공개적으로 먼저 무너졌기 때문입니다. 그 뒤에 “에이전트 문명”을 말하기는 어렵습니다. 에이전트에게는 광장이 있었고, HTTP 요청 몇 번 할 수 있는 사람에게도 있었습니다.

### 하드 시그널
- 프로덕션 에이전트 기록이 제대로 된 인증 없이 접근 가능했음
- 백엔드 키가 클라이언트 JavaScript에 포함됨
- 운영이 코드 책임을 모델에 넘긴 대응`,
			references: {
				'https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/': {
					title: `노출된 Moltbook DB로 임의 AI 에이전트 장악 가능`,
					summary: `초기 보도: 잘못 구성된 백엔드가 미인증 호출로 에이전트 제어·게시 허용; 키 로테이션을 위해 오프라인.`,
				},
				'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys': {
					title: `Moltbook 해킹 — 150만 API 키 노출`,
					summary: `Wiz: 클라이언트 JS의 Supabase 키가 DB 전권: 약 150만 에이전트 토큰, 약 3.5만 이메일, 비공개 DM; 공개·패치됨.`,
				},
				'https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/': {
					title: `Vibe-Coded Moltbook이 사용자 데이터와 API 키 노출`,
					summary: `업계 기사: 바이브코딩 에이전트 소셜 프레이밍과 클라이언트 Supabase 키 사고 요약.`,
				},
				'https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys': {
					title: `Moltbook ‘vibe-coded’ 결함으로 AI 채팅·키 노출`,
					summary: `유출 데이터 속 제3자 자격증명(OpenAI 등); Schlicht의 “코드 한 줄도 안 씀” 인용.`,
				},
				'https://en.wikipedia.org/wiki/Moltbook': {
					title: `Moltbook (개요)`,
					summary: `출시, 에이전트 전용 포스팅, 연속 노출/패치 타임라인의 2차 요약.`,
				},
			},
		},
		es: {
			body: `Moltbook está aquí porque la capa de auth y datos falló en público antes de que cualquier relato de “civilización de agentes” pudiera tomarse en serio. Los agentes tenían una plaza. Cualquiera con unas pocas peticiones HTTP también.

### Señales duras
- Registros de agentes en producción alcanzables sin autenticación adecuada
- Una clave de backend enviada dentro del JavaScript del cliente
- Una respuesta del operador que deja la responsabilidad del código en el modelo`,
			references: {
				'https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/': {
					title: `Base de datos Moltbook expuesta: control de cualquier agente de IA`,
					summary: `Reporte temprano: backend mal configurado dejaba a callers no autenticados controlar agentes y publicar; la plataforma se apagó para rotar claves.`,
				},
				'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys': {
					title: `Hackeo de Moltbook — 1,5M de API keys expuestas`,
					summary: `Wiz: clave Supabase en JS del cliente con acceso total a la DB: ~1,5M tokens de agente, ~35k emails, DMs privadas; divulgada y parcheada.`,
				},
				'https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/': {
					title: `Moltbook vibe-coded expone datos de usuario y API keys`,
					summary: `Pieza de industria: producto como social de agentes vibe-coded y resumen del fallo de la clave Supabase en cliente.`,
				},
				'https://securitybrief.news/story/moltbook-vibe-coded-flaw-exposed-ai-chats-keys': {
					title: `Fallo “vibe-coded” de Moltbook expuso chats de IA y claves`,
					summary: `Credenciales de terceros (p. ej. OpenAI) en mensajes privados del dataset; cita de Schlicht sobre cero líneas de código.`,
				},
				'https://en.wikipedia.org/wiki/Moltbook': {
					title: `Moltbook (resumen)`,
					summary: `Resumen secundario del lanzamiento, posting solo de agentes y la línea de tiempo de exposición/parche.`,
				},
			},
		},
	},
	scriptc: {
		zh: {
			body: `scriptc 被收进这里，是因为它作为工具链 slop 很典型。宣传里它是离开 JavaScript 运行时的办法，首日 issue 里已经是错误代码和不完整的平台支持。发布帖在讲功能，issue 区在讲限制。

### 质量视角
- 构建通过，加载时因 FFI 失败
- Windows 用户一上来就被挡住
- 公开讨论更关心口号，而不是排障`,
			references: {
				'https://github.com/vercel-labs/scriptc': {
					title: `vercel-labs/scriptc 仓库`,
					summary: `上线没几天的 TypeScript→Native 编译器，星标涨得快，issue 也在涨。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/25': {
					title: `无法在 Windows 上运行`,
					summary: `上线即报：基础平台支持失败。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/10': {
					title: `Windows 上 scriptc run 打不开 TS 项目`,
					summary: `0.0.16 Windows：ts7 createProgram 打开项目失败。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/23': {
					title: `clang 编译失败（CcCompileError）`,
					summary: `用户项目在 C 中间步被 clang 打死。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/21': {
					title: `FFI 结果被丢掉 — 构建静默通过，加载时报 ReferenceError`,
					summary: `FFI 初始化从不重新赋值的局部时错误代码生成；构建无报错。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/19': {
					title: `动态具名 re-export 运行时失败且无诊断`,
					summary: `--dynamic 路径在构建期接受坏 re-export，之后才炸。`,
				},
				'https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html': {
					title: `Publickey：TS 到 C 管线`,
					summary: `解释中间 C 设计，以及已经冒出的 clang 形失败模式。`,
				},
				'https://x.com/yukimakura86/status/2081949008277414031': {
					title: `为什么是 C 而不是 LLVM IR？`,
					summary: `一堆发布复读里少数技术问题之一。`,
				},
				'https://x.com/AiMonyForge/status/2081956565914157336': {
					title: `Scriptc 改变三件事清单体`,
					summary: `冷启动与云成本清单式互动饵，不谈约束。`,
				},
				'https://x.com/0x_Missy22/status/2081955842195411202': {
					title: `「TS-to-Native 刚掉下来」模板帖`,
					summary: `趋势包装，没有平台或正确性约束。`,
				},
			},
		},
		de: {
			body: `scriptc steht hier als typischer Toolchain-Slop. Er wird als Weg aus JavaScript-Runtimes verkauft, während Day-one-Issues schon falschen Code und unvollständige Plattformunterstützung zeigen. Launch-Posts reden von Features. Der Issue-Tracker zeigt die Grenzen.

### Qualitätswinkel
- Builds bestehen, scheitern aber beim Laden wegen FFI
- Windows-Nutzer sind sofort blockiert
- Öffentliche Posts optimieren Slogans statt Triage`,
			references: {
				'https://github.com/vercel-labs/scriptc': {
					title: `vercel-labs/scriptc Repository`,
					summary: `Tagealter TypeScript-to-Native-Compiler mit schnellem Star-Wachstum und wachsender Issue-Liste.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/25': {
					title: `Läuft nicht unter Windows`,
					summary: `Basis-Plattform-Fail direkt nach Launch gemeldet.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/10': {
					title: `scriptc run öffnet TS-Projekt unter Windows nicht`,
					summary: `ts7 createProgram-Projektöffnung scheitert auf 0.0.16 Windows.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/23': {
					title: `clang-Compile fehlgeschlagen (CcCompileError)`,
					summary: `C-Zwischenschritt stirbt in clang für Nutzerprojekte.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/21': {
					title: `FFI-Ergebnis verworfen — stiller Build, ReferenceError beim Load`,
					summary: `Falsche Codegen, wenn FFI ein nie neu zugewiesenes Local initialisiert; kein Build-Error.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/19': {
					title: `Dynamische named Re-Exports scheitern zur Runtime ohne Diagnostik`,
					summary: `--dynamic akzeptiert kaputte Re-Exports zur Build-Zeit und scheitert später.`,
				},
				'https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html': {
					title: `Publickey zur TS-nach-C-Pipeline`,
					summary: `Erklärt das Intermediate-C-Design, das schon clang-förmige Failure Modes produziert.`,
				},
				'https://x.com/yukimakura86/status/2081949008277414031': {
					title: `Warum C statt LLVM IR?`,
					summary: `Eine der wenigen technischen Fragen im Launch-Repost-Meer.`,
				},
				'https://x.com/AiMonyForge/status/2081956565914157336': {
					title: `Drei Dinge, die Scriptc ändert (Listicle)`,
					summary: `Engagement-Köder zu Cold Starts und Cloud-Kosten ohne Caveats.`,
				},
				'https://x.com/0x_Missy22/status/2081955842195411202': {
					title: `TS-to-Native just dropped Template-Post`,
					summary: `Trend-Verpackung ohne Plattform- oder Korrektheitsgrenzen.`,
				},
			},
		},
		it: {
			body: `scriptc è qui come tipico slop da toolchain. Viene venduto come modo per lasciare i runtime JavaScript, mentre le issue del day-one mostrano già codice sbagliato e supporto piattaforma incompleto. I post di launch parlano di feature. L’issue tracker mostra i limiti.

### Angolo qualità
- Build che passano e poi falliscono al load per FFI
- Utenti Windows bloccati subito
- Post pubblici che ottimizzano slogan, non il triage`,
			references: {
				'https://github.com/vercel-labs/scriptc': {
					title: `Repo vercel-labs/scriptc`,
					summary: `Compilatore TypeScript→Native di pochi giorni, stelle rapide e lista issue in crescita.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/25': {
					title: `Non gira su Windows`,
					summary: `Fail di supporto piattaforma di base segnalato subito dopo il launch.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/10': {
					title: `scriptc run non apre progetti TS su Windows`,
					summary: `Fallimento ts7 createProgram su install 0.0.16 Windows.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/23': {
					title: `clang ha fallito la compilazione (CcCompileError)`,
					summary: `Lo step C intermedio muore in clang sui progetti utente.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/21': {
					title: `Risultato FFI droppato — build silenziosa, ReferenceError al load`,
					summary: `Codegen sbagliata quando FFI inizializza un local mai riassegnato; nessun errore di build.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/19': {
					title: `Re-export dinamici con nome falliscono a runtime senza diagnostica`,
					summary: `Il path --dynamic accetta re-export rotti in build e fallisce dopo.`,
				},
				'https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html': {
					title: `Publickey sulla pipeline TS→C`,
					summary: `Spiega il design intermediate-C che già produce failure mode da clang.`,
				},
				'https://x.com/yukimakura86/status/2081949008277414031': {
					title: `Perché C e non LLVM IR?`,
					summary: `Una delle poche domande tecniche in un mare di repost di launch.`,
				},
				'https://x.com/AiMonyForge/status/2081956565914157336': {
					title: `Tre cose che cambia Scriptc (listicle)`,
					summary: `Esca di engagement su cold start e costi cloud senza caveat.`,
				},
				'https://x.com/0x_Missy22/status/2081955842195411202': {
					title: `Post template “TS-to-Native just dropped”`,
					summary: `Packaging di trend senza vincoli di piattaforma o correttezza.`,
				},
			},
		},
		ja: {
			body: `scriptc がここに載っているのは、典型的なツールチェーンのスロップだからです。JavaScript ランタイムから離れる手段として売られ、初日の issue ではすでに誤ったコードと不完全なプラットフォームが見えます。ローンチ投稿は機能を話し、issue トラッカーは限界を見せます。

### 品質の切り口
- ビルドは通るが、FFI でロード時に落ちる
- Windows ユーザーが最初から止められる
- 公開投稿はスローガン優先で、切り分けではない`,
			references: {
				'https://github.com/vercel-labs/scriptc': {
					title: `vercel-labs/scriptc リポジトリ`,
					summary: `出たばかりの TypeScript→Native コンパイラ。star 急増、issue も増加中。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/25': {
					title: `Windows で動かない`,
					summary: `ローンチ直後の基本プラットフォーム失敗報告。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/10': {
					title: `Windows で scriptc run が TS プロジェクトを開けない`,
					summary: `0.0.16 Windows で ts7 createProgram が失敗。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/23': {
					title: `clang コンパイル失敗（CcCompileError）`,
					summary: `ユーザープロジェクトで C 中間段が clang で死ぬ。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/21': {
					title: `FFI 結果が落ちる — 黙って緑ビルド、ロードで ReferenceError`,
					summary: `再代入されない local を FFI 初期化すると誤コード生成；ビルドエラーなし。`,
				},
				'https://github.com/vercel-labs/scriptc/issues/19': {
					title: `動的 named re-export が診断なしで実行時失敗`,
					summary: `--dynamic が壊れた re-export をビルド時に通し、後で落ちる。`,
				},
				'https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html': {
					title: `Publickey：TS→C パイプライン`,
					summary: `すでに clang 型の失敗を出している intermediate-C 設計の説明。`,
				},
				'https://x.com/yukimakura86/status/2081949008277414031': {
					title: `なぜ LLVM IR ではなく C？`,
					summary: `ローンチ再投稿の海の中の数少ない技術質問。`,
				},
				'https://x.com/AiMonyForge/status/2081956565914157336': {
					title: `Scriptc が変える3つリストicle`,
					summary: `コールドスタートとクラウドコストの注意書きなし餌。`,
				},
				'https://x.com/0x_Missy22/status/2081955842195411202': {
					title: `「TS-to-Native just dropped」テンプレ投稿`,
					summary: `プラットフォーム/正しさの制約なしのトレンド包装。`,
				},
			},
		},
		ko: {
			body: `scriptc가 여기 있는 이유는 전형적인 툴체인 슬롭이기 때문입니다. JavaScript 런타임을 벗어나는 방법으로 팔리지만, 첫날 이슈에는 이미 잘못된 코드와 불완전한 플랫폼 지원이 있습니다. 출시 글은 기능을 말하고, 이슈 트래커는 한계를 보여 줍니다.

### 품질 각도
- 빌드는 통과하고 로드에서 FFI로 실패
- Windows 사용자가 바로 막힘
- 공개 글이 슬로건을 최적화하고 트리아주를 하지 않음`,
			references: {
				'https://github.com/vercel-labs/scriptc': {
					title: `vercel-labs/scriptc 저장소`,
					summary: `며칠 된 TypeScript→Native 컴파일러. 스타 급증, 이슈도 증가.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/25': {
					title: `Windows에서 실행 불가`,
					summary: `출시 직후 기본 플랫폼 지원 실패 보고.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/10': {
					title: `Windows에서 scriptc run이 TS 프로젝트를 못 염`,
					summary: `0.0.16 Windows에서 ts7 createProgram 프로젝트 오픈 실패.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/23': {
					title: `clang 컴파일 실패(CcCompileError)`,
					summary: `사용자 프로젝트에서 C 중간 단계가 clang에서 죽음.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/21': {
					title: `FFI 결과 드롭 — 조용한 빌드, 로드 시 ReferenceError`,
					summary: `재할당 없는 로컬을 FFI 초기화하면 잘못된 codegen; 빌드 에러 없음.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/19': {
					title: `동적 named re-export가 진단 없이 런타임 실패`,
					summary: `--dynamic이 깨진 re-export를 빌드 때 받고 나중에 실패.`,
				},
				'https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html': {
					title: `Publickey: TS→C 파이프라인`,
					summary: `이미 clang형 실패 모드를 내는 intermediate-C 설계 설명.`,
				},
				'https://x.com/yukimakura86/status/2081949008277414031': {
					title: `왜 LLVM IR이 아니라 C?`,
					summary: `런치 리포스트 바다 속 몇 안 되는 기술 질문.`,
				},
				'https://x.com/AiMonyForge/status/2081956565914157336': {
					title: `Scriptc가 바꾸는 세 가지 리스티클`,
					summary: `콜드 스타트·클라우드 비용 미끼, 주의사항 없음.`,
				},
				'https://x.com/0x_Missy22/status/2081955842195411202': {
					title: `“TS-to-Native just dropped” 템플릿 포스트`,
					summary: `플랫폼/정확성 제약 없는 트렌드 포장.`,
				},
			},
		},
		es: {
			body: `scriptc está aquí como slop típico de toolchain. Se vende como forma de dejar atrás los runtimes de JavaScript, mientras las issues del primer día ya muestran código incorrecto y soporte de plataforma incompleto. Los posts de lanzamiento hablan de funciones. El tracker muestra los límites.

### Ángulo de calidad
- Builds que pasan y luego fallan al cargar por FFI
- Usuarios de Windows bloqueados de entrada
- Posts públicos que optimizan eslóganes en vez de triage`,
			references: {
				'https://github.com/vercel-labs/scriptc': {
					title: `Repo vercel-labs/scriptc`,
					summary: `Compilador TypeScript→Native de pocos días, con subida rápida de estrellas y lista de issues creciente.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/25': {
					title: `No corre en Windows`,
					summary: `Fallo de soporte de plataforma básico reportado justo tras el launch.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/10': {
					title: `scriptc run no abre proyectos TS en Windows`,
					summary: `Fallo de ts7 createProgram en installs 0.0.16 Windows.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/23': {
					title: `clang falló al compilar (CcCompileError)`,
					summary: `El paso C intermedio muere en clang en proyectos de usuarios.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/21': {
					title: `Resultado FFI descartado — build silenciosa, ReferenceError al cargar`,
					summary: `Codegen incorrecta cuando FFI inicializa un local nunca reasignado; sin error de build.`,
				},
				'https://github.com/vercel-labs/scriptc/issues/19': {
					title: `Re-exports dinámicos con nombre fallan en runtime sin diagnósticos`,
					summary: `La ruta --dynamic acepta re-exports rotos en build y falla después.`,
				},
				'https://www.publickey1.jp/blog/26/verceltypescriptcscriptc.html': {
					title: `Publickey sobre el pipeline TS→C`,
					summary: `Explica el diseño intermediate-C que ya produce modos de fallo tipo clang.`,
				},
				'https://x.com/yukimakura86/status/2081949008277414031': {
					title: `¿Por qué C y no LLVM IR?`,
					summary: `Una de las pocas preguntas técnicas en un mar de reposts de launch.`,
				},
				'https://x.com/AiMonyForge/status/2081956565914157336': {
					title: `Tres cosas que cambia Scriptc (listicle)`,
					summary: `Cebo de engagement sobre cold starts y coste cloud sin matices.`,
				},
				'https://x.com/0x_Missy22/status/2081955842195411202': {
					title: `Post plantilla “TS-to-Native just dropped”`,
					summary: `Empaquetado de tendencia sin restricciones de plataforma o corrección.`,
				},
			},
		},
	},
	'vercel-labs-native': {
		zh: {
			body: `Native SDK 以后或许会好起来。今天它更像宣传完整、桌面能力不完整。口号是一场革命，未关闭的 issue 还在讲基本功。人们一直在给 Electron 办葬礼，产品自己还有焦点问题。

### 质量视角
- issue 标题读起来像 1.0 前的清单
- 社交讨论很少提这些缺口
- agent 自动化说法碰上 WebView 和快照盲区`,
			references: {
				'https://github.com/vercel-labs/native': {
					title: `vercel-labs/native 仓库`,
					summary: `约 7k 星、100+ open issues；README 卖零运行时原生二进制。`,
				},
				'https://github.com/vercel-labs/native/issues/226': {
					title: `WebView 只写不读 — 无 console、导航或崩溃信号`,
					summary: `嵌入 WebView 内容对自动化快照与应用侧诊断不可见。`,
				},
				'https://github.com/vercel-labs/native/issues/225': {
					title: `macOS focus 靠推断，不靠观测`,
					summary: `自动焦点与焦点切换滞后或永不出现；key window 放弃未被观测。`,
				},
				'https://github.com/vercel-labs/native/issues/224': {
					title: `终端事件无法识别是哪个终端`,
					summary: `on-terminal 状态没有 pty 键；多终端 UI 无法消歧。`,
				},
				'https://github.com/vercel-labs/native/issues/223': {
					title: `PtySpawnOptions 没有 cwd`,
					summary: `按目录开终端只能把 cd 塞进 shell 命令行。`,
				},
				'https://github.com/vercel-labs/native/issues/222': {
					title: `Focus 效果无法在视图间移动焦点`,
					summary: `文档里有 focus API，Zig 更新实际无法转移焦点。`,
				},
				'https://x.com/chenzeling4/status/2081182734568067120': {
					title: `Kill Electron 风格营销帖`,
					summary: `无浏览器运行时 + 星标数模板叙事当完整论据。`,
				},
				'https://x.com/crazibeat1/status/2079155682364870886': {
					title: `对重造桌面组件的怀疑`,
					summary: `吐槽原生桌面控件被反复重造，而不是用成熟栈。`,
				},
			},
		},
		de: {
			body: `Native SDK kann besser werden. Heute wirkt es marketing-fertig und desktop-unfertig. Der Pitch ist eine Revolution. Die offenen Issues sind noch Grundlagen. Electron wird immer wieder beerdigt. Das Produkt hat immer noch Focus-Bugs.

### Qualitätswinkel
- Issue-Titel klingen wie eine Pre-1.0-Checkliste
- Social Posts erwähnen diese Lücken selten
- Agent-Automation-Claims laufen in WebView- und Snapshot-Blindspots`,
			references: {
				'https://github.com/vercel-labs/native': {
					title: `vercel-labs/native Repository`,
					summary: `~7k Sterne, 100+ offene Issues; README vermarktet Zero-Runtime-Native-Binaries.`,
				},
				'https://github.com/vercel-labs/native/issues/226': {
					title: `WebView ist write-only — kein Console, Nav oder Crash-Signal`,
					summary: `Eingebetteter WebView-Inhalt unsichtbar für Automation-Snapshots und App-Diagnostik.`,
				},
				'https://github.com/vercel-labs/native/issues/225': {
					title: `macOS-Fokus wird inferiert, nicht beobachtet`,
					summary: `Autofocus und Fokuswechsel hinken oder kommen nie; Key-Window-Resignation unobserved.`,
				},
				'https://github.com/vercel-labs/native/issues/224': {
					title: `Terminal-Events identifizieren nicht welches Terminal`,
					summary: `on-terminal-State ohne pty-Key; Multi-Terminal-UIs nicht disambiguierbar.`,
				},
				'https://github.com/vercel-labs/native/issues/223': {
					title: `PtySpawnOptions hat kein cwd`,
					summary: `Pro-Verzeichnis-Terminals müssen cd in Shell-Kommandozeilen schmuggeln.`,
				},
				'https://github.com/vercel-labs/native/issues/222': {
					title: `Focus-Effects können Fokus nicht zwischen Views verschieben`,
					summary: `Dokumentierte Focus-APIs existieren, Zig-Updates transferieren Fokus nicht wirklich.`,
				},
				'https://x.com/chenzeling4/status/2081182734568067120': {
					title: `Kill-Electron-Marketing-Post`,
					summary: `Template-Narrativ: kein Browser-Runtime und Sterne als ganzes Argument.`,
				},
				'https://x.com/crazibeat1/status/2079155682364870886': {
					title: `Skepsis gegenüber reinvented Desktop-Widgets`,
					summary: `Pushback: native Desktop-Widgets werden neu erfunden statt reifer Stacks.`,
				},
			},
		},
		it: {
			body: `Native SDK può migliorare. Oggi è più completo di marketing che di desktop. Il pitch è una rivoluzione. Le issue aperte parlano ancora di fondamenta. Si continua a organizzare il funerale di Electron. Il prodotto ha ancora bug di focus.

### Angolo qualità
- I titoli delle issue sembrano una checklist pre-1.0
- I post social raramente citano quei buchi
- Le claim di automazione agent finiscono nei blind spot di WebView e snapshot`,
			references: {
				'https://github.com/vercel-labs/native': {
					title: `Repo vercel-labs/native`,
					summary: `~7k stelle e 100+ issue aperte; README vende binari nativi zero-runtime.`,
				},
				'https://github.com/vercel-labs/native/issues/226': {
					title: `WebView write-only — niente console, nav o segnali di crash`,
					summary: `Contenuto WebView incorporato invisibile a snapshot di automazione e diagnostica app.`,
				},
				'https://github.com/vercel-labs/native/issues/225': {
					title: `Il focus macOS è inferito, non osservato`,
					summary: `Autofocus e transizioni di focus ritardano o non compaiono; resignation della key window non osservata.`,
				},
				'https://github.com/vercel-labs/native/issues/224': {
					title: `Gli eventi terminal non dicono quale terminal`,
					summary: `Lo stato on-terminal non ha chiave pty; UI multi-terminal non disambiguabili.`,
				},
				'https://github.com/vercel-labs/native/issues/223': {
					title: `PtySpawnOptions senza cwd`,
					summary: `Terminal per directory devono contrabbandare cd nelle command line della shell.`,
				},
				'https://github.com/vercel-labs/native/issues/222': {
					title: `Gli effetti focus non spostano il focus tra view`,
					summary: `API focus documentate esistono ma gli update Zig non trasferiscono davvero il focus.`,
				},
				'https://x.com/chenzeling4/status/2081182734568067120': {
					title: `Post marketing stile Kill Electron`,
					summary: `Narrazione template: no browser runtime e conteggio stelle come argomento intero.`,
				},
				'https://x.com/crazibeat1/status/2079155682364870886': {
					title: `Scetticismo sul reinventare i widget desktop`,
					summary: `Pushback: i widget nativi vengono reinventati invece di usare stack maturi.`,
				},
			},
		},
		ja: {
			body: `Native SDK は今後良くなるかもしれません。今日のところは、宣伝は揃っているがデスクトップとしては未完成、という位置づけです。ピッチは革命です。未解決 issue はまだ基礎の話です。Electron の葬儀は何度も予定されています。製品にはまだフォーカスの不具合があります。

### 品質の切り口
- issue タイトルが 1.0 前のチェックリストに見える
- SNS はそれらの穴にほとんど触れない
- agent 自動化の主張が WebView とスナップショットの死角にぶつかる`,
			references: {
				'https://github.com/vercel-labs/native': {
					title: `vercel-labs/native リポジトリ`,
					summary: `約7k star、100+ open issues。README はゼロランタイムネイティブバイナリを宣伝。`,
				},
				'https://github.com/vercel-labs/native/issues/226': {
					title: `WebView は write-only — console / nav / crash 信号なし`,
					summary: `埋め込み WebView が自動化スナップショットとアプリ側診断から見えない。`,
				},
				'https://github.com/vercel-labs/native/issues/225': {
					title: `macOS の focus は観測ではなく推論`,
					summary: `Autofocus と focus 遷移が遅延または出ない；key window 放棄が未観測。`,
				},
				'https://github.com/vercel-labs/native/issues/224': {
					title: `端末イベントがどの端末か分からない`,
					summary: `on-terminal 状態に pty キーがなく、複数端末 UI を区別できない。`,
				},
				'https://github.com/vercel-labs/native/issues/223': {
					title: `PtySpawnOptions に cwd がない`,
					summary: `ディレクトリ別端末は shell コマンドラインに cd を密輸するしかない。`,
				},
				'https://github.com/vercel-labs/native/issues/222': {
					title: `Focus 効果がビュー間で focus を移せない`,
					summary: `文書化された focus API はあるが Zig 更新は実際に focus を移せない。`,
				},
				'https://x.com/chenzeling4/status/2081182734568067120': {
					title: `Kill Electron 風マーケティング投稿`,
					summary: `ブラウザ runtime なし＋ star 数だけで論を完結させるテンプレ。`,
				},
				'https://x.com/crazibeat1/status/2079155682364870886': {
					title: `デスクトップ部品の再発明への懐疑`,
					summary: `成熟スタックを使わずネイティブウィジェットを作り直すことへの反発。`,
				},
			},
		},
		ko: {
			body: `Native SDK는 앞으로 나아질 수 있습니다. 오늘은 마케팅은 갖춰졌고 데스크톱은 아직 부족한 상태로 적습니다. 피치는 혁명입니다. 열린 이슈는 아직 기초입니다. Electron 장례는 계속 잡히고, 제품에는 아직 포커스 버그가 있습니다.

### 품질 각도
- 이슈 제목이 1.0 이전 체크리스트처럼 읽힘
- 소셜 글은 그 구멍을 거의 말하지 않음
- 에이전트 자동화 주장이 WebView·스냅샷 사각에 부딪힘`,
			references: {
				'https://github.com/vercel-labs/native': {
					title: `vercel-labs/native 저장소`,
					summary: `약 7k 스타, 100+ open issues. README는 제로 런타임 네이티브 바이너리를 팜.`,
				},
				'https://github.com/vercel-labs/native/issues/226': {
					title: `WebView는 write-only — 콘솔·내비·크래시 신호 없음`,
					summary: `임베디드 WebView 콘텐츠가 자동화 스냅샷·앱 진단에 안 보임.`,
				},
				'https://github.com/vercel-labs/native/issues/225': {
					title: `macOS 포커스는 관측이 아니라 추론`,
					summary: `오토포커스/포커스 전환이 늦거나 안 나타남; key window 포기가 관측되지 않음.`,
				},
				'https://github.com/vercel-labs/native/issues/224': {
					title: `터미널 이벤트가 어느 터미널인지 모름`,
					summary: `on-terminal 상태에 pty 키 없음; 다중 터미널 UI 구분 불가.`,
				},
				'https://github.com/vercel-labs/native/issues/223': {
					title: `PtySpawnOptions에 cwd 없음`,
					summary: `디렉터리별 터미널은 셸 커맨드라인에 cd를 밀수해야 함.`,
				},
				'https://github.com/vercel-labs/native/issues/222': {
					title: `포커스 효과가 뷰 간 포커스를 못 옮김`,
					summary: `문서화된 포커스 API는 있으나 Zig 업데이트가 실제로 포커스를 옮기지 못함.`,
				},
				'https://x.com/chenzeling4/status/2081182734568067120': {
					title: `Kill Electron 스타일 마케팅 포스트`,
					summary: `브라우저 런타임 없음 + 스타 수만으로 논거를 끝내는 템플릿.`,
				},
				'https://x.com/crazibeat1/status/2079155682364870886': {
					title: `데스크톱 위젯 재발명에 대한 회의`,
					summary: `성숙 스택 대신 네이티브 위젯을 또 만드는 것에 대한 반박.`,
				},
			},
		},
		es: {
			body: `Native SDK puede mejorar. Hoy se lee más completo de marketing que de escritorio. El pitch es una revolución. Las issues abiertas siguen siendo fundamentos. Se sigue organizando el funeral de Electron. El producto aún tiene bugs de focus.

### Ángulo de calidad
- Los títulos de issue parecen una checklist pre-1.0
- Los posts sociales raramente mencionan esos huecos
- Las claims de automatización de agentes chocan con puntos ciegos de WebView y snapshot`,
			references: {
				'https://github.com/vercel-labs/native': {
					title: `Repo vercel-labs/native`,
					summary: `~7k estrellas y 100+ issues abiertas; el README vende binarios nativos zero-runtime.`,
				},
				'https://github.com/vercel-labs/native/issues/226': {
					title: `WebView es write-only — sin console, nav ni señales de crash`,
					summary: `El contenido WebView embebido es invisible para snapshots de automatización y diagnósticos de la app.`,
				},
				'https://github.com/vercel-labs/native/issues/225': {
					title: `El focus en macOS se infiere, no se observa`,
					summary: `Autofocus y transiciones de focus retrasan o no aparecen; la renuncia de key window no se observa.`,
				},
				'https://github.com/vercel-labs/native/issues/224': {
					title: `Los eventos de terminal no identifican cuál terminal`,
					summary: `El estado on-terminal no trae clave pty; UIs multi-terminal no se desambiguan.`,
				},
				'https://github.com/vercel-labs/native/issues/223': {
					title: `PtySpawnOptions no tiene cwd`,
					summary: `Terminales por directorio deben colar cd en la línea de comandos del shell.`,
				},
				'https://github.com/vercel-labs/native/issues/222': {
					title: `Los efectos de focus no mueven el focus entre views`,
					summary: `Existen APIs de focus documentadas pero las updates Zig no transfieren focus de verdad.`,
				},
				'https://x.com/chenzeling4/status/2081182734568067120': {
					title: `Post de marketing estilo Kill Electron`,
					summary: `Narrativa plantilla: sin runtime de browser y el conteo de estrellas como argumento completo.`,
				},
				'https://x.com/crazibeat1/status/2079155682364870886': {
					title: `Escepticismo sobre reinventar widgets de escritorio`,
					summary: `Empuje: se reinventan widgets nativos en vez de usar stacks maduros.`,
				},
			},
		},
	},
	zerolang: {
		zh: {
			body: `Zerolang 是包着 agent 故事的编译器质量 slop。宣传讲的是给 agent 的语义确定性。公开证据是错误代码、社区明确的「别在你机器上跑」，以及在 agent 原生宣传底下找到硬编码的文章。

### 硬信号
- 主干上可复现的错误代码和健全性问题（#318）
- Apple Silicon 宿主后端的缺口（#230）
- 社区和维护者都明确承认质量很差（#181）
- 中文长文写到：stdlib 被烤进 IR、runtime 模块很薄、公开批评后整棵编译器树被删
- 和 scriptc、native 一样：先讲故事，质量后补`,
			references: {
				'https://github.com/vercel-labs/zerolang': {
					title: `README 安全警告`,
					summary: `官方警告：实验性，预期 breaking 与安全问题；隔离环境，勿对生产/敏感数据。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/181': {
					title: `低代码质量。别在你机器上跑。`,
					summary: `社区质量炮轰（契约、C 指针效果、stringly IR）；维护者认账并提到招人。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/318': {
					title: `Bug 审计 — 18 条可复现发现`,
					summary: `对 tokenizer/parser/borrow/backends/stdlib 的单次审计：S1 darwin-arm64 上 i64 CMP 错码；S2 栈帧静默截断→SIGSEGV；S3 动态数组 set 上的 borrow 健全性；另有 parser/stdlib 错误结果。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/230': {
					title: `darwin-arm64 Mach-O direct backend 缺操作（CGEN004）`,
					summary: `许多 direct-* 示例在 Apple Silicon 宿主后端失败——缺字节操作、error/raise 路径等。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/425': {
					title: `错误的模块哈希比较`,
					summary: `图/模块哈希比较 bug——正中「过期哈希拒绝写入」的 agent 故事核心。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/290': {
					title: `0.1.4 的重大语法变更`,
					summary: `早期版本仍在甩语法——agent skill 与人类投影都在追移动靶。`,
				},
				'https://x.com/zerolangai/status/2063264734108155978': {
					title: `Vercel Labs 营销框架（agent 图，不是文本）`,
					summary: `官方 X 账号 pitch：图优先、可验证重构；实验性表述常被发布热度淹没。`,
				},
				'https://zhuanlan.zhihu.com/p/2039725076204016063': {
					title: `PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生（zerolang 扒代码）`,
					summary: `中文长文吐槽 Zero/zerolang 作为「agent 原生」语言，实现读起来像反 hype 行为艺术——记录粗糙 IR 与编译器结构，如何拆穿 graph-first 营销。`,
				},
				'https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555': {
					title: `如何评价 Vercel 近期发布的 Zero 编程语言？（续扒）`,
					summary: `续篇：批判后 compiler-zero 整树被删；time/rand/fs 仍在 IR 里建模；新「runtime」多为 http/json 而硬编码仍在；巨大的 EmitContext/RuntimePatch 面；薄 checker 上的 ownership/effect-handler 时尚——社区证据：agent thrash 树的速度压过质量落地。`,
				},
			},
		},
		de: {
			body: `Zerolang ist Compiler-Qualitätsslop mit einer Agent-Story darum. Der Pitch ist semantische Sicherheit für Agents. Die öffentliche Evidenz ist Wrong-Code, ein klares „don't run this“ aus der Community und Texte, die Hardcoding unter dem agent-native Marketing finden.

### Harte Signale
- Wrong-Code- und Soundness-Funde mit Repros auf main (#318)
- Host-Backend-Lücken auf Apple Silicon (#230)
- Explizites Eingeständnis niedriger Qualität von Community und Maintainern (#181)
- Chinesische Deep-Dives zu IR-eingebrannter Stdlib, dünnem Runtime-Modul und gelöschten Compiler-Bäumen nach öffentlicher Kritik
- Dasselbe Labs-Muster wie scriptc und native: zuerst die Story, Qualität später`,
			references: {
				'https://github.com/vercel-labs/zerolang': {
					title: `README-Sicherheitswarnung`,
					summary: `Offizieller Hinweis: experimentell, Breaking Changes und Security-Issues erwarten; isolieren, nicht Produktion/sensible Daten.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/181': {
					title: `Low code quality. Don’t run this on your machine.`,
					summary: `Community-Qualitätsblast (Contracts, C-Pointer-Effects, stringly IR); Maintainer acknowledged und sprach von Hiring.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/318': {
					title: `Bug-Audit — 18 reproduzierte Findings`,
					summary: `Ein Audit über Tokenizer/Parser/Borrow/Backends/Stdlib: S1 Wrong-Code-i64-CMP auf darwin-arm64; S2 stille Stackframe-Trunkierung → SIGSEGV; S3 Borrow-Soundness bei dynamic-array set; plus Parser/Stdlib-Falschresultate.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/230': {
					title: `darwin-arm64 Mach-O Direct-Backend fehlt Ops (CGEN004)`,
					summary: `Viele direct-*-Beispiele scheitern auf Apple-Silicon-Host-Backend — fehlende Byte-Ops, Error/Raise-Pfade usw.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/425': {
					title: `Falscher Modul-Hash-Vergleich`,
					summary: `Graph/Modul-Hash-Vergleichsbug — Kern der „stale hash reject“-Agent-Story.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/290': {
					title: `Große Syntaxänderungen in 0.1.4`,
					summary: `Frühe Versionen thrashen Syntax — Agent-Skills und Human-Projections jagen ein bewegliches Ziel.`,
				},
				'https://x.com/zerolangai/status/2063264734108155978': {
					title: `Vercel-Labs-Marketing (Agent-Graph, nicht Text)`,
					summary: `Offizieller X-Pitch: graph-first, verifizierbares Refactor; experimenteller Rahmen oft unter Launch-Energie begraben.`,
				},
				'https://zhuanlan.zhihu.com/p/2039725076204016063': {
					title: `PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生 (zerolang-Code-Roast)`,
					summary: `Chinesischer Langform-Roast von Zero/zerolang als „agent-native“ Sprache, deren Implementierung wie Anti-Hype-Performance-Art wirkt — dokumentiert grobe IR und Compiler-Struktur gegen das Graph-first-Marketing.`,
				},
				'https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555': {
					title: `Wie ist Zero von Vercel zu bewerten? (Fortsetzung)`,
					summary: `Follow-up: compiler-zero-Baum nach Kritik gelöscht; time/rand/fs weiter in IR; neues „runtime“ vor allem http/json bei bleibendem Hardcoding; riesige EmitContext/RuntimePatch-Fläche; Ownership/Effect-Handler-Mode auf dünnem Checker — Community-Evidenz, dass Agents den Baum schneller thrashen als Qualität landet.`,
				},
			},
		},
		it: {
			body: `Zerolang è slop di qualità del compilatore con una storia da agent avvolta intorno. Il pitch è certezza semantica per gli agent. L’evidenza pubblica è wrong-code, un esplicito “don't run this” della community e pezzi che trovano hardcoding sotto il marketing agent-native.

### Segnali duri
- Finding di wrong-code e soundness con repro su main (#318)
- Buchi del backend host su Apple Silicon (#230)
- Riconoscimento esplicito di bassa qualità da community e maintainer (#181)
- Deep-dive cinesi su stdlib cotta nell’IR, modulo runtime sottile e alberi interi del compilatore cancellati dopo critiche pubbliche
- Lo stesso schema Labs di scriptc e native: prima la storia, la qualità dopo`,
			references: {
				'https://github.com/vercel-labs/zerolang': {
					title: `Avviso di sicurezza del README`,
					summary: `Warning ufficiale: sperimentale, aspettarsi breaking e issue di sicurezza; isolare, non produzione/dati sensibili.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/181': {
					title: `Low code quality. Don’t run this on your machine.`,
					summary: `Cannonata community sulla qualità (contract, effetti puntatori C, IR stringly); maintainer ha riconosciuto e parlato di hiring.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/318': {
					title: `Audit bug — 18 finding riprodotti`,
					summary: `Un audit su tokenizer/parser/borrow/backend/stdlib: S1 wrong-code i64 CMP su darwin-arm64; S2 troncamento silenzioso dello stack frame → SIGSEGV; S3 soundness del borrow su set di array dinamici; più risultati sbagliati parser/stdlib.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/230': {
					title: `Backend direct Mach-O darwin-arm64 senza ops (CGEN004)`,
					summary: `Molti esempi direct-* falliscono sul backend host Apple Silicon — mancano byte ops, path error/raise, ecc.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/425': {
					title: `Confronto hash di modulo errato`,
					summary: `Bug di confronto hash grafo/modulo — cuore della storia agent “stale hash reject”.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/290': {
					title: `Grandi cambi di sintassi in 0.1.4`,
					summary: `Le prime versioni thrashano ancora la sintassi — skill agent e proiezioni umane inseguono un bersaglio mobile.`,
				},
				'https://x.com/zerolangai/status/2063264734108155978': {
					title: `Framing marketing Vercel Labs (grafo agent, non testo)`,
					summary: `Pitch ufficiale su X: graph-first, refactor verificato; il framing sperimentale spesso sommerso dall’energia di launch.`,
				},
				'https://zhuanlan.zhihu.com/p/2039725076204016063': {
					title: `PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生 (roast del codice zerolang)`,
					summary: `Long-form cinese su Zero/zerolang come linguaggio “agent-native” la cui implementazione sembra performance art anti-hype — documenta IR grezzo e struttura del compilatore che smontano il marketing graph-first.`,
				},
				'https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555': {
					title: `Come valutare Zero di Vercel? (seguito)`,
					summary: `Seguito: albero compiler-zero cancellato dopo critiche; time/rand/fs ancora modellati in IR; nuovo “runtime” soprattutto http/json mentre l’hardcoding resta; superficie enorme EmitContext/RuntimePatch; ownership/effect-handler di moda su checker sottile — evidenza di comunità che gli agent thrashano l’albero più in fretta di quanto atterri la qualità.`,
				},
			},
		},
		ja: {
			body: `Zerolang は、エージェントの物語をまとったコンパイラ品質のスロップです。売りはエージェント向けの意味的な確実性です。公開証拠は誤ったコード、コミュニティの明確な「実行するな」、そして agent ネイティブ宣伝の下にハードコードを見つける文章です。

### ハードシグナル
- main 上で再現できる wrong-code と soundness の問題（#318）
- Apple Silicon ホスト backend の穴（#230）
- コミュニティとメンテナ双方の低品質の明示（#181）
- 中国語の長文：IR に焼き込まれた stdlib、薄い runtime、公開批判後のコンパイラツリー削除
- scriptc や native と同じ Labs の型：先に物語、品質は後`,
			references: {
				'https://github.com/vercel-labs/zerolang': {
					title: `README 安全警告`,
					summary: `公式：実験的、breaking とセキュリティ問題を想定；隔離し、本番/機微データに使うな。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/181': {
					title: `Low code quality. Don’t run this on your machine.`,
					summary: `コミュニティの品質弾劾（契約、C ポインタ効果、stringly IR）；メンテナが認めて採用中と述べた。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/318': {
					title: `バグ監査 — 再現 18 件`,
					summary: `tokenizer/parser/borrow/backends/stdlib の単発監査：S1 darwin-arm64 の i64 CMP 誤コード；S2 スタックフレーム黙って切り詰め→SIGSEGV；S3 動的配列 set の borrow soundness；parser/stdlib の誤結果も。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/230': {
					title: `darwin-arm64 Mach-O direct backend が ops 不足（CGEN004）`,
					summary: `多くの direct-* 例が Apple Silicon ホスト backend で失敗——byte ops や error/raise パス欠落など。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/425': {
					title: `誤ったモジュールハッシュ比較`,
					summary: `グラフ/モジュールハッシュ比較バグ——「古いハッシュは書き込み拒否」という agent 物語の核心。`,
				},
				'https://github.com/vercel-labs/zerolang/issues/290': {
					title: `0.1.4 の大幅な構文変更`,
					summary: `初期版はまだ構文が揺れる——agent skill も人間投影も動く標的を追う。`,
				},
				'https://x.com/zerolangai/status/2063264734108155978': {
					title: `Vercel Labs のマーケティング枠（agent グラフ、テキストではない）`,
					summary: `公式 X の pitch：graph-first、検証可能な refactor；実験的フレーミングはローンチ熱に埋もれがち。`,
				},
				'https://zhuanlan.zhihu.com/p/2039725076204016063': {
					title: `PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生（zerolang コード解剖）`,
					summary: `Zero/zerolang を「agent ネイティブ」言語として扱う中国語長文のロースト。実装がアンチハイプの行為芸術のように読めるとし、粗い IR とコンパイラ構造が graph-first マーケを掘り崩すと記録。`,
				},
				'https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555': {
					title: `Vercel の Zero 言語をどう評価するか？（続編）`,
					summary: `続編：批判後に compiler-zero ツリー削除；time/rand/fs は依然 IR モデル；新「runtime」は主に http/json でハードコードは残る；巨大な EmitContext/RuntimePatch；薄い checker 上の ownership/effect-handler 流行——agent が品質着地より速くツリーを thrash するコミュニティ証拠。`,
				},
			},
		},
		ko: {
			body: `Zerolang은 에이전트 이야기를 두른 컴파일러 품질 슬롭입니다. 피치는 에이전트를 위한 의미적 확실성입니다. 공개 증거는 wrong-code, 커뮤니티의 분명한 “실행하지 마”, 그리고 에이전트 네이티브 마케팅 아래 하드코딩을 찾아내는 글입니다.

### 하드 시그널
- main에서 재현되는 wrong-code와 사운드니스 문제(#318)
- Apple Silicon 호스트 백엔드 구멍(#230)
- 커뮤니티와 메인테이너의 저품질 명시(#181)
- 중국어 장문: IR에 구운 stdlib, 얇은 runtime, 공개 비판 후 컴파일러 트리 삭제
- scriptc·native과 같은 Labs 패턴: 이야기 먼저, 품질은 나중`,
			references: {
				'https://github.com/vercel-labs/zerolang': {
					title: `README 안전 경고`,
					summary: `공식 경고: 실험적, breaking·보안 이슈 예상; 격리, 프로덕션/민감 데이터에 쓰지 말 것.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/181': {
					title: `Low code quality. Don’t run this on your machine.`,
					summary: `커뮤니티 품질 비판(계약, C 포인터 효과, stringly IR); 메인테이너 인정 및 채용 언급.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/318': {
					title: `버그 감사 — 재현 18건`,
					summary: `tokenizer/parser/borrow/backends/stdlib 단일 감사: S1 darwin-arm64 i64 CMP wrong-code; S2 스택 프레임 묵시 절단→SIGSEGV; S3 동적 배열 set의 borrow 사운드니스; parser/stdlib 오결과 포함.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/230': {
					title: `darwin-arm64 Mach-O direct 백엔드 ops 부족(CGEN004)`,
					summary: `많은 direct-* 예제가 Apple Silicon 호스트 백엔드에서 실패—바이트 ops, error/raise 경로 등 결여.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/425': {
					title: `잘못된 모듈 해시 비교`,
					summary: `그래프/모듈 해시 비교 버그—“stale hash reject” 에이전트 스토리의 핵심.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/290': {
					title: `0.1.4 대규모 문법 변경`,
					summary: `초기 버전이 아직 문법을 흔듦—에이전트 skill과 인간 프로젝션 모두 움직이는 과녁을 쫓음.`,
				},
				'https://x.com/zerolangai/status/2063264734108155978': {
					title: `Vercel Labs 마케팅 프레이밍(에이전트 그래프, 텍스트 아님)`,
					summary: `공식 X 피치: graph-first, 검증 가능한 리팩터; 실험 프레이밍은 런치 열기에 자주 묻힘.`,
				},
				'https://zhuanlan.zhihu.com/p/2039725076204016063': {
					title: `PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生 (zerolang 코드 해부)`,
					summary: `Zero/zerolang을 “에이전트 네이티브” 언어로 다루는 중국어 장문 로스트. 구현이 안티-하이프 행위예술처럼 읽힌다고 보며, 거친 IR과 컴파일러 구조가 graph-first 마케팅을 깎는다고 기록.`,
				},
				'https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555': {
					title: `Vercel의 Zero 언어를 어떻게 볼 것인가? (속편)`,
					summary: `속편: 비판 후 compiler-zero 트리 삭제; time/rand/fs는 여전히 IR 모델링; 새 “runtime”은 주로 http/json이고 하드코딩은 남음; 거대한 EmitContext/RuntimePatch; 얇은 checker 위의 ownership/effect-handler 유행—에이전트가 품질 착지보다 빠르게 트리를 thrash한다는 커뮤니티 증거.`,
				},
			},
		},
		es: {
			body: `Zerolang es slop de calidad de compilador con una historia de agente alrededor. El pitch es certeza semántica para agentes. La evidencia pública es wrong-code, un “no lo ejecutes” explícito de la comunidad y textos que encuentran hardcoding bajo el marketing agent-native.

### Señales duras
- Hallazgos de wrong-code y soundness con repros en main (#318)
- Huecos del backend host en Apple Silicon (#230)
- Reconocimiento explícito de baja calidad por comunidad y maintainers (#181)
- Textos largos en chino sobre stdlib en el IR, runtime delgado y árboles enteros del compilador borrados tras críticas públicas
- El mismo patrón Labs que scriptc y native: primero la historia, la calidad después`,
			references: {
				'https://github.com/vercel-labs/zerolang': {
					title: `Advertencia de seguridad del README`,
					summary: `Aviso oficial: experimental, esperar breaking e issues de seguridad; aislar, no producción/datos sensibles.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/181': {
					title: `Low code quality. Don’t run this on your machine.`,
					summary: `Cañonazo comunitario de calidad (contratos, efectos de punteros C, IR stringly); el maintainer reconoció y habló de hiring.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/318': {
					title: `Auditoría de bugs — 18 hallazgos reproducidos`,
					summary: `Una auditoría de tokenizer/parser/borrow/backends/stdlib: S1 wrong-code i64 CMP en darwin-arm64; S2 truncado silencioso de stack frame → SIGSEGV; S3 soundness de borrow en set de arrays dinámicos; más resultados erróneos de parser/stdlib.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/230': {
					title: `Backend direct Mach-O darwin-arm64 sin ops (CGEN004)`,
					summary: `Muchos ejemplos direct-* fallan en el backend host de Apple Silicon — faltan byte ops, rutas error/raise, etc.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/425': {
					title: `Comparación incorrecta de hash de módulo`,
					summary: `Bug de comparación de hash de grafo/módulo — núcleo de la historia agent “stale hash reject”.`,
				},
				'https://github.com/vercel-labs/zerolang/issues/290': {
					title: `Grandes cambios de sintaxis en 0.1.4`,
					summary: `Las primeras versiones aún zarandean la sintaxis — skills de agent y proyecciones humanas persiguen un blanco móvil.`,
				},
				'https://x.com/zerolangai/status/2063264734108155978': {
					title: `Framing de marketing de Vercel Labs (grafo agent, no texto)`,
					summary: `Pitch oficial en X: graph-first, refactor verificado; el marco experimental a menudo queda enterrado bajo la energía del launch.`,
				},
				'https://zhuanlan.zhihu.com/p/2039725076204016063': {
					title: `PL Nerd 迎来惊天大变 · Vibe Coder 喜提 AI 原生 (roast de código zerolang)`,
					summary: `Largo roast chino de Zero/zerolang como lenguaje “agent-native” cuya implementación parece performance art anti-hype — documenta IR crudo y estructura del compilador que desmontan el marketing graph-first.`,
				},
				'https://www.zhihu.com/question/2040211383581685307/answer/2040244239687279555': {
					title: `¿Cómo valorar Zero de Vercel? (continuación)`,
					summary: `Seguimiento: árbol compiler-zero borrado tras críticas; time/rand/fs siguen modelados en IR; el nuevo “runtime” es sobre todo http/json y el hardcoding permanece; superficie enorme EmitContext/RuntimePatch; ownership/effect-handler de moda sobre checker delgado — evidencia comunitaria de que los agentes thrash el árbol más rápido de lo que aterriza la calidad.`,
				},
			},
		},
	},
	edict: {
		zh: {
			body: `Edict 被收进这里，是 OpenClaw 生态里的朝廷 cosplay slop。帝国官僚制是多智能体编排的包装；与先一步上线的近孪生仓之间的公开归属战，是公开收据。

### 硬信号
- GitHub 创建时间 **2026-02-23 14:35 UTC**，对方 **2026-02-22 17:17 UTC**（约晚 21 小时）
- 同一隐喻栈：用户即皇帝、三省六部、OpenClaw、一键安装
- 公开 issue **#55** 与 **#94** 记录争议；维护者以非技术讨论关闭
- 末次核对时 star 远超早一步的孪生仓（约 16k vs 约 2.7k）
- 仓库 homepage 指向 **openclaw.ai**，不是自有产品站
- Webhook SSRF 与看板离线报告，说明 cosplay 底下仍是普通运维债
- 公开 issue **#251** 报告三省六部 agent 在现场经常离线`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `cft0808/edict 仓库`,
					summary: `OpenClaw 多智能体朝廷项目。约 1.6 万星，创建于 2026-02-23 UTC，MIT，Python 加 React 看板营销。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 抄袭或未署名主张`,
					summary: `wanikua 称核心概念与 agent 设计来自其更早的朝廷教程。时间线显示 Edict 约晚 21 小时创建。issue 以非技术讨论关闭。`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue 94 原创性跟进投诉`,
					summary: `同一作者的第二份已关闭 issue，升级归属争议。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `当皇上 originality 声明（对方仓）`,
					summary: `对方证据链：共享部制映射、拼音 agent ID（bingbu/hubu/libu/gongbu/xingbu）以及 CrewAI/MetaGPT/AutoGen 对比框架。文中写 2025 日期；GitHub created_at 为 2026。`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue 318 通用 webhook 通道 SSRF 加固`,
					summary: `朝廷 UI 下 webhook URL 校验的安全工作（CWE-918）。`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue 317 加固 webhook 防内网地址`,
					summary: `针对私网与 loopback webhook 目标的开放加固请求。`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue 251 三省六部 agent 经常不在线`,
					summary: `现场报告：三省六部 agent 在看板里频繁显示离线。`,
				},
			},
		},
		de: {
			body: `Edict steht hier als openclaw-ecosystem Cosplay-Slop. Kaiserliche Bürokratie ist die Verpackung für Multi-Agent-Orchestrierung; der öffentliche Attributionskampf gegen einen Fast-Zwilling, der früher shippte, sind die Belege.

### Harte Signale
- GitHub-Create **2026-02-23 14:35 UTC** vs Gegenpartei **2026-02-22 17:17 UTC** (etwa 21 Stunden später)
- Derselbe Metaphern-Stack: Nutzer als Kaiser, drei Departements, sechs Ministerien, OpenClaw, One-Shot-Install
- Öffentliche Issues **#55** und **#94** dokumentieren den Streit; Maintainer schloss sie als nicht-technisch
- Sterne überholen den früheren Zwilling (etwa 16k vs etwa 2.7k bei letztem Check)
- Homepage-Feld zeigt auf **openclaw.ai**, nicht auf eine First-Party-Produktseite
- Webhook-SSRF und Dashboard-offline-Reports zeigen normale Ops-Schuld unter dem Cosplay
- Offenes Issue **#251** meldet Hof-Agenten im Feld häufig offline`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `cft0808/edict Repository`,
					summary: `OpenClaw-Multi-Agent-Hofprojekt. Etwa 16k Sterne, erstellt 2026-02-23 UTC, MIT, Python plus React-Kanban-Marketing.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 Plagiat oder fehlende Attribution`,
					summary: `wanikua behauptet, Kernkonzept und Agent-Design stammten aus ihrem früheren Hof-Tutorial. Timeline: Edict etwa 21h später. Als nicht-technisch geschlossen.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue 94 Follow-up Originalitätsklage`,
					summary: `Zweites geschlossenes Issue desselben Autors, eskaliert den Attributionsstreit.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `danghuangshang Originalitätsnotiz (Gegenrepo)`,
					summary: `Gegenpartei-Evidenz: geteiltes Ministerien-Mapping, Pinyin-Agent-IDs (bingbu/hubu/libu/gongbu/xingbu), CrewAI/MetaGPT/AutoGen-Vergleichsframing. Prosa mit 2025-Daten; GitHub created_at ist 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue 318 SSRF-Härten am generischen Webhook`,
					summary: `Security-Arbeit an Webhook-URL-Validierung (CWE-918) unter der Hof-UI.`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue 317 Webhook gegen interne Adressen härten`,
					summary: `Offene Härtungsanfrage für private und loopback Webhook-Ziele.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue 251 Hof-Agenten oft offline`,
					summary: `Field-Report: Drei-Departements- und Sechs-Ministerien-Agenten zeigen häufig offline.`,
				},
			},
		},
		it: {
			body: `Edict è catalogato come cosplay slop dell’ecosistema openclaw. La burocrazia imperiale è il packaging dell’orchestrazione multi-agent; la guerra pubblica di attribuzione contro un near-twin uscito prima sono le ricevute.

### Segnali duri
- Create time GitHub **2026-02-23 14:35 UTC** vs controparte **2026-02-22 17:17 UTC** (circa 21 ore dopo)
- Stesso stack di metafore: utente-imperatore, tre dipartimenti, sei ministeri, OpenClaw, install one-shot
- Issue pubbliche **#55** e **#94** documentano la disputa; il maintainer le ha chiuse come non tecniche
- Stelle molto sopra il twin precedente (circa 16k vs circa 2.7k all’ultimo check)
- Campo homepage punta a **openclaw.ai**, non a un sito first-party
- SSRF webhook e report di dashboard offline mostrano debito ops ordinario sotto il cosplay
- Issue aperta **#251**: gli agent di corte risultano spesso offline sul campo`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `Repository cft0808/edict`,
					summary: `Progetto corte multi-agent OpenClaw. Circa 16k stelle, creato 2026-02-23 UTC, MIT, Python più marketing dashboard React.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 plagio o attribuzione mancante`,
					summary: `wanikua sostiene che concetto e design agent vengano dal loro tutorial di corte precedente. Timeline: Edict ~21h dopo. Chiusa come non tecnica.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue 94 reclamo di originalità (follow-up)`,
					summary: `Seconda issue chiusa dello stesso autore che alza la disputa di attribuzione.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Avviso originality di danghuangshang (controparte)`,
					summary: `Catena di prove: mapping ministeri condiviso, ID agent pinyin (bingbu/hubu/libu/gongbu/xingbu), framing confronto CrewAI/MetaGPT/AutoGen. Date 2025 nel testo; created_at GitHub è 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue 318 hardening SSRF sul canale webhook generico`,
					summary: `Lavoro di sicurezza su validazione URL webhook (CWE-918) sotto la UI di corte.`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue 317 harden webhook contro indirizzi interni`,
					summary: `Richiesta aperta di hardening per target webhook privati e loopback.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue 251 agent di corte spesso offline`,
					summary: `Field report: gli agent dei tre dipartimenti e sei ministeri risultano spesso offline.`,
				},
			},
		},
		ja: {
			body: `Edict は openclaw 生態系の朝廷コスプレ・スロップとして収録されています。帝国官僚制はマルチエージェント編成の包装です。先に出た近い双生リポジトリとの公開の帰属争いは公開の領収書です。

### ハードシグナル
- GitHub 作成 **2026-02-23 14:35 UTC**、相手 **2026-02-22 17:17 UTC**（約 21 時間後）
- 同じメタファー：ユーザー＝皇帝、三省六部、OpenClaw、ワンショット install
- 公開 issue **#55** と **#94** が争いを記録；メンテナは非技術としてクローズ
- 最終確認時 star は先の双生を大きく上回る（約 16k vs 約 2.7k）
- リポジトリ homepage は **openclaw.ai** を指し、自前製品サイトではない
- Webhook SSRF とダッシュボードオフライン報告は、コスプレ下の普通の運用負債を示す
- 公開 issue **#251**：現場で朝廷 agent がしばしばオフライン`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `cft0808/edict リポジトリ`,
					summary: `OpenClaw マルチエージェント朝廷プロジェクト。約 1.6 万 star、作成 2026-02-23 UTC、MIT、Python と React 看板のマーケ。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 剽窃または帰属欠如の主張`,
					summary: `wanikua が中核概念と agent 設計は自らの先の朝廷チュートリアル由来と主張。タイムライン上 Edict は約 21 時間後。非技術としてクローズ。`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue 94 オリジナリティ苦情の続報`,
					summary: `同一作者による二通目のクローズ済み issue。帰属争いをエスカレート。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `danghuangshang の originality 通知（相手リポ）`,
					summary: `相手の証拠：共有の部制マッピング、拼音 agent ID（bingbu/hubu/libu/gongbu/xingbu）、CrewAI/MetaGPT/AutoGen 比較枠。文中は 2025 日付、GitHub created_at は 2026。`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue 318 汎用 webhook の SSRF 強化`,
					summary: `朝廷 UI 下の webhook URL 検証セキュリティ作業（CWE-918）。`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue 317 内網アドレス向け webhook 強化`,
					summary: `プライベート／loopback webhook ターゲット向けのオープンな強化要望。`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue 251 朝廷 agent がしばしばオフライン`,
					summary: `現場報告：三省六部の agent が頻繁にオフライン表示になる。`,
				},
			},
		},
		ko: {
			body: `Edict는 openclaw 생태계 궁정 코스프레 슬롭으로 수록됩니다. 제국 관료제는 멀티 에이전트 오케스트레이션의 포장입니다. 먼저 나온 가까운 쌍둥이 저장소와의 공개 출처 싸움이 공개 영수증입니다.

### 하드 시그널
- GitHub 생성 **2026-02-23 14:35 UTC** vs 상대 **2026-02-22 17:17 UTC**(약 21시간 뒤)
- 같은 은유 스택: 사용자=황제, 三省六部, OpenClaw, 원샷 설치
- 공개 이슈 **#55**, **#94**가 분쟁을 기록; 메인테이너가 비기술로 닫음
- 마지막 확인 시 스타가 앞선 쌍둥이를 크게 앞섬(약 16k vs 약 2.7k)
- 저장소 homepage가 **openclaw.ai**를 가리키고 자사 제품 사이트가 아님
- Webhook SSRF와 대시보드 오프라인 보고는 코스프레 아래 평범한 운영 부채를 보여 줌
- 공개 이슈 **#251**: 현장에서 궁정 에이전트가 자주 오프라인`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `cft0808/edict 저장소`,
					summary: `OpenClaw 멀티 에이전트 궁정 프로젝트. 약 1.6만 스타, 생성 2026-02-23 UTC, MIT, Python과 React 칸반 마케팅.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 표절 또는 출처 미표기 주장`,
					summary: `wanikua가 핵심 개념과 에이전트 설계가 자신들의 이전 궁정 튜토리얼에서 왔다고 주장. 타임라인상 Edict는 약 21시간 뒤. 비기술로 닫힘.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue 94 독창성 후속 항의`,
					summary: `같은 작성자의 두 번째 닫힌 이슈. 출처 분쟁 격화.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `danghuangshang originality 고지(상대 저장소)`,
					summary: `상대 증거: 공유 부제 매핑, 병음 에이전트 ID(bingbu/hubu/libu/gongbu/xingbu), CrewAI/MetaGPT/AutoGen 비교 프레임. 본문 날짜 2025; GitHub created_at은 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue 318 일반 webhook 채널 SSRF 강화`,
					summary: `궁정 UI 아래 webhook URL 검증 보안 작업(CWE-918).`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue 317 내부 주소 대상 webhook 강화`,
					summary: `사설·loopback webhook 대상에 대한 열린 강화 요청.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue 251 궁정 에이전트가 자주 오프라인`,
					summary: `현장 보고: 三省六部 에이전트가 칸반에서 자주 오프라인으로 표시됨.`,
				},
			},
		},
		es: {
			body: `Edict se cataloga como slop cosplay del ecosistema openclaw. La burocracia imperial es el packaging de la orquestación multi-agente; la guerra pública de atribución contra un casi gemelo que salió antes son los recibos.

### Señales duras
- Create de GitHub **2026-02-23 14:35 UTC** vs contraparte **2026-02-22 17:17 UTC** (unas 21 horas después)
- Misma pila de metáforas: usuario-emperador, tres departamentos, seis ministerios, OpenClaw, install de un tiro
- Issues públicas **#55** y **#94** documentan la disputa; el maintainer las cerró como no técnicas
- Estrellas muy por encima del gemelo anterior (unas 16k vs unas 2.7k en el último check)
- El campo homepage apunta a **openclaw.ai**, no a un sitio first-party
- SSRF de webhook y reportes de dashboard offline muestran deuda de ops ordinaria bajo el cosplay
- Issue abierta **#251**: los agentes de corte a menudo offline en el campo`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `Repositorio cft0808/edict`,
					summary: `Proyecto de corte multi-agente OpenClaw. Unas 16k estrellas, creado 2026-02-23 UTC, MIT, Python más marketing de kanban React.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 plagio o atribución faltante`,
					summary: `wanikua alega que el concepto y el diseño de agentes vienen de su tutorial de corte anterior. Timeline: Edict ~21h después. Cerrada como no técnica.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue 94 queja de originalidad (seguimiento)`,
					summary: `Segunda issue cerrada del mismo autor que escala la disputa de atribución.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Aviso de originality de danghuangshang (repo contrario)`,
					summary: `Cadena de evidencia: mapeo de ministerios compartido, IDs de agente pinyin (bingbu/hubu/libu/gongbu/xingbu), framing de comparación CrewAI/MetaGPT/AutoGen. Fechas 2025 en prosa; created_at de GitHub es 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue 318 endurecer SSRF en canal webhook genérico`,
					summary: `Trabajo de seguridad en validación de URL de webhook (CWE-918) bajo la UI de corte.`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue 317 endurecer webhook frente a direcciones internas`,
					summary: `Petición abierta de hardening para destinos webhook privados y loopback.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue 251 agentes de corte a menudo offline`,
					summary: `Field report: los agentes de tres departamentos y seis ministerios aparecen con frecuencia offline.`,
				},
			},
		},
	},
	danghuangshang: {
		zh: {
			body: `当皇上被收进这里，是 OpenClaw 生态里的教程 slop。王朝 cosplay 是产品表面；安装脆弱与双仓归属战是公开收据。

### 硬信号
- 创建于 **2026-02-22 17:17 UTC**，约早于 cft0808/edict **21 小时**
- 同一产品品类：朝廷隐喻、OpenClaw 网关、部名 agent、一键安装
- 仓内 **docs/originality.md** 与 Edict **#55 / #94** 构成公开抄袭争议（主张与否认，不是法庭判决）
- 用户 issue 指向 **过期 OpenClaw 样例**、**Docker 起不来**、**朝代配置放错**
- 有 Discord 指引，是因为多 bot 互刷是本包已知失败模式`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `wanikua/danghuangshang 仓库`,
					summary: `OpenClaw AI 朝廷教程。创建于 2026-02-22 17:17 UTC（约早于 Edict 21 小时）。约 2.7k 星。TypeScript 与配置包。站点 danghuangshang.com。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `仓内原创权利声明`,
					summary: `主张先发，并列出与 Edict 的十一项设计平行及匹配拼音 agent ID。散文写 2025 日期；GitHub API created_at 为 2026-02-22。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `wanikua 在 Edict 提交的 issue 55`,
					summary: `公开归属要求，含时间线与 Edict 创建日流量主张。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue 144 Docker 起不来、样例配置过期`,
					summary: `安装路径失败：样例配置与镜像内 OpenClaw 不一致。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue 131 Tang 目录装了 Ming 内阁配置`,
					summary: `模板打包错误：唐路径下放了错误朝代配置。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord 多 bot 安全文档`,
					summary: `文档警告 allowBots 为 true 时，多智能体 Discord 包会出现 bot 互刷风暴。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue 136 MIT 不是可以随便抄的通行证`,
					summary: `社区帖，链向归属战的更多公开评论。`,
				},
			},
		},
		de: {
			body: `Dang Huang Shang steht hier als openclaw-ecosystem Tutorial-Slop. Dynastie-Cosplay ist die Produktoberfläche. Install-Brüchigkeit und ein Twin-Repo-Attributionskrieg sind die öffentlichen Belege.

### Harte Signale
- Erstellt **2026-02-22 17:17 UTC**, etwa **21 Stunden** vor cft0808/edict
- Dieselbe Produktkategorie: Hof-Metaphern, OpenClaw-Gateway, ministeriell benannte Agenten, One-Shot-Install
- In-Repo **docs/originality.md** plus Edict **#55 / #94** bilden einen öffentlichen Plagiatsstreit (Claims und Dementis, kein Gerichtsurteil)
- User-Issues zu **veralteten OpenClaw-Samples**, **Docker-Boot-Failure** und **falschen Regime-Configs**
- Discord-Guidance existiert, weil Multi-Bot-Loops ein bekanntes Failure-Mode des Packs sind`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `wanikua/danghuangshang Repository`,
					summary: `OpenClaw-KI-Hof-Tutorial. Erstellt 2026-02-22 17:17 UTC (etwa 21h vor Edict). Etwa 2.7k Sterne. TypeScript und Config-Pack. Site danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Originalitäts-/Rechtehinweis im Repo`,
					summary: `Beansprucht First-Mover und listet elf Design-Parallelen zu Edict plus passende Pinyin-Agent-IDs. Prosa mit 2025-Daten; GitHub-API created_at ist 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Edict-Issue 55 von wanikua`,
					summary: `Öffentliche Attributionsforderung mit Timeline und Traffic-Claims zum Edict-Create-Tag.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue 144 Docker startet nicht, Sample-Config veraltet`,
					summary: `Install-Pfad scheitert: Sample-Config passt nicht zu OpenClaw im Image.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue 131 Tang-Ordner enthält Ming-Kabinetts-Config`,
					summary: `Template-Packaging-Fehler: falsches Regime unter dem Tang-Pfad.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord Multi-Bot-Safety-Doku`,
					summary: `Docs warnen: allowBots true verursacht Bot-zu-Bot-Stürme in Multi-Agent-Discord-Packs.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue 136 MIT ist kein Freifahrtschein zum Kopieren`,
					summary: `Community-Post mit weiterem öffentlichen Kommentar zum Attributionsstreit.`,
				},
			},
		},
		it: {
			body: `Dang Huang Shang è catalogato come tutorial slop dell’ecosistema openclaw. Il cosplay dinastico è la superficie di prodotto. Fragilità di install e una guerra di attribuzione tra repo gemelli sono le ricevute pubbliche.

### Segnali duri
- Creato **2026-02-22 17:17 UTC**, circa **21 ore** prima di cft0808/edict
- Stessa categoria di prodotto: metafore di corte, gateway OpenClaw, agent con nomi di ministeri, install one-shot
- **docs/originality.md** in-repo più Edict **#55 / #94** formano una disputa pubblica di plagio (claims e smentite, non una sentenza)
- Issue utente su **sample OpenClaw stantie**, **Docker che non boot**, **config di regime sbagliate**
- Esiste guida Discord perché i loop multi-bot sono un failure mode noto del pack`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `Repository wanikua/danghuangshang`,
					summary: `Tutorial corte AI OpenClaw. Creato 2026-02-22 17:17 UTC (circa 21h prima di Edict). Circa 2.7k stelle. TypeScript e config pack. Sito danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Avviso diritti/originality in-repo`,
					summary: `Rivendica first-mover e elenca undici paralleli di design con Edict più ID agent pinyin. Date 2025 in prosa; created_at API GitHub è 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 di Edict aperta da wanikua`,
					summary: `Richiesta pubblica di attribuzione con timeline e claim di traffico sul giorno di create di Edict.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue 144 Docker non parte, sample config stantia`,
					summary: `Install path fallisce: sample config non combacia con OpenClaw nell’immagine.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue 131 cartella Tang con config gabinetto Ming`,
					summary: `Errore di packaging template: regime sbagliato sotto il path Tang.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Documentazione safety multi-bot Discord`,
					summary: `I docs avvertono che allowBots true causa tempeste bot-to-bot nei pack Discord multi-agent.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue 136 MIT non è un lasciapassare per copiare`,
					summary: `Post community con altro commento pubblico sulla disputa di attribuzione.`,
				},
			},
		},
		ja: {
			body: `当皇上は openclaw 生態系のチュートリアル・スロップとして収録されています。王朝コスプレが製品の表面です。壊れやすいインストールと双リポジトリの帰属戦争が公開の領収書です。

### ハードシグナル
- 作成 **2026-02-22 17:17 UTC**、cft0808/edict より約 **21 時間**早い
- 同じ製品カテゴリ：朝廷メタファー、OpenClaw ゲートウェイ、部名 agent、ワンショット install
- リポ内 **docs/originality.md** と Edict **#55 / #94** が公開の剽窃争いを形成（主張と否定であり、判決ではない）
- ユーザー issue は **古い OpenClaw サンプル**、**Docker 起動失敗**、**王朝設定の取り違え**
- Discord ガイドがあるのは、マルチ bot ループが本パックの既知の失敗モードだから`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `wanikua/danghuangshang リポジトリ`,
					summary: `OpenClaw AI 朝廷チュートリアル。作成 2026-02-22 17:17 UTC（Edict より約 21 時間前）。約 2.7k star。TypeScript と設定パック。サイト danghuangshang.com。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `リポジトリ内 originality 権利通知`,
					summary: `先発を主張し、Edict との 11 の設計並行と拼音 agent ID を列挙。本文は 2025 日付、GitHub API created_at は 2026-02-22。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `wanikua が Edict に出した issue 55`,
					summary: `公開の帰属要求。タイムラインと Edict 作成日のトラフィック主張。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue 144 Docker 起動不可・サンプル設定が古い`,
					summary: `インストール失敗：サンプル設定がイメージ内 OpenClaw と一致しない。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue 131 Tang フォルダに Ming 内閣設定`,
					summary: `テンプレ梱包ミス：Tang パスに誤った王朝設定。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord マルチ bot 安全ドキュメント`,
					summary: `allowBots true でマルチ agent Discord パックが bot 同士の嵐になる、と警告。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue 136 MIT はコピーし放題の免罪符ではない`,
					summary: `帰属争いについての追加公開コメントへのコミュニティ投稿。`,
				},
			},
		},
		ko: {
			body: `당황상은 openclaw 생태계 튜토리얼 슬롭으로 수록됩니다. 왕조 코스프레가 제품 표면입니다. 취약한 설치와 쌍둥이 저장소 출처 전쟁이 공개 영수증입니다.

### 하드 시그널
- 생성 **2026-02-22 17:17 UTC**, cft0808/edict보다 약 **21시간** 앞
- 같은 제품 범주: 궁정 은유, OpenClaw 게이트웨이, 부 이름 에이전트, 원샷 설치
- 저장소 **docs/originality.md**와 Edict **#55 / #94**가 공개 표절 분쟁을 이룸(주장과 부인이지 판결 아님)
- 사용자 이슈: **낡은 OpenClaw 샘플**, **Docker 부팅 실패**, **왕조 설정 오배치**
- Discord 안내가 있는 이유: 멀티 봇 루프가 이 팩의 알려진 실패 모드이기 때문`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `wanikua/danghuangshang 저장소`,
					summary: `OpenClaw AI 궁정 튜토리얼. 생성 2026-02-22 17:17 UTC(Edict보다 약 21시간 앞). 약 2.7k 스타. TypeScript와 설정 팩. 사이트 danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `저장소 내 originality 권리 고지`,
					summary: `선발을 주장하고 Edict와 11가지 설계 평행 및 병음 에이전트 ID를 나열. 본문 날짜 2025; GitHub API created_at은 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `wanikua가 Edict에 올린 issue 55`,
					summary: `공개 출처 요구. 타임라인과 Edict 생성일 트래픽 주장.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue 144 Docker 기동 실패·샘플 설정 낡음`,
					summary: `설치 경로 실패: 샘플 설정이 이미지 속 OpenClaw와 안 맞음.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue 131 Tang 폴더에 Ming 내각 설정`,
					summary: `템플릿 패키징 오류: Tang 경로에 잘못된 왕조 설정.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord 멀티 봇 안전 문서`,
					summary: `allowBots true면 멀티 에이전트 Discord 팩에서 봇 간 폭풍이 난다고 경고.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue 136 MIT는 마음대로 베껴도 되는 면죄부가 아니다`,
					summary: `출처 싸움에 대한 추가 공개 논평을 잇는 커뮤니티 글.`,
				},
			},
		},
		es: {
			body: `Dang Huang Shang se cataloga como slop de tutorial del ecosistema openclaw. El cosplay dinástico es la superficie del producto. Fragilidad de install y una guerra de atribución entre repos gemelos son los recibos públicos.

### Señales duras
- Creado **2026-02-22 17:17 UTC**, unas **21 horas** antes que cft0808/edict
- Misma categoría de producto: metáforas de corte, gateway OpenClaw, agentes con nombres de ministerios, install de un tiro
- **docs/originality.md** en el repo más Edict **#55 / #94** forman una disputa pública de plagio (claims y negaciones, no un fallo judicial)
- Issues de usuarios sobre **samples OpenClaw caducados**, **Docker que no arranca** y **configs de régimen equivocadas**
- Hay guía de Discord porque los bucles multi-bot son un modo de fallo conocido del pack`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `Repositorio wanikua/danghuangshang`,
					summary: `Tutorial de corte AI OpenClaw. Creado 2026-02-22 17:17 UTC (unas 21h antes que Edict). Unas 2.7k estrellas. TypeScript y paquete de config. Sitio danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Aviso de derechos/originality en el repo`,
					summary: `Reclama first-mover y lista once paralelos de diseño con Edict más IDs de agente pinyin. Fechas 2025 en prosa; created_at de la API de GitHub es 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue 55 de Edict abierta por wanikua`,
					summary: `Exigencia pública de atribución con timeline y claims de tráfico el día de create de Edict.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue 144 Docker no arranca, sample config caducada`,
					summary: `La ruta de install falla: el sample no coincide con OpenClaw en la imagen.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue 131 carpeta Tang con config de gabinete Ming`,
					summary: `Error de empaquetado de plantilla: régimen equivocado bajo la ruta Tang.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Documentación de seguridad multi-bot Discord`,
					summary: `Los docs advierten que allowBots true provoca tormentas bot-a-bot en packs Discord multi-agente.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue 136 MIT no es un pase libre para copiar`,
					summary: `Post de la comunidad con más comentario público sobre la pelea de atribución.`,
				},
			},
		},
	},
};
