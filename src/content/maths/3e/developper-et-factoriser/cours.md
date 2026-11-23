---
titre: Développer, factoriser et l'équation produit nul
court: Développer et factoriser
description: Développer avec la distributivité et la double distributivité, les identités remarquables, factoriser et résoudre une équation produit nul, expliqués avec une valise qu'on défait et qu'on refait, avec des exercices corrigés type brevet. 3e maths.
ordre: 2
publie: 2026-11-23T01:01:00
video:
  youtube: ""
piege: >-
  **$(a + b)^2$ n'est pas $a^2 + b^2$.** Il manque le double produit $2ab$. Vérifie avec des nombres : $(3 + 4)^2 = 49$, alors que $3^2 + 4^2 = 25$.
pdf:
  cours: /pdf/maths/3e/developper-et-factoriser-cours.pdf
  fiche: /pdf/maths/3e/developper-et-factoriser-fiche.pdf
  exercices: /pdf/maths/3e/developper-et-factoriser-exercices.pdf
suivant: fonctions-lineaires-et-affines
---

## Le problème

On agrandit un carré : on ajoute 3 cm à son côté, et son aire augmente de 45 cm². Quelle était la longueur du côté au départ ?

Pour répondre, il faut savoir **développer** une expression comme $(\corange{x} + 3)^2$.

## L'idée : la valise

Une expression algébrique, c'est une **valise**.

- **Développer**, c'est **défaire la valise** et étaler toutes les affaires sur le lit : on obtient une **somme** de termes, qu'on peut trier et regrouper.
- **Factoriser**, c'est **refaire la valise** : on range tout dans un seul bagage, sous forme de **produit**.

Chaque forme a son utilité : la somme pour calculer et réduire, le produit pour résoudre une équation.

## Développer

<div class="encadre">

- **Distributivité simple** : $k(a + b) = ka + kb$.
- **Double distributivité** : $(a + b)(c + d) = ac + ad + bc + bd$.

</div>

Exemple : $(2\corange{x} + 1)(\corange{x} - 4) = 2\corange{x}^2 - 8\corange{x} + \corange{x} - 4 = 2\corange{x}^2 - 7\corange{x} - 4$.

**Attention au signe moins devant une parenthèse** : $-(\corange{x} - 5) = -\corange{x} + 5$. Tous les signes changent.

## Les identités remarquables

<div class="encadre">

- $\cbleu{(a + b)^2 = a^2 + 2ab + b^2}$
- $\corange{(a - b)^2 = a^2 - 2ab + b^2}$
- $\cvert{(a + b)(a - b) = a^2 - b^2}$

</div>

Ce sont des raccourcis pour défaire la valise plus vite. Exemple : $(\corange{x} + 6)^2 = \corange{x}^2 + 12\corange{x} + 36$.

## Factoriser

<div class="encadre">

Pour refaire la valise, on cherche un **facteur commun** : $ka + kb = k(a + b)$.

Ou bien on reconnaît une identité remarquable à l'envers : $a^2 - b^2 = (a - b)(a + b)$.

</div>

Exemples : $7\corange{x} + 21 = 7(\corange{x} + 3)$ ; $\corange{x}^2 - 25 = (\corange{x} - 5)(\corange{x} + 5)$.

## L'équation produit nul

<div class="encadre">

Si un produit est nul, alors l'un au moins de ses facteurs est nul :
$$A \times B = 0 \iff A = 0 \ \text{ou}\ B = 0.$$

</div>

Exemple : $(\corange{x} - 2)(3\corange{x} + 9) = 0$ donne $\corange{x} = 2$ ou $\corange{x} = -3$.

## Retour au problème

On note $\corange{x}$ le côté de départ. Nouvelle aire moins ancienne aire :

$$
(\corange{x} + 3)^2 - \corange{x}^2 = \corange{x}^2 + 6\corange{x} + 9 - \corange{x}^2 = 6\corange{x} + 9
$$

$6\corange{x} + 9 = 45 \iff 6\corange{x} = 36 \iff \corange{x} = 6$. <mark>Le carré mesurait 6 cm de côté</mark>.

Au lycée, on va plus loin avec le [calcul littéral de Seconde](/maths/seconde/calcul-litteral/cours/).
