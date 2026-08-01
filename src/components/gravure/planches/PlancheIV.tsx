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
  TraitCache,
  TraceCache,
  AxeMixte,
  Boulon,
  PastilleLettre,
  NomenclatureLettres,
} from '../primitives';

/**
 * PLANCHE IV — ARCHITECTURE LOGICIELLE EN DESSIN DE MÉCANIQUE.
 *   FIG. 1  élévation : socles, couches et interfaces en train d'engrenages
 *   FIG. 2  détail d'une interface : denture, moyeu, clavette
 *   FIG. 3  schéma cinématique : ce qui entraîne quoi
 * Rehaut de laiton unique : L'ARBRE DE TRANSMISSION COMMUN.
 */

const ARBRE = 620; // abscisse de l'arbre commun

/** Roue dentée gravée : denture symbolique, moyeu, toile. */
const Roue = ({ cx, cy, r, dents = 16, or = false }: { cx: number; cy: number; r: number; dents?: number; or?: boolean }) => {
  const c = or ? LAITON : ENCRE;
  const pas = (Math.PI * 2) / dents;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={MOYEN} />
      <circle cx={cx} cy={cy} r={r * 0.86} fill="none" stroke={c} strokeWidth={ULTRAFIN} opacity="0.8" />
      {Array.from({ length: dents }).map((_, i) => {
        const a = i * pas;
        const x1 = cx + Math.cos(a) * r * 0.86;
        const y1 = cy + Math.sin(a) * r * 0.86;
        const x2 = cx + Math.cos(a) * (r + 5);
        const y2 = cy + Math.sin(a) * (r + 5);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={FIN} />;
      })}
      <circle cx={cx} cy={cy} r={r * 0.24} fill="none" stroke={c} strokeWidth={MOYEN} />
      <AxeMixte x1={cx - r - 14} y1={cy} x2={cx + r + 14} y2={cy} />
      <AxeMixte x1={cx} y1={cy - r - 14} x2={cx} y2={cy + r + 14} />
    </g>
  );
};

export const PLANCHE_IV = {
  numeral: 'IV',
  title: 'Architecture logicielle en dessin de mécanique',
  desc:
    "Gravure au trait, planche à trois figures, où une architecture logicielle est dessinée comme un mécanisme. FIGURE 1, élévation : trois socles empilés et pochés acier, du socle d'infrastructure au socle applicatif, portent quatre roues dentées de tailles différentes qui figurent les couches du système ; les roues engrènent deux à deux, leurs axes sont donnés en trait mixte, et un arbre de transmission vertical, rehaussé de laiton, les traverse toutes : c'est le composant commun que chaque couche appelle. Les interfaces sont figurées par les points d'engrènement, cotés symboliquement. FIGURE 2, détail d'une interface à trois fois l'échelle : denture en prise, moyeu, clavette et jeu de fonctionnement exagéré, avec huit lettres de nomenclature secondaire ; le message est que deux couches ne se touchent qu'à un endroit défini. FIGURE 3, schéma cinématique : les mêmes organes réduits à leurs symboles, reliés par des liaisons, montrant ce qui entraîne quoi et où se trouve le point de commande ; les branches non appelées sont en trait interrompu. Aucune marque, aucun nom de produit, aucune donnée chiffrée. Nomenclature de neuf entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '820 380 380 300',
};

export const PlancheIVDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — ÉLÉVATION MÉCANIQUE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Élévation - socles et couches" w={320} />

    {/* trois socles */}
    {[
      { y: 330, w: 640, label: "Socle d'infrastructure" },
      { y: 268, w: 520, label: 'Socle de données' },
      { y: 206, w: 400, label: 'Socle applicatif' },
    ].map((s, i) => (
      <g key={s.y}>
        <rect x={120} y={s.y} width={s.w} height={26} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
        <text className="gravure-lettrage" x={132} y={s.y + 18} fontSize="11" fill={OXYDE}>
          {s.label}
        </text>
        <Pastille x={120 + s.w + 22} y={s.y + 13} n={i + 1} />
      </g>
    ))}
    <Trait x1={100} y1={356} x2={800} y2={356} w={FORT} />

    {/* roues et engrènements */}
    <Roue cx={250} cy={150} r={56} dents={20} />
    <Roue cx={372} cy={176} r={68} dents={24} />
    <Roue cx={512} cy={140} r={48} dents={16} />
    <Roue cx={ARBRE} cy={176} r={40} dents={14} or />

    {/* l'arbre de transmission commun : unique rehaut de laiton */}
    <line x1={ARBRE} y1={72} x2={ARBRE} y2={356} stroke={LAITON} strokeWidth={FORT} />
    <text className="gravure-lettrage" x={ARBRE + 14} y={86} fontSize="12" fill={LAITON}>
      Arbre commun
    </text>

    <ChaineCotes y={412} points={[250, 372, 512, ARBRE]} labels={['e', 'e', 'e']} attache={366} />
    <Attache x={311} y={162} dx={-90} dy={-96} label="Engrènement" anchor="end" />
    <Pastille x={250} y={80} n={4} />
    <Pastille x={512} y={80} n={5} />

    {/* ================= FIG. 2 — DÉTAIL D'INTERFACE ================= */}
    <RepereFigure x={840} y={410} n="2" title="Détail d'interface x3" w={280} />

    <g transform="translate(1010 560)">
      <CercleDetail cx={0} cy={0} r={148} label="x3" />
      <g clipPath="none">
        <Roue cx={-72} cy={-16} r={78} dents={14} />
        <Roue cx={74} cy={26} r={62} dents={12} />
        {/* clavette et moyeu */}
        <rect x={-84} y={-28} width={24} height={12} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FIN} />
        <TraitCache x1={-72} y1={-94} x2={-72} y2={62} />
        {/* jeu de fonctionnement exagéré */}
        <line x1={-2} y1={-2} x2={12} y2={6} stroke={OXYDE} strokeWidth={FIN} />
      </g>
      <PastilleLettre x={-140} y={-70} l="a" />
      <PastilleLettre x={-92} y={-44} l="b" />
      <PastilleLettre x={-16} y={-10} l="c" />
      <PastilleLettre x={58} y={-40} l="d" />
      <PastilleLettre x={128} y={38} l="e" />
      <PastilleLettre x={40} y={92} l="f" />
      <PastilleLettre x={-48} y={104} l="g" />
      <PastilleLettre x={-128} y={62} l="h" />
    </g>

    <NomenclatureLettres
      x={840}
      y={470}
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
    <RepereFigure x={60} y={410} n="3" title="Schéma cinématique" w={280} />

    <g transform="translate(90 450)">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={40 + i * 140} cy={80} r={16} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
          <line x1={40 + i * 140} y1={64} x2={40 + i * 140} y2={96} stroke={ENCRE} strokeWidth={ULTRAFIN} />
          {i < 3 && <line x1={56 + i * 140} y1={80} x2={164 + i * 140} y2={80} stroke={ENCRE} strokeWidth={FIN} />}
        </g>
      ))}
      <TraceCache d="M180 96 v64 h140" />
      <circle cx={336} cy={160} r={13} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="5 4" />
      <text className="gravure-lettrage" x={0} y={190} fontSize="11">
        Branche non appelée
      </text>
      <Boulon x={40} y={80} r={3} />
      <text className="gravure-lettrage" x={0} y={40} fontSize="11">
        Point de commande
      </text>
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={96}
      y={706}
      perCol={5}
      colGap={330}
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
