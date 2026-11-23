---
titre: Probabilités et échantillonnage
court: Probabilités et échantillonnage
description: Univers, événements, loi de probabilité, équiprobabilité, réunion, intersection, événement contraire, tableaux et arbres, puis fluctuation d'échantillonnage, expliqués avec un sac de billes et une cuillère de soupe, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 9
publie: 2026-11-22T22:08:00
video:
  youtube: ""
piege: >-
  **$P(A \cup B)$ n'est pas $P(A) + P(B)$ en général.** Si $A$ et $B$ peuvent arriver en même temps, on compte deux fois l'intersection. Il faut l'enlever une fois : $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
pdf:
  cours: /pdf/maths/seconde/probabilites-cours.pdf
  fiche: /pdf/maths/seconde/probabilites-fiche.pdf
  exercices: /pdf/maths/seconde/probabilites-exercices.pdf
---

## Le problème

On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité d'obtenir un coeur **ou** un roi ? Et si un sondage sur 400 personnes donne 52 % pour un candidat, peut-on être sûr qu'il a la majorité dans toute la population ?

La première question se règle avec les **règles de calcul** des probabilités. La seconde avec l'**échantillonnage**.

## L'idée : le sac de billes et la cuillère de soupe

- Une expérience aléatoire, c'est **plonger la main dans un sac de billes** sans regarder. Chaque bille a la même chance de sortir : la probabilité d'une couleur, c'est la part de billes de cette couleur dans le sac.
- Un échantillon, c'est **goûter la soupe avec une cuillère**. Si la soupe est bien mélangée, une cuillère donne une bonne idée du goût de toute la casserole. Mais deux cuillères ne donnent jamais exactement le même goût : c'est la **fluctuation**.

## Vocabulaire

<div class="encadre">

- L'**univers** $\Omega$ est l'ensemble des issues possibles.
- Un **événement** est une partie de l'univers.
- Une **loi de probabilité** associe à chaque issue un nombre entre 0 et 1, avec une somme égale à 1.
- En situation d'**équiprobabilité** (toutes les issues ont la même chance) :
$$P(A) = \dfrac{\text{nombre d'issues favorables à } A}{\text{nombre total d'issues}}.$$

</div>

## Combiner des événements

<div class="encadre">

- $\cbleu{A \cap B}$ (« $A$ et $B$ ») : les deux se réalisent.
- $\corange{A \cup B}$ (« $A$ ou $B$ ») : au moins l'un des deux se réalise.
- $\bar{A}$ (« non $A$ ») : l'événement **contraire**, $P(\bar{A}) = 1 - P(A)$.

$$\corange{P(A \cup B)} = P(A) + P(B) - \cbleu{P(A \cap B)}$$

Si $A$ et $B$ sont **incompatibles** ($A \cap B = \varnothing$), alors $P(A \cup B) = P(A) + P(B)$.

</div>

Pour organiser les cas, on utilise un **tableau à double entrée** ou un **arbre**. Les arbres pondérés et les probabilités conditionnelles viendront en Première, dans [Probabilités conditionnelles](/maths/premiere/probabilites-conditionnelles/cours/).

## Échantillonnage

<div class="encadre">

On s'intéresse à un caractère présent dans une population avec une proportion $\cvert{p}$. On prélève au hasard un **échantillon** de taille $n$, et on y observe une fréquence $f$.

- $f$ change d'un échantillon à l'autre : c'est la **fluctuation d'échantillonnage**.
- Plus $n$ est grand, plus les fréquences observées sont proches de $\cvert{p}$.
- Pour $n$ assez grand, **au moins 95 %** des échantillons ont une fréquence dans l'intervalle
$$\left[\cvert{p} - \frac{1}{\sqrt{n}}\,;\cvert{p} + \frac{1}{\sqrt{n}}\right].$$

</div>

Une simulation (au tableur ou en Python, voir [Algorithmique](/maths/premiere/algorithmique/cours/)) permet de voir ce phénomène : on répète l'expérience, on calcule les fréquences, et elles se resserrent autour de $\cvert{p}$.

## Retour au problème

- Coeur ou roi : 8 coeurs, 4 rois, dont 1 roi de coeur. $P = \frac{8}{32} + \frac{4}{32} - \frac{1}{32} = \frac{11}{32}$. <mark>$P(C \cup R) = \frac{11}{32} \approx 0{,}34$</mark>.
- Le sondage : avec $n = 400$, $\frac{1}{\sqrt{400}} = 0{,}05$. Une fréquence de 52 % est compatible avec une proportion réelle entre environ 47 % et 57 %. <mark>On ne peut pas être sûr que le candidat a la majorité</mark>.

En Terminale, la [loi des grands nombres](/maths/terminale/loi-des-grands-nombres/cours/) dira précisément pourquoi la cuillère de soupe finit par avoir le bon goût.
