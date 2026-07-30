/**
 * Source unique de vérité pour l'URL absolue du site.
 *
 * Surchargable au build via la variable d'environnement VITE_SITE_URL
 * (ex. environnement de préproduction). Valeur par défaut : domaine de
 * production Owl International.
 *
 * Aucune URL absolue ne doit être écrite en dur ailleurs dans le code :
 * canonical, hreflang, og:*, JSON-LD, sitemap et robots.txt dérivent tous
 * de cette constante (les fichiers statiques via le plugin de build).
 */
export const SITE_URL: string = (
  (import.meta.env?.VITE_SITE_URL as string | undefined) ?? 'https://www.internationalowl.com'
).replace(/\/+$/, '');

/** Construit une URL absolue à partir d'un chemin relatif. */
export const absoluteUrl = (path = '/'): string =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
