import React from 'react';
import { ENCRE, OXYDE, LAITON, FORT, MOYEN, FIN, ULTRAFIN, DEPASSEMENT } from './defs';

/**
 * CABINET DE GRAVURES §1 — LA BIBLIOTHÈQUE DE PRIMITIVES.
 * Quinze objets de dessin, et rien d'autre. Toute planche du cabinet se
 * compose EXCLUSIVEMENT de ces primitives : c'est ce qui fait la série.
 * Chacune est validable isolément à 200 % (voir /studio/gravure-primitives).
 *
 * §2 — la main du graveur est intégrée ici, pas ajoutée après coup :
 * dépassements d'angle sur les traits forts, bouts nets (butt/miter),
 * hachures vivantes seedées hors pochés.
 */

/* ------------------------------------------------------------------ *
 * §2 — LA MAIN : dépassements d'angle et aléa seedé
 * ------------------------------------------------------------------ */

/** Générateur pseudo-aléatoire déterministe : une planche = un grain constant. */
export const seeded = (seed: number) => {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => ((s = (s * 16807) % 2147483647) / 2147483647);
};

const D = `var(--depassement)`;

/**
 * §2.1 — Trait fort à dépassement : le trait dépasse le croisement.
 * Le dépassement est appliqué géométriquement (1,5-2 px) le long de l'axe.
 */
export const Trait = ({
  x1,
  y1,
  x2,
  y2,
  w = FORT,
  over = 2,
  stroke = ENCRE,
  opacity,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  w?: string;
  over?: number;
  stroke?: string;
  opacity?: number;
}) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l = Math.hypot(dx, dy) || 1;
  const ux = (dx / l) * over;
  const uy = (dy / l) * over;
  return (
    <line
      x1={x1 - ux}
      y1={y1 - uy}
      x2={x2 + ux}
      y2={y2 + uy}
      stroke={stroke}
      strokeWidth={w}
      opacity={opacity}
    />
  );
};

/** §2.1 — Rectangle dessiné à la règle : quatre traits qui se dépassent. */
export const Cadre = ({
  x,
  y,
  w,
  h,
  weight = FORT,
  over = 2,
  fill,
  stroke = ENCRE,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  weight?: string;
  over?: number;
  fill?: string;
  stroke?: string;
}) => (
  <g>
    {fill && <rect x={x} y={y} width={w} height={h} fill={fill} />}
    <Trait x1={x} y1={y} x2={x + w} y2={y} w={weight} over={over} stroke={stroke} />
    <Trait x1={x + w} y1={y} x2={x + w} y2={y + h} w={weight} over={over} stroke={stroke} />
    <Trait x1={x + w} y1={y + h} x2={x} y2={y + h} w={weight} over={over} stroke={stroke} />
    <Trait x1={x} y1={y + h} x2={x} y2={y} w={weight} over={over} stroke={stroke} />
  </g>
);

/**
 * §2.3 — HACHURES VIVANTES : espacement nominal ±4 %, seedé par planche.
 * Interdites sur les pochés (mécaniques par convention).
 */
export const HachuresVivantes = ({
  x,
  y,
  w,
  h,
  pas = 9,
  angle = 45,
  seed = 7,
  opacity = 0.7,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  pas?: number;
  angle?: number;
  seed?: number;
  opacity?: number;
}) => {
  const rnd = seeded(seed);
  const lines: React.ReactNode[] = [];
  const diag = w + h;
  let t = -h;
  let i = 0;
  while (t < diag) {
    const jitter = pas * (rnd() - 0.5) * 0.08; // ±4 %
    lines.push(
      <line key={i++} x1={t} y1={0} x2={t + h} y2={h} stroke={ENCRE} strokeWidth={FIN} opacity={opacity} />,
    );
    t += pas + jitter;
  }
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle - 45} 0 0)`} clipPath="none">
      <g>{lines}</g>
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.1 — BULLE D'AXE
 * ------------------------------------------------------------------ */
export const BulleAxe = ({
  x,
  y,
  label,
  to,
}: {
  x: number;
  y: number;
  label: string;
  /** ordonnée de fin du trait d'axe mixte */
  to?: number;
}) => (
  <g>
    {to !== undefined && (
      <line
        x1={x}
        y1={y + 15}
        x2={x}
        y2={to}
        stroke={ENCRE}
        strokeWidth={FIN}
        strokeDasharray="12 4 2 4"
        opacity="0.55"
      />
    )}
    <circle cx={x} cy={y} r="14" fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
    <text className="gravure-lettrage" x={x} y={y + 5} fontSize="14" textAnchor="middle" fill={ENCRE}>
      {label}
    </text>
  </g>
);

/* ------------------------------------------------------------------ *
 * §1.2 — REPÈRE DE NIVEAU
 * ------------------------------------------------------------------ */
export const RepereNiveau = ({
  x,
  y,
  label,
  rappel,
  or = false,
}: {
  x: number;
  y: number;
  label: string;
  /** abscisse d'origine de la ligne de rappel */
  rappel?: number;
  or?: boolean;
}) => {
  const c = or ? LAITON : ENCRE;
  return (
    <g>
      {rappel !== undefined && (
        <line x1={rappel} y1={y} x2={x} y2={y} stroke={c} strokeWidth={FIN} strokeDasharray="6 4" opacity="0.7" />
      )}
      <path d={`M${x - 8} ${y - 12} L${x + 8} ${y - 12} L${x} ${y} z`} fill="none" stroke={c} strokeWidth={MOYEN} />
      <line x1={x - 22} y1={y} x2={x + 22} y2={y} stroke={c} strokeWidth={MOYEN} />
      <text className="gravure-lettrage" x={x + 26} y={y - 4} fontSize="12" fill={or ? LAITON : OXYDE}>
        {label}
      </text>
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.3 — CHAÎNE DE COTES (convention bâtiment : tirets 45°, pas de flèches)
 * ------------------------------------------------------------------ */
export const ChaineCotes = ({
  y,
  points,
  labels,
  attache,
  vertical = false,
}: {
  /** ordonnée (ou abscisse si vertical) de la ligne de cote */
  y: number;
  points: number[];
  labels: string[];
  /** origine des attaches perpendiculaires */
  attache?: number;
  vertical?: boolean;
}) => {
  const a = attache ?? y;
  const seg = (p: number) =>
    vertical ? { x1: y - 6, y1: p, x2: y + 6, y2: p } : { x1: p, y1: y - 6, x2: p, y2: y + 6 };
  return (
    <g>
      {/* ligne de cote */}
      {vertical ? (
        <line x1={y} y1={points[0]} x2={y} y2={points[points.length - 1]} stroke={OXYDE} strokeWidth={FIN} />
      ) : (
        <line x1={points[0]} y1={y} x2={points[points.length - 1]} y2={y} stroke={OXYDE} strokeWidth={FIN} />
      )}
      {points.map((p, i) => (
        <g key={i}>
          {/* attache perpendiculaire */}
          {vertical ? (
            <line x1={a} y1={p} x2={y + 8} y2={p} stroke={OXYDE} strokeWidth={FIN} opacity="0.6" />
          ) : (
            <line x1={p} y1={a} x2={p} y2={y + 8} stroke={OXYDE} strokeWidth={FIN} opacity="0.6" />
          )}
          {/* tiret oblique 45° */}
          <line
            {...(vertical
              ? { x1: y - 5, y1: p + 5, x2: y + 5, y2: p - 5 }
              : { x1: p - 5, y1: y + 5, x2: p + 5, y2: y - 5 })}
            stroke={OXYDE}
            strokeWidth={MOYEN}
          />
          <line {...seg(p)} stroke="none" />
        </g>
      ))}
      {labels.map((lb, i) => {
        const m = (points[i] + points[i + 1]) / 2;
        return vertical ? (
          <text
            key={lb + i}
            className="gravure-lettrage"
            x={y + 12}
            y={m}
            fontSize="11"
            textAnchor="start"
          >
            {lb}
          </text>
        ) : (
          <text key={lb + i} className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={m} y={y - 8} fontSize="11" textAnchor="middle">
            {lb}
          </text>
        );
      })}
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.4 — LIGNE D'ATTACHE ANNOTÉE
 * ------------------------------------------------------------------ */
export const Attache = ({
  x,
  y,
  dx,
  dy,
  label,
  anchor = 'start',
}: {
  x: number;
  y: number;
  dx: number;
  dy: number;
  label: string;
  anchor?: 'start' | 'end' | 'middle';
}) => {
  const mx = x + dx * 0.45;
  const my = y + dy;
  const ex = x + dx;
  return (
    <g>
      <circle cx={x} cy={y} r="1.8" fill={OXYDE} />
      <path d={`M${x} ${y} L${mx} ${my} L${ex} ${my}`} fill="none" stroke={OXYDE} strokeWidth={FIN} />
      <text
        className="gravure-lettrage"
        x={anchor === 'end' ? ex - 4 : ex + 4}
        y={my - 5}
        fontSize="11"
        textAnchor={anchor}
      >
        {label}
      </text>
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.5 — LIGNE DE RUPTURE (zigzag normalisé)
 * ------------------------------------------------------------------ */
export const Rupture = ({
  x,
  y,
  length,
  vertical = false,
}: {
  x: number;
  y: number;
  length: number;
  vertical?: boolean;
}) => {
  const half = length / 2;
  const d = vertical
    ? `M${x} ${y} L${x} ${y + half - 10} L${x - 7} ${y + half - 4} L${x + 7} ${y + half + 4} L${x} ${y + half + 10} L${x} ${y + length}`
    : `M${x} ${y} L${x + half - 10} ${y} L${x + half - 4} ${y - 7} L${x + half + 4} ${y + 7} L${x + half + 10} ${y} L${x + length} ${y}`;
  return <path d={d} fill="none" stroke={ENCRE} strokeWidth={MOYEN} />;
};

/* ------------------------------------------------------------------ *
 * §1.6 — LES QUATRE POCHÉS DE COUPE (mécaniques, jamais interchangés)
 * ------------------------------------------------------------------ */
export type Matiere = 'beton' | 'acier' | 'pierre' | 'bois';
export const poche = (p: string, m: Matiere) => `url(#${p}-poche-${m})`;

/* ------------------------------------------------------------------ *
 * §1.7 — ASSEMBLAGE : gousset, boulons, soudure
 * ------------------------------------------------------------------ */
export const Boulon = ({ x, y, r = 3.2 }: { x: number; y: number; r?: number }) => (
  <g stroke={ENCRE} strokeWidth={FIN} fill="none">
    <circle cx={x} cy={y} r={r} />
    <line x1={x - r} y1={y} x2={x + r} y2={y} />
    <line x1={x} y1={y - r} x2={x} y2={y + r} />
  </g>
);

export const FileDeBoulons = ({
  x,
  y,
  dx,
  dy,
  n,
}: {
  x: number;
  y: number;
  dx: number;
  dy: number;
  n: number;
}) => (
  <g>
    {Array.from({ length: n }).map((_, i) => (
      <Boulon key={i} x={x + dx * i} y={y + dy * i} />
    ))}
  </g>
);

export const Gousset = ({ d }: { d: string }) => (
  <path d={d} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={MOYEN} />
);

/** Symbole de soudure : triangle noirci sur ligne de référence. */
export const Soudure = ({ x, y, dir = 1 }: { x: number; y: number; dir?: number }) => (
  <g>
    <line x1={x} y1={y} x2={x + 34} y2={y} stroke={OXYDE} strokeWidth={FIN} />
    <path d={`M${x + 10} ${y} l8 0 l-4 ${-7 * dir} z`} fill={OXYDE} />
  </g>
);

/* ------------------------------------------------------------------ *
 * §1.8 — CERCLE DE DÉTAIL
 * ------------------------------------------------------------------ */
export const CercleDetail = ({
  cx,
  cy,
  r,
  label,
}: {
  cx: number;
  cy: number;
  r: number;
  label: string;
}) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="none" stroke={OXYDE} strokeWidth={FIN} strokeDasharray="7 5" />
    <text className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={cx + r * 0.72} y={cy - r * 0.72} fontSize="11">
      {label}
    </text>
  </g>
);

/* ------------------------------------------------------------------ *
 * §1.9 — ÉCHELLE GRAPHIQUE (barre alternée, graduations symboliques)
 * ------------------------------------------------------------------ */
export const EchelleGraphique = ({
  x,
  y,
  w = 120,
  h = 7,
  n = 6,
  label = 'Éch. symb.',
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  n?: number;
  label?: string;
}) => {
  const step = w / n;
  return (
    <g>
      {Array.from({ length: n }).map((_, i) => (
        <rect
          key={i}
          x={x + i * step}
          y={y}
          width={step}
          height={h}
          fill={i % 2 ? ENCRE : 'none'}
          stroke={ENCRE}
          strokeWidth={FIN}
        />
      ))}
      <text className="gravure-lettrage" x={x} y={y + h + 11} fontSize="10">
        0
      </text>
      <text className="gravure-lettrage" x={x + w} y={y + h + 11} fontSize="10" textAnchor="end">
        {label}
      </text>
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.10 — STRATES DE SOL
 * ------------------------------------------------------------------ */
export const StratesSol = ({
  p,
  x,
  y,
  w,
  h,
  seed = 11,
}: {
  p: string;
  x: number;
  y: number;
  w: number;
  h: number;
  seed?: number;
}) => {
  const rnd = seeded(seed);
  const interface1 = y + h * 0.26;
  const interface2 = y + h * 0.58;
  const wobble = (base: number) => {
    let d = `M${x} ${base}`;
    const steps = 16;
    for (let i = 1; i <= steps; i++) {
      d += ` L${x + (w * i) / steps} ${base + (rnd() - 0.5) * 7}`;
    }
    return d;
  };
  return (
    <g>
      {/* remblai : points */}
      <rect x={x} y={y} width={w} height={interface1 - y} fill={`url(#${p}-sol-remblai)`} opacity="0.9" />
      {/* terrain : 45° espacé */}
      <rect x={x} y={interface1} width={w} height={interface2 - interface1} fill={`url(#${p}-sol-terrain)`} />
      {/* bon sol : 45° serré */}
      <rect x={x} y={interface2} width={w} height={y + h - interface2} fill={`url(#${p}-sol-bon)`} />
      <path d={wobble(interface1)} fill="none" stroke={ENCRE} strokeWidth={FIN} opacity="0.75" />
      <path d={wobble(interface2)} fill="none" stroke={ENCRE} strokeWidth={FIN} opacity="0.75" />
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.11 — FLÈCHE DE PENTE
 * ------------------------------------------------------------------ */
export const FlechePente = ({
  x,
  y,
  dx,
  dy,
  label,
}: {
  x: number;
  y: number;
  dx: number;
  dy: number;
  label: string;
}) => {
  const ex = x + dx;
  const ey = y + dy;
  const a = Math.atan2(dy, dx);
  const p1 = [ex - 9 * Math.cos(a - 0.35), ey - 9 * Math.sin(a - 0.35)];
  const p2 = [ex - 9 * Math.cos(a + 0.35), ey - 9 * Math.sin(a + 0.35)];
  return (
    <g>
      <line x1={x} y1={y} x2={ex} y2={ey} stroke={OXYDE} strokeWidth={FIN} />
      <path d={`M${ex} ${ey} L${p1[0]} ${p1[1]} M${ex} ${ey} L${p2[0]} ${p2[1]}`} stroke={OXYDE} strokeWidth={FIN} fill="none" />
      <text className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={(x + ex) / 2} y={(y + ey) / 2 - 7} fontSize="11" textAnchor="middle">
        {label}
      </text>
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.12 — ROSE DES VENTS ET GRATICULE (planche VIII)
 * ------------------------------------------------------------------ */
export const RoseVents = ({ cx, cy, r = 30 }: { cx: number; cy: number; r?: number }) => (
  <g stroke={ENCRE} fill="none">
    <circle cx={cx} cy={cy} r={r} strokeWidth={FIN} />
    <circle cx={cx} cy={cy} r={r * 0.62} strokeWidth={ULTRAFIN} opacity="0.6" />
    <path d={`M${cx} ${cy - r} L${cx + r * 0.2} ${cy} L${cx} ${cy + r} L${cx - r * 0.2} ${cy} z`} strokeWidth={FIN} />
    <path d={`M${cx - r} ${cy} L${cx} ${cy - r * 0.2} L${cx + r} ${cy} L${cx} ${cy + r * 0.2} z`} strokeWidth={ULTRAFIN} />
    <text className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={cx} y={cy - r - 6} fontSize="11" textAnchor="middle">
      N
    </text>
  </g>
);

export const Graticule = ({
  x,
  y,
  w,
  h,
  pas = 60,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  pas?: number;
}) => (
  <g stroke={ENCRE} strokeWidth={ULTRAFIN} opacity="0.45">
    {Array.from({ length: Math.floor(w / pas) + 1 }).map((_, i) => (
      <line key={`v${i}`} x1={x + i * pas} y1={y} x2={x + i * pas} y2={y + h} />
    ))}
    {Array.from({ length: Math.floor(h / pas) + 1 }).map((_, i) => (
      <line key={`h${i}`} x1={x} y1={y + i * pas} x2={x + w} y2={y + i * pas} />
    ))}
  </g>
);

/* ------------------------------------------------------------------ *
 * §1.13 — REPÈRE DE FIGURE « FIG. n »
 * ------------------------------------------------------------------ */
export const RepereFigure = ({
  x,
  y,
  n,
  title,
  w = 190,
}: {
  x: number;
  y: number;
  n: string;
  title: string;
  w?: number;
}) => (
  <g>
    <text
      className="gravure-lettrage gravure-reserve"
      data-lis="repere"
      data-lis-reserve="true"
      x={x}
      y={y}
      fontSize="14"
      fill={ENCRE}
    >
      FIG. {n}
    </text>
    <text
      className="gravure-lettrage gravure-reserve"
      data-lis="repere"
      data-lis-reserve="true"
      x={x + 58}
      y={y}
      fontSize="12"
    >
      {title}
    </text>
    <line x1={x} y1={y + 6} x2={x + w} y2={y + 6} stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
  </g>

);

/* ------------------------------------------------------------------ *
 * §1.14 — PASTILLE DE NOMENCLATURE ①
 * ------------------------------------------------------------------ */
export const Pastille = ({ x, y, n, r = 9 }: { x: number; y: number; n: number; r?: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
    <text className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={x} y={y + 4} fontSize="11" textAnchor="middle" fill={ENCRE}>
      {n}
    </text>
  </g>
);

/** Nomenclature de pied de planche : la même pastille qu'au dessin. */
export const Nomenclature = ({
  x,
  y,
  items,
  colGap = 0,
  perCol,
  lineHeight = 22,
}: {
  x: number;
  y: number;
  items: string[];
  colGap?: number;
  perCol?: number;
  lineHeight?: number;
}) => {
  const per = perCol ?? items.length;
  return (
    <g data-lis="bloc">
      {items.map((it, i) => {
        const col = Math.floor(i / per);
        const row = i % per;
        const px = x + col * colGap;
        const py = y + row * lineHeight;
        return (
          <g key={it}>
            <Pastille x={px} y={py} n={i + 1} r={8} />
            <text className="gravure-lettrage" x={px + 16} y={py + 4} fontSize="12">
              {it}
            </text>
          </g>
        );
      })}
    </g>
  );
};

/* ------------------------------------------------------------------ *
 * §1.15 — TRACÉ RÉGULATEUR (les lignes de compas, laissées visibles)
 * ------------------------------------------------------------------ */
export const TraceRegulateur = ({ d }: { d: string }) => (
  <path d={d} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} opacity="0.4" />
);

export const ArcRegulateur = ({ cx, cy, r }: { cx: number; cy: number; r: number }) => (
  <circle cx={cx} cy={cy} r={r} fill="none" stroke={OXYDE} strokeWidth={ULTRAFIN} opacity="0.4" />
);

export { D as DEPASSEMENT_VAR, DEPASSEMENT };

/* ================================================================== *
 * §C — LA QUATRIÈME FAMILLE DE TRAIT ET L'OUTILLAGE D'EXÉCUTION
 * (Planche I v3. Ajouts disponibles pour la série II-XII.)
 *
 * FAMILLES DE TRAIT, gelées :
 *   continu    fort 1 / moyen 0,75 / fin 0,5      → vu
 *   interrompu fin, tirets courts                  → caché
 *   mixte      ultrafin, tiret-point               → axes, régulateurs
 *   rupture    zigzag                              → limite d'étendue
 * ================================================================== */

export const CACHE_DASH = '6 4';
export const MIXTE_DASH = '14 4 3 4';

/** Trait CACHÉ : tout élément masqué mais structurant. Jamais fort. */
export const TraitCache = ({
  x1,
  y1,
  x2,
  y2,
  opacity = 0.8,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity?: number;
}) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={ENCRE}
    strokeWidth={FIN}
    strokeDasharray={CACHE_DASH}
    opacity={opacity}
  />
);

/** Tracé caché quelconque (ancrages, bêches, semelles arrière). */
export const TraceCache = ({ d, opacity = 0.8 }: { d: string; opacity?: number }) => (
  <path d={d} fill="none" stroke={ENCRE} strokeWidth={FIN} strokeDasharray={CACHE_DASH} opacity={opacity} />
);

/** Trait MIXTE : axe de pièce, axe d'assemblage, axe de rangée de boulons. */
export const AxeMixte = ({
  x1,
  y1,
  x2,
  y2,
  opacity = 0.7,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity?: number;
}) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={ENCRE}
    strokeWidth={ULTRAFIN}
    strokeDasharray={MIXTE_DASH}
    opacity={opacity}
  />
);

/**
 * RAIDISSEUR transversal de poteau, en coupe : poché acier.
 * Le décalage fin figure la seconde tôle de la paire.
 */
export const Raidisseur = ({
  p,
  x,
  y,
  w,
  h,
}: {
  p: string;
  x: number;
  y: number;
  w: number;
  h: number;
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill="hsl(var(--gravure-fond))" />
    <rect x={x} y={y} width={w} height={h} fill={poche(p, 'acier')} />
    <Cadre x={x} y={y} w={w} h={h} weight={FIN} over={1.2} />
    <line x1={x + 2} y1={y + h + 2.5} x2={x + w - 2} y2={y + h + 2.5} stroke={ENCRE} strokeWidth={FIN} opacity="0.5" />
  </g>
);

/** CRAPAUD de fixation de rail : deux clips de part et d'autre du champignon. */
export const Crapaud = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <path
    d={`M${x} ${y} l${6 * s} 0 l0 -5 l${3 * s} 0 l0 3`}
    fill="none"
    stroke={ENCRE}
    strokeWidth={FIN}
  />
);

/** ÉCHANTIGNOLE : la cale d'appui qui tient la panne sur la traverse. */
export const Echantignole = ({ x, y, a = 0 }: { x: number; y: number; a?: number }) => (
  <g transform={`rotate(${a} ${x} ${y})`}>
    <path d={`M${x - 7} ${y} h14 v-9 h-4`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
  </g>
);

/** PANNE en Z, posée inclinée sur la traverse (jamais un rectangle à plat). */
export const PanneZ = ({ x, y, a = 0, s = 1 }: { x: number; y: number; a?: number; s?: number }) => (
  <g transform={`rotate(${a} ${x} ${y}) translate(${x} ${y}) scale(${s})`}>
    <path d="M7 -7 H-2 V7 H-9" fill="none" stroke={ENCRE} strokeWidth={MOYEN} />
    <path d="M7 -4.5 H0.5 V9.5 H-9" fill="none" stroke={ENCRE} strokeWidth={FIN} opacity="0.8" />
  </g>
);

/** LISSE en C, support du bardage. */
export const LisseC = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g>
    <path d={`M${x + 6 * s} ${y - 6} H${x} V${y + 6} H${x + 6 * s}`} fill="none" stroke={ENCRE} strokeWidth={FIN} />
    <path d={`M${x + 6 * s} ${y - 3.5} H${x + 2.5 * s} V${y + 3.5} H${x + 6 * s}`} fill="none" stroke={ENCRE} strokeWidth={FIN} opacity="0.7" />
  </g>
);

/**
 * SOUDURE, symbolisation de bureau d'études : ligne de repère fléchée,
 * ligne de référence horizontale, triangle de cordon d'angle, gorge
 * symbolique. `periph` ajoute le cercle de soudure périphérique au coude.
 */
export const SoudureISO = ({
  x,
  y,
  dx,
  dy,
  gorge = 'a',
  periph = false,
  dir = 1,
  len = 40,
}: {
  x: number;
  y: number;
  dx: number;
  dy: number;
  gorge?: string;
  periph?: boolean;
  dir?: number;
  len?: number;
}) => {
  const ex = x + dx;
  const ey = y + dy;
  const sens = Math.sign(dx) || 1;
  const fx = ex + len * sens;
  const a = Math.atan2(dy, dx);
  const p1 = [x + 9 * Math.cos(a - 0.32), y + 9 * Math.sin(a - 0.32)];
  const p2 = [x + 9 * Math.cos(a + 0.32), y + 9 * Math.sin(a + 0.32)];
  return (
    <g>
      {/* ligne de repère fléchée : la flèche touche la soudure */}
      <line x1={x} y1={y} x2={ex} y2={ey} stroke={OXYDE} strokeWidth={FIN} />
      <path d={`M${x} ${y} L${p1[0]} ${p1[1]} L${p2[0]} ${p2[1]} z`} fill={OXYDE} />
      {/* ligne de référence */}
      <line x1={ex} y1={ey} x2={fx} y2={ey} stroke={OXYDE} strokeWidth={FIN} />
      {/* triangle de cordon d'angle */}
      <path
        d={`M${ex + 12 * sens} ${ey} l${9 * sens} 0 l${-9 * sens} ${-8 * dir} z`}
        fill={OXYDE}
      />
      <text className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={ex + 6 * sens} y={ey - 3 * dir} fontSize="11" textAnchor="middle">
        {gorge}
      </text>
      {periph && <circle cx={ex} cy={ey} r="3.4" fill="none" stroke={OXYDE} strokeWidth={FIN} />}
    </g>
  );
};

/** BOULON D'ANCRAGE À CROCHET, noyé : donc dessiné en trait interrompu. */
export const AncrageCrochet = ({
  x,
  y,
  h,
  hook = 11,
  dir = 1,
}: {
  x: number;
  y: number;
  h: number;
  hook?: number;
  dir?: number;
}) => (
  <TraceCache d={`M${x} ${y} v${h} q0 7 ${7 * dir} 7 h${(hook - 7) * dir}`} />
);

/** ÉCROU ET RONDELLE au-dessus de la platine, évoqués. */
export const EcrouRondelle = ({ x, y }: { x: number; y: number }) => (
  <g stroke={ENCRE} strokeWidth={FIN} fill="none">
    <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
    <rect x={x - 4} y={y - 5} width={8} height={5} />
  </g>
);

/**
 * LIGNE DE COUPE normalisée : mixte FORT aux extrémités, fin au milieu,
 * flèches de sens du regard, lettre repère aux deux bouts.
 */
export const LigneDeCoupe = ({
  x1,
  x2,
  y,
  label = 'A',
  dir = -1,
}: {
  x1: number;
  x2: number;
  y: number;
  label?: string;
  dir?: number;
}) => {
  const bout = 26;
  return (
    <g>
      <line x1={x1} y1={y} x2={x1 + bout} y2={y} stroke={OXYDE} strokeWidth={FORT} />
      <line x1={x2 - bout} y1={y} x2={x2} y2={y} stroke={OXYDE} strokeWidth={FORT} />
      <line
        x1={x1 + bout}
        y1={y}
        x2={x2 - bout}
        y2={y}
        stroke={OXYDE}
        strokeWidth={FIN}
        strokeDasharray={MIXTE_DASH}
        opacity="0.8"
      />
      {[x1 + bout, x2 - bout].map((bx, i) => (
        <g key={bx}>
          <line x1={bx} y1={y} x2={bx} y2={y + 13 * dir} stroke={OXYDE} strokeWidth={MOYEN} />
          <path
            d={`M${bx} ${y + 13 * dir} l${i ? 8 : -8} 0 l${i ? -4 : 4} ${5 * dir} z`}
            fill={OXYDE}
          />
        </g>
      ))}
      <text className="gravure-lettrage" x={x1 - 6} y={y + 4} fontSize="12" textAnchor="end">
        {label}
      </text>
      <text className="gravure-lettrage" x={x2 + 6} y={y + 4} fontSize="12">
        {label}
      </text>
    </g>
  );
};

/** PASTILLE À LETTRE ⓐ : nomenclature secondaire, réservée aux détails. */
export const PastilleLettre = ({ x, y, l, r = 8 }: { x: number; y: number; l: string; r?: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="hsl(var(--gravure-fond))" stroke={ENCRE} strokeWidth={FIN} />
    <text className="gravure-lettrage gravure-reserve" data-lis="repere" data-lis-reserve="true" x={x} y={y + 4} fontSize="11" textAnchor="middle" fill={ENCRE}>
      {l}
    </text>
  </g>
);

/** Nomenclature secondaire d'un cercle de détail : ⓐ → ⓗ. */
export const NomenclatureLettres = ({
  x,
  y,
  items,
  lineHeight = 21,
}: {
  x: number;
  y: number;
  items: string[];
  lineHeight?: number;
}) => (
  <g>
    {items.map((it, i) => (
      <g key={it}>
        <PastilleLettre x={x} y={y + i * lineHeight} l={String.fromCharCode(97 + i)} />
        <text className="gravure-lettrage" x={x + 16} y={y + i * lineHeight + 4} fontSize="12">
          {it}
        </text>
      </g>
    ))}
  </g>
);
