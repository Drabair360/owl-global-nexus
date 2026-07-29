# Vérification d'implémentation - Lots A → G

## Constat (vérifié par lecture directe)

**Lot A - Hero encre + EST. 2023** ✓
- `InstitutionalCursor.tsx` et `HeroCartography.tsx` supprimés (absents du repo)
- `src/pages/Index.tsx` : hero ink pur, aucun em-dash dans le contenu affiché

**Lot B - Système de design** ✓
- `src/index.css` : `--font-display` et `--font-heading` = `'Instrument Serif'` (Playfair en fallback)
- Tokens or (`--gold`, `--gold-deep`, `--gold-soft`), `::selection` or/encre, `:focus-visible` ring or 2px
- Composants présents : `EditorialGrid.tsx`, `SectionPagination.tsx`, `KPI.tsx`

**Lot C - Textures cinéma** ✓
- `src/assets/textures.ts` présent (concrete, stone, metal, light, paris-rooftops)

**Lot D - 5 pages ventures** ✓
- `src/pages/ventures/Venture.tsx` + `data.ts`
- Route dans `src/App.tsx` : `/portefeuille/:slug` (template unique, pas 5 routes en dur - conforme au plan)

**Lot E - 404 + états Scout** ✓
- `src/pages/NotFound.tsx` présent
- Clés i18n FR/EN : `scouts.form.sending`, `.success`, `.error`, `.successTitle`, `.successBody`, `.successAgain`, `.errorTitle`

**Lot F - Heros harmonisés** ✓
- `InstitutionalHero` utilisé sur : Approche, Scouts, Rejoindre, Portefeuille, Groupe, Metiers, Contact, Journal, Engagements (9/9)

**Lot G - Micro-interactions** ✓
- `SectionPagination.tsx` : `scaleX 0→1`, `cubic-bezier(0.16,1,0.3,1)` 900ms, cascade opacity 200ms/320ms, respect `prefers-reduced-motion`
- Focus-visible or global actif
- Unification `Instrument Serif` sur `font-display` + `font-heading`

## Écart mineur détecté

Un seul em-dash résiduel dans tout le repo : `src/pages/Index.tsx:34`, à l'intérieur d'un commentaire JSX (`{/* HERO — encre pur */}`). Invisible pour l'utilisateur, mais contredit la consigne « tous les — remplacés par - de bout en bout ».

## Correction proposée (micro-patch)

- Remplacer le `—` par `-` dans le commentaire `src/pages/Index.tsx:34`

Aucune autre action nécessaire : les Lots A→G sont livrés conformément au plan approuvé.
