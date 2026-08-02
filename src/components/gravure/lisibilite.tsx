import React, { ReactNode } from 'react';
import { ENCRE, OXYDE, LAITON, FIN, ULTRAFIN } from './defs';

/**
 * PHASE L — LE SYSTÈME DE LIBELLÉS ET LES TROIS LECTURES.
 *
 * L1 — Le texte ne se pose plus « où il reste de la place ».
 *   · Les phrases vivent dans des ÉCHELLES DE MARGE (gauche et/ou droite de
 *     la figure), alignées verticalement, reliées à leur élément par une
 *     ligne d'attache à UN SEUL COUDE.
 *   · Dans le dessin : uniquement des repères courts (T-101, ⓐ, cotes).
 *   · Plancher typographique : libellés >= 12, repères >= 11 (unités de
 *     planche ; les planches sont rendues à l'échelle 1 ou au-dessus).
 *   · Espacement : 6 entre deux textes, 4 entre un texte et un trait
 *     étranger — vérifié par scripts/planche-lisibilite-check.mjs.
 *
 * L3 — Les trois lectures :
 *   3 s   TitrePlanche + forme générale + SensLecture
 *   30 s  BandeauZone (les zones nommées) + le laiton qui guide
 *   3 min repères, cercles de détail, nomenclatures
 *
 * Attributs de contrôle (lus par le script) :
 *   data-lis="titre|zone|libelle|repere|bloc"  sur les textes
 *   data-lis="attache"                          sur les lignes d'attache
 */

/** Plancher typographique de planche (L1). */
export const TAILLE_LIBELLE = 12;
export const TAILLE_REPERE = 11;

/* ------------------------------------------------------------------ *
 * L3 / 3 SECONDES — LE TITRE DE PLANCHE
 * ------------------------------------------------------------------ */
export const TitrePlanche = ({
  x,
  y,
  titre,
  sous,
}: {
  x: number;
  y: number;
  titre: string;
  sous?: string;
}) => (
  <g>
    <text className="gravure-lettrage" data-lis="titre" x={x} y={y} fontSize="26" fill={ENCRE}>
      {titre}
    </text>
    {sous && (
      <text className="gravure-lettrage" data-lis="titre" x={x} y={y + 34} fontSize="12" fill={OXYDE}>
        {sous}
      </text>
    )}
    <line x1={x} y1={y + (sous ? 46 : 12)} x2={x + 1120} y2={y + (sous ? 46 : 12)} stroke={ENCRE} strokeWidth={FIN} />
  </g>
);

/* ------------------------------------------------------------------ *
 * L3 / 30 SECONDES — LES ZONES NOMMÉES EN BANDEAUX
 * ------------------------------------------------------------------ */
export const BandeauZone = ({
  x,
  y,
  w,
  h,
  label,
  teinte = 0.05,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  teinte?: number;
}) => (
  <g>
    <g data-lis="zone-fond">
      <rect x={x} y={y} width={w} height={h} fill={`hsl(var(--gravure-encre) / ${teinte})`} />
    </g>
    <line x1={x} y1={y} x2={x} y2={y + h} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
    <text
      className="gravure-lettrage"
      data-lis="zone"
      x={x + 8}
      y={y - 6}
      fontSize={TAILLE_REPERE}
      fill={OXYDE}
    >
      {label}
    </text>
  </g>
);

/** Le sens de lecture, flèche unique sous la figure. */
export const SensLecture = ({
  x,
  y,
  w,
  label,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
}) => (
  <g>
    <line x1={x} y1={y} x2={x + w - 12} y2={y} stroke={OXYDE} strokeWidth={ULTRAFIN} />
    <path d={`M${x + w} ${y} l-14 -5 v10 z`} fill={OXYDE} />
    <text
      className="gravure-lettrage gravure-reserve"
      data-lis="repere"
      data-lis-reserve="true"
      x={x}
      y={y - 8}
      fontSize={TAILLE_REPERE}
      fill={OXYDE}
    >
      {label}
    </text>
  </g>
);

/* ------------------------------------------------------------------ *
 * L1 — L'ÉCHELLE DE LIBELLÉS EN MARGE
 * ------------------------------------------------------------------ */
export interface Libelle {
  /** Repère court porté dans le dessin, ex. « T-101 » ou « ⓐ ». */
  repere?: string;
  /** La phrase — elle ne descend jamais dans le dessin. */
  label: string;
  /** Le point visé dans le dessin. Absent : entrée de légende sans attache. */
  cible?: [number, number];
  /** Rehaut de laiton : réservé à l'élément de choix de la planche. */
  or?: boolean;
}

/**
 * Colonne de libellés alignée en échelle, à gauche ou à droite du dessin.
 * Une ligne d'attache par entrée, un coude maximum, jamais de phrase dans
 * le dessin.
 */
export const EchelleLibelles = ({
  x,
  yStart,
  yStep = 26,
  side = 'right',
  items,
  coude = 30,
}: {
  /** Abscisse du rail : le texte commence (ou finit) ici. */
  x: number;
  yStart: number;
  yStep?: number;
  side?: 'left' | 'right';
  items: Libelle[];
  /** Retrait du coude par rapport au rail. */
  coude?: number;
}) => (
  <g>
    {items.map((it, i) => {
      const ry = yStart + i * yStep;
      const tx = side === 'right' ? x + 6 : x - 6;
      const kx = side === 'right' ? x - coude : x + coude;
      const c = it.or ? LAITON : OXYDE;
      return (
        <g key={it.label}>
          {it.cible && (
            <g data-lis="attache">
              <circle cx={it.cible[0]} cy={it.cible[1]} r="1.8" fill={c} />
              <path
                d={`M${it.cible[0]} ${it.cible[1]} L${kx} ${ry} L${x} ${ry}`}
                fill="none"
                stroke={c}
                strokeWidth={ULTRAFIN}
              />
            </g>
          )}
          <text
            className="gravure-lettrage"
            data-lis="libelle"
            x={tx}
            y={ry + 4}
            fontSize={TAILLE_LIBELLE}
            textAnchor={side === 'right' ? 'start' : 'end'}
            fill={it.or ? LAITON : OXYDE}
          >
            {it.repere ? `${it.repere} - ${it.label}` : it.label}
          </text>
        </g>
      );
    })}
  </g>
);

/**
 * Repère court porté DANS le dessin — jamais une phrase.
 * Il porte sa RÉSERVE de fond par défaut : le trait qu'il croise s'interrompt
 * derrière le signe. Poser `reserve={false}` quand le repère est isolé.
 */
export const Repere = ({
  x,
  y,
  children,
  anchor = 'middle',
  reserve = true,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: 'start' | 'middle' | 'end';
  reserve?: boolean;
}) => (
  <text
    className={`gravure-lettrage${reserve ? ' gravure-reserve' : ''}`}
    data-lis="repere"
    data-lis-reserve={reserve ? 'true' : 'false'}
    x={x}
    y={y}
    fontSize={TAILLE_REPERE}
    textAnchor={anchor}
    fill={ENCRE}
  >
    {children}
  </text>
);


/** Bloc de texte hors dessin (nomenclature, cartouche) : exempt du rail. */
export const BlocTexte = ({ children }: { children: ReactNode }) => (
  <g data-lis="bloc">{children}</g>
);
