/**
 * Banque de textures institutionnelles V2 - Owl International.
 *
 * Grammaire unique : crépuscule tardif, source chaude unique contre ambiance encre,
 * 35-50 mm, grain film, aucune personne, aucun logo, aucun texte lisible.
 * Interdit d'utilisation comme preuve implicite d'actif du groupe.
 * À rendre exclusivement via <Duotone> + <Legende> pour cohérence encre/or et honnêteté.
 *
 * Phase VI - livraison responsive : chaque visuel est compilé par vite-imagetools en
 * AVIF + JPG sur l'échelle 640 / 1080 / 1600 / 2200, plafonnée à la largeur native
 * (jamais d'agrandissement : 1024 px pour les portraits, 1920 px pour les bandes 21/9).
 */

import industrial from '@/assets/v2/industrial.jpg?w=640;1024&format=avif;jpg&as=picture';
import lab from '@/assets/v2/lab.jpg?w=640;1024&format=avif;jpg&as=picture';
import studio from '@/assets/v2/studio.jpg?w=640;1024&format=avif;jpg&as=picture';
import atelier from '@/assets/v2/atelier.jpg?w=640;1024&format=avif;jpg&as=picture';
import prestige from '@/assets/v2/prestige.jpg?w=640;1024&format=avif;jpg&as=picture';
import signature from '@/assets/v2/signature.jpg?w=640;1024&format=avif;jpg&as=picture';
import vide from '@/assets/v2/vide.jpg?w=640;1024&format=avif;jpg&as=picture';

import prestigeWide from '@/assets/v2/prestige-wide.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';
import skyline from '@/assets/v2/skyline.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';
import archive from '@/assets/v2/archive.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';
import corridor from '@/assets/v2/corridor.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';
import terrain from '@/assets/v2/terrain.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';

import ogBase from '@/assets/v2/og-base.jpg?w=640;1200&format=avif;jpg&as=picture';

export type TextureKey =
  | 'industrial'
  | 'lab'
  | 'studio'
  | 'atelier'
  | 'prestige'
  | 'prestigeWide'
  | 'skyline'
  | 'archive'
  | 'signature'
  | 'corridor'
  | 'terrain'
  | 'vide'
  | 'ogBase';

interface Picture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

export interface Texture {
  src: string;
  /** srcset par type MIME (avif d'abord, jpg en repli). */
  sources: Record<string, string>;
  /** Alt honnête : décrit la matière, jamais un actif, jamais un lieu situable. */
  alt: string;
  width: number;
  height: number;
}

const make = (p: Picture, alt: string): Texture => ({
  src: p.img.src,
  sources: p.sources,
  alt,
  width: p.img.w,
  height: p.img.h,
});

export const textures: Record<TextureKey, Texture> = {
  industrial: make(industrial, "Hall industriel contemporain en lumière rasante - image d'illustration"),
  lab: make(lab, "Détail de machine de précision en aluminium brossé - image d'illustration"),
  studio: make(studio, "Trame de lumière architecturale nocturne - image d'illustration"),
  atelier: make(atelier, "Matière tissée et bois patiné en lumière douce - image d'illustration"),
  prestige: make(prestige, "Façade en pierre blonde et ferronneries au crépuscule - image d'illustration"),
  prestigeWide: make(prestigeWide, "Architecture en pierre blonde au crépuscule - image d'illustration"),
  skyline: make(skyline, "Toits européens de nuit, zinc et cheminées - image d'illustration"),
  archive: make(archive, "Papier de rapport imprimé, tranche dorée en lumière rasante - image d'illustration"),
  signature: make(signature, "Stylo plume posé sur papier vergé - image d'illustration"),
  corridor: make(corridor, "Enfilade de portes d'un couloir haussmannien sobre - image d'illustration"),
  terrain: make(terrain, "Matière minérale ocre au crépuscule - image d'illustration"),
  vide: make(vide, "Mur d'encre traversé d'un unique rai de lumière - image d'illustration"),
  ogBase: make(ogBase, "Fond institutionnel - image d'illustration"),
};

/** `sizes` par usage - évite au navigateur de télécharger plus large que le rendu. */
export const SIZES = {
  /** Bande cinéma 21/9 pleine largeur. */
  band: '100vw',
  /** Colonne éditoriale (moitié de page au-delà de 768px). */
  column: '(max-width: 767px) 100vw, 50vw',
  /** Vignette de grille (3 colonnes au-delà de 1024px). */
  thumb: '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw',
} as const;
