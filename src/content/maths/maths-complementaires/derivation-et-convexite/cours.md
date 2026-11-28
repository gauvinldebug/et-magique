---
titre: Dérivation et convexité
court: Dérivation et convexité
description: Dérivées usuelles et opérations, tangente, sens de variation et extremums, dérivée seconde, convexité et point d'inflexion pour modéliser une évolution, expliqués avec la pédale d'accélérateur, avec des exercices corrigés pas à pas. Terminale maths complémentaires.
ordre: 2
publie: 2026-11-23T02:11:00
video:
  youtube: ""
piege: >-
  **Le signe de $f'$ donne les variations, le signe de $f''$ donne la convexité.** Une fonction peut être croissante et concave à la fois : elle monte, mais de moins en moins vite. Ne confonds pas « $f''$ s'annule » et « $f$ admet un maximum ».
pdf:
  cours: /pdf/maths/maths-complementaires/derivation-et-convexite-cours.pdf
  fiche: /pdf/maths/maths-complementaires/derivation-et-convexite-fiche.pdf
  exercices: /pdf/maths/maths-complementaires/derivation-et-convexite-exercices.pdf
suivant: exponentielle-et-logarithme
---

## Le problème

Une vidéo devient virale. Le nombre de personnes qui l'ont vue, en milliers, est modélisé par $N(t) = -t^3 + 9t^2 + 2$, où $t \in [0\,;6]$ est le temps en jours. À quel moment la vidéo se répand-elle **le plus vite** ?

## L'idée : la pédale d'accélérateur

En voiture, ta **position** avance, ta **vitesse** dit à quel rythme elle avance, et la pédale dit si la vitesse augmente ou diminue.

- La **dérivée** $f'$, c'est la vitesse : elle dit si $f$ monte ou descend.
- La **dérivée seconde** $f''$, c'est la pédale : pied appuyé, la vitesse augmente (fonction **convexe**) ; pied levé, elle diminue (fonction **concave**).
- Le moment où l'on **lève le pied**, c'est le **point d'inflexion**.

## Dérivées

<div class="encadre">

| $f(x)$ | $f'(x)$ |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $e^{x}$ | $e^{x}$ |
| $e^{ax + b}$ | $ae^{ax + b}$ |
| $\ln x$ | $\frac{1}{x}$ |

Opérations : $(u + v)' = u' + v'$, $(ku)' = ku'$, $(uv)' = u'v + uv'$, $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$.

**Tangente** en $a$ : $y = f'(a)(x - a) + f(a)$.

</div>

## Variations et extremums

<div class="encadre">

- Si $f' > 0$ sur un intervalle, $f$ y est **croissante** ; si $f' < 0$, **décroissante**.
- Si $f'$ s'annule **en changeant de signe** en $a$, $f$ admet un **extremum** en $a$.

</div>

## Convexité

<div class="encadre">

- $f$ est **convexe** si sa courbe est au-dessus de ses tangentes, ce qui revient à $\corange{f'' \ge 0}$ ($f'$ croissante).
- $f$ est **concave** si sa courbe est en dessous de ses tangentes : $f'' \le 0$.
- Un **point d'inflexion** est un point où la courbe traverse sa tangente : $f''$ s'y annule **en changeant de signe**.

</div>

<div class="labo" data-labo="convexite"></div>

## Retour au problème

La vitesse de propagation est $N'(t) = -3t^2 + 18t = 3t(6 - t)$, positive sur $[0\,;6]$ : $N$ est croissante.

$N''(t) = -6t + 18$ est positive avant 3 et négative après. $N$ est convexe sur $[0\,;3]$, concave sur $[3\,;6]$ : point d'inflexion en $t = 3$, avec $N'(3) = 27$.

<mark>La vidéo se répand le plus vite au bout de 3 jours, à 27 000 vues par jour</mark>. Ensuite, elle continue de monter, mais de moins en moins vite.

La suite : [exponentielle et logarithme](/maths/maths-complementaires/exponentielle-et-logarithme/cours/). Pour revoir les bases : la [dérivation de 1re](/maths/premiere/derivation/cours/).
