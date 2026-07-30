import type { CollectionEntry } from 'astro:content';
import { defaultLocale, localePath, type Locale } from '../i18n/config';
import { getLocalizedSlop } from '../i18n/content';
import { t } from '../i18n/ui';

const SITE = 'https://slop-watch.akr.moe';

export function siteOverviewMarkdown(): string {
	return `# Slop Watch

> Public catalog of AI Slop: products and stacks with quality collapse, production incidents, and security debt — named specimens with public receipts (issues, CVEs, failure reports).

## What this site is
Slop Watch is a landfill-style catalog of **AI Slop**. Each specimen has a short description, a reason it is listed, tags, and references (links to public evidence). It is not a promo reel or endorsement archive.

- English site: ${SITE}/
- Chinese: ${SITE}/zh/
- Standards: ${SITE}/standards/
- About: ${SITE}/about/
- Full catalog for machines: ${SITE}/llms-full.txt
- RSS: ${SITE}/rss.xml · weekly: ${SITE}/rss-weekly.xml
- Sitemap: ${SITE}/sitemap-index.xml

## Specimen pages (English)
See also per-page Markdown mirrors under \`/slops/{id}.md\`.

## Locales
en (default), zh, de, it, ja, ko, es

## About the project
Curated for evidence, not hype. Facts such as URLs, issue/CVE IDs, and measured counts stay frozen in content. Tone may be sharp; claims should still point at public sources.

Contact / source: https://github.com/AkaraChen/slop-watch
`;
}

export function catalogMarkdown(
	slops: CollectionEntry<'slops'>[],
	locale: Locale = defaultLocale,
): string {
	const lines: string[] = [
		`# ${t(locale, 'siteTitle')}`,
		'',
		`> ${t(locale, 'siteTagline')}`,
		'',
		t(locale, 'siteDescription'),
		'',
		`## ${t(locale, 'catalogHeading')}`,
		'',
	];

	const sorted = [...slops].sort((a, b) => a.data.name.localeCompare(b.data.name));
	for (const entry of sorted) {
		const copy = getLocalizedSlop(
			entry.id,
			locale,
			{ description: entry.data.description, reason: entry.data.reason },
			entry.data.references.map((r) => ({
				title: r.title,
				url: r.url,
				summary: r.summary,
				source: r.source,
				publishedAt: r.publishedAt,
			})),
		);
		const path = localePath(locale, `/slops/${entry.id}/`);
		const url = new URL(path, SITE).href;
		const mdUrl = new URL(localePath(locale, `/slops/${entry.id}.md`), SITE).href;
		lines.push(`### [${entry.data.name}](${url})`);
		lines.push('');
		lines.push(copy.description);
		lines.push('');
		lines.push(`**Why listed:** ${copy.reason}`);
		lines.push('');
		if (entry.data.tags?.length) {
			lines.push(`Tags: ${entry.data.tags.join(', ')}`);
			lines.push('');
		}
		lines.push(`HTML: ${url}`);
		lines.push(`Markdown: ${mdUrl}`);
		lines.push(`Primary link: ${entry.data.link}`);
		lines.push('');
		if (copy.references.length) {
			lines.push('References:');
			for (const ref of copy.references) {
				lines.push(`- [${ref.title}](${ref.url}) — ${ref.summary}`);
			}
			lines.push('');
		}
	}

	lines.push('## Other pages');
	lines.push(`- About: ${new URL(localePath(locale, '/about/'), SITE).href}`);
	lines.push(`- Standards: ${new URL(localePath(locale, '/standards/'), SITE).href}`);
	lines.push(`- llms.txt: ${SITE}/llms.txt`);
	lines.push(`- llms-full.txt: ${SITE}/llms-full.txt`);
	return lines.join('\n');
}

export function specimenMarkdown(
	entry: CollectionEntry<'slops'>,
	locale: Locale = defaultLocale,
): string {
	const copy = getLocalizedSlop(
		entry.id,
		locale,
		{ description: entry.data.description, reason: entry.data.reason },
		entry.data.references.map((r) => ({
			title: r.title,
			url: r.url,
			summary: r.summary,
			source: r.source,
			publishedAt: r.publishedAt,
		})),
	);
	const path = localePath(locale, `/slops/${entry.id}/`);
	const htmlUrl = new URL(path, SITE).href;
	const lines: string[] = [
		`# ${entry.data.name}`,
		'',
		`> Specimen on [Slop Watch](${SITE}/) — AI products listed with public receipts.`,
		'',
		`HTML: ${htmlUrl}`,
		`Primary link: ${entry.data.link}`,
		entry.data.lastVerifiedAt
			? `Evidence checked: ${entry.data.lastVerifiedAt.toISOString().slice(0, 10)}`
			: '',
		entry.data.tags?.length ? `Tags: ${entry.data.tags.join(', ')}` : '',
		'',
		'## Description',
		'',
		copy.description,
		'',
		'## Why it is listed',
		'',
		copy.reason,
		'',
	].filter((l, i, arr) => !(l === '' && arr[i - 1] === ''));

	if (copy.references.length) {
		lines.push('## References');
		lines.push('');
		for (const ref of copy.references) {
			const when = ref.publishedAt
				? ` (${ref.publishedAt.toISOString().slice(0, 10)})`
				: '';
			const src = ref.source ? ` [${ref.source}]` : '';
			lines.push(`- [${ref.title}](${ref.url})${src}${when}`);
			lines.push(`  ${ref.summary}`);
		}
		lines.push('');
	}

	lines.push('## Site');
	lines.push(`- Catalog: ${SITE}/`);
	lines.push(`- Standards: ${SITE}/standards/`);
	lines.push(`- llms.txt: ${SITE}/llms.txt`);
	return lines.join('\n');
}

export function aboutMarkdown(locale: Locale = defaultLocale): string {
	return [
		`# ${t(locale, 'aboutTitle')}`,
		'',
		t(locale, 'aboutMetaDescription'),
		'',
		// strip HTML tags from about paragraphs for plain markdown
		t(locale, 'aboutP1').replace(/<[^>]+>/g, ''),
		'',
		t(locale, 'aboutP2').replace(/<[^>]+>/g, ''),
		'',
		t(locale, 'aboutP3').replace(/<[^>]+>/g, ''),
		'',
		t(locale, 'aboutP4').replace(/<[^>]+>/g, ''),
		'',
		`Standards: ${new URL(localePath(locale, '/standards/'), SITE).href}`,
		`Home: ${new URL(localePath(locale, '/'), SITE).href}`,
	].join('\n');
}

export function standardsMarkdown(locale: Locale = defaultLocale): string {
	return [
		`# ${t(locale, 'standardsTitle')}`,
		'',
		t(locale, 'standardsMetaDescription'),
		'',
		`## ${t(locale, 'standardsH1')}`,
		'',
		t(locale, 'standardsP1').replace(/<[^>]+>/g, ''),
		'',
		t(locale, 'standardsP2').replace(/<[^>]+>/g, ''),
		'',
		t(locale, 'standardsP3').replace(/<[^>]+>/g, ''),
		'',
		t(locale, 'standardsP4').replace(/<[^>]+>/g, ''),
		'',
		`Home: ${new URL(localePath(locale, '/'), SITE).href}`,
	].join('\n');
}
