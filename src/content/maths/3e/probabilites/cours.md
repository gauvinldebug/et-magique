---
titre: Les probabilités
court: Probabilités
description: Expérience aléatoire, issues, événements, calcul de probabilités, événement contraire, expériences à deux épreuves avec un arbre, fréquence et probabilité, expliqués avec une roue de loterie, avec des exercices corrigés type brevet. 3e maths.
ordre: 6
publie: 2026-11-23T01:05:00
video:
  youtube: ""
piege: >-
  **Une issue n'est pas toujours aussi probable qu'une autre.** Sur une roue où le secteur rouge est deux fois plus grand que le bleu, « rouge » et « bleu » sont deux issues, mais elles n'ont pas la même probabilité. On ne compte des cas favorables que si toutes les issues ont la même chance.
pdf:
  cours: /pdf/maths/3e/probabilites-cours.pdf
  fiche: /pdf/maths/3e/probabilites-fiche.pdf
  exercices: /pdf/maths/3e/probabilites-exercices.pdf
suivant: equations-et-inequations
---

## Le problème

À la fête de l'école, une roue est partagée en 8 secteurs identiques : 1 secteur « gagné », 3 secteurs « bonbon » et 4 secteurs « perdu ». On tourne la roue deux fois. Quelle est la probabilité de gagner au moins une fois ?

## L'idée : la roue de loterie

Une roue de loterie, c'est le modèle parfait du hasard :

- on sait **tout ce qui peut arriver** (les secteurs) ;
- on ne sait **pas ce qui va arriver** cette fois-ci ;
- mais on sait **à quel point** chaque résultat a des chances de sortir : la taille de son secteur.

La **probabilité** d'un résultat, c'est la part de la roue qu'il occupe.

## Le vocabulaire

<div class="encadre">

- Une **expérience aléatoire** a plusieurs résultats possibles, qu'on ne peut pas prévoir : les **issues**.
- Un **événement** est un ensemble d'issues. Il est réalisé si l'issue obtenue en fait partie.
- La **probabilité** d'un événement est un nombre entre **0** (impossible) et **1** (certain).
- La somme des probabilités de toutes les issues vaut **1**.

</div>

## Calculer une probabilité

<div class="encadre">

Quand toutes les issues ont la **même probabilité** (on dit qu'elles sont **équiprobables**) :
$$P(\corange{A}) = \frac{\text{nombre d'issues favorables à } \corange{A}}{\text{nombre total d'issues}}.$$

L'**événement contraire** de $\corange{A}$, noté « non $\corange{A}$ », est réalisé quand $\corange{A}$ ne l'est pas :
$$P(\text{non } \corange{A}) = 1 - P(\corange{A}).$$

</div>

Sur la roue : $P(\text{gagné}) = \frac{1}{8}$, $P(\text{bonbon}) = \frac{3}{8}$, $P(\text{perdu}) = \frac{4}{8} = \frac{1}{2}$. La somme fait bien 1.

## Les expériences à deux épreuves

Quand on tourne la roue **deux fois**, on dessine un **arbre** : une branche par issue au premier tour, puis une branche par issue au second tour. Sur chaque branche, on écrit la probabilité.

<div class="encadre">

La probabilité d'un **chemin** de l'arbre est le **produit** des probabilités rencontrées sur ce chemin.

</div>

## Fréquence et probabilité

Si on tourne la roue un grand nombre de fois, la **fréquence** d'apparition de « gagné » se rapproche de $\frac{1}{8}$. Avec 10 lancers, on peut très bien gagner 3 fois ; avec 10 000 lancers, on gagnera environ 1 250 fois.

## Retour au problème

« Gagner au moins une fois » a pour contraire « ne jamais gagner ». Ne pas gagner à un tour a pour probabilité $1 - \frac{1}{8} = \frac{7}{8}$. Sur l'arbre, le chemin « pas gagné, pas gagné » a pour probabilité $\frac{7}{8} \times \frac{7}{8} = \frac{49}{64}$.

$$
P(\text{au moins un gain}) = 1 - \frac{49}{64} = \frac{15}{64} \approx 0{,}23
$$

<mark>On a environ 23 % de chances de gagner au moins une fois</mark>.

En Seconde, le chapitre [Probabilités et échantillonnage](/maths/seconde/probabilites/cours/) ajoute la formule du « ou » et l'étude des échantillons.
