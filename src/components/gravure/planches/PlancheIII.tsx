import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_I } from '../Cartouche';
import {
  Trait,
  Cadre,
  poche,
  Attache,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  TraceCache,
  AxeMixte,
  FlechePente,
} from '../primitives';

/**
 * PLANCHE III — FLOWSHEET AGRO CONFIGURABLE (fiche Line Builder).
 * Le produit est le flowsheet lui-même : une ligne, plusieurs filières.
 *   FIG. 1  la ligne : réception, manutention, nettoyage, calibrage,
 *           transformation (module variante), dosage, conditionnement
 *   FIG. 2  le cadre de configuration : trois modules variantes en pointillé,
 *           chacun sur le même piquage, chacun sa filière
 *   FIG. 3  légende des flux d'utilités et bilan matière symbolique
 * Rehaut de laiton unique : LA LIGNE DE CONFIGURATION (le piquage commun).
 * Les bulles d'instrumentation et les repères d'équipement sont des
 * étiquettes de convention : aucune référence normative n'est écrite.
 */

const YA = 250; // rangée haute du flowsheet
const YB = 470; // rangée basse

/** Bulle d'instrumentation : deux lettres, trait fin de boucle. */
const Bulle = ({ x, y, l, to }: { x: number; y: number; l: string; to?: number }) => (
  <g>
    {to !== undefined && (
      <line x1={x} y1={y + 14} x2={x} y2={to} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="4 3" opacity="0.7" />
    )}
    <circle cx={x} cy={y} r={14} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
    <line x1={x - 14} y1={y} x2={x + 14} y2={y} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
    <text className="gravure-lettrage" x={x} y={y - 3} fontSize="10" textAnchor="middle">
      {l}
    </text>
  </g>
);

/** Repère d'équipement porté sous une masse. */
const Repere = ({ x, y, t }: { x: number; y: number; t: string }) => (
  <text className="gravure-lettrage" x={x} y={y} fontSize="11" textAnchor="middle" fill={OXYDE}>
    {t}
  </text>
);

/** Vanne de coupure : deux triangles opposés. */
const Vanne = ({ x, y }: { x: number; y: number }) => (
  <g>
    <path d={`M${x - 8} ${y - 7} L${x} ${y} L${x - 8} ${y + 7} z`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <path d={`M${x + 8} ${y - 7} L${x} ${y} L${x + 8} ${y + 7} z`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
  </g>
);

export const PLANCHE_III = {
  numeral: 'III',
  title: 'Configurateur de ligne, sortie CFG-A',
  desc:
    "Gravure au trait, planche à trois figures représentant la sortie du configurateur de ligne agro-industrielle. FIGURE 1, la configuration CFG-A telle qu'elle sort du configurateur : la matière entre par une trémie de réception surmontée d'une grille anti-corps étrangers, descend en fosse, remonte par un élévateur à godets, chemine sur un convoyeur à bande incliné puis une vis sans fin, traverse un poste de nettoyage et d'épierrage composé d'un séparateur à air, d'un tamis vibrant et d'un aimant à barreaux, se calibre dans un plansichter à étages doublé d'un by-pass, puis rejoint le poste de transformation où la variante retenue est raccordée sur le piquage commun ; en aval, une trémie peseuse et un mélangeur à rubans assurent le dosage et le mélange, une ensacheuse, une pesée-contrôle, un cerclage et un palettiseur assurent le conditionnement. Le flux matière est tracé en trait fort continu et fléché ; le réseau d'aspiration est tracé à part, dans son propre trait, et relie les capots du nettoyage, du calibrage et de l'ensachage au filtre à manches et à son rejet filtré ; une boucle de recyclage des refus ramène en amont les refus du calibrage, la part non recyclable étant écartée. Des vannes de coupure jalonnent le parcours, des bulles d'instrumentation à deux lettres marquent les points de mesure, et un point d'échantillonnage qualité est posé après le calibrage, avec sa prise et son bocal. FIGURE 2, la matrice du configurateur : six familles de modules en lignes, trois filières en colonnes, mouture, oléagineux et séchage ; chaque case porte un module commun, un module en variante ou une absence ; la colonne de la filière retenue est rehaussée de laiton et forme la configuration CFG-A lue en FIGURE 1. FIGURE 3, les variantes raccordées sur le piquage commun, broyeur à cylindres, presse et séchoir rotatif, dessinées en trait interrompu, avec la légende des flux d'utilités, vapeur, air comprimé, eau de procédé et électricité, et un bilan matière symbolique, entrée, sortie, refus recyclés et refus écartés, sans aucun chiffre d'exploitation. Les repères d'équipement portés au dessin sont des étiquettes de convention. Nomenclature de douze entrées et cartouche de dossier.",
  viewBox: '0 0 1240 900',
  detailViewBox: '600 330 420 320',
};

export const PlancheIIIDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA LIGNE ================= */}
    <RepereFigure x={60} y={96} n="1" title="Configuration CFG-A, de la réception au conditionnement" w={380} />

    {/* --- réception : trémie, grille, fosse --- */}
    <g>
      <path d="M74 176 L182 176 L152 236 L104 236 z" fill="none" stroke={ENCRE} strokeWidth={FORT} />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1={80 + i * 20} y1={176} x2={80 + i * 20} y2={186} stroke={ENCRE} strokeWidth={FIN} />
      ))}
      <line x1={74} y1={176} x2={182} y2={176} stroke={ENCRE} strokeWidth={MOYEN} />
      <rect x={104} y={236} width={48} height={26} fill={poche(p, 'beton')} stroke={ENCRE} strokeWidth={MOYEN} />
      <Repere x={128} y={282} t="T-101" />
      <FlechePente x={128} y={140} dx={0} dy={28} label="Entrée matière" />
    </g>

    {/* --- élévateur à godets --- */}
    <g>
      <Cadre x={200} y={150} w={34} h={140} weight={MOYEN} />
      {Array.from({ length: 5 }).map((_, i) => (
        <path key={i} d={`M206 ${170 + i * 26} h10 v9 h-10 z`} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <line x1={217} y1={150} x2={217} y2={290} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="14 4 3 4" opacity="0.7" />
      <Repere x={217} y={306} t="E-102" />
    </g>

    {/* --- convoyeur à bande incliné puis vis sans fin --- */}
    <g>
      <line x1={234} y1={168} x2={330} y2={196} stroke={ENCRE} strokeWidth={FORT} />
      <line x1={234} y1={186} x2={330} y2={214} stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={238} cy={177} r={7} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={326} cy={205} r={7} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <Repere x={282} y={244} t="C-103" />
    </g>

    {/* --- nettoyage et épierrage --- */}
    <g>
      <Cadre x={348} y={YA - 96} w={132} h={124} weight={FORT} />
      {/* séparateur à air */}
      <path d="M362 176 q28 -18 56 0" fill="none" stroke={ENCRE} strokeWidth={FIN} />
      {/* tamis vibrant, deux étages inclinés */}
      <line x1={358} y1={200} x2={470} y2={214} stroke={ENCRE} strokeWidth={MOYEN} strokeDasharray="3 3" />
      <line x1={358} y1={222} x2={470} y2={236} stroke={ENCRE} strokeWidth={MOYEN} strokeDasharray="3 3" />
      {/* aimant à barreaux */}
      <rect x={366} y={248} width={40} height={12} fill={poche(p, 'acier')} stroke={ENCRE} strokeWidth={FIN} />
      <Repere x={414} y={294} t="S-201" />
      <Bulle x={500} y={168} l="PT" to={196} />
    </g>

    {/* --- calibrage : plansichter à étages + by-pass --- */}
    <g>
      <Cadre x={556} y={YA - 92} w={126} h={116} weight={FORT} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={556} y1={YA - 66 + i * 24} x2={682} y2={YA - 66 + i * 24} stroke={ENCRE} strokeWidth={FIN} />
      ))}
      <line x1={619} y1={YA - 92} x2={619} y2={YA + 24} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="14 4 3 4" opacity="0.6" />
      <Repere x={619} y={YA + 46} t="P-204" />
      {/* by-pass */}
      <TraceCache d={`M540 ${YA - 40} v-74 h176 v74`} />
      <text className="gravure-lettrage" x={588} y={YA - 122} fontSize="11" textAnchor="middle">
        By-pass
      </text>
      {/* point d'échantillonnage qualité */}
      <Bulle x={716} y={YA - 66} l="QT" to={YA - 12} />
      <line x1={696} y1={YA + 2} x2={716} y2={YA - 52} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      <path d={`M690 ${YA + 2} l12 -8 v16 z`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={742} y={YA - 84} fontSize="11">
        Prise d'échantillon
      </text>
    </g>

    {/* --- recyclage des refus : boucle de retour vers l'élévateur --- */}
    <g>
      <path d={`M600 ${YA + 26} V${YA + 94} H196 V276`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <path d="M196 268 l-6 12 h12 z" fill={ENCRE} stroke="none" />
      <text className="gravure-lettrage" x={330} y={YA + 88} fontSize="11">
        Recyclage des refus
      </text>
      <path d={`M600 ${YA + 26} H664 V${YA + 68}`} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="6 4" />
      <text className="gravure-lettrage" x={670} y={YA + 72} fontSize="11" fill={OXYDE}>
        Refus écartés
      </text>
    </g>

    {/* --- flux matière rangée haute --- */}
    <Trait x1={152} y1={YA + 12} x2={200} y2={YA + 12} w={FORT} over={0} />
    <Trait x1={330} y1={YA - 44} x2={348} y2={YA - 44} w={FORT} over={0} />
    <Trait x1={480} y1={YA + 2} x2={556} y2={YA + 2} w={FORT} over={0} />
    <FlechePente x={496} y={YA + 2} dx={32} dy={0} label="" />
    <Vanne x={520} y={YA + 2} />

    {/* --- descente vers la rangée basse --- */}
    <path d={`M682 ${YA + 2} h58 v${YB - YA - 2} h-462`} fill="none" stroke={ENCRE} strokeWidth={FORT} />
    <FlechePente x={740} y={YA + 60} dx={0} dy={40} label="" />

    {/* --- transformation : le piquage commun, rehaut de laiton --- */}
    <g>
      <Cadre x={604} y={YB - 56} w={132} h={112} weight={FORT} />
      <line x1={670} y1={YB - 56} x2={670} y2={YB + 56} stroke={ENCRE} strokeWidth={ULTRAFIN} strokeDasharray="14 4 3 4" opacity="0.6" />
      <text className="gravure-lettrage" x={670} y={YB - 68} fontSize="12" textAnchor="middle">
        Poste de transformation
      </text>
      <Repere x={670} y={YB + 76} t="M-301" />
      {/* la ligne de configuration : piquage commun */}
      <path d={`M736 ${YB} h96`} fill="none" stroke={ENCRE} strokeWidth={FORT} />
      <circle cx={832} cy={YB} r={5} fill={ENCRE} />
      <Attache x={790} y={YB} dx={-120} dy={-104} label="Ligne de configuration" anchor="end" />
    </g>

    {/* --- dosage et mélange --- */}
    <g>
      <path d={`M356 ${YB - 66} h96 l-24 44 h-48 z`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <circle cx={404} cy={YB + 12} r={30} fill="none" stroke={ENCRE} strokeWidth={FORT} />
      <path d={`M382 ${YB + 12} q22 -22 44 0 q-22 22 -44 0`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <Repere x={404} y={YB + 68} t="M-305" />
      <Bulle x={330} y={YB - 62} l="WT" to={YB - 30} />
    </g>

    {/* --- conditionnement --- */}
    <g>
      <Cadre x={120} y={YB - 52} w={90} h={104} weight={MOYEN} />
      <path d={`M138 ${YB + 20} h54 v26 h-54 z`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
      <line x1={165} y1={YB - 52} x2={165} y2={YB + 20} stroke={ENCRE} strokeWidth={FIN} />
      <text className="gravure-lettrage" x={165} y={YB - 64} fontSize="11" textAnchor="middle">
        Ensachage
      </text>
      {/* pesée-contrôle et cerclage */}
      <Cadre x={228} y={YB + 4} w={54} h={48} weight={FIN} />
      <line x1={228} y1={YB + 30} x2={282} y2={YB + 30} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      {/* palettiseur */}
      <Cadre x={120} y={YB + 76} w={90} h={26} weight={FIN} />
      <FlechePente x={110} y={YB + 89} dx={-42} dy={0} label="Sortie" />
      <Bulle x={262} y={YB - 44} l="LT" to={YB + 4} />
      <Repere x={165} y={YB + 122} t="K-401" />
    </g>

    {/* --- aspiration / dépoussiérage --- */}
    <g>
      <Cadre x={880} y={150} w={104} h={116} weight={MOYEN} />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={i} x1={892 + i * 20} y1={166} x2={892 + i * 20} y2={250} stroke={ENCRE} strokeWidth={ULTRAFIN} />
      ))}
      <path d="M932 150 v-32 h24" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
      <text className="gravure-lettrage" x={932} y={106} fontSize="11" textAnchor="middle">
        Rejet filtré
      </text>
      <Repere x={932} y={288} t="F-501" />
      {/* réseau d'aspiration : son propre trait, distinct du flux matière */}
      <path
        d="M880 208 H812 V110 H360"
        fill="none"
        stroke={OXYDE}
        strokeWidth={FIN}
        strokeDasharray="12 4"
      />
      {[414, 660].map((bx) => (
        <path
          key={bx}
          d={`M${bx} 110 V${bx === 414 ? 154 : 158}`}
          fill="none"
          stroke={OXYDE}
          strokeWidth={FIN}
          strokeDasharray="12 4"
        />
      ))}
      <text className="gravure-lettrage" x={506} y={100} fontSize="11" fill={OXYDE}>
        Réseau d&apos;aspiration, en trait propre
      </text>
    </g>

    {/* ================= FIG. 2 — LA MATRICE DU CONFIGURATEUR ================= */}
    <RepereFigure x={880} y={366} n="2" title="Matrice filières x modules" w={300} />

    <g transform="translate(880 392)">
      {(() => {
        const COLX = [176, 232, 288];
        const FIL = ['Mouture', 'Oléagin.', 'Séchage'];
        const ROWS: [string, ('c' | 'v' | '-')[]][] = [
          ['Réception', ['c', 'c', 'c']],
          ['Nettoyage', ['c', 'c', 'c']],
          ['Calibrage', ['c', 'c', '-']],
          ['Transformation', ['v', 'v', 'v']],
          ['Dosage', ['c', '-', 'c']],
          ['Conditionnement', ['c', 'c', 'c']],
        ];
        return (
          <>
            {/* colonne retenue : le seul rehaut de laiton de la planche */}
            <rect x={COLX[0] - 22} y={6} width={44} height={166} fill="none" stroke={LAITON} strokeWidth={FORT} />
            <text className="gravure-lettrage" x={COLX[0]} y={-16} fontSize="11" textAnchor="middle" fill={LAITON}>
              CFG-A
            </text>
            {FIL.map((f, c) => (
              <text key={f} className="gravure-lettrage" x={COLX[c]} y={0} fontSize="11" textAnchor="middle">
                {f}
              </text>
            ))}
            <line x1={0} y1={8} x2={310} y2={8} stroke={ENCRE} strokeWidth={FIN} />
            {ROWS.map(([nom, cases], r) => {
              const y = 30 + r * 28;
              return (
                <g key={nom}>
                  <text className="gravure-lettrage" x={0} y={y + 4} fontSize="11">
                    {nom}
                  </text>
                  <line x1={0} y1={y + 14} x2={310} y2={y + 14} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.45" />
                  {cases.map((k, c) => (
                    <g key={c}>
                      {k === 'c' && <circle cx={COLX[c]} cy={y} r={5} fill={ENCRE} />}
                      {k === 'v' && (
                        <rect x={COLX[c] - 6} y={y - 6} width={12} height={12} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
                      )}
                      {k === '-' && (
                        <line x1={COLX[c] - 5} y1={y} x2={COLX[c] + 5} y2={y} stroke={OXYDE} strokeWidth={FIN} />
                      )}
                    </g>
                  ))}
                </g>
              );
            })}
            <text className="gravure-lettrage" x={0} y={214} fontSize="11" fill={OXYDE}>
              Module commun (point), variante (carré), sans objet (tiret)
            </text>
            <text className="gravure-lettrage" x={0} y={232} fontSize="11" fill={OXYDE}>
              Colonne retenue : CFG-A, lue en FIG. 1
            </text>
          </>
        );
      })()}
    </g>

    <CercleDetail cx={700} cy={YB} r={140} label="Détail x2" />

    {/* ============ FIG. 3 — VARIANTES RACCORDÉES, UTILITÉS ET BILAN ============ */}
    <RepereFigure x={60} y={630} n="3" title="Variantes raccordées, utilités et bilan" w={330} />

    {/* les trois variantes sur le piquage commun */}
    <g transform="translate(70 652)">
      <path d="M0 8 V148" fill="none" stroke={ENCRE} strokeWidth={FORT} />
      {[
        ['Broyeur à cylindres', 'Filière mouture'],
        ['Presse', 'Filière oléagineux'],
        ['Séchoir rotatif', 'Filière séchage'],
      ].map(([nom, filiere], i) => {
        const y = 24 + i * 46;
        return (
          <g key={nom}>
            <path d={`M0 ${y} h40`} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
            <rect x={40} y={y - 16} width={186} height={34} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray="6 4" />
            <text className="gravure-lettrage" x={50} y={y - 2} fontSize="11">
              {nom}
            </text>
            <text className="gravure-lettrage" x={50} y={y + 13} fontSize="10" fill={OXYDE}>
              {filiere}
            </text>
          </g>
        );
      })}
      <text className="gravure-lettrage" x={0} y={166} fontSize="11" fill={OXYDE}>
        Un piquage, une variante par filière
      </text>
    </g>

    {/* utilités et bilan */}
    <g transform="translate(370 652)">
      {[
        ['Vapeur', '16 5'],
        ['Air comprimé', '4 4'],
        ['Eau de procédé', '10 4 2 4'],
        ['Électricité', '2 4'],
      ].map(([nom, dash], i) => (
        <g key={nom}>
          <line x1={0} y1={20 + i * 22} x2={54} y2={20 + i * 22} stroke={ENCRE} strokeWidth={FIN} strokeDasharray={dash} />
          <text className="gravure-lettrage" x={64} y={24 + i * 22} fontSize="11">
            {nom}
          </text>
        </g>
      ))}
      <AxeMixte x1={0} y1={114} x2={168} y2={114} />
      <text className="gravure-lettrage" x={0} y={134} fontSize="11">
        Entrée matière, sortie produit
      </text>
      <text className="gravure-lettrage" x={0} y={152} fontSize="11">
        Refus recyclés, refus écartés
      </text>
      <text className="gravure-lettrage" x={0} y={170} fontSize="11" fill={OXYDE}>
        Bilan symbolique, sans chiffre
      </text>
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={560}
      y={656}
      perCol={6}
      colGap={280}
      lineHeight={21}
      items={[
        'Trémie de réception et grille',
        'Élévateur à godets',
        'Convoyeur à bande et vis',
        'Nettoyage et épierrage',
        'Plansichter et by-pass',
        'Point d\u2019échantillonnage qualité',
        'Poste de transformation',
        'Dosage et mélange',
        'Ensachage et pesée-contrôle',
        'Palettisation',
        'Filtre à manches et rejet',
        'Piquage de configuration',
      ]}
    />

    <Cartouche
      x={880} y={846} numeral="III" title="Configurateur de ligne, sortie CFG-A" echelle="Éch. symb."
      dossier={VOL_I}
      index="PL. 3/9"
      renvois={['Implantation résultante : PL. VIII', 'Socles logiciels : PL. IV']}
    />

  </>
);
