---
titre: Dérivation et convexité
court: Dérivation et convexité
description: La dérivation des fonctions composées et la convexité expliquées avec une voiture sur une route de montagne, la dérivée seconde, les points d'inflexion et la position des tangentes, avec des exercices corrigés type bac. Terminale spécialité maths.
ordre: 5
publie: 2026-11-22T20:02:00
video:
  youtube: ""
piege: "**Convexe ne veut pas dire croissante.** La convexité, c'est le sens du volant ($\\cbleu{f}''$), pas la pente ($\\cbleu{f}'$). $\\corange{x}^2$ est convexe sur tout $\\mathbb{R}$, et pourtant elle descend sur $]-\\infty\\,;0]$."
pdf:
  cours: /pdf/maths/terminale/derivation-et-convexite-cours.pdf
  fiche: /pdf/maths/terminale/derivation-et-convexite-fiche.pdf
  exercices: /pdf/maths/terminale/derivation-et-convexite-exercices.pdf
suivant: logarithme-neperien
---

## Le problème

En première, tu as [appris à dériver](/maths/premiere/derivation/cours/) pour trouver les variations d'une fonction : $\cbleu{f}' > 0$, ça monte ; $\cbleu{f}' < 0$, ça descend. Mais deux courbes peuvent monter toutes les deux, l'une de plus en plus vite, l'autre de plus en plus lentement. Comment les distinguer ? Et comment dériver $\mathrm{e}^{3\corange{x}^2 + 1}$ ou $\sqrt{1 + \corange{x}^2}$ ?

## L'idée : la voiture sur la route de montagne

Imagine que tu conduis une voiture sur la courbe, de gauche à droite.

- $\cbleu{f}'$, c'est la **pente** de la route : positive, tu montes ; négative, tu descends.
- $\cbleu{f}''$, c'est le **sens du volant** : si tu tournes à gauche, la route se creuse comme un bol, la fonction est <span class="o">convexe</span>. Si tu tournes à droite, la route fait une bosse, la fonction est <span class="p">concave</span>.
- Le moment où tu passes le volant de gauche à droite (ou l'inverse), c'est un <mark>point d'inflexion</mark>.

## Dériver une composée

<div class="encadre">

**Formule.** Si $\cbleu{f}(\corange{x}) = g(a\corange{x} + b)$, alors $\cbleu{f}'(\corange{x}) = a\,g'(a\corange{x} + b)$.

Plus généralement, $(g \circ u)' = u' \times (g' \circ u)$.

</div>

Les cas à connaître par cœur :

| Fonction | Dérivée |
|---|---|
| $\mathrm{e}^{u}$ | $u'\,\mathrm{e}^{u}$ |
| $u^n$ | $n\,u'\,u^{n-1}$ |
| $\sqrt{u}$ (avec $u > 0$) | $\dfrac{u'}{2\sqrt{u}}$ |
| $\dfrac{1}{u}$ (avec $u \ne 0$) | $-\dfrac{u'}{u^2}$ |

Exemple : $\cbleu{f}(\corange{x}) = \mathrm{e}^{3\corange{x}^2 + 1}$. Ici $u(\corange{x}) = 3\corange{x}^2 + 1$ et $u'(\corange{x}) = 6\corange{x}$, donc $\cbleu{f}'(\corange{x}) = 6\corange{x}\,\mathrm{e}^{3\corange{x}^2 + 1}$.

## La dérivée seconde

<div class="encadre">

Si $\cbleu{f}'$ est elle-même dérivable, sa dérivée est la **dérivée seconde** de $\cbleu{f}$, notée $\cbleu{f}''$.

</div>

Exemple : $\cbleu{f}(\corange{x}) = \corange{x}^3 - 3\corange{x}^2$. Alors $\cbleu{f}'(\corange{x}) = 3\corange{x}^2 - 6\corange{x}$ et $\cbleu{f}''(\corange{x}) = 6\corange{x} - 6$.

## La convexité

<div class="encadre">

**Définition.** $\cbleu{f}$ est **convexe** sur $I$ si sa courbe est **au-dessus de toutes ses tangentes** sur $I$. Elle est **concave** si sa courbe est en dessous de toutes ses tangentes.

**Théorème.** Si $\cbleu{f}$ est deux fois dérivable sur $I$ :
- $\cbleu{f}$ convexe sur $I$ $\iff$ $\cbleu{f}'$ croissante sur $I$ $\iff$ $\cbleu{f}'' \ge 0$ sur $I$ ;
- $\cbleu{f}$ concave sur $I$ $\iff$ $\cbleu{f}'$ décroissante sur $I$ $\iff$ $\cbleu{f}'' \le 0$ sur $I$.

</div>

Une autre façon de voir la convexité : la courbe est **en dessous de ses cordes**. Si tu relies deux points de la courbe par un segment, le bol reste sous le segment.

Les exemples à connaître : $\corange{x}^2$ et $\mathrm{e}^{\corange{x}}$ sont convexes sur $\mathbb{R}$ ; $\sqrt{\corange{x}}$ est concave sur $[0\,;+\infty[$ ; $\corange{x}^3$ est concave sur $]-\infty\,;0]$ et convexe sur $[0\,;+\infty[$.

## Le point d'inflexion

<div class="encadre">

Un **point d'inflexion** est un point où la courbe **traverse sa tangente**. Si $\cbleu{f}''$ **s'annule en changeant de signe** en $a$, alors le point d'abscisse $a$ est un point d'inflexion.

</div>

Avec $\cbleu{f}(\corange{x}) = \corange{x}^3 - 3\corange{x}^2$ : $\cbleu{f}''(\corange{x}) = 6(\corange{x} - 1)$ est négative avant 1 et positive après. La fonction est concave sur $]-\infty\,;1]$, convexe sur $[1\,;+\infty[$, et le point $(1\,;-2)$ est un point d'inflexion : c'est là que la voiture change le sens du volant.

<div class="labo" data-labo="convexite"></div>

## Utiliser la convexité pour une inégalité

La fonction exponentielle est convexe, donc sa courbe est au-dessus de sa tangente en 0, la droite $y = \corange{x} + 1$. On obtient, sans aucun calcul :

$$
\mathrm{e}^{\corange{x}} \ge \corange{x} + 1 \quad \text{pour tout réel } \corange{x}.
$$

C'est une inégalité qui revient souvent au bac.
