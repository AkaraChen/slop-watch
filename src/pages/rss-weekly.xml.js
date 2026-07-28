import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../consts';

const MS_WEEK = 7 * 24 * 60 * 60 * 1000;

export async function GET(context) {
	const cutoff = Date.now() - MS_WEEK;
	const all = await getCollection('slops');
	const weekly = all
		.filter((s) => s.data.status !== 'archived')
		.filter((s) => s.data.publishedAt.valueOf() >= cutoff)
		.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

	// If nothing landed in the last 7 days at build time, surface the newest 3
	// so the feed stays useful between sparse publishes.
	const items =
		weekly.length > 0
			? weekly
			: all
					.filter((s) => s.data.status !== 'archived')
					.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
					.slice(0, 3);

	return rss({
		title: `${SITE_TITLE} — This week`,
		description:
			'New AI Slop specimens catalogued in the last seven days (fallback: three most recent if the week was quiet).',
		site: context.site,
		items: items.map((slop) => ({
			title: slop.data.name,
			description: slop.data.description,
			pubDate: slop.data.publishedAt,
			link: `/slops/${slop.id}/`,
			categories: slop.data.tags,
		})),
	});
}
