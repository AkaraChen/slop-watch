import type { Locale } from './config';

export type UiKey =
	| 'siteTitle'
	| 'siteTagline'
	| 'siteDescription'
	| 'navCatalog'
	| 'navAbout'
	| 'catalogHeading'
	| 'catalogLead'
	| 'referencesCount'
	| 'featuredImageAlt'
	| 'openPrimaryLink'
	| 'whyListed'
	| 'referencesHeading'
	| 'aboutTitle'
	| 'aboutMetaDescription'
	| 'aboutP1'
	| 'aboutP2'
	| 'aboutP3'
	| 'aboutP4'
	| 'aboutStandardsLink'
	| 'navStandards'
	| 'standardsTitle'
	| 'standardsMetaDescription'
	| 'standardsH1'
	| 'standardsP1'
	| 'standardsP2'
	| 'standardsP3'
	| 'standardsP4'
	| 'footer'
	| 'specimenTitle'
	| 'language'
	| 'hardSignals'
	| 'bodyFallbackNote'
	| 'lastVerified'
	| 'copyLink'
	| 'copied'
	| 'theme'
	| 'themeLight'
	| 'themeDark'
	| 'themeSystem'
	| 'notFoundTitle'
	| 'notFoundBody'
	| 'goHome'
	| 'filterAll'
	| 'filterLabel'
	| 'filterEmpty'
	| 'relatedHeading'
	| 'weeklyFeedLink'
	| 'allFeedLink';

const en: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI Slop, catalogued with receipts.',
	siteDescription:
		'Public landfill of AI products that ship hard, break harder, and leave CVEs, issue swamps, and vibe-coded wreckage. Named. Linked. Documented.',
	navCatalog: 'Catalog',
	navAbout: 'About',
	navStandards: 'Standards',
	catalogHeading: 'Catalog of AI Slop',
	catalogLead:
		'Each specimen has a name, icon, featured image, primary link, description, selection reason, and receipts (references).',
	referencesCount: '{n} references',
	featuredImageAlt: '{name} featured image',
	openPrimaryLink: 'Open primary link ↗',
	whyListed: 'Why it made the list',
	referencesHeading: 'References ({n})',
	aboutTitle: 'About · Slop Watch',
	aboutMetaDescription:
		'What Slop Watch is, and why “slop” here means quality trash with receipts — not a promo reel.',
	aboutP1:
		'Slop Watch is a public landfill catalog of <strong>AI Slop</strong> — products and stacks where quality collapsed: authors cannot stand behind the code, upgrades break for sport, and production incidents / CVEs keep the lights interesting. We name the specimens so the pattern is visible, not just the vibes.',
	aboutP2:
		'This is <strong>not</strong> a soft “generative mush showcase” and not an endorsement archive. Description says what it is; reason says why it is garbage; references are the receipts (issues, advisories, failure posts).',
	aboutP3:
		'Each entry is a specimen card: name, icon, cover image, primary link, a short description, a selection reason, and a stack of supporting references.',
	aboutP4:
		'We curate for evidence, not hype. If the public trail of breakage, security debt, or unowned quality is thin, it does not belong here.',
	aboutStandardsLink: 'Read our inclusion standards →',
	standardsTitle: 'Inclusion standards · Slop Watch',
	standardsMetaDescription:
		'How Slop Watch chooses specimens: public evidence of quality collapse, not hype or endorsement.',
	standardsH1: 'Inclusion standards',
	standardsP1:
		'We list <strong>AI Slop</strong> — products or stacks where quality is unowned: constant breaking, production incidents, security debt, or marketing that outruns a verifiable engineering bar.',
	standardsP2:
		'<strong>In:</strong> named products with public receipts — issues, advisories, CVEs, credible failure reports. Description stays neutral; reason explains why it is garbage; references carry the proof.',
	standardsP3:
		'<strong>Out:</strong> promo roundups, anonymous “N% leak” vibes with no product, soft showcases, or entries whose only signal is star count or viral praise.',
	standardsP4:
		'Facts stay frozen (links, issue/CVE IDs, measured counts). Tone may be sharp; evidence must still stand. If the public trail is thin, it does not belong here.',
	footer: '© {year} Slop Watch. Catalog of AI Slop.',
	specimenTitle: '{name} · AI Slop specimen · Slop Watch',
	language: 'Language',
	hardSignals: 'Hard signals',
	bodyFallbackNote: 'Body text below is shown in English until a full translation is available.',
	lastVerified: 'Evidence checked {date}',
	copyLink: 'Copy link',
	copied: 'Copied',
	theme: 'Theme',
	themeLight: 'Light',
	themeDark: 'Dark',
	themeSystem: 'System',
	notFoundTitle: 'Page not found',
	notFoundBody: 'That path is not in the landfill catalog. It may have been moved, or it never existed.',
	goHome: 'Back to catalog',
	filterAll: 'All',
	filterLabel: 'Filter by tag',
	filterEmpty: 'No specimens match this tag.',
	relatedHeading: 'Related specimens',
	weeklyFeedLink: 'This week (RSS)',
	allFeedLink: 'Full catalog (RSS)',
};

const zh: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI 垃圾档案，带收据。',
	siteDescription:
		'公开的 AI 产品垃圾填埋场：猛推上线、猛烈崩溃，留下 CVE、issue 堰塞湖与 vibe coding 残骸。有名有链接有文档。',
	navCatalog: '目录',
	navAbout: '关于',
	navStandards: '收录标准',
	catalogHeading: 'AI Slop 目录',
	catalogLead: '每条标本含名称、图标、封面、主链接、描述、入选理由与参考（收据）。',
	referencesCount: '{n} 条参考',
	featuredImageAlt: '{name} 封面图',
	openPrimaryLink: '打开主链接 ↗',
	whyListed: '为何上榜',
	referencesHeading: '参考资料（{n}）',
	aboutTitle: '关于 · Slop Watch',
	aboutMetaDescription: 'Slop Watch 是什么，以及这里的 slop 为何是「有证据的质量垃圾」而不是安利合集。',
	aboutP1:
		'Slop Watch 是公开的 <strong>AI 垃圾</strong> 档案：代码质量崩盘、作者兜不住、升级即 breaking、线上事故 / CVE 不断的产品。我们给标本命名，让模式可见，而不只是情绪。',
	aboutP2:
		'这<strong>不是</strong>温和的「生成式糊弄展示」，也不是背书库。描述说清它是什么；理由说明为何是垃圾；参考资料是收据（issue、通告、翻车帖）。',
	aboutP3:
		'每条都是标本卡：名称、图标、封面、主链接、简短描述、入选理由，以及一摞支撑用的参考资料。',
	aboutP4:
		'我们按证据收录，不按热度。若公开可核验的崩坏、安全债或质量失控痕迹太薄，这里就不收。',
	aboutStandardsLink: '阅读收录标准 →',
	standardsTitle: '收录标准 · Slop Watch',
	standardsMetaDescription: 'Slop Watch 如何选标本：公开可核验的质量崩坏证据，而不是热度或安利。',
	standardsH1: '收录标准',
	standardsP1:
		'我们刊登 <strong>AI Slop</strong>——质量无人兜底的产品或栈：持续 breaking、线上事故、安全债，或营销远远压过可核验的工程水准。',
	standardsP2:
		'<strong>收：</strong>有名有姓、有公开收据的产品——issue、安全通告、CVE、可信翻车报告。描述保持中性；理由说明为何是垃圾；参考资料承担证明。',
	standardsP3:
		'<strong>不收：</strong>安利合集、无具名产品的「百分之 N 泄漏」氛围帖、软性展示，或唯一信号只是星标/病毒赞美的条目。',
	standardsP4:
		'事实字段冻结（链接、issue/CVE 编号、可计量数字）。语气可以毒，证据必须站得住。公开痕迹太薄，这里就不收。',
	footer: '© {year} Slop Watch. AI 垃圾目录。',
	specimenTitle: '{name} · AI 垃圾标本 · Slop Watch',
	language: '语言',
	hardSignals: '硬信号',
	bodyFallbackNote: '正文暂以英文显示，完整翻译后续补充。',
	lastVerified: '证据核验 {date}',
	copyLink: '复制链接',
	copied: '已复制',
	theme: '主题',
	themeLight: '浅色',
	themeDark: '深色',
	themeSystem: '跟随系统',
	notFoundTitle: '页面不存在',
	notFoundBody: '目录里没有这个地址。可能已迁移，或从未收录。',
	goHome: '返回目录',
	filterAll: '全部',
	filterLabel: '按标签筛选',
	filterEmpty: '没有匹配该标签的标本。',
	relatedHeading: '同类标本',
	weeklyFeedLink: '本周新 slop（RSS）',
	allFeedLink: '完整目录（RSS）',
};

const de: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI-Schrott, katalogisiert mit Belegen.',
	siteDescription:
		'Die öffentliche Müllhalde für KI-Produkte, die hart shippen, härter brechen und CVEs, Issue-Sümpfe und vibe-codierte Trümmer hinterlassen. Benannt. Verlinkt. Dokumentiert.',
	navCatalog: 'Katalog',
	navAbout: 'Über uns',
	navStandards: 'Standards',
	catalogHeading: 'Katalog des AI Slop',
	catalogLead:
		'Jedes Exemplar hat Name, Icon, Bild, Primärlink, Beschreibung, Auswahlgrund und Belege (Referenzen).',
	referencesCount: '{n} Referenzen',
	featuredImageAlt: 'Titelbild von {name}',
	openPrimaryLink: 'Primärlink öffnen ↗',
	whyListed: 'Warum es auf der Liste steht',
	referencesHeading: 'Referenzen ({n})',
	aboutTitle: 'Über · Slop Watch',
	aboutMetaDescription:
		'Was Slop Watch ist und warum „slop“ hier Qualitätsmüll mit Belegen meint — keine Werberolle.',
	aboutP1:
		'Slop Watch ist ein öffentlicher Müllkatalog von <strong>AI Slop</strong> — Produkte, bei denen Qualität kollabiert: Autoren stehen nicht hinter dem Code, Upgrades brechen absichtlich, Incidents/CVEs bleiben spannend. Wir benennen Exemplare, damit das Muster sichtbar wird.',
	aboutP2:
		'Das ist <strong>kein</strong> weiches „Generative-Mush-Showcase“ und kein Endorsement-Archiv. Beschreibung sagt was es ist; Grund sagt warum Müll; Referenzen sind die Belege.',
	aboutP3:
		'Jeder Eintrag ist eine Exemplarkarte: Name, Icon, Titelbild, Primärlink, Kurzbeschreibung, Auswahlgrund und ein Stapel stützender Referenzen.',
	aboutP4:
		'Wir kuratieren nach Belegen, nicht nach Hype. Fehlt die öffentliche Spur von Bruch, Security-Schuld oder herrenloser Qualität, gehört es nicht hierher.',
	aboutStandardsLink: 'Aufnahmekriterien lesen →',
	standardsTitle: 'Aufnahmekriterien · Slop Watch',
	standardsMetaDescription:
		'Wie Slop Watch Exemplare wählt: öffentliche Belege für Qualitätskollaps — kein Hype, keine Werbung.',
	standardsH1: 'Aufnahmekriterien',
	standardsP1:
		'Wir listen <strong>AI Slop</strong> — Produkte oder Stacks ohne Ownership von Qualität: Dauer-Breaking, Produktionsvorfälle, Security-Schuld oder Marketing über der belegbaren Engineering-Latte.',
	standardsP2:
		'<strong>Rein:</strong> benannte Produkte mit öffentlichen Belegen — Issues, Advisories, CVEs, glaubwürdige Ausfallberichte. Beschreibung neutral; Grund erklärt den Müll; Referenzen tragen den Beweis.',
	standardsP3:
		'<strong>Raus:</strong> Promo-Listen, anonyme „N%-Leak“-Stimmung ohne Produkt, weiche Showcases oder Einträge, deren einziges Signal Sterne oder virales Lob ist.',
	standardsP4:
		'Fakten bleiben eingefroren (Links, Issue/CVE-IDs, messbare Zahlen). Ton darf scharf sein; Belege müssen stehen. Dünne öffentliche Spur? Gehört nicht hierher.',
	footer: '© {year} Slop Watch. Katalog von AI Slop.',
	specimenTitle: '{name} · AI-Slop-Exemplar · Slop Watch',
	language: 'Sprache',
	hardSignals: 'Harte Signale',
	bodyFallbackNote: 'Der Fließtext unten ist vorerst auf Englisch, bis eine volle Übersetzung vorliegt.',
	lastVerified: 'Belege geprüft {date}',
	copyLink: 'Link kopieren',
	copied: 'Kopiert',
	theme: 'Design',
	themeLight: 'Hell',
	themeDark: 'Dunkel',
	themeSystem: 'System',
	notFoundTitle: 'Seite nicht gefunden',
	notFoundBody: 'Dieser Pfad steht nicht im Katalog. Verschoben oder nie vorhanden.',
	goHome: 'Zurück zum Katalog',
	filterAll: 'Alle',
	filterLabel: 'Nach Tag filtern',
	filterEmpty: 'Keine Exemplare mit diesem Tag.',
	relatedHeading: 'Ähnliche Exemplare',
	weeklyFeedLink: 'Diese Woche (RSS)',
	allFeedLink: 'Gesamtkatalog (RSS)',
};

const it: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI Slop, catalogato con prove.',
	siteDescription:
		'La discarica pubblica di prodotti AI che spediscono forte, si rompono più forte e lasciano CVE, paludi di issue e rottami vibe-coded. Nominati. Collegati. Documentati.',
	navCatalog: 'Catalogo',
	navAbout: 'Info',
	navStandards: 'Criteri',
	catalogHeading: 'Catalogo di AI Slop',
	catalogLead:
		'Ogni esemplare ha nome, icona, immagine, link principale, descrizione, motivo di selezione e prove (riferimenti).',
	referencesCount: '{n} riferimenti',
	featuredImageAlt: 'Immagine in evidenza di {name}',
	openPrimaryLink: 'Apri link principale ↗',
	whyListed: 'Perché è in lista',
	referencesHeading: 'Riferimenti ({n})',
	aboutTitle: 'Info · Slop Watch',
	aboutMetaDescription:
		'Cos’è Slop Watch e perché qui “slop” significa spazzatura di qualità con prove — non un reel promo.',
	aboutP1:
		'Slop Watch è un catalogo-discarica pubblica di <strong>AI Slop</strong>: prodotti dove la qualità è collassata, breaking continui, incidenti e CVE. Nominiamo gli esemplari perché il pattern sia visibile.',
	aboutP2:
		'<strong>Non</strong> è una vetrina soft né un archivio di endorsement. Descrizione = cos’è; motivo = perché è spazzatura; riferimenti = prove.',
	aboutP3:
		'Ogni voce è una scheda-esemplare: nome, icona, copertina, link principale, breve descrizione, motivo di selezione e un mucchio di riferimenti a supporto.',
	aboutP4:
		'Curiamo per evidenza, non per hype. Se la scia pubblica di rotture, debito di sicurezza o qualità senza ownership è sottile, non entra qui.',
	aboutStandardsLink: 'Leggi i criteri di inclusione →',
	standardsTitle: 'Criteri di inclusione · Slop Watch',
	standardsMetaDescription:
		'Come Slop Watch sceglie gli esemplari: prove pubbliche di collasso di qualità, non hype o endorsement.',
	standardsH1: 'Criteri di inclusione',
	standardsP1:
		'Elenciamo <strong>AI Slop</strong> — prodotti o stack senza ownership della qualità: breaking continui, incidenti, debito di sicurezza o marketing oltre il listone ingegneristico verificabile.',
	standardsP2:
		'<strong>Dentro:</strong> prodotti nominati con ricevute pubbliche — issue, advisory, CVE, report di fallimento credibili. Descrizione neutrale; motivo spiega la spazzatura; i riferimenti portano la prova.',
	standardsP3:
		'<strong>Fuori:</strong> roundup promo, vibe “N% leak” senza prodotto, showcase soft, o voci il cui unico segnale è stelle o lode virale.',
	standardsP4:
		'I fatti restano congelati (link, ID issue/CVE, conteggi misurabili). Il tono può essere tagliente; le prove devono reggere. Scia pubblica sottile? Non entra.',
	footer: '© {year} Slop Watch. Catalogo di AI Slop.',
	specimenTitle: '{name} · esemplare AI Slop · Slop Watch',
	language: 'Lingua',
	hardSignals: 'Segnali duri',
	bodyFallbackNote: 'Il corpo del testo sotto è in inglese finché non c’è una traduzione completa.',
	lastVerified: 'Prove verificate {date}',
	copyLink: 'Copia link',
	copied: 'Copiato',
	theme: 'Tema',
	themeLight: 'Chiaro',
	themeDark: 'Scuro',
	themeSystem: 'Sistema',
	notFoundTitle: 'Pagina non trovata',
	notFoundBody: 'Questo percorso non è nel catalogo. Forse è stato spostato o non è mai esistito.',
	goHome: 'Torna al catalogo',
	filterAll: 'Tutti',
	filterLabel: 'Filtra per tag',
	filterEmpty: 'Nessun esemplare con questo tag.',
	relatedHeading: 'Esemplari correlati',
	weeklyFeedLink: 'Questa settimana (RSS)',
	allFeedLink: 'Catalogo completo (RSS)',
};

const ja: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AIスロップを証拠付きでカタログ化。',
	siteDescription:
		'強硬に出荷し、より強硬に壊れ、CVE・issue沼・バイブコーディングの残骸を残すAI製品の公開埋め立て地。名前付き。リンク付き。文書化。',
	navCatalog: 'カタログ',
	navAbout: '概要',
	navStandards: '掲載基準',
	catalogHeading: 'AIスロップ・カタログ',
	catalogLead:
		'各標本には名前・アイコン・画像・主リンク・説明・選定理由・根拠（参考文献）があります。',
	referencesCount: '参考文献 {n} 件',
	featuredImageAlt: '{name} のメイン画像',
	openPrimaryLink: '主リンクを開く ↗',
	whyListed: '掲載理由',
	referencesHeading: '参考文献（{n}）',
	aboutTitle: '概要 · Slop Watch',
	aboutMetaDescription:
		'Slop Watchとは何か、ここでいうslopが宣伝ではなく証拠付きの品質ゴミである理由。',
	aboutP1:
		'Slop Watchは<strong>AIスロップ</strong>の公開カタログです。品質崩壊、作者が品質を担保できない、breaking、本番事故/CVE。パターンを可視化するために標本に名前を付けます。',
	aboutP2:
		'ソフトな「生成ムッシュのショーケース」でも宣伝アーカイブでも<strong>ありません</strong>。説明は何か、理由はなぜゴミか、参考文献は証拠です。',
	aboutP3:
		'各エントリは標本カードです。名前、アイコン、カバー、主リンク、短い説明、選定理由、そして根拠になる参考文献の束。',
	aboutP4:
		'熱量ではなく証拠で選びます。公開で追える破綻・セキュリティ負債・品質の放置が薄いなら、ここには載せません。',
	aboutStandardsLink: '掲載基準を読む →',
	standardsTitle: '掲載基準 · Slop Watch',
	standardsMetaDescription:
		'Slop Watchが標本を選ぶ方法：品質崩壊の公開証拠であり、熱量や宣伝ではない。',
	standardsH1: '掲載基準',
	standardsP1:
		'<strong>AIスロップ</strong>を掲載します——品質の所有がない製品やスタック：継続的な breaking、本番事故、セキュリティ負債、検証可能な工学水準を超えるマーケ。',
	standardsP2:
		'<strong>入れる：</strong>名前があり公開の領収書がある製品——issue、アドバイザリ、CVE、信頼できる失敗報告。説明は中立、理由はなぜゴミか、参考文献が証拠。',
	standardsP3:
		'<strong>入れない：</strong>宣伝まとめ、製品のない「N% 漏洩」雰囲気、ソフトなショーケース、星やバズ称賛だけが信号の項目。',
	standardsP4:
		'事実は凍結（リンク、issue/CVE 番号、測れる数字）。トーンは鋭くてよいが証拠は立つこと。公開の痕跡が薄いなら載せない。',
	footer: '© {year} Slop Watch. AIスロップのカタログ。',
	specimenTitle: '{name} · AIスロップ標本 · Slop Watch',
	language: '言語',
	hardSignals: 'ハードシグナル',
	bodyFallbackNote: '本文は完全翻訳まで英語で表示します。',
	lastVerified: '証拠確認 {date}',
	copyLink: 'リンクをコピー',
	copied: 'コピー済み',
	theme: 'テーマ',
	themeLight: 'ライト',
	themeDark: 'ダーク',
	themeSystem: 'システム',
	notFoundTitle: 'ページが見つかりません',
	notFoundBody: 'カタログにこのパスはありません。移動したか、未収録です。',
	goHome: 'カタログへ戻る',
	filterAll: 'すべて',
	filterLabel: 'タグで絞り込み',
	filterEmpty: 'このタグに一致する標本はありません。',
	relatedHeading: '関連する標本',
	weeklyFeedLink: '今週の新着（RSS）',
	allFeedLink: '全カタログ（RSS）',
};

const ko: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI 슬롭, 증거와 함께 목록화.',
	siteDescription:
		'세게 출시하고 더 세게 부서지며 CVE, 이슈 늪, 바이브 코딩 잔해를 남기는 AI 제품의 공개 매립지. 이름. 링크. 문서.',
	navCatalog: '목록',
	navAbout: '소개',
	navStandards: '수록 기준',
	catalogHeading: 'AI 슬롭 목록',
	catalogLead: '각 표본에는 이름, 아이콘, 이미지, 주 링크, 설명, 선정 이유, 근거(참고)가 있습니다.',
	referencesCount: '참고 {n}개',
	featuredImageAlt: '{name} 대표 이미지',
	openPrimaryLink: '주 링크 열기 ↗',
	whyListed: '왜 올랐는가',
	referencesHeading: '참고 자료 ({n})',
	aboutTitle: '소개 · Slop Watch',
	aboutMetaDescription:
		'Slop Watch가 무엇인지, 여기서 slop이 홍보가 아닌 증거 있는 품질 쓰레기인 이유.',
	aboutP1:
		'Slop Watch는 품질이 무너진 <strong>AI 슬롭</strong> 공개 목록입니다. 작성자가 코드를 감당하지 못하고, 업그레이드가 깨지며, 사고/CVE가 이어집니다. 패턴을 보이게 이름을 붙입니다.',
	aboutP2:
		'부드러운 생성 쇼케이스나 홍보 아카이브가 <strong>아닙니다</strong>. 설명은 무엇인지, 이유는 왜 쓰레기인지, 참고는 영수증입니다.',
	aboutP3:
		'각 항목은 표본 카드입니다. 이름, 아이콘, 커버, 주 링크, 짧은 설명, 선정 이유, 그리고 뒷받침 참고 자료 묶음.',
	aboutP4:
		'유행이 아니라 증거로 고릅니다. 공개적으로 따라갈 수 있는 붕괴·보안 부채·방치된 품질의 흔적이 얇으면 여기 올리지 않습니다.',
	aboutStandardsLink: '수록 기준 읽기 →',
	standardsTitle: '수록 기준 · Slop Watch',
	standardsMetaDescription:
		'Slop Watch가 표본을 고르는 방식: 품질 붕괴의 공개 증거이지 유행이나 홍보가 아님.',
	standardsH1: '수록 기준',
	standardsP1:
		'<strong>AI 슬롭</strong>을 싣습니다—품질을 책임질 주인이 없는 제품/스택: 계속되는 breaking, 프로덕션 사고, 보안 부채, 검증 가능한 엔지니어링 기준을 넘는 마케팅.',
	standardsP2:
		'<strong>수록:</strong> 이름 있는 제품과 공개 영수증—이슈, 권고, CVE, 신뢰할 수 있는 실패 보고. 설명은 중립, 이유는 왜 쓰레기인지, 참고가 증거.',
	standardsP3:
		'<strong>제외:</strong> 홍보 모음, 제품 없는 “N% 유출” 분위기, 소프트 쇼케이스, 스타나 바이럴 칭찬만 신호인 항목.',
	standardsP4:
		'사실은 고정(링크, issue/CVE 번호, 측정 가능한 숫자). 톤은 날카로워도 증거는 서야 합니다. 공개 흔적이 얇으면 여기 없습니다.',
	footer: '© {year} Slop Watch. AI 슬롭 목록.',
	specimenTitle: '{name} · AI 슬롭 표본 · Slop Watch',
	language: '언어',
	hardSignals: '하드 시그널',
	bodyFallbackNote: '본문은 전체 번역 전까지 영어로 표시됩니다.',
	lastVerified: '증거 확인 {date}',
	copyLink: '링크 복사',
	copied: '복사됨',
	theme: '테마',
	themeLight: '라이트',
	themeDark: '다크',
	themeSystem: '시스템',
	notFoundTitle: '페이지 없음',
	notFoundBody: '목록에 없는 경로입니다. 이동했거나 등록되지 않았습니다.',
	goHome: '목록으로',
	filterAll: '전체',
	filterLabel: '태그로 필터',
	filterEmpty: '이 태그와 일치하는 표본이 없습니다.',
	relatedHeading: '관련 표본',
	weeklyFeedLink: '이번 주 신규 (RSS)',
	allFeedLink: '전체 목록 (RSS)',
};

const es: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI Slop, catalogado con pruebas.',
	siteDescription:
		'El vertedero público de productos de IA que lanzan fuerte, se rompen más fuerte y dejan CVE, pantanos de issues y restos vibe-coded. Nombrados. Enlazados. Documentados.',
	navCatalog: 'Catálogo',
	navAbout: 'Acerca de',
	navStandards: 'Criterios',
	catalogHeading: 'Catálogo de AI Slop',
	catalogLead:
		'Cada ejemplar tiene nombre, icono, imagen, enlace principal, descripción, motivo de selección y pruebas (referencias).',
	referencesCount: '{n} referencias',
	featuredImageAlt: 'Imagen destacada de {name}',
	openPrimaryLink: 'Abrir enlace principal ↗',
	whyListed: 'Por qué está en la lista',
	referencesHeading: 'Referencias ({n})',
	aboutTitle: 'Acerca de · Slop Watch',
	aboutMetaDescription:
		'Qué es Slop Watch y por qué aquí “slop” significa basura de calidad con pruebas — no un reel promocional.',
	aboutP1:
		'Slop Watch es un catálogo-vertedero público de <strong>AI Slop</strong>: productos donde la calidad colapsó, breaking constantes, incidentes y CVE. Nombramos ejemplares para que el patrón sea visible.',
	aboutP2:
		'<strong>No</strong> es un escaparate suave ni un archivo de endorsements. Descripción = qué es; motivo = por qué es basura; referencias = pruebas.',
	aboutP3:
		'Cada entrada es una ficha de espécimen: nombre, icono, portada, enlace principal, descripción breve, motivo de selección y un montón de referencias de apoyo.',
	aboutP4:
		'Curamos por evidencia, no por hype. Si el rastro público de roturas, deuda de seguridad o calidad sin dueño es fino, no entra aquí.',
	aboutStandardsLink: 'Leer criterios de inclusión →',
	standardsTitle: 'Criterios de inclusión · Slop Watch',
	standardsMetaDescription:
		'Cómo Slop Watch elige especímenes: evidencia pública de colapso de calidad, no hype ni endorsement.',
	standardsH1: 'Criterios de inclusión',
	standardsP1:
		'Listamos <strong>AI Slop</strong> — productos o stacks sin dueño de la calidad: breaking constante, incidentes, deuda de seguridad o marketing por encima de un listón de ingeniería verificable.',
	standardsP2:
		'<strong>Entra:</strong> productos con nombre y recibos públicos — issues, avisos, CVE, reportes creíbles de fallo. Descripción neutra; motivo explica la basura; las referencias llevan la prueba.',
	standardsP3:
		'<strong>Fuera:</strong> recopilatorios promo, vibes de “fuga del N%” sin producto, escaparates suaves, o entradas cuyo único señal son estrellas o alabanza viral.',
	standardsP4:
		'Los hechos se congelan (enlaces, IDs de issue/CVE, conteos medibles). El tono puede ser afilado; la evidencia debe sostenerse. ¿Rastro público fino? No entra.',
	footer: '© {year} Slop Watch. Catálogo de AI Slop.',
	specimenTitle: '{name} · ejemplar AI Slop · Slop Watch',
	language: 'Idioma',
	hardSignals: 'Señales duras',
	bodyFallbackNote: 'El cuerpo del texto se muestra en inglés hasta que haya traducción completa.',
	lastVerified: 'Pruebas verificadas {date}',
	copyLink: 'Copiar enlace',
	copied: 'Copiado',
	theme: 'Tema',
	themeLight: 'Claro',
	themeDark: 'Oscuro',
	themeSystem: 'Sistema',
	notFoundTitle: 'Página no encontrada',
	notFoundBody: 'Esa ruta no está en el catálogo. Puede haberse movido o no existir.',
	goHome: 'Volver al catálogo',
	filterAll: 'Todos',
	filterLabel: 'Filtrar por etiqueta',
	filterEmpty: 'Ningún ejemplar con esta etiqueta.',
	relatedHeading: 'Ejemplares relacionados',
	weeklyFeedLink: 'Esta semana (RSS)',
	allFeedLink: 'Catálogo completo (RSS)',
};

const dictionaries: Record<Locale, Record<UiKey, string>> = {
	en,
	zh,
	de,
	it,
	ja,
	ko,
	es,
};

export function t(locale: Locale, key: UiKey, vars?: Record<string, string | number>): string {
	let value = dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
	if (vars) {
		for (const [k, v] of Object.entries(vars)) {
			value = value.replaceAll(`{${k}}`, String(v));
		}
	}
	return value;
}

export function ui(locale: Locale) {
	return dictionaries[locale] ?? dictionaries.en;
}
