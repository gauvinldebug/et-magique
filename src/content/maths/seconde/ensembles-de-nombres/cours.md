---
titre: Les ensembles de nombres et les intervalles
court: Ensembles de nombres
description: Les ensembles de nombres N, Z, D, Q et R expliqués avec des poupées russes, les intervalles, la valeur absolue comme une distance, les puissances et les racines carrées, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 1
publie: 2026-11-22T22:00:00
video:
  youtube: ""
piege: "**Un crochet tourné vers l'extérieur exclut la borne.** $]2\\,;5]$ contient 5 mais pas 2. Et du côté de l'infini, le crochet est **toujours ouvert** : on n'atteint jamais $+\\infty$."
pdf:
  cours: /pdf/maths/seconde/ensembles-de-nombres-cours.pdf
  fiche: /pdf/maths/seconde/ensembles-de-nombres-fiche.pdf
  exercices: /pdf/maths/seconde/ensembles-de-nombres-exercices.pdf
suivant: calcul-litteral
---

## Le problème

Le nombre $\frac{1}{3}$ est-il un nombre décimal ? Et $\sqrt{2}$, peut-on l'écrire comme une fraction ? Comment écrire proprement « tous les nombres compris entre 2 et 5, 5 compris » ?

Pour répondre, il faut ranger les nombres dans des **familles**, et savoir décrire des morceaux de la droite des réels.

## L'idée : les poupées russes

Les ensembles de nombres s'emboîtent comme des **poupées russes** : chaque poupée contient toutes les plus petites.

$$
\cvert{\mathbb{N}} \subset \corange{\mathbb{Z}} \subset \cbleu{\mathbb{D}} \subset \mathbb{Q} \subset \crouge{\mathbb{R}}
$$

Un entier naturel est aussi un entier relatif, qui est aussi un décimal, et ainsi de suite. Mais l'inverse est faux : $-3$ est dans $\corange{\mathbb{Z}}$ sans être dans $\cvert{\mathbb{N}}$.

## Les cinq ensembles

<div class="encadre">

- $\cvert{\mathbb{N}}$, les **entiers naturels** : $0, 1, 2, 3\dots$
- $\corange{\mathbb{Z}}$, les **entiers relatifs** : $\dots, -2, -1, 0, 1, 2\dots$
- $\cbleu{\mathbb{D}}$, les **décimaux** : les nombres qui s'écrivent $\frac{a}{10^n}$ avec $a \in \mathbb{Z}$. Leur écriture décimale s'arrête. Exemple : $2{,}375$.
- $\mathbb{Q}$, les **rationnels** : les quotients $\frac{a}{b}$ avec $a \in \mathbb{Z}$ et $b \in \mathbb{N}$, $b \ne 0$. Exemple : $\frac{1}{3}$.
- $\crouge{\mathbb{R}}$, les **réels** : tous les nombres de la droite graduée. Exemple : $\sqrt{2}$, $\pi$.

</div>

$\frac{1}{3} = 0{,}333\dots$ ne s'arrête jamais : c'est un rationnel, **pas un décimal**. Et $\sqrt{2}$ n'est même pas rationnel : on dit qu'il est **irrationnel** (la démonstration est un classique de Seconde, elle est dans les exercices).

## Les intervalles

Un **intervalle** est un morceau de la droite des réels, sans trou. Imagine un tronçon de route avec une barrière à chaque bout : le crochet dit si la barrière fait partie du tronçon.

<div class="encadre">

| Intervalle | Signifie | Bornes |
|---|---|---|
| $[a\,;b]$ | $a \le x \le b$ | les deux incluses |
| $]a\,;b[$ | $a < x < b$ | les deux exclues |
| $[a\,;b[$ | $a \le x < b$ | $a$ incluse, $b$ exclue |
| $[a\,;+\infty[$ | $x \ge a$ | $a$ incluse |
| $]-\infty\,;b[$ | $x < b$ | $b$ exclue |

</div>

L'**intersection** $I \cap J$ contient les nombres qui sont dans les deux intervalles à la fois. La **réunion** $I \cup J$ contient ceux qui sont dans l'un ou dans l'autre. Exemple : $[0\,;5] \cap [3\,;8] = [3\,;5]$ et $[0\,;5] \cup [3\,;8] = [0\,;8]$.

## La valeur absolue : une distance

<div class="encadre">

La **valeur absolue** de $x$, notée $|x|$, est la **distance** entre $x$ et $0$ sur la droite graduée. Plus généralement, $|x - a|$ est la distance entre $x$ et $a$.

</div>

Donc $|x - 3| \le 2$ veut dire « $x$ est à moins de 2 de 3 », soit $x \in [1\,;5]$.

## Puissances et racines carrées

<div class="encadre">

- $a^n \times a^p = a^{n+p}$ ; $\dfrac{a^n}{a^p} = a^{n-p}$ ; $(a^n)^p = a^{np}$ ; $a^{-n} = \dfrac{1}{a^n}$.
- Pour $a \ge 0$ et $b \ge 0$ : $\sqrt{ab} = \sqrt{a}\sqrt{b}$ et, si $b > 0$, $\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}$.
- Mais $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$ en général.

</div>

Exemple : $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}$.

## Retour au problème

- $\frac{1}{3}$ est dans $\mathbb{Q}$ mais pas dans $\cbleu{\mathbb{D}}$ : son écriture décimale ne s'arrête pas.
- $\sqrt{2}$ est dans $\crouge{\mathbb{R}}$ mais pas dans $\mathbb{Q}$ : c'est un irrationnel.
- « Entre 2 et 5, 5 compris » s'écrit <mark>$]2\,;5]$</mark>.

La suite logique : apprendre à transformer des expressions avec des lettres, dans le chapitre [Calcul littéral et équations](/maths/seconde/calcul-litteral/cours/).
