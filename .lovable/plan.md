# Déplacement de la PL. VIII et retrait de la PL. VII

## Ce qui change pour le lecteur

1. **La planche d'implantation quitte /groupe** et rejoint la fiche CAO Industries, juste après la coupe (PL. I). La page Groupe se termine désormais sur la lettre du Président.
2. **La planche n'évoque plus une « usine OWL-1 »** : elle devient le plan d'implantation d'une usine agro-industrielle type, clé en main, telle que CAO Industries en réalise pour ses clients. Mention CONCEPT conservée.
3. **La planche VII (schéma de flux du groupe) disparaît du site public.** Elle est retirée de l'accueil et tous les renvois qui pointaient vers elle sont supprimés. Le fichier reste dans le code, non publié, pour un usage interne ultérieur.
4. **Le dossier reste techniquement vrai** : plus aucune mention d'un site OWL-1 inexistant, plus aucun renvoi vers une planche absente.

## Ce qui est touché, planche par planche

| Élément | Action |
|---|---|
| PL. VIII | Titre, sous-titre, description, cartouche : « usine de référence OWL-1 » → « usine agro-industrielle type, clé en main ». Renvoi « Centrale : PL. IX » conservé, renvoi coupe PL. I conservé (les deux restent vrais sur la fiche CAO). |
| PL. I | Titre du dessin : « L'unité industrielle OWL-1, coupe » → unité industrielle de référence, sans code OWL-1. |
| PL. IX | Sous-titre : versant de l'usine de référence (PL. I), sans OWL-1. |
| PL. IV, V, VI | Suppression des renvois « Modèle du groupe : PL. VII » (cartouches et sous-titres). |
| Cartouche | `VOL_I` : « DOSSIER OWL — VOL. I : USINE DE RÉFÉRENCE (CONCEPT) », sans OWL-1. |
| Index du cabinet | La série publiée passe de 9 à 8 planches : les mentions « PL. n/9 » des cartouches sont recalées sur la nouvelle numérotation d'index, sans renuméroter les chiffres romains des planches. |

## Détails techniques

- `src/pages/Groupe.tsx` : suppression du bloc `PlancheEnSituation numeral="VIII"`.
- `src/pages/ventures/Venture.tsx` : PL. VIII ajoutée sous la PL. I pour le slug `cao-industries`.
- `src/pages/Index.tsx` : suppression du bloc PL. VII et de la vignette qui l'introduit.
- `src/components/gravure/planches/index.ts` : PL. VII sortie de la série publiée (fichier conservé) ; `emplacement` de la PL. VIII → fiche CAO.
- `src/components/gravure/planches/i18n.ts` : titres/descriptions EN des PL. I, VIII, IX alignés ; entrée VII conservée mais inutilisée.
- `src/pages/studio/Lisibilite.tsx` : liste de contrôle mise à jour (VII retirée).
- Contrôles à repasser après modification : `planche-lisibilite-check` sur les planches publiées (deux largeurs), `micro-typo-check` FR/EN, `matiere-gel-check`, plus un grep interdisant « OWL-1 » et « PL. VII » dans le rendu public.
- Aucun chiffre financier introduit ; règle de confidentialité du cabinet inchangée.
- Mémoire projet mise à jour : PL. VII non publiée, PL. VIII rattachée à CAO, disparition du code OWL-1.

## Publication

Les modifications ne seront mises en ligne qu'à votre demande explicite (re-gel en vigueur).
