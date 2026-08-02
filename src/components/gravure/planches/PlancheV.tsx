import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche from '../Cartouche';
import {
  Trait,
  Cadre,
  Attache,
  ChaineCotes,
  RepereFigure,
  Pastille,
  Nomenclature,
  CercleDetail,
  TraceCache,
  AxeMixte,
  PastilleLettre,
  NomenclatureLettres,
} from '../primitives';

/**
 * PLANCHE V — PARTITION D'UN FLUX DE RÉSERVATION.
 * Le vocabulaire imposé est celui de la tabulature : portées, mesures,
 * têtes de note, silences, barres de reprise.
 *   FIG. 1  la partition : trois portées (demande, ressource, engagement)
 *   FIG. 2  détail x4 de la note de confirmation
 *   FIG. 3  grille d'affectation : ressources en lignes, mesures en colonnes
 * Rehaut de laiton unique : LA NOTE DE CONFIRMATION.
 */

const P1 = 180; // portée 1 : demandes
const P2 = 300; // portée 2 : ressources
const P3 = 420; // portée 3 : engagements
const M0 = 150; // première barre de mesure
const MES = 130; // largeur de mesure
const CONF = M0 + 4 * MES + 46; // abscisse de la note de confirmation

const Portee = ({ y, label }: { y: number; label: string }) => (
  <g>
    {[-16, -8, 0, 8, 16].map((d) => (
      <line key={d} x1={M0 - 60} y1={y + d} x2={M0 + 7 * MES} y2={y + d} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.7" />
    ))}
    <line x1={M0 - 60} y1={y - 16} x2={M0 - 60} y2={y + 16} stroke={ENCRE} strokeWidth={MOYEN} />
    {/* clef gravée : spirale et hampe, sans citation d'aucun signe normalisé */}
    <path
      d={`M${M0 - 48} ${y + 14} q-10 -6 -2 -13 q9 -7 13 3 q4 12 -9 20`}
      fill="none"
      stroke={ENCRE}
      strokeWidth={FIN}
    />
    <line x1={M0 - 39} y1={y - 20} x2={M0 - 39} y2={y + 18} stroke={ENCRE} strokeWidth={ULTRAFIN} />
    <text className="gravure-lettrage" x={M0 - 66} y={y - 24} fontSize="11" textAnchor="start">
      {label}
    </text>
  </g>
);


const Note = ({ x, y, or = false, creuse = false }: { x: number; y: number; or?: boolean; creuse?: boolean }) => {
  const c = or ? LAITON : ENCRE;
  return (
    <g>
      <ellipse cx={x} cy={y} rx={7} ry={5} transform={`rotate(-18 ${x} ${y})`} fill={creuse ? 'none' : c} stroke={c} strokeWidth={FIN} />
      <line x1={x + 7} y1={y - 2} x2={x + 7} y2={y - 34} stroke={c} strokeWidth={MOYEN} />
    </g>
  );
};

export const PLANCHE_V = {
  numeral: 'V',
  title: "Partition d'un flux de réservation",
  desc:
    "Gravure au trait, planche à trois figures, où un flux de réservation est noté comme une partition. FIGURE 1, trois portées superposées et barrées en sept mesures : la portée haute porte les demandes, têtes de note creuses posées irrégulièrement ; la portée médiane porte les ressources disponibles, notes pleines tenues sur plusieurs mesures ; la portée basse porte les engagements, où chaque note résulte de la rencontre d'une demande et d'une ressource. Des liaisons verticales fines relient les trois portées mesure par mesure, un silence marque la mesure où aucune ressource n'est disponible, et une barre de reprise indique la relance périodique. Une seule note est rehaussée de laiton : la confirmation, seul moment où l'engagement devient ferme. FIGURE 2, détail à quatre fois l'échelle de cette note : hampe, tête, liaison amont, liaison aval, et huit lettres de nomenclature secondaire décrivant ce que porte une confirmation. FIGURE 3, grille d'affectation : les ressources en lignes, les mesures en colonnes, les cases occupées pochées légèrement, les cases en attente laissées vides, les conflits marqués d'une croix fine. Les cotations sont symboliques et aucune donnée réelle ne figure. Nomenclature de huit entrées et cartouche.",
  viewBox: '0 0 1240 900',
  detailViewBox: '760 380 400 300',
};

export const PlancheVDrawing = ({ p }: { p: string }) => (
  <>
    <GravureDefs p={p} />

    {/* ================= FIG. 1 — LA PARTITION ================= */}
    <RepereFigure x={60} y={96} n="1" title="Partition - demandes, ressources, engagements" w={420} />

    <Portee y={P1} label="Demandes" />
    <Portee y={P2} label="Ressources" />
    <Portee y={P3} label="Engagements" />

    {/* barres de mesure */}
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={i} x1={M0 + i * MES} y1={P1 - 16} x2={M0 + i * MES} y2={P3 + 16} stroke={ENCRE} strokeWidth={i === 7 ? MOYEN : ULTRAFIN} opacity="0.75" />
    ))}
    {/* barre de reprise */}
    <g>
      <line x1={M0 + 7 * MES - 8} y1={P1 - 16} x2={M0 + 7 * MES - 8} y2={P3 + 16} stroke={ENCRE} strokeWidth={FIN} />
      <circle cx={M0 + 7 * MES - 20} cy={P2 - 6} r={2.6} fill={ENCRE} />
      <circle cx={M0 + 7 * MES - 20} cy={P2 + 6} r={2.6} fill={ENCRE} />
    </g>

    {/* notes */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <Note key={`d${i}`} x={M0 + i * MES + 46} y={P1 + [8, -8, 0, 8, -16, 0, 8][i]} creuse />
    ))}
    {[0, 1, 2, 4, 5, 6].map((i) => (
      <Note key={`r${i}`} x={M0 + i * MES + 46} y={P2 + [0, 8, -8, 0, 8, -8, 0][i]} />
    ))}
    {[0, 1, 2, 5, 6].map((i) => (
      <Note key={`e${i}`} x={M0 + i * MES + 46} y={P3 + [8, 0, -8, 0, 8, 0, -8][i]} />
    ))}
    {/* la confirmation : unique rehaut de laiton */}
    <Note x={CONF} y={P3 - 8} or />
    <text className="gravure-lettrage" x={CONF + 16} y={P3 - 34} fontSize="12" fill={LAITON}>
      Confirmation
    </text>

    {/* liaisons verticales mesure par mesure */}
    {[0, 1, 2, 5, 6].map((i) => (
      <line key={`l${i}`} x1={M0 + i * MES + 46} y1={P1 + 20} x2={M0 + i * MES + 46} y2={P3 - 20} stroke={OXYDE} strokeWidth={ULTRAFIN} opacity="0.7" />
    ))}
    {/* silence : la mesure sans ressource */}
    <g transform={`translate(${M0 + 3 * MES + 40} ${P2 - 10})`}>
      <path d="M0 0 h16 v7 h-16 z" fill={ENCRE} />
      <text className="gravure-lettrage" x={-4} y={38} fontSize="11">
        Silence
      </text>
    </g>

    <ChaineCotes y={P3 + 74} points={[M0, M0 + MES, M0 + 2 * MES, M0 + 3 * MES]} labels={['m', 'm', 'm']} attache={P3 + 22} />
    <Pastille x={M0 - 88} y={P1} n={1} />
    <Pastille x={M0 - 88} y={P2} n={2} />
    <Pastille x={M0 - 88} y={P3} n={3} />
    <Attache x={CONF} y={P3 - 8} dx={92} dy={64} label="Engagement ferme" />

    {/* ================= FIG. 2 — DÉTAIL DE LA NOTE ================= */}
    <RepereFigure x={780} y={410} n="2" title="La note de confirmation x4" w={290} />

    <g transform="translate(960 560)">
      <CercleDetail cx={0} cy={0} r={140} label="x4" />
      <ellipse cx={-10} cy={20} rx={34} ry={24} transform="rotate(-18 -10 20)" fill="none" stroke={LAITON} strokeWidth={MOYEN} />
      <line x1={22} y1={10} x2={22} y2={-104} stroke={ENCRE} strokeWidth={MOYEN} />
      <AxeMixte x1={-10} y1={-120} x2={-10} y2={120} />
      <TraceCache d="M-130 60 L-44 30" />
      <TraceCache d="M56 -10 L132 -40" />
      <PastilleLettre x={-118} y={-42} l="a" />
      <PastilleLettre x={-56} y={-18} l="b" />
      <PastilleLettre x={30} y={-92} l="c" />
      <PastilleLettre x={92} y={-30} l="d" />
      <PastilleLettre x={106} y={54} l="e" />
      <PastilleLettre x={26} y={104} l="f" />
      <PastilleLettre x={-72} y={96} l="g" />
      <PastilleLettre x={-126} y={26} l="h" />
    </g>

    <NomenclatureLettres
      x={600}
      y={452}
      items={[
        'Demande reçue, amont',
        'Ressource retenue',
        "Hampe : durée de l'engagement",
        'Destinataire notifié',
        'Trace conservée',
        'Condition de report',
        "Fenêtre d'annulation",
        "Axe de la mesure",
      ]}
    />

    {/* ================= FIG. 3 — GRILLE D'AFFECTATION ================= */}
    <RepereFigure x={60} y={410} n="3" title="Grille d'affectation" w={280} />

    <g transform="translate(90 440)">
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => {
          const occupe = (r * 3 + c * 5) % 7 < 3;
          const conflit = r === 2 && c === 4;
          return (
            <g key={`${r}-${c}`}>
              <rect
                x={c * 66}
                y={r * 40}
                width={66}
                height={40}
                fill={occupe ? 'hsl(var(--gravure-encre) / 0.10)' : 'none'}
                stroke={ENCRE}
                strokeWidth={ULTRAFIN}
                opacity="0.85"
              />
              {conflit && (
                <path
                  d={`M${c * 66 + 14} ${r * 40 + 12} l38 16 M${c * 66 + 52} ${r * 40 + 12} l-38 16`}
                  stroke={OXYDE}
                  strokeWidth={FIN}
                />
              )}
            </g>
          );
        }),
      )}
      <text className="gravure-lettrage" x={0} y={-10} fontSize="11">
        Mesures
      </text>
      <text className="gravure-lettrage" x={-64} y={104} fontSize="11">
        Ressources
      </text>
      <Pastille x={-30} y={200} n={7} />
    </g>

    {/* ================= NOMENCLATURE ================= */}
    <Nomenclature
      x={96}
      y={730}
      perCol={4}
      colGap={330}
      items={[
        'Portée des demandes',
        'Portée des ressources',
        'Portée des engagements',
        'Mesure : unité de temps',
        'Silence : aucune ressource',
        'Barre de reprise : relance',
        'Case occupée',
        'Conflit signalé',
      ]}
    />

    <Cartouche x={880} y={790} numeral="V" title="Partition d'un flux de réservation" echelle="Éch. symb." />
  </>
);
