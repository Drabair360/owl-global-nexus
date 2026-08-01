/**
 * FOLIOS - système de lecture (signature M7 n°1).
 *
 * L'ordre est celui de la NAVIGATION, jamais celui de création des routes :
 * Groupe 01 - Portefeuille 02 - Métiers 03 - Scouts 04 - Journal 05 - Contact 06.
 * Les pages de pied de page suivent, dans l'ordre du footer, à partir de 07.
 * Les fiches ventures héritent du folio de leur catalogue (02) et portent leur
 * rang propre dans le catalogue raisonné (02.1 à 02.5).
 *
 * Un folio est prévisible : n'insère jamais une page au milieu de la série sans
 * renuméroter la série entière ici.
 */
export const FOLIOS: Record<string, string> = {
  // Z1 : l'accueil ouvre la série sans en faire partie — folio 00.
  '/': '00',
  '/groupe': '01',
  '/portefeuille': '02',
  '/metiers': '03',
  '/scouts': '04',
  '/journal': '05',
  '/contact': '06',
  // Pages de pied de page, dans l'ordre du footer
  '/approche': '07',
  '/engagements': '08',
  '/rejoindre': '09',
  '/mentions-legales': '10',
  '/confidentialite': '11',
  '/conditions': '12',
};

/** Folio d'une route. Les fiches ventures reçoivent 02.n via ventureFolio(). */
export const folioFor = (pathname: string): string | undefined => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return FOLIOS[clean];
};

/** Folio d'une fiche venture : rang dans le catalogue raisonné. */
export const ventureFolio = (order: string) => `02.${Number(order)}`;
