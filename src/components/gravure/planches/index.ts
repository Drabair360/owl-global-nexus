import React from 'react';
import { PLANCHE_I, PlancheIDrawing } from './PlancheI';
import { PLANCHE_II, PlancheIIDrawing } from './PlancheII';
import { PLANCHE_III, PlancheIIIDrawing } from './PlancheIII';
import { PLANCHE_IV, PlancheIVDrawing } from './PlancheIV';
import { PLANCHE_V, PlancheVDrawing } from './PlancheV';
import { PLANCHE_VI, PlancheVIDrawing } from './PlancheVI';
import { PLANCHE_VII, PlancheVIIDrawing } from './PlancheVII';
import { PLANCHE_VIII, PlancheVIIIDrawing } from './PlancheVIII';
import { PLANCHE_IX, PlancheIXDrawing } from './PlancheIX';

export interface PlancheMeta {
  numeral: string;
  title: string;
  desc: string;
  viewBox: string;
  detailViewBox?: string;
}

export interface PlancheEntree {
  meta: PlancheMeta;
  Drawing: (props: { p: string }) => JSX.Element;
  /** Emplacement de production prévu (§5 - partition). */
  emplacement: string;
  /** Ce que le laiton rehausse - un seul par planche. */
  laiton: string;
  /**
   * Publication. La PL. VII (modèle de flux du groupe) existe au dossier
   * mais N'EST PAS PUBLIÉE : le dossier reste une série de neuf planches,
   * l'index demeure « PL. n/9 », aucune renumérotation.
   */
  publiee?: boolean;
}

/** Le cabinet : neuf planches, un seul registre. */
export const CABINET: PlancheEntree[] = [
  { meta: PLANCHE_I, Drawing: PlancheIDrawing, emplacement: '/portefeuille/cao-industries', laiton: 'La ligne de sol' },
  { meta: PLANCHE_II, Drawing: PlancheIIDrawing, emplacement: '/metiers', laiton: 'Le fil conducteur des sept temps' },
  { meta: PLANCHE_III, Drawing: PlancheIIIDrawing, emplacement: '/portefeuille/line-builder', laiton: "La colonne CFG-A de la matrice" },
  { meta: PLANCHE_IV, Drawing: PlancheIVDrawing, emplacement: '/portefeuille/drabair-labs', laiton: "L'arbre de transmission commun" },
  { meta: PLANCHE_V, Drawing: PlancheVDrawing, emplacement: '/portefeuille/weavme', laiton: 'Le segment de résolution' },
  { meta: PLANCHE_VI, Drawing: PlancheVIDrawing, emplacement: '/portefeuille/owl-real-estate', laiton: "Le seuil d'entrée" },
  { meta: PLANCHE_VII, Drawing: PlancheVIIDrawing, emplacement: '(hors publication)', laiton: 'Le circuit du modèle', publiee: false },
  { meta: PLANCHE_VIII, Drawing: PlancheVIIIDrawing, emplacement: '/metiers', laiton: 'La marche en avant' },
  { meta: PLANCHE_IX, Drawing: PlancheIXDrawing, emplacement: '/engagements', laiton: 'La ligne de raccordement' },
];

/** Les planches effectivement publiées sur le site. */
export const CABINET_PUBLIE = CABINET.filter((e) => e.publiee !== false);

export const parNumeral = (n: string) => CABINET.find((e) => e.meta.numeral === n);
