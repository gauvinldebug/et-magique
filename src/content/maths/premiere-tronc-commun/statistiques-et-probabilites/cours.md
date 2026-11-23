---
titre: Tableaux croisés, fréquences et probabilités conditionnelles
court: Statistiques et probabilités
description: Tableaux croisés d'effectifs, fréquences marginales et conditionnelles, probabilités, arbres pondérés et probabilités conditionnelles, expliqués avec un meuble à casiers, avec des exercices corrigés pas à pas. Première, maths du tronc commun.
ordre: 5
publie: 2026-11-23T02:24:00
video:
  youtube: ""
piege: >-
  **« Parmi les sportifs, la part de musiciens » n'est pas « parmi les musiciens, la part de sportifs ».** Une fréquence conditionnelle se calcule en divisant par l'effectif du **groupe dont on parle** : $\frac{30}{120}$ dans le premier cas, $\frac{30}{80}$ dans le second.
pdf:
  cours: /pdf/maths/premiere-tronc-commun/statistiques-et-probabilites-cours.pdf
  fiche: /pdf/maths/premiere-tronc-commun/statistiques-et-probabilites-fiche.pdf
  exercices: /pdf/maths/premiere-tronc-commun/statistiques-et-probabilites-exercices.pdf
---

## Le problème

On a interrogé les 200 élèves d'un lycée : font-ils du sport en club ? Jouent-ils d'un instrument ?

| | Instrument | Pas d'instrument | Total |
|---|---|---|---|
| Sport | 30 | 90 | 120 |
| Pas de sport | 50 | 30 | 80 |
| Total | 80 | 120 | 200 |

Les sportifs jouent-ils moins souvent d'un instrument que les autres ?

## L'idée : le meuble à casiers

Imagine un meuble avec des casiers en lignes et en colonnes. Chaque élève dépose son nom dans **un seul** casier : sa ligne dit s'il fait du sport, sa colonne s'il joue d'un instrument.

Pour répondre à une question, tu choisis **quels casiers regarder**. « Parmi les sportifs » : tu ne regardes que **la ligne** Sport. C'est ça, une fréquence **conditionnelle** : on se restreint à un groupe avant de compter.

## Tableaux croisés et fréquences

<div class="encadre">

Un **tableau croisé** donne les effectifs selon deux critères.

- **Fréquence marginale** : effectif d'une ligne (ou colonne) totale divisé par l'effectif total. Exemple : $\frac{80}{200} = 40\,\%$ jouent d'un instrument.
- **Fréquence conditionnelle** de $B$ parmi $A$ : $\corange{f_A(B) = \dfrac{\text{effectif de } A \text{ et } B}{\text{effectif de } A}}$.

</div>

## Probabilités

<div class="encadre">

Si toutes les issues sont **équiprobables**, $P(A) = \dfrac{\text{nombre d'issues de } A}{\text{nombre total d'issues}}$.

- $P(\bar{A}) = 1 - P(A)$.
- **Probabilité conditionnelle** de $B$ sachant $A$ : $P_A(B) = \dfrac{P(A \cap B)}{P(A)}$.
- **Arbre pondéré** : on multiplie le long d'un chemin, $P(A \cap B) = P(A) \times P_A(B)$ ; on additionne les chemins qui mènent à $B$ pour obtenir $P(B)$.

</div>

## Retour au problème

On compare les fréquences conditionnelles, chacune dans sa ligne :

- parmi les sportifs : $\frac{30}{120} = 25\,\%$ jouent d'un instrument ;
- parmi les non-sportifs : $\frac{50}{80} = 62{,}5\,\%$.

<mark>Dans ce lycée, les sportifs jouent nettement moins souvent d'un instrument</mark>. Attention : cela ne prouve pas que le sport en soit la **cause** (le temps libre peut jouer).

Pour revoir les bases : les [probabilités de 2de](/maths/seconde/probabilites/cours/). Pour aller plus loin : les [probabilités conditionnelles de spécialité](/maths/premiere/probabilites-conditionnelles/cours/).
