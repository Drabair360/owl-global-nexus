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
import { PLANCHE_XII, PlancheXIIDrawing } from './PlancheXII';

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
}

/** Le cabinet : dix planches, un seul registre. */
export const CABINET: PlancheEntree[] = [
  { meta: PLANCHE_I, Drawing: PlancheIDrawing, emplacement: '/portefeuille/cao-industries', laiton: 'La ligne de sol' },
  { meta: PLANCHE_II, Drawing: PlancheIIDrawing, emplacement: '/metiers', laiton: 'Le fil conducteur des sept temps' },
  { meta: PLANCHE_III, Drawing: PlancheIIIDrawing, emplacement: '/portefeuille/line-builder', laiton: "La colonne CFG-A de la matrice" },
  { meta: PLANCHE_IV, Drawing: PlancheIVDrawing, emplacement: '/portefeuille/drabair-labs', laiton: "L'arbre de transmission commun" },
  { meta: PLANCHE_V, Drawing: PlancheVDrawing, emplacement: '/portefeuille/weavme', laiton: 'Le segment de résolution' },
  { meta: PLANCHE_VI, Drawing: PlancheVIDrawing, emplacement: '/portefeuille/owl-real-estate', laiton: "Le seuil d'entrée" },
  { meta: PLANCHE_VII, Drawing: PlancheVIIDrawing, emplacement: '/', laiton: 'Le flux lui-même' },
  { meta: PLANCHE_VIII, Drawing: PlancheVIIIDrawing, emplacement: '/groupe', laiton: 'La marche en avant' },
  { meta: PLANCHE_IX, Drawing: PlancheIXDrawing, emplacement: '/engagements', laiton: 'La ligne de raccordement' },
  { meta: PLANCHE_XII, Drawing: PlancheXIIDrawing, emplacement: '404 et états vides', laiton: "L'œil" },
];

export const parNumeral = (n: string) => CABINET.find((e) => e.meta.numeral === n);
