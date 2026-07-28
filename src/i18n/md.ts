/** Minimal markdown → HTML for catalog body overlays (headings, lists, bold). */
export function mdToHtml(md: string): string {
	const escape = (s: string) =>
		s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	const inline = (s: string) =>
		escape(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
	const blocks = md.trim().split(/\n\n+/);
	return blocks
		.map((block) => {
			const lines = block.split('\n');
			if (lines[0]?.startsWith('### ')) {
				return `<h3>${inline(lines[0].slice(4))}</h3>`;
			}
			if (lines.every((l) => l.startsWith('- '))) {
				const items = lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join('');
				return `<ul>${items}</ul>`;
			}
			return `<p>${inline(lines.join(' '))}</p>`;
		})
		.join('\n');
}
