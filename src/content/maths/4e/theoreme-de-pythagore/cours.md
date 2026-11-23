---
titre: Le théorème de Pythagore et sa réciproque
court: Théorème de Pythagore
description: Le théorème de Pythagore pour calculer une longueur dans un triangle rectangle, la racine carrée, la réciproque pour prouver qu'un triangle est rectangle, expliqués avec un puzzle de carrés et une corde à nœuds, avec des exercices corrigés pas à pas. 4e maths.
ordre: 4
publie: 2026-11-23T01:13:00
video:
  youtube: ""
piege: >-
  **L'hypoténuse est toujours le côté en face de l'angle droit, et c'est elle qui est seule.** $BC^2 = AB^2 + AC^2$ si l'angle droit est en $A$. Si on se trompe de côté, le résultat est faux sans qu'on s'en aperçoive.
pdf:
  cours: /pdf/maths/4e/theoreme-de-pythagore-cours.pdf
  fiche: /pdf/maths/4e/theoreme-de-pythagore-fiche.pdf
  exercices: /pdf/maths/4e/theoreme-de-pythagore-exercices.pdf
suivant: introduction-aux-fonctions
---

## Le problème

Un parc rectangulaire mesure 120 m de long et 50 m de large. Pour aller d'un coin au coin opposé, Inès longe les bords. Hugo, lui, coupe en diagonale. Combien de mètres Hugo gagne-t-il ?

## L'idée : le puzzle des carrés

Dessine un triangle rectangle, puis construis un carré sur chacun de ses trois côtés. Miracle : les deux petits carrés, découpés en morceaux, **remplissent exactement** le grand carré, celui construit sur le plus grand côté.

C'est le théorème de Pythagore : **l'aire du grand carré est la somme des aires des deux petits**. Et un carré construit sur un côté de longueur $a$ a pour aire $a^2$.

## Le vocabulaire

<div class="encadre">

Dans un triangle rectangle, le côté **opposé à l'angle droit** s'appelle l'**hypoténuse**. C'est le plus long des trois côtés.

</div>

## Le théorème de Pythagore

<div class="encadre">

Si le triangle $ABC$ est **rectangle en $A$**, alors
$$\cbleu{BC^2} = \corange{AB^2} + \corange{AC^2}.$$
Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.

</div>

**La racine carrée** : si $BC^2 = 25$, alors $BC = \sqrt{25} = 5$ (une longueur est positive). La touche $\sqrt{\ }$ de la calculatrice donne une valeur exacte ou approchée.

**Calculer l'hypoténuse** : on **additionne** les carrés. **Calculer un autre côté** : on **soustrait**. Exemple : hypoténuse 10, un côté 6, l'autre vaut $\sqrt{100 - 36} = \sqrt{64} = 8$.

## La réciproque

<div class="encadre">

Dans un triangle $ABC$ dont $[BC]$ est le plus grand côté :

- si $BC^2 = AB^2 + AC^2$, alors le triangle est **rectangle en $A$** (réciproque) ;
- si $BC^2 \ne AB^2 + AC^2$, alors le triangle **n'est pas rectangle** (contraposée).

</div>

Les bâtisseurs de l'Antiquité utilisaient une **corde à 13 nœuds** régulièrement espacés : en formant un triangle de côtés 3, 4 et 5 intervalles, ils obtenaient un angle droit parfait, car $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.

**Méthode** : on calcule séparément le carré du plus grand côté, et la somme des carrés des deux autres, puis on compare.

## Retour au problème

Le parc est un rectangle : la diagonale est l'hypoténuse d'un triangle rectangle de côtés 120 m et 50 m.

$$
d^2 = 120^2 + 50^2 = 14\,400 + 2\,500 = 16\,900 \quad \text{donc} \quad d = \sqrt{16\,900} = 130
$$

Inès parcourt $120 + 50 = 170$ m, Hugo 130 m. <mark>Hugo gagne 40 m</mark>.

En 3e, la [trigonométrie](/maths/3e/trigonometrie/cours/) permet de calculer des longueurs dans un triangle rectangle quand on connaît un angle.
