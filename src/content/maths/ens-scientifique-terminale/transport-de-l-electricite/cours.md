---
titre: Transport de l'électricité, graphes et optimisation
court: Transport de l'électricité
description: Effet Joule et pertes en ligne, pourquoi la haute tension, modélisation d'un réseau électrique par un graphe orienté pondéré, loi des nœuds comme contrainte, minimisation des pertes avec une fonction du second degré, expliqués avec un réseau de tuyaux d'eau, avec des exercices corrigés pas à pas. Enseignement scientifique de Terminale, partie maths.
ordre: 2
publie: 2026-11-23T09:08:00
video:
  youtube: ""
piege: >-
  **Les pertes ne sont pas proportionnelles à l'intensité, mais à son carré.** $P_J = RI^2$ : doubler l'intensité multiplie les pertes par 4. C'est pour cela que multiplier la tension par 10 (donc diviser l'intensité par 10 à puissance égale) divise les pertes par 100.
pdf:
  cours: /pdf/maths/ens-scientifique-terminale/transport-de-l-electricite-cours.pdf
  fiche: /pdf/maths/ens-scientifique-terminale/transport-de-l-electricite-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-terminale/transport-de-l-electricite-exercices.pdf
suivant: modeles-demographiques
---

## Le problème

Une centrale doit envoyer un courant de 100 A vers une ville. Deux lignes sont possibles : la ligne 1 de résistance $2\ \Omega$ et la ligne 2 de résistance $3\ \Omega$. Comment répartir le courant entre les deux lignes pour perdre le moins d'énergie possible ?

## L'idée : le réseau de tuyaux

Imagine l'électricité comme de l'eau qui circule dans des tuyaux. Un tuyau étroit freine l'eau : c'est la **résistance**. À chaque carrefour, toute l'eau qui arrive repart : rien ne se crée, rien ne se perd.

Pour transporter beaucoup d'eau avec peu de frottements, on la répartit entre plusieurs tuyaux. <mark>Optimiser un réseau, c'est choisir la répartition qui minimise les pertes en respectant les carrefours</mark>.

## Les pertes par effet Joule

<div class="encadre">

Un câble de résistance $R$ parcouru par un courant d'intensité $\corange{I}$ dissipe une puissance

$$
\crouge{P_J} = R \times \corange{I}^2
$$

Pour transporter une puissance $P = U \times I$, on a $I = \frac{P}{U}$, donc $P_J = \frac{R P^2}{U^2}$ : <mark>multiplier la tension par $k$ divise les pertes par $k^2$</mark>. D'où les lignes à 400 000 V.

</div>

## Modéliser le réseau par un graphe

<div class="encadre">

- Les **sommets** sont les sources (centrales), les nœuds intermédiaires et les cibles (villes).
- Les **arcs** (flèches) sont les lignes, orientés dans le sens du courant.
- Chaque arc porte un **poids** : sa résistance, ou l'intensité qui y circule.

**Contraintes.** En chaque nœud, la somme des intensités entrantes égale la somme des intensités sortantes (loi des nœuds). Chaque source a une production maximale, chaque ville une demande à satisfaire.

**Objectif.** Minimiser la somme des pertes $\sum R_i I_i^2$.

</div>

## Retour au problème

On note $x$ l'intensité dans la ligne 1. La loi des nœuds impose $100 - x$ dans la ligne 2. Les pertes valent

$$
f(x) = 2x^2 + 3(100 - x)^2 = 5x^2 - 600x + 30\,000
$$

C'est un polynôme du second degré avec $a = 5 > 0$ : son minimum est atteint en $x = \frac{-b}{2a} = \frac{600}{10} = 60$.

<mark>Il faut 60 A dans la ligne 1 et 40 A dans la ligne 2</mark>, pour des pertes de $f(60) = 12\,000$ W. Tout faire passer par la ligne 1 donnerait $20\,000$ W.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-terminale/transport-de-l-electricite/exercices/). La suite : [modèles démographiques](/maths/ens-scientifique-terminale/modeles-demographiques/cours/). Pour revoir le second degré : [second degré](/maths/premiere/second-degre/cours/).
