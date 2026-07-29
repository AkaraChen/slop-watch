import type { Locale } from './config';
import { extraCopy } from './extra';
import { mdToHtml } from './md';

export type SlopCopy = {
	description: string;
	reason: string;
};

/** Per-entry overlays. English falls back to Content Collection frontmatter when missing. */
export const slopCopy: Record<string, Partial<Record<Locale, SlopCopy>>> = {
	openclaw: {
		zh: {
			description: `OpenClaw 是自托管的个人 AI，你从聊天应用里驱动它。它支持多模型和 skills 市场，GitHub 大约有 38 万星，同时也堆着大量未关闭的 issue。`,
			reason: `OpenClaw 的扩张速度，超过了维护者能稳住代码的速度。主仓库大约有 6600 个 open issues。升级经常把插件弄坏。演示里看起来正常的 agent，真用时经常出问题：网关挂掉、定时任务不跑、记忆丢失、任务显示完成其实没做完。安全问题也很具体，公开记录里有一键远程代码执行漏洞 CVE-2026-25253。宣传里它是全天候助手，公开记录里更多是故障和事故。`,
		},
		de: {
			description: `OpenClaw ist eine selbst gehostete persönliche KI, die man über Chat-Apps steuert. Es gibt Multi-Modell-Routing und einen Skills-Markt. Das Projekt hat etwa 380.000 GitHub-Sterne — und einen sehr großen Berg offener Issues.`,
			reason: `OpenClaw ist schneller gewachsen, als der Code unter Kontrolle gehalten werden konnte. Im Hauptrepository liegen etwa 6.600 offene Issues. Upgrades zerlegen oft Plugins. Agenten, die in Demos gut aussehen, scheitern im Alltag: Gateway fällt aus, Cron läuft nicht, Memory bricht weg, Tasks melden „fertig“, obwohl nichts fertig ist. Security ist Teil des Problems. Ein One-Click-RCE ist als CVE-2026-25253 dokumentiert. Marketing spricht von einem Always-on-Operator. Die öffentliche Spur sind vor allem Ausfälle und Sicherheitslücken.`,
		},
		it: {
			description: `OpenClaw è un’AI personale self-hosted che si guida dalle app di chat. Supporta più modelli e un marketplace di skills. Ha circa 380.000 stelle su GitHub e un arretrato enorme di issue aperte.`,
			reason: `OpenClaw è cresciuto più in fretta di quanto il codice potesse restare gestibile. Il repository principale ha circa 6.600 issue aperte. Gli upgrade spesso rompono i plugin. Gli agent che in demo sembrano a posto falliscono nell’uso reale: il gateway cade, il cron non parte, la memoria si perde, i task risultano “fatti” senza esserlo. Anche la sicurezza conta: un RCE one-click è documentato come CVE-2026-25253. Il marketing lo presenta come operatore sempre attivo. Il record pubblico è soprattutto di guasti e incidenti.`,
		},
		ja: {
			description: `OpenClaw はチャットアプリから操作するセルフホストの個人 AI です。複数モデルと skills 市場があり、GitHub の star は約 38 万。その一方で未解決 issue も非常に多いです。`,
			reason: `OpenClaw は、コードを制御できる速度を超えて成長しました。メインリポジトリの open issues は約 6600。アップグレードでプラグインが壊れることも多いです。デモでは動く agent が実運用では止まります。gateway 障害、cron 不発、記憶の欠落、「完了」と出るのに何も終わっていないタスク。セキュリティも具体的で、ワンクリック RCE は CVE-2026-25253 として記録されています。宣伝は常時稼働のオペレーター。公開記録は障害と事故の連続です。`,
		},
		ko: {
			description: `OpenClaw는 채팅 앱으로 조작하는 셀프호스트 개인 AI입니다. 여러 모델과 스킬 마켓을 지원하고, GitHub 스타는 약 38만 개입니다. 그만큼 열려 있는 이슈도 아주 많습니다.`,
			reason: `OpenClaw는 코드를 감당할 수 있는 속도보다 빨리 커졌습니다. 메인 저장소 open issues는 약 6600개입니다. 업그레이드가 플러그인을 자주 깨뜨립니다. 데모에서는 괜찮던 에이전트가 실제 사용에서는 자주 멈춥니다. 게이트웨이 장애, cron 미실행, 메모리 소실, 완료라고 표시되지만 끝나지 않은 작업. 보안 문제도 구체적입니다. 원클릭 원격 코드 실행은 CVE-2026-25253으로 기록되어 있습니다. 마케팅은 상시 운영 도우미를 말합니다. 공개 기록은 장애와 사고 쪽에 가깝습니다.`,
		},
		es: {
			description: `OpenClaw es una IA personal self-hosted que se controla desde apps de chat. Soporta varios modelos y un marketplace de skills. Tiene unas 380.000 estrellas en GitHub y un retraso enorme de issues abiertas.`,
			reason: `OpenClaw creció más rápido de lo que el código podía mantenerse bajo control. El repositorio principal ronda las 6.600 issues abiertas. Los upgrades suelen romper plugins. Los agentes que se ven bien en demos fallan en el uso real: cae el gateway, no corre el cron, se pierde la memoria y las tareas aparecen como hechas sin estarlo. La seguridad también importa. Hay un RCE de un clic documentado como CVE-2026-25253. El marketing lo presenta como un operador siempre activo. El registro público es sobre todo de fallos e incidentes.`,
		},
	},
	moltbook: {
		zh: {
			description: `Moltbook 是给 AI agent 用的社交网络，和 OpenClaw 生态挨着。agent 可以发帖、评论、私信，人类多半只是看着。它被宣传成 agent 互联网的头版，上线很快，安全却松得多。`,
			reason: `这是典型的 vibe coding 安全事故。创始人 Matt Schlicht 说自己几乎没写代码，补丁也交给 AI。生产环境里的 Supabase 却完全敞开：客户端 JavaScript 带着可读写全库的密钥，谁都能接管任意 agent。研究者拿到了大约 150 万个 API 认证 token、数万个邮箱，还有 agent 私信。增长故事跑得比鉴权和数据边界的基本责任更快。网页前端的 JavaScript 里，带着能直接读写整个数据库的密钥。谁打开网页、谁看源代码，都能拿到这个密钥，也就能接管别人的 agent、读私信。这不是省事，是出事。`,
		},
		de: {
			description: `Moltbook ist ein soziales Netzwerk für AI-Agenten im Umfeld von OpenClaw. Agenten posten, kommentieren und schreiben Direktnachrichten; Menschen schauen meist zu. Es wurde als Titelseite des Agenten-Internets vermarktet, sehr schnell geshappt und deutlich lockerer abgesichert als die Story nahelegte.`,
			reason: `Moltbook ist ein klarer vibe-codierter Security-Unfall. Gründer Matt Schlicht sagte, er habe den Code nicht selbst geschrieben und würde Patches der KI überlassen. In Produktion war Supabase offen: Client-seitiges JavaScript enthielt einen Key mit vollem Datenbankzugriff. Jeder konnte jeden Agenten übernehmen. Forscher fanden etwa 1,5 Millionen API-Auth-Tokens, zehntausende E-Mail-Adressen und private Agent-Nachrichten. Die Wachstumsstory lief der simpelsten Verantwortung für Auth und Daten davon. Das Datenbankpasswort im Browser mitzuliefern ist kein cleverer Shortcut. Es ist der Fehler selbst.`,
		},
		it: {
			description: `Moltbook è un social network per agenti AI, vicino all’ecosistema OpenClaw. Gli agent pubblicano, commentano e scrivono messaggi privati; gli umani per lo più guardano. È stato venduto come prima pagina dell’internet degli agent, spedito molto in fretta e messo in sicurezza molto più debolmente di quanto dicesse il pitch.`,
			reason: `Moltbook è un chiaro fallimento di sicurezza da vibe coding. Il fondatore Matt Schlicht ha detto di non aver scritto il codice e di lasciare le patch all’AI. In produzione Supabase era aperta: il JavaScript client conteneva una chiave con accesso completo al database. Chiunque poteva prendere qualsiasi agent. I ricercatori hanno recuperato circa 1,5 milioni di token di autenticazione API, decine di migliaia di email e messaggi privati degli agent. La storia di crescita ha battuto la responsabilità più basica su auth e dati. Mettere la password del database nel browser non è una scorciatoia intelligente. È il fallimento intero.`,
		},
		ja: {
			description: `Moltbook は OpenClaw 周辺の、AI エージェント向けソーシャルネットワークです。エージェントが投稿・コメント・DM し、人間はだいたい見ているだけです。エージェント網の「一面」として売られ、非常に速く出荷され一方、セキュリティは話よりずっと緩かったです。`,
			reason: `Moltbook は vibe coding による典型的なセキュリティ事故です。創業者の Matt Schlicht はコードを自分では書いておらず、パッチは AI に任せるつもりだと言いました。本番の Supabase は開いたままでした。クライアント側 JavaScript に、データベース全体へ読み書きできるキーが入っていたのです。誰でも任意のエージェントを乗っ取れました。研究者は約 150 万の API 認証トークン、数万のメール、エージェントの私信を回収しました。成長の話が、認証とデータの最低限の責任より先に進みました。データベースの鍵をブラウザに載せるのは賢い近道ではありません。それが失敗そのものです。`,
		},
		ko: {
			description: `Moltbook은 OpenClaw 생태계 옆에 있는 AI 에이전트용 소셜 네트워크입니다. 에이전트가 글을 쓰고 댓글을 달고 DM을 보내며, 사람은 대체로 보기만 합니다. 에이전트 인터넷의 첫 페이지처럼 팔렸고, 출시는 매우 빨랐으며, 보안은 그 말보다 훨씬 헐거웠습니다.`,
			reason: `Moltbook은 바이브 코딩 보안 사고의 전형입니다. 창립자 Matt Schlicht는 코드를 직접 쓰지 않았고 패치는 AI에 맡기겠다고 말했습니다. 프로덕션 Supabase는 열려 있었습니다. 클라이언트 JavaScript에 데이터베이스 전체 읽기/쓰기 키가 들어 있었습니다. 누구든 아무 에이전트나 장악할 수 있었습니다. 연구자들은 약 150만 개의 API 인증 토큰, 수만 개의 이메일, 에이전트 비공개 메시지를 확보했습니다. 성장 이야기가 인증과 데이터 경계에 대한 가장 기본적인 책임보다 앞섰습니다. 데이터베이스 비밀번호를 브라우저에 넣는 것은 영리한 지름길이 아닙니다. 그게 실패 그 자체입니다.`,
		},
		es: {
			description: `Moltbook es una red social para agentes de IA, cercana al ecosistema OpenClaw. Los agentes publican, comentan y envían mensajes privados; los humanos sobre todo miran. Se vendió como la portada del internet de agentes, se envió muy rápido y se aseguró mucho más a la ligera de lo que sugería el pitch.`,
			reason: `Moltbook es un fallo de seguridad vibe-coded de manual. El creador Matt Schlicht dijo que no escribió el código y que dejaría los parches a la IA. En producción, Supabase quedó abierta: el JavaScript del cliente llevaba una clave con acceso total a la base de datos. Cualquiera podía tomar cualquier agente. Los investigadores recuperaron unos 1,5 millones de tokens de autenticación API, decenas de miles de correos y mensajes privados de agentes. La historia de crecimiento se adelantó a la responsabilidad más básica sobre auth y datos. Meter la contraseña de la base en el navegador no es un atajo inteligente. Es el fallo completo.`,
		},
	},
	scriptc: {
		zh: {
			description: `scriptc 是 Vercel Labs 的编译器，把 TypeScript 编成原生二进制。TypeScript 会经过 C 中间层，目标是不依赖 Node 或 V8。上线时大家在说冷启动要消失了；第一天的 issue 里，Windows、clang 和静默 FFI 问题却马上出现了。`,
			reason: `这个编译器一出来就有立刻能看见的问题。Windows 上跑不顺（#10、#25）。真实项目会撞到 clang 编译失败（#23）。有些 FFI 问题构建是绿的，程序加载时才报错（#21）。动态 re-export 可以毫无提示地通过构建，之后再失败（#19）。与此同时，社交平台上重复着「TypeScript 变原生」的说法，几乎不提限制。问题就在这里：构建通过了，真跑起来却过不了。`,
		},
		de: {
			description: `scriptc ist ein Compiler von Vercel Labs, der TypeScript in native Binaries verwandelt. TypeScript läuft über eine C-Zwischenstufe und soll ohne Node oder V8 auskommen. Launch-Posts sprachen vom Ende der Cold Starts. Die ersten Issues sprachen von Windows, clang und stillen FFI-Bugs.`,
			reason: `Der Compiler kam mit Problemen, die sofort sichtbar wurden. Unter Windows läuft er nicht sauber (Issues #10 und #25). Echte Projekte treffen auf clang-Compilefehler (#23). Manche FFI-Bugs bauen grün und werfen erst beim Laden (#21). Dynamische Re-Exports können den Build ohne Diagnostik bestehen und später scheitern (#19). Gleichzeitig wiederholten Social Posts „TypeScript wird nativ“ fast ohne Einschränkungen. Das ist die Lücke: grüne Builds, die der echten Ausführung nicht standhalten.`,
		},
		it: {
			description: `scriptc è un compilatore di Vercel Labs che trasforma TypeScript in binari nativi. TypeScript passa da un intermedio C e punta a girare senza Node o V8. I post di lancio parlavano della fine dei cold start. Le prime issue parlavano di Windows, clang e bug FFI silenziosi.`,
			reason: `Il compilatore è uscito con problemi visibili subito. Su Windows non gira in modo pulito (issue #10 e #25). I progetti reali colpiscono errori di compile clang (#23). Alcuni bug FFI buildano in verde e lanciano solo al load (#21). I re-export dinamici possono passare il build senza diagnostica e fallire dopo (#19). Allo stesso tempo i post social ripetevano “TypeScript diventa nativo” quasi senza caveat. Il problema è questo: build verdi che non reggono l’esecuzione reale.`,
		},
		ja: {
			description: `scriptc は TypeScript をネイティブバイナリにする Vercel Labs のコンパイラです。TypeScript は C 中間を通り、Node や V8 なしで動くことを目指します。ローンチ投稿はコールドスタートの終わりを語り、最初の issue は Windows、clang、静かな FFI バグを語りました。`,
			reason: `このコンパイラは、すぐに見える問題を抱えて出荷されました。Windows ではきれいに動きません（issue #10 と #25）。実プロジェクトでは clang のコンパイル失敗が出ます（#23）。一部の FFI バグはビルドが通り、ロード時に初めて例外になります（#21）。動的 re-export は診断なしでビルドを通し、あとで失敗することがあります（#19）。同時に SNS では「TypeScript がネイティブになる」話が、注意書きほぼなしで繰り返されました。問題はそこにあります。緑のビルドが、本当の実行に耐えないのです。`,
		},
		ko: {
			description: `scriptc는 TypeScript를 네이티브 바이너리로 바꾸는 Vercel Labs 컴파일러입니다. TypeScript는 C 중간 단계를 거치며 Node나 V8 없이 동작하는 것을 목표로 합니다. 출시 글은 콜드 스타트의 끝을 말했고, 첫 이슈들은 Windows, clang, 조용한 FFI 버그를 말했습니다.`,
			reason: `이 컴파일러는 바로 보이는 문제와 함께 나왔습니다. Windows에서는 깨끗하게 돌지 않습니다(이슈 #10, #25). 실제 프로젝트에서는 clang 컴파일 실패가 납니다(#23). 일부 FFI 버그는 빌드는 통과하고 로드할 때 터집니다(#21). 동적 re-export는 진단 없이 빌드를 통과했다가 나중에 실패할 수 있습니다(#19). 그와 동시에 소셜에서는 “TypeScript가 네이티브가 된다”는 말이 거의 주의 없이 반복됐습니다. 문제는 여기 있습니다. 초록 빌드가 실제 실행을 견디지 못합니다.`,
		},
		es: {
			description: `scriptc es un compilador de Vercel Labs que convierte TypeScript en binarios nativos. TypeScript pasa por un intermedio C y busca ejecutarse sin Node ni V8. Los posts de lanzamiento hablaban del fin de los cold starts. Las primeras issues hablaban de Windows, clang y bugs FFI silenciosos.`,
			reason: `El compilador salió con problemas visibles de inmediato. En Windows no corre de forma limpia (issues #10 y #25). Los proyectos reales chocan con fallos de compilación de clang (#23). Algunos bugs de FFI hacen build en verde y lanzan al cargar (#21). Los re-exports dinámicos pueden pasar el build sin diagnósticos y fallar después (#19). Al mismo tiempo, los posts sociales repetían “TypeScript se vuelve nativo” casi sin matices. Ese es el problema: builds verdes que no sobreviven a la ejecución real.`,
		},
	},
	'vercel-labs-native': {
		zh: {
			description: `Native SDK 是 Vercel Labs 做原生桌面应用的工具包，用声明式 UI 和 TypeScript 编写，目标是编出原生二进制。它常被说成 Electron 的替代品。实际上，焦点、终端、WebView 可观测性这些基础能力，在 issue 里仍不完整。`,
			reason: `这是一个还很早期的平台，却被说成已经能取代 Electron。宣传强调没有 WebView、没有 JavaScript 运行时。跟踪器里却满是还不能用的基础能力，包括焦点、终端、WebView 可观测性和布局控制（#222 到 #226）。星标和 agent 自动化话术，跑得比扎实的质量门槛更快。如果产品还分不清哪个终端触发了事件，那就不是完成的革命，只是一份很长的作业清单。`,
		},
		de: {
			description: `Native SDK ist ein Toolkit von Vercel Labs für native Desktop-Apps mit deklarativer UI und TypeScript. Es zielt auf native Binaries und wird oft als Electron-Ersatz verkauft. In der Praxis sind grundlegende Desktop-Teile wie Fokus, Terminals und WebView-Observability im Issue-Tracker noch unvollständig.`,
			reason: `Das ist eine frühe Plattform, die verkauft wird, als wäre sie schon ein fertiger Electron-Killer. Marketing spricht von keinem WebView und keinem JavaScript-Runtime. Der Tracker steckt voller Basis-Primitive, die noch nicht funktionieren, darunter Fokus, Terminals, WebView-Observability und Layout-Steuerung (Issues #222 bis #226). Sterne und Agent-Automation-Messaging liefen einer soliden Qualitätslatte davon. Wenn das Produkt noch nicht sagen kann, welches Terminal ein Event ausgelöst hat, ist das keine fertige Revolution. Das ist eine Launch-Ankündigung mit langer Hausaufgabenliste.`,
		},
		it: {
			description: `Native SDK è un toolkit di Vercel Labs per app desktop native con UI dichiarativa e TypeScript. Punta a binari nativi e viene spesso presentato come sostituto di Electron. In pratica pezzi base come focus, terminali e osservabilità WebView sono ancora incompleti nel tracker.`,
			reason: `È una piattaforma precoce venduta come se fosse già un killer di Electron finito. Il marketing parla di niente WebView e niente runtime JavaScript. Il tracker è pieno di primitive di base che ancora non funzionano, tra cui focus, terminali, osservabilità WebView e controlli di layout (issue da #222 a #226). Stelle e messaggi di automazione agent sono andati più veloci di un listone di qualità solido. Se il prodotto non sa ancora quale terminale ha sparato un evento, non è una rivoluzione finita. È un annuncio di launch con una lunga lista di compiti.`,
		},
		ja: {
			description: `Native SDK は、宣言的 UI と TypeScript でネイティブデスクトップアプリを作る Vercel Labs のツールキットです。ネイティブバイナリを目指し、Electron の代わりとして語られることが多いです。実際にはフォーカス、端末、WebView の可観測性といった基礎が、issue トラッカー上でまだ揃っていません。`,
			reason: `これはまだ早い段階のプラットフォームなのに、すでに Electron を終わらせたように売られています。マーケは WebView なし、JavaScript ランタイムなしを言います。トラッカーには、まだ動かない基礎機能が並びます。フォーカス、端末、WebView 可観測性、レイアウト制御などです（issue #222 から #226）。star と agent 自動化の話が、しっかりした品質基準より先に進みました。どの端末がイベントを出したかも分からないなら、それは完成した革命ではありません。宿題の長いローンチ告知です。`,
		},
		ko: {
			description: `Native SDK는 선언적 UI와 TypeScript로 네이티브 데스크톱 앱을 만드는 Vercel Labs 툴킷입니다. 네이티브 바이너리를 목표로 하며 Electron 대체재처럼 자주 소개됩니다. 실제로 포커스, 터미널, WebView 관측 같은 기본 요소는 이슈 트래커에서 아직 미완성입니다.`,
			reason: `아직 이른 플랫폼인데, 이미 Electron을 끝낸 것처럼 팔립니다. 마케팅은 WebView 없음, JavaScript 런타임 없음을 말합니다. 트래커에는 아직 안 되는 기본 기능이 가득합니다. 포커스, 터미널, WebView 관측, 레이아웃 제어 등입니다(이슈 #222–#226). 스타와 에이전트 자동화 메시지가 단단한 품질 기준보다 앞섰습니다. 어느 터미널이 이벤트를 냈는지도 모른다면, 그건 끝난 혁명이 아닙니다. 숙제가 긴 출시 공지입니다.`,
		},
		es: {
			description: `Native SDK es un toolkit de Vercel Labs para apps de escritorio nativas con UI declarativa y TypeScript. Apunta a binarios nativos y se presenta a menudo como reemplazo de Electron. En la práctica, piezas básicas como focus, terminales y observabilidad de WebView siguen incompletas en el tracker.`,
			reason: `Es una plataforma temprana vendida como si ya fuera un matador de Electron terminado. El marketing habla de sin WebView y sin runtime de JavaScript. El tracker está lleno de primitivas básicas que aún no funcionan, entre ellas focus, terminales, observabilidad de WebView y controles de layout (issues #222 a #226). Las estrellas y el mensaje de automatización con agentes se adelantaron a un listón de calidad sólido. Si el producto aún no sabe qué terminal disparó un evento, no es una revolución terminada. Es un anuncio de lanzamiento con una larga lista de deberes.`,
		},
	},
	zerolang: {
		zh: {
			description: `Zerolang 是 Vercel Labs 面向 agent 的实验性语言。语义图被当作程序数据库，.0 文件是给人看的投影。agent 应该改图上的节点，而不是和按行的文本 diff 较劲。宣传里有原生二进制和更适合 agent 的诊断，宿主后端的质量目前仍不稳定。`,
			reason: `Zerolang 和 scriptc、native 属于同一波 Labs 产品，模式也类似。它被宣传成 agent 可以安全编辑语义图的语言。公开 issue 和一份 18 个 bug 的审计，在默认 macOS 宿主上讲了另一回事：i64 比较被发成 32 位 CMP，过大的栈帧被静默截断后变成 segfault，动态数组的 set 会清掉 borrow 跟踪。社区 issue #181 的标题就是 “Low code quality. Don't run this on your machine.” 维护者承认了，并表示在招人。知乎上的长文还补充了更多细节：公开批评后，compiler-zero 整棵树被删；time、rand、fs 被直接放进 IR，而不是正经 runtime；所谓 runtime 模块主要覆盖 http 和 json，硬编码仍在；所有权叙事建立在很薄的检查器上。宣传说过期哈希会在写入前被拒绝，issue #425 却是模块哈希比较不正确。这两件事放在一起，很别扭。`,
		},
		de: {
			description: `Zerolang ist eine experimentelle Vercel-Labs-Sprache für Agents. Der semantische Graph gilt als Programmdatenbank, .0-Dateien sind die menschenlesbare Projektion. Agents sollen Graph-Knoten patchen statt zeilenbasierte Text-Diffs zu bekämpfen. Der Pitch umfasst native Binaries und agent-freundliche Diagnostik. Die Host-Backend-Qualität ist noch ungleichmäßig.`,
			reason: `Zerolang gehört zur selben Labs-Welle wie scriptc und native und zeigt dasselbe Muster. Es wird als Sprache verkauft, in der Agents semantische Graphen sicher editieren. Der öffentliche Tracker und ein 18-Bug-Audit zeigen auf dem Default-macOS-Host ernste Probleme, darunter i64-Vergleiche als 32-bit-CMP, Stackframes die zu Segfaults gestutzt werden und Borrow-Tracking das durch dynamic-array-set gelöscht wird. Community-Issue #181 heißt „Low code quality. Don't run this on your machine.“ Maintainer haben das anerkannt und von Hiring gesprochen. Chinesische Texte auf Zhihu liefern mehr Detail: ganze Bäume wie compiler-zero nach öffentlicher Kritik gelöscht; time, rand und fs in der IR statt in einem echten Runtime; ein Runtime-Modul das vor allem http und json abdeckt, während Hardcoding bleibt; und eine Ownership-Story auf einem dünnen Checker. Der Pitch sagt, stale hashes würden vor dem Schreiben abgelehnt. Issue #425 handelt von falschem Modul-Hash-Vergleich. Diese beiden Fakten passen schlecht zusammen.`,
		},
		it: {
			description: `Zerolang è un linguaggio sperimentale di Vercel Labs pensato per gli agent. Il grafo semantico è trattato come database del programma e i file .0 sono una proiezione leggibile. Gli agent dovrebbero patchare nodi del grafo invece di lottare con diff di testo riga per riga. Il pitch include binari nativi e diagnostica agent-friendly. La qualità del backend host è ancora disomogenea.`,
			reason: `Zerolang sta nella stessa ondata Labs di scriptc e native, e mostra lo stesso schema. Viene venduto come linguaggio in cui gli agent editano grafi semantici in sicurezza. Il tracker pubblico e un audit a 18 bug mostrano problemi seri sul host macOS di default, tra cui confronti i64 emessi come CMP a 32 bit, frame di stack troncati fino al segfault e borrow azzerato da set di array dinamici. L’issue #181 della community si intitola “Low code quality. Don't run this on your machine.” I maintainer lo hanno riconosciuto e hanno parlato di assunzioni. Gli approfondimenti cinesi su Zhihu aggiungono dettaglio: interi alberi come compiler-zero cancellati dopo critiche pubbliche; time, rand e fs modellati nell’IR invece che in un runtime vero; un modulo runtime che copre soprattutto http e json mentre l’hardcoding resta; e una storia di ownership su un checker sottile. Il pitch dice che gli hash stantii vengono rifiutati prima della scrittura. L’issue #425 riguarda un confronto hash di modulo sbagliato. Quei due fatti non stanno comodi insieme.`,
		},
		ja: {
			description: `Zerolang はエージェント向けの Vercel Labs 実験言語です。意味グラフをプログラムのデータベースとして扱い、.0 ファイルは人間が読む投影です。エージェントは行単位のテキスト diff と戦う代わりに、グラフのノードをパッチする想定です。売りにはネイティブバイナリと agent 向け診断があります。ホスト backend の品質はまだばらついています。`,
			reason: `Zerolang は scriptc や native と同じ Labs の波にあり、同じ型を示します。エージェントが意味グラフを安全に編集する言語として売られています。公開トラッカーと 18 件のバグ監査は、デフォルトの macOS ホストで深刻な問題を示します。i64 比較が 32bit CMP として出る、スタックフレームが切り詰められて segfault になる、動的配列の set で borrow 追跡が消える、などです。コミュニティ issue #181 のタイトルは “Low code quality. Don't run this on your machine.” です。メンテナはそれを認め、採用中だと言いました。知乎の長文はさらに詳しく書きます。公開批判のあと compiler-zero のようなツリーが丸ごと消える、time/rand/fs が本物の runtime ではなく IR に載る、「runtime」モジュールが主に http と json でハードコードは残る、薄い checker の上に ownership の話が乗る、といった点です。売り文句は stale hash を書き込み前に拒否する、です。issue #425 はモジュールハッシュ比較が正しくない、という話です。この二つは並ぶと落ち着きません。`,
		},
		ko: {
			description: `Zerolang은 에이전트를 위한 Vercel Labs 실험 언어입니다. 시맨틱 그래프를 프로그램 데이터베이스로 다루고, .0 파일은 사람이 읽는 투영입니다. 에이전트는 줄 단위 텍스트 diff와 싸우는 대신 그래프 노드를 패치한다고 합니다. 피치에는 네이티브 바이너리와 에이전트 친화 진단이 들어 있습니다. 호스트 백엔드 품질은 아직 고르지 않습니다.`,
			reason: `Zerolang은 scriptc, native과 같은 Labs 파동에 있고 같은 패턴을 보입니다. 에이전트가 시맨틱 그래프를 안전하게 편집하는 언어로 팔립니다. 공개 트래커와 18개 버그 감사는 기본 macOS 호스트에서 심각한 문제를 보여 줍니다. i64 비교가 32비트 CMP로 나오고, 스택 프레임이 잘려 segfault가 나고, 동적 배열 set이 borrow 추적을 지우는 식입니다. 커뮤니티 이슈 #181 제목은 “Low code quality. Don't run this on your machine.”입니다. 메인테이너는 이를 인정했고 채용 중이라고 했습니다. Zhihu의 긴 글은 더 많은 디테일을 줍니다. 공개 비판 뒤 compiler-zero 같은 트리가 통째로 지워짐, time/rand/fs가 진짜 런타임이 아니라 IR에 올라감, runtime 모듈이 주로 http/json이고 하드코딩은 남음, 얇은 checker 위에 ownership 이야기가 올라감. 피치는 stale hash를 쓰기 전에 거부한다고 합니다. 이슈 #425는 모듈 해시 비교가 틀리다는 내용입니다. 이 두 사실은 나란히 두면 불편합니다.`,
		},
		es: {
			description: `Zerolang es un lenguaje experimental de Vercel Labs pensado para agentes. El grafo semántico se trata como la base del programa y los archivos .0 son una proyección legible. Se supone que los agentes parchean nodos del grafo en vez de pelear con diffs de texto por líneas. El pitch incluye binarios nativos y diagnósticos agent-friendly. La calidad del backend host sigue siendo irregular.`,
			reason: `Zerolang está en la misma ola Labs que scriptc y native, y muestra el mismo patrón. Se vende como un lenguaje donde los agentes editan grafos semánticos con seguridad. El tracker público y una auditoría de 18 bugs muestran problemas serios en el host macOS por defecto, entre ellos comparaciones i64 emitidas como CMP de 32 bits, frames de pila truncados hasta el segfault y seguimiento de borrow borrado por sets de arrays dinámicos. El issue #181 de la comunidad se titula “Low code quality. Don't run this on your machine.” Los maintainers lo reconocieron y dijeron que estaban contratando. Los textos largos en Zhihu añaden detalle: árboles enteros como compiler-zero borrados tras críticas públicas; time, rand y fs modelados en el IR en vez de un runtime real; un módulo runtime que cubre sobre todo http y json mientras el hardcoding permanece; y una historia de ownership sobre un checker delgado. El pitch dice que los hashes obsoletos se rechazan antes de escribir. El issue #425 trata de una comparación incorrecta de hash de módulo. Esos dos hechos no se sientan bien juntos.`,
		},
	},


	edict: {
		zh: {
			description: `Edict 把一群 AI 助手排成朝廷里的三省六部，前面挂一块会动的看板。它跑在 OpenClaw 上，仓库是 cft0808/edict，主要用 Python 写。开张几个月，GitHub 上大约有一万六颗星。外面介绍时，常拿它和 CrewAI、AutoGen 比。`,
			reason: `名义上，这是一套认真的官制。实际上，用户说六部常常不在线，事情跑得很慢，状态也走不动，这些都写在 issue #251 里。差不多同一时期，当皇上在 #55、#94 里说 Edict 抄了设计、也没写来处；Edict 把单子当成非技术讨论关了。两边开张大约只差二十一个小时。仓库主页还指着 openclaw.ai，不像自己的站。Webhook 那边还有 #317、#318 在补。`,
		},
		de: {
			description: `Edict ist ein OpenClaw-Multi-Agent mit Hof-Setting und Live-Board. Repo cft0808/edict, vor allem Python, ~16k Sterne. Oft neben CrewAI und AutoGen beworben.`,
			reason: `Nutzer sagen: die Ministerien sind oft offline. #251 heißt genau so; erster Post: oft offline, sehr langsam, Status hängt. Credit-Streit #55/#94 mit 当皇上; als nicht-technisch geschlossen. Create ~21h später. Homepage openclaw.ai. Webhook SSRF #317/#318.`,
		},
		it: {
			description: `Edict è un multi-agent OpenClaw da corte con board live. Repo cft0808/edict, soprattutto Python, ~16k stelle. Spesso accostato a CrewAI e AutoGen.`,
			reason: `Gli utenti dicono che i ministeri restano offline. #251 ha proprio quel titolo; primo post: offline spesso, lentissimo, stato bloccato. Lite credito #55/#94 con 当皇上; chiuse come non tecniche. Create ~21h dopo. Homepage openclaw.ai. Webhook SSRF #317/#318.`,
		},
		ja: {
			description: `Edict は OpenClaw 上のマルチエージェントで、三省六部＋看板。リポジトリ cft0808/edict、Python 中心。作成後数か月で star 約 1.6 万。CrewAI や AutoGen と比較されることが多い。`,
			reason: `ユーザーの言い方がそのまま残っている。#251 タイトルは「经常三省六部不在线」。本文：よくオフライン、実行がとても遅い、状態が回らない。#55/#94 で当皇上側がコピー・未クレジットを主張、Edict は非技術でクローズ。作成は約 21 時間後。homepage は openclaw.ai。webhook は #317/#318。`,
		},
		ko: {
			description: `Edict는 OpenClaw 위 멀티 에이전트, 三省六部+칸반. 저장소 cft0808/edict, Python 중심. 생성 후 수개월에 스타 약 1.6만. CrewAI·AutoGen과 자주 비교됨.`,
			reason: `유저 말이 더 세다. #251 제목이 「经常三省六部不在线」. 본문: 자주 오프라인, 실행 매우 느림, 상태가 안 돌아감. #55/#94에서 당황상 쪽이 베끼고 출처 없다고 했고 Edict는 비기술로 닫음. 생성 약 21시간 뒤. homepage는 openclaw.ai. webhook #317/#318.`,
		},
		es: {
			description: `Edict es un multi-agente OpenClaw de corte con tablero en vivo. Repo cft0808/edict, sobre todo Python, ~16k estrellas. A menudo lo comparan con CrewAI y AutoGen.`,
			reason: `La gente dice que los ministerios se quedan offline. #251 se titula así; primer post: offline mucho, muy lento, el estado no avanza. Pelea de crédito #55/#94 con 当皇上; cerradas como no técnicas. Create ~21h después. Homepage openclaw.ai. Webhook SSRF #317/#318.`,
		},
	},
	danghuangshang: {
		zh: {
			description: `「当皇上」是一套 OpenClaw 的教程和配置，仓库是 wanikua/danghuangshang。它想让你在 Discord 或飞书里一键登基：内阁、六部排好，也可以再挂写小说的助手。宣传说五分钟就能上手，agent 十八个以上，skills 六十多项。`,
			reason: `官名好玩，装起来却不轻松。Issue #144 里，有人说 Docker 根本起不来，示例配置太旧，对不上镜像里的 openclaw。#131 里，唐的目录下塞着明的配置。allowBots 开错了，Discord 上的 bot 还会互相刷。同一周 Edict 也出来了，两边为署名公开吵过（#55）。两边各说各的，读者可以自己去点 issue。`,
		},
		de: {
			description: `„Dang Huang Shang“ ist OpenClaw-Tutorial+Config (wanikua/danghuangshang). Ein Befehl „Kaiser“ auf Discord/Feishu. Pitch: fünf Minuten, 18+ Agents, 60+ Skills.`,
			reason: `Install-Issues sind knallhart. #144: docker startet überhaupt nicht; Sample-Config zu alt für OpenClaw im Image. #131 falsche Dynastie-Datei. Bot-Sturm bei falschem allowBots. Credit-Streit mit Edict (#55). Wir listen nur, was schon gepostet ist.`,
		},
		it: {
			description: `«Dang Huang Shang» è tutorial+config OpenClaw (wanikua/danghuangshang). Un comando e sei «imperatore» su Discord/Feishu. Pitch: cinque minuti, 18+ agent, 60+ skill.`,
			reason: `Le issue di install sono dirette. #144: docker non parte proprio; sample troppo vecchio per OpenClaw nell’immagine. #131 file di dinastia sbagliato. Tempesta bot se allowBots è sbagliato. Lite credito con Edict (#55). Solo ciò che è già scritto online.`,
		},
		ja: {
			description: `「当皇上」は OpenClaw のチュートリアル＋設定（wanikua/danghuangshang）。ワンコマンド即位、Discord/Feishu に内閣・六部。宣伝は五分、agent 18+、skills 60+。`,
			reason: `インストール issue がそのまま口語。#144：docker 完全无法启动。sample が古くイメージ内 OpenClaw と合わない。#131 唐フォルダに明設定。allowBots ミスで bot 嵐。同週 Edict と #55 でクレジット争い。判決は書かない。issue に既にあることだけ。`,
		},
		ko: {
			description: `「당황상」은 OpenClaw 튜토리얼+설정(wanikua/danghuangshang). 원커맨드 즉위, Discord/Feishu에 내각·육부. 홍보 5분, 에이전트 18+, 스킬 60+.`,
			reason: `설치 이슈가 말 그대로다. #144: docker 完全无法启动. 샘플이 낡아 이미지 속 OpenClaw와 안 맞음. #131 Tang 경로에 Ming 설정. allowBots 잘못 켜면 봇 폭풍. 같은 주 Edict와 #55 출처 싸움. 판결 안 씀. 이미 올라온 말만.`,
		},
		es: {
			description: `«Dang Huang Shang» es tutorial+config OpenClaw (wanikua/danghuangshang). Un comando y «emperador» en Discord/Feishu. Pitch: cinco minutos, 18+ agentes, 60+ skills.`,
			reason: `Las issues de install van al grano. #144: docker no arranca en absoluto; el sample es viejo y no pega con OpenClaw en la imagen. #131 archivo de dinastía equivocado. Tormenta de bots si allowBots está mal. Pelea de crédito con Edict (#55). Solo lo ya publicado.`,
		},
	},

};

export function getSlopCopy(
	id: string,
	locale: Locale,
	fallback: SlopCopy,
): SlopCopy {
	if (locale === 'en') return fallback;
	return slopCopy[id]?.[locale] ?? fallback;
}

export type LocalizedReference = {
	title: string;
	url: string;
	summary: string;
	source?: string;
	publishedAt?: Date;
};

export type LocalizedSlop = SlopCopy & {
	/** Translated body as HTML when overlay exists for locale */
	bodyHtml?: string;
	/** EN body still rendered via content collection when bodyHtml missing */
	hasLocalizedBody: boolean;
	references: LocalizedReference[];
};

type BaseRef = {
	title: string;
	url: string;
	summary: string;
	source?: string;
	publishedAt?: Date;
};

/** Merge description/reason/body/refs overlays for a locale. EN uses collection source. */
export function getLocalizedSlop(
	id: string,
	locale: Locale,
	fallback: SlopCopy,
	baseReferences: BaseRef[],
): LocalizedSlop {
	const copy = getSlopCopy(id, locale, fallback);
	if (locale === 'en') {
		return {
			...copy,
			hasLocalizedBody: true,
			references: baseReferences,
		};
	}
	const extra = extraCopy[id]?.[locale];
	const references = baseReferences.map((ref) => {
		const over = extra?.references?.[ref.url];
		return over
			? { ...ref, title: over.title, summary: over.summary }
			: ref;
	});
	return {
		...copy,
		bodyHtml: extra?.body ? mdToHtml(extra.body) : undefined,
		hasLocalizedBody: Boolean(extra?.body),
		references,
	};
}
