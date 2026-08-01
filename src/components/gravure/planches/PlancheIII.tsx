import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, GravureDefs } from '../defs';
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
  Rupture,
  TraitCache,
  TraceCache,
  AxeMixte,
  Boulon,
  FlechePente,
  PastilleLettre,
  NomenclatureLettres,
} from '../primitives';

/**
 * PLANCHE III — ÉCORCHÉ D'UNE LIGNE DE PRODUCTION CONFIGURABLE.
 *   FIG. 1  vue en plan : sept modules numérotés, flux matière fléché,
 *           variantes de configuration en trait interrompu
 *   FIG. 2  coupe d'un module : bâti, convoyeur, poste, capotage
 *   FIG. 3  arbre de configuration : le même châssis, trois équipements
 * Rehaut de laiton unique : LE MODULE CENTRAL, celui qu'on remplace.
 */

const PY = 250; // axe du flux en plan
const MOD = 132; // pas des modules

export const PLANCHE_III = {
  numeral: 'III',
  title: "Écorché d'une ligne de production configurable",
  desc:
    "Gravure au trait, planche à trois figures. FIGURE 1, vue en plan d'une ligne de production générique : sept modules rectangulaires alignés sur un axe de flux en trait mixte, numérotés de un à sept, séparés par des interfaces répétées ; la matière entre à gauche et sort à droite, le sens étant donné par des flèches fines, et deux variantes de configuration sont figurées en trait interrompu, l'une en dérivation, l'autre en poste ajouté. Le module central est rehaussé de laiton : c'est celui que la configuration remplace. FIGURE 2, coupe verticale d'un module : bâti mécano-soudé poché acier, pieds réglables sur platines, convoyeur à rouleaux figuré par une file de cercles, poste de travail avec sa desserte, capotage démontable en trait interrompu parce que déposé pour le dessin, chemin de câbles sous la table ; huit lettres renvoient à la nomenclature secondaire. FIGURE 3, arbre de configuration : un même châssis porté trois fois, chaque branche recevant un équipement différent, les branches non retenues restant en trait interrompu ; le principe de la ligne est qu'elle se reconfigure sans se refaire. Les cotations sont symboliques, aucune dimension réelle n'est portée. Nomenclature de dix entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '600 380 400 300',
};

export const PlancheIIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — VUE EN PLAN ================= */}
    <RepereFigure x={60} y={96} n="1" title="Vue en plan - les sept modules" w={330} />

    <AxeMixte x1={70} y1={PY} x2={1180} y2={PY} />

    {Array.from({ length: 7 }).map((_, i) => {
      const x = 130 + i * MOD;
      const central = i === 3;
      return (
        <g key={i}>
          <Cadre
            x={x}
            y={PY - 46}
            w={MOD - 24}
            h={92}
            weight={central ? FORT : MOYEN}
            stroke={central ? LAITON : ENCRE}
          />
          <Pastille x={x + (MOD - 24) / 2} y={PY - 66} n={i + 1} />
          {/* interface entre modules */}
          {i < 6 && (
            <>
              <Trait x1={x + MOD - 24} y1={PY - 14} x2={x + MOD} y2={PY - 14} w={FIN} over={0} />
              <Trait x1={x + MOD - 24} y1={PY + 14} x2={x + MOD} y2={PY + 14} w={FIN} over={0} />
            </>
          )}
          {/* poste intérieur */}
          <rect x={x + 18} y={PY - 18} width={MOD - 60} height={36} fill={poche(p, 'acier')} opacity="0.55" />
        </g>
      );
    })}

    {/* flux matière */}
    <FlechePente x={70} y={PY} dx={48} dy={0} label="Entrée" />
    <FlechePente x={1120} y={PY} dx={54} dy={0} label="Sortie" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <FlechePente key={i} x={130 + i * MOD + MOD - 26} y={PY} dx={22} dy={0} label="" />
    ))}

    {/* variantes en trait interrompu : dérivation et poste ajouté */}
    <TraceCache d={`M${130 + 3 * MOD + 54} ${PY - 46} v-62 h${MOD} v62`} />
    <TraceCache d={`M${130 + 5 * MOD + 54} ${PY + 46} v58 h-${MOD} v-58`} />
    <text className="gravure-lettrage" x={130 + 3 * MOD + 60} y={PY - 118} fontSize="11">
      Variante en dérivation
    </text>
    <text className="gravure-lettrage" x={130 + 4 * MOD - 10} y={PY + 120} fontSize="11">
      Poste ajouté
    </text>

    <ChaineCotes y={PY + 168} points={[130, 130 + MOD, 130 + 2 * MOD, 130 + 3 * MOD]} labels={['p', 'p', 'p']} attache={PY + 60} />
    <Attache x={130 + 3 * MOD + 54} y={PY + 46} dx={90} dy={72} label="Module remplaçable" />

    {/* ================= FIG. 2 — COUPE D'UN MODULE ================= */}
    <RepereFigure x={620} y={410} n="2" title="Coupe d'un module" w={300} />

    <g transform="translate(620 440)">
      {/* bâti */}
      <rect x={40} y={92} width={300} height={22} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FORT} />
      <Trait x1={70} y1={114} x2={70} y2={196} w={MOYEN} />
      <Trait x1={310} y1={114} x2={310} y2={196} w={MOYEN} />
      <TraitCache x1={70} y1={150} x2={310} y2={150} />
      {/* platines et sol */}
      <rect x={54} y={196} width={32} height={10} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={294} y={196} width={32} height={10} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={MOYEN} />
      <Trait x1={20} y1={206} x2={360} y2={206} w={FORT} />
      <Boulon x={70} y={201} r={2.6} />
      <Boulon x={310} y={201} r={2.6} />
      {/* convoyeur à rouleaux */}
      {Array.from({ length: 9 }).map((_, i) => (
        <circle key={i} cx={56 + i * 34} cy={82} r={9} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      ))}
      <Trait x1={40} y1={70} x2={340} y2={70} w={FIN} />
      {/* poste et desserte */}
      <rect x={150} y={30} width={80} height={40} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
      <Trait x1={150} y1={50} x2={230} y2={50} w={FIN} over={0} />
      {/* capotage déposé */}
      <TraceCache d="M36 26 h308 v54" />
      {/* chemin de câbles */}
      <rect x={110} y={130} width={160} height={14} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="2 3" />

      <PastilleLettre x={30} y={100} l="a" />
      <PastilleLettre x={30} y={168} l="b" />
      <PastilleLettre x={56} y={62} l="c" />
      <PastilleLettre x={190} y={20} l="d" />
      <PastilleLettre x={356} y={30} l="e" />
      <PastilleLettre x={286} y={128} l="f" />
      <PastilleLettre x={70} y={218} l="g" />
      <PastilleLettre x={330} y={196} l="h" />
    </g>

    <CercleDetail cx={800} cy={560} r={150} label="Détail x2" />

    <NomenclatureLettres
      x={1010}
      y={470}
      items={[
        'Table de bâti',
        'Traverse de contreventement',
        'Rouleau de convoyage',
        'Poste de travail',
        'Capotage déposé au dessin',
        'Chemin de câbles',
        'Pied réglable et platine',
        'Calage au sol',
      ]}
    />

    {/* ================= FIG. 3 — ARBRE DE CONFIGURATION ================= */}
    <RepereFigure x={60} y={410} n="3" title="Arbre de configuration" w={270} />

    <g transform="translate(60 440)">
      <Cadre x={30} y={40} w={130} h={40} weight={MOYEN} />
      <text className="gravure-lettrage" x={95} y={64} fontSize="12" textAnchor="middle">
        Châssis
      </text>
      {[0, 1, 2].map((i) => {
        const y = 140 + i * 62;
        const retenue = i === 1;
        return (
          <g key={i}>
            {retenue ? (
              <path d={`M95 80 V${y} H240`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
            ) : (
              <TraceCache d={`M95 80 V${y} H240`} />
            )}
            <Cadre x={240} y={y - 19} w={170} h={38} weight={retenue ? MOYEN : FIN} />
            <text className="gravure-lettrage" x={252} y={y + 4} fontSize="11">
              {['Équipement A', 'Équipement B', 'Équipement C'][i]}
            </text>
          </g>
        );
      })}
      <Rupture x={200} y={300} length={90} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={96}
      y={706}
      perCol={5}
      colGap={330}
      items={[
        'Poste amont',
        'Module de préparation',
        'Interface normalisée',
        'Module central remplaçable',
        'Poste de contrôle',
        'Module de finition',
        'Poste aval',
        'Dérivation optionnelle',
        'Poste ajouté',
        'Axe de flux matière',
      ]}
    />

    <Cartouche x={880} y={790} numeral="III" title="Ligne de production configurable" echelle="Éch. symb." />
  </>
);
