import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const slops = await getCollection('slops');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: slops.map((slop) => ({
			title: slop.data.name,
			description: slop.data.description,
			pubDate: slop.data.publishedAt,
			link: `/slops/${slop.id}/`,
		})),
	});
}
