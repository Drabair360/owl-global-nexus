import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_II } from '../Cartouche';
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
  RoseVents,
} from '../primitives';

/**
 * PLANCHE VI — IMMEUBLE DE RAPPORT PROVENÇAL : PLAN MASSE ET ÉLÉVATION.
 * Vocabulaire de métier : maçonnerie de pierre appareillée, génoise à trois rangs,
 * couverture en tuiles canal, trame de percements, allège, linteau, seuil.
 *   FIG. 1  plan masse : parcelle, cour, emprise, commerces en pied, porche
 *   FIG. 2  élévation sur rue : appareil de pierre, baies, génoise, tuiles canal
 *   FIG. 3  coupe de seuil x4 : hérisson, dalle, marche de pierre, dormant
 * Rehaut de laiton unique : LE SEUIL D'ENTRÉE.
 * §1.6 — poché PIERRE réservé à la maçonnerie réelle, poché BOIS à la menuiserie.
 */

export const PLANCHE_VI = {
  numeral: 'VI',
  title: 'Immeuble de rapport provençal - plan masse et élévation',
  desc:
    "Gravure au trait, planche à trois figures, décrivant un immeuble de rapport provençal générique, sans lieu ni adresse identifiables. FIGURE 1, plan masse : une parcelle en lanière bordée par la rue, l'emprise bâtie pochée pierre, une cour intérieure laissée en réserve, un porche traversant reliant la rue à la cour, deux locaux commerciaux en pied d'immeuble, un mur mitoyen en trait fort, les limites séparatives en trait mixte, les entrées marquées de flèches fines et le nord donné par une rose sobre. FIGURE 2, élévation sur rue : soubassement, appareil de pierre de taille dessiné assise par assise avec joints décalés, trois niveaux de baies alignées sur une trame régulière, allèges et linteaux, chaînage d'angle harpé, génoise à trois rangs de tuiles sous la rive et couverture en tuiles canal à faible pente ; les percements du rez-de-chaussée sont plus larges, ceux des étages plus étroits, et une chaîne de cotes symbolique donne l'entraxe de trame. Le seuil de l'entrée est rehaussé de laiton : c'est le point de passage que la planche veut faire retenir. FIGURE 3, coupe de seuil à quatre fois l'échelle : terrain et hérisson en strates, dalle pochée béton, marche en pierre, dormant de menuiserie poché bois, rejingot et rejet d'eau, avec huit lettres de nomenclature secondaire. Une ligne de coupe relie l'élévation à la coupe. Les cotations sont symboliques, aucune référence normative n'est écrite. Nomenclature de dix entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '60 470 400 300',
};

/** Assises de pierre de taille : joints horizontaux continus, joints verticaux décalés. */
const Appareil = ({ x, y, w, h, assise = 26 }: { x: number; y: number; w: number; h: number; assise?: number }) => {
  const rangs = Math.floor(h / assise);
  return (
    <g opacity="0.62">
      {Array.from({ length: rangs }).map((_, r) => {
        const yy = y + (r + 1) * assise;
        const dec = r % 2 ? assise * 1.6 : 0;
        const larg = assise * 3.2;
        const verts: number[] = [];
        for (let vx = x + dec; vx < x + w; vx += larg) verts.push(vx);
        return (
          <g key={r}>
            {yy < y + h && <line x1={x} y1={yy} x2={x + w} y2={yy} stroke={ENCRE} strokeWidth={ULTRAFIN} />}
            {verts.map((vx) =>
              vx > x + 1 ? (
                <line key={vx} x1={vx} y1={yy - assise} x2={vx} y2={Math.min(yy, y + h)} stroke={ENCRE} strokeWidth={ULTRAFIN} />
              ) : null,
            )}
          </g>
        );
      })}
    </g>
  );
};

/** Génoise : trois rangs de tuiles en encorbellement décroissant. */
const Genoise = ({ x, y, w }: { x: number; y: number; w: number }) => (
  <g>
    {[0, 1, 2].map((r) => {
      const yy = y - r * 9;
      const deb = 8 + r * 7;
      return (
        <g key={r}>
          <line x1={x - deb} y1={yy} x2={x + w + deb} y2={yy} stroke={ENCRE} strokeWidth={FIN} />
          {Array.from({ length: Math.floor((w + 2 * deb) / 16) }).map((_, i) => (
            <path
              key={i}
              d={`M${x - deb + i * 16} ${yy} a8 6 0 0 1 16 0`}
              fill="hsl(var(--gravure-fond))"
              stroke={ENCRE}
              strokeWidth={ULTRAFIN}
            />
          ))}
        </g>
      );
    })}
  </g>
);

export const PlancheVIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — PLAN MASSE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Plan masse" w={280} />

    <g transform="translate(70 132)">
      <Cadre x={0} y={0} w={420} h={280} weight={MOYEN} />
      <AxeMixte x1={0} y1={-12} x2={0} y2={292} />
      <AxeMixte x1={420} y1={-12} x2={420} y2={292} />
      <rect x={0} y={280} width={420} height={44} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={10} y={310} fontSize="11">
        Rue
      </text>
      {/* emprise bâtie, poché pierre (matière réelle : maçonnerie) */}
      <path d="M0 200 h420 v80 h-420 z" fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <path d="M0 0 h120 v200 h-120 z" fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <text className="gravure-lettrage" x={250} y={110} fontSize="12" textAnchor="middle">
        Cour
      </text>
      <rect x={186} y={200} width={54} height={80} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <TraceCache d="M186 200 h54" />
      <path d="M213 292 v-24 m-6 10 l6 -10 l6 10" fill="none" stroke={OXYDE} strokeWidth={FIN} />
      <line x1={60} y1={200} x2={60} y2={280} stroke={ENCRE} strokeWidth={FIN} />
      <line x1={330} y1={200} x2={330} y2={280} stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={92} y={246} fontSize="11" textAnchor="middle">
        Commerce
      </text>
      <text className="gravure-lettrage" x={376} y={246} fontSize="11" textAnchor="middle">
        Commerce
      </text>
      <Trait x1={420} y1={0} x2={420} y2={280} w={FORT} />
      <Pastille x={-24} y={100} n={1} />
      <Pastille x={213} y={172} n={2} />
      <Pastille x={444} y={240} n={3} />
      <ChaineCotes y={352} points={[0, 186, 240, 420]} labels={['t', 'e', 't']} attache={324} />
      <RoseVents cx={462} cy={40} r={26} />
    </g>

    {/* ================= FIG. 2 — ÉLÉVATION SUR RUE ================= */}
    <RepereFigure x={620} y={96} n="2" title="Élévation sur rue" w={280} />

    <g transform="translate(640 182)">
      {/* couverture en tuiles canal, faible pente */}
      <path d="M-16 -46 L235 -74 L486 -46" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      {Array.from({ length: 16 }).map((_, i) => (
        <path
          key={i}
          d={`M${-10 + i * 16} ${-46 - i * 1.75} q8 -6 16 0`}
          fill="none"
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
          opacity="0.7"
        />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <path
          key={`d${i}`}
          d={`M${246 + i * 15} ${-72 + i * 1.75} q8 -6 16 0`}
          fill="none"
          stroke={ENCRE}
          strokeWidth={ULTRAFIN}
          opacity="0.7"
        />
      ))}
      {/* génoise à trois rangs */}
      <Genoise x={0} y={-14} w={470} />
      {/* masse maçonnée en pierre appareillée */}
      <rect x={0} y={0} width={470} height={300} fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <Appareil x={0} y={0} w={470} h={300} assise={26} />
      {/* chaînages d'angle harpés */}
      {[0, 440].map((cx) => (
        <g key={cx}>
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={cx} y={i * 52} width={30} height={26} fill="none" stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
          ))}
        </g>
      ))}
      {/* baies d'étage */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <g key={`${r}-${c}`}>
            <rect x={40 + c * 80} y={34 + r * 74} width={42} height={54} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
            <line x1={36 + c * 80} y1={34 + r * 74} x2={86 + c * 80} y2={34 + r * 74} stroke={ENCRE} strokeWidth={FORT} />
            <line x1={36 + c * 80} y1={88 + r * 74} x2={86 + c * 80} y2={88 + r * 74} stroke={ENCRE} strokeWidth={FIN} />
            <line x1={61 + c * 80} y1={34 + r * 74} x2={61 + c * 80} y2={88 + r * 74} stroke={ENCRE} strokeWidth={ULTRAFIN} />
          </g>
        )),
      )}
      {/* rez-de-chaussée : percements larges */}
      {[0, 1].map((c) => (
        <rect key={c} x={30 + c * 250} y={258} width={172} height={42} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      ))}
      {/* le seuil : unique rehaut de laiton */}
      <rect x={216} y={252} width={60} height={48} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M216 252 q30 -22 60 0" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <line x1={214} y1={300} x2={278} y2={300} stroke={LAITON} strokeWidth={FORT} />
      <text className="gravure-lettrage" x={246} y={332} fontSize="12" textAnchor="middle" fill={LAITON}>
        Seuil
      </text>
      <Trait x1={-20} y1={300} x2={490} y2={300} w={FORT} />
      <HachuresVivantes x={-20} y={302} w={510} h={16} pas={12} seed={19} opacity={0.28} />
      <ChaineCotes y={368} points={[40, 120, 200, 280]} labels={['t', 't', 't']} attache={318} />
      <Pastille x={504} y={-30} n={4} />
      <Pastille x={504} y={110} n={5} />
      <Pastille x={504} y={278} n={6} />
      <LigneDeCoupe x1={180} x2={330} y={402} label="B" />
    </g>

    {/* ================= FIG. 3 — COUPE DE SEUIL ================= */}
    <RepereFigure x={60} y={498} n="3" title="Coupe de seuil B-B x4" w={300} />

    <g transform="translate(90 534)">
      <StratesSol p={p} x={0} y={120} w={330} h={92} seed={23} />
      <rect x={0} y={92} width={330} height={28} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={120} y={54} width={120} height={38} fill={poche(p, 'pierre')} stroke={ENCRE} strokeWidth={FORT} />
      <rect x={200} y={0} width={26} height={56} fill={poche(p, 'bois')} stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M120 54 l-14 8 h14" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <RepereNiveau x={300} y={54} label="+-0,00" rappel={240} or />
      <PastilleLettre x={20} y={112} l="a" />
      <PastilleLettre x={62} y={78} l="b" />
      <PastilleLettre x={140} y={40} l="c" />
      <PastilleLettre x={214} y={-18} l="d" />
      <PastilleLettre x={264} y={40} l="e" />
      <PastilleLettre x={302} y={106} l="f" />
      <PastilleLettre x={210} y={152} l="g" />
      <PastilleLettre x={60} y={184} l="h" />
    </g>

    <NomenclatureLettres
      x={470}
      y={552}
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
      x={720}
      y={620}
      perCol={5}
      colGap={300}
      items={[
        'Limite séparative',
        'Porche traversant',
        'Local commercial en pied',
        'Génoise à trois rangs',
        'Couverture en tuiles canal',
        "Baie d'étage, allège et linteau",
        "Chaînage d'angle harpé",
        'Appareil de pierre de taille',
        'Mur mitoyen',
        "Seuil d'entrée",
      ]}
    />

    <Cartouche
      x={880} y={790} numeral="VI" title="Immeuble de rapport provençal" echelle="Éch. symb."
      dossier={VOL_II}
      index="PL. 6/9"
      renvois={['Modèle du groupe : PL. VII']}
    />
  </>
);
