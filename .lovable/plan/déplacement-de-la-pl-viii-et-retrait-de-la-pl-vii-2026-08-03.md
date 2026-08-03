# Déplacement de la PL. VIII et retrait de la PL. VII

## Arbitrage de l'emplacement (point 1)

Mesures relevées sur les deux pages en 1280 px :

| Page | Hauteur | Planches déjà présentes |
|---|---|---|
| Fiche CAO Industries | 5 171 px | PL. I + son détail FIG. 2 (deux figures gravées) |
| /metiers | 3 857 px | PL. II seule, en clôture de page |

- **Option A — fiche CAO, en clôture après le registre.** Tenable, mais la page passerait à ~7 000 px avec trois figures gravées : la coupe, son détail au trait, puis un plan masse dense. La règle « une planche maîtresse par page » serait respectée à la lettre et violée à l'esprit.
- **Option B — /metiers, aux côtés de la PL. II (retenue).** La page est la plus courte du site et se termine déjà sur une planche unique, avec une large respiration avant elle. Surtout, le cartouche de la PL. II porte déjà le renvoi « Implantation générale : PL. VIII » : le renvoi devient vérifiable sur la même page, et le cycle de vie EPC (avant-projet → maintenance) trouve son pendant en plan. La fiche CAO reste sur une planche maîtresse et son détail.

**Décision : la PL. VIII part sur /metiers**, posée après la PL. II, séparée par une respiration pleine section, chacune gardant sa légende propre.

## Ce qui change pour le lecteur

1. La planche d'implantation quitte /groupe (la page se termine désormais sur la lettre du Président) et rejoint /metiers, sous le cycle de vie.
2. Elle n'évoque plus une « usine OWL-1 » : plan d'implantation d'une **usine agro-industrielle type, clé en main**, telle que CAO Industries en réalise pour ses clients. Mention CONCEPT conservée.
3. La **PL. VII disparaît du site public** : retirée de l'accueil, tous les renvois qui pointaient vers elle sont supprimés. Le fichier reste dans le code, non publié.
4. Le dossier reste techniquement vrai : aucun site OWL-1 inexistant, aucun renvoi vers une planche absente.

## Ce qui est touché, planche par planche

| Élément | Action |
|---|---|
| PL. VIII | Titre, sous-titre, description FR et EN, cartouche : « usine de référence OWL-1 » → « usine agro-industrielle type, clé en main ». Renvois PL. I et PL. IX conservés (vrais). |
| PL. I | Titre du dessin : « L'unité industrielle OWL-1, coupe » → unité industrielle de référence, sans code. |
| PL. II | Renvoi « Implantation générale : PL. VIII » conservé, désormais vérifiable sur la même page ; mention OWL-1 du bandeau de dossier retirée. |
| PL. IX | Sous-titre : versant de l'usine de référence (PL. I), sans OWL-1. |
| PL. IV, V, VI | Suppression des renvois « Modèle du groupe : PL. VII » (cartouches et sous-titres). |
| Cartouche | `VOL_I` : « DOSSIER OWL - VOL. I : USINE DE RÉFÉRENCE (CONCEPT) ». |
| Index | **« PL. n/9 » inchangé** : le dossier reste une série de neuf planches dont une n'est pas publiée. Aucune renumérotation. |

## Détails techniques

- `src/pages/Groupe.tsx` : suppression du bloc PL. VIII.
- `src/pages/Metiers.tsx` : PL. VIII ajoutée après la PL. II, section de respiration entre les deux.
- `src/pages/Index.tsx` : suppression du bloc PL. VII et de la vignette qui l'introduit.
- `src/components/gravure/planches/index.ts` : PL. VII marquée hors publication (fichier conservé, non rendue) ; `emplacement` de la PL. VIII → `/metiers`.
- `src/components/gravure/planches/i18n.ts` : descriptions d'accessibilité EN des PL. I, II, VIII, IX relues ligne à ligne (« reference unit », plus aucun code de site) ; entrée VII conservée, inutilisée.
- Balises `<desc>` et `<title>` internes des SVG passées au crible pour la même chaîne.
- `src/pages/studio/Lisibilite.tsx` : liste de contrôle sans VII.
- **Grep doctrine** : ajout permanent de « OWL-1 » (et « PL. VII » dans le rendu public) à la liste des chaînes interdites, aux côtés des entités fictives — contrôle joué à chaque autocritique de lot.
- Contrôles repassés : `planche-lisibilite-check` (planches publiées, deux largeurs), `micro-typo-check` FR + EN, `matiere-gel-check`, console 0 erreur.
- Mémoire projet : PL. VII existe **hors publication** (à conserver telle quelle pour une publication éventuelle), PL. VIII rattachée à /metiers, « OWL-1 » interdit, index n/9 figé.

## Publication

Rien n'est mis en ligne : les modifications restent en préversion jusqu'à votre validation.
