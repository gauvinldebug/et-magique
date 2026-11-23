---
titre: Arithmétique, nombres premiers et diviseurs
court: Arithmétique
description: Multiples, diviseurs, critères de divisibilité, nombres premiers, décomposition en facteurs premiers et fractions irréductibles, expliqués avec des briques de construction, avec des exercices corrigés pas à pas type brevet. 3e maths.
ordre: 1
publie: 2026-11-23T01:00:00
video:
  youtube: ""
piege: >-
  **1 n'est pas un nombre premier.** Un nombre premier a **exactement deux** diviseurs : 1 et lui-même. 1 n'en a qu'un seul. Et 2 est le seul nombre premier pair.
pdf:
  cours: /pdf/maths/3e/arithmetique-cours.pdf
  fiche: /pdf/maths/3e/arithmetique-fiche.pdf
  exercices: /pdf/maths/3e/arithmetique-exercices.pdf
suivant: developper-et-factoriser
---

## Le problème

Un fleuriste a 252 roses et 196 tulipes. Il veut faire le **plus grand nombre possible** de bouquets identiques, en utilisant toutes ses fleurs. Combien de bouquets peut-il faire, et que contiendra chacun ?

## L'idée : les briques de construction

Avec des briques de construction, on assemble n'importe quel objet à partir de quelques pièces de base. Les nombres, c'est pareil : les **nombres premiers** sont les briques de base, et tous les autres entiers se construisent en les **multipliant**.

$$
60 = \cbleu{2} \times \cbleu{2} \times \corange{3} \times \cvert{5}
$$

Et chaque nombre ne se construit que d'**une seule façon** (à l'ordre près). C'est ce qui rend les briques si pratiques.

## Multiples et diviseurs

<div class="encadre">

$a$ et $b$ sont des entiers positifs. Si $a = b \times k$ avec $k$ entier, on dit que :

- $a$ est un **multiple** de $b$ ;
- $b$ est un **diviseur** de $a$ ;
- $a$ est **divisible** par $b$.

</div>

Exemple : $42 = 6 \times 7$, donc 42 est un multiple de 6, et 6 est un diviseur de 42.

**Critères de divisibilité.** Un nombre est divisible :

- par 2 s'il se termine par 0, 2, 4, 6 ou 8 ;
- par 5 s'il se termine par 0 ou 5 ; par 10 s'il se termine par 0 ;
- par 3 si la **somme de ses chiffres** est divisible par 3 ; par 9 si elle est divisible par 9.

## Nombres premiers

<div class="encadre">

Un nombre **premier** est un entier qui a **exactement deux diviseurs** : 1 et lui-même.

Les premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…

Tout entier supérieur ou égal à 2 se **décompose en produit de facteurs premiers**, et cette décomposition est unique.

</div>

**Méthode** : on divise par 2 tant qu'on peut, puis par 3, puis par 5, puis par 7…

$$
252 = 2 \times 126 = 2 \times 2 \times 63 = 2 \times 2 \times 3 \times 21 = 2^2 \times 3^2 \times 7
$$

## Fractions irréductibles

<div class="encadre">

Une fraction est **irréductible** quand on ne peut plus la simplifier : le numérateur et le dénominateur n'ont plus de diviseur commun autre que 1.

Pour la rendre irréductible, on décompose les deux nombres et on **barre les briques communes**.

</div>

$$
\frac{252}{196} = \frac{\cancel{2^2} \times 3^2 \times \cancel{7}}{\cancel{2^2} \times 7 \times \cancel{7}} = \frac{9}{7}
$$

## Retour au problème

$252 = 2^2 \times 3^2 \times 7$ et $196 = 2^2 \times 7^2$. Le nombre de bouquets doit diviser 252 et 196. Le plus grand diviseur commun se construit avec les **briques communes** : $2^2 \times 7 = 28$.

<mark>Le fleuriste fait 28 bouquets</mark>, chacun avec $252 \div 28 = 9$ roses et $196 \div 28 = 7$ tulipes.

Au lycée, ces nombres prennent place dans les [ensembles de nombres](/maths/seconde/ensembles-de-nombres/cours/) de Seconde.
