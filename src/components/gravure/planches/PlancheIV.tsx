import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  poche,
  Attache,
  ChaineCotes,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  TraitCache,
  TraceCache,
  AxeMixte,
  Boulon,
  PastilleLettre,
  NomenclatureLettres,
  LigneDeCoupe,
} from '../primitives';

/**
 * PLANCHE IV — ARCHITECTURE LOGICIELLE EN DESSIN DE MÉCANIQUE.
 *   FIG. 1  élévation : socles pochés acier, quatre roues à denture réelle,
 *           arbre de transmission commun, paliers à roulement
 *   FIG. 2  détail d'engrènement x3 : flancs en développante, clavette,
 *           moyeu, jeu de fonctionnement exagéré
 *   FIG. 3  schéma cinématique : liaisons, point de commande, branche morte
 * Rehaut de laiton unique : L'ARBRE DE TRANSMISSION COMMUN.
 * §1.6 — aucun poché pierre ni bois : la matière est ici de l'acier.
 */

const ARBRE = 640;

/** Profil de dent approché de la développante : flancs concaves, tête arrondie, pied congé. */
const dentPath = (r: number, a: number, pas: number) => {
  const rp = r; // primitif
  const rt = r * 1.11; // tête
  const rf = r * 0.87; // pied
  const demi = pas * 0.21;
  const pt = (rad: number, ang: number) => `${(Math.cos(ang) * rad).toFixed(2)} ${(Math.sin(ang) * rad).toFixed(2)}`;
  return [
    `M${pt(rf, a - demi * 1.55)}`,
    `Q${pt(rp * 0.97, a - demi * 1.15)} ${pt(rp, a - demi)}`,
    `Q${pt(rt * 0.99, a - demi * 0.62)} ${pt(rt, a - demi * 0.42)}`,
    `A${(rt).toFixed(2)} ${(rt).toFixed(2)} 0 0 1 ${pt(rt, a + demi * 0.42)}`,
    `Q${pt(rt * 0.99, a + demi * 0.62)} ${pt(rp, a + demi)}`,
    `Q${pt(rp * 0.97, a + demi * 1.15)} ${pt(rf, a + demi * 1.55)}`,
  ].join(' ');
};

/** Roue à denture dessinée : corps poché acier, toile évidée, moyeu, clavette. */
const Roue = ({
  cx,
  cy,
  r,
  dents = 16,
  or = false,
  p,
  axes = true,
}: {
  cx: number;
  cy: number;
  r: number;
  dents?: number;
  or?: boolean;
  p: string;
  axes?: boolean;
}) => {
  const c = or ? LAITON : ENCRE;
  const pas = (Math.PI * 2) / dents;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {/* corps : jante pochée acier */}
      <circle cx={0} cy={0} r={r * 0.87} fill={poche(p, 'acier')} stroke={c} strokeWidth={MOYEN} />
      <circle cx={0} cy={0} r={r * 0.62} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={FIN} />
      {/* évidements de toile */}
      {[0, 1, 2, 3].map((i) => {
        const a = (i * Math.PI) / 2 + Math.PI / 4;
        return (
          <circle
            key={i}
            cx={Math.cos(a) * r * 0.44}
            cy={Math.sin(a) * r * 0.44}
            r={r * 0.11}
            fill="hsl(var(--gravure-fond))"
            stroke={c}
            strokeWidth={ULTRAFIN}
          />
        );
      })}
      {/* denture */}
      {Array.from({ length: dents }).map((_, i) => (
        <path key={i} d={dentPath(r, i * pas, pas)} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={FIN} />
      ))}
      {/* cercle primitif au trait mixte */}
      <circle cx={0} cy={0} r={r} fill="none" stroke={c} strokeWidth={ULTRAFIN} strokeDasharray="14 4 3 4" opacity="0.85" />
      {/* moyeu et clavette */}
      <circle cx={0} cy={0} r={r * 0.2} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={MOYEN} />
      <rect x={-r * 0.055} y={-r * 0.26} width={r * 0.11} height={r * 0.09} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={ULTRAFIN} />
      {axes && (
        <>
          <AxeMixte x1={-r - 16} y1={0} x2={r + 16} y2={0} />
          <AxeMixte x1={0} y1={-r - 16} x2={0} y2={r + 16} />
        </>
      )}
    </g>
  );
};

/** Palier à roulement figuré au trait : bagues, billes, épaulement. */
const Palier = ({ x, y, w = 46, h = 26 }: { x: number; y: number; w?: number; h?: number }) => (
  <g>
    <rect x={x - w / 2} y={y - h / 2} width={w} height={h} fill={poche(x >= 0 ? 'na' : 'na', 'acier')} stroke="none" opacity="0" />
    <rect x={x - w / 2} y={y - h / 2} width={w} height={h} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
    <line x1={x - w / 2} y1={y - h / 6} x2={x + w / 2} y2={y - h / 6} stroke={ENCRE} strokeWidth={ULTRAFIN} />
    <line x1={x - w / 2} y1={y + h / 6} x2={x + w / 2} y2={y + h / 6} stroke={ENCRE} strokeWidth={ULTRAFIN} />
    {[-1, 0, 1].map((i) => (
      <circle key={i} cx={x + i * (w / 3.6)} cy={y} r={h / 6} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    ))}
  </g>
);

export const PLANCHE_IV = {
  numeral: 'IV',
  title: 'Architecture logicielle en dessin de mécanique',
  desc:
    "Gravure au trait, planche à trois figures, où une architecture logicielle est dessinée comme un mécanisme d'atelier. FIGURE 1, élévation : trois socles empilés et pochés acier, du socle d'infrastructure au socle applicatif, portent quatre roues dont la denture est réellement tracée - flancs en développante, tête arrondie, congé de pied, cercle primitif au trait mixte, jante pochée, toile évidée, moyeu et clavette. Les roues engrènent deux à deux sur leur cercle primitif, deux paliers à roulement portent l'arbre vertical, et cet arbre de transmission commun, rehaussé de laiton, traverse toutes les couches : c'est le composant que chaque couche appelle. FIGURE 2, détail d'engrènement à trois fois l'échelle : deux dentures en prise, ligne d'action, clavette de contrat, portée de moyeu et jeu de fonctionnement exagéré, décrits par huit lettres de nomenclature secondaire ; le message est que deux couches ne se touchent qu'en un point défini. FIGURE 3, schéma cinématique : les mêmes organes réduits à leurs symboles, liaisons pivot marquées, point de commande signalé, branche non appelée laissée en trait interrompu. Aucune marque, aucun nom de produit, aucune donnée chiffrée, aucune référence normative écrite. Nomenclature de neuf entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '830 380 380 300',
};

export const PlancheIVDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — ÉLÉVATION MÉCANIQUE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Élévation - socles, couches et transmission" w={360} />

    {/* trois socles */}
    {[
      { y: 336, w: 660, label: "Socle d'infrastructure" },
      { y: 274, w: 540, label: 'Socle de données' },
      { y: 212, w: 410, label: 'Socle applicatif' },
    ].map((s, i) => (
      <g key={s.y}>
        <rect x={120} y={s.y} width={s.w} height={26} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={132} y={s.y + 18} fontSize="11" fill={OXYDE}>
          {s.label}
        </text>
        <Pastille x={120 + s.w + 24} y={s.y + 13} n={i + 1} />
      </g>
    ))}
    <Trait x1={100} y1={362} x2={820} y2={362} w={FORT} />
    {[140, 260, 380, 500, 620, 740].map((x) => (
      <line key={x} x1={x} y1={362} x2={x - 12} y2={376} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
    ))}

    {/* roues et engrènements */}
    <Roue p={p} cx={252} cy={150} r={56} dents={18} />
    <Roue p={p} cx={374} cy={178} r={70} dents={22} />
    <Roue p={p} cx={520} cy={144} r={48} dents={15} />
    <Roue p={p} cx={ARBRE} cy={178} r={42} dents={14} or />

    {/* l'arbre de transmission commun : unique rehaut de laiton */}
    <line x1={ARBRE} y1={70} x2={ARBRE} y2={362} stroke={LAITON} strokeWidth={FORT} />
    <text className="gravure-lettrage" x={ARBRE + 16} y={84} fontSize="12" fill={LAITON}>
      Arbre commun
    </text>
    <Palier x={ARBRE} y={98} />
    <Palier x={ARBRE} y={300} />
    <text className="gravure-lettrage" x={ARBRE + 34} y={302} fontSize="11">
      Palier
    </text>

    <ChaineCotes y={420} points={[252, 374, 520, ARBRE]} labels={['e', 'e', 'e']} attache={372} />
    <Attache x={313} y={164} dx={117} dy={-104} label="Engrènement" />
    <Pastille x={252} y={74} n={4} />
    <Pastille x={520} y={74} n={5} />
    <LigneDeCoupe x1={430} x2={560} y={460} label="D" />

    {/* ================= FIG. 2 — DÉTAIL D'ENGRÈNEMENT ================= */}
    <RepereFigure x={850} y={404} n="2" title="Détail d'engrènement D-D x3" w={300} />

    <g transform="translate(1016 566)">
      <CercleDetail cx={0} cy={0} r={146} label="x3" />
      <Roue p={p} cx={-76} cy={-14} r={78} dents={13} axes={false} />
      <Roue p={p} cx={76} cy={26} r={62} dents={11} axes={false} />
      <AxeMixte x1={-76} y1={-120} x2={-76} y2={92} />
      <AxeMixte x1={76} y1={-80} x2={76} y2={132} />
      {/* ligne d'action entre les deux primitifs */}
      <line x1={-46} y1={40} x2={44} y2={-24} stroke={OXYDE} strokeWidth={FIN} strokeDasharray="7 4" />
      {/* clavette de contrat */}
      <rect x={-88} y={-30} width={24} height={11} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FIN} />
      <TraitCache x1={-76} y1={-96} x2={-76} y2={64} />
      {/* jeu de fonctionnement exagéré */}
      <line x1={-2} y1={2} x2={14} y2={10} stroke={OXYDE} strokeWidth={FIN} />
      <PastilleLettre x={-140} y={-72} l="a" />
      <PastilleLettre x={-94} y={-46} l="b" />
      <PastilleLettre x={-14} y={-12} l="c" />
      <PastilleLettre x={58} y={-42} l="d" />
      <PastilleLettre x={128} y={40} l="e" />
      <PastilleLettre x={40} y={94} l="f" />
      <PastilleLettre x={-48} y={106} l="g" />
      <PastilleLettre x={-130} y={62} l="h" />
    </g>

    <NomenclatureLettres
      x={614}
      y={452}
      items={[
        'Denture de la couche appelante',
        'Clavette : contrat figé',
        "Point d'engrènement unique",
        'Denture de la couche appelée',
        'Portée de moyeu',
        'Jeu de fonctionnement, exagéré',
        'Épaulement de butée',
        "Axe de l'arbre porteur",
      ]}
    />

    {/* ================= FIG. 3 — SCHÉMA CINÉMATIQUE ================= */}
    <RepereFigure x={60} y={498} n="3" title="Schéma cinématique" w={300} />

    <g transform="translate(96 534)">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={40 + i * 140} cy={80} r={16} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
          <line x1={40 + i * 140} y1={62} x2={40 + i * 140} y2={98} stroke={ENCRE} strokeWidth={ULTRAFIN} />
          <line x1={26} y1={104} x2={54} y2={104} stroke={ENCRE} strokeWidth={FIN} transform={`translate(${i * 140} 0)`} />
          {i < 3 && <line x1={56 + i * 140} y1={80} x2={164 + i * 140} y2={80} stroke={ENCRE} strokeWidth={FIN} />}
          <text className="gravure-lettrage" x={40 + i * 140} y={132} fontSize="11" textAnchor="middle">
            {['Commande', 'Application', 'Données', 'Infrastructure'][i]}
          </text>
        </g>
      ))}
      <TraceCache d="M180 98 v58 h140" />
      <circle cx={336} cy={156} r={13} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="5 4" />
      <text className="gravure-lettrage" x={356} y={160} fontSize="11">
        Branche non appelée
      </text>
      <Boulon x={40} y={80} r={3} />
      <text className="gravure-lettrage" x={0} y={38} fontSize="11">
        Point de commande
      </text>
      <Pastille x={470} y={80} n={8} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={700}
      y={706}
      perCol={5}
      colGap={270}
      items={[
        "Socle d'infrastructure",
        'Socle de données',
        'Socle applicatif',
        "Couche d'ingestion",
        'Couche de restitution',
        'Interface, point unique de contact',
        'Arbre de transmission commun',
        'Point de commande',
        'Branche non appelée',
      ]}
    />

    <Cartouche x={880} y={790} numeral="IV" title="Architecture en dessin de mécanique" echelle="Éch. symb." />
  </>
);
