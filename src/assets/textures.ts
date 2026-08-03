/**
 * Banque de matières institutionnelles - Owl International.
 *
 * RÉGIME D'IMAGE FINAL (clôture du cabinet) : le site ne montre plus aucune
 * simulation photographique d'espace. Les quatre matières abstraites
 * conservées - archive, signature, terrain, vide - ne représentent ni un
 * bâtiment, ni un atelier, ni un actif : elles portent la mention
 * « Image d'illustration ». Toute la représentation d'ouvrage est passée
 * aux neuf planches gravées, qui portent leur légende de planche.
 *
 * Chaque visuel est compilé par vite-imagetools en AVIF + JPG,
 * plafonné à la largeur native (jamais d'agrandissement).
 */

import signature from '@/assets/v2/signature.jpg?w=640;1024&format=avif;jpg&as=picture';
import vide from '@/assets/v2/vide.jpg?w=640;1024&format=avif;jpg&as=picture';

import archive from '@/assets/v2/archive.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';
import terrain from '@/assets/v2/terrain.jpg?w=640;1080;1600;1920&format=avif;jpg&as=picture';

import ogBase from '@/assets/v2/og-base.jpg?w=640;1200&format=avif;jpg&as=picture';

export type TextureKey = 'archive' | 'signature' | 'terrain' | 'vide' | 'ogBase';

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
  archive: make(archive, "Papier de rapport imprimé, tranche dorée en lumière rasante - image d'illustration"),
  signature: make(signature, "Stylo plume posé sur papier vergé - image d'illustration"),
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
