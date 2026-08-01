import React from 'react';
import { useSEO } from '@/hooks/useSEO';
import { ventures } from '@/pages/ventures/data';
import '@/studio/gravure.css';
import '@/studio/matiere.css';
import '@/studio/verre.css';

/* =================================================================
   COMPARATIF DES TROIS DIRECTIONS ARTISTIQUES
   Route privée, non liée, noindex. Les trois heros sont reproduits
   côte à côte avec leurs tokens scopés respectifs (.dir-gravure,
   .dir-matiere, .dir-verre) : aucune fuite vers la production.
   Toutes les données proviennent de src/pages/ventures/data.ts et
   du set de faits datés déjà publié.
   ================================================================= */

const cao = ventures.find((v) => v.slug === 'cao-industries')!;
const BASELINE = "Owl International détient et construit des sociétés entre la France et l'Afrique. Cinq sociétés, dont quatre en cours de constitution.";
const DERNIER_FAIT = `27 juillet 2026 - dépôt de capital de ${cao.name}.`;

/* ---------------- Hero 1 - Gravure (réduit) ---------------- */
const HeroGravure = () => (
  <div className="dir-gravure">
    <div className="g-ink-surface g-burin relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-12 gap-x-4 px-6 pt-10 pb-8 min-h-[22rem]">
        <div className="col-span-2 flex flex-col justify-between">
          <span className="g-smcp text-xs" style={{ color: 'hsl(var(--g-gold-lit))' }}>Holding</span>
          <span className="g-smcp text-xs opacity-60 g-tnum">Est. 2023</span>
        </div>
        <div className="col-span-10 self-center">
          <h3 className="g-display" style={{ fontSize: 'clamp(1.777rem, 3.4vw, 3.157rem)' }}>
            <span className="block">Cinq sociétés,</span>
            <span className="block pl-[8%]">deux <span className="g-incision">pôles</span>,</span>
            <span className="block italic pl-[18%]">une même exigence.</span>
          </h3>
        </div>
        <div className="col-span-12 mt-8 self-end">
          <p className="text-sm leading-relaxed g-onum" style={{ color: 'hsl(var(--g-paper) / 0.78)' }}>
            {BASELINE}
          </p>
        </div>
      </div>
      <div className="relative z-10 px-6 pb-5">
        <div className="g-cachet g-smcp">
          <span className="g-cachet-seal">Registre Owl</span>
          <span>Paris</span>
          <span>Folio 01</span>
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- Hero 2 - Matière (réduit) ---------------- */
const HeroMatiere = () => (
  <div className="dir-matiere">
    <div className="m-beton m-grain m-coffrage relative">
      <div className="relative z-10 px-6 pt-10 pb-8 min-h-[22rem] flex flex-col justify-center">
        <div className="m-arete pl-6">
          <span className="m-smcp text-xs" style={{ color: 'hsl(var(--m-laiton-lit))' }}>
            Holding · Paris · Est. 2023
          </span>
          <h3 className="m-display m-pose mt-6" style={{ fontSize: 'clamp(1.777rem, 3.4vw, 3.157rem)' }}>
            Cinq sociétés, deux pôles,
            <br />
            une même exigence.
          </h3>
          <p className="mt-6 text-sm leading-relaxed m-onum" style={{ color: 'hsl(var(--m-grès) / 0.78)' }}>
            {BASELINE}
          </p>
        </div>
        <div className="mt-8 m-beton-2 m-grain p-4 m-encastre">
          <p className="m-smcp text-xs" style={{ color: 'hsl(var(--m-laiton-lit))' }}>Dernier fait daté</p>
          <p className="mt-2 text-sm" style={{ color: 'hsl(var(--m-grès) / 0.86)' }}>{DERNIER_FAIT}</p>
        </div>
      </div>
      <div className="relative z-10 px-6 pb-5">
        <div className="m-cachet m-smcp">
          <span className="m-cachet-seal">Registre Owl</span>
          <span>Paris</span>
          <span>Folio 01</span>
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- Hero 3 - Verre sombre (réduit) ---------------- */
const HeroVerre = () => (
  <div className="dir-verre">
    <div className="v-panneau v-feuille relative">
      <div className="relative z-10 px-6 pt-10 pb-8 min-h-[22rem] flex flex-col justify-center">
        <div className="v-tranche">
          <span className="v-smcp text-xs" style={{ color: 'hsl(var(--v-champagne))' }}>
            Holding · Paris · Est. 2023
          </span>
          <h3 className="v-display v-lever mt-6" style={{ fontSize: 'clamp(1.777rem, 3.4vw, 3.157rem)' }}>
            Cinq sociétés, deux pôles,
            <br />
            une même exigence.
          </h3>
          <p className="mt-6 text-sm leading-relaxed v-onum" style={{ color: 'hsl(var(--v-verre-2))' }}>
            {BASELINE}
          </p>
        </div>
        <div className="mt-8 v-panneau-2 p-4">
          <p className="v-smcp text-xs" style={{ color: 'hsl(var(--v-champagne))' }}>Dernier fait daté</p>
          <p className="mt-2 text-sm" style={{ color: 'hsl(var(--v-verre-2))' }}>{DERNIER_FAIT}</p>
        </div>
      </div>
      <div className="relative z-10 px-6 pb-5">
        <div className="v-cachet v-smcp">
          <span className="v-cachet-seal">Registre Owl</span>
          <span>Paris</span>
          <span>Folio 01</span>
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- Manifestes ---------------- */
const MANIFESTES: { key: string; nom: string; route: string; risque: string; lignes: string[] }[] = [
  {
    key: 'gravure',
    nom: 'Gravure',
    route: '/studio/direction-1',
    risque: "L'austérité peut paraître froide sur mobile, où le display se replie.",
    lignes: [
      "Gravure affirme que l'institution se lit avant de se regarder.",
      "La hiérarchie ne tient qu'à la taille : ni couleur, ni ombre, ni cadre.",
      'Display monumental à interlettrage optique négatif.',
      'Compositions asymétriques : le titre décroche de la grille, jamais le texte.',
      "L'or devient incision : trois traits par page au maximum.",
      'Lettrines et grands folios elzéviriens comme rythme de lecture.',
      'Tableaux de registre en lieu et place des cartes.',
      "Conserve la doctrine de preuve, le set KPI fermé, l'encre et le papier chaud.",
      'Aucun fait sans date ; aucun chiffre sans dépôt.',
      "Test du souvenir : « le site où les dates sont gravées comme sur un acte ».",
    ],
  },
  {
    key: 'matiere',
    nom: 'Matière',
    route: '/studio/direction-2',
    risque: 'Le contraste sur béton demande un réglage AA fin si la direction est retenue.',
    lignes: [
      "La matière porte l'autorité ; l'effet ne la porte jamais.",
      'Une seule source de lumière, zénithale, sur tout le site.',
      'Trois matières et pas une de plus : grès, béton coffré, laiton.',
      'Le laiton est un accent, jamais une surface.',
      'Le grain est en CSS : aucune image ne pèse pour un décor.',
      "Aucun flou d'arrière-plan, jamais - solides et opacités seulement.",
      'Une plaque par société, même épaisseur pour toutes.',
      'Les chiffres de prose sont elzéviriens, ceux des tableaux tabulaires.',
      'Aucun fait sans date ; aucun chiffre sans dépôt.',
      'La page se pose, elle ne glisse pas.',
    ],
  },
  {
    key: 'verre',
    nom: 'Verre sombre',
    route: '/studio/direction-3',
    risque: "Le nocturne vieillit vite : une teinte d'accent de trop suffit à le faire basculer.",
    lignes: [
      "La nuit est un fond, pas un effet : on baisse la lumière, on n'ajoute pas de lueur.",
      "Une seule teinte d'accent, champagne froid, en filet et jamais en aplat.",
      "Le blanc s'arrête à 92 % : aucun texte à luminosité maximale.",
      "La translucidité se joue en solides superposés - aucun flou d'arrière-plan.",
      'Quatre plans de profondeur au maximum, séparés au liseré de 1px.',
      "Un éclat par écran : l'arête haute du panneau principal.",
      'Aucun dégradé sur un mot, un chiffre ou un pictogramme.',
      'Les tableaux sont tabulaires, la prose est elzévirienne.',
      'Le mouvement passe une fois et ne revient pas : rien ne clignote.',
      'Référence : une salle de conseil la nuit, jamais un écran de marché.',
    ],
  },
];

const Comparatif = () => {
  useSEO({
    title: 'Studio - Comparatif des trois directions',
    description: 'Arbitrage interne des directions artistiques.',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="max-w-[100rem] mx-auto px-6 md:px-12 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Arbitrage · interne · non indexé
        </p>
        <h1 className="mt-6 font-display" style={{ fontSize: 'clamp(2.986rem, 8vw, 5.61rem)', lineHeight: 0.95 }}>
          Trois directions, une décision
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-muted-foreground leading-relaxed">
          Les trois heros dans les mêmes conditions - même titre, même baseline, même fait daté -
          puis les trois manifestes en regard.
        </p>
      </header>

      {/* Trois heros côte à côte */}
      <section className="max-w-[100rem] mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-6">
          Les trois heros
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {[
            ['Direction 1 - Gravure', '/studio/direction-1', <HeroGravure key="g" />],
            ['Direction 2 - Matière', '/studio/direction-2', <HeroMatiere key="m" />],
            ['Direction 3 - Verre sombre', '/studio/direction-3', <HeroVerre key="v" />],
          ].map(([label, href, node]) => (
            <figure key={label as string}>
              {node as React.ReactNode}
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label as string}</span>
                <a href={href as string} className="text-xs underline underline-offset-4">Dossier complet</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Trois manifestes */}
      <section className="max-w-[100rem] mx-auto px-6 md:px-12 pb-24 border-t border-border pt-12">
        <h2 className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-8">
          Les trois manifestes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {MANIFESTES.map((m) => (
            <article key={m.key} className="border border-border p-6">
              <h3 className="font-display text-3xl">{m.nom}</h3>
              <a href={m.route} className="text-xs underline underline-offset-4 text-muted-foreground">
                {m.route}
              </a>
              <ol className="mt-6 space-y-3 text-sm leading-relaxed list-decimal pl-5">
                {m.lignes.map((l) => <li key={l}>{l}</li>)}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                <span className="uppercase tracking-[0.16em] text-xs">Risque - </span>
                {m.risque}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Comparatif;
