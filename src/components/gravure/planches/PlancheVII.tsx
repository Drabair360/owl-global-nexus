import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  Attache,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  TraceCache,
  AxeMixte,
  TraceRegulateur,
  ArcRegulateur,
} from '../primitives';

/**
 * PLANCHE VII — LA PLANCHE MAÎTRESSE DU MODÈLE.
 * Cinq vignettes gravées, une par société, reliées par un flux unique.
 *   FIG. 1  la roue du modèle : la tête et les cinq vignettes
 *   FIG. 2  détail du flux : ce qui circule, capital et savoir-faire
 *   FIG. 3  tracé régulateur : la géométrie qui gouverne la composition
 * Rehaut de laiton unique : LE FLUX LUI-MÊME.
 */

const CX = 430;
const CY = 300;
const R = 200;

/** Vignette de société : cadre gravé et emblème de métier au trait. */
const Vignette = ({ x, y, n, label, emblem }: { x: number; y: number; n: number; label: string; emblem: React.ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    <Cadre x={-52} y={-40} w={104} h={80} weight={MOYEN} fill="hsl(var(--gravure-fond))" />
    <g transform="translate(0 -4)">{emblem}</g>
    <text className="gravure-lettrage" x={0} y={56} fontSize="11" textAnchor="middle">
      {label}
    </text>
    <Pastille x={-52} y={-40} n={n} r={8} />
  </g>
);

export const PLANCHE_VII = {
  numeral: 'VII',
  title: 'La planche maîtresse du modèle',
  desc:
    "Gravure au trait, planche à trois figures, donnant la forme du modèle du groupe. FIGURE 1, une composition en roue : au centre, un cartouche circulaire figurant la tête du groupe ; autour, cinq vignettes gravées de même format, chacune portant l'emblème du métier qu'elle représente - une charpente pour l'ingénierie industrielle, un module de ligne pour l'équipement, un train d'engrenages pour le logiciel, une portée notée pour la réservation, une façade à trame pour l'immobilier. Un flux continu, rehaussé de laiton, part de la tête, passe par les cinq vignettes et revient à son point de départ : il figure le capital placé et le savoir-faire rendu, et c'est le seul élément que la planche veut faire retenir. Les liaisons de chaque vignette à la tête sont en trait fin, les branches encore en constitution en trait interrompu. FIGURE 2, détail du flux à trois fois l'échelle : deux sens de circulation superposés, l'un descendant, l'autre remontant, avec leurs points de passage. FIGURE 3, tracé régulateur : le cercle, le carré inscrit et les diagonales qui gouvernent la composition, dessinés au trait ultrafin, montrant que la planche est construite et non arrangée. Aucun nom de marque n'est porté au dessin. Nomenclature de sept entrées et cartouche.",
  viewBox: '0 0 1240 900',
};

const emblemes = [
  // charpente
  <g key="a" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <path d="M-30 12 L0 -14 L30 12" />
    <path d="M-24 12 v-8 M24 12 v-8 M0 -14 v26" />
  </g>,
  // module de ligne
  <g key="b" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <rect x={-30} y={-10} width={22} height={22} />
    <rect x={-4} y={-10} width={22} height={22} />
    <rect x={22} y={-10} width={12} height={22} strokeDasharray="4 3" />
  </g>,
  // engrenages
  <g key="c" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <circle cx={-10} cy={0} r={13} />
    <circle cx={14} cy={6} r={9} />
    <circle cx={-10} cy={0} r={4} />
  </g>,
  // portée notée
  <g key="d" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    {[-8, -3, 2, 7].map((d) => (
      <line key={d} x1={-28} y1={d} x2={28} y2={d} />
    ))}
    <ellipse cx={6} cy={2} rx={5} ry={3.6} fill={ENCRE} />
    <line x1={11} y1={2} x2={11} y2={-16} />
  </g>,
  // façade à trame
  <g key="e" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <rect x={-26} y={-14} width={52} height={30} />
    {[-16, -2, 12].map((x) => (
      <rect key={x} x={x} y={-8} width={10} height={12} />
    ))}
  </g>,
];

export const PlancheVIIDrawing = ({ p }: { p: string }) => {
  const pts = [0, 1, 2, 3, 4].map((i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / 5;
    return { x: CX + Math.cos(a) * R, y: CY + Math.sin(a) * R };
  });
  const flux = pts.map((pt, i) => `${i ? 'L' : 'M'}${pt.x} ${pt.y}`).join(' ') + ' Z';

  return (
    <>
      <GravureDefs p={p} />

      {/* ================= FIG. 1 — LA ROUE DU MODÈLE ================= */}
      <RepereFigure x={60} y={96} n="1" title="La roue du modèle" w={280} />

      {/* liaisons à la tête */}
      {pts.map((pt, i) => (
        <line key={i} x1={CX} y1={CY} x2={pt.x} y2={pt.y} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
      ))}
      <TraceCache d={`M${CX} ${CY} L${CX + 250} ${CY + 150}`} />
      <text className="gravure-lettrage" x={CX + 258} y={CY + 158} fontSize="11">
        Branche en constitution
      </text>

      {/* le flux : unique rehaut de laiton */}
      <path d={flux} fill="none" stroke={LAITON} strokeWidth={FORT} />

      {/* tête du groupe */}
      <circle cx={CX} cy={CY} r={54} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FORT} />
      <circle cx={CX} cy={CY} r={44} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.7" />
      <text className="gravure-lettrage" x={CX} y={CY + 4} fontSize="12" textAnchor="middle">
        Tête
      </text>

      {pts.map((pt, i) => (
        <Vignette
          key={i}
          x={pt.x}
          y={pt.y}
          n={i + 1}
          label={['Ingénierie', 'Équipement', 'Logiciel', 'Réservation', 'Immobilier'][i]}
          emblem={emblemes[i]}
        />
      ))}

      <Attache x={pts[1].x} y={pts[1].y - 40} dx={110} dy={-70} label="Flux capital et savoir-faire" />

      {/* ================= FIG. 2 — DÉTAIL DU FLUX ================= */}
      <RepereFigure x={840} y={140} n="2" title="Détail du flux x3" w={270} />

      <g transform="translate(1000 300)">
        <CercleDetail cx={0} cy={0} r={126} label="x3" />
        <path d="M-110 -30 L110 -30" stroke={LAITON} strokeWidth={FORT} fill="none" />
        <path d="M-110 30 L110 30" stroke={ENCRE} strokeWidth={MOYEN} fill="none" />
        <path d="M84 -38 l22 8 l-22 8" fill="none" stroke={LAITON} strokeWidth={FIN} />
        <path d="M-84 38 l-22 -8 l22 -8" fill="none" stroke={ENCRE} strokeWidth={FIN} />
        <text className="gravure-lettrage" x={-108} y={-46} fontSize="11">
          Capital placé
        </text>
        <text className="gravure-lettrage" x={-108} y={58} fontSize="11">
          Savoir-faire rendu
        </text>
        {[-60, 0, 60].map((x) => (
          <g key={x}>
            <circle cx={x} cy={-30} r={4} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
            <circle cx={x} cy={30} r={4} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
            <AxeMixte x1={x} y1={-52} x2={x} y2={52} />
          </g>
        ))}
      </g>

      {/* ================= FIG. 3 — TRACÉ RÉGULATEUR ================= */}
      <RepereFigure x={840} y={470} n="3" title="Tracé régulateur" w={270} />

      <g transform="translate(1000 620)">
        <ArcRegulateur cx={0} cy={0} r={110} />
        <TraceRegulateur d="M-78 -78 h156 v156 h-156 z" />
        <TraceRegulateur d="M-78 -78 L78 78 M78 -78 L-78 78" />
        <TraceRegulateur d="M0 -110 L0 110 M-110 0 L110 0" />
        {[0, 1, 2, 3, 4].map((i) => {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / 5;
          return <circle key={i} cx={Math.cos(a) * 110} cy={Math.sin(a) * 110} r={2.6} fill={OXYDE} />;
        })}
      </g>

      {/* ================= NOMENCLATURE ================= */}
      <Nomenclature
        x={96}
        y={620}
        perCol={7}
        items={[
          'Ingénierie industrielle',
          "Équipement de ligne",
          'Édition logicielle',
          'Réservation et affectation',
          'Immobilier de rapport',
          'Tête de groupe',
          'Flux : capital placé, savoir-faire rendu',
        ]}
      />

      <Cartouche x={880} y={790} numeral="VII" title="La planche maîtresse du modèle" echelle="Éch. symb." />
    </>
  );
};
