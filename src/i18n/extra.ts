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
- 网页前端脚本里带着能读写整库的密钥，打开页面就能抄走
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
			body: `看板上六个部的名字都在，点进去却常常连不上。用户还说跑起来特别慢，状态也走不动。差不多同时，当皇上又说对方抄了、没写来处。

### 硬信号
- 创建 **2026-02-23 14:35 UTC**；当皇上 **2026-02-22 17:17 UTC**（大约晚二十一个小时）
- 三省六部、OpenClaw、一键安装
- **#55**、**#94** 谈署名；按非技术讨论关闭
- 星大约 **一万六**，对家大约 **两千七**
- 主页指着 **openclaw.ai**
- **#251** 不在线、慢、状态卡住；webhook **#317**、**#318**`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `GitHub 仓库 cft0808/edict`,
					summary: `三省六部包装的 OpenClaw 多智能体。大约一万六星，2026-02-23 UTC 创建，MIT。Python 为主，宣传常带 React 看板。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue #55：被指抄袭、未署名`,
					summary: `「当皇上」作者 wanikua 称核心设定和 agent 设计来自自己更早的教程。时间线显示 Edict 大约晚了二十一个小时。工单被标成非技术讨论后关闭。`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue #94：署名争议的跟进`,
					summary: `同一作者的第二张工单，继续升级署名争议，同样已经关闭。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `对方仓库里的原创声明`,
					summary: `「当皇上」列出与 Edict 相似的部制划分、拼音 agent 名（例如 bingbu），以及相近的竞品对比写法。文中日期写成 2025 年；GitHub 上的创建时间是 2026 年。`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue #318：给通用 webhook 做 SSRF 加固`,
					summary: `朝廷界面里，webhook 地址校验相关的安全修改（CWE-918）。`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue #317：别让 webhook 打进内网`,
					summary: `希望禁止 webhook 指向内网地址或本机回环。`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue #251：三省六部经常不在线`,
					summary: `标题「经常三省六部不在线」。楼主：经常不在线，执行特别慢，状态不能正常流转。`,
				},
			},
		},
		de: {
			body: `#251 ist knallhart: Ministerien oft offline. Erster Post: oft offline, sehr langsam, Status hängt. Gleiche Woche 当皇上; #55/#94 Copy-Streit.

### Harte Signale
- Create **2026-02-23 14:35 UTC** vs 当皇上 **2026-02-22 17:17 UTC** (~21h später)
- Ministerien + OpenClaw + One-Shot-Install
- **#55** / **#94** Credit; als nicht-technisch geschlossen
- Sterne ~**16k** vs ~**2.7k**
- Homepage → **openclaw.ai**
- **#251** offline/langsam/hängt; webhook **#317** / **#318**`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `GitHub-Repo cft0808/edict`,
					summary: `OpenClaw-Multi-Agent-Projekt im Hof-Kostüm. Etwa 16.000 Sterne, erstellt am 2026-02-23 UTC, MIT. Vor allem Python, oft mit React-Kanban im Pitch.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue #55: Plagiat und fehlende Attribution`,
					summary: `wanikua (Dang Huang Shang) sagt, Konzept und Agent-Design stammten aus dem früheren Tutorial. Timeline: Edict etwa 21 Stunden später. Als nicht-technisch geschlossen.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue #94: Follow-up zum Namensstreit`,
					summary: `Zweites Ticket desselben Autors; weiter eskaliert, ebenfalls geschlossen.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Originalitätsnotiz im Gegen-Repo`,
					summary: `Listet ähnliche Ministerien-Maps, Pinyin-Agent-Namen (z. B. bingbu) und denselben Vergleichs-Pitch. Im Text steht 2025; GitHub-Create ist 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue #318: SSRF-Härten am Webhook`,
					summary: `Sicherheitsarbeit an der Webhook-URL-Prüfung in der Hof-UI (CWE-918).`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue #317: Webhook nicht ins Intranet`,
					summary: `Bitte, private und Loopback-Ziele zu sperren.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue #251: Ministerien oft offline`,
					summary: `Nutzer: Agents im Kanban stehen oft auf offline.`,
				},
			},
		},
		it: {
			body: `#251 è diretto: ministeri spesso offline. Primo post: offline spesso, lentissimo, stato bloccato. Stessa settimana 当皇上; #55/#94 lite copia.

### Segnali duri
- Create **2026-02-23 14:35 UTC** vs 当皇上 **2026-02-22 17:17 UTC** (~21h dopo)
- Ministeri + OpenClaw + install one-shot
- **#55** / **#94** credito; chiuse come non tecniche
- Stelle ~**16k** vs ~**2.7k**
- Homepage → **openclaw.ai**
- **#251** offline/lento/bloccato; webhook **#317** / **#318**`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `Repo GitHub cft0808/edict`,
					summary: `Progetto multi-agent OpenClaw in costume di corte. Circa 16 mila stelle, creato il 2026-02-23 UTC, MIT. Soprattutto Python, spesso con kanban React nel pitch.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue #55: plagio e attribuzione mancante`,
					summary: `wanikua (Dang Huang Shang) dice che concetto e design agent vengono dal tutorial precedente. Timeline: Edict circa 21 ore dopo. Chiusa come non tecnica.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue #94: seguito sul nome`,
					summary: `Seconda issue dello stesso autore; disputa alzata e chiusa di nuovo.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Nota di originalità nel repo opposto`,
					summary: `Elenca mappe di ministeri simili, nomi agent pinyin (es. bingbu) e lo stesso pitch di confronto. Nel testo compare il 2025; la create GitHub è 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue #318: hardening SSRF sul webhook`,
					summary: `Lavoro di sicurezza sulla validazione URL del webhook nella UI di corte (CWE-918).`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue #317: niente webhook verso la rete interna`,
					summary: `Richiesta di bloccare destinazioni private e loopback.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue #251: ministeri spesso offline`,
					summary: `Utenti: gli agent sulla kanban risultano spesso offline.`,
				},
			},
		},
		ja: {
			body: `#251 タイトルそのもの：经常三省六部不在线。本文：よくオフライン、とても遅い、状態が回らない。同週 当皇上。#55/#94 でコピー争い。

### ハードシグナル
- 作成 **2026-02-23 14:35 UTC**；当皇上 **2026-02-22 17:17 UTC**（約 21 時間後）
- 三省六部 + OpenClaw + ワンショット install
- **#55** / **#94** クレジット；非技術クローズ
- star 約 **1.6 万** vs 約 **2.7k**
- homepage → **openclaw.ai**
- **#251** オフライン/遅い/固まる；webhook **#317** / **#318**`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `GitHub リポジトリ cft0808/edict`,
					summary: `三省六部の設定で包んだ OpenClaw マルチエージェント。star 約 1.6 万、2026-02-23 UTC 作成、MIT。Python 中心で、宣伝に React 看板がよく出る。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue #55：剽窃・帰属の主張`,
					summary: `「当皇上」の wanikua が、中核設定と agent 設計は自分の先のチュートリアル由来だと主張。タイムライン上 Edict は約 21 時間後。非技術としてクローズ。`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue #94：帰属争いの続報`,
					summary: `同一作者の二通目。争いを続け、同様にクローズ。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `相手リポの originality 文書`,
					summary: `似た部制マップ、拼音 agent 名（例：bingbu）、同種の比較宣伝を列挙。本文の年は 2025、GitHub 作成は 2026。`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue #318：webhook の SSRF 対策`,
					summary: `朝廷 UI 上の webhook URL 検証まわりの安全改修（CWE-918）。`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue #317：内網向け webhook を止めたい`,
					summary: `プライベートや loopback 宛を禁じたいという要望。`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue #251：三省六部がよくオフライン`,
					summary: `看板上で各「部」の agent が頻繁にオフラインになる、という報告。`,
				},
			},
		},
		ko: {
			body: `#251 제목 그대로: 经常三省六部不在线. 본문: 자주 오프라인, 매우 느림, 상태 안 돌아감. 같은 주 당황상. #55/#94 베끼기 싸움.

### 하드 시그널
- 생성 **2026-02-23 14:35 UTC**; 당황상 **2026-02-22 17:17 UTC**(약 21시간 뒤)
- 육부 + OpenClaw + 원샷 설치
- **#55** / **#94** 출처; 비기술로 닫힘
- 스타 약 **1.6만** vs 약 **2.7k**
- homepage → **openclaw.ai**
- **#251** 오프라인/느림/멈춤; webhook **#317** / **#318**`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `GitHub 저장소 cft0808/edict`,
					summary: `三省六部 설정으로 포장한 OpenClaw 멀티 에이전트. 스타 약 1만 6천, 2026-02-23 UTC 생성, MIT. Python 중심, 홍보에 React 칸반이 자주 등장.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue #55: 표절·출처 미표기 주장`,
					summary: `「당황상」 쪽 wanikua가 핵심 설정과 에이전트 설계가 자신들의 이전 튜토리얼에서 왔다고 주장. 타임라인상 Edict는 약 21시간 뒤. 비기술로 닫힘.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue #94: 출처 분쟁 후속`,
					summary: `같은 작성자의 두 번째 이슈. 분쟁을 이어 가고 다시 닫힘.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `상대 저장소 originality 문서`,
					summary: `비슷한 부제 맵, 병음 에이전트 이름(예: bingbu), 같은 식의 비교 홍보를 나열. 본문 연도는 2025, GitHub 생성은 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue #318: webhook SSRF 보강`,
					summary: `궁정 UI의 webhook URL 검증 관련 보안 수정(CWE-918).`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue #317: 내부망으로 가는 webhook 제한`,
					summary: `사설·loopback 대상을 막고 싶다는 요청.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue #251: 육부가 자주 오프라인`,
					summary: `칸반에서 각 「부」 에이전트가 자주 오프라인으로 보인다는 현장 보고.`,
				},
			},
		},
		es: {
			body: `#251 va al grano: ministerios a menudo offline. Primer post: offline mucho, muy lento, estado atascado. Misma semana 当皇上; #55/#94 pelea de copia.

### Señales duras
- Create **2026-02-23 14:35 UTC** vs 当皇上 **2026-02-22 17:17 UTC** (~21h después)
- Ministerios + OpenClaw + install de un tiro
- **#55** / **#94** crédito; cerradas como no técnicas
- Estrellas ~**16k** vs ~**2.7k**
- Homepage → **openclaw.ai**
- **#251** offline/lento/atascado; webhook **#317** / **#318**`,
			references: {
				'https://github.com/cft0808/edict': {
					title: `Repo de GitHub cft0808/edict`,
					summary: `Multi-agente OpenClaw con disfraz de corte. Unas 16 mil estrellas, creado el 2026-02-23 UTC, MIT. Sobre todo Python; el pitch suele llevar kanban React.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Issue #55: plagio y falta de atribución`,
					summary: `wanikua (Dang Huang Shang) dice que el concepto y el diseño de agentes vienen de su tutorial anterior. Timeline: Edict unas 21 horas después. Cerrada como no técnica.`,
				},
				'https://github.com/cft0808/edict/issues/94': {
					title: `Issue #94: seguimiento del nombre`,
					summary: `Segunda issue del mismo autor; la disputa sube y también se cierra.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Aviso de originality en el repo contrario`,
					summary: `Lista mapas de ministerios parecidos, nombres de agente pinyin (p. ej. bingbu) y el mismo pitch de comparación. En el texto aparece 2025; el create de GitHub es 2026.`,
				},
				'https://github.com/cft0808/edict/issues/318': {
					title: `Issue #318: endurecer SSRF en el webhook`,
					summary: `Trabajo de seguridad en la validación de URL del webhook en la UI de corte (CWE-918).`,
				},
				'https://github.com/cft0808/edict/issues/317': {
					title: `Issue #317: que el webhook no entre a la red interna`,
					summary: `Piden bloquear destinos privados y loopback.`,
				},
				'https://github.com/cft0808/edict/issues/251': {
					title: `Issue #251: ministerios a menudo offline`,
					summary: `Usuarios: los agentes del kanban salen offline con frecuencia.`,
				},
			},
		},
	},
	danghuangshang: {
		zh: {
			body: `「当皇上」卖的是快登基。装机帖里更常见的，是 Docker 起不来、示例配置过旧，以及和 Edict 为署名公开吵架。

### 硬信号
- 创建 **2026-02-22 17:17 UTC**，大约比 Edict 早 **二十一个小时**
- OpenClaw 朝廷包，一键安装
- **docs/originality.md**，以及 Edict 上的 **#55**、**#94**
- **#144** Docker 起不来；**#131** 朝代文件放错
- Discord 多 bot 互刷的说明`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `GitHub 仓库 wanikua/danghuangshang`,
					summary: `OpenClaw 朝廷教程与配置。2026-02-22 17:17 UTC 创建（大约比 Edict 早二十一个小时）。大约两千七星。TypeScript 加配置包。站点 danghuangshang.com。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `仓库里的原创声明`,
					summary: `自称先做，并列出与 Edict 的多处设计相似，以及拼音 agent 名。文中年份写成 2025；GitHub 记录是 2026-02-22。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `在 Edict 上开的 #55`,
					summary: `公开要求署名，附上时间线，以及对 Edict 创建日流量的说法。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue #144：Docker 起不来，样例过期`,
					summary: `标题「docker 完全无法启动」。sample 老旧，对不上镜像里的 openclaw。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue #131：唐目录里放了明配置`,
					summary: `模板打包出错，朝代路径和内容对不上。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord 多 bot 安全说明`,
					summary: `文档写明：打开 allowBots 时，多个 bot 可能互相刷屏。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue #136：MIT 不是抄袭通行证`,
					summary: `社区讨论署名争议，并链到更多公开评论。`,
				},
			},
		},
		de: {
			body: `#144 Titel: docker startet überhaupt nicht. Sample zu alt für OpenClaw im Image. Gleiche Woche Edict; #55 Credit-Streit.

### Harte Signale
- Create **2026-02-22 17:17 UTC**, ~**21h** vor Edict
- OpenClaw-Hof-Pack, One-Shot-Install
- **docs/originality.md** + Edict **#55** / **#94**
- **#144** Docker; **#131** falsche Dynastie-Datei
- Discord Multi-Bot-Doku`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `GitHub-Repo wanikua/danghuangshang`,
					summary: `OpenClaw-Hof-Tutorial und Config. Erstellt 2026-02-22 17:17 UTC (etwa 21 Stunden vor Edict). Etwa 2.700 Sterne. TypeScript plus Config. Site danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Originalitätsnotiz im Repo`,
					summary: `Beansprucht First-Mover und listet Ähnlichkeiten zu Edict sowie Pinyin-Agent-Namen. Im Text steht 2025; GitHub sagt 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `#55 auf Edict`,
					summary: `Öffentliche Attributionsforderung mit Timeline und Traffic-Claims zum Create-Tag.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue #144: Docker startet nicht`,
					summary: `Install scheitert: Sample-Config passt nicht zu OpenClaw im Image.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue #131: Tang-Ordner mit Ming-Config`,
					summary: `Packaging-Fehler: falsche Dynastie-Datei unter dem Tang-Pfad.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord Multi-Bot-Hinweis`,
					summary: `Docs: allowBots an → Bot-zu-Bot-Stürme möglich.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue #136: MIT ist kein Freifahrtschein`,
					summary: `Community-Diskussion zur Attribution mit weiteren Links.`,
				},
			},
		},
		it: {
			body: `#144 titolo: docker non parte proprio. Sample troppo vecchio per OpenClaw nell’immagine. Stessa settimana Edict; #55 lite credito.

### Segnali duri
- Create **2026-02-22 17:17 UTC**, ~**21h** prima di Edict
- Pack corte OpenClaw, install one-shot
- **docs/originality.md** + Edict **#55** / **#94**
- **#144** Docker; **#131** file dinastia sbagliato
- Docs multi-bot Discord`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `Repo GitHub wanikua/danghuangshang`,
					summary: `Tutorial e config OpenClaw da corte. Creato 2026-02-22 17:17 UTC (circa 21 ore prima di Edict). Circa 2,7 mila stelle. TypeScript più config. Sito danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Nota di originalità nel repo`,
					summary: `Rivendica first-mover e elenca somiglianze con Edict e nomi agent pinyin. Nel testo c’è il 2025; GitHub dice 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `#55 su Edict`,
					summary: `Richiesta pubblica di attribuzione con timeline e claim di traffico.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue #144: Docker non parte`,
					summary: `Install fallisce: il sample non combacia con OpenClaw nell’immagine.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue #131: cartella Tang con config Ming`,
					summary: `Errore di packaging: dinastia sbagliata sotto il path Tang.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Avviso multi-bot Discord`,
					summary: `Docs: allowBots on → possibili tempeste bot-to-bot.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue #136: MIT non è un lasciapassare`,
					summary: `Discussione community sull’attribuzione con altri link.`,
				},
			},
		},
		ja: {
			body: `#144 タイトル：docker 完全无法启动。sample が古くイメージ内 OpenClaw と合わない。同週 Edict。#55 クレジット争い。

### ハードシグナル
- 作成 **2026-02-22 17:17 UTC**、Edict より約 **21 時間**前
- OpenClaw 朝廷パック、ワンショット install
- **docs/originality.md** + Edict **#55** / **#94**
- **#144** Docker；**#131** 王朝ファイル誤り
- Discord マルチ bot ドキュメント`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `GitHub リポジトリ wanikua/danghuangshang`,
					summary: `OpenClaw 朝廷チュートリアルと設定。2026-02-22 17:17 UTC 作成（Edict より約 21 時間前）。star 約 2.7k。TypeScript と設定パック。サイト danghuangshang.com。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `リポジトリ内の originality 文書`,
					summary: `先発を主張し、Edict との類似と拼音 agent 名を列挙。本文の年は 2025、GitHub は 2026-02-22。`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Edict 上の #55`,
					summary: `公開の帰属要求。タイムラインと作成日トラフィックの主張。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue #144：Docker が上がらない`,
					summary: `インストール失敗。サンプル設定がイメージ内 OpenClaw と合わない。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue #131：唐フォルダに明の設定`,
					summary: `梱包ミス。王朝パスと中身が食い違う。`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord マルチ bot 注意`,
					summary: `ドキュメント：allowBots を付けると bot 同士の嵐になり得る。`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue #136：MIT はコピーし放題ではない`,
					summary: `帰属争いについてのコミュニティ議論と追加リンク。`,
				},
			},
		},
		ko: {
			body: `#144 제목: docker 完全无法启动. 샘플이 낡아 이미지 OpenClaw와 안 맞음. 같은 주 Edict. #55 출처 싸움.

### 하드 시그널
- 생성 **2026-02-22 17:17 UTC**, Edict보다 약 **21시간** 앞
- OpenClaw 궁정 팩, 원샷 설치
- **docs/originality.md** + Edict **#55** / **#94**
- **#144** Docker; **#131** 왕조 파일 오류
- Discord 멀티 봇 문서`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `GitHub 저장소 wanikua/danghuangshang`,
					summary: `OpenClaw 궁정 튜토리얼·설정. 2026-02-22 17:17 UTC 생성(Edict보다 약 21시간 앞). 스타 약 2.7k. TypeScript + 설정. 사이트 danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `저장소 originality 문서`,
					summary: `선발을 주장하고 Edict와의 유사점·병음 에이전트 이름을 나열. 본문 연도 2025, GitHub는 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `Edict의 #55`,
					summary: `공개 출처 요구. 타임라인과 생성일 트래픽 주장.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue #144: Docker 안 뜸`,
					summary: `설치 실패. 샘플 설정이 이미지 속 OpenClaw와 안 맞음.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue #131: Tang 폴더에 Ming 설정`,
					summary: `패키징 실수. 왕조 경로와 내용이 어긋남.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Discord 멀티 봇 주의`,
					summary: `문서: allowBots를 켜면 봇 간 폭풍이 날 수 있음.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue #136: MIT는 베끼기 면죄부가 아님`,
					summary: `출처 분쟁에 대한 커뮤니티 논의와 추가 링크.`,
				},
			},
		},
		es: {
			body: `#144 título: docker no arranca en absoluto. Sample demasiado viejo para OpenClaw en la imagen. Misma semana Edict; #55 pelea de crédito.

### Señales duras
- Create **2026-02-22 17:17 UTC**, ~**21h** antes que Edict
- Pack de corte OpenClaw, install de un tiro
- **docs/originality.md** + Edict **#55** / **#94**
- **#144** Docker; **#131** archivo de dinastía equivocado
- Docs multi-bot Discord`,
			references: {
				'https://github.com/wanikua/danghuangshang': {
					title: `Repo de GitHub wanikua/danghuangshang`,
					summary: `Tutorial y config OpenClaw de corte. Creado 2026-02-22 17:17 UTC (unas 21 horas antes que Edict). Unas 2,7 mil estrellas. TypeScript más config. Sitio danghuangshang.com.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/originality.md': {
					title: `Aviso de originality en el repo`,
					summary: `Reclama first-mover y lista parecidos con Edict e IDs pinyin. En el texto aparece 2025; GitHub dice 2026-02-22.`,
				},
				'https://github.com/cft0808/edict/issues/55': {
					title: `#55 en Edict`,
					summary: `Exigencia pública de atribución con timeline y claims de tráfico.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/144': {
					title: `Issue #144: Docker no arranca`,
					summary: `Install falla: el sample no cuadra con OpenClaw en la imagen.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/131': {
					title: `Issue #131: carpeta Tang con config Ming`,
					summary: `Error de empaquetado: dinastía equivocada en la ruta.`,
				},
				'https://github.com/wanikua/danghuangshang/blob/main/docs/discord-safety.md': {
					title: `Aviso multi-bot de Discord`,
					summary: `Docs: allowBots on → posibles tormentas bot-a-bot.`,
				},
				'https://github.com/wanikua/danghuangshang/issues/136': {
					title: `Issue #136: MIT no es un pase libre`,
					summary: `Discusión comunitaria sobre atribución con más enlaces.`,
				},
			},
		},
	},
};
