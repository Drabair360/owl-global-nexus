import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '@/hooks/useSEO';
import { useLocation } from 'react-router-dom';
import { SITE_URL as BASE_URL } from '@/config/site';



interface Props {
  title: string;
  description: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Breadcrumb trail (label + relative path). Home is added automatically. */
  breadcrumbs?: { name: string; path: string }[];
  /** Empêche l'indexation de la page (ex. 404). */
  noindex?: boolean;
  children: ReactNode;
}

const PageShell = ({ title, description, keywords, jsonLd, breadcrumbs, noindex, children }: Props) => {
  const { pathname } = useLocation();

  const trail = breadcrumbs && breadcrumbs.length > 0
    ? [{ name: 'Owl International', path: '/' }, ...breadcrumbs]
    : null;

  const schemas: Record<string, unknown>[] = [];
  if (trail) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: trail.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${BASE_URL}${b.path === '/' ? '' : b.path}`,
      })),
    });
  }
  if (jsonLd) {
    (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).forEach((o) => schemas.push(o));
  }

  useSEO({
    title,
    description,
    keywords,
    noindex,
    jsonLd: schemas.length ? schemas : undefined,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
