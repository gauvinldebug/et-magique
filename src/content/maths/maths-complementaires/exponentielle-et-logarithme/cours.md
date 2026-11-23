---
titre: Fonction exponentielle et fonction logarithme
court: Exponentielle et logarithme
description: Propriétés de l'exponentielle, fonction logarithme népérien, règles de calcul, résolution d'équations et d'inéquations, croissance et décroissance exponentielles, expliquées avec un nénuphar qui double, avec des exercices corrigés pas à pas. Terminale maths complémentaires.
ordre: 3
publie: 2026-11-23T02:12:00
video:
  youtube: ""
piege: >-
  **$\ln(a + b)$ n'est pas égal à $\ln a + \ln b$.** La règle est $\ln(ab) = \ln a + \ln b$ : le logarithme transforme les **produits** en sommes. Et $\ln x$ n'existe que pour $x > 0$ : $\ln 0$ et $\ln(-2)$ n'ont pas de sens.
pdf:
  cours: /pdf/maths/maths-complementaires/exponentielle-et-logarithme-cours.pdf
  fiche: /pdf/maths/maths-complementaires/exponentielle-et-logarithme-fiche.pdf
  exercices: /pdf/maths/maths-complementaires/exponentielle-et-logarithme-exercices.pdf
suivant: integrales-et-aires
---

## Le problème

Tu places 1 000 € à 4 % d'intérêts par an. Combien d'années faut-il attendre pour que ton capital **double** ?

## L'idée : le nénuphar qui double

Sur un étang, un nénuphar double de surface chaque jour. Le jour 30, il couvre tout l'étang. Quand en couvrait-il la moitié ? Le jour 29, la veille !

L'**exponentielle**, c'est ce nénuphar : une croissance qui se **multiplie** à chaque étape. Le **logarithme** répond à la question inverse : **combien d'étapes** faut-il pour atteindre une taille donnée ? Il transforme les multiplications en additions, comme on compte les doublements.

## La fonction exponentielle

<div class="encadre">

$\exp$ est la fonction définie sur $\mathbb{R}$, égale à sa dérivée, avec $e^0 = 1$. On note $e^x$, et $e \approx 2{,}718$.

- $e^x > 0$ pour tout $x$, et $\exp$ est **croissante**.
- $e^{a + b} = e^a e^b$, $e^{-a} = \frac{1}{e^a}$, $(e^a)^n = e^{na}$.
- $\lim\limits_{x \to +\infty} e^x = +\infty$ et $\lim\limits_{x \to -\infty} e^x = 0$.

</div>

**Modèles** : $f(t) = Ce^{kt}$ est une croissance exponentielle si $k > 0$, une décroissance si $k < 0$.

## Le logarithme népérien

<div class="encadre">

Pour $y > 0$, $\ln y$ est l'unique réel $x$ tel que $e^x = y$ :

$$
\corange{e^x = y \iff x = \ln y}.
$$

- $\ln 1 = 0$, $\ln e = 1$, $\ln$ est définie et croissante sur $]0\,;+\infty[$, $(\ln x)' = \frac{1}{x}$.
- $\ln(ab) = \ln a + \ln b$, $\ln\frac{a}{b} = \ln a - \ln b$, $\ln(a^n) = n\ln a$.

</div>

**Résoudre** : $e^{x} = 5 \iff x = \ln 5$. Et $q^n > S$ (avec $q > 1$) $\iff n > \frac{\ln S}{\ln q}$.

## Retour au problème

Le capital après $n$ années vaut $1000 \times 1{,}04^n$. On cherche $1{,}04^n \ge 2$, soit $n \ln 1{,}04 \ge \ln 2$ :

$$
n \ge \frac{\ln 2}{\ln 1{,}04} \approx 17{,}7.
$$

<mark>Le capital double au bout de 18 ans</mark>.

La suite : [intégrales et calculs d'aires](/maths/maths-complementaires/integrales-et-aires/cours/). Pour aller plus loin : le [logarithme népérien de spécialité](/maths/terminale/logarithme-neperien/cours/).
