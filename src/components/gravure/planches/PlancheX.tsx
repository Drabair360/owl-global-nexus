import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  Attache,
  ChaineCotes,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  AxeMixte,
  TraceCache,
  HachuresVivantes,
} from '../primitives';

/**
 * PLANCHE X — L'ÉTABLI DES TROIS MÉTIERS.
 * Vocabulaire d'outillage : plateau, valet, mors, té, équerre, clé plate,
 * plume et son bec.
 *   FIG. 1  l'établi vu de dessus, trois outils entrelacés
 *   FIG. 2  détail x4 du bec de plume et de sa fente
 *   FIG. 3  coupe du plateau et de son piètement
 * Rehaut de laiton unique : LA PLUME.
 */

export const PLANCHE_X = {
  numeral: 'X',
  title: "L'établi des trois métiers",
  desc:
    "Gravure au trait, planche à trois figures. FIGURE 1, un établi vu de dessus : plateau de bois poché en madrures fines, arêtes vives, un valet d'établi engagé dans son trou, et trois outils posés en travers, entrelacés sans se recouvrir tout à fait. Un té de dessinateur et son équerre à quarante-cinq degrés figurent la conception ; une clé plate à deux ouvertures figure l'exécution ; une plume à bec, rehaussée de laiton, figure l'écrit qui engage. Les outils croisent leurs axes en trait mixte au centre du plateau et une chaîne de cotes symboliques borde le champ. FIGURE 2, détail à quatre fois l'échelle du bec de la plume : réservoir, fente médiane, épaulement, pointe, et le trait qu'elle laisse, dessiné une seule fois sous la pointe. FIGURE 3, coupe transversale de l'établi : plateau et sa contre-plaque, traverse d'assemblage à tenon et mortaise dessinée en trait interrompu parce que masquée, pieds sur patins, et le trou de valet traversant ; le sol est figuré par un trait fort et une hachure rase. Aucun texte descriptif dans le dessin, aucune marque, aucune donnée chiffrée réelle. Nomenclature de neuf entrées et cartouche.",
  viewBox: '0 0 1240 900',
};

export const PlancheXDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — L'ÉTABLI VU DE DESSUS ================= */}
    <RepereFigure x={60} y={96} n="1" title="Établi, vue de dessus" w={300} />

    <g transform="translate(90 140)">
      <rect x={0} y={0} width={700} height={380} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={FORT} />
      <rect x={16} y={16} width={668} height={348} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
      {/* trou de valet */}
      <circle cx={92} cy={92} r={11} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <TraceCache d="M92 103 v34" />
      <Pastille x={92} y={58} n={1} />

      {/* té de dessinateur */}
      <g transform="translate(120 240) rotate(-14)">
        <rect x={0} y={0} width={420} height={16} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
        <rect x={-8} y={-26} width={22} height={68} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
        <AxeMixte x1={-30} y1={8} x2={450} y2={8} />
      </g>
      {/* équerre 45 degrés */}
      <path d="M330 60 L490 220 L330 220 z" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M348 90 L462 204 L348 204 z" fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
      <Pastille x={500} y={92} n={2} />

      {/* clé plate à deux ouvertures */}
      <g transform="translate(200 300) rotate(8)">
        <path
          d="M0 0 h180 v18 h-180 z M-34 -12 a22 22 0 1 0 0 42 l22 -6 v-30 z M214 -12 a20 20 0 1 1 0 42 l-20 -6 v-30 z"
          fill="hsl(var(--gravure-fond))"
          stroke={ENCRE}
          strokeWidth={MOYEN}
        />
        <path d="M-30 -2 h16 v22 h-16 z M198 0 h14 v18 h-14 z" fill="none" stroke={ENCRE} strokeWidth={FIN} />
        <Pastille x={230} y={-24} n={3} />
      </g>

      {/* plume : unique rehaut de laiton */}
      <g transform="translate(420 130) rotate(38)">
        <path d="M0 0 h150 l40 12 l-40 12 h-150 z" fill="hsl(var(--gravure-fond))" stroke={LAITON} strokeWidth={FORT} />
        <line x1={150} y1={12} x2={186} y2={12} stroke={LAITON} strokeWidth={MOYEN} />
        <path d="M0 4 h120" stroke={ENCRE} strokeWidth={ULTRAFIN} />
      </g>
      <Attache x={606} y={220} dx={90} dy={-70} label="Plume" />

      <ChaineCotes y={412} points={[0, 233, 466, 700]} labels={['q', 'q', 'q']} attache={384} />
    </g>

    {/* ================= FIG. 2 — DÉTAIL DU BEC ================= */}
    <RepereFigure x={840} y={140} n="2" title="Bec de plume x4" w={280} />

    <g transform="translate(1010 300)">
      <CercleDetail cx={0} cy={0} r={130} label="x4" />
      <path d="M-110 -34 h130 l70 34 l-70 34 h-130 z" fill="hsl(var(--gravure-fond))" stroke={LAITON} strokeWidth={MOYEN} />
      <path d="M-40 0 h124" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={-6} cy={0} r={12} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
      <path d="M-110 -34 v68" stroke={ENCRE} strokeWidth={ULTRAFIN} />
      {/* le trait laissé par la plume, dessiné une seule fois */}
      <path d="M-70 74 C -10 66, 60 82, 116 70" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <text className="gravure-lettrage" x={-70} y={100} fontSize="11">
        Le trait
      </text>
      <Pastille x={-6} y={-52} n={4} />
    </g>

    {/* ================= FIG. 3 — COUPE DE L'ÉTABLI ================= */}
    <RepereFigure x={840} y={490} n="3" title="Coupe de l'établi" w={280} />

    <g transform="translate(860 530)">
      <rect x={0} y={0} width={320} height={26} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={FORT} />
      <rect x={12} y={26} width={296} height={12} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <Trait x1={40} y1={38} x2={40} y2={150} w={MOYEN} />
      <Trait x1={280} y1={38} x2={280} y2={150} w={MOYEN} />
      {/* tenon-mortaise, masqué */}
      <TraceCache d="M40 92 h240" />
      <TraceCache d="M120 84 h30 v16 h-30 z" />
      {/* trou de valet traversant */}
      <TraceCache d="M70 0 v38" />
      {/* patins et sol */}
      <rect x={24} y={150} width={34} height={10} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={264} y={150} width={34} height={10} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={MOYEN} />
      <Trait x1={-10} y1={160} x2={330} y2={160} w={FORT} />
      <HachuresVivantes x={-10} y={162} w={340} h={16} pas={11} seed={41} opacity={0.32} />
      <Pastille x={340} y={12} n={5} />
      <Pastille x={340} y={96} n={6} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={96}
      y={620}
      perCol={5}
      colGap={330}
      items={[
        'Trou de valet',
        'Équerre à quarante-cinq degrés',
        'Clé plate à deux ouvertures',
        'Bec de plume',
        'Plateau et contre-plaque',
        'Traverse à tenon et mortaise',
        'Té de dessinateur',
        'Patin de pied',
        'Axe de croisement des outils',
      ]}
    />

    <Cartouche x={880} y={790} numeral="X" title="L'établi des trois métiers" echelle="Éch. symb." />
  </>
);
