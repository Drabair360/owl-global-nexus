import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Attache,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  Graticule,
  RoseVents,
  EchelleGraphique,
  TraceCache,
  AxeMixte,
} from '../primitives';

/**
 * PLANCHE VIII — LE CORRIDOR EUROPE - AFRIQUE DE L'OUEST.
 * Vocabulaire de la carte marine : méridiens, parallèles, rhumbs, routes,
 * sondes, rose des vents, échelle graphique.
 *   FIG. 1  la carte : graticule, deux masses côtières schématiques, routes
 *   FIG. 2  détail x3 d'un point de rupture de charge
 *   FIG. 3  profil de traversée : distances symboliques, escales
 * Rehaut de laiton unique : LA ROUTE MARITIME.
 * Aucune frontière appuyée, aucune ville nommée, aucun toponyme réel.
 */

export const PLANCHE_VIII = {
  numeral: 'VIII',
  title: "Corridor Europe - Afrique de l'Ouest",
  desc:
    "Gravure au trait dans le langage de la carte marine ancienne, planche à trois figures, sans toponyme, sans frontière appuyée et sans ville nommée. FIGURE 1, la carte : un graticule de méridiens et de parallèles au trait ultrafin couvre le champ ; deux masses côtières sont figurées par un seul trait de rivage, l'une au nord-est, l'autre au sud-ouest, leur intérieur laissé en réserve ; une route maritime rehaussée de laiton descend de l'une à l'autre en suivant deux inflexions, doublée d'une route alternative en trait interrompu ; des rhumbs partent d'une rose des vents et une échelle graphique donne la mesure symbolique. Trois points de passage sont marqués par de petits cercles concentriques, sans être nommés. FIGURE 2, détail à trois fois l'échelle d'un point de rupture de charge : quai figuré par deux traits, portique de déchargement, aire de stockage en réserve, liaison terrestre en trait fin sortant du cadre par une ligne de rupture. FIGURE 3, profil de traversée : une ligne horizontale porte les temps de la traversée sous forme de segments égaux, chaque escale marquée d'un repère vertical, sans aucune durée réelle indiquée. Nomenclature de huit entrées et cartouche.",
  viewBox: '0 0 1240 900',
};

/** Trait de rivage : une ligne continue, aucune frontière, aucun remplissage. */
const Rivage = ({ d }: { d: string }) => <path d={d} fill="none" stroke={ENCRE} strokeWidth={FORT} />;

export const PlancheVIIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA CARTE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Carte du corridor" w={300} />

    <g>
      <rect x={70} y={130} width={720} height={520} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <Graticule x={70} y={130} w={720} h={520} pas={65} />

      {/* masse côtière nord-est : un seul trait de rivage */}
      <Rivage d="M520 130 C 560 190, 620 210, 660 262 C 700 314, 760 330, 790 322" />
      {/* masse côtière sud-ouest */}
      <Rivage d="M70 470 C 140 470, 200 520, 250 560 C 300 600, 330 636, 352 650" />

      {/* route maritime : unique rehaut de laiton */}
      <path
        d="M640 244 C 520 320, 470 392, 392 470 C 350 512, 320 548, 300 578"
        fill="none"
        stroke={LAITON}
        strokeWidth={FORT}
      />
      {/* route alternative */}
      <TraceCache d="M640 244 C 470 300, 400 400, 300 578" />

      {/* points de passage, non nommés */}
      {[
        [640, 244],
        [430, 430],
        [300, 578],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={9} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
          <circle cx={x} cy={y} r={3.4} fill={ENCRE} />
          <Pastille x={x + 24} y={y - 22} n={i + 1} />
        </g>
      ))}

      {/* rose des vents et rhumbs */}
      <RoseVents cx={706} cy={556} r={44} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={706}
            y1={556}
            x2={706 + Math.cos(a) * 190}
            y2={556 + Math.sin(a) * 190}
            stroke={ENCRE}
            strokeWidth={ULTRAFIN}
            opacity="0.35"
          />
        );
      })}

      <EchelleGraphique x={90} y={614} w={180} h={7} n={6} label="Éch. symb." />
      <Attache x={430} y={430} dx={130} dy={-84} label="Route principale" />
    </g>

    {/* ================= FIG. 2 — RUPTURE DE CHARGE ================= */}
    <RepereFigure x={840} y={140} n="2" title="Point de rupture de charge x3" w={300} />

    <g transform="translate(1010 310)">
      <CercleDetail cx={0} cy={0} r={138} label="x3" />
      {/* quai */}
      <Trait x1={-120} y1={40} x2={120} y2={40} w={FORT} />
      <Trait x1={-120} y1={54} x2={120} y2={54} w={FIN} />
      {/* portique de déchargement */}
      <path d="M-60 40 v-92 h120 v92" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={0} y1={-52} x2={0} y2={-8} stroke={ENCRE} strokeWidth={FIN} />
      <rect x={-14} y={-8} width={28} height={18} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {/* aire de stockage en réserve */}
      <rect x={-110} y={70} width={220} height={44} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="5 4" />
      <text className="gravure-lettrage" x={0} y={98} fontSize="11" textAnchor="middle">
        Aire de stockage
      </text>
      {/* liaison terrestre */}
      <line x1={110} y1={92} x2={150} y2={92} stroke={ENCRE} strokeWidth={FIN} />
      <Pastille x={0} y={-70} n={4} />
    </g>

    {/* ================= FIG. 3 — PROFIL DE TRAVERSÉE ================= */}
    <RepereFigure x={840} y={500} n="3" title="Profil de traversée" w={300} />

    <g transform="translate(860 560)">
      <Trait x1={0} y1={60} x2={300} y2={60} w={MOYEN} />
      {[0, 60, 120, 180, 240, 300].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={48} x2={x} y2={72} stroke={ENCRE} strokeWidth={FIN} />
          {i > 0 && i < 5 && <circle cx={x} cy={60} r={4} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />}
        </g>
      ))}
      <AxeMixte x1={0} y1={100} x2={300} y2={100} />
      <text className="gravure-lettrage" x={0} y={122} fontSize="11">
        Escales, durées symboliques
      </text>
      <Pastille x={150} y={26} n={5} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={96}
      y={700}
      perCol={4}
      colGap={340}
      items={[
        'Port de tête, non nommé',
        'Point de passage médian',
        'Port de destination, non nommé',
        'Portique de déchargement',
        'Profil de traversée',
        'Route alternative, trait interrompu',
        'Rhumbs et rose des vents',
        'Trait de rivage, sans frontière',
      ]}
    />

    <Cartouche x={880} y={790} numeral="VIII" title="Corridor Europe - Afrique de l'Ouest" echelle="Éch. symb." />
  </>
);
