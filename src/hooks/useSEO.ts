import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';

const BASE_URL = 'https://owl-global-nexus.lovable.app';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface SEOOptions {
  title: string;
  description: string;
  /** Additional JSON-LD schema.org objects to inject in the head. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Keywords for SEO (comma-separated). */
  keywords?: string;
}

/**
 * Injects title/description/canonical/OG/Twitter/hreflang and page-scoped JSON-LD.
 * Direct <head> mutation — no react-helmet dependency.
 */
export const useSEO = ({ title, description, jsonLd, keywords }: SEOOptions) => {
  const { pathname } = useLocation();
  const { locale } = useI18n();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale;

    const upsert = (
      selector: string,
      create: () => HTMLElement,
      attr: string,
      value: string,
    ) => {
      let el = document.head.querySelector<HTMLElement>(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
      return el;
    };

    const setMeta = (name: string, value: string) =>
      upsert(
        `meta[name="${name}"]`,
        () => {
          const m = document.createElement('meta');
          m.setAttribute('name', name);
          return m;
        },
        'content',
        value,
      );

    const setProp = (property: string, value: string) =>
      upsert(
        `meta[property="${property}"]`,
        () => {
          const m = document.createElement('meta');
          m.setAttribute('property', property);
          return m;
        },
        'content',
        value,
      );

    const path = pathname === '/' ? '' : pathname;
    const canonicalUrl = `${BASE_URL}${path}`;

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:url', canonicalUrl);
    setProp('og:type', 'website');
    setProp('og:site_name', 'Owl International');
    setProp('og:locale', locale === 'fr' ? 'fr_FR' : 'en_US');
    setProp('og:locale:alternate', locale === 'fr' ? 'en_US' : 'fr_FR');
    setProp('og:image', OG_IMAGE);
    setProp('og:image:width', '1200');
    setProp('og:image:height', '630');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', OG_IMAGE);

    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      },
      'href',
      canonicalUrl,
    );

    // hreflang alternates (FR/EN + x-default) — same URL, language chosen client-side.
    const setAlt = (hreflang: string) => {
      const sel = `link[rel="alternate"][hreflang="${hreflang}"]`;
      const el = upsert(
        sel,
        () => {
          const l = document.createElement('link');
          l.setAttribute('rel', 'alternate');
          l.setAttribute('hreflang', hreflang);
          return l;
        },
        'href',
        canonicalUrl,
      );
      return el;
    };
    setAlt('fr');
    setAlt('en');
    setAlt('x-default');

    // Page-scoped JSON-LD (removed on unmount / re-render).
    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      arr.forEach((obj) => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.dataset.pageSeo = '1';
        s.text = JSON.stringify(obj);
        document.head.appendChild(s);
        scripts.push(s);
      });
    }

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, pathname, locale, keywords, JSON.stringify(jsonLd)]);
};
