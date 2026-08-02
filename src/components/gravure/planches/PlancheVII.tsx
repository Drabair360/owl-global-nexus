import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
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
 * Cinq médaillons gravés, un par société, reliés par un flux unique.
 *   FIG. 1  la roue du modèle : la tête et les cinq médaillons
 *   FIG. 2  détail du flux : capital placé, savoir-faire rendu
 *   FIG. 3  tracé régulateur : la géométrie qui gouverne la composition
 * Rehaut de laiton unique : LE FLUX LUI-MÊME.
 */

const CX = 430;
const CY = 306;
const R = 202;

/** Médaillon : double filet circulaire, perles de bordure, emblème de métier au trait. */
const Medaillon = ({
  x,
  y,
  n,
  label,
  emblem,
}: {
  x: number;
  y: number;
  n: number;
  label: string;
  emblem: React.ReactNode;
}) => (
  <g transform={`translate(${x} ${y})`}>
    <circle cx={0} cy={0} r={46} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FORT} />
    <circle cx={0} cy={0} r={39} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.8" />
    {Array.from({ length: 36 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 36;
      return <circle key={i} cx={Math.cos(a) * 43} cy={Math.sin(a) * 43} r={1.1} fill={ENCRE} opacity="0.7" />;
    })}
    <g transform="translate(0 -2)">{emblem}</g>
    <text className="gravure-lettrage" x={0} y={66} fontSize="11" textAnchor="middle">
      {label}
    </text>
    <Pastille x={-40} y={-38} n={n} r={8} />
  </g>
);

export const PLANCHE_VII = {
  numeral: 'VII',
  title: 'La planche maîtresse du modèle',
  desc:
    "Gravure au trait, planche à trois figures, donnant la forme du modèle du groupe. FIGURE 1, une composition en roue : au centre, un cartouche circulaire figurant la tête du groupe ; autour, cinq médaillons de même diamètre, bordés d'un double filet et d'un rang de perles, chacun portant l'emblème du métier qu'il représente - une charpente pour l'ingénierie industrielle, un module de ligne pour l'équipement, un train d'engrenages pour le logiciel, une portée notée pour la réservation, une façade à trame pour l'immobilier. Un flux continu, rehaussé de laiton, part de la tête, passe par les cinq médaillons et revient à son point de départ : il figure le capital placé et le savoir-faire rendu, et c'est le seul élément que la planche veut faire retenir. Les liaisons de chaque médaillon à la tête sont en trait fin, les branches encore en constitution en trait interrompu. FIGURE 2, détail du flux à trois fois l'échelle : deux sens de circulation superposés, l'un descendant, l'autre remontant, avec leurs points de passage. FIGURE 3, tracé régulateur : le cercle, le carré inscrit et les diagonales qui gouvernent la composition, au trait ultrafin, montrant que la planche est construite et non arrangée. Aucun nom de marque n'est porté au dessin, aucune donnée chiffrée, aucune référence normative écrite. Nomenclature de sept entrées et cartouche.",
  viewBox: '0 0 1240 900',
};

const emblemes = [
  // charpente
  <g key="a" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <path d="M-24 12 L0 -14 L24 12" />
    <path d="M-19 12 v-8 M19 12 v-8 M0 -14 v26 M-13 4 L0 -4 L13 4" />
  </g>,
  // module de ligne
  <g key="b" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <rect x={-25} y={-9} width={19} height={19} />
    <rect x={-3} y={-9} width={19} height={19} />
    <rect x={19} y={-9} width={10} height={19} strokeDasharray="4 3" />
    <line x1={-29} y1={13} x2={29} y2={13} strokeWidth={MOYEN} />
  </g>,
  // engrenages
  <g key="c" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <circle cx={-9} cy={0} r={12} />
    <circle cx={13} cy={6} r={8} />
    <circle cx={-9} cy={0} r={4} />
    {Array.from({ length: 10 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 10;
      return <line key={i} x1={-9 + Math.cos(a) * 12} y1={Math.sin(a) * 12} x2={-9 + Math.cos(a) * 15} y2={Math.sin(a) * 15} />;
    })}
  </g>,
  // portée notée
  <g key="d" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    {[-8, -3, 2, 7].map((d) => (
      <line key={d} x1={-24} y1={d} x2={24} y2={d} />
    ))}
    <ellipse cx={5} cy={2} rx={5} ry={3.6} fill={ENCRE} />
    <line x1={10} y1={2} x2={10} y2={-15} />
  </g>,
  // façade à trame
  <g key="e" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <rect x={-23} y={-12} width={46} height={26} />
    {[-15, -3, 9].map((x) => (
      <rect key={x} x={x} y={-6} width={9} height={11} />
    ))}
    <path d="M-27 -12 L0 -22 L27 -12" />
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
        <line key={i} x1={CX} y1={CY} x2={pt.x} y2={pt.y} stroke={ENCRE} strokeWidth={FIN} opacity="0.75" />
      ))}
      <TraceCache d={`M${CX} ${CY} L${CX + 236} ${CY + 142}`} />
      <text className="gravure-lettrage" x={CX + 244} y={CY + 150} fontSize="11">
        Branche en constitution
      </text>

      {/* le flux : unique rehaut de laiton */}
      <path d={flux} fill="none" stroke={LAITON} strokeWidth={FORT} />

      {/* tête du groupe */}
      <circle cx={CX} cy={CY} r={54} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FORT} />
      <circle cx={CX} cy={CY} r={44} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.7" />
      <AxeMixte x1={CX - 74} y1={CY} x2={CX + 74} y2={CY} />
      <text className="gravure-lettrage" x={CX} y={CY + 5} fontSize="12" textAnchor="middle">
        Tête
      </text>

      {pts.map((pt, i) => (
        <Medaillon
          key={i}
          x={pt.x}
          y={pt.y}
          n={i + 1}
          label={['Ingénierie', 'Équipement', 'Logiciel', 'Réservation', 'Immobilier'][i]}
          emblem={emblemes[i]}
        />
      ))}

      <Attache x={pts[1].x} y={pts[1].y - 46} dx={96} dy={-84} label="Flux capital et savoir-faire" />

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
        y={632}
        perCol={7}
        items={[
          'Ingénierie industrielle',
          'Équipement de ligne',
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
