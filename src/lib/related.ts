import type { CollectionEntry } from 'astro:content';

export type SlopEntry = CollectionEntry<'slops'>;

/** Rank other specimens by shared tags (highest first). */
export function relatedSlops(
	current: SlopEntry,
	all: SlopEntry[],
	limit = 3,
): SlopEntry[] {
	const mine = new Set(current.data.tags.map((t) => t.toLowerCase()));
	if (mine.size === 0) return [];

	return all
		.filter((s) => s.id !== current.id && s.data.status !== 'archived')
		.map((s) => {
			const shared = s.data.tags.filter((t) => mine.has(t.toLowerCase())).length;
			return { s, shared };
		})
		.filter((x) => x.shared > 0)
		.sort((a, b) => {
			if (b.shared !== a.shared) return b.shared - a.shared;
			return b.s.data.publishedAt.valueOf() - a.s.data.publishedAt.valueOf();
		})
		.slice(0, limit)
		.map((x) => x.s);
}

/** Unique tags across active catalog entries, sorted. */
export function collectTags(slops: SlopEntry[]): string[] {
	const set = new Set<string>();
	for (const s of slops) {
		for (const tag of s.data.tags) set.add(tag);
	}
	return [...set].sort((a, b) => a.localeCompare(b));
}
