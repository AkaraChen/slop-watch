import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { catalogMarkdown } from '../lib/geoMarkdown';

export const prerender = true;

export const GET: APIRoute = async () => {
	const slops = await getCollection('slops');
	const body = [
		catalogMarkdown(slops, 'en'),
		'',
		'---',
		'',
		'## Chinese catalog summary',
		'',
		catalogMarkdown(slops, 'zh'),
	].join('\n');
	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
