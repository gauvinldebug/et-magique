---
titre: Le modèle de Hardy-Weinberg, probabilités et génétique des populations
court: Le modèle de Hardy-Weinberg
description: Fréquences alléliques p et q, probabilités des génotypes p au carré, 2pq et q au carré avec un arbre, stabilité des fréquences d'une génération à l'autre, conditions du modèle, écarts au modèle et évolution, expliqués avec deux paquets de cartes, avec des exercices corrigés pas à pas. Enseignement scientifique de Terminale, partie maths.
ordre: 4
publie: 2026-11-23T09:10:00
video:
  youtube: ""
piege: >-
  **La probabilité d'être hétérozygote est $2pq$, pas $pq$.** Il y a deux façons d'obtenir le génotype Aa : A du père et a de la mère, ou a du père et A de la mère. L'arbre le montre : deux branches mènent à Aa.
pdf:
  cours: /pdf/maths/ens-scientifique-terminale/hardy-weinberg-cours.pdf
  fiche: /pdf/maths/ens-scientifique-terminale/hardy-weinberg-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-terminale/hardy-weinberg-exercices.pdf
suivant: estimer-une-population
---

## Le problème

La mucoviscidose est une maladie génétique récessive : seules les personnes de génotype aa sont malades. En France, environ une naissance sur 4 000 est concernée. Quelle proportion de la population est porteuse saine (génotype Aa) sans le savoir ?

## L'idée : deux paquets de cartes

Imagine deux grands paquets de cartes, un pour le père et un pour la mère. Dans chaque paquet, une proportion $p$ des cartes porte la lettre A et une proportion $q$ porte la lettre a. Un enfant reçoit une carte tirée au hasard dans chaque paquet, indépendamment.

Le génotype de l'enfant, c'est la paire de cartes. <mark>Calculer les fréquences des génotypes revient à calculer des probabilités sur un arbre à deux tirages indépendants</mark>.

## Fréquences alléliques et génotypes

<div class="encadre">

Un gène a deux allèles A et a, de fréquences $\cbleu{p}$ et $\cbleu{q}$ dans la population, avec $p + q = 1$. Si les gamètes s'unissent au hasard, l'arbre des deux tirages donne :

$$
P(\text{AA}) = p^2 \qquad P(\text{Aa}) = \corange{2pq} \qquad P(\text{aa}) = q^2
$$

et l'on vérifie $p^2 + 2pq + q^2 = (p + q)^2 = 1$.

</div>

## La stabilité

<div class="encadre">

À la génération suivante, la fréquence de l'allèle A vaut

$$
p' = p^2 + \frac{1}{2} \times 2pq = p(p + q) = p
$$

Les fréquences alléliques restent **constantes** d'une génération à l'autre, et les fréquences des génotypes sont stables dès la deuxième génération : c'est l'**équilibre de Hardy-Weinberg**.

</div>

## Les conditions et les écarts

<div class="encadre">

Le modèle suppose une population de **très grande taille**, des unions **au hasard**, et ni **mutation**, ni **sélection**, ni **migration**.

Dans la réalité, si les fréquences observées s'écartent du modèle, c'est le signe qu'une de ces conditions n'est pas remplie : sélection naturelle, dérive génétique dans une petite population, migrations. <mark>Un écart au modèle révèle une évolution</mark>.

</div>

## Retour au problème

$q^2 = \frac{1}{4\,000} = 0{,}00025$, donc $q = \sqrt{0{,}00025} \approx 0{,}0158$ et $p \approx 0{,}9842$.

$$
2pq \approx 2 \times 0{,}9842 \times 0{,}0158 \approx 0{,}031
$$

<mark>Environ 3 % de la population, soit une personne sur 32, est porteuse saine</mark>.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-terminale/hardy-weinberg/exercices/). La suite : [estimer une population](/maths/ens-scientifique-terminale/estimer-une-population/cours/). Pour revoir les arbres : [probabilités conditionnelles](/maths/premiere/probabilites-conditionnelles/cours/).
