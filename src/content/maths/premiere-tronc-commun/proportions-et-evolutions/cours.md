---
titre: Proportions, pourcentages et évolutions
court: Proportions et évolutions
description: Proportion et proportion de proportion, taux d'évolution et coefficient multiplicateur, évolutions successives, évolution réciproque et indices base 100, expliqués avec l'étiquette des soldes, avec des exercices corrigés pas à pas. Première, maths du tronc commun.
ordre: 2
publie: 2026-11-23T02:21:00
video:
  youtube: ""
piege: >-
  **Des pourcentages successifs ne s'additionnent pas.** Une hausse de 20 % suivie d'une baisse de 20 % ne ramène pas au prix de départ : $1{,}2 \times 0{,}8 = 0{,}96$, soit une **baisse** de 4 %. On multiplie toujours les coefficients.
pdf:
  cours: /pdf/maths/premiere-tronc-commun/proportions-et-evolutions-cours.pdf
  fiche: /pdf/maths/premiere-tronc-commun/proportions-et-evolutions-fiche.pdf
  exercices: /pdf/maths/premiere-tronc-commun/proportions-et-evolutions-exercices.pdf
suivant: fonctions-et-modeles
---

## Le problème

Une console coûte 300 €. En décembre, son prix augmente de 20 %. En janvier, il baisse de 20 %. Revient-on au prix de départ ?

## L'idée : l'étiquette des soldes

Le vendeur ne fait jamais « plus 20 % » de tête : il a un **multiplicateur** collé sur chaque étiquette. $+20\,\%$, c'est « $\times 1{,}2$ ». $-20\,\%$, c'est « $\times 0{,}8$ ».

Quand deux étiquettes se succèdent, on applique les deux multiplicateurs **l'un après l'autre**. Et la deuxième étiquette s'applique au **nouveau** prix, pas au prix de départ : c'est tout le piège.

## Proportions

<div class="encadre">

La **proportion** d'une partie $A$ dans un ensemble $E$ est $p = \frac{n_A}{n_E}$, un nombre entre 0 et 1 (souvent écrit en %).

**Proportion de proportion** : si $A$ représente une proportion $p$ de $E$, et $B$ une proportion $p'$ de $A$, alors $B$ représente $\corange{p \times p'}$ de $E$.

</div>

## Évolutions

<div class="encadre">

Une quantité passe de $V_D$ (départ) à $V_A$ (arrivée).

- **Taux d'évolution** : $t = \dfrac{V_A - V_D}{V_D}$.
- **Coefficient multiplicateur** : $CM = \dfrac{V_A}{V_D} = 1 + t$.
- **Évolutions successives** : le coefficient global est le **produit** des coefficients.
- **Évolution réciproque** (pour revenir au départ) : coefficient $\dfrac{1}{CM}$.

</div>

**Indice base 100** : l'indice d'une valeur $V$ par rapport à une valeur de référence $V_0$ est $I = 100 \times \frac{V}{V_0}$. Un indice de 116 signifie une hausse de 16 % depuis la référence.

## Retour au problème

Le coefficient global est $1{,}2 \times 0{,}8 = 0{,}96$. Le prix final vaut $300 \times 0{,}96 = 288$ €.

<mark>On ne revient pas au prix de départ : la console a baissé de 4 %</mark>. Pour revenir à 300 € après la hausse, il aurait fallu une baisse d'environ 16,7 % ($\frac{1}{1{,}2} \approx 0{,}833$).

La suite : [fonctions et modèles](/maths/premiere-tronc-commun/fonctions-et-modeles/cours/). Pour revoir les bases : [proportions et évolutions de 2de](/maths/seconde/proportions-et-evolutions/cours/).
