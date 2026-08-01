/**
 * Filet de structure (repere de gouttiere, tokens v2 en sourdine -
 * a ne jamais confondre avec l'arete de laiton, qui est une signature M7) ancré sur la GOUTTIERE du conteneur centré (max-w-6xl),
 * et non sur le bord du viewport. Affiché a partir de xl (>= 1280px) uniquement,
 * seule largeur ou la marge exterieure est reellement libre : en dessous, le texte
 * atteignait la zone du filet et se superposait a lui.
 */
const GutterRule = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
    <div className="relative mx-auto h-full w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <span className="absolute left-0 top-1/2 -ml-10 h-[40vh] w-px -translate-y-1/2"
        style={{ background: 'linear-gradient(hsl(var(--mat-laiton) / 0), hsl(var(--mat-laiton) / 0.38), hsl(var(--mat-laiton) / 0))' }} />
    </div>
  </div>
);

export default GutterRule;
