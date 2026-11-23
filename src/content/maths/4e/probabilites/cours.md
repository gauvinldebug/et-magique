---
titre: Premières notions de probabilités
court: Probabilités
description: Expérience aléatoire, issues, événements, probabilité d'un événement, événement certain, impossible, contraire, fréquence et probabilité, expliqués avec un bocal de bonbons, avec des exercices corrigés pas à pas. 4e maths.
ordre: 6
publie: 2026-11-23T01:15:00
video:
  youtube: ""
piege: >-
  **Le hasard n'a pas de mémoire.** Si une pièce est tombée cinq fois sur pile, la probabilité d'obtenir pile au sixième lancer reste $\frac{1}{2}$. La pièce ne « se rattrape » pas.
pdf:
  cours: /pdf/maths/4e/probabilites-cours.pdf
  fiche: /pdf/maths/4e/probabilites-fiche.pdf
  exercices: /pdf/maths/4e/probabilites-exercices.pdf
---

## Le problème

Un bocal contient 6 bonbons à la fraise, 4 au citron et 10 à la menthe. Les yeux fermés, tu en prends un. Quelle saveur a le plus de chances de sortir ? Et quelles sont exactement ces chances ?

## L'idée : le bocal de bonbons

Le bocal, c'est le hasard en miniature :

- tu sais **quelles saveurs** peuvent sortir ;
- tu ne sais **pas laquelle** va sortir cette fois ;
- mais plus il y a de bonbons d'une saveur, **plus elle a de chances** de sortir.

La **probabilité**, c'est mesurer ces chances par un nombre : la **part** des bonbons de cette saveur dans le bocal.

## Le vocabulaire

<div class="encadre">

- Une **expérience aléatoire** : on connaît les résultats possibles, mais on ne peut pas prévoir lequel arrivera.
- Une **issue** : un résultat possible de l'expérience.
- Un **événement** : une condition qui peut être réalisée par une ou plusieurs issues. Exemple : « le bonbon est fruité ».

</div>

## La probabilité d'un événement

<div class="encadre">

La probabilité d'un événement est un nombre compris entre **0** et **1** :

- un événement **impossible** a une probabilité de 0 ;
- un événement **certain** a une probabilité de 1.

Quand toutes les issues ont la **même chance** de se produire :
$$P(\corange{A}) = \frac{\text{nombre d'issues favorables}}{\text{nombre total d'issues}}.$$

</div>

Une probabilité s'écrit en fraction, en décimal ou en pourcentage : $\frac{1}{4} = 0{,}25 = 25\,\%$.

## L'événement contraire

<div class="encadre">

L'événement **contraire** de $\corange{A}$ se réalise quand $\corange{A}$ ne se réalise pas. Les deux probabilités se complètent :
$$P(\text{non } \corange{A}) = 1 - P(\corange{A}).$$

</div>

## Fréquence et probabilité

Si on répète l'expérience (en remettant le bonbon dans le bocal), la **fréquence** d'une saveur, c'est le nombre de fois où elle est sortie divisé par le nombre d'essais.

Sur 10 essais, elle peut être loin de la probabilité. Sur 1 000 essais, elle s'en rapproche beaucoup.

## Retour au problème

Il y a $6 + 4 + 10 = 20$ bonbons, tous avec la même chance d'être pris.

- $P(\text{fraise}) = \frac{6}{20} = 0{,}3$ ;
- $P(\text{citron}) = \frac{4}{20} = 0{,}2$ ;
- $P(\text{menthe}) = \frac{10}{20} = 0{,}5$.

<mark>La menthe a le plus de chances : une sur deux</mark>. Et la somme $0{,}3 + 0{,}2 + 0{,}5$ fait bien 1.

En 3e, on étudiera les expériences à deux épreuves avec des arbres, dans le chapitre [Probabilités de 3e](/maths/3e/probabilites/cours/).
