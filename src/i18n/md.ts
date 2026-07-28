/** Minimal markdown → HTML for catalog body overlays (headings, lists, bold). */
export function mdToHtml(md: string): string {
	const escape = (s: string) =>
		s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	const inline = (s: string) =>
		escape(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

	const lines = md.replace(/\r\n/g, '\n').trim().split('\n');
	const out: string[] = [];
	let i = 0;

	const flushParagraph = (buf: string[]) => {
		if (buf.length === 0) return;
		out.push(`<p>${inline(buf.join(' '))}</p>`);
		buf.length = 0;
	};

	while (i < lines.length) {
		const line = lines[i] ?? '';
		const trimmed = line.trim();

		if (trimmed === '') {
			i += 1;
			continue;
		}

		if (trimmed.startsWith('### ')) {
			out.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
			i += 1;
			continue;
		}

		if (trimmed.startsWith('- ')) {
			const items: string[] = [];
			while (i < lines.length) {
				const l = (lines[i] ?? '').trim();
				if (!l.startsWith('- ')) break;
				items.push(`<li>${inline(l.slice(2))}</li>`);
				i += 1;
			}
			out.push(`<ul>${items.join('')}</ul>`);
			continue;
		}

		const para: string[] = [];
		while (i < lines.length) {
			const l = lines[i] ?? '';
			const t = l.trim();
			if (t === '' || t.startsWith('### ') || t.startsWith('- ')) break;
			para.push(t);
			i += 1;
		}
		flushParagraph(para);
	}

	return out.join('\n');
}
