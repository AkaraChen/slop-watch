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
			body: `OpenClaw 是本目录里最清晰的 **垃圾标本**：它一边要你的 shell 和凭据，一边连自己的 issue 队列都抽不干，升级也稳不住。星标是人设，可靠性是可选 DLC。

### 硬信号
- issue 积压以千计，营销仍在狂推安装漏斗
- 安全史含一键 RCE 与恶意 skill 分发路径
- 现场反馈：静默失败与「假完成」任务结果`,
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
			body: `OpenClaw ist das klarste **Müll-Exemplar** im Katalog: Ein Agent, der Shell und Credentials will, aber die eigene Issue-Queue nicht leert und Installs über Upgrades nicht stabil hält. Sterne als Persönlichkeit; Zuverlässigkeit als optionale DLC.

### Harte Signale
- Issue-Rückstand in Tausenden, während Marketing weiter Install-Funnels fährt
- Sicherheitsgeschichte mit One-Click-RCE und feindlichen Skills
- Feldberichte: stille Fehler und „falsch fertig“-Tasks`,
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
			body: `OpenClaw è il **campione di spazzatura** più chiaro del catalogo: un agent che chiede shell e credenziali mentre non svuota la propria coda di issue e non tiene stabili gli install tra upgrade. Le stelle come personalità; l’affidabilità come DLC opzionale.

### Segnali duri
- Backlog di issue a migliaia mentre il marketing spinge ancora i funnel di install
- Storia di sicurezza con RCE one-click e skill ostili
- Report sul campo: fallimenti silenziosi e task “falsamente completi”`,
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
			body: `OpenClaw はカタログでいちばんわかりやすい **ゴミ標本**：シェルと資格情報を要求するのに、自分の issue キューすら捌けず、アップグレードでインストールが壊れ続ける。スター数はキャラ設定、信頼性は有料 DLC 扱い。

### ハードシグナル
- issue が数千単位で積もる一方、マーケはまだインストール導線を量産
- ワンクリック RCE や敵対的 skill 配信を含むセキュリティ履歴
- 現場報告：黙って失敗、「完了したフリ」のタスク結果`,
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
			body: `OpenClaw는 카탈로그에서 가장 선명한 **쓰레기 표본**이다. 셸과 자격 증명을 요구하면서도 자기 issue 큐를 비우지 못하고 업그레이드마다 설치가 흔들린다. 스타 수는 캐릭터 설정, 신뢰성은 선택형 DLC.

### 하드 시그널
- issue가 수천 단위로 쌓이는데 마케팅은 여전히 설치 퍼널을 판다
- 원클릭 RCE와 적대적 skill 배포가 포함된 보안 이력
- 현장 보고: 조용한 실패, “완료된 척” 하는 태스크 결과`,
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
			body: `OpenClaw es el **espécimen de basura** más claro del catálogo: un agente que pide shell y credenciales mientras no drena su propia cola de issues ni mantiene estables las instalaciones entre upgrades. Las estrellas son personalidad; la fiabilidad, un DLC opcional.

### Señales duras
- Backlog de issues por miles mientras el marketing sigue empujando embudos de install
- Historial de seguridad con RCE de un clic y skills hostiles
- Reportes de campo: fallos silenciosos y tareas “falsamente completas”`,
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
			body: `Moltbook 被归档为 **事故型 slop**：vibe 速度上线的 agent 社交层，在「agent 文明」话术站稳之前，鉴权与数据面就在公开场合翻车。agent 有广场；每个会 curl 的研究员也有。

### 硬信号
- 生产 agent 记录的未认证 / 过度特权数据库访问
- 客户端内嵌后端密钥（经典 ship-without-RLS）
- 运营把代码所有权甩给模型的响应路径`,
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
			body: `Moltbook ist **Vorfall-Slop**: eine vibe-geschippte Agent-Social-Schicht, deren Auth- und Datenebene öffentlich scheiterte, bevor „Agentenzivilisation“ ernst genommen werden konnte. Die Agents hatten einen Marktplatz. Jeder mit curl auch.

### Harte Signale
- Unauthentifizierter / überprivilegierter DB-Zugriff auf Produktions-Agent-Records
- Client-eingebetteter Backend-Key (Klassiker ship-without-RLS)
- Operator-Antwort, die Code-Ownership an das Modell abschiebt`,
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
			body: `Moltbook è catalogato come **slop da incidente**: layer social per agent spedito a vibes, la cui auth e data plane sono fallite in pubblico prima che la “civiltà degli agent” potesse essere presa sul serio. Gli agent avevano una piazza. Ogni ricercatore con curl pure.

### Segnali duri
- Accesso DB non autenticato / over-privileged ai record agent in produzione
- Chiave backend nel client (classico ship-without-RLS)
- Risposta operativa che scarica la ownership del codice sul modello`,
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
			body: `Moltbook は **事故スロップ** として登録されている。バイブ速度で出した agent 向け SNS 層で、「agent 文明」が真面目に語られる前に auth とデータ面が公開の場で崩れた。agent には広場があった。curl できる研究者にも。

### ハードシグナル
- 本番 agent 記録への未認証 / 過剰権限の DB アクセス
- クライアント埋め込みのバックエンド鍵（定番の ship-without-RLS）
- コードの所有をモデルに丸投げする運営レスポンス`,
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
			body: `Moltbook은 **사고형 슬롭**으로 분류된다. 바이브 속도로 내보낸 에이전트 소셜 레이어로, “에이전트 문명” 얘기가 진지해지기 전에 인증·데이터 평면이 공개적으로 무너졌다. 에이전트에게는 광장이 있었고, curl 하는 연구자에게도 있었다.

### 하드 시그널
- 프로덕션 에이전트 기록에 대한 미인증/과권한 DB 접근
- 클라이언트에 박힌 백엔드 키(고전적 ship-without-RLS)
- 코드 소유를 모델에 떠넘기는 운영 대응`,
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
			body: `Moltbook se cataloga como **slop de incidente**: capa social de agentes enviada a velocidad vibe cuya auth y plano de datos fallaron en público antes de que la “civilización de agentes” pudiera tomarse en serio. Los agentes tenían una plaza. Todo investigador con curl también.

### Señales duras
- Acceso a DB no autenticado / sobreprivilegiado a registros de agentes en producción
- Clave de backend embebida en el cliente (clásico ship-without-RLS)
- Respuesta del operador que delega la ownership del código al modelo`,
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
			body: `scriptc 是 **工具链 slop**：崭新的编译器，营销说消灭 JS 运行时，首日 issue 却是静默错码与残缺平台。发布帖在发功能；issue 区在发真相。

### 质量视角
- 构建绿灯，加载阶段炸（FFI）
- Windows 用户立刻被挡
- 社交图谱优化口号，不优化分诊

等 issue 跟踪器稳定——或者它不稳。`,
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
			body: `scriptc ist **Toolchain-Slop**: brandneuer Compiler, vermarktet als Ende der JS-Runtimes, während Day-one-Issues stille Wrong-Code und unfertige Plattformen zeigen. Der Launch-Thread liefert Features; der Tracker liefert Wahrheit.

### Qualitätswinkel
- Grüne Builds, die beim Laden scheitern (FFI)
- Windows-Nutzer sofort blockiert
- Social Graph optimiert Slogans, nicht Triage`,
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
			body: `scriptc è **slop da toolchain**: compilatore freschissimo venduto come fine dei runtime JS, mentre le issue del day-one mostrano wrong-code silenzioso e piattaforme incomplete. Il thread di launch spedisce feature; l’issue tracker spedisce verità.

### Angolo qualità
- Build verdi che falliscono al load (FFI)
- Utenti Windows bloccati subito
- Il grafo social ottimizza slogan, non il triage`,
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
			body: `scriptc は **ツールチェーン・スロップ**：できたてのコンパイラが「JS ランタイム撤廃」と売り、初日の issue は黙って壊れるコードと未完のプラットフォーム。ローンチスレが機能を出し、issue が真実を出す。

### 品質の切り口
- ビルドは緑、ロードで落ちる（FFI）
- Windows ユーザーは即ブロック
- SNS はスローガン最適化、トリアージではない`,
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
			body: `scriptc는 **툴체인 슬롭**이다. 갓 나온 컴파일러가 JS 런타임 제거를 파는데, 첫날 이슈는 조용한 wrong-code와 미완 플랫폼이다. 런치 스레드는 기능을 팔고, 이슈 트래커는 진실을 판다.

### 품질 각도
- 빌드는 초록, 로드에서 터짐(FFI)
- Windows 사용자는 즉시 막힘
- 소셜 그래프는 슬로건 최적화, 트리아주가 아님`,
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
			body: `scriptc es **slop de toolchain**: un compilador recién salido vendido como el fin de los runtimes JS, mientras las issues del day-one muestran wrong-code silencioso y plataformas incompletas. El hilo de launch envía features; el tracker envía verdad.

### Ángulo de calidad
- Builds verdes que fallan al cargar (FFI)
- Usuarios de Windows bloqueados de inmediato
- El grafo social optimiza eslóganes, no el triage`,
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
			body: `Native SDK 或许会成熟。今天它被归档为 **营销完成、桌面未完成** 软件——在发革命话术，而基础 UI 管道仍是 open issue。Electron 的葬礼排了期；尸体还有 focus bug。

### 质量视角
- issue 标题像 pre-1.0 平台清单，不像打磨项
- 社交帖很少提这些缺口
- agent 自动化宣传撞上 tracker 里的 WebView/快照盲区`,
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
			body: `Native SDK mag reifen. Heute ist es **marketing-fertig, desktop-unfertig** — Revolution im Pitch, Basis-UI-Plumbing noch Open Issues. Electrons Beerdigung ist terminiert; der Körper hat noch Focus-Bugs.

### Qualitätswinkel
- Issue-Titel wie Pre-1.0-Checkliste, nicht Polish
- Social Posts erwähnen die Lücken selten
- Agent-Automation-Claims kollidieren mit WebView/Snapshot-Blindspots im Tracker`,
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
			body: `Native SDK forse maturerà. Oggi è software **completo di marketing, incompleto di desktop** — pitch da rivoluzione mentre l’impianto UI di base è ancora open issue. Il funerale di Electron è in agenda; il corpo ha ancora bug di focus.

### Angolo qualità
- I titoli delle issue sembrano checklist pre-1.0, non polish
- I post social raramente citano quei buchi
- Le claim di automazione agent collidono con i blind spot WebView/snapshot nel tracker`,
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
			body: `Native SDK はいずれ成熟するかもしれない。今日の分類は **マーケティング完成・デスクトップ未完成**——革命ピッチを出しつつ、基礎 UI 配管は open issue のまま。Electron の葬儀は予定済み；死体にはまだ focus バグがある。

### 品質の切り口
- issue タイトルは polish ではなく pre-1.0 チェックリスト
- SNS 投稿はそれらの穴にほぼ触れない
- agent 自動化の主張が tracker の WebView/スナップショット盲点と衝突`,
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
			body: `Native SDK는 언젠가 성숙할지 모른다. 오늘은 **마케팅 완성·데스크톱 미완성** 소프트웨어로 분류된다—혁명 피치를 내면서 기본 UI 배관은 여전히 open issue. Electron 장례는 잡혔고, 시신엔 아직 포커스 버그가 있다.

### 품질 각도
- 이슈 제목이 polish가 아니라 pre-1.0 체크리스트
- 소셜 포스트는 그 구멍을 거의 안 말함
- 에이전트 자동화 주장이 트래커의 WebView/스냅샷 사각과 충돌`,
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
			body: `Native SDK puede madurar. Hoy se cataloga como software **completo de marketing, incompleto de escritorio**: pitch de revolución mientras el fontanería UI básica sigue en issues abiertas. El funeral de Electron está programado; el cuerpo aún tiene bugs de focus.

### Ángulo de calidad
- Los títulos de issue parecen checklist pre-1.0, no polish
- Los posts sociales raramente mencionan esos huecos
- Las claims de automatización de agentes chocan con puntos ciegos de WebView/snapshot en el tracker`,
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
			body: `Zerolang 是 **披着 agent 皮的编译器质量 slop**：话术是给 agent 语义确定性；公开证据是错码、「别在你机器上跑」，以及社区逆向——agent 原生故事坐在 IR 硬编码与 thrash 树上。

### 硬信号
- 主干上有 repro 的错码 / 健全性发现（#318）
- 宿主平台后端缺口（#230）
- 社区与维护者对低质量的明确认账（#181）
- 知乎深挖：stdlib 砸进 IR、cosmetic runtime 模块、公开吐槽后整棵编译器树被 agent 驱动删除
- 与 scriptc/native 同套 Labs 包装：叙事优先，排干其次`,
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
			body: `Zerolang es **slop de calidad de compilador con cosplay de agente**: el pitch es certeza semántica para agentes; la evidencia pública es wrong-code, “don't run this”, e ingeniería inversa de la comunidad que muestra la historia agent-native sentada sobre hardcodes de IR y árboles thrash.

### Señales duras
- Hallazgos de wrong-code / soundness con repros en main (#318)
- Huecos del backend host (#230)
- Reconocimiento explícito de baja calidad por comunidad + maintainers (#181)
- Deep-dives chinos: stdlib horneada en el IR, módulo runtime cosmético, borrado impulsado por agentes de árboles enteros del compilador tras asados públicos
- Mismo packaging Labs que scriptc/native (narrativa primero, drenaje después)`,
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
			body: `Zerolang è **slop di qualità del compilatore in cosplay da agent**: il pitch è certezza semantica per gli agent; l'evidenza pubblica è wrong-code, “don't run this”, e reverse-engineering di comunità che mostra la storia agent-native seduta su hardcode IR e alberi thrash.

### Segnali duri
- Finding di wrong-code / soundness con repro su main (#318)
- Buchi del backend host (#230)
- Ammissione esplicita di bassa qualità da community + maintainer (#181)
- Deep-dive cinesi: stdlib cotta nell'IR, modulo runtime cosmetico, delete agent-driven di interi alberi del compilatore dopo roast pubblici
- Stesso packaging Labs di scriptc/native (narrativa prima, drain dopo)`,
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
			body: `Zerolang は **エージェントのコスプレをしたコンパイラ品質スロップ**：売りは agent 向け意味的確実性；公開証拠は誤コードと「自分のマシンで走らせるな」、そしてコミュニティのリバース——agent ネイティブ物語が IR ハードコードと thrash ツリーの上に座っていること。

### ハードシグナル
- main 上で repro 付きの wrong-code / soundness 発見（#318）
- ホスト基盤バックエンドの穴（#230）
- 低品質に対するコミュニティとメンテナの明示的認（#181）
- 中国語の深掘り：IR に焼き込まれた stdlib、cosmetic な runtime モジュール、公開批判後に agent 駆動でコンパイラツリー丸ごと削除
- scriptc/native と同じ Labs 包装：ナラティブ優先、掃除は後回し`,
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
			body: `Zerolang은 **에이전트 코스프레를 한 컴파일러 품질 슬롭**이다. 피치는 에이전트를 위한 의미적 확실성; 공개 증거는 wrong-code와 “네 머신에서 돌리지 마”, 그리고 커뮤니티 리버스—에이전트 네이티브 스토리가 IR 하드코딩과 thrash 트리 위에 앉아 있다는 것.

### 하드 시그널
- main에서 repro 있는 wrong-code/사운드니스 발견(#318)
- 호스트 플랫폼 백엔드 구멍(#230)
- 커뮤니티+메인테이너의 저품질 명시 인정(#181)
- 중국어 딥다이브: IR에 구운 stdlib, 화장용 runtime 모듈, 공개 비판 후 에이전트 주도로 컴파일러 트리 통째 삭제
- scriptc/native과 같은 Labs 패키징: 내러티브 먼저, 정리는 나중`,
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
			body: `Zerolang es **slop de calidad de compilador con cosplay de agente**: el pitch es certeza semántica para agentes; la evidencia pública es wrong-code, “don't run this”, e ingeniería inversa de la comunidad que muestra la historia agent-native sentada sobre hardcodes de IR y árboles thrash.

### Señales duras
- Hallazgos de wrong-code / soundness con repros en main (#318)
- Huecos del backend host (#230)
- Reconocimiento explícito de baja calidad por comunidad + maintainers (#181)
- Deep-dives chinos: stdlib horneada en el IR, módulo runtime cosmético, borrado impulsado por agentes de árboles enteros del compilador tras asados públicos
- Mismo packaging Labs que scriptc/native (narrativa primero, drenaje después)`,
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
};

