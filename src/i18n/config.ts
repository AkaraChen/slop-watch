export const locales = ['en', 'zh', 'de', 'it', 'ja', 'ko', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	zh: '中文',
	de: 'Deutsch',
	it: 'Italiano',
	ja: '日本語',
	ko: '한국어',
	es: 'Español',
};

export const ogLocales: Record<Locale, string> = {
	en: 'en_US',
	zh: 'zh_CN',
	de: 'de_DE',
	it: 'it_IT',
	ja: 'ja_JP',
	ko: 'ko_KR',
	es: 'es_ES',
};

export const dateLocales: Record<Locale, string> = {
	en: 'en-US',
	zh: 'zh-CN',
	de: 'de-DE',
	it: 'it-IT',
	ja: 'ja-JP',
	ko: 'ko-KR',
	es: 'es-ES',
};

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

/** Path helper: en at /…, others at /{locale}/… */
export function localePath(locale: Locale, path = '/'): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const bare = normalized === '/' ? '' : normalized.replace(/\/$/, '');
	if (locale === defaultLocale) {
		return bare === '' ? '/' : `${bare}/`;
	}
	return bare === '' ? `/${locale}/` : `/${locale}${bare}/`;
}

export function stripLocaleFromPathname(pathname: string): string {
	const parts = pathname.split('/').filter(Boolean);
	if (parts.length > 0 && isLocale(parts[0]) && parts[0] !== defaultLocale) {
		const rest = parts.slice(1).join('/');
		return rest ? `/${rest}/` : '/';
	}
	return pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
}
