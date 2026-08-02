import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, GravureDefs } from '../defs';
import Cartouche, { VOL_III } from '../Cartouche';
import { RepereFigure, TraceRegulateur, ArcRegulateur, MIXTE_DASH } from '../primitives';
import { TitrePlanche, EchelleLibelles, Repere, SensLecture, BlocTexte } from '../lisibilite';

/**
 * PLANCHE VII — LE SCHÉMA DE PRINCIPE DU GROUPE (DOSSIER OWL, VOL. III, PL. 7/9).
 * PHASE M4 — reconstruction complète sur le système L, lue comme un schéma
 * hydraulique : une tête, cinq organes, des tuyaux typés, un circuit fermé.
 *
 * FIG. 1  Le schéma de principe. Cinq médaillons sur le cercle directeur, un
 *         emblème de métier par société, chacun renvoyant à SA planche. Tous
 *         les flux du modèle y sont tracés, chacun avec son type de trait ;
 *         aucun libellé de flux n'est porté au dessin : ils vivent tous en
 *         échelle de marge, reliés par attache à un seul coude.
 * FIG. 2  Les familles de flux : l'échantillon de chaque trait, en regard de
 *         la famille qu'il désigne.
 * FIG. 3  Le tracé régulateur : cercle directeur, pentagone inscrit et
 *         diagonales - la planche est construite, non arrangée.
 *
 * LES TROIS LECTURES
 *   3 s    Une tête au centre, cinq sociétés autour, et un circuit d'or fermé
 *          qui descend en capital, passe par la construction, se dépose en
 *          patrimoine et remonte à son point de départ.
 *   30 s   Les familles de flux se distinguent au seul trait : capital fort
 *          descendant, retours d'exécution en pointillé, socles logiciels en
 *          double trait fin, licences et prestations remontantes au trait fin,
 *          dividendes au trait mixte, signalements Scouts en oxyde, entrants
 *          de l'extérieur du cercle.
 *   3 min  Chaque tuyau est nommé en marge, chaque médaillon porte son repère
 *          et renvoie à sa planche : CAO PL. I, Line Builder PL. III, Drabair
 *          PL. IV, Weavme PL. V, Owl Real Estate PL. VI.
 *
 * Rehaut de laiton unique : LE CIRCUIT capital → construction → patrimoine →
 * capital, la boucle qui referme le modèle.
 * §1.6 — aucun poché pierre ni bois : planche de principe, tracé au trait seul.
 */

/* ------------------------------------------------------------------ *
 * GÉOMÉTRIE RÉGULATRICE — CERCLE DIRECTEUR ET PENTAGONE
 * ------------------------------------------------------------------ */
const CX = 640;
const CY = 520;
const RG = 250; // cercle directeur
const RM = 46; // rayon de médaillon
const RT = 56; // rayon de la tête

type Pt = { x: number; y: number };

const sommet = (i: number): Pt => {
  const a = (-90 + i * 72) * (Math.PI / 180);
  return { x: CX + Math.cos(a) * RG, y: CY + Math.sin(a) * RG };
};

/** P0 haut Drabair · P1 droite Weavme · P2 bas-droite ORE · P3 bas-gauche Line Builder · P4 gauche CAO */
const P = [0, 1, 2, 3, 4].map(sommet);
const TETE: Pt = { x: CX, y: CY };

const DRA = P[0];
const WVM = P[1];
const ORE = P[2];
const LBD = P[3];
const CAO = P[4];

/** Segment rogné aux bords des deux organes, décalé perpendiculairement. */
const seg = (a: Pt, b: Pt, ra: number, rb: number, off = 0) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const l = Math.hypot(dx, dy) || 1;
  const ux = dx / l;
  const uy = dy / l;
  const nx = -uy * off;
  const ny = ux * off;
  return {
    x1: a.x + ux * ra + nx,
    y1: a.y + uy * ra + ny,
    x2: b.x - ux * rb + nx,
    y2: b.y - uy * rb + ny,
    ang: (Math.atan2(dy, dx) * 180) / Math.PI,
    mx: (a.x + b.x) / 2 + nx,
    my: (a.y + b.y) / 2 + ny,
  };
};

/** Tuyau courbe contournant la tête : bombement radial vers l'extérieur. */
const arc = (a: Pt, b: Pt, ra: number, rb: number, bombe: number, off = 0) => {
  const s = seg(a, b, ra, rb, off);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = mx - CX;
  const dy = my - CY;
  const l = Math.hypot(dx, dy) || 1;
  const kx = mx + (dx / l) * bombe;
  const ky = my + (dy / l) * bombe;
  return {
    d: `M${s.x1.toFixed(1)} ${s.y1.toFixed(1)} Q${kx.toFixed(1)} ${ky.toFixed(1)} ${s.x2.toFixed(1)} ${s.y2.toFixed(1)}`,
    ang: (Math.atan2(s.y2 - ky, s.x2 - kx) * 180) / Math.PI,
    fin: { x: s.x2, y: s.y2 },
    mid: { x: (mx + kx) / 2 + (s.x1 + s.x2 - a.x - b.x) / 2, y: (my + ky) / 2 + (s.y1 + s.y2 - a.y - b.y) / 2 },
  };
};

/** Pointe de flux, orientée. */
const Fleche = ({ x, y, ang, c = ENCRE }: { x: number; y: number; ang: number; c?: string }) => (
  <path d="M0 0 l-11 -4.4 v8.8 z" fill={c} transform={`translate(${x} ${y}) rotate(${ang})`} />
);

/** Nœud de passage, comme un piquage de schéma hydraulique. */
const Noeud = ({ x, y, c = ENCRE }: { x: number; y: number; c?: string }) => (
  <circle cx={x} cy={y} r={3.4} fill="hsl(var(--gravure-fond))" stroke={c} strokeWidth={FIN} />
);

/* ------------------------------------------------------------------ *
 * MÉDAILLONS — UN EMBLÈME DE MÉTIER PAR SOCIÉTÉ
 * ------------------------------------------------------------------ */
const emblemes = [
  // engrenages — édition logicielle (Drabair Labs)
  <g key="dra" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <circle cx={-9} cy={0} r={12} />
    <circle cx={13} cy={6} r={8} />
    <circle cx={-9} cy={0} r={4} />
    {Array.from({ length: 10 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 10;
      return (
        <line
          key={i}
          x1={-9 + Math.cos(a) * 12}
          y1={Math.sin(a) * 12}
          x2={-9 + Math.cos(a) * 15}
          y2={Math.sin(a) * 15}
        />
      );
    })}
  </g>,
  // portée notée — réservation et affectation (Weavme)
  <g key="wvm" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    {[-8, -3, 2, 7].map((d) => (
      <line key={d} x1={-24} y1={d} x2={24} y2={d} />
    ))}
    <ellipse cx={5} cy={2} rx={5} ry={3.6} fill={ENCRE} />
    <line x1={10} y1={2} x2={10} y2={-15} />
  </g>,
  // façade à trame — immobilier de rapport (Owl Real Estate)
  <g key="ore" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <rect x={-23} y={-12} width={46} height={26} />
    {[-15, -3, 9].map((x) => (
      <rect key={x} x={x} y={-6} width={9} height={11} />
    ))}
    <path d="M-27 -12 L0 -22 L27 -12" />
  </g>,
  // module de ligne — équipement (Line Builder)
  <g key="lbd" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <rect x={-25} y={-9} width={19} height={19} />
    <rect x={-3} y={-9} width={19} height={19} />
    <rect x={19} y={-9} width={10} height={19} strokeDasharray="4 3" />
    <line x1={-29} y1={13} x2={29} y2={13} strokeWidth={MOYEN} />
  </g>,
  // charpente — ingénierie industrielle (CAO Industries)
  <g key="cao" stroke={ENCRE} fill="none" strokeWidth={FIN}>
    <path d="M-24 12 L0 -14 L24 12" />
    <path d="M-19 12 v-8 M19 12 v-8 M0 -14 v26 M-13 4 L0 -4 L13 4" />
  </g>,
];

const Medaillon = ({ p, rep, emblem }: { p: Pt; rep: string; emblem: React.ReactNode }) => {
  const dx = p.x - CX;
  const dy = p.y - CY;
  const l = Math.hypot(dx, dy) || 1;
  return (
  <g transform={`translate(${p.x} ${p.y})`}>
    <circle cx={0} cy={0} r={RM} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FORT} />
    <circle cx={0} cy={0} r={39} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.8" />
    {Array.from({ length: 36 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 36;
      return <circle key={i} cx={Math.cos(a) * 43} cy={Math.sin(a) * 43} r={1.1} fill={ENCRE} opacity="0.7" />;
    })}
    <g transform="translate(0 -1)">{emblem}</g>
    <Repere x={0} y={dy < -140 ? -62 : 70}>
      {rep}
    </Repere>
  </g>
  );
};

export const PLANCHE_VII = {
  numeral: 'VII',
  title: 'Le schéma de principe du groupe',
  desc:
    "Gravure au trait, planche à trois figures, donnant le schéma de principe du groupe, composé et lu comme un schéma hydraulique. FIGURE 1, une tête au centre et cinq médaillons de même diamètre posés sur un cercle directeur, bordés d'un double filet et d'un rang de perles, chacun portant l'emblème du métier qu'il représente - un train d'engrenages pour l'édition logicielle, une portée notée pour la réservation, une façade à trame pour l'immobilier de rapport, un module de ligne pour l'équipement, une charpente pour l'ingénierie industrielle. Entre ces organes, tous les flux du modèle sont tracés, chacun à son type de trait : le capital descend de la tête au trait fort, les retours d'exécution vont de l'ingénierie à l'équipement en pointillé, les socles logiciels partent de l'édition en double trait fin, les licences et prestations remontent au trait fin, les dividendes remontent au trait mixte, et les signalements entrent de l'extérieur du cercle au trait d'oxyde. Un seul rehaut de laiton : le circuit fermé qui descend en capital, passe par la construction, se dépose en patrimoine et remonte à son point de départ. Aucune phrase n'est portée au dessin : les libellés vivent en échelles de marge, reliés par attache à un seul coude. FIGURE 2, les familles de flux, chaque trait en échantillon devant la famille qu'il désigne. FIGURE 3, le tracé régulateur : cercle directeur, pentagone inscrit et diagonales, au trait ultrafin. Aucune donnée chiffrée, aucune référence normative écrite. Cartouche de dossier et renvois de planches.",
  viewBox: '0 0 1240 1330',
};

export const PlancheVIIDrawing = ({ p }: { p: string }) => {
  /* ---------- les tuyaux, calculés une fois ---------- */
  const capital = [DRA, WVM, ORE, LBD, CAO].map((v) => seg(TETE, v, RT + 6, RM + 8, 9));
  const dividende = [DRA, WVM, ORE, LBD, CAO].map((v) => seg(v, TETE, RM + 8, RT + 6, 9));

  const orTete = seg(TETE, CAO, RT + 6, RM + 8, -9); // capital placé, leg d'or
  const orChantier = seg(CAO, LBD, RM + 8, RM + 8, 11); // construction
  const orOuvrage = seg(LBD, ORE, RM + 8, RM + 8, 11); // ouvrage livré, patrimoine
  const orRetour = seg(ORE, TETE, RM + 8, RT + 6, -9); // le patrimoine referme le circuit

  const savoir = seg(CAO, LBD, RM + 8, RM + 8, -11); // retours d'exécution, pointillé
  const socleWvm = seg(DRA, WVM, RM + 8, RM + 8, 10); // socle logiciel, double trait
  const socleLbd = arc(DRA, LBD, RM + 8, RM + 8, 104, 10); // socle logiciel, contourne la tête
  const licWvm = seg(WVM, DRA, RM + 8, RM + 8, 10); // licences, remontant
  const licLbd = arc(LBD, DRA, RM + 8, RM + 8, 74, 10); // prestations, remontant

  const SCOUT: Pt = { x: 348, y: 700 };
  const scout = seg(SCOUT, TETE, 16, RT + 6, 0);

  return (
    <>
      <GravureDefs p={p} />

      <TitrePlanche
        x={60}
        y={72}
        titre="Le schéma de principe du groupe"
        sous="Une tête, cinq organes, un circuit fermé - capital placé, ouvrage construit, patrimoine, capital"
      />

      {/* ================= FIG. 1 — LE SCHÉMA DE PRINCIPE ================= */}
      <RepereFigure x={60} y={168} n="1" title="Le groupe et ses flux" w={330} />

      {/* tracés régulateurs autorisés : cercle directeur et pentagone */}
      <ArcRegulateur cx={CX} cy={CY} r={RG} />
      <TraceRegulateur d={P.map((v, i) => `${i ? 'L' : 'M'}${v.x.toFixed(1)} ${v.y.toFixed(1)}`).join(' ') + ' Z'} />

      {/* ---- capital : descendant de la tête, trait fort ---- */}
      {capital.map((s, i) => (
        <g key={`cap-${i}`}>
          <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={ENCRE} strokeWidth={FORT} />
          <Fleche x={s.x2} y={s.y2} ang={s.ang} />
        </g>
      ))}

      {/* ---- dividendes : remontants, trait mixte ---- */}
      {dividende.map((s, i) => (
        <g key={`div-${i}`}>
          <line
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            stroke={ENCRE}
            strokeWidth={FIN}
            strokeDasharray={MIXTE_DASH}
          />
          <Fleche x={s.x2} y={s.y2} ang={s.ang} />
        </g>
      ))}

      {/* ---- socles logiciels : double trait fin ---- */}
      {[socleWvm].map((s, i) => (
        <g key={`soc-${i}`}>
          <line x1={s.x1} y1={s.y1 - 2} x2={s.x2} y2={s.y2 - 2} stroke={ENCRE} strokeWidth={FIN} />
          <line x1={s.x1} y1={s.y1 + 2} x2={s.x2} y2={s.y2 + 2} stroke={ENCRE} strokeWidth={FIN} />
          <Fleche x={s.x2} y={s.y2} ang={s.ang} />
        </g>
      ))}
      <g>
        <path d={socleLbd.d} fill="none" stroke={ENCRE} strokeWidth={FIN} transform="translate(0 -2)" />
        <path d={socleLbd.d} fill="none" stroke={ENCRE} strokeWidth={FIN} transform="translate(0 2)" />
        <Fleche x={socleLbd.fin.x} y={socleLbd.fin.y} ang={socleLbd.ang} />
      </g>

      {/* ---- licences et prestations : remontants, trait fin ---- */}
      <g>
        <line x1={licWvm.x1} y1={licWvm.y1} x2={licWvm.x2} y2={licWvm.y2} stroke={ENCRE} strokeWidth={FIN} />
        <Fleche x={licWvm.x2} y={licWvm.y2} ang={licWvm.ang} />
        <path d={licLbd.d} fill="none" stroke={ENCRE} strokeWidth={FIN} />
        <Fleche x={licLbd.fin.x} y={licLbd.fin.y} ang={licLbd.ang} />
      </g>

      {/* ---- savoir-faire terrain : pointillé, CAO vers Line Builder ---- */}
      <g>
        <line
          x1={savoir.x1}
          y1={savoir.y1}
          x2={savoir.x2}
          y2={savoir.y2}
          stroke={ENCRE}
          strokeWidth={FIN}
          strokeDasharray="2 5"
        />
        <Fleche x={savoir.x2} y={savoir.y2} ang={savoir.ang} />
      </g>

      {/* ---- signalements Scouts : entrant externe, oxyde ---- */}
      <g>
        <rect
          x={SCOUT.x - 15}
          y={SCOUT.y - 11}
          width={30}
          height={22}
          fill="hsl(var(--gravure-fond))"
          stroke={OXYDE}
          strokeWidth={FIN}
        />
        <path d="M-8 -4 h16 v8 h-16 z M-8 -4 l8 6 l8 -6" fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} transform={`translate(${SCOUT.x} ${SCOUT.y})`} />
        <line x1={scout.x1} y1={scout.y1} x2={scout.x2} y2={scout.y2} stroke={OXYDE} strokeWidth={FIN} />
        <Fleche x={scout.x2} y={scout.y2} ang={scout.ang} c={OXYDE} />
      </g>

      {/* ---- LE CIRCUIT : rehaut de laiton unique ---- */}
      <g>
        {[orTete, orChantier, orOuvrage, orRetour].map((s, i) => (
          <g key={`or-${i}`}>
            <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={LAITON} strokeWidth={FORT} />
            <Fleche x={s.x2} y={s.y2} ang={s.ang} c={LAITON} />
          </g>
        ))}
        <Noeud x={orChantier.x1} y={orChantier.y1} c={LAITON} />
        <Noeud x={orOuvrage.x1} y={orOuvrage.y1} c={LAITON} />
      </g>

      {/* ---- la tête et les cinq médaillons ---- */}
      <circle cx={CX} cy={CY} r={RT} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FORT} />
      <circle cx={CX} cy={CY} r={46} fill="none" stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.7" />
      {Array.from({ length: 40 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 40;
        return <circle key={i} cx={CX + Math.cos(a) * 51} cy={CY + Math.sin(a) * 51} r={1.1} fill={ENCRE} opacity="0.65" />;
      })}
      <g stroke={ENCRE} fill="none" strokeWidth={FIN} transform={`translate(${CX} ${CY})`}>
        {/* emblème de tête : la chouette au trait, réduite à sa géométrie */}
        <path d="M-17 -6 a17 17 0 0 1 34 0 v10 a17 20 0 0 1 -34 0 z" />
        <circle cx={-7} cy={-4} r={5} />
        <circle cx={7} cy={-4} r={5} />
        <path d="M0 1 l-4 5 h8 z" fill={ENCRE} stroke="none" />
        <path d="M-17 -6 l-5 -12 l10 4 M17 -6 l5 -12 l-10 4" />
      </g>
      <Repere x={CX} y={CY + 78}>
        T-00
      </Repere>

      <Medaillon p={DRA} rep="S-03" emblem={emblemes[0]} />
      <Medaillon p={WVM} rep="S-04" emblem={emblemes[1]} />
      <Medaillon p={ORE} rep="S-05" emblem={emblemes[2]} />
      <Medaillon p={LBD} rep="S-02" emblem={emblemes[3]} />
      <Medaillon p={CAO} rep="S-01" emblem={emblemes[4]} />
      <Repere x={SCOUT.x} y={SCOUT.y + 30}>
        E-06
      </Repere>

      <SensLecture x={430} y={888} w={420} label="Le circuit se referme : capital, ouvrage, patrimoine, capital" />

      {/* ================= ÉCHELLE DE MARGE — LES SOCIÉTÉS ================= */}
      <BlocTexte>
        <text className="gravure-lettrage" x={310} y={214} fontSize="12" textAnchor="end" fill={ENCRE}>
          Les organes
        </text>
        <line x1={54} y1={222} x2={310} y2={222} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
      </BlocTexte>
      <EchelleLibelles
        x={310}
        yStart={252}
        yStep={34}
        side="left"
        items={[
          { label: 'T-00 - Owl International, la tête', cible: [CX - 46, CY - 24] },
          { label: 'S-01 - CAO Industries, ingénierie (PL. I)', cible: [CAO.x - 38, CAO.y - 22] },
          { label: 'S-02 - Line Builder, équipement (PL. III)', cible: [LBD.x - 40, LBD.y + 16] },
          { label: 'S-03 - Drabair Labs, logiciel (PL. IV)' },
          { label: 'S-04 - Weavme, réservation (PL. V)' },
          { label: 'S-05 - Owl Real Estate, patrimoine (PL. VI)' },
          { label: 'E-06 - Scouts, signalements entrants', cible: [SCOUT.x, SCOUT.y + 12] },
        ]}
      />

      {/* ================= ÉCHELLE DE MARGE — LES FLUX ================= */}
      <BlocTexte>
        <text className="gravure-lettrage" x={950} y={214} fontSize="12" fill={ENCRE}>
          Les flux
        </text>
        <line x1={950} y1={222} x2={1196} y2={222} stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.6" />
      </BlocTexte>
      <EchelleLibelles
        x={950}
        yStart={252}
        yStep={34}
        side="right"
        items={[
          {
            label: 'F-00 - Le circuit qui referme le modèle',
            or: true,
          },
          { label: 'F-01 - Capital placé, descendant', cible: [capital[1].mx + 30, capital[1].my - 12] },
          { label: "F-02 - Retours d'exécution, terrain" },
          { label: 'F-03 - Socles logiciels, Drabair', cible: [socleWvm.mx, socleWvm.my] },
          { label: 'F-04 - Licences et prestations', cible: [licWvm.mx, licWvm.my] },
          { label: 'F-05 - Dividendes, remontants', cible: [dividende[2].mx, dividende[2].my] },
          { label: 'F-06 - Signalements Scouts, entrants' },
        ]}
      />

      {/* ================= FIG. 2 — LES FAMILLES DE FLUX ================= */}
      <RepereFigure x={60} y={962} n="2" title="Les familles de flux" w={330} />
      <BlocTexte>
        {[
          { y: 1010, name: 'Capital placé, descendant', draw: 'fort' },
          { y: 1046, name: "Retours d'exécution, savoir-faire terrain", draw: 'pointille' },
          { y: 1082, name: 'Socles logiciels', draw: 'double' },
          { y: 1118, name: 'Licences et prestations, remontantes', draw: 'fin' },
          { y: 1154, name: 'Dividendes, remontants', draw: 'mixte' },
          { y: 1190, name: 'Signalements Scouts, entrants de l\u2019extérieur', draw: 'oxyde' },
          { y: 1226, name: 'Circuit du modèle, la boucle qui le referme', draw: 'or' },
        ].map((f) => (
          <g key={f.y}>
            {f.draw === 'fort' && <line x1={64} y1={f.y} x2={132} y2={f.y} stroke={ENCRE} strokeWidth={FORT} />}
            {f.draw === 'pointille' && (
              <line x1={64} y1={f.y} x2={132} y2={f.y} stroke={ENCRE} strokeWidth={FIN} strokeDasharray="2 5" />
            )}
            {f.draw === 'double' && (
              <>
                <line x1={64} y1={f.y - 2} x2={132} y2={f.y - 2} stroke={ENCRE} strokeWidth={FIN} />
                <line x1={64} y1={f.y + 2} x2={132} y2={f.y + 2} stroke={ENCRE} strokeWidth={FIN} />
              </>
            )}
            {f.draw === 'fin' && <line x1={64} y1={f.y} x2={132} y2={f.y} stroke={ENCRE} strokeWidth={FIN} />}
            {f.draw === 'mixte' && (
              <line x1={64} y1={f.y} x2={132} y2={f.y} stroke={ENCRE} strokeWidth={FIN} strokeDasharray={MIXTE_DASH} />
            )}
            {f.draw === 'oxyde' && <line x1={64} y1={f.y} x2={132} y2={f.y} stroke={OXYDE} strokeWidth={FIN} />}
            {f.draw === 'or' && <line x1={64} y1={f.y} x2={132} y2={f.y} stroke={LAITON} strokeWidth={FORT} />}
            <Fleche x={132} y={f.y} ang={0} c={f.draw === 'or' ? LAITON : f.draw === 'oxyde' ? OXYDE : ENCRE} />
            <text
              className="gravure-lettrage"
              x={148}
              y={f.y + 4}
              fontSize="12"
              fill={f.draw === 'or' ? LAITON : OXYDE}
            >
              {f.name}
            </text>
          </g>
        ))}
      </BlocTexte>

      {/* ================= FIG. 3 — TRACÉ RÉGULATEUR ================= */}
      {/* Remontée en L2 : le tracé descendait dans le cartouche. */}
      <RepereFigure x={900} y={856} n="3" title="Tracé régulateur" w={240} />
      <g transform="translate(1032 962)">
        <ArcRegulateur cx={0} cy={0} r={92} />
        <TraceRegulateur
          d={
            [0, 1, 2, 3, 4]
              .map((i) => {
                const a = (-90 + i * 72) * (Math.PI / 180);
                return `${i ? 'L' : 'M'}${(Math.cos(a) * 92).toFixed(1)} ${(Math.sin(a) * 92).toFixed(1)}`;
              })
              .join(' ') + ' Z'
          }
        />
        <TraceRegulateur
          d={[0, 1, 2, 3, 4]
            .map((i) => {
              const a = (-90 + i * 72) * (Math.PI / 180);
              return `M0 0 L${(Math.cos(a) * 92).toFixed(1)} ${(Math.sin(a) * 92).toFixed(1)}`;
            })
            .join(' ')}
        />
        <TraceRegulateur d="M0 -92 L87 28 L-54 74 L54 74 L-87 28 Z" />
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (-90 + i * 72) * (Math.PI / 180);
          return <circle key={i} cx={Math.cos(a) * 92} cy={Math.sin(a) * 92} r={2.6} fill={OXYDE} />;
        })}
      </g>

      <BlocTexte>
        <text className="gravure-lettrage" x={64} y={1266} fontSize="12" fill={OXYDE}>
          Planche de principe : aucune donnée chiffrée, aucun engagement porté au dessin.
        </text>
      </BlocTexte>

      <BlocTexte>
        <Cartouche
          x={800}
          y={1186}
          w={380}
          numeral="VII"
          title="Le schéma de principe du groupe"
          echelle="Éch. symb."
          dossier={VOL_III}
          index="PL. 7/9"
          renvois={['Usine : PL. I', 'Immeuble : PL. VI', 'Train : PL. IV']}
        />
      </BlocTexte>
    </>
  );
};
