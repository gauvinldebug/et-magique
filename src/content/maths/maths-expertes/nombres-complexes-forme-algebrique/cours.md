---
titre: "Nombres complexes : la forme algébrique"
court: "Complexes : forme algébrique"
description: Le nombre i, la forme algébrique, partie réelle et imaginaire, calculs, conjugué, quotient et équations du second degré à coefficients réels, expliqués avec un quart de tour, avec des exercices corrigés pas à pas. Terminale maths expertes.
ordre: 1
publie: 2026-11-23T02:00:00
video:
  youtube: ""
piege: >-
  **$i^2 = -1$, donc $(a + ib)^2$ n'est pas $a^2 + b^2$.** $(2 + 3i)^2 = 4 + 12i + 9i^2 = -5 + 12i$. Le carré de $3i$ est **négatif**. Remplace toujours $i^2$ par $-1$ avant de regrouper.
pdf:
  cours: /pdf/maths/maths-expertes/nombres-complexes-forme-algebrique-cours.pdf
  fiche: /pdf/maths/maths-expertes/nombres-complexes-forme-algebrique-fiche.pdf
  exercices: /pdf/maths/maths-expertes/nombres-complexes-forme-algebrique-exercices.pdf
suivant: nombres-complexes-et-geometrie
---

## Le problème

L'équation $\corange{z}^2 - 4\corange{z} + 13 = 0$ a un discriminant négatif : $\Delta = -36$. En [Première](/maths/premiere/second-degre/cours/), on concluait « pas de solution ». Et si on inventait des nombres dont le carré est négatif ?

## L'idée : le quart de tour

Sur la droite des réels, multiplier par $-1$, c'est faire un **demi-tour** autour de 0 : 3 devient $-3$.

Imagine un nombre $i$ qui fait **un quart de tour**. Deux quarts de tour font un demi-tour, donc $i \times i = -1$. On quitte la droite pour tourner dans le **plan** : c'est là que vivent les nombres complexes.

## Le nombre i et la forme algébrique

<div class="encadre">

Il existe un ensemble $\mathbb{C}$, qui contient $\mathbb{R}$, et un nombre $i$ tel que $\mathbf{i^2 = -1}$. On y calcule avec les mêmes règles que dans $\mathbb{R}$.

Tout nombre complexe $\corange{z}$ s'écrit de façon unique $\corange{z} = \cbleu{a} + i\,\cvert{b}$ avec $a$ et $b$ réels : c'est la **forme algébrique**.

- $\cbleu{a} = \text{Re}(\corange{z})$ est la **partie réelle** ;
- $\cvert{b} = \text{Im}(\corange{z})$ est la **partie imaginaire**.

Si $b = 0$, $\corange{z}$ est réel ; si $a = 0$, $\corange{z}$ est **imaginaire pur**.

</div>

Deux complexes sont égaux si et seulement s'ils ont **même partie réelle et même partie imaginaire**.

## Calculer

On développe comme d'habitude, puis on remplace $i^2$ par $-1$ :

$$
(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i.
$$

## Le conjugué

<div class="encadre">

Le **conjugué** de $\corange{z} = a + ib$ est $\bar{\corange{z}} = a - ib$.

- $\corange{z}\,\bar{\corange{z}} = a^2 + b^2$, un **réel positif** ;
- $\overline{z + z'} = \bar{z} + \bar{z'}$, $\overline{zz'} = \bar{z}\,\bar{z'}$, $\overline{z^n} = \bar{z}^n$ ;
- $\corange{z}$ est réel $\iff \bar{\corange{z}} = \corange{z}$ ; imaginaire pur $\iff \bar{\corange{z}} = -\corange{z}$.

</div>

**Diviser** : on multiplie en haut et en bas par le conjugué du dénominateur, qui devient réel.

$$
\frac{3 + 4i}{1 - 2i} = \frac{(3 + 4i)(1 + 2i)}{(1 - 2i)(1 + 2i)} = \frac{3 + 6i + 4i - 8}{1 + 4} = \frac{-5 + 10i}{5} = -1 + 2i.
$$

## Équations du second degré

<div class="encadre">

Pour $a\corange{z}^2 + b\corange{z} + c = 0$ avec $a$, $b$, $c$ **réels** et $\Delta = b^2 - 4ac$ :

- $\Delta > 0$ : deux solutions réelles $\frac{-b \pm \sqrt{\Delta}}{2a}$ ;
- $\Delta = 0$ : une solution réelle $-\frac{b}{2a}$ ;
- $\Delta < 0$ : **deux solutions complexes conjuguées** $\dfrac{-b \pm i\sqrt{-\Delta}}{2a}$.

</div>

## Retour au problème

$\Delta = 16 - 52 = -36 < 0$, et $\sqrt{-\Delta} = 6$.

$$
\corange{z}_1 = \frac{4 - 6i}{2} = 2 - 3i \qquad \corange{z}_2 = \frac{4 + 6i}{2} = 2 + 3i
$$

<mark>Les solutions sont $2 - 3i$ et $2 + 3i$</mark>, conjuguées l'une de l'autre. Le quart de tour a donné des solutions là où il n'y en avait pas.

La suite, avec la géométrie du quart de tour : [Nombres complexes et géométrie](/maths/maths-expertes/nombres-complexes-et-geometrie/cours/).
