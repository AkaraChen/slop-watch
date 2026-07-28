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
			description:
				'自托管个人 AI 助手：聊天应用驱动、多模型路由与 skills 生态——以病毒式增长闻名，也以不稳与事故闻名。GitHub 约 38 万星，同时 issue 堰塞。',
			reason:
				'典型质量垃圾。增长完全压过代码所有权：主仓约 6.6k open issues、反复 breaking 升级、网关/cron/记忆/静默完成失败，以及含一键 RCE（CVE-2026-25253）的安全债。产品被包装成私人操作员，用户与研究者持续记录事故。',
		},
		de: {
			description:
				'Self-hosted persönlicher KI-Assistent mit Chat-Apps, Multi-Modell-Routing und Skills — berühmt für virales Wachstum und ebenso für Instabilität. ~380k GitHub-Sterne bei passendem Issue-Berg.',
			reason:
				'Klassischer Qualitätsschrott. Wachstum überholte Code-Ownership: ~6,6k offene Issues, wiederholte Breaking-Upgrades, Gateway/Cron/Memory/stille Task-Fails und schwere Security-Schuld inkl. One-Click-RCE (CVE-2026-25253).',
		},
		it: {
			description:
				'Assistente AI personale self-hosted via chat, multi-modello e skills — famoso per la crescita virale e altrettanto per l’instabilità. ~380k stelle GitHub e un pari pantano di issue.',
			reason:
				'Spazzatura di qualità classica. La crescita ha superato la ownership del codice: ~6,6k issue aperte, upgrade breaking, fallimenti gateway/cron/memoria/task silenti e debito di sicurezza con RCE one-click (CVE-2026-25253).',
		},
		ja: {
			description:
				'チャットアプリ駆動のセルフホスト個人AIアシスタント。マルチモデルとスキル生態——バイラル成長と不安定さで有名。GitHub約38万スターとissueの堰。',
			reason:
				'典型的な品質スロップ。成長がコード品質の所有を上回った：約6.6k open issues、繰り返すbreaking、ゲートウェイ/cron/メモリ/黙って完了、およびワンクリックRCE（CVE-2026-25253）などのセキュリティ負債。',
		},
		ko: {
			description:
				'채팅 앱 제어, 멀티 모델, 스킬 생태계의 셀프호스트 개인 AI 어시스턴트—바이럴 성장과 불안정으로 유명. GitHub 약 38만 스타와 이슈 늪.',
			reason:
				'전형적 품질 쓰레기. 성장이 코드 소유권을 압도: 약 6.6k open issues, 반복 breaking, 게이트웨이/cron/메모리/조용한 실패, 원클릭 RCE(CVE-2026-25253) 등 보안 부채.',
		},
		es: {
			description:
				'Asistente AI personal self-hosted vía chat, multi-modelo y skills — famoso por el crecimiento viral y por la inestabilidad. ~380k estrellas y un pantano de issues.',
			reason:
				'Basura de calidad clásica. El crecimiento superó la ownership del código: ~6,6k issues abiertas, upgrades breaking, fallos de gateway/cron/memoria y deuda de seguridad con RCE de un clic (CVE-2026-25253).',
		},
	},
	moltbook: {
		zh: {
			description:
				'病毒式「AI agent 社交网」（OpenClaw 邻近）：agent 发帖评论私信，人类大多旁观。以 meme 速度建设并上线。',
			reason:
				'教科书式 vibe-coded 安全垃圾。创始人公开称几乎没手写代码、补丁交给 AI——生产 Supabase 后端大敞：客户端 JS 持有可读写密钥，可接管任意 agent，研究者拉出约 150 万 API token、数万邮箱与 agent 私信。',
		},
		de: {
			description:
				'Virales „Social Network für AI-Agenten“ (OpenClaw-nah): Agenten posten, kommentieren, DMen; Menschen schauen zu. Mit Meme-Tempo gebaut und geshappt.',
			reason:
				'Lehrbuch-vibe-codierter Security-Slop. Öffentlich „keine Zeile Code“, Patches an die KI — dann Produktions-Supabase weit offen: Client-Key mit Vollzugriff, Agent-Übernahme, ~1,5M Tokens und private DMs geleakt.',
		},
		it: {
			description:
				'Rete sociale virale per agenti AI (vicina a OpenClaw): post, commenti e DM degli agenti mentre gli umani guardano. Spedita a velocità meme.',
			reason:
				'Security slop vibe-coded da manuale. Quasi zero codice a mano, patch affidate all’AI — backend Supabase aperto: chiave client full R/W, takeover di qualsiasi agent, ~1,5M token e DM private.',
		},
		ja: {
			description:
				'バイラルな「AIエージェント向けSNS」（OpenClaw隣接）。エージェントが投稿し、人間は観戦。ミーム速度で出荷。',
			reason:
				'教科書的バイブコーディング・セキュリティスロップ。ほぼ手書きなし、パッチはAI任せ——本番Supabaseが全開：クライアント鍵でフルRW、任意エージェント乗っ取り、約150万トークンと私信漏洩。',
		},
		ko: {
			description:
				'바이럴 “AI 에이전트 SNS”(OpenClaw 인접). 에이전트가 게시·댓글·DM, 인간은 구경. 밈 속도로 출시.',
			reason:
				'교과서적 바이브코딩 보안 슬롭. 손코딩 거의 없음, 패치는 AI에 맡김—프로덕션 Supabase 개방: 클라이언트 키 전권, 임의 에이전트 탈취, 약 150만 토큰·비공개 DM 유출.',
		},
		es: {
			description:
				'Red social viral para agentes de IA (cercana a OpenClaw): los agentes publican y chatean; los humanos miran. Envío a velocidad meme.',
			reason:
				'Slop de seguridad vibe-coded de manual. Casi sin código a mano, parches a la IA — Supabase de producción abierto: clave cliente con R/W total, takeover de agentes, ~1,5M tokens y DMs filtrados.',
		},
	},
	'scriptc': {
		zh: {
			description:
				'Vercel Labs 的 TypeScript→原生编译器：经 C 中间层，生成无 Node/V8 运行时的二进制——与 Native SDK 同波次上线。',
			reason:
				'崭新编译器已有 demo 级毛边：Windows 跑不顺、clang 失败、FFI 静默错码构建却绿、动态 re-export 无诊断——而 X 上全是「TS 变原生、冷启动消失」的互动帖。口号与工具链可靠性之间的缝隙即是 slop。',
		},
		de: {
			description:
				'TypeScript-zu-Native-Compiler von Vercel Labs über C-Zwischenstufe, Binaries ohne Node/V8 — gleiche Welle wie Native SDK.',
			reason:
				'Frischer Compiler mit Demo-Kanten: Windows bricht, clang failt, stille FFI-Bugs (grün bauen, rot laden), dynamische Re-Exports ohne Diagnostik — während X „TS wird nativ“ memed. Die Lücke ist der Slop.',
		},
		it: {
			description:
				'Compilatore TypeScript→nativo di Vercel Labs via C intermedio, binari senza Node/V8 — stessa ondata del Native SDK.',
			reason:
				'Drop fresco con bordi da demo: Windows rotto, clang che fallisce, bug FFI silenziosi, re-export dinamici senza diagnostica — mentre su X dilaga “TS nativo”. Quel gap è lo slop.',
		},
		ja: {
			description:
				'Vercel LabsのTypeScript→ネイティブコンパイラ。C中間経由でNode/V8なしバイナリ。Native SDKと同波。',
			reason:
				'出たばかりでデモ品質：Windows不可、clang失敗、FFIが黙って壊れる、診断なしのre-export——Xは「TSがネイティブに」一色。この差がスロップ。',
		},
		ko: {
			description:
				'Vercel Labs TypeScript→네이티브 컴파일러. C 중간 경유, Node/V8 없는 바이너리. Native SDK와 같은 파동.',
			reason:
				'갓 나온 데모급 모서리: Windows 실패, clang 오류, 조용한 FFI 버그, 진단 없는 re-export—X는 “TS 네이티브” 밈. 그 간극이 슬롭.',
		},
		es: {
			description:
				'Compilador TypeScript→nativo de Vercel Labs vía C intermedio, binarios sin Node/V8 — misma ola que Native SDK.',
			reason:
				'Drop fresco con bordes de demo: Windows roto, clang falla, FFI silenciosos, re-exports sin diagnóstico — mientras X memeá “TS nativo”. Esa brecha es el slop.',
		},
	},
	'vercel-labs-native': {
		zh: {
			description:
				'Vercel Labs 原生桌面工具包：声明式 UI + TypeScript 编向原生二进制，被硬推成 Electron 反派。',
			reason:
				'早期平台垃圾裹成成品 Electron 杀手。公论卖「无 WebView / 无 JS 运行时」，issue 里却是焦点、终端、WebView 可观测性、布局旋钮等基础能力仍坏。星标与 agent 自动化营销压过质量门槛。',
		},
		de: {
			description:
				'Vercel-Labs-Toolkit für native Desktop-Apps mit deklarativer UI und TypeScript Richtung Native — hart als Anti-Electron verkauft.',
			reason:
				'Frühe Plattform als fertiger Electron-Killer verpackt. Marketing „kein WebView/kein JS“, Tracker voller Basis-Löcher (Fokus, Terminals, WebView-Observability). Star-Velocity > Qualitätslatte.',
		},
		it: {
			description:
				'Toolkit Vercel Labs per desktop nativo: UI dichiarativa e TypeScript verso binari nativi — venduto come anti-Electron.',
			reason:
				'Piattaforma early vestita da killer di Electron. Pitch “no WebView/no JS”, issue piene di buchi base (focus, terminali, WebView). Stelle > bar di qualità.',
		},
		ja: {
			description:
				'Vercel Labsのネイティブデスクトップキット。宣言的UIとTypeScript→ネイティブ。Electron殺しとして売られる。',
			reason:
				'未成熟な基盤を完成品のように見せるスロップ。「WebViewなし/JSなし」と売りつつissueはフォーカス・端末・観測性など基本欠落。スター速度が品質を追い越す。',
		},
		ko: {
			description:
				'Vercel Labs 네이티브 데스크톱 툴킷. 선언적 UI와 TypeScript→네이티브. Electron 대항마로 세일즈.',
			reason:
				'초기 플랫폼을 완성품처럼 포장한 슬롭. “WebView/JS 없음” 마케팅 뒤 이슈는 포커스·터미널 등 기본 구멍. 스타 속도 > 품질 기준.',
		},
		es: {
			description:
				'Toolkit de Vercel Labs para apps de escritorio nativas: UI declarativa y TypeScript hacia nativo — vendido como anti-Electron.',
			reason:
				'Plataforma temprana disfrazada de matador de Electron. Pitch “sin WebView/sin JS”, issues llenos de huecos básicos. Estrellas > listón de calidad.',
		},
	},
	zerolang: {
		zh: {
			description:
				'Vercel Labs 实验性「给 Agent 用的」语言：图原生程序库、.0 投影、agent patch/query，而非文本 diff。面向原生二进制与 agent 友好诊断。',
			reason:
				'与 scriptc/native 同波次的重量级 agent 工具链垃圾。话术是 agent 编辑语义图而非脆弱文本——公开 tracker 与 18 bug 审计却显示默认 macOS 宿主上的错码与健全性漏洞（i64 比较发成 32 位 CMP、栈帧静默截断 segfault、动态数组 set 清掉 borrow）。社区 issue #181 标题直译为「低代码质量。别在你机器上跑」；维护者认账并说在招人。知乎长文进一步记录 agent 驱动的 thrash（公开吐槽后整棵 compiler-zero 树被删）、time/rand/fs 等被砸进 IR 而非正经 runtime、所谓 runtime 模块主要只覆盖 http/json 而硬编码仍在、所有权叙事配上薄薄的 checker 体量——效果处理器等「时髦特性」盖在喜剧级管线上。当你的 pitch 是「过期哈希写入前拒绝」而 #425 是「错误的模块哈希比较」，笑点自己写完了。',
		},
		de: {
			description:
				'Experimentelle „Programmiersprache für Agenten“ von Vercel Labs: graph-native DB, .0-Projektionen, Agent-Patch/Query statt Text-Diffs.',
			reason:
				`Schwergewichtiger Agent-Toolchain-Slop derselben Labs-Welle wie scriptc/native. Pitch: Agents editieren semantische Graphen, nicht fragilen Text — Tracker und 18-Bug-Audit zeigen Wrong-Code/Soundness auf dem Default-macOS-Host (i64 als 32-bit CMP, stille Frame-Trunkierung → SIGSEGV, Borrow-Löcher). Issue #181 heißt wörtlich „Low code quality. Don't run this on your machine“; Maintainer acknowledged und sprechen von Hiring. Chinesische PL-Deep-Dives (Zhihu) belegen agent-getriebenes Thrash (ganze Bäume wie compiler-zero nach Kritik gelöscht), Stdlib-Primitive (time/rand/fs) in die IR gehämmert statt echtem Runtime, ein „runtime“-Modul, das vor allem http/json abdeckt während Hardcoding bleibt, und Ownership-Story mit dünnem Checker — Mode-Features (Effect Handlers) auf Comedy-Plumbing. Pitch „stale hashes rejected before write“, #425 „incorrect module hash comparison“ — der Witz schreibt sich selbst.`,
		},
		it: {
			description:
				'Linguaggio sperimentale Vercel Labs “per agenti”: DB a grafo, proiezioni .0, patch/query agent invece di diff di testo.',
			reason:
				`Slop pesante di toolchain agent dalla stessa ondata Labs di scriptc/native. Pitch: gli agent editano grafi semantici, non testo fragile — tracker e audit a 18 bug mostrano wrong-code/soundness sul host macOS di default (i64 come CMP a 32 bit, frame troncati → SIGSEGV, buchi di borrow). Issue #181 si intitola letteralmente “Low code quality. Don't run this on your machine”; i maintainer riconoscono e parlano di hiring. Deep-dive cinesi (Zhihu) documentano thrash agent-driven (interi alberi come compiler-zero cancellati dopo critiche), primitive stdlib (time/rand/fs) inchiodate nell'IR invece di un runtime vero, un modulo “runtime” soprattutto http/json mentre l'hardcoding resta, e ownership con checker sottile — feature di moda (effect handlers) su plumbing da commedia. Pitch “stale hashes rejected before write”, #425 “incorrect module hash comparison”: la battuta si scrive da sola.`,
		},
		ja: {
			description:
				'Vercel Labsの実験的「エージェント向け」言語。グラフ原生、.0投影、テキストdiffではなくagent patch/query。',
			reason:
				`scriptc/native 同波の重量級 agent ツールチェーン・スロップ。売りは「テキストではなく意味グラフを編集」——公開 tracker と 18 バグ監査はデフォルト macOS ホスト上の誤コード/健全性穴（i64 が 32bit CMP、フレーム黙って切り詰め→SIGSEGV、borrow 穴）。issue #181 のタイトルは文字どおり「Low code quality. Don't run this on your machine」；メンテナは認めて採用中と述べた。知乎の長文はさらに agent 駆動 thrash（批判後に compiler-zero ツリー丸ごと削除）、time/rand/fs をまともな runtime ではなく IR に叩き込む、http/json 中心の「runtime」モジュールでもハードコードは残る、薄い checker 上の ownership 物語——effect handler などの流行機能がコメディ配管の上に乗っている、と記録する。pitch が「stale hash は書き込み前拒否」で #425 が「incorrect module hash comparison」なら、オチは自分で書ける。`,
		},
		ko: {
			description:
				'Vercel Labs 실험적 “에이전트용” 언어. 그래프 네이티브, .0 투영, 텍스트 diff 대신 agent patch/query.',
			reason:
				`scriptc/native과 같은 Labs 파동의 중량급 에이전트 툴체인 슬롭. 피치는 에이전트가 취약한 텍스트가 아니라 시맨틱 그래프를 편집한다는 것—공개 트래커와 18버그 감사는 기본 macOS 호스트의 wrong-code/사운드니스(i64가 32bit CMP, 프레임 묵시 절단→SIGSEGV, borrow 구멍)를 보여 준다. issue #181 제목은 말 그대로 “Low code quality. Don't run this on your machine”; 메인테이너는 인정하고 채용 중이라고 했다. 중국어 PL 딥다이브(Zhihu)는 에이전트 주도 thrash(비판 후 compiler-zero 트리 통째 삭제), time/rand/fs를 진짜 런타임이 아니라 IR에 박아 넣음, http/json 위주의 “runtime” 모듈인데 하드코딩은 남음, 얇은 checker 위의 ownership 스토리—effect handler 같은 유행 기능이 코미디 배관 위에 얹힘—을 추가로 기록한다. 피치가 “stale hash는 쓰기 전 거부”인데 #425가 “incorrect module hash comparison”이면 개그는 스스로 쓴다.`,
		},
		es: {
			description:
				'Lenguaje experimental de Vercel Labs “para agentes”: base en grafo, proyecciones .0, patch/query de agente en vez de diffs de texto.',
			reason:
				`Slop pesado de toolchain de agentes de la misma ola Labs que scriptc/native. Pitch: los agentes editan grafos semánticos, no texto frágil — el tracker y la auditoría de 18 bugs muestran wrong-code/soundness en el host macOS por defecto (i64 como CMP de 32 bits, frames truncados → SIGSEGV, agujeros de borrow). El issue #181 se titula literalmente “Low code quality. Don't run this on your machine”; los maintainers reconocen y hablan de hiring. Deep-dives chinos (Zhihu) documentan thrash impulsado por agentes (árboles enteros como compiler-zero borrados tras críticas), primitivas de stdlib (time/rand/fs) metidas en el IR en vez de un runtime real, un módulo “runtime” sobre todo http/json mientras el hardcoding sigue, y ownership con checker delgado — features de moda (effect handlers) sobre fontanería de comedia. Pitch “stale hashes rejected before write”, #425 “incorrect module hash comparison”: el chiste se escribe solo.`,
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
