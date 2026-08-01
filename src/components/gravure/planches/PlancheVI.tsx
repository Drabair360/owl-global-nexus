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
  RepereNiveau,
  StratesSol,
  TraceCache,
  AxeMixte,
  LigneDeCoupe,
  PastilleLettre,
  NomenclatureLettres,
  HachuresVivantes,
} from '../primitives';

/**
 * PLANCHE VI — IMMEUBLE DE RAPPORT TYPE : PLAN MASSE ET ÉLÉVATION.
 * Vocabulaire de métier : maçonnerie de pierre, trame de percements,
 * cour, commerces en pied, gouttereau, allège, linteau, seuil.
 *   FIG. 1  plan masse : parcelle, cour, emprise, commerces en pied
 *   FIG. 2  élévation sur rue : trame de baies, refends, corniche
 *   FIG. 3  coupe de seuil x4 : dallage, marche, dormant
 * Rehaut de laiton unique : LE SEUIL D'ENTRÉE.
 * §1.6 — c'est ici, et seulement ici, que le poché PIERRE s'emploie :
 * la matière est réellement de la maçonnerie.
 */

const RUE = 470;

export const PLANCHE_VI = {
  numeral: 'VI',
  title: "Immeuble de rapport type - plan masse et élévation",
  desc:
    "Gravure au trait, planche à trois figures, décrivant un immeuble de rapport générique, sans lieu ni adresse identifiables. FIGURE 1, plan masse : une parcelle en lanière bordée par la rue, l'emprise bâtie pochée pierre, une cour intérieure laissée en réserve, un porche traversant reliant la rue à la cour, deux locaux commerciaux en pied d'immeuble donnant sur la rue, un mur mitoyen en trait fort et les limites séparatives en trait mixte ; les entrées sont marquées par des flèches fines et le nord par une indication sobre. FIGURE 2, élévation sur rue : soubassement, trois niveaux de baies alignées sur une trame régulière, allèges et linteaux dessinés, refends de maçonnerie figurés par des joints horizontaux, corniche et rive de toiture ; les percements du rez-de-chaussée sont plus larges, ceux des étages plus étroits, et une chaîne de cotes symbolique donne l'entraxe de trame. Le seuil de l'entrée est rehaussé de laiton : c'est le point de passage que la planche veut faire retenir. FIGURE 3, coupe de seuil à quatre fois l'échelle : terrain et hérisson en strates, dalle pochée béton, marche en pierre, dormant de menuiserie poché bois, rejingot et rejet d'eau, avec huit lettres de nomenclature secondaire. Une ligne de coupe normalisée relie l'élévation à la coupe. Les cotations sont symboliques. Nomenclature de dix entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '820 400 380 300',
};

export const PlancheVIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — PLAN MASSE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Plan masse" w={280} />

    <g transform="translate(70 130)">
      {/* parcelle */}
      <Cadre x={0} y={0} w={420} h={280} weight={MOYEN} />
      <AxeMixte x1={0} y1={-12} x2={0} y2={292} />
      <AxeMixte x1={420} y1={-12} x2={420} y2={292} />
      {/* rue */}
      <rect x={0} y={280} width={420} height={44} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={10} y={310} fontSize="11">
        Rue
      </text>
      {/* emprise bâtie, poché pierre (matière réelle : maçonnerie) */}
      <path d="M0 200 h420 v80 h-420 z" fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <path d="M0 0 h120 v200 h-120 z" fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      {/* cour en réserve */}
      <text className="gravure-lettrage" x={230} y={110} fontSize="12" textAnchor="middle">
        Cour
      </text>
      {/* porche traversant */}
      <rect x={186} y={200} width={54} height={80} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <TraceCache d="M186 200 h54" />
      {/* commerces en pied */}
      <line x1={60} y1={200} x2={60} y2={280} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={330} y1={200} x2={330} y2={280} stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={92} y={246} fontSize="11" textAnchor="middle">
        Commerce
      </text>
      <text className="gravure-lettrage" x={376} y={246} fontSize="11" textAnchor="middle">
        Commerce
      </text>
      {/* mitoyen */}
      <Trait x1={420} y1={0} x2={420} y2={280} w={FORT} />
      <Pastille x={-24} y={100} n={1} />
      <Pastille x={213} y={172} n={2} />
      <Pastille x={444} y={240} n={3} />
      <ChaineCotes y={352} points={[0, 186, 240, 420]} labels={['t', 'e', 't']} attache={324} />
    </g>

    {/* ================= FIG. 2 — ÉLÉVATION SUR RUE ================= */}
    <RepereFigure x={620} y={96} n="2" title="Élévation sur rue" w={280} />

    <g transform="translate(640 130)">
      {/* masse maçonnée */}
      <rect x={0} y={0} width={470} height={300} fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      {/* refends : joints horizontaux */}
      {[40, 80, 120, 160, 200, 240, 280].map((y) => (
        <line key={y} x1={0} y1={y} x2={470} y2={y} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.5" />
      ))}
      {/* corniche et rive */}
      <Trait x1={-12} y1={0} x2={482} y2={0} w={FORT} />
      <Trait x1={-12} y1={-10} x2={482} y2={-10} w={MOYEN} />
      {/* baies d'étage */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <g key={`${r}-${c}`}>
            <rect x={38 + c * 82} y={34 + r * 74} width={44} height={54} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
            <line x1={38 + c * 82} y1={34 + r * 74} x2={82 + c * 82} y2={34 + r * 74} stroke={ENCRE} strokeWidth={FORT} />
            <line x1={38 + c * 82} y1={88 + r * 74} x2={82 + c * 82} y2={88 + r * 74} stroke={ENCRE} strokeWidth={FIN} />
            <line x1={60 + c * 82} y1={34 + r * 74} x2={60 + c * 82} y2={88 + r * 74} stroke={ENCRE} strokeWidth={ULTRAFIN} />
          </g>
        )),
      )}
      {/* rez-de-chaussée : percements larges */}
      {[0, 1].map((c) => (
        <rect key={c} x={30 + c * 250} y={258} width={172} height={42} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      ))}
      {/* le seuil : unique rehaut de laiton */}
      <line x1={216} y1={300} x2={276} y2={300} stroke={LAITON} strokeWidth={FORT} />
      <rect x={216} y={252} width={60} height={48} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M216 252 q30 -22 60 0" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <text className="gravure-lettrage" x={246} y={330} fontSize="12" textAnchor="middle" fill={LAITON}>
        Seuil
      </text>
      {/* sol de rue */}
      <Trait x1={-20} y1={300} x2={490} y2={300} w={FORT} />
      <HachuresVivantes x={-20} y={302} w={510} h={18} pas={12} seed={19} opacity={0.3} />
      <ChaineCotes y={360} points={[38, 120, 202, 284]} labels={['t', 't', 't']} attache={312} />
      <Pastille x={496} y={20} n={4} />
      <Pastille x={496} y={110} n={5} />
      <Pastille x={496} y={278} n={6} />
      <Attache x={246} y={258} dx={-120} dy={-56} label="Entrée" anchor="end" />
      <LigneDeCoupe x1={180} x2={330} y={392} label="B" />
    </g>

    {/* ================= FIG. 3 — COUPE DE SEUIL ================= */}
    <RepereFigure x={60} y={470} n="3" title="Coupe de seuil B-B x4" w={300} />

    <g transform="translate(90 500)">
      <StratesSol p={p} x={0} y={120} w={330} h={96} seed={23} />
      {/* dalle */}
      <rect x={0} y={92} width={330} height={28} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* marche de pierre */}
      <rect x={120} y={54} width={120} height={38} fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      {/* dormant de menuiserie, poché bois (matière réelle) */}
      <rect x={200} y={0} width={26} height={56} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={MOYEN} />
      {/* rejingot et rejet d'eau */}
      <path d="M120 54 l-14 8 h14" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <RepereNiveau x={300} y={54} label="+-0,00" rappel={240} or />
      <PastilleLettre x={20} y={110} l="a" />
      <PastilleLettre x={62} y={78} l="b" />
      <PastilleLettre x={140} y={40} l="c" />
      <PastilleLettre x={214} y={-16} l="d" />
      <PastilleLettre x={262} y={40} l="e" />
      <PastilleLettre x={300} y={106} l="f" />
      <PastilleLettre x={210} y={150} l="g" />
      <PastilleLettre x={60} y={180} l="h" />
    </g>

    <NomenclatureLettres
      x={470}
      y={520}
      items={[
        'Hérisson et terrain',
        'Dalle sur terre-plein',
        'Marche de pierre',
        'Dormant de menuiserie',
        "Rejet d'eau",
        'Arase du seuil',
        'Chape de scellement',
        'Drain de pied de mur',
      ]}
    />

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={800}
      y={480}
      perCol={10}
      items={[
        'Limite séparative',
        'Porche traversant',
        'Local commercial en pied',
        'Corniche et rive',
        "Baie d'étage, allège et linteau",
        'Percement de rez-de-chaussée',
        'Refend de maçonnerie',
        'Cour en réserve',
        'Mur mitoyen',
        "Seuil d'entrée",
      ]}
    />

    <Cartouche x={880} y={790} numeral="VI" title="Immeuble de rapport type" echelle="Éch. symb." />
  </>
);
