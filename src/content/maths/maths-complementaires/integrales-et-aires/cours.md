---
titre: Primitives, intégrales et calculs d'aires
court: Intégrales et aires
description: Primitives usuelles, intégrale d'une fonction et aire sous la courbe, relation de Chasles, linéarité, valeur moyenne et aire entre deux courbes, expliquées avec le compteur kilométrique d'une voiture, avec des exercices corrigés pas à pas. Terminale maths complémentaires.
ordre: 4
publie: 2026-11-23T02:13:00
video:
  youtube: ""
piege: >-
  **Une intégrale n'est une aire que si la fonction est positive.** Si la courbe passe sous l'axe, l'intégrale compte cette partie en **négatif**. Pour une aire entre deux courbes, on intègre toujours « celle du dessus moins celle du dessous ».
pdf:
  cours: /pdf/maths/maths-complementaires/integrales-et-aires-cours.pdf
  fiche: /pdf/maths/maths-complementaires/integrales-et-aires-fiche.pdf
  exercices: /pdf/maths/maths-complementaires/integrales-et-aires-exercices.pdf
suivant: lois-de-probabilite
---

## Le problème

Une voiture roule à 20 m/s et freine. Sa vitesse est $v(t) = 20 - 4t$ (en m/s), où $t \in [0\,;5]$ est en secondes. Quelle distance parcourt-elle avant de s'arrêter ?

## L'idée : le compteur kilométrique

Sur le tableau de bord, il y a deux cadrans. Le **compteur de vitesse** dit à quelle allure tu roules, à chaque instant. Le **compteur kilométrique** accumule tout ce que tu as parcouru.

Passer de la vitesse à la distance, c'est **accumuler** : additionner « vitesse × petit temps » sur tout le trajet. Sur le graphique de la vitesse, ce cumul, c'est l'**aire sous la courbe**. C'est exactement une **intégrale**.

## Primitives

<div class="encadre">

$F$ est une **primitive** de $f$ si $F' = f$. Deux primitives diffèrent d'une constante.

| $f(x)$ | une primitive $F(x)$ |
|---|---|
| $k$ | $kx$ |
| $x^n$ | $\frac{x^{n+1}}{n + 1}$ |
| $\frac{1}{x}$ ($x > 0$) | $\ln x$ |
| $e^{ax}$ | $\frac{1}{a}e^{ax}$ |

</div>

## Intégrale

<div class="encadre">

Si $f$ est continue sur $[a\,;b]$ et $F$ en est une primitive :

$$
\corange{\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)}.
$$

- Si $f \ge 0$, c'est l'**aire** (en unités d'aire) entre la courbe, l'axe des abscisses et les droites $x = a$, $x = b$.
- **Linéarité** : $\int_a^b (f + g) = \int_a^b f + \int_a^b g$ et $\int_a^b kf = k\int_a^b f$.
- **Chasles** : $\int_a^b f + \int_b^c f = \int_a^c f$.

</div>

**Valeur moyenne** de $f$ sur $[a\,;b]$ : $\mu = \dfrac{1}{b - a}\displaystyle\int_a^b f(x)\,\mathrm{d}x$.

**Aire entre deux courbes** : si $f \ge g$ sur $[a\,;b]$, l'aire vaut $\int_a^b (f - g)$.

## Retour au problème

La vitesse s'annule en $t = 5$. Une primitive de $v$ est $D(t) = 20t - 2t^2$, donc

$$
\int_0^5 (20 - 4t)\,\mathrm{d}t = D(5) - D(0) = 100 - 50 = 50.
$$

<mark>La voiture parcourt 50 mètres avant de s'arrêter</mark>. C'est l'aire du triangle sous la droite : $\frac{5 \times 20}{2} = 50$.

La suite : les [lois de probabilité](/maths/maths-complementaires/lois-de-probabilite/cours/). Pour aller plus loin : l'[intégration de spécialité](/maths/terminale/integration/cours/).
