import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import { ventures } from '@/pages/ventures/data';
import '@/studio/verre.css';

/* =================================================================
   DOSSIER DE DIRECTION ARTISTIQUE N°3 - « VERRE SOMBRE »
   Route privée, non liée, noindex. Aucune donnée nouvelle : les
   faits sont cités tels quels depuis src/pages/ventures/data.ts et
   le set fermé déjà publié.

   Garde-fou de direction : nocturne institutionnel. Une seule
   teinte d'accent (champagne froid), aucun halo, aucune surface
   translucide floutée. Toute teinte supplémentaire ferait basculer
   la direction vers le « tableau de bord », ce qui est proscrit.
   ================================================================= */

const cao = ventures.find((v) => v.slug === 'cao-industries')!;

const Folio = ({ n, label }: { n: string; label: string }) => (
  <span className="v-folio text-sm">
    <span className="v-folio-eyes" aria-hidden="true">
      <i /><span /><i />
    </span>
    <span className="v-tnum">{n}</span>
    <span className="v-smcp text-xs" style={{ color: 'hsl(var(--v-verre-3))' }}>{label}</span>
  </span>
);

const Cachet = ({ folio }: { folio: string }) => (
  <div className="v-cachet v-smcp">
    <span className="v-cachet-seal">Registre Owl</span>
    <span>Paris</span>
    <span>Est. 2023</span>
    <span>Folio {folio}</span>
    <span className="ml-auto" style={{ color: 'hsl(var(--v-verre-3))' }}>Direction 3 - Verre sombre</span>
  </div>
);

const Piece = ({
  n, title, intent, children,
}: { n: string; title: string; intent: string; children: React.ReactNode }) => (
  <section className="border-t" style={{ borderColor: 'hsl(var(--v-verre) / 0.12)' }}>
    <header className="max-w-[92rem] mx-auto px-6 md:px-12 pt-10 pb-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
      <Folio n={n} label="pièce" />
      <h2 className="v-display text-2xl md:text-3xl">{title}</h2>
      <p className="v-smcp text-xs md:ml-auto max-w-md" style={{ color: 'hsl(var(--v-verre-3))' }}>{intent}</p>
    </header>
    {children}
  </section>
);

/* ----------------------------------------------------------------
   PIÈCE 1 - Maquette d'accueil
   ---------------------------------------------------------------- */
export const VerreHero = ({ compact = false }: { compact?: boolean }) => (
  <div className="v-panneau v-feuille relative">
    <div
      className="relative z-10 grid grid-cols-12 gap-x-6 px-6 md:px-14 pt-14 pb-10"
      style={{ minHeight: compact ? '22rem' : '32rem' }}
    >
      <div className="col-span-12 md:col-span-8 self-center v-tranche">
        <span className="v-smcp text-xs" style={{ color: 'hsl(var(--v-champagne))' }}>
          Holding · Paris · Est. 2023
        </span>
        <h1
          className="v-display v-lever mt-8"
          style={{ fontSize: compact ? 'clamp(2.369rem, 4.4vw, 3.157rem)' : 'clamp(2.986rem, 9vw, 7.478rem)' }}
        >
          Cinq sociétés, deux pôles,
          <br />
          une même exigence.
        </h1>
        <p className="mt-8 text-base leading-relaxed max-w-xl v-onum" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Owl International détient et construit des sociétés entre la France et l'Afrique.
          Cinq sociétés, dont quatre en cours de constitution.
        </p>
      </div>

      <div className="col-span-12 md:col-span-4 self-end mt-12 md:mt-0">
        <div className="v-panneau-2 p-6">
          <p className="v-smcp text-xs" style={{ color: 'hsl(var(--v-champagne))' }}>Dernier fait daté</p>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
            27 juillet 2026 - dépôt de capital de {cao.name}.
          </p>
        </div>
      </div>
    </div>

    <div className="relative z-10 px-6 md:px-14 pb-6">
      <Cachet folio="01" />
    </div>
  </div>
);

const MaquetteAccueil = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    <VerreHero />

    {/* SECTION MODÈLE : cinq vitres alignées */}
    <div className="grid grid-cols-12 gap-6 pt-16">
      <div className="col-span-12 md:col-span-4">
        <span className="v-display block text-5xl md:text-6xl leading-none v-onum" style={{ color: 'hsl(var(--v-verre) / 0.22)' }}>01</span>
        <p className="v-smcp text-xs mt-2" style={{ color: 'hsl(var(--v-verre-3))' }}>Le portefeuille</p>
        <p className="mt-6 text-base leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Chaque société est une vitre : même épaisseur, même arête haute, le statut lisible sans
          couleur de statut.
        </p>
      </div>
      <ul className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ventures.map((v) => (
          <li key={v.slug} className="v-carte v-feuille p-6">
            <span className="v-smcp text-xs v-tnum" style={{ color: 'hsl(var(--v-verre-3))' }}>{v.order}</span>
            <p className="v-display text-2xl mt-3">{v.name}</p>
            <p className="v-smcp text-xs mt-2" style={{ color: 'hsl(var(--v-champagne))' }}>{v.pole.fr}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* SECTION JALONS */}
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-20">
      <div className="col-span-12 md:col-span-4">
        <span className="v-display block text-5xl md:text-6xl leading-none v-onum" style={{ color: 'hsl(var(--v-verre) / 0.22)' }}>02</span>
        <p className="v-smcp text-xs mt-2" style={{ color: 'hsl(var(--v-verre-3))' }}>Jalons</p>
      </div>
      <div className="col-span-12 md:col-span-8 v-panneau-2 p-6 md:p-8">
        <table className="v-table">
          <caption className="sr-only">Jalons datés du groupe</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Fait</th>
              <th scope="col" className="text-right">Folio</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['23 août 2023', "Immatriculation d'Owl International, Paris.", '001'],
              ['2024', 'Premier exercice : chiffre d\u2019affaires de 141 k€, résultat net de 130 k€. Comptes déposés au greffe.', '002'],
              ['13 juillet 2026', "Ouverture d'Owl Scouts.", '003'],
              ['27 juillet 2026', `Dépôt de capital de ${cao.name}.`, '004'],
            ].map(([d, f, n]) => (
              <tr key={n}>
                <th scope="row" className="whitespace-nowrap pr-6 align-baseline">
                  <span className="v-tnum text-base normal-case tracking-normal" style={{ color: 'hsl(var(--v-verre))' }}>{d}</span>
                </th>
                <td className="text-base leading-relaxed pr-6 v-onum">{f}</td>
                <td className="num v-smcp text-xs">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 2 - Fiche venture CAO Industries (données de production)
   ---------------------------------------------------------------- */
const FicheVenture = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-7 v-panneau v-feuille p-8 md:p-14">
        <div className="v-tranche">
          <span className="v-smcp text-xs" style={{ color: 'hsl(var(--v-champagne))' }}>{cao.pole.fr}</span>
          <h3 className="v-display mt-6" style={{ fontSize: 'clamp(2.369rem, 6vw, 4.209rem)' }}>
            {cao.name}
          </h3>
          <p className="mt-8 text-lg leading-relaxed max-w-xl" style={{ color: 'hsl(var(--v-verre-2))' }}>
            {cao.context.fr}
          </p>
          <p className="mt-4 v-smcp text-xs" style={{ color: 'hsl(var(--v-verre-3))' }}>
            {cao.incorporation?.fr}
          </p>
        </div>
        <div className="mt-10">
          <Cachet folio="02" />
        </div>
      </div>

      <aside className="col-span-12 md:col-span-5 v-panneau-2 p-8 md:p-10">
        <h4 className="v-smcp text-xs mb-6" style={{ color: 'hsl(var(--v-verre-3))' }}>Notice</h4>
        <dl className="text-base">
          {[
            ['Dénomination', cao.name],
            ['Statut', 'En cours d\u2019immatriculation'],
            ['Dépôt de capital', '27 juillet 2026'],
            ['Pôle', cao.pole.fr],
            ['Terrain', cao.operating.fr],
          ].map(([k, v]) => (
            <div key={k} className="py-3 border-b" style={{ borderColor: 'hsl(var(--v-verre) / 0.12)' }}>
              <dt className="v-smcp text-xs" style={{ color: 'hsl(var(--v-verre-3))' }}>{k}</dt>
              <dd className="mt-1 leading-relaxed" style={{ color: 'hsl(var(--v-verre))' }}>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm leading-relaxed" style={{ color: 'hsl(var(--v-verre-3))' }}>
          Les champs non sourcés ne sont pas affichés. La notice ne comporte aucune donnée
          d'activité.
        </p>
      </aside>
    </div>

    {/* Coupe : rattachement au groupe, tracé au filet */}
    <figure className="mt-8 v-panneau-2 p-8 md:p-12">
      <svg viewBox="0 0 800 170" role="img" aria-label={`Coupe : rattachement de ${cao.name} au ${cao.pole.fr.toLowerCase()}`} className="w-full h-auto">
        <defs>
          <pattern id="v-hatch" width="7" height="7" patternTransform="rotate(-32)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="7" stroke="hsl(var(--v-verre))" strokeOpacity="0.22" strokeWidth="1" />
          </pattern>
        </defs>
        {[
          [140, 'Owl International'],
          [400, cao.pole.fr],
          [660, cao.name],
        ].map(([x, label], i) => (
          <g key={label as string}>
            <rect
              x={(x as number) - 92} y="58" width="184" height="52"
              fill={i === 2 ? 'url(#v-hatch)' : 'hsl(var(--v-nuit-3))'}
              stroke="hsl(var(--v-verre))" strokeOpacity="0.24"
            />
            <line x1={(x as number) - 92} y1="58" x2={(x as number) + 92} y2="58" stroke="hsl(var(--v-champagne))" strokeOpacity="0.55" strokeWidth="1" />
            <text x={x as number} y="89" textAnchor="middle" fontSize="13" fill="hsl(var(--v-verre))" fontFamily="Inter, sans-serif">
              {label as string}
            </text>
          </g>
        ))}
        <line x1="48" y1="84" x2="752" y2="84" stroke="hsl(var(--v-verre))" strokeOpacity="0.18" strokeWidth="1" />
      </svg>
      <figcaption className="v-smcp text-xs mt-4" style={{ color: 'hsl(var(--v-verre-3))' }}>
        Coupe - hachure = société en cours d’immatriculation, arête champagne = lumière rasante unique
      </figcaption>
    </figure>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 3 - Spécimen typographique
   ---------------------------------------------------------------- */
const Specimen = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20 grid grid-cols-12 gap-6">
    <div className="col-span-12 md:col-span-7 v-panneau p-8">
      <p className="v-smcp text-xs mb-6" style={{ color: 'hsl(var(--v-verre-3))' }}>Échelle - quarte juste 1.333</p>
      {[
        ['9.97rem', 'Aa'],
        ['5.61rem', 'Verre'],
        ['3.157rem', 'Deux pôles'],
        ['1.777rem', 'Une chaîne intégrée'],
        ['1rem', 'Corps de texte, lecture longue, écran de nuit.'],
      ].map(([size, txt]) => (
        <div key={size} className="border-b py-4" style={{ borderColor: 'hsl(var(--v-verre) / 0.12)' }}>
          <span className="v-smcp text-xs v-tnum" style={{ color: 'hsl(var(--v-verre-3))' }}>{size}</span>
          <p className="v-display leading-none mt-2" style={{ fontSize: `min(${size}, 14vw)` }}>{txt}</p>
        </div>
      ))}
    </div>
    <div className="col-span-12 md:col-span-5 space-y-4">
      <div className="v-panneau-2 p-8">
        <p className="v-smcp text-xs mb-4" style={{ color: 'hsl(var(--v-verre-3))' }}>Chiffres</p>
        <p className="v-onum text-2xl">141 130 2023 2026 - elzéviriens (prose)</p>
        <p className="v-tnum text-2xl mt-3">141 130 2023 2026 - tabulaires (tableaux)</p>
      </div>
      <div className="v-panneau-2 p-8">
        <p className="v-smcp text-xs mb-4" style={{ color: 'hsl(var(--v-champagne))' }}>Graisse optique</p>
        <p className="v-display text-4xl">Sur nuit, on descend d'un cran.</p>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Le texte clair sur fond sombre gagne en épaisseur perçue : le corps reste identique, mais
          le blanc est retenu à 92 % de luminosité et jamais poussé à 100 %.
        </p>
      </div>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 4 - Planche matière et couleur
   ---------------------------------------------------------------- */
const Planche = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        ['Nuit', '--v-nuit', 'Fond général, jamais noir pur'],
        ['Nuit relevée', '--v-nuit-3', 'Panneaux, tableaux'],
        ['Verre', '--v-verre', 'Texte, 92 % de luminosité'],
        ['Champagne', '--v-champagne', 'Filet, accent unique'],
      ].map(([name, token, use]) => (
        <figure key={token} className="v-carte v-feuille">
          <div className="h-28" style={{ background: `hsl(var(${token}))` }} />
          <figcaption className="p-4">
            <p className="v-smcp text-xs">{name}</p>
            <p className="text-sm mt-1 leading-snug" style={{ color: 'hsl(var(--v-verre-2))' }}>{use}</p>
          </figcaption>
        </figure>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="v-panneau p-8">
        <p className="v-smcp text-xs mb-4" style={{ color: 'hsl(var(--v-verre-3))' }}>Ce que la direction s'interdit</p>
        <ul className="text-sm leading-relaxed space-y-2" style={{ color: 'hsl(var(--v-verre-2))' }}>
          <li>Aucun halo radial, aucune lueur portée sur le texte.</li>
          <li>Aucun backdrop-blur : translucidité simulée par solides.</li>
          <li>Aucune seconde teinte d'accent (ni cyan, ni violet, ni vert).</li>
          <li>Aucun dégradé sur un mot ou un chiffre.</li>
        </ul>
      </div>
      <div className="v-panneau p-8">
        <p className="v-smcp text-xs mb-4" style={{ color: 'hsl(var(--v-verre-3))' }}>Feuilles de verre</p>
        <div className="h-24 v-panneau-2 v-feuille" />
        <p className="text-sm mt-4 leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Un dégradé linéaire à 104°, opacité maximale 0,05. La vitre est prise de biais, elle
          n'émet pas de lumière.
        </p>
      </div>
      <div className="v-panneau p-8">
        <p className="v-smcp text-xs mb-4" style={{ color: 'hsl(var(--v-verre-3))' }}>Profondeur</p>
        <div className="space-y-3">
          {['--v-nuit', '--v-nuit-2', '--v-nuit-3', '--v-nuit-4'].map((s) => (
            <div key={s} className="h-7" style={{ background: `hsl(var(${s}))`, boxShadow: 'var(--v-edge-top)' }} />
          ))}
        </div>
        <p className="text-sm mt-4 leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Quatre plans seulement, séparés par 3 points de luminosité et un liseré de 1px.
        </p>
      </div>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 5 - Manifeste et signatures
   ---------------------------------------------------------------- */
export const VERRE_MANIFESTE = [
  "La nuit est un fond, pas un effet : on baisse la lumière, on n'ajoute pas de lueur.",
  'Une seule teinte d\u2019accent, champagne froid, en filet et jamais en aplat.',
  'Le blanc s\u2019arrête à 92 % : aucun texte à luminosité maximale.',
  'La translucidité se joue en solides superposés - aucun flou d\u2019arrière-plan.',
  'Quatre plans de profondeur au maximum, séparés au liseré de 1px.',
  'Un éclat par écran : l\u2019arête haute du panneau principal.',
  'Aucun dégradé sur un mot, un chiffre ou un pictogramme.',
  'Les tableaux sont tabulaires, la prose est elzévirienne.',
  'Le mouvement passe une fois et ne revient pas : rien ne clignote.',
  'Référence : une salle de conseil la nuit, jamais un écran de marché.',
];

const Manifeste = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-24 grid grid-cols-12 gap-6">
    <div className="col-span-12 md:col-span-7 v-panneau p-8 md:p-12">
      <h3 className="v-smcp text-xs mb-6" style={{ color: 'hsl(var(--v-verre-3))' }}>Manifeste - dix lignes</h3>
      <ol className="space-y-3 text-base leading-relaxed v-onum list-decimal pl-5" style={{ color: 'hsl(var(--v-verre-2))' }}>
        {VERRE_MANIFESTE.map((l) => <li key={l}>{l}</li>)}
      </ol>
    </div>

    <div className="col-span-12 md:col-span-5 space-y-8">
      <div>
        <div className="v-panneau-2 p-6">
          <Folio n="07" label="folio" />
        </div>
        <p className="text-sm mt-3 leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Conservé : le folio-chouette, deux yeux et une plume, en tête de chaque pièce.
        </p>
      </div>
      <div>
        <div className="v-panneau-2 p-6">
          <Cachet folio="03" />
        </div>
        <p className="text-sm mt-3 leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Conservé : le cachet de registre, bandeau typographique scellant chaque page.
        </p>
      </div>
      <div>
        <div className="v-panneau v-feuille p-6">
          <div className="v-tranche">
            <p className="v-display text-3xl">La tranche de verre</p>
          </div>
        </div>
        <p className="text-sm mt-3 leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Propre à Verre sombre : un filet de 1px sur l'arête gauche des blocs d'autorité. La
          lumière le parcourt une seule fois, en 900 ms, puis ne revient jamais. Neutralisé en
          reduced-motion.
        </p>
      </div>
    </div>
  </div>
);

const Direction3 = () => {
  useSEO({
    title: 'Studio - Direction 3 · Verre sombre',
    description: 'Dossier de direction artistique interne.',
    noindex: true,
  });

  return (
    <div className="dir-verre min-h-screen">
      <header className="max-w-[92rem] mx-auto px-6 md:px-12 pt-16 pb-12">
        <p className="v-smcp text-xs" style={{ color: 'hsl(var(--v-champagne))' }}>
          Dossier de direction artistique · interne · non indexé
        </p>
        <h1 className="v-display mt-6" style={{ fontSize: 'clamp(2.986rem, 11vw, 9.97rem)' }}>
          Verre sombre
        </h1>
        <p className="mt-6 text-lg max-w-2xl v-onum leading-relaxed" style={{ color: 'hsl(var(--v-verre-2))' }}>
          Le nocturne institutionnel. Cinq pièces : accueil, fiche venture, spécimen, planche
          matière, manifeste.
        </p>
      </header>

      <Piece n="01" title="Maquette d'accueil" intent="Panneau de verre, vitres du portefeuille, jalons">
        <MaquetteAccueil />
      </Piece>
      <Piece n="02" title={`Fiche venture - ${cao.name}`} intent="Notice et coupe, données de production">
        <FicheVenture />
      </Piece>
      <Piece n="03" title="Spécimen typographique" intent="Échelle 1.333, chiffres, graisse optique de nuit">
        <Specimen />
      </Piece>
      <Piece n="04" title="Planche matière et couleur" intent="Nuit, verre, champagne, interdits de direction">
        <Planche />
      </Piece>
      <Piece n="05" title="Manifeste et signatures" intent="Dix lignes, trois signatures possédables">
        <Manifeste />
      </Piece>

      <footer className="max-w-[92rem] mx-auto px-6 md:px-12 py-12">
        <Cachet folio="05" />
      </footer>
    </div>
  );
};

export default Direction3;
