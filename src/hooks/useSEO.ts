import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://owl-global-nexus.lovable.app';

interface SEOOptions {
  title: string;
  description: string;
}

/**
 * Met à jour title/description/canonical/og pour la page courante.
 * Pas de dépendance react-helmet — mutation directe du <head>.
 */
export const useSEO = ({ title, description }: SEOOptions) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const set = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLElement>(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setMeta = (name: string, value: string) => {
      set(`meta[name="${name}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('name', name);
        return m;
      }, 'content', value);
    };

    const setProp = (property: string, value: string) => {
      set(`meta[property="${property}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('property', property);
        return m;
      }, 'content', value);
    };

    setMeta('description', description);
    setProp('og:title', title);
    setProp('og:description', description);

    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;
    set('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }, 'href', canonicalUrl);
    setProp('og:url', canonicalUrl);
  }, [title, description, pathname]);
};
