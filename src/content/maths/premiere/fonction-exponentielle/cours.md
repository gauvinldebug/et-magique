---
titre: La fonction exponentielle
court: Fonction exponentielle
description: La fonction exponentielle expliquée avec une pâte à pain qui lève, la définition f' = f, les règles de calcul, le nombre e, les variations et les fonctions exp(kx), avec des exercices corrigés pas à pas. Première spécialité maths.
ordre: 4
publie: 2026-11-22T20:40:00
video:
  youtube: ""
piege: "**L'exponentielle ne transforme pas une somme en somme.** $\\mathrm{e}^{a + b} = \\mathrm{e}^{a} \\times \\mathrm{e}^{b}$ : la somme devient un **produit**. Et $\\mathrm{e}^{\\corange{x}}$ est **toujours strictement positive**, donc $\\mathrm{e}^{\\corange{x}} = 0$ ou $\\mathrm{e}^{\\corange{x}} = -2$ n'ont aucune solution."
pdf:
  cours: /pdf/maths/premiere/fonction-exponentielle-cours.pdf
  fiche: /pdf/maths/premiere/fonction-exponentielle-fiche.pdf
  exercices: /pdf/maths/premiere/fonction-exponentielle-exercices.pdf
suivant: trigonometrie
---

## Le problème

Une pâte à pain lève : plus elle est grosse, plus elle gonfle vite. Une population de bactéries grandit : plus il y a de bactéries, plus il en naît. Dans ces situations, la **vitesse de croissance est proportionnelle à la quantité**. Quelle fonction décrit ce phénomène ?

## L'idée : la pâte qui lève

Imagine une pâte magique dont la vitesse de gonflement est **exactement égale** à sa taille. Quand elle fait 1 litre, elle gonfle d'1 litre par heure ; quand elle fait 3 litres, de 3 litres par heure.

En langage mathématique : une fonction égale à sa propre dérivée, <mark>$\cbleu{f}' = \cbleu{f}$</mark>. Avec, au départ, une taille de 1 : $\cbleu{f}(0) = 1$. Cette fonction, c'est l'<span class="o">exponentielle</span>.

## La définition

<div class="encadre">

Il existe une **unique** fonction $\cbleu{f}$ dérivable sur $\mathbb{R}$ telle que $\cbleu{f}' = \cbleu{f}$ et $\cbleu{f}(0) = 1$. C'est la fonction **exponentielle**, notée $\exp$.

On note $\mathrm{e} = \exp(1) \approx 2{,}718$, et $\exp(\corange{x}) = \mathrm{e}^{\corange{x}}$.

</div>

## Les règles de calcul

<div class="encadre">

Pour tous réels $a$ et $b$ et tout entier $n$ :

$$
\begin{aligned}
\mathrm{e}^{a + b} &= \mathrm{e}^{a} \times \mathrm{e}^{b} && \text{la somme devient un produit} \\
\mathrm{e}^{-a} &= \frac{1}{\mathrm{e}^{a}} \\
\mathrm{e}^{a - b} &= \frac{\mathrm{e}^{a}}{\mathrm{e}^{b}} \\
(\mathrm{e}^{a})^n &= \mathrm{e}^{na}
\end{aligned}
$$

</div>

Ce sont les mêmes règles que pour les puissances : $\mathrm{e}^{\corange{x}}$ se manipule comme « $\mathrm{e}$ puissance $\corange{x}$ ».

## Signe et variations

<div class="encadre">

- Pour tout réel $\corange{x}$, $\mathrm{e}^{\corange{x}} > 0$.
- $(\mathrm{e}^{\corange{x}})' = \mathrm{e}^{\corange{x}} > 0$, donc l'exponentielle est **strictement croissante** sur $\mathbb{R}$.
- Conséquences : $\mathrm{e}^{a} = \mathrm{e}^{b} \iff a = b$ et $\mathrm{e}^{a} < \mathrm{e}^{b} \iff a < b$.

</div>

La pâte n'a jamais un volume nul ou négatif, et elle ne fait que gonfler. Valeurs à retenir : $\mathrm{e}^0 = 1$, $\mathrm{e}^{\corange{x}} > 1$ si $\corange{x} > 0$, $0 < \mathrm{e}^{\corange{x}} < 1$ si $\corange{x} < 0$.

## La fonction $\mathrm{e}^{k\corange{x}}$

<div class="encadre">

Pour tout réel $k$, la fonction $\corange{x} \mapsto \mathrm{e}^{k\corange{x}}$ est dérivable sur $\mathbb{R}$ et :

$$
(\mathrm{e}^{k\corange{x}})' = k\,\mathrm{e}^{k\corange{x}} \qquad\qquad \big(\mathrm{e}^{a\corange{x} + b}\big)' = a\,\mathrm{e}^{a\corange{x} + b}
$$

</div>

- Si $k > 0$, $\mathrm{e}^{k\corange{x}}$ est croissante : c'est une croissance (la pâte qui lève).
- Si $k < 0$, $\mathrm{e}^{k\corange{x}}$ est décroissante : c'est une décroissance (un médicament éliminé, un corps qui refroidit).

## Lien avec les suites géométriques

Pour tout entier $\corange{n}$, $\mathrm{e}^{\corange{n}a} = (\mathrm{e}^{a})^{\corange{n}}$. La suite $u_{\corange{n}} = \mathrm{e}^{\corange{n}a}$ est donc **géométrique** de raison $\mathrm{e}^{a}$ : l'exponentielle est la version « continue » de la photocopieuse des suites géométriques.

## Résoudre

Exemple : $\mathrm{e}^{2\corange{x} - 1} = \mathrm{e}^{\corange{x} + 3}$. Comme l'exponentielle est strictement croissante, $2\corange{x} - 1 = \corange{x} + 3$, soit <mark>$\corange{x} = 4$</mark>.

Exemple : $\mathrm{e}^{\corange{x}^2} \ge \mathrm{e}^{4}$. On compare les exposants : $\corange{x}^2 \ge 4$, soit $\corange{x} \le -2$ ou $\corange{x} \ge 2$.
