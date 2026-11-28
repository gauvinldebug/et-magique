---
titre: L'évolution des génomes au sein des populations
court: Évolution des populations
description: Fréquences alléliques, modèle de Hardy-Weinberg, dérive génétique, sélection naturelle, migrations et spéciation, expliqués avec un sac de billes qu'on retire à chaque génération. Exercices corrigés. Terminale spécialité SVT.
ordre: 3
publie: 2026-11-28T11:03:00
video:
  youtube: ""
piege: "**Le modèle de Hardy-Weinberg ne décrit pas ce qui se passe dans la nature : il décrit ce qui se passerait si rien ne se passait.** Un écart à ses prévisions est justement le signe qu'une force évolutive agit (sélection, dérive, migration, mutation, choix du partenaire)."
pdf:
  cours: /pdf/svt/terminale/evolution-des-populations-cours.pdf
  fiche: /pdf/svt/terminale/evolution-des-populations-fiche.pdf
  exercices: /pdf/svt/terminale/evolution-des-populations-exercices.pdf
suivant: autres-mecanismes-de-diversite
---

## Le problème

Dans une population, les allèles d'un gène n'ont pas tous la même fréquence, et ces fréquences changent au fil des générations. Pourquoi ? Et que se passerait-il si rien ne les faisait changer ?

## L'idée : le sac de billes

Une population, c'est un grand sac de billes de couleurs : chaque bille est un allèle. À chaque génération, on **tire des billes au hasard** pour remplir le sac suivant.

- Si le sac est **immense** et qu'on tire vraiment au hasard, les proportions de couleurs restent les mêmes : c'est l'**équilibre de Hardy-Weinberg**.
- Si le sac est **petit**, le hasard du tirage fait varier les proportions, et une couleur peut même disparaître : c'est la **dérive génétique**.
- Si une main **choisit** de préférence certaines couleurs, les proportions changent dans une direction : c'est la **sélection naturelle**.

## Fréquences et modèle de Hardy-Weinberg

Pour un gène à deux allèles $A$ et $a$, de fréquences $p$ et $q$ avec $p + q = 1$ :

<div class="encadre">

Dans une population **théorique** (très grande, panmictique, sans sélection, mutation ni migration), les fréquences alléliques restent **constantes** de génération en génération, et les génotypes ont pour fréquences

$$
f(AA) = p^2 \qquad f(Aa) = 2pq \qquad f(aa) = q^2
$$

</div>

On calcule $p$ à partir des génotypes observés : $p = f(AA) + \dfrac{f(Aa)}{2}$. Si les fréquences observées s'éloignent nettement de $p^2$, $2pq$, $q^2$, la population n'est pas à l'équilibre : une force évolutive agit.

## La dérive génétique

<div class="encadre">

La **dérive génétique** est la variation **aléatoire** des fréquences alléliques d'une génération à l'autre, due au hasard de la transmission des allèles.

</div>

<mark>Elle est d'autant plus forte que la population est petite.</mark> Elle peut conduire à la **fixation** d'un allèle (fréquence 1) ou à sa **disparition**, même s'il ne présente ni avantage ni désavantage. Un **effet fondateur** (quelques individus colonisent une île) ou un **goulot d'étranglement** (une catastrophe réduit la population) l'accentuent.

<div class="labo" data-labo="derive"></div>

## La sélection naturelle

Si un allèle augmente la **survie** ou la **reproduction** de ses porteurs dans un milieu donné, ses porteurs laissent plus de descendants : sa fréquence augmente. La sélection est **orientée** par le milieu, contrairement à la dérive.

Exemple : la phalène du bouleau. Pendant la révolution industrielle, les troncs noircis par la suie favorisaient les papillons sombres, moins visibles par les oiseaux : la forme sombre est devenue majoritaire, puis a reculé quand l'air s'est assaini.

## Les autres forces

- **Mutations** : elles créent de nouveaux allèles, mais modifient très lentement les fréquences.
- **Migrations** : l'arrivée d'individus d'une autre population apporte ses fréquences alléliques.
- **Choix du partenaire** (population non panmictique) : il modifie les fréquences des génotypes.

## La spéciation

Quand deux populations d'une même espèce sont **isolées** (barrière géographique, comportement, période de reproduction différente), elles accumulent des différences génétiques par dérive et sélection. Si elles ne peuvent plus produire de descendants fertiles ensemble, elles forment **deux espèces**.

Une espèce est donc une population d'individus qui peuvent se reproduire entre eux et dont les descendants sont fertiles. Cette définition a ses limites (bactéries, espèces fossiles, hybrides).

## Les pièges

- $p + q = 1$ pour les allèles, $p^2 + 2pq + q^2 = 1$ pour les génotypes.
- La dérive est **aléatoire**, la sélection est **orientée** par le milieu.
- La dérive est forte dans les **petites** populations.
- Hardy-Weinberg est un modèle de référence, pas une description du réel.
