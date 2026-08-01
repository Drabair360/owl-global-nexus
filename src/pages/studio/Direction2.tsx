import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import { ventures } from '@/pages/ventures/data';
import '@/studio/matiere.css';

/* =================================================================
   DOSSIER DE DIRECTION ARTISTIQUE N°2 - « MATIÈRE »
   Route privée, non liée, noindex. Aucune donnée nouvelle : les
   faits sont cités tels quels depuis src/pages/ventures/data.ts et
   le set fermé déjà publié.
   ================================================================= */

const cao = ventures.find((v) => v.slug === 'cao-industries')!;

const Folio = ({ n, label }: { n: string; label: string }) => (
  <span className="m-folio text-sm">
    <span className="m-folio-eyes" aria-hidden="true">
      <i /><span /><i />
    </span>
    <span className="m-tnum">{n}</span>
    <span className="m-smcp text-xs m-ink-2">{label}</span>
  </span>
);

const Cachet = ({ folio }: { folio: string }) => (
  <div className="m-cachet m-smcp">
    <span className="m-cachet-seal">Registre Owl</span>
    <span>Paris</span>
    <span>Est. 2023</span>
    <span>Folio {folio}</span>
    <span className="ml-auto m-ink-2">Direction 2 - Matière</span>
  </div>
);

const Piece = ({
  n, title, intent, children,
}: { n: string; title: string; intent: string; children: React.ReactNode }) => (
  <section className="border-t" style={{ borderColor: 'hsl(var(--m-text-on-gres-1) / 0.18)' }}>
    <header className="max-w-[92rem] mx-auto px-6 md:px-12 pt-10 pb-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
      <Folio n={n} label="pièce" />
      <h2 className="m-display text-2xl md:text-3xl">{title}</h2>
      <p className="m-smcp text-xs m-ink-2 md:ml-auto max-w-md">{intent}</p>
    </header>
    {children}
  </section>
);

/* ----------------------------------------------------------------
   PIÈCE 1 - Maquette d'accueil
   ---------------------------------------------------------------- */
const MaquetteAccueil = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20">
    {/* HERO : bloc de béton coffré, texte posé sur l'arête */}
    <div className="m-beton m-grain m-coffrage relative">
      <div className="relative z-10 grid grid-cols-12 gap-x-6 px-6 md:px-14 pt-16 pb-10 min-h-[32rem]">
        <div className="col-span-12 md:col-span-8 self-center m-arete pl-6 md:pl-8">
          <span className="m-smcp text-xs">
            Holding · Paris · Est. 2023
          </span>
          <h1 className="m-display m-pose mt-8" style={{ fontSize: 'clamp(2.986rem, 9vw, 7.478rem)' }}>
            Cinq sociétés, deux pôles,
            <br />
            une même exigence.
          </h1>
          <p className="mt-8 text-base leading-relaxed max-w-xl m-onum">
            Owl International détient et construit des sociétés entre la France et l'Afrique.
            Cinq sociétés, dont quatre en cours de constitution.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 self-end mt-12 md:mt-0">
          <div className="m-beton-2 m-grain p-6 m-serti">
            <p className="m-smcp text-xs">Dernier fait daté</p>
            <p className="mt-3 text-base leading-relaxed">
              27 juillet 2026 - dépôt de capital de {cao.name}.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-14 pb-6">
        <Cachet folio="01" />
      </div>
    </div>

    {/* SECTION MODÈLE : cinq plaques posées */}
    <div className="grid grid-cols-12 gap-6 pt-16">
      <div className="col-span-12 md:col-span-4">
        <span className="m-display block text-5xl md:text-6xl leading-none opacity-25 m-onum" aria-hidden="true">01</span>
        <p className="m-smcp text-xs mt-2">Le portefeuille</p>
        <p className="mt-6 text-base leading-relaxed m-ink-2">
          Chaque société est une plaque distincte : même épaisseur, même lumière, statut lisible
          au premier regard.
        </p>
      </div>
      <ul className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ventures.map((v) => (
          <li key={v.slug} className="m-carte m-grain p-6 m-arete">
            <span className="m-smcp text-xs m-ink-2 m-tnum">{v.order}</span>
            <p className="m-display text-2xl mt-3">{v.name}</p>
            <p className="m-smcp text-xs mt-2">{v.pole.fr}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* SECTION JALONS */}
    <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-20">
      <div className="col-span-12 md:col-span-4">
        <span className="m-display block text-5xl md:text-6xl leading-none opacity-25 m-onum" aria-hidden="true">02</span>
        <p className="m-smcp text-xs mt-2">Jalons</p>
      </div>
      <div className="col-span-12 md:col-span-8 m-gres-2 m-grain p-6 md:p-8">
        <table className="m-table">
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
                  <span className="m-tnum text-base normal-case tracking-normal">{d}</span>
                </th>
                <td className="text-base leading-relaxed pr-6 m-onum">{f}</td>
                <td className="num m-smcp text-xs m-ink-2">{n}</td>
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
      <div className="col-span-12 md:col-span-7 m-beton m-grain m-coffrage p-8 md:p-14">
        <div className="m-arete pl-6">
          <span className="m-smcp text-xs">{cao.pole.fr}</span>
          <h3 className="m-display mt-6" style={{ fontSize: 'clamp(2.369rem, 6vw, 4.209rem)' }}>
            {cao.name}
          </h3>
          <p className="mt-8 text-lg leading-relaxed max-w-xl">
            {cao.context.fr}
          </p>
          <p className="mt-4 m-smcp text-xs">
            {cao.incorporation?.fr}
          </p>
        </div>
        <div className="mt-10">
          <Cachet folio="02" />
        </div>
      </div>

      <aside className="col-span-12 md:col-span-5 m-carte m-grain p-8 md:p-10">
        <h4 className="m-smcp text-xs mb-6">Notice</h4>
        <dl className="text-base">
          {[
            ['Dénomination', cao.name],
            ['Statut', 'En cours d\u2019immatriculation'],
            ['Dépôt de capital', '27 juillet 2026'],
            ['Pôle', cao.pole.fr],
            ['Terrain', cao.operating.fr],
          ].map(([k, v]) => (
            <div key={k} className="py-3 border-b" style={{ borderColor: 'hsl(var(--m-text-on-gres-1) / 0.14)' }}>
              <dt className="m-smcp text-xs m-ink-2">{k}</dt>
              <dd className="mt-1 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm m-ink-2 leading-relaxed">
          Les champs non sourcés ne sont pas affichés. La notice ne comporte aucune donnée
          d'activité.
        </p>
      </aside>
    </div>

    {/* Coupe matière : rattachement au groupe */}
    <figure className="mt-8 m-gres-3 m-grain p-8 md:p-12">
      <svg viewBox="0 0 800 170" role="img" aria-label={`Coupe : rattachement de ${cao.name} au ${cao.pole.fr.toLowerCase()}`} className="w-full h-auto">
        <defs>
          <pattern id="m-hatch" width="7" height="7" patternTransform="rotate(-32)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="7" stroke="hsl(var(--m-text-on-gres-1))" strokeOpacity="0.24" strokeWidth="1" />
          </pattern>
        </defs>
        {[
          [140, 'Owl International'],
          [400, cao.pole.fr],
          [660, cao.name],
        ].map(([x, label], i) => (
          <g key={label as string}>
            <rect x={(x as number) - 92} y="58" width="184" height="52" fill={i === 2 ? 'url(#m-hatch)' : 'hsl(var(--m-grès-2))'} stroke="hsl(var(--m-text-on-gres-1))" strokeOpacity="0.4" />
            <line x1={(x as number) - 92} y1="58" x2={(x as number) - 92} y2="110" stroke="hsl(var(--m-laiton))" strokeWidth="2" />
            <text x={x as number} y="89" textAnchor="middle" fontSize="13" fill="hsl(var(--m-text-on-gres-1))" fontFamily="Inter, sans-serif">
              {label as string}
            </text>
          </g>
        ))}
        <line x1="48" y1="84" x2="752" y2="84" stroke="hsl(var(--m-text-on-gres-1))" strokeOpacity="0.25" strokeWidth="1" />
      </svg>
      <figcaption className="m-smcp text-xs mt-4 m-ink-2">
        Coupe matière - hachure = société en cours d’immatriculation, arête de laiton = lumière unique
      </figcaption>
    </figure>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 3 - Spécimen typographique
   ---------------------------------------------------------------- */
const Specimen = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-20 grid grid-cols-12 gap-6">
    <div className="col-span-12 md:col-span-7 m-carte m-grain p-8">
      <p className="m-smcp text-xs mb-6">Échelle - quarte juste 1.333</p>
      {[
        ['9.97rem', 'Aa'],
        ['5.61rem', 'Matière'],
        ['3.157rem', 'Deux pôles'],
        ['1.777rem', 'Une chaîne intégrée'],
        ['1rem', 'Corps de texte, lecture longue, papier chiffon.'],
      ].map(([size, txt]) => (
        <div key={size} className="border-b py-4" style={{ borderColor: 'hsl(var(--m-text-on-gres-1) / 0.14)' }}>
          <span className="m-smcp text-xs m-ink-2 m-tnum">{size}</span>
          <p className="m-display leading-none mt-2" style={{ fontSize: `min(${size}, 14vw)` }}>{txt}</p>
        </div>
      ))}
    </div>
    <div className="col-span-12 md:col-span-5 space-y-4">
      <div className="m-carte m-grain p-8">
        <p className="m-smcp text-xs mb-4">Chiffres</p>
        <p className="m-onum text-2xl">141 130 2023 2026 - elzéviriens (prose)</p>
        <p className="m-tnum text-2xl mt-3">141 130 2023 2026 - tabulaires (tableaux)</p>
      </div>
      <div className="m-beton m-grain p-8">
        <p className="m-smcp text-xs mb-4">Inversion</p>
        <p className="m-display text-4xl">La même page, retournée.</p>
        <p className="mt-4 text-sm leading-relaxed">
          Sur béton, le corps monte d'un cran optique et la graisse reste identique : c'est le
          fond qui change, jamais la fonte.
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
        ['Grès', '--m-grès', 'Fond général, papier épais'],
        ['Grès ombré', '--m-grès-3', 'Tableaux, coupes'],
        ['Béton coffré', '--m-beton', 'Blocs d\u2019autorité'],
        ['Laiton', '--m-laiton', 'Arête, accent rare'],
      ].map(([name, token, use]) => (
        <figure key={token} className="m-carte m-grain">
          <div className="h-28" style={{ background: `hsl(var(${token}))` }} />
          <figcaption className="p-4">
            <p className="m-smcp text-xs">{name}</p>
            <p className="text-sm m-ink-2 mt-1 leading-snug">{use}</p>
          </figcaption>
        </figure>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="m-carte m-grain p-8">
        <p className="m-smcp text-xs mb-4">Grain de papier</p>
        <div className="h-24 m-gres-3 m-grain" />
        <p className="text-sm m-ink-2 mt-4 leading-relaxed">Trame feTurbulence (0.82 / 2 octaves / stitch). Voile 0,07 sur grès, 0,09 sur béton, 0,05 en 1x et sur mobile, masqué à l’impression.</p>
      </div>
      <div className="m-carte m-grain p-8">
        <p className="m-smcp text-xs mb-4">Reliefs</p>
        <div className="space-y-3">
          {['--m-elev-1', '--m-elev-2', '--m-elev-3'].map((s) => (
            <div key={s} className="h-8 m-gres-2" style={{ boxShadow: `var(${s})` }} />
          ))}
        </div>
        <p className="text-sm m-ink-2 mt-4 leading-relaxed">Lumière zénithale unique : décalage x = 0 sur les trois élévations, ombre encre teintée, aucun bevel ni creux simulé.</p>
      </div>
      <div className="m-beton m-grain m-coffrage p-8">
        <p className="m-smcp text-xs mb-4">Coffrage</p>
        <div className="h-24 m-beton-2 m-coffrage" />
        <p className="text-sm mt-4 leading-relaxed">
          Marques de banches tous les 8,5 rem : la structure du grid rendue visible dans la matière.
        </p>
      </div>
    </div>
  </div>
);

/* ----------------------------------------------------------------
   PIÈCE 5 - Manifeste et signatures
   ---------------------------------------------------------------- */
const Manifeste = () => (
  <div className="max-w-[92rem] mx-auto px-6 md:px-12 pb-24 grid grid-cols-12 gap-6">
    <div className="col-span-12 md:col-span-7 m-carte m-grain p-8 md:p-12">
      <h3 className="m-smcp text-xs mb-6">Manifeste - dix lignes</h3>
      <ol className="space-y-3 text-base leading-relaxed m-onum list-decimal pl-5">
        <li>La matière porte l'autorité ; l'effet ne la porte jamais.</li>
        <li>Une seule source de lumière, zénithale, sur tout le site.</li>
        <li>Trois matières et pas une de plus : grès, béton coffré, laiton.</li>
        <li>Le laiton est un accent, jamais une surface.</li>
        <li>Le grain est en CSS : aucune image ne pèse pour un décor.</li>
        <li>Aucun flou d'arrière-plan, jamais - solides et opacités seulement.</li>
        <li>Une plaque par société, même épaisseur pour toutes.</li>
        <li>Les chiffres de prose sont elzéviriens, ceux des tableaux tabulaires.</li>
        <li>Aucun fait sans date ; aucun chiffre sans dépôt.</li>
        <li>La page se pose, elle ne glisse pas.</li>
      </ol>
    </div>

    <div className="col-span-12 md:col-span-5 m-gres-2 m-grain p-8">
      <h3 className="m-smcp text-xs mb-6">Les trois signatures</h3>
      <div className="space-y-8">
        <div>
          <Folio n="03" label="folio-chouette" />
          <p className="text-sm mt-3 leading-relaxed m-ink-2">
            Conservé tel quel : deux disques (les yeux) séparés par l'incision du bec, numéro en
            elzéviriens tabulaires.
          </p>
        </div>
        <div>
          <Cachet folio="03" />
          <p className="text-sm mt-3 leading-relaxed m-ink-2">
            Conservé tel quel : bandeau typographique scellant chaque page - lieu, année
            d'immatriculation, folio, sceau.
          </p>
        </div>
        <div>
          <div className="m-beton m-grain p-6 m-arete pl-6">
            <p className="m-display text-3xl">L'arête de laiton</p>
          </div>
          <p className="text-sm mt-3 leading-relaxed m-ink-2">
            Propre à Matière : un filet de laiton de 4,5 rem descend sur l'arête gauche de chaque
            bloc d'autorité, tracé en 640 ms. Deux par écran au maximum, déjà tracé en
            reduced-motion.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Direction2 = () => {
  useSEO({
    title: 'Studio - Direction 2 · Matière',
    description: 'Dossier de direction artistique interne.',
    noindex: true,
  });

  return (
    <div className="dir-matiere min-h-screen">
      <header className="max-w-[92rem] mx-auto px-6 md:px-12 pt-16 pb-12">
        <p className="m-smcp text-xs">
          Dossier de direction artistique · interne · non indexé
        </p>
        <h1 className="m-display mt-6" style={{ fontSize: 'clamp(2.986rem, 11vw, 9.97rem)' }}>
          Matière
        </h1>
        <p className="mt-6 text-lg max-w-2xl m-onum leading-relaxed">
          L'intensité par la surface. Cinq pièces : accueil, fiche venture, spécimen, planche
          matière, manifeste.
        </p>
      </header>

      <Piece n="01" title="Maquette d'accueil" intent="Hero béton, plaques du portefeuille, jalons">
        <MaquetteAccueil />
      </Piece>
      <Piece n="02" title={`Fiche venture - ${cao.name}`} intent="Notice et coupe matière, données de production">
        <FicheVenture />
      </Piece>
      <Piece n="03" title="Spécimen typographique" intent="Échelle 1.333, chiffres, inversion sur béton">
        <Specimen />
      </Piece>
      <Piece n="04" title="Planche matière et couleur" intent="Grès, béton, laiton, reliefs, grain CSS">
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

export default Direction2;
