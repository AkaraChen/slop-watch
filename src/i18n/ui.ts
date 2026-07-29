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
	siteTagline: 'A catalog of AI products that went wrong, with public proof',
	siteDescription:
		'Slop Watch lists AI products that shipped fast and then fell apart: broken upgrades, live outages, security holes, long issue queues. Each entry has a name, a main link, a short story of what went wrong, and links you can open and check.',
	navCatalog: 'Catalog',
	navAbout: 'About',
	navStandards: 'Standards',
	catalogHeading: 'AI products that went wrong',
	catalogLead:
		'Each card has a name, a picture, a main link, a short description, why it is here, and links that back the story up.',
	referencesCount: '{n} references',
	featuredImageAlt: 'Picture for {name}',
	openPrimaryLink: 'Open the main site ↗',
	whyListed: 'Why it is on this list',
	referencesHeading: 'References ({n})',
	aboutTitle: 'About Slop Watch',
	aboutMetaDescription:
		'Slop Watch is a public list of AI products that went wrong. We keep links and reports you can check yourself. This is not a promo page.',
	aboutP1:
		'Slop Watch is a public list of <strong>AI products that went wrong</strong>. Code that the authors cannot really stand behind. Upgrades that break. Outages and security holes that show up in public. We give each one a page so the pattern is easier to see.',
	aboutP2:
		'This is <strong>not</strong> a soft gallery of pretty demos, and it is not a list of products we recommend. The description says what the thing is. The reason says why it is on the list. The references are issues, security notes, and failure reports you can open yourself.',
	aboutP3:
		'Each page has a name, an icon, a cover picture, a main link, a short description, a reason it is here, and a pile of references underneath.',
	aboutP4:
		'We pick entries by public evidence, not by how loud the launch was. If there is little public trail of breakage or security trouble, it does not belong here.',
	aboutStandardsLink: 'Read how we choose entries →',
	standardsTitle: 'How we choose what goes on Slop Watch',
	standardsMetaDescription:
		'How Slop Watch picks entries: public proof of quality problems, outages, and security debt — not hype or star counts alone.',
	standardsH1: 'How we choose entries',
	standardsP1:
		'We list <strong>AI products that went wrong</strong>: software nobody really owns for quality, constant breakage, live outages, security debt, or marketing that runs far ahead of what the code can do.',
	standardsP2:
		'<strong>In:</strong> named products with public proof — issues, security notes, CVEs, credible failure reports. The description stays plain. The reason says why it is garbage. The references hold the proof.',
	standardsP3:
		'<strong>Out:</strong> pure promo roundups, anonymous scare posts with no named product, soft showcases, or pages whose only signal is star count or viral praise.',
	standardsP4:
		'Links, issue numbers, CVE IDs, and measured counts stay accurate. The tone can be sharp. The evidence still has to hold. If the public trail is thin, it does not go on the list.',
	footer: '© {year} Slop Watch. A catalog of AI products that went wrong.',
	specimenTitle: '{name} · on Slop Watch',
	language: 'Language',
	hardSignals: 'What people reported',
	bodyFallbackNote: 'The long text below is still in English until we finish a full translation.',
	lastVerified: 'Evidence checked {date}',
	copyLink: 'Copy link',
	copied: 'Copied',
	theme: 'Theme',
	themeLight: 'Light',
	themeDark: 'Dark',
	themeSystem: 'System',
	notFoundTitle: 'Page not found',
	notFoundBody: 'This address is not on the list. It may have moved, or it was never here.',
	goHome: 'Back to catalog',
	filterAll: 'All',
	filterLabel: 'Filter by tag',
	filterEmpty: 'Nothing matches this tag.',
	relatedHeading: 'Related entries',
	weeklyFeedLink: 'This week (RSS)',
	allFeedLink: 'Full catalog (RSS)',
};

const zh: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: '出问题的 AI 产品名录，附上能点开核对的公开材料',
	siteDescription:
		'Slop Watch 收录那些推得很猛、后来又摔得很重的 AI 产品：升级就坏、线上出事、安全漏洞、issue 堆成山。每条都有名字、主链接、出了什么事，以及你自己能点开看的公开链接。',
	navCatalog: '目录',
	navAbout: '关于',
	navStandards: '收录标准',
	catalogHeading: '出问题的 AI 产品',
	catalogLead: '每张卡片有名字、图、主链接、一段说明、为什么在这里，以及能核对的链接。',
	referencesCount: '{n} 条参考',
	featuredImageAlt: '{name} 的图片',
	openPrimaryLink: '打开主站 ↗',
	whyListed: '为什么在这里',
	referencesHeading: '参考资料（{n}）',
	aboutTitle: '关于 · Slop Watch',
	aboutMetaDescription:
		'Slop Watch 是一份公开名录，记下出问题的 AI 产品，并附上能核对的公开材料。这不是安利页。',
	aboutP1:
		'Slop Watch 是一份公开的 <strong>AI 产品问题名录</strong>。有的代码作者自己也兜不住，升级就坏，线上出事，安全漏洞也写在明面上。我们给每个产品单独一页，方便看出重复出现的问题。',
	aboutP2:
		'这<strong>不是</strong>软绵绵的展示厅，也不是推荐清单。描述写它是什么；理由写为什么上榜；参考资料是 issue、安全通告、翻车记录，你自己可以点开看。',
	aboutP3:
		'每一页都有名字、图标、封面图、主链接、一小段说明、上榜理由，以及底下的参考链接。',
	aboutP4:
		'我们按公开材料选人，不按声量大。如果公开场合几乎看不到崩坏或安全问题的痕迹，这里就不收。',
	aboutStandardsLink: '看我们怎么选 →',
	standardsTitle: '收录标准 · 我们怎么选上榜的产品',
	standardsMetaDescription:
		'Slop Watch 怎么选条目：只看质量问题、线上事故、安全债的公开材料，不单看热度或星标。',
	standardsH1: '收录标准',
	standardsP1:
		'我们收录 <strong>出了大问题的 AI 产品</strong>：质量没人真正兜底，老是坏，线上出事，安全债堆着，或者宣传远远跑在代码前面。',
	standardsP2:
		'<strong>收：</strong>有名有姓、有公开材料的产品——issue、安全通告、CVE、说得清的翻车记录。描述把事情说平；理由写为什么是垃圾；参考资料用来核对。',
	standardsP3:
		'<strong>不收：</strong>纯安利合集、说不清是哪个产品的吓人帖、软性展示，或者只剩星标和叫好声、没有别的公开材料的条目。',
	standardsP4:
		'链接、issue 号、CVE 号、能数清的数字要写准。话可以尖，证据还得站得住。公开痕迹太薄，就不进名录。',
	footer: '© {year} Slop Watch. 出问题的 AI 产品名录。',
	specimenTitle: '{name} · 收录于 Slop Watch',
	language: '语言',
	hardSignals: '大家反馈过的问题',
	bodyFallbackNote: '下面的长文暂时还是英文，译完了再换。',
	lastVerified: '证据核验 {date}',
	copyLink: '复制链接',
	copied: '已复制',
	theme: '主题',
	themeLight: '浅色',
	themeDark: '深色',
	themeSystem: '跟随系统',
	notFoundTitle: '页面不存在',
	notFoundBody: '名录里没有这个地址。可能搬走了，或者从来没上过。',
	goHome: '返回目录',
	filterAll: '全部',
	filterLabel: '按标签筛选',
	filterEmpty: '没有匹配这个标签的条目。',
	relatedHeading: '相关条目',
	weeklyFeedLink: '本周新 slop（RSS）',
	allFeedLink: '完整目录（RSS）',
};

const de: Record<UiKey, string> = {
	siteTitle: 'Slop Watch',
	siteTagline: 'AI-Schrott mit Belegen zu Kollaps, Incidents und CVEs',
	siteDescription:
		'Die öffentliche Müllhalde für KI-Produkte, die hart shippen, härter brechen und CVEs, Issue-Sümpfe und vibe-codierte Trümmer hinterlassen. Benannte Exemplare mit Links, Gründen und öffentlichen Belegen.',
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
	aboutTitle: 'Über Slop Watch — AI-Schrott-Katalog mit Belegen',
	aboutMetaDescription:
		'Was Slop Watch ist und warum „slop“ hier Qualitätsmüll mit öffentlichen Belegen meint — keine Werberolle und kein Endorsement-Archiv für KI-Produkte.',
	aboutP1:
		'Slop Watch ist ein öffentlicher Müllkatalog von <strong>AI Slop</strong> — Produkte, bei denen Qualität kollabiert: Autoren stehen nicht hinter dem Code, Upgrades brechen absichtlich, Incidents/CVEs bleiben spannend. Wir benennen Exemplare, damit das Muster sichtbar wird.',
	aboutP2:
		'Das ist <strong>kein</strong> weiches „Generative-Mush-Showcase“ und kein Endorsement-Archiv. Beschreibung sagt was es ist; Grund sagt warum Müll; Referenzen sind die Belege.',
	aboutP3:
		'Jeder Eintrag ist eine Exemplarkarte: Name, Icon, Titelbild, Primärlink, Kurzbeschreibung, Auswahlgrund und ein Stapel stützender Referenzen.',
	aboutP4:
		'Wir kuratieren nach Belegen, nicht nach Hype. Fehlt die öffentliche Spur von Bruch, Security-Schuld oder herrenloser Qualität, gehört es nicht hierher.',
	aboutStandardsLink: 'Aufnahmekriterien lesen →',
	standardsTitle: 'Aufnahmekriterien · Wie Slop Watch AI-Slop wählt',
	standardsMetaDescription:
		'Wie Slop Watch AI-Slop-Exemplare wählt: öffentliche Belege für Qualitätskollaps, Incidents und Security-Schuld — kein Hype, Sterne oder Werbung.',
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
	specimenTitle: '{name} · AI-Slop-Exemplar im Slop Watch Katalog',
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
	siteTagline: 'AI Slop con prove: collasso di qualità, incidenti e CVE',
	siteDescription:
		'La discarica pubblica di prodotti AI che spediscono forte, si rompono più forte e lasciano CVE, paludi di issue e rottami vibe-coded. Esemplari nominati con link, motivi e ricevute pubbliche.',
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
	aboutTitle: 'Info su Slop Watch — catalogo di AI Slop con prove pubbliche',
	aboutMetaDescription:
		'Cos’è Slop Watch e perché qui “slop” significa spazzatura di qualità con prove pubbliche — non un reel promo né un archivio di endorsement.',
	aboutP1:
		'Slop Watch è un catalogo-discarica pubblica di <strong>AI Slop</strong>: prodotti dove la qualità è collassata, breaking continui, incidenti e CVE. Nominiamo gli esemplari perché il pattern sia visibile.',
	aboutP2:
		'<strong>Non</strong> è una vetrina soft né un archivio di endorsement. Descrizione = cos’è; motivo = perché è spazzatura; riferimenti = prove.',
	aboutP3:
		'Ogni voce è una scheda-esemplare: nome, icona, copertina, link principale, breve descrizione, motivo di selezione e un mucchio di riferimenti a supporto.',
	aboutP4:
		'Curiamo per evidenza, non per hype. Se la scia pubblica di rotture, debito di sicurezza o qualità senza ownership è sottile, non entra qui.',
	aboutStandardsLink: 'Leggi i criteri di inclusione →',
	standardsTitle: 'Criteri di inclusione · Come Slop Watch sceglie lo slop',
	standardsMetaDescription:
		'Come Slop Watch sceglie gli esemplari di AI Slop: prove pubbliche di collasso di qualità, incidenti e debito di sicurezza — non hype, stelle o endorsement.',
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
	specimenTitle: '{name} · esemplare AI Slop nel catalogo Slop Watch',
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
	siteTagline: 'AIスロップを証拠付きでカタログ化。品質崩壊・事故・CVE を公開の領収書つきで残す標本集。',
	siteDescription:
		'強硬に出荷し、より強硬に壊れ、CVE・issue沼・バイブコーディングの残骸を残すAI製品の公開埋め立て地です。各標本に名前・主リンク・選定理由と、公開で追える領収書を残し、品質が崩れたパターンや事故の連なりを読める形でカタログ化します。',
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
	aboutTitle: '概要 · 証拠付きで AI スロップを残す公開カタログ「Slop Watch」の案内と読み方の説明',
	aboutMetaDescription:
		'Slop Watchとは何か。ここでいうslopが宣伝や推薦ではなく、品質崩壊・本番事故・CVE の公開証拠を伴う品質ゴミである理由を、読者向けに背景・見分け方・掲載の考え方までわかりやすく説明し、証拠の読み方と注意点まで丁寧に案内します。',
	aboutP1:
		'Slop Watchは<strong>AIスロップ</strong>の公開カタログです。品質崩壊、作者が品質を担保できない、breaking、本番事故/CVE。パターンを可視化するために標本に名前を付けます。',
	aboutP2:
		'ソフトな「生成ムッシュのショーケース」でも宣伝アーカイブでも<strong>ありません</strong>。説明は何か、理由はなぜゴミか、参考文献は証拠です。',
	aboutP3:
		'各エントリは標本カードです。名前、アイコン、カバー、主リンク、短い説明、選定理由、そして根拠になる参考文献の束。',
	aboutP4:
		'熱量ではなく証拠で選びます。公開で追える破綻・セキュリティ負債・品質の放置が薄いなら、ここには載せません。',
	aboutStandardsLink: '掲載基準を読む →',
	standardsTitle: '掲載基準 · 公開カタログ「Slop Watch」が AI スロップ標本を選ぶ方法と証拠条件の説明',
	standardsMetaDescription:
		'Slop WatchがAIスロップ標本を選ぶ基準を説明します。品質崩壊・事故・セキュリティ負債の公開証拠に限定し、熱量・star 数・バズ・宣伝だけでは掲載しません。公開で追える証拠が薄いものや検証できない項目は、このカタログには載せません。',
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
	specimenTitle: '{name} · AIスロップ標本 · Slop Watch カタログ',
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
	siteTagline: 'AI 슬롭 목록 — 품질 붕괴·사고·CVE를 공개 증거와 함께 기록',
	siteDescription:
		'세게 출시하고 더 세게 부서지며 CVE, 이슈 늪, 바이브 코딩 잔해를 남기는 AI 제품의 공개 매립지입니다. 각 표본에 이름·주 링크·선정 이유와 공개로 따라갈 수 있는 영수증을 남겨, 품질 붕괴와 사고 연발 패턴을 읽을 수 있게 정리합니다.',
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
	aboutTitle: '소개 · Slop Watch: 공개 증거가 있는 AI 슬롭 아카이브 카탈로그 안내 페이지',
	aboutMetaDescription:
		'Slop Watch가 무엇인지, 그리고 여기서 slop이 홍보나 추천이 아니라 품질 붕괴·사고·CVE의 공개 증거를 갖춘 품질 쓰레기인 이유를 독자 입장에서 배경과 구분 방법, 수록 관점까지 함께 자세히 설명합니다.',
	aboutP1:
		'Slop Watch는 품질이 무너진 <strong>AI 슬롭</strong> 공개 목록입니다. 작성자가 코드를 감당하지 못하고, 업그레이드가 깨지며, 사고/CVE가 이어집니다. 패턴을 보이게 이름을 붙입니다.',
	aboutP2:
		'부드러운 생성 쇼케이스나 홍보 아카이브가 <strong>아닙니다</strong>. 설명은 무엇인지, 이유는 왜 쓰레기인지, 참고는 영수증입니다.',
	aboutP3:
		'각 항목은 표본 카드입니다. 이름, 아이콘, 커버, 주 링크, 짧은 설명, 선정 이유, 그리고 뒷받침 참고 자료 묶음.',
	aboutP4:
		'유행이 아니라 증거로 고릅니다. 공개적으로 따라갈 수 있는 붕괴·보안 부채·방치된 품질의 흔적이 얇으면 여기 올리지 않습니다.',
	aboutStandardsLink: '수록 기준 읽기 →',
	standardsTitle: '수록 기준 · Slop Watch가 AI 슬롭 표본을 고르는 방법과 필요한 공개 증거 조건',
	standardsMetaDescription:
		'Slop Watch가 AI 슬롭 표본을 고르는 기준을 정리합니다. 품질 붕괴·사고·보안 부채의 공개 증거만 인정하며, 유행·스타 수·바이럴 홍보만으로는 수록하지 않고, 공개로 따라갈 증거가 얇거나 검증이 안 되면 목록에 올리지 않습니다.',
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
	specimenTitle: '{name} · AI 슬롭 표본 · Slop Watch 목록',
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
	siteTagline: 'AI Slop con pruebas: colapso de calidad, incidentes y CVE',
	siteDescription:
		'El vertedero público de productos de IA que lanzan fuerte, se rompen más fuerte y dejan CVE, pantanos de issues y restos vibe-coded. Ejemplares con nombre, enlace, motivo y recibos públicos.',
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
	aboutTitle: 'Acerca de Slop Watch — catálogo de AI Slop con pruebas',
	aboutMetaDescription:
		'Qué es Slop Watch y por qué aquí “slop” significa basura de calidad con pruebas públicas — no un reel promocional ni un archivo de endorsements.',
	aboutP1:
		'Slop Watch es un catálogo-vertedero público de <strong>AI Slop</strong>: productos donde la calidad colapsó, breaking constantes, incidentes y CVE. Nombramos ejemplares para que el patrón sea visible.',
	aboutP2:
		'<strong>No</strong> es un escaparate suave ni un archivo de endorsements. Descripción = qué es; motivo = por qué es basura; referencias = pruebas.',
	aboutP3:
		'Cada entrada es una ficha de espécimen: nombre, icono, portada, enlace principal, descripción breve, motivo de selección y un montón de referencias de apoyo.',
	aboutP4:
		'Curamos por evidencia, no por hype. Si el rastro público de roturas, deuda de seguridad o calidad sin dueño es fino, no entra aquí.',
	aboutStandardsLink: 'Leer criterios de inclusión →',
	standardsTitle: 'Criterios de inclusión · Cómo Slop Watch elige el slop',
	standardsMetaDescription:
		'Cómo Slop Watch elige especímenes de AI Slop: evidencia pública de colapso de calidad, incidentes y deuda de seguridad — no hype, estrellas ni endorsement.',
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
	specimenTitle: '{name} · ejemplar AI Slop en el catálogo Slop Watch',
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
