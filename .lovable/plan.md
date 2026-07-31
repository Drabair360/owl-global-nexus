## 0. Correction immédiate du filet vertical (première action, isolée)

Le filet or des héros est positionné en absolu à distance fixe du bord (`left-8`, `lg:left-24`) alors que le contenu vit dans un conteneur centré `max-w-6xl`. Entre ~768 px et ~1280 px, le texte atteint cette zone : le filet passe sous le titre et l'eyebrow.

Fichiers : `src/components/InstitutionalHero.tsx` (9 pages secondaires), `src/pages/Index.tsx` (accueil), contrôle sur `src/pages/ventures/Venture.tsx`.

- Ancrage sur la **gouttière du conteneur** : le filet devient une colonne de la grille centrée, plus une position absolue liée au bord de l'écran.
- Affichage **à partir de `xl` (≥ 1280 px) uniquement**, là où la marge est réellement libre. Masqué en dessous.
- Même traitement pour le filigrane de numéro de section s'il déborde.

**Recette : 5 largeurs (390 / 768 / 1024 / 1440 / 1920) × 10 routes**, capture Playwright + assertion géométrique : aucune intersection entre la boîte du filet et la boîte d'un nœud de texte. Livraison d'une planche de contrôle.

Rien d'autre ne bouge tant que la recette n'est pas verte.

---

## Pause d'intégration

Les chantiers A-E ne démarrent qu'après réception des conclusions de l'audit externe du site de production. Je les intégrerai au périmètre avant exécution.

---

## A. Typographie — migration complète au ratio 1.333

Condition retenue : **pas de coexistence d'échelles**.

- Recalcul intégral des tokens de `--text-xs` à `--text-display-xl` sur une base unique et un ratio 1.333 strict.
- **Suppression de toute taille hybride 1.25 résiduelle** : audit exhaustif de `tailwind.config.ts` (`fontSize`) et des CSS modulaires, plus grep de toutes les classes `text-[...]` arbitraires en composant. Zéro exception tolérée ; chaque valeur hors échelle est soit migrée, soit justifiée par écrit.
- Chiffres tabulaires (`tabular-nums`) systématiques sur KPI, dates, millésimes, numéros de section.
- Interlettrage par palier (serré en display, ouvert en micro-typo), petites capitales vraies pour les eyebrows.
- `text-wrap: balance` sur les titres, `pretty` sur les chapeaux ; veuves et orphelines éliminées.
- Espaces fines insécables et ligatures pour la ponctuation française.
- Contrôle de non-régression : diff visuel avant/après sur les 10 routes, contrastes AA revérifiés.

## B. Grille et rythme vertical

- Grille 12 colonnes unique, réellement lisible dans la composition : titres col. 1-6, textes col. 7-11, jamais deux blocs pleine largeur consécutifs.
- Rythme vertical base 8 px, hauteurs de section normalisées, respirations doublées entre chapitres.
- Alternance papier chaud / encre profonde entre sections pour donner du souffle au scroll.
- Filet or 1 px comme seul séparateur : aucune bordure grise, aucune ombre portée.

## C. Densité de preuve — données requises AVANT rédaction

Aucune ligne ne sera écrite avant votre retour. Barre de chiffres-clés **strictement limitée au set KPI fermé déjà arrêté** — aucun indicateur ajouté.

Liste des données manquantes à confirmer :
1. Valeur exacte de chaque KPI du set fermé, avec son millésime de référence.
2. Périmètre et statut de chacune des 3 ventures (AKOULA, CAOAGRO.COM, OWLOMA) : millésime, pôle de rattachement, statut, périmètre d'activité.
3. Dates exactes des entrées du Journal encore non datées.
4. Entité d'hébergement + adresse officielle (mentions légales) — placeholder maintenu en attendant.
5. Toute mention chiffrée souhaitée dans les pages `/groupe` et `/metiers`.

Tout champ sans source de votre part reste un `[PLACEHOLDER]` explicite et visible.

## D. Repérage latéral unifié (fusion imposée)

Les « chapitres collants » et la table des matières fixe existante **fusionnent en un seul dispositif de marge**. Un seul rail latéral, jamais deux.

- Composant unique remplaçant `StickyChapter` et la TOC actuelle.
- Contenu du rail : numéro de chapitre, titre de chapitre, **état actif** synchronisé au scroll (chapitre courant marqué par le filet or, les autres en retrait).
- Le rail sert aussi de navigation : clic = ancre vers le chapitre.
- Suppression effective de l'ancien dispositif redondant (fichiers et imports nettoyés).
- Accessible : liste sémantique, `aria-current`, parcours clavier complet, repli propre en mobile.
- Autres moments de signature conservés : seuil d'accueil synchronisé au dévoilement du premier filet, ligne d'horizon or continue au scroll. Aucune animation curseur, aucun diagramme décoratif.

## E. Finitions

- Focus dessiné (filet or 2 px, offset) au lieu de l'anneau par défaut.
- Sélection de texte, scrollbar, curseurs aux couleurs de la marque.
- `404` et états vides traités comme des pages à part entière.
- Feuille de style print : toute page sort comme un document institutionnel.
- Contrôle final : a11y AA, seuils Lighthouse maintenus, planche 1440/390 avec et sans `prefers-reduced-motion`.

---

## Séquence

1. **Filet vertical + recette 5×10** — maintenant.
2. Attente des conclusions de l'audit externe, intégration au périmètre.
3. A (typo, migration complète) → B (grille).
4. C, uniquement après réception des données listées ci-dessus.
5. D (rail unifié) → E (finitions) → planche de contrôle finale.
