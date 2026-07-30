import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { catalogMarkdown } from '../../lib/geoMarkdown';

export const prerender = true;

export const GET: APIRoute = async () => {
	const slops = await getCollection('slops');
	return new Response(catalogMarkdown(slops, 'zh'), {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
