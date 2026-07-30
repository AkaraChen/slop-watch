import type { APIRoute } from 'astro';
import { standardsMarkdown } from '../lib/geoMarkdown';

export const prerender = true;

export const GET: APIRoute = () =>
	new Response(standardsMarkdown('en'), {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
