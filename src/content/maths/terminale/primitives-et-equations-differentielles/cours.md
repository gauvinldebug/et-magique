---
titre: Primitives et équations différentielles
court: Primitives et équations différentielles
description: Les primitives et les équations différentielles y' = ay + b expliquées avec un compteur de vitesse et un point de départ, le tableau des primitives, la condition initiale et des exercices corrigés type bac. Terminale spécialité maths.
ordre: 8
publie: 2026-11-22T20:11:00
video:
  youtube: ""
piege: "**Une primitive, pas la primitive.** Si $F$ est une primitive de $f$, alors $F + C$ en est une aussi, pour toute constante $C$. Sans condition initiale, il ne faut jamais oublier le « $+ C$ »."
pdf:
  cours: /pdf/maths/terminale/primitives-et-equations-differentielles-cours.pdf
  fiche: /pdf/maths/terminale/primitives-et-equations-differentielles-fiche.pdf
  exercices: /pdf/maths/terminale/primitives-et-equations-differentielles-exercices.pdf
suivant: integration
---

## Le problème

Jusqu'ici, on partait d'une fonction et on calculait sa dérivée. Maintenant, on fait **le chemin inverse** : on connaît la dérivée, et on cherche la fonction.

Par exemple, la vitesse d'une voiture est $v(t) = 2t$ (en m/s). Quelle distance a-t-elle parcourue au temps $t$ ? Ou encore : une population de bactéries grandit à une vitesse proportionnelle à sa taille. Comment évolue-t-elle ?

## L'idée : le compteur de vitesse et le point de départ

Tu es passager d'une voiture, les yeux fixés sur le **compteur de vitesse**. À chaque instant, tu connais la vitesse, c'est-à-dire la dérivée de la position. Peux-tu retrouver **où tu es** ?

Presque. Le compteur te dit **comment** tu avances, mais pas **d'où** tu es parti. Deux voitures qui roulent exactement à la même vitesse, l'une partie de Paris, l'autre de Lyon, n'ont pas la même position. Il faut connaître le <span class="o">point de départ</span>.

- Retrouver la position à partir de la vitesse, c'est chercher une <mark>primitive</mark>.
- Le point de départ, c'est la <mark>condition initiale</mark> : elle fixe la constante.

## Les primitives

<div class="encadre">

**Définition.** Soit $\cbleu{f}$ définie sur un intervalle $I$. Une **primitive** de $\cbleu{f}$ sur $I$ est une fonction $F$ dérivable sur $I$ telle que $F' = \cbleu{f}$.

**Théorème.** Toute fonction continue sur $I$ admet des primitives. Si $F$ est l'une d'elles, les autres sont les fonctions $F + C$, avec $C$ constante réelle. Il en existe **une seule** qui prend une valeur donnée en un point donné.

</div>

## Le tableau des primitives

| Fonction $\cbleu{f}$ | Une primitive $F$ | Sur |
|---|---|---|
| $a$ (constante) | $a\corange{x}$ | $\mathbb{R}$ |
| $\corange{x}^n$ ($n \ne -1$) | $\dfrac{\corange{x}^{n+1}}{n+1}$ | $\mathbb{R}$ si $n \ge 0$, $]0\,;+\infty[$ sinon |
| $\dfrac{1}{\corange{x}}$ | $\ln \corange{x}$ | $]0\,;+\infty[$ |
| $\dfrac{1}{\sqrt{\corange{x}}}$ | $2\sqrt{\corange{x}}$ | $]0\,;+\infty[$ |
| $\mathrm{e}^{\corange{x}}$ | $\mathrm{e}^{\corange{x}}$ | $\mathbb{R}$ |
| $\cos \corange{x}$ | $\sin \corange{x}$ | $\mathbb{R}$ |
| $\sin \corange{x}$ | $-\cos \corange{x}$ | $\mathbb{R}$ |

Et pour les formes composées, on relit les dérivées à l'envers :

| Forme | Une primitive |
|---|---|
| $u'\,\mathrm{e}^{u}$ | $\mathrm{e}^{u}$ |
| $u'\,u^n$ ($n \ne -1$) | $\dfrac{u^{n+1}}{n+1}$ |
| $\dfrac{u'}{u}$ (avec $u > 0$) | $\ln u$ |
| $\dfrac{u'}{\sqrt{u}}$ | $2\sqrt{u}$ |

Exemple : une primitive de $2\corange{x}\,\mathrm{e}^{\corange{x}^2}$ est $\mathrm{e}^{\corange{x}^2}$, car c'est de la forme $u'\mathrm{e}^{u}$ avec $u = \corange{x}^2$.

Quand il manque un facteur, on l'ajuste : une primitive de $\mathrm{e}^{3\corange{x}}$ est $\frac{1}{3}\mathrm{e}^{3\corange{x}}$. On vérifie toujours en dérivant.

## Les équations différentielles

Une **équation différentielle** est une équation dont l'inconnue est une **fonction** $y$, et qui fait intervenir sa dérivée $y'$.

<div class="encadre">

**$y' = a y$** ($a$ réel non nul). Les solutions sont les fonctions $\corange{x} \mapsto C\,\mathrm{e}^{a\corange{x}}$, avec $C$ constante réelle.

**$y' = a y + b$** ($a \ne 0$). Les solutions sont les fonctions $\corange{x} \mapsto C\,\mathrm{e}^{a\corange{x}} - \dfrac{b}{a}$, avec $C$ constante réelle.

**$y' = a y + \cbleu{f}$.** Si $p$ est une solution particulière, les solutions sont les fonctions $p + C\,\mathrm{e}^{a\corange{x}}$.

</div>

La fonction constante $-\frac{b}{a}$ est la **solution d'équilibre** : si on part de là, on n'en bouge plus, car sa dérivée est nulle et $a \times \left(-\frac{b}{a}\right) + b = 0$.

## Retour au problème

Une population de bactéries $N(t)$ (en milliers) vérifie $N' = 0{,}3\,N$ et $N(0) = 2$.

$$
\begin{aligned}
N(t) &= C\,\mathrm{e}^{0{,}3t} && \text{solutions de } y' = ay \\
N(0) &= C = 2 && \text{le point de départ} \\
N(t) &= 2\,\mathrm{e}^{0{,}3t}
\end{aligned}
$$

La population double quand $\mathrm{e}^{0{,}3t} = 2$, soit $t = \frac{\ln 2}{0{,}3} \approx 2{,}3$ heures.
