---
titre: La fonction logarithme népérien
court: Logarithme népérien
description: Le logarithme népérien expliqué comme le chemin retour de l'exponentielle, ses propriétés algébriques, sa dérivée, ses limites et les croissances comparées, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 6
publie: 2026-11-22T20:03:00
video:
  youtube: ""
piege: "**Le logarithme ne transforme pas une somme.** $\\ln(a + b)$ n'est **pas** $\\ln a + \\ln b$. C'est le **produit** qui devient une somme : $\\ln(a \\times b) = \\ln a + \\ln b$."
pdf:
  cours: /pdf/maths/terminale/logarithme-neperien-cours.pdf
  fiche: /pdf/maths/terminale/logarithme-neperien-fiche.pdf
  exercices: /pdf/maths/terminale/logarithme-neperien-exercices.pdf
suivant: fonctions-trigonometriques
---

## Le problème

Un capital placé à 5 % par an est multiplié par $1{,}05$ chaque année. Au bout de combien d'années aura-t-il doublé ? Il faut résoudre $1{,}05^{\corange{n}} = 2$. L'inconnue est **dans l'exposant** : aucune opération connue ne permet de l'en faire descendre.

Même problème avec $\mathrm{e}^{\corange{x}} = 5$. On sait que la solution existe (l'exponentielle est continue, strictement croissante, et prend toutes les valeurs positives), mais comment l'écrire ?

## L'idée : le chemin retour

L'exponentielle est un chemin qui part d'un nombre $\corange{x}$ et arrive à $\mathrm{e}^{\corange{x}}$. Le <span class="o">logarithme népérien</span> est le **même chemin parcouru à l'envers** : il part de $\mathrm{e}^{\corange{x}}$ et revient à $\corange{x}$.

Sur un graphique, les deux courbes sont **symétriques par rapport à la droite $y = x$** : l'une est le reflet de l'autre dans un miroir posé en diagonale.

Et ce chemin retour a un super-pouvoir : <mark>il transforme les multiplications en additions</mark>. C'est pour ça qu'il fait descendre les exposants.

## La définition

<div class="encadre">

Pour tout réel $a > 0$, l'équation $\mathrm{e}^{\corange{x}} = a$ admet une unique solution, notée $\ln a$. La fonction $\ln$ est définie sur $]0\,;+\infty[$.

$$
\mathrm{e}^{\ln a} = a \ \text{ pour } a > 0 \qquad\qquad \ln(\mathrm{e}^{\corange{x}}) = \corange{x} \ \text{ pour tout réel } \corange{x}
$$

</div>

Valeurs à connaître : $\ln 1 = 0$ (car $\mathrm{e}^0 = 1$) et $\ln \mathrm{e} = 1$.

Le logarithme d'un nombre négatif ou nul **n'existe pas** : l'exponentielle n'arrive jamais là.

## Les propriétés algébriques

<div class="encadre">

Pour tous réels $a > 0$, $b > 0$ et tout entier $n$ :

$$
\begin{aligned}
\ln(a \times b) &= \ln a + \ln b && \text{le produit devient une somme} \\
\ln\left(\tfrac{a}{b}\right) &= \ln a - \ln b && \text{le quotient devient une différence} \\
\ln\left(\tfrac{1}{b}\right) &= -\ln b \\
\ln(a^n) &= n \ln a && \text{l'exposant descend} \\
\ln \sqrt{a} &= \tfrac{1}{2}\ln a
\end{aligned}
$$

</div>

Retour au capital : $1{,}05^{\corange{n}} = 2 \iff \ln(1{,}05^{\corange{n}}) = \ln 2 \iff \corange{n}\ln 1{,}05 = \ln 2 \iff \corange{n} = \dfrac{\ln 2}{\ln 1{,}05} \approx 14{,}2$. Le capital double au bout de <mark>15 ans</mark>.

## Équations et inéquations

La fonction $\ln$ est strictement croissante sur $]0\,;+\infty[$, donc elle **conserve l'ordre** :

<div class="encadre">

Pour $a > 0$ et $b > 0$ : $\ln a = \ln b \iff a = b$ et $\ln a < \ln b \iff a < b$.

Pour tout réel $k$ : $\ln \corange{x} = k \iff \corange{x} = \mathrm{e}^{k}$, et $\mathrm{e}^{\corange{x}} = k \iff \corange{x} = \ln k$ (si $k > 0$).

</div>

Toujours commencer par l'**ensemble de résolution** : l'intérieur d'un $\ln$ doit être strictement positif.

## Étude de la fonction ln

<div class="encadre">

$\ln$ est dérivable sur $]0\,;+\infty[$ et $(\ln \corange{x})' = \dfrac{1}{\corange{x}}$. Plus généralement, si $u > 0$, $(\ln u)' = \dfrac{u'}{u}$.

</div>

- $\frac{1}{\corange{x}} > 0$, donc $\ln$ est **strictement croissante** sur $]0\,;+\infty[$.
- $\ln \corange{x} < 0$ sur $]0\,;1[$, $\ln 1 = 0$, $\ln \corange{x} > 0$ sur $]1\,;+\infty[$.
- $\left(\frac{1}{\corange{x}}\right)' = -\frac{1}{\corange{x}^2} < 0$, donc $\ln$ est **concave**.

## Les limites

$$
\lim_{\corange{x} \to +\infty} \ln \corange{x} = +\infty \qquad\qquad \lim_{\corange{x} \to 0^+} \ln \corange{x} = -\infty
$$

La droite $x = 0$ est asymptote verticale. Et en $+\infty$, le logarithme monte, mais **très lentement** : il faut aller jusqu'à $\corange{x} = \mathrm{e}^{10} \approx 22\,026$ pour atteindre la hauteur 10.

<div class="encadre">

**Croissances comparées.** Pour tout entier $n \ge 1$ :

$$
\lim_{\corange{x} \to +\infty} \frac{\ln \corange{x}}{\corange{x}^n} = 0 \qquad\qquad \lim_{\corange{x} \to 0^+} \corange{x}^n \ln \corange{x} = 0
$$

</div>

Autrement dit, face à une puissance de $\corange{x}$, <mark>le logarithme perd toujours</mark>. C'est l'inverse de l'exponentielle, qui gagne toujours.

Une dernière limite, qui vient du nombre dérivé de $\ln$ en 1 : $\lim\limits_{\corange{x} \to 0} \dfrac{\ln(1 + \corange{x})}{\corange{x}} = 1$.
