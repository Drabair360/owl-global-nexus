/**
 * Banque de textures institutionnelles V2 - Owl International.
 *
 * Grammaire unique : crépuscule tardif, source chaude unique contre ambiance encre,
 * 35-50 mm, grain film, aucune personne, aucun logo, aucun texte lisible.
 * Interdit d'utilisation comme preuve implicite d'actif du groupe.
 * À rendre exclusivement via <Duotone> + <Legende> pour cohérence encre/or et honnêteté.
 */

import industrial from '@/assets/v2/industrial.jpg';
import lab from '@/assets/v2/lab.jpg';
import studio from '@/assets/v2/studio.jpg';
import atelier from '@/assets/v2/atelier.jpg';
import prestige from '@/assets/v2/prestige.jpg';
import prestigeWide from '@/assets/v2/prestige-wide.jpg';
import skyline from '@/assets/v2/skyline.jpg';
import archive from '@/assets/v2/archive.jpg';
import signature from '@/assets/v2/signature.jpg';
import corridor from '@/assets/v2/corridor.jpg';
import terrain from '@/assets/v2/terrain.jpg';
import vide from '@/assets/v2/vide.jpg';
import ogBase from '@/assets/v2/og-base.jpg';

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

export interface Texture {
  src: string;
  /** Alt honnête : décrit la matière, jamais un actif, jamais un lieu situable. */
  alt: string;
  width: number;
  height: number;
}

export const textures: Record<TextureKey, Texture> = {
  industrial: {
    src: industrial,
    alt: "Hall industriel contemporain en lumière rasante - image d'illustration",
    width: 1024,
    height: 1280,
  },
  lab: {
    src: lab,
    alt: "Détail de machine de précision en aluminium brossé - image d'illustration",
    width: 1024,
    height: 1280,
  },
  studio: {
    src: studio,
    alt: "Trame de lumière architecturale nocturne - image d'illustration",
    width: 1024,
    height: 1280,
  },
  atelier: {
    src: atelier,
    alt: "Matière tissée et bois patiné en lumière douce - image d'illustration",
    width: 1024,
    height: 1280,
  },
  prestige: {
    src: prestige,
    alt: "Façade en pierre blonde et ferronneries au crépuscule - image d'illustration",
    width: 1024,
    height: 1280,
  },
  prestigeWide: {
    src: prestigeWide,
    alt: "Architecture en pierre blonde au crépuscule - image d'illustration",
    width: 1920,
    height: 832,
  },
  skyline: {
    src: skyline,
    alt: "Toits européens de nuit, zinc et cheminées - image d'illustration",
    width: 1920,
    height: 832,
  },
  archive: {
    src: archive,
    alt: "Papier de rapport imprimé, tranche dorée en lumière rasante - image d'illustration",
    width: 1920,
    height: 832,
  },
  signature: {
    src: signature,
    alt: "Stylo plume posé sur papier vergé - image d'illustration",
    width: 1024,
    height: 1280,
  },
  corridor: {
    src: corridor,
    alt: "Enfilade de portes d'un couloir haussmannien sobre - image d'illustration",
    width: 1920,
    height: 832,
  },
  terrain: {
    src: terrain,
    alt: "Matière minérale ocre au crépuscule - image d'illustration",
    width: 1920,
    height: 832,
  },
  vide: {
    src: vide,
    alt: "Mur d'encre traversé d'un unique rai de lumière - image d'illustration",
    width: 1024,
    height: 1280,
  },
  ogBase: {
    src: ogBase,
    alt: "Fond institutionnel - image d'illustration",
    width: 1200,
    height: 630,
  },
};
