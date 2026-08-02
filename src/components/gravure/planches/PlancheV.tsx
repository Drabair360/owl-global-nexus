import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  PastilleLettre,
  NomenclatureLettres,
  Attache,
} from '../primitives';

/**
 * PLANCHE V — GRAPHIQUE D'ENGAGEMENTS (dossier OWL-1, PL. 5/9).
 * Transposition du graphique horaire des chemins de fer (type Ibry) au
 * registre des engagements : le temps en abscisse, les ressources en
 * ordonnée, chaque engagement en segment oblique.
 *   FIG. 1  le graphique : huit périodes, six ressources, cinq engagements,
 *           un conflit détecté au croisement de deux segments
 *   FIG. 2  détail x3 du conflit et de sa résolution
 *   FIG. 3  nomenclature des signes : les conventions du graphique
 * Rehaut de laiton unique : LE SEGMENT DE RÉSOLUTION.
 */

const X0 = 140;
const PAS = 106;
const Y0 = 158;
const RANG = 44;
const NB_P = 8;
const NB_R = 6;

const X = (w: number) => X0 + w * PAS;
const Y = (r: number) => Y0 + r * RANG;

const HAUT = Y(0) - 16;
const BAS = Y(NB_R - 1) + 18;

/** Un engagement : polyligne oblique reliant ressources et périodes. */
const Engagement = ({
  pts,
  type = 'ferme',
  or = false,
}: {
  pts: [number, number][];
  type?: 'ferme' | 'option' | 'recurrent';
  or?: boolean;
}) => {
  const d = pts.map(([w, r], i) => `${i === 0 ? 'M' : 'L'}${X(w)} ${Y(r)}`).join(' ');
  const c = or ? LAITON : ENCRE;
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={c}
        strokeWidth={type === 'ferme' ? (or ? FIN : MOYEN) : FIN}
        strokeDasharray={type === 'option' ? '7 5' : type === 'recurrent' ? '14 4 3 4' : undefined}
      />
      {pts.map(([w, r], i) => (
        <circle
          key={`${w}-${r}-${i}`}
          cx={X(w)}
          cy={Y(r)}
          r={3}
          fill={type === 'option' ? 'hsl(var(--gravure-fond))' : c}
          stroke={c}
          strokeWidth={ULTRAFIN}
        />
      ))}
    </g>
  );
};

/** Marque de conflit : croix fine à l'oxyde, posée au croisement. */
const Conflit = ({ x, y }: { x: number; y: number }) => (
  <g>
    <path d={`M${x - 9} ${y - 9} l18 18 M${x + 9} ${y - 9} l-18 18`} stroke={OXYDE} strokeWidth={FIN} />
    <circle cx={x} cy={y} r={13} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />
  </g>
);

/** Ligne de la nomenclature des signes : l'échantillon de trait, puis sa lecture. */
const Signe = ({ x, y, children, draw }: { x: number; y: number; children: string; draw: React.ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    {draw}
    <text className="gravure-lettrage" x={92} y={4} fontSize="12">
      {children}
    </text>
  </g>
);

export const PLANCHE_V = {
  numeral: 'V',
  title: "Graphique d'engagements",
  desc:
    "Gravure au trait, planche à trois figures, où le registre des engagements est porté sur un graphique horaire du type employé par les chemins de fer au dix-neuvième siècle. FIGURE 1 : l'abscisse porte huit périodes symboliques, l'ordonnée six ressources rangées de A à F, et chaque engagement est un segment oblique qui relie une ressource à une période ; les engagements confirmés sont au trait fort, les options au trait interrompu, la récurrence au trait mixte, le préavis marqué d'un fanion à l'oxyde. Deux segments se croisent : c'est un conflit d'engagement, cerclé sur place, et sa résolution est portée en trait fin rehaussé de laiton, l'engagement étant déplacé sur une ressource libre. Une tenue sur deux périodes est marquée d'un crochet. FIGURE 2, détail à trois fois l'échelle du croisement : les deux segments en cause, le point de conflit, le segment de résolution, la marge de préavis et la ressource de report, décrits par huit lettres de nomenclature secondaire. FIGURE 3, nomenclature des signes : chaque convention de trait est montrée en échantillon puis nommée. Les périodes et les ressources sont symboliques, aucune donnée réelle, aucun nom, aucun lieu ne figure. Nomenclature de six entrées et cartouche de dossier portant la mention concept.",
  viewBox: '0 0 1240 900',
  detailViewBox: '860 440 340 280',
};

export const PlancheVDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LE GRAPHIQUE ================= */}
    <RepereFigure x={60} y={100} n="1" title="Graphique d'engagements - périodes en abscisse, ressources en ordonnée" w={700} />

    {/* trame : périodes */}
    {Array.from({ length: NB_P }).map((_, i) => (
      <g key={`p${i}`}>
        <line x1={X(i)} y1={HAUT} x2={X(i)} y2={BAS} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity={i % 2 === 0 ? 0.7 : 0.45} />
        <text className="gravure-lettrage" x={X(i)} y={HAUT - 8} fontSize="10" textAnchor="middle" fill={OXYDE}>
          S{i + 1}
        </text>
      </g>
    ))}
    {/* trame : ressources */}
    {Array.from({ length: NB_R }).map((_, r) => (
      <g key={`r${r}`}>
        <line x1={X0 - 26} y1={Y(r)} x2={X(NB_P - 1) + 26} y2={Y(r)} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
        <text className="gravure-lettrage" x={X0 - 36} y={Y(r) + 4} fontSize="11" textAnchor="end">
          {String.fromCharCode(65 + r)}
        </text>
      </g>
    ))}
    <line x1={X0 - 26} y1={BAS} x2={X(NB_P - 1) + 26} y2={BAS} stroke={ENCRE} strokeWidth={FORT} />
    <line x1={X0 - 26} y1={HAUT} x2={X0 - 26} y2={BAS} stroke={ENCRE} strokeWidth={FORT} />
    <text className="gravure-lettrage" x={X0 - 36} y={HAUT - 8} fontSize="10" textAnchor="end" fill={OXYDE}>
      Ress.
    </text>

    {/* engagements */}
    <Engagement pts={[[0, 0], [2, 1], [5, 1], [7, 3]]} />
    <Engagement pts={[[1, 2], [6, 2]]} />
    <Engagement pts={[[2, 4], [5, 1]]} />
    <Engagement pts={[[0, 3], [3, 5], [6, 5]]} type="option" />
    <Engagement pts={[[4, 0], [7, 0]]} type="recurrent" />

    {/* tenue sur deux périodes : crochet sous le segment maintenu */}
    <path d={`M${X(2)} ${Y(1) + 12} v8 h${PAS * 3} v-8`} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
    <text className="gravure-lettrage" x={X(2) + 8} y={Y(1) + 36} fontSize="11">
      Tenue sur deux périodes
    </text>

    {/* préavis : fanion à l'oxyde en amont d'un engagement */}
    <g>
      <line x1={X(1) - 26} y1={Y(2) - 22} x2={X(1) - 26} y2={Y(2)} stroke={OXYDE} strokeWidth={FIN} />
      <path d={`M${X(1) - 26} ${Y(2) - 22} l18 6 -18 6 z`} fill={OXYDE} />
      <text className="gravure-lettrage" x={X(1) - 44} y={Y(2) - 30} fontSize="10" fill={OXYDE} textAnchor="start">
        Préavis
      </text>
    </g>

    {/* conflit détecté au croisement, et résolution en laiton */}
    <Conflit x={564} y={Y(2)} />
    <Engagement pts={[[2, 4], [5, 0]]} or />
    <line x1={X(5)} y1={Y(0)} x2={X(5) + 40} y2={Y(0) + 26} stroke={LAITON} strokeWidth={ULTRAFIN} />
    <text className="gravure-lettrage" x={X(5) + 46} y={Y(0) + 30} fontSize="12" fill={LAITON}>
      Résolution : report sur ressource libre
    </text>
    <Attache x={564} y={Y(2)} dx={-166} dy={62} label="Conflit détecté" />

    <Pastille x={X0 - 76} y={Y(0)} n={1} />
    <Pastille x={X(NB_P - 1) + 52} y={Y(2)} n={2} />
    <Pastille x={X(4) + 6} y={Y(5) - 22} n={3} />
    <Pastille x={X(7) + 52} y={Y(0)} n={4} />


    {/* ================= FIG. 2 — DÉTAIL DU CONFLIT ================= */}
    <RepereFigure x={860} y={442} n="2" title="Le conflit et sa résolution x3" w={300} />

    <g transform="translate(1010 588)">
      <CercleDetail cx={0} cy={0} r={126} label="x3" />
      {/* les deux segments en cause */}
      <line x1={-116} y1={30} x2={116} y2={30} stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={-70} y1={110} x2={92} y2={-96} stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={7} cy={30} r={12} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" />
      <path d="M-2 21 l18 18 M16 21 l-18 18" stroke={OXYDE} strokeWidth={FIN} />
      {/* le segment de résolution : trait fin, laiton */}
      <line x1={-70} y1={110} x2={104} y2={-52} stroke={LAITON} strokeWidth={FIN} />
      {/* marge de préavis */}
      <line x1={-70} y1={110} x2={-70} y2={74} stroke={OXYDE} strokeWidth={ULTRAFIN} />
      <PastilleLettre x={-112} y={-14} l="a" />
      <PastilleLettre x={-40} y={4} l="b" />
      <PastilleLettre x={30} y={4} l="c" />
      <PastilleLettre x={96} y={-30} l="d" />
      <PastilleLettre x={110} y={54} l="e" />
      <PastilleLettre x={28} y={100} l="f" />
      <PastilleLettre x={-58} y={62} l="g" />
      <PastilleLettre x={-112} y={72} l="h" />
    </g>

    <NomenclatureLettres
      x={620}
      y={486}
      items={[
        'Engagement confirmé, ressource tenue',
        'Engagement entrant, pente de report',
        'Point de conflit : même ressource, même période',
        'Segment de résolution',
        'Ressource de report, libre',
        'Origine de la demande',
        'Marge de préavis',
        'Ligne de ressource',
      ]}
    />

    {/* ================= FIG. 3 — NOMENCLATURE DES SIGNES ================= */}
    <RepereFigure x={60} y={470} n="3" title="Nomenclature des signes" w={300} />

    <g transform="translate(80 508)">
      <Signe x={0} y={0} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={ENCRE} strokeWidth={MOYEN} />}>
        Engagement confirmé
      </Signe>
      <Signe x={0} y={34} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="7 5" />}>
        Option, non ferme
      </Signe>
      <Signe x={0} y={68} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="14 4 3 4" />}>
        Engagement récurrent
      </Signe>
      <Signe x={0} y={102} draw={<line x1={0} y1={0} x2={76} y2={0} stroke={LAITON} strokeWidth={FIN} />}>
        Segment de résolution
      </Signe>
      <Signe
        x={0}
        y={136}
        draw={
          <g>
            <path d="M29 -9 l18 18 M47 -9 l-18 18" stroke={OXYDE} strokeWidth={FIN} />
          </g>
        }
      >
        Conflit détecté
      </Signe>
      <Signe
        x={0}
        y={170}
        draw={
          <g>
            <line x1={38} y1={-14} x2={38} y2={6} stroke={OXYDE} strokeWidth={FIN} />
            <path d="M38 -14 l16 5 -16 5 z" fill={OXYDE} />
          </g>
        }
      >
        Préavis
      </Signe>
      <Signe
        x={0}
        y={204}
        draw={<path d="M8 -8 v10 h60 v-10" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />}
      >
        Tenue sur plusieurs périodes
      </Signe>
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={470}
      y={730}
      perCol={4}
      colGap={0}
      items={[
        'Rang de ressource, A à F',
        'Période symbolique, S1 à S8',
        'Engagement porté au registre',
        'Résolution de conflit',
      ]}
    />

    <Cartouche
      x={880}
      y={790}
      numeral="V"
      title="Graphique d'engagements"
      echelle="Éch. symb."
      dossier="Usine de référence OWL-1 - CONCEPT"
      index="PL. 5/9"
      renvois={['Ressources en place : PL. VIII', 'Modèle de groupe : PL. VII']}
    />
  </>
);
