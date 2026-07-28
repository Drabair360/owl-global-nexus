# Owl International - Achèvement + effet "Wow"

Tirets longs "—" remplacés par "-" partout (18 fichiers : pages, composants, i18n, SEO, index.html). Voici la suite.

## Reste du plan approuvé

### R1. Emails transactionnels Scouts (en attente sous-domaine)
- Sous-domaine d'envoi dédié (ex. `notify.internationalowl.com`) coexistant avec la messagerie root.
- Edge function `scout-application-notify` : notification à `contact@internationalowl.com` + accusé de réception FR/EN au candidat.
- Trigger DB sur `scout_applications` (insert).
- Templates HTML sobres (Playfair + Inter, filet or, signature Owl).

### R2. Contenus renforcés
- Fiches détaillées AKOULA, CAOAGRO.COM, OWLOMA : thèse, contexte, jalons, KPI factuels.
- Groupe : bio Arthur enrichie, gouvernance.
- Journal : 2-3 jalons antérieurs (constitution, premiers mandats).

### R3. i18n EN complet
- Audit clés manquantes, tonalité institutionnelle EN.
- Vérifier hreflang + sitemap alt-langue sur toutes les pages.

### R4. SEO institutionnel avancé
- JSON-LD `Person` (Arthur) sur Groupe, `BreadcrumbList` partout, `FAQPage` sur Approche/Métiers.
- Open Graph images dédiées par pilier.
- `sitemap.xml` avec `lastmod` réel, priorités affinées.
- Audit Lighthouse SEO/Perf/A11y ciblé.

---

## Montée "Wow" - direction éditoriale premium

Objectif : densité et tension d'un rapport annuel de holding (Lazard, Wendel, Eurazeo) plutôt qu'un site vitrine.

### W1. Système typographique dramatisé
- H1/H2 en `clamp()` plus radical (jusqu'à 96px desktop), kerning négatif serré.
- Display serif de contraste pour hero (Fraunces ou Instrument Serif) ; Playfair conservé sur H2.
- Numérotation section (01, 02...) en filigrane géant derrière contenu (parallax léger).
- Filets or 1px systématiques comme signature.

### W2. Hero d'accueil repensé
- Plein écran, fond encre `#0B0F1A`, titre editorial massif, sous-titre petites capitales espacées.
- Cartographie France-Afrique SVG animée au scroll (traits d'or) OU loop vidéo discret.
- Ligne "Paris - Abidjan - Douala" en bas de hero.

### W3. Scroll-driven storytelling
- Sections `sticky` : numéro chapitre figé à gauche pendant lecture.
- Reveal enrichi : split-text sur H2, images en `clip-path` qui s'ouvrent.
- Curseur custom discret (point + label contextuel).
- Marquee lente en pied de sections ("Ingénierie. Logiciel. Immobilier.").

### W4. Traitement image et data
- Portrait Arthur en duotone or/encre, pleine hauteur sur Groupe.
- Photos "matière" (chantier, béton, terre) N&B contrasté sur Métiers.
- Timeline Journal renforcée (courbe SVG animée reliant jalons).
- Carte France-Afrique interactive SVG (sans lib externe) sur Groupe.
- Composant `<KPI/>` : chiffres clés en très grande typo sur Approche et Engagements.

### W5. Palette et matière
- Noir encre `#0B0F1A` sur sections signature (plus profond que slate-950).
- Or Owl unifié via un seul token `--gold` (amber-400/500 aujourd'hui mélangés).
- Texture papier subtile (noise SVG 2%) sur fonds clairs.
- Liens : underline gradient or dessiné en 400ms `cubic-bezier(.2,.7,.2,1)`.

### W6. Navigation et transitions
- Navbar : compression au scroll (hauteur -30%, logo réduit) en transition fluide.
- Transitions de page : fondu + translate Y (Framer Motion ou View Transitions API).
- Menu mobile plein écran éditorial (liste numérotée, filets or, langue en bas).

### W7. Pages nouvelles
- Ventures dédiées : `/portefeuille/akoula`, `/portefeuille/caoagro`, `/portefeuille/owloma` (hero, thèse, jalons).
- Approche : Charte téléchargeable PDF.
- Contact : bloc adresse avec carte statique sobre (SVG Paris).

### W8. Performance et polish
- Préchargement fonts critiques, `display: swap`.
- Images AVIF + `<picture>` fallback JPG, lazy hors hero.
- CLS < 0.05, LCP < 2s.
- Audit contrastes AA/AAA sur tout texte or.

---

## Ordre proposé
1. **W1 + W5** - fondation visuelle (typo + palette or unifié) : impact immédiat.
2. **W2 + W6** - hero + navigation : premier "wow" visiteur.
3. **W3 + W4** - storytelling + traitement image : profondeur éditoriale.
4. **W7** - pages ventures : densité contenu.
5. **R2 + R3 + R4** - contenus, i18n, SEO avancé.
6. **R1** - emails Scouts dès sous-domaine fourni.
7. **W8** - perf finale avant relivraison.

Dis-moi par quel lot je commence - W1+W5 enchaînables tout de suite pour un saut visuel dès le prochain tour.
