import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const referenceSchema = z.object({
	title: z.string(),
	url: z.string().url(),
	summary: z.string(),
	source: z.string().optional(),
	publishedAt: z.coerce.date().optional(),
});

const slops = defineCollection({
	loader: glob({ base: './src/content/slops', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			link: z.string().url(),
			reason: z.string(),
			featuredImage: image(),
			icon: image().optional(),
			publishedAt: z.coerce.date(),
			lastVerifiedAt: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			status: z.enum(['featured', 'listed', 'archived']).default('listed'),
			references: z.array(referenceSchema).default([]),
		}),
});

export const collections = { slops };
