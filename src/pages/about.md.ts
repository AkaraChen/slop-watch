import type { APIRoute } from 'astro';
import { aboutMarkdown } from '../lib/geoMarkdown';

export const prerender = true;

export const GET: APIRoute = () =>
	new Response(aboutMarkdown('en'), {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
