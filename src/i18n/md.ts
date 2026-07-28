/** Minimal markdown → HTML for catalog body overlays (headings, lists, bold). */
export function mdToHtml(md: string): string {
	const escape = (s: string) =>
		s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	const inline = (s: string) =>
		escape(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

	const lines = md.replace(/\r\n/g, '\n').trim().split('\n');
	const out: string[] = [];
	let i = 0;

	while (i < lines.length) {
		const line = lines[i] ?? '';
		if (line.trim() === '') {
			i += 1;
			continue;
		}

		if (line.startsWith('### ')) {
			out.push(`<h3>${inline(line.slice(4).trim())}</h3>`);
			i += 1;
			continue;
		}

		if (line.startsWith('## ')) {
			out.push(`<h2>${inline(line.slice(3).trim())}</h2>`);
			i += 1;
			continue;
		}

		if (line.startsWith('- ')) {
			const items: string[] = [];
			while (i < lines.length && (lines[i] ?? '').startsWith('- ')) {
				items.push(`<li>${inline((lines[i] ?? '').slice(2).trim())}</li>`);
				i += 1;
			}
			out.push(`<ul>${items.join('')}</ul>`);
			continue;
		}

		const para: string[] = [];
		while (
			i < lines.length &&
			(lines[i] ?? '').trim() !== '' &&
			!(lines[i] ?? '').startsWith('#') &&
			!(lines[i] ?? '').startsWith('- ')
		) {
			para.push((lines[i] ?? '').trim());
			i += 1;
		}
		if (para.length > 0) {
			out.push(`<p>${inline(para.join(' '))}</p>`);
		}
	}

	return out.join('\n');
}
