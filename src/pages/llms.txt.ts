import type { APIRoute } from 'astro';
import { siteOverviewMarkdown } from '../lib/geoMarkdown';

export const prerender = true;

export const GET: APIRoute = () =>
	new Response(siteOverviewMarkdown(), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
