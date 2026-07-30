import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { specimenMarkdown } from '../../../lib/geoMarkdown';

export const prerender = true;

export async function getStaticPaths() {
	const slops = await getCollection('slops');
	return slops.map((entry) => ({
		params: { slug: entry.id },
		props: { entry },
	}));
}

export const GET: APIRoute = ({ props }) =>
	new Response(specimenMarkdown(props.entry, 'zh'), {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
