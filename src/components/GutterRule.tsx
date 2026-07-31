/**
 * Filet or vertical ancré sur la GOUTTIERE du conteneur centré (max-w-6xl),
 * et non sur le bord du viewport. Affiché a partir de xl (>= 1280px) uniquement,
 * seule largeur ou la marge exterieure est reellement libre : en dessous, le texte
 * atteignait la zone du filet et se superposait a lui.
 */
const GutterRule = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
    <div className="relative mx-auto h-full w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <span className="absolute left-0 top-1/2 -ml-10 h-[40vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
    </div>
  </div>
);

export default GutterRule;
