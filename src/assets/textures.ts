/**
 * Banque de textures institutionnelles - Owl International.
 *
 * Registre : abstrait, matières et architecture parisienne générique.
 * Interdit d'utilisation comme preuve implicite d'actif du groupe.
 * À rendre exclusivement via <Duotone> pour cohérence encre/or.
 */

import concrete from '@/assets/texture-concrete.jpg';
import stone from '@/assets/texture-stone.jpg';
import metal from '@/assets/texture-metal.jpg';
import light from '@/assets/texture-light.jpg';
import parisRooftops from '@/assets/texture-paris-rooftops.jpg';

export type TextureKey = 'concrete' | 'stone' | 'metal' | 'light' | 'paris';

export interface Texture {
  src: string;
  /** Alt honnête : décrit la matière, jamais un actif. */
  alt: string;
  width: number;
  height: number;
}

export const textures: Record<TextureKey, Texture> = {
  concrete: {
    src: concrete,
    alt: "Détail de béton brut - image d'illustration",
    width: 1600,
    height: 1200,
  },
  stone: {
    src: stone,
    alt: "Fragment de pierre sculptée - image d'illustration",
    width: 1600,
    height: 1200,
  },
  metal: {
    src: metal,
    alt: "Détail de bronze patiné - image d'illustration",
    width: 1600,
    height: 1200,
  },
  light: {
    src: light,
    alt: "Lumière traversant une fenêtre parisienne - image d'illustration",
    width: 1600,
    height: 1200,
  },
  paris: {
    src: parisRooftops,
    alt: "Toits de Paris à l'aube - image d'illustration",
    width: 1600,
    height: 1072,
  },
};
