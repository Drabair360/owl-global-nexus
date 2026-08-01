import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import '@/studio/gravure.css';

/* =================================================================
   DOSSIER DE DIRECTION ARTISTIQUE N°1 - « GRAVURE »
   Route privée, non liée, noindex. Aucun contenu nouveau : toutes
   les données factuelles proviennent du set fermé déjà publié.
   ================================================================= */

const Folio = ({ n, label }: { n: string; label: string }) => (
  <span className="g-folio text-sm">
    <span className="g-folio-eyes" aria-hidden="true">
      <i /><span /><i />
    </span>
    <span className="g-tnum">{n}</span>
    <span className="g-smcp text-xs opacity-70">{label}</span>
  </span>
);

const Cachet = ({ folio }: { folio: string }) => (
  <div className="g-cachet g-smcp">
    <span className="g-cachet-seal">Registre Owl</span>
    <span>Paris</span>
    <span>Est. 2023</span>
    <span>Folio {folio}</span>
    <span className="ml-auto opacity-70">Direction 1 - Gravure</span>
  </div>
);

const Piece = ({
  n,
  title,
  intent,
  children,
}: {
  n: string;
  title: string;
  intent: string;
  children: React.ReactNode;
}) => (
  <section className="border-t" style={{ borderColor: 'hsl(var(--g-ink) / 0.2)' }}>
    <header className="max-w-[92rem] mx-auto px-6 md:px-12 pt-10 pb-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
      <Folio n={n} label="pièce" />
      <h2 className="g-display text-2xl md:text-3xl">{title}</h2>
      <p className="g-smcp text-xs opacity-70 md:ml-auto max-w-md">{intent}</p>
    </header>
    {children}
  </section>
);

/* ----------------------------------------------------------------
   PIÈCE 1 - Maquette d'accueil haute-fidélité
   ---------------------------------------------------------------- */
const MaquetteAccueil = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    {/* HERO : composition asymétrique radicale, 12 colonnes */}
    <div className="g-ink-surface g-burin relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-12 gap-x-6 px-6 md:px-14 pt-16 pb-10 min-h-[34rem]">
        <div className="col-span-12 md:col-span-2 order-2 md:order-1 flex md:flex-col justify-between pb-2 md:pb-0">
          <span className="g-smcp text-xs" style={{ color: 'hsl(var(--g-gold-lit))' }}>
            Holding · Paris
          </span>
          <span className="g-smcp text-xs opacity-60 g-tnum md:[writing-mode:vertical-rl] md:rotate-180">
            Est. 2023
          </span>
        </div>

        <div className="col-span-12 md:col-span-10 order-1 md:order-2 self-center">
          <h1 className="g-display g-enter" style={{ fontSize: 'clamp(3.157rem, 11.5vw, 9.97rem)' }}>
            <span className="block">Cinq sociétés,</span>
            <span className="block pl-[8%]">
              deux <span className="g-incision">pôles</span>,
            </span>
            <span className="block italic pl-[22%]">une même exigence.</span>
          </h1>
        </div>

        <div className="col-span-12 md:col-start-7 md:col-span-5 order-3 mt-12 self-end">
          <p className="text-base leading-relaxed g-onum" style={{ color: 'hsl(var(--g-paper) / 0.78)' }}>
            Owl International détient et construit des sociétés entre la France et l'Afrique.
            Quatre d'entre elles sont en cours de constitution.
          </p>
          <a
            href="#piece-2"
            className="g-smcp text-xs inline-block mt-6 pb-1 border-b"
            style={{ color: 'hsl(var(--g-gold-lit))', borderColor: 'hsl(var(--g-gold-lit))' }}
          >
            Lire le modèle
          </a>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-14 pb-6">
        <Cachet folio="01" />
      </div>
    </div>

    {/* SECTION MODÈLE : hiérarchie par la taille seule */}
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-20">
      <div className="col-span-12 md:col-span-3">
        <span className="g-display block text-5xl md:text-6xl leading-none opacity-25 g-onum">01</span>
        <p className="g-smcp text-xs mt-2">Le modèle</p>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h3 className="g-display text-3xl md:text-4xl max-w-3xl mb-8">
          Une chaîne intégrée, de l'ingénierie au patrimoine.
        </h3>
        <p className="g-lettrine text-lg leading-relaxed max-w-2xl g-onum">
          Le groupe réunit des sociétés d'ingénierie, d'édition logicielle et de détention
          patrimoniale. Chacune est présentée telle qu'elle est : opérationnelle, en formation
          ou en cours de constitution.
        </p>
        <ol className="grid grid-cols-2 md:grid-cols-5 gap-px mt-12" style={{ background: 'hsl(var(--g-ink) / 0.16)' }}>
          {['CAO Industries', 'Drabair Labs', 'Line Builder', 'Weavme', 'Owl Real Estate'].map((node, i) => (
            <li key={node} className="g-paper-2 p-5">
              <span className="g-smcp text-xs opacity-60 g-tnum">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-3 text-base leading-snug">{node}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>

    {/* SECTION JALONS : registre imprimé */}
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-24">
      <div className="col-span-12 md:col-span-3">
        <span className="g-display block text-5xl md:text-6xl leading-none opacity-25 g-onum">02</span>
        <p className="g-smcp text-xs mt-2">Jalons</p>
      </div>
      <div className="col-span-12 md:col-span-9">
        <table className="g-table">
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
              ['23 août 2023', 'Immatriculation d\'Owl International, Paris.', '001'],
              ['2024', 'Premier exercice : chiffre d\'affaires de 141 k€, résultat net de 130 k€. Comptes déposés au greffe.', '002'],
              ['13 juillet 2026', 'Ouverture d\'Owl Scouts.', '003'],
              ['27 juillet 2026', 'Dépôt de capital de CAO Industries.', '004'],
            ].map(([d, f, n]) => (
              <tr key={n}>
                <th scope="row" className="whitespace-nowrap pr-6 align-baseline">
                  <span className="g-tnum text-base normal-case tracking-normal" style={{ color: 'hsl(var(--g-ink))' }}>{d}</span>
                </th>
                <td className="text-base leading-relaxed pr-6 g-onum">{f}</td>
                <td className="num g-smcp text-xs opacity-60">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 2 - Fiche venture CAO Industries
   ---------------------------------------------------------------- */
const FicheVenture = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    <div className="grid grid-cols-12 gap-x-6">
      <div className="col-span-12 md:col-span-8 g-ink-surface g-burin p-8 md:p-14">
        <span className="g-smcp text-xs" style={{ color: 'hsl(var(--g-gold-lit))' }}>Pôle industriel</span>
        <h3 className="g-display mt-6" style={{ fontSize: 'clamp(2.369rem, 7vw, 5.61rem)' }}>
          CAO <span className="g-incision">Industries</span>
        </h3>
        <p className="mt-8 text-lg leading-relaxed max-w-xl" style={{ color: 'hsl(var(--g-paper) / 0.78)' }}>
          Contractant général de projets industriels clé en main, de l'étude à la livraison.
          Constitution engagée en 2026.
        </p>
        <div className="mt-10">
          <Cachet folio="02" />
        </div>
      </div>

      {/* Notice venture redessinée : le composant-signature */}
      <aside className="col-span-12 md:col-span-4 g-paper-2 p-8 md:p-10">
        <h4 className="g-smcp text-xs mb-6">Notice</h4>
        <dl className="text-base">
          {[
            ['Dénomination', 'CAO Industries'],
            ['Statut', 'En cours de constitution'],
            ['Dépôt de capital', '27 juillet 2026'],
            ['Pôle', 'Industriel'],
          ].map(([k, v]) => (
            <div key={k} className="py-3 border-b" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
              <dt className="g-smcp text-xs opacity-70">{k}</dt>
              <dd className="mt-1 g-tnum">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm opacity-70 leading-relaxed">
          Les champs non sourcés ne sont pas affichés. La notice ne comporte aucune donnée
          d'activité.
        </p>
      </aside>
    </div>

    {/* Mini-schéma gravé */}
    <figure className="mt-12 g-paper-3 p-8 md:p-12">
      <svg viewBox="0 0 800 160" role="img" aria-label="Schéma : rattachement de CAO Industries au pôle industriel" className="w-full h-auto">

        <defs>
          <pattern id="g-hatch" width="6" height="6" patternTransform="rotate(-32)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--g-ink))" strokeOpacity="0.28" strokeWidth="1" />
          </pattern>
        </defs>
        <line x1="40" y1="80" x2="760" y2="80" stroke="hsl(var(--g-ink))" strokeOpacity="0.35" strokeWidth="1" />
        {[
          [140, 'Owl International'],
          [400, 'Pôle opérationnel'],
          [660, 'CAOAGRO.COM'],
        ].map(([x, label], i) => (
          <g key={label as string}>
            <rect x={(x as number) - 90} y="56" width="180" height="48" fill={i === 2 ? 'url(#g-hatch)' : 'none'} stroke="hsl(var(--g-ink))" strokeOpacity="0.5" />
            <text x={x as number} y="84" textAnchor="middle" fontSize="13" fill="hsl(var(--g-ink))" fontFamily="Inter, sans-serif">
              {label as string}
            </text>
          </g>
        ))}
        <circle cx="660" cy="130" r="3" fill="hsl(var(--g-gold))" />
      </svg>
      <figcaption className="g-smcp text-xs mt-4 opacity-70">
        Gravure technique - hachure = société en cours de constitution
      </figcaption>
    </figure>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 3 - Spécimen typographique
   ---------------------------------------------------------------- */
const Specimen = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    <div className="grid grid-cols-12 gap-x-6 gap-y-12">
      <div className="col-span-12">
        <p className="g-display leading-none" style={{ fontSize: 'clamp(3rem, 13vw, 11rem)' }}>
          Aa Bb Cc &amp; 1234
        </p>
        <div className="g-rule-gold mt-6" />
      </div>

      {[
        ['Display · 7.478rem', 'g-display', { fontSize: '7.478rem' }, 'Gravure'],
        ['Titre · 3.157rem', 'g-display', { fontSize: '3.157rem' }, 'Une même exigence'],
        ['Sous-titre · 1.777rem', '', { fontSize: '1.777rem', lineHeight: 1.35 }, 'Holding détenant cinq sociétés'],
        ['Corps · 1rem, chiffres elzéviriens', 'g-onum', { fontSize: '1rem', lineHeight: 1.65 }, 'Immatriculée en 2023 à Paris ; comptes 2024 déposés au greffe.'],
      ].map(([label, cls, style, text]) => (
        <div key={label as string} className="col-span-12 border-t pt-5" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
          <p className="g-smcp text-xs opacity-70 mb-3">{label as string}</p>
          <p className={cls as string} style={style as React.CSSProperties}>{text as string}</p>
        </div>
      ))}

      <div className="col-span-12 md:col-span-6 border-t pt-5" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
        <p className="g-smcp text-xs opacity-70 mb-3">Petites capitales véritables (smcp / c2sc)</p>
        <p className="g-smcp text-lg">Owl International · Registre · Paris</p>
      </div>

      <div className="col-span-12 md:col-span-6 border-t pt-5" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
        <p className="g-smcp text-xs opacity-70 mb-3">Exposants, fractions, ordinaux</p>
        <p className="text-lg">
          Folio n<span className="g-sup">o</span> 4 · <span className="g-frac">1/2</span> page · 2<span className="g-sup">e</span> pôle
        </p>
      </div>

      <div className="col-span-12 md:col-span-6 border-t pt-5" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
        <p className="g-smcp text-xs opacity-70 mb-3">Chiffres tabulaires (tnum) - données</p>
        <table className="g-table max-w-xs">
          <tbody>
            {[['Sociétés', '05'], ['Pôles', '02'], ['Continents', '02'], ['Immatriculation', '2023']].map(([k, v]) => (
              <tr key={k}><th scope="row">{k}</th><td className="num g-tnum text-base">{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-span-12 md:col-span-6 border-t pt-5" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
        <p className="g-smcp text-xs opacity-70 mb-3">Chiffres elzéviriens (onum) - prose</p>
        <p className="g-onum text-lg leading-relaxed">
          Immatriculée le 23 août 2023, la société a déposé ses comptes 2024 au greffe.
        </p>
      </div>

      <div className="col-span-12 border-t pt-5" style={{ borderColor: 'hsl(var(--g-ink) / 0.16)' }}>
        <p className="g-smcp text-xs opacity-70 mb-3">Lettrine, trois lignes, avec alignement optique</p>
        <p className="g-lettrine g-onum text-base leading-relaxed max-w-3xl">
          Le groupe présente ses sociétés telles qu'elles sont : opérationnelles, en formation ou
          en cours de constitution. Aucun chiffre d'activité n'est publié, à la seule exception
          des comptes annuels déposés au greffe, cités tels quels.
        </p>
      </div>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 4 - Planche matière et couleur
   ---------------------------------------------------------------- */
const swatches: [string, string, string][] = [
  ['--g-ink', 'Encre taille-douce', 'Fonds héroïques, cartouches'],
  ['--g-ink-2', 'Encre relevée', 'Surfaces sur encre'],
  ['--g-ink-3', 'Encre grise', 'Filets, légendes'],
  ['--g-paper', 'Papier de garde', 'Fond général'],
  ['--g-paper-2', 'Papier chiffon', 'Blocs secondaires'],
  ['--g-paper-3', 'Papier ombré', 'Tableaux, planches'],
  ['--g-gold', 'Or d\'incision', 'Incisions, filets rares'],
  ['--g-gold-lit', 'Or sur encre', 'Accents sur fond sombre'],
  ['--g-cere', 'Cire de sceau', 'Cachet de registre, unique'],
];

const Planche = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'hsl(var(--g-ink) / 0.16)' }}>
      {swatches.map(([token, name, usage]) => (
        <div key={token} className="g-paper-2 p-5">
          <div className="h-20 mb-4" style={{ background: `hsl(var(${token}))` }} />
          <p className="g-smcp text-xs">{name}</p>
          <code className="block text-xs opacity-60 mt-1">{token}</code>
          <p className="text-sm opacity-70 mt-2 leading-snug">{usage}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <figure className="g-burin g-paper-3 h-40" aria-label="Texture : trame de burin sur papier">
        <figcaption className="g-smcp text-xs p-4 opacity-70">Trame de burin - papier</figcaption>
      </figure>
      <figure className="g-burin g-ink-surface h-40" aria-label="Texture : trame de burin sur encre">
        <figcaption className="g-smcp text-xs p-4 opacity-70">Trame de burin - encre</figcaption>
      </figure>
      <figure className="h-40 flex items-center justify-center g-paper-2" aria-label="Placeholder LQIP monochrome">
        <div className="w-full h-full" style={{ background: 'linear-gradient(180deg, hsl(var(--g-ink) / 0.14), hsl(var(--g-ink) / 0.42))' }} />
      </figure>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 5 - Manifeste + trois signatures
   ---------------------------------------------------------------- */
const Manifeste = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-24 grid grid-cols-12 gap-x-6 gap-y-12">
    <div className="col-span-12 md:col-span-7">
      <ol className="g-onum text-lg leading-relaxed space-y-3 list-none">
        {[
          'Gravure affirme que l\'institution se lit avant de se regarder.',
          'La hiérarchie ne tient qu\'à la taille : ni couleur, ni ombre, ni cadre.',
          'Changement 1 - display monumental à interlettrage optique négatif.',
          'Changement 2 - compositions asymétriques : le titre décroche de la grille, jamais le texte.',
          'Changement 3 - l\'or devient incision : trois traits par page au maximum.',
          'Changement 4 - lettrines et grands folios elzéviriens comme rythme de lecture.',
          'Changement 5 - tableaux de registre en lieu et place des cartes.',
          'Conserve : la doctrine de preuve, le set KPI fermé, l\'encre et le papier chaud.',
          'Risque principal - l\'austérité peut paraître froide sur mobile où le display se replie.',
          'Test du souvenir - « le site où les dates sont gravées comme sur un acte, avec deux yeux de chouette en marge ».',
        ].map((line, i) => (
          <li key={i} className="flex gap-4">
            <span className="g-smcp text-xs opacity-50 pt-2 g-tnum">{String(i + 1).padStart(2, '0')}</span>
            <span>{line}</span>
          </li>
        ))}
      </ol>
    </div>

    <div className="col-span-12 md:col-span-5 g-paper-2 p-8">
      <h3 className="g-smcp text-xs mb-6">Les trois signatures</h3>

      <div className="space-y-8">
        <div>
          <Folio n="03" label="folio-chouette" />
          <p className="text-sm mt-3 leading-relaxed opacity-80">
            Deux disques (les yeux) séparés par l'incision du bec ; le numéro en elzéviriens
            tabulaires. Il ponctue chaque section et chaque pied de page.
          </p>
        </div>

        <div>
          <Cachet folio="03" />
          <p className="text-sm mt-3 leading-relaxed opacity-80">
            Le cachet de registre : un bandeau typographique scellant chaque page - lieu, année
            d'immatriculation, folio, sceau à la cire.
          </p>
        </div>

        <div>
          <p className="g-display text-3xl">
            L'<span className="g-incision">incision</span>
          </p>
          <p className="text-sm mt-3 leading-relaxed opacity-80">
            Un unique trait d'or traverse un mot par écran, tracé à l'entrée en 720 ms. Rare par
            construction : trois par page au maximum, zéro en reduced-motion (trait déjà tracé).
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Direction1 = () => {
  useSEO({
    title: 'Studio - Direction 1 · Gravure',
    description: 'Dossier de direction artistique interne.',
    noindex: true,
  });

  return (
    <div className="dir-gravure min-h-screen">
      <header className="max-w-[92rem] mx-auto px-6 md:px-12 pt-16 pb-12">
        <p className="g-smcp text-xs" style={{ color: 'hsl(var(--g-cere))' }}>
          Dossier de direction artistique · interne · non indexé
        </p>
        <h1 className="g-display mt-6" style={{ fontSize: 'clamp(3.157rem, 12vw, 9.97rem)' }}>
          Gravure
        </h1>
        <p className="mt-6 text-lg max-w-2xl g-onum leading-relaxed">
          L'intensité par la typographie. Cinq pièces : accueil, fiche venture, spécimen,
          planche matière, manifeste.
        </p>
      </header>

      <Piece n="01" title="Maquette d'accueil" intent="Hero, section Modèle, Jalons - haute fidélité">
        <MaquetteAccueil />
      </Piece>
      <div id="piece-2" />
      <Piece n="02" title="Fiche venture - CAOAGRO.COM" intent="Notice redessinée et gravure technique">
        <FicheVenture />
      </Piece>
      <Piece n="03" title="Spécimen typographique" intent="Échelle entière, réglages OpenType activés">
        <Specimen />
      </Piece>
      <Piece n="04" title="Planche matière et couleur" intent="Tokens v2, textures CSS, LQIP monochrome">
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

export default Direction1;
