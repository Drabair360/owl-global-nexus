import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  Attache,
  RepereFigure,
  Pastille,
  Nomenclature,
  TraceCache,
  AxeMixte,
  Boulon,
  FlechePente,
} from '../primitives';

/**
 * PLANCHE II — LE CYCLE DE VIE COMPLET D'UN PROJET INDUSTRIEL.
 * Frise gravée à sept temps, chacun porté par son objet-emblème :
 *   1 avant-projet · 2 engineering · 3 procurement · 4 construction et montage
 *   5 tests capacitaires · 6 mise en service · 7 maintenance préventive
 * Le fil conducteur, seul rehaut de laiton, se referme par la boucle
 * maintenance -> conception : le seul retour amont de la planche.
 * Aucune référence normative écrite : les repères sont de convention.
 */

const R1 = 250; // ordonnée de la première rangée
const R2 = 520; // ordonnée de la seconde rangée
const COL = [130, 400, 670, 940]; // quatre colonnes de la rangée haute

export const PLANCHE_II = {
  numeral: 'II',
  title: 'Le cycle de vie complet',
  desc:
    "Gravure au trait, frise à sept temps représentant le cycle de vie complet d'un projet industriel, chaque temps porté par un objet-emblème dessiné dans le langage du dessin d'exécution. Premier temps, avant-projet : un plan-guide plié, son bloc de cotes ouvert et une échelle graphique. Deuxième temps, engineering : trois calques superposés, procédé, charpente et électricité, avec un cartouche de révision portant les lettres A, B et C. Troisième temps, procurement : une caisse d'expédition cerclée, son repère d'équipement et son bon de réception à souche. Quatrième temps, construction et montage : un portique de levage, ses élingues, un palonnier et un boulon de charpente sur gousset. Cinquième temps, tests capacitaires : un manomètre à cadran gravé accompagné d'une courbe débit-pression tracée sur un abaque quadrillé. Sixième temps, mise en service : une armoire de commande ouverte, son sectionneur et sa clé de consignation. Septième temps, maintenance préventive : un graisseur, un filtre en coupe et une roue de périodicité à trois secteurs. Un fil conducteur rehaussé de laiton relie les sept temps dans l'ordre et se referme par une boucle unique, la maintenance qui remonte vers la conception : c'est le seul retour amont du dessin. Une chaîne de cotes en trait mixte figure le calendrier, des jalons marquent les revues de conception, et une courbe de montée en cadence accompagne le sixième temps. Les repères portés sont des étiquettes de convention et aucune donnée réelle n'est inscrite. Nomenclature de dix entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '560 380 400 300',
};

/** Cadre d'un temps de la frise : cellule, pastille, titre. */
const Temps = ({
  x,
  y,
  n,
  titre,
  children,
}: {
  x: number;
  y: number;
  n: number;
  titre: string;
  children: React.ReactNode;
}) => (
  <g>
    <Cadre x={x - 92} y={y - 96} w={184} h={168} weight={FIN} />
    <g transform={`translate(${x} ${y})`}>{children}</g>
    <Pastille x={x - 92} y={y - 96} n={n} />
    <text className="gravure-lettrage" x={x} y={y + 92} fontSize="12" textAnchor="middle">
      {titre}
    </text>
  </g>
);

export const PlancheIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    <RepereFigure x={60} y={96} n="1" title="Les sept temps, dans l'ordre" w={320} />

    {/* ---------- FIL CONDUCTEUR : rehaut de laiton unique ---------- */}
    {/* segments visibles du fil, entre les cellules */}
    {[0, 1, 2].map((i) => (
      <line
        key={i}
        x1={COL[i] + 92}
        y1={R1}
        x2={COL[i + 1] - 92}
        y2={R1}
        stroke={LAITON}
        strokeWidth={FORT}
      />
    ))}
    <path
      d={`M${COL[3] + 92} ${R1} H${COL[3] + 150} V${R2} H${COL[2] + 92}`}
      fill="none"
      stroke={LAITON}
      strokeWidth={FORT}
    />
    {[0, 1].map((i) => (
      <line
        key={`b${i}`}
        x1={COL[i] + 92}
        y1={R2}
        x2={COL[i + 1] - 92}
        y2={R2}
        stroke={LAITON}
        strokeWidth={FORT}
      />
    ))}
    {/* boucle de retour maintenance -> conception : le seul retour amont */}
    <path
      d={`M${COL[2]} ${R2 + 72} V${R2 + 128} H${COL[0] - 76} V${R1} H${COL[0] - 92}`}
      fill="none"
      stroke={LAITON}
      strokeWidth={MOYEN}
      strokeDasharray="9 5"
    />
    <text className="gravure-lettrage" x={COL[0] + 30} y={R2 + 122} fontSize="11" fill={OXYDE}>
      Boucle de retour : la maintenance revient à la conception
    </text>

    {/* ---------- 1 · AVANT-PROJET ---------- */}
    <Temps x={COL[0]} y={R1} n={1} titre="Avant-projet">
      <path d="M-62 -34 L4 -46 L62 -30 L62 34 L4 46 L-62 30 z" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <TraceCache d="M4 -46 V46" />
      <line x1={-46} y1={-8} x2={-14} y2={-8} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={-46} y1={4} x2={-22} y2={4} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={18} y1={-16} x2={52} y2={-16} stroke={OXYDE} strokeWidth={FIN} />
      <line x1={18} y1={-20} x2={18} y2={-12} stroke={OXYDE} strokeWidth={FIN} />
      <line x1={52} y1={-20} x2={52} y2={-12} stroke={OXYDE} strokeWidth={FIN} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={18 + i * 9} y={22} width={9} height={6} fill={i % 2 ? ENCRE : 'none'} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
    </Temps>

    {/* ---------- 2 · ENGINEERING ---------- */}
    <Temps x={COL[1]} y={R1} n={2} titre="Engineering">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Cadre x={-64 + i * 16} y={-44 + i * 16} w={94} h={62} weight={i === 2 ? MOYEN : FIN} />
        </g>
      ))}
      <line x1={-30} y1={0} x2={42} y2={0} stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={-10} cy={-12} r={5} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <g>
        <Cadre x={-64} y={30} w={126} h={22} weight={FIN} />
        {['A', 'B', 'C'].map((l, i) => (
          <g key={l}>
            <line x1={-64 + (i + 1) * 42} y1={30} x2={-64 + (i + 1) * 42} y2={52} stroke={ENCRE} strokeWidth={ULTRAFIN} />
            <text className="gravure-lettrage" x={-43 + i * 42} y={46} fontSize="11" textAnchor="middle">
              {l}
            </text>
          </g>
        ))}
      </g>
    </Temps>

    {/* ---------- 3 · PROCUREMENT ---------- */}
    <Temps x={COL[2]} y={R1} n={3} titre="Procurement">
      <rect x={-58} y={-34} width={110} height={74} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={-28} y1={-34} x2={-28} y2={40} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={22} y1={-34} x2={22} y2={40} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={-58} y1={2} x2={52} y2={2} stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={-3} y={-42} fontSize="11" textAnchor="middle">
        Repère colis
      </text>
      {/* bon de réception à souche */}
      <path d="M58 -10 h34 v52 h-34 z" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
      <line x1={66} y1={-10} x2={66} y2={42} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="3 3" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={70} y1={2 + i * 10} x2={88} y2={2 + i * 10} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
    </Temps>

    {/* ---------- 4 · CONSTRUCTION ET MONTAGE ---------- */}
    <Temps x={COL[3]} y={R1} n={4} titre="Construction et montage">
      <path d="M-60 44 V-40 H60 V44" fill="none" stroke={ENCRE} strokeWidth={FORT} />
      <line x1={-60} y1={-40} x2={60} y2={-40} stroke={ENCRE} strokeWidth={FORT} />
      {/* élingues et palonnier */}
      <line x1={0} y1={-40} x2={0} y2={-12} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={-30} y1={-12} x2={30} y2={-12} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={-30} y1={-12} x2={-16} y2={16} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={30} y1={-12} x2={16} y2={16} stroke={ENCRE} strokeWidth={FIN} />
      <rect x={-24} y={16} width={48} height={22} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* gousset boulonné */}
      <path d="M-60 -40 L-60 -12 L-32 -40 z" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <Boulon x={-52} y={-30} r={2.4} />
      <Boulon x={-44} y={-34} r={2.4} />
    </Temps>

    {/* ---------- 5 · TESTS CAPACITAIRES ---------- */}
    <Temps x={COL[0]} y={R2} n={5} titre="Tests capacitaires">
      <circle cx={-38} cy={-4} r={34} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={-38} cy={-4} r={28} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
      {Array.from({ length: 9 }).map((_, i) => {
        const a = Math.PI * (0.75 + (i * 1.5) / 8);
        return (
          <line
            key={i}
            x1={-38 + Math.cos(a) * 24}
            y1={-4 + Math.sin(a) * 24}
            x2={-38 + Math.cos(a) * 30}
            y2={-4 + Math.sin(a) * 30}
            stroke={ENCRE}
            strokeWidth={ULTRAFIN}
          />
        );
      })}
      <line x1={-38} y1={-4} x2={-20} y2={-22} stroke={OXYDE} strokeWidth={MOYEN} />
      <circle cx={-38} cy={-4} r={3} fill={ENCRE} />
      {/* abaque débit / pression */}
      <Cadre x={8} y={-36} w={70} h={64} weight={FIN} />
      {[1, 2, 3].map((i) => (
        <g key={i}>
          <line x1={8 + i * 17.5} y1={-36} x2={8 + i * 17.5} y2={28} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
          <line x1={8} y1={-36 + i * 16} x2={78} y2={-36 + i * 16} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
        </g>
      ))}
      <path d="M8 24 C 30 20, 46 -4, 78 -30" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    </Temps>

    {/* ---------- 6 · MISE EN SERVICE ---------- */}
    <Temps x={COL[1]} y={R2} n={6} titre="Mise en service">
      <rect x={-56} y={-42} width={78} height={90} fill="none" stroke={ENCRE} strokeWidth={FORT} />
      <path d="M22 -42 L60 -32 V38 L22 48" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {/* sectionneur */}
      <line x1={-42} y1={-24} x2={-42} y2={-6} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={-42} y1={-6} x2={-28} y2={10} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={-28} y1={10} x2={-28} y2={26} stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={-42} cy={-6} r={2.4} fill={ENCRE} />
      <circle cx={-28} cy={10} r={2.4} fill={ENCRE} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={-14} y={-30 + i * 26} width={30} height={16} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      ))}
      {/* clé de consignation */}
      <circle cx={-46} cy={38} r={7} fill="none" stroke={OXYDE} strokeWidth={MOYEN} />
      <line x1={-40} y1={40} x2={-20} y2={40} stroke={OXYDE} strokeWidth={MOYEN} />
      <line x1={-24} y1={40} x2={-24} y2={46} stroke={OXYDE} strokeWidth={MOYEN} />
      {/* courbe de montée en cadence */}
      <path d="M28 44 C 44 42, 50 8, 62 -34" fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="5 3" />
    </Temps>

    {/* ---------- 7 · MAINTENANCE PRÉVENTIVE ---------- */}
    <Temps x={COL[2]} y={R2} n={7} titre="Maintenance préventive">
      {/* graisseur */}
      <path d="M-70 20 v-22 h14 v22 z" fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M-63 -2 v-14 m-6 0 h12" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {/* filtre en coupe */}
      <rect x={-40} y={-30} width={34} height={62} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={-34} y={-22} width={22} height={46} fill={poche(p, 'acier')} opacity="0.5" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1={-34} y1={-18 + i * 8} x2={-12} y2={-22 + i * 8} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      {/* roue de périodicité, trois secteurs */}
      <circle cx={44} cy={2} r={34} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={44} cy={2} r={11} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {[0, 1, 2].map((i) => {
        const a = (i * 2 * Math.PI) / 3 - Math.PI / 2;
        return (
          <line
            key={i}
            x1={44 + Math.cos(a) * 11}
            y1={2 + Math.sin(a) * 11}
            x2={44 + Math.cos(a) * 34}
            y2={2 + Math.sin(a) * 34}
            stroke={ENCRE}
            strokeWidth={FIN}
          />
        );
      })}
      <text className="gravure-lettrage" x={44} y={-14} fontSize="10" textAnchor="middle">
        P1
      </text>
      <text className="gravure-lettrage" x={26} y={22} fontSize="10" textAnchor="middle">
        P2
      </text>
      <text className="gravure-lettrage" x={62} y={22} fontSize="10" textAnchor="middle">
        P3
      </text>
    </Temps>

    {/* ---------- CALENDRIER ET JALONS ---------- */}
    <RepereFigure x={800} y={618} n="2" title="Jalons et calendrier" w={280} />
    <g transform="translate(800 632)">
      <AxeMixte x1={0} y1={40} x2={280} y2={40} />
      {[0, 56, 112, 168, 224, 280].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={28} x2={x} y2={52} stroke={ENCRE} strokeWidth={FIN} />
          {i < 5 && (
            <path d={`M${x + 20} 40 l0 -12 l10 12 l-10 12 z`} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} />
          )}
        </g>
      ))}
      <text className="gravure-lettrage" x={0} y={76} fontSize="11">
        Revues, réserves, réception
      </text>
    </g>

    <Attache x={COL[2]} y={R2 + 72} dx={150} dy={44} label="Le seul retour amont" />

    {/* ---------- NOMENCLATURE ---------- */}
    <Nomenclature
      x={96}
      y={716}
      perCol={5}
      colGap={300}
      items={[
        'Avant-projet et études de faisabilité',
        'Engineering, trois disciplines',
        'Procurement et réception',
        'Construction et montage',
        'Tests capacitaires',
        'Mise en service',
        'Maintenance préventive',
        'Fil conducteur des sept temps',
        'Boucle maintenance vers conception',
        'Jalons de calendrier, repères de convention',
      ]}
    />

    <Cartouche x={880} y={790} numeral="II" title="Le cycle de vie complet" echelle="Éch. symb." />
  </>
);
