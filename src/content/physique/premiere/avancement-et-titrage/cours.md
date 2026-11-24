---
titre: Avancement, réactif limitant et titrage
court: Avancement et titrage
description: Tableau d'avancement, avancement maximal, réactif limitant, mélange stœchiométrique et titrage avec repérage colorimétrique de l'équivalence, expliqués avec une chaîne de fabrication de sandwichs. Exercices corrigés. Première spécialité physique-chimie.
ordre: 3
publie: 2026-11-24T01:22:00
video:
  youtube: ""
piege: "**Le réactif limitant n'est pas forcément celui qu'on a en plus petite quantité.** Il faut tenir compte des coefficients : on compare $\\frac{n_A}{a}$ et $\\frac{n_B}{b}$, pas $n_A$ et $n_B$."
pdf:
  cours: /pdf/physique/premiere/avancement-et-titrage-cours.pdf
  fiche: /pdf/physique/premiere/avancement-et-titrage-fiche.pdf
  exercices: /pdf/physique/premiere/avancement-et-titrage-exercices.pdf
suivant: structure-des-molecules
---

## Le problème

On mélange deux réactifs. Lequel va s'épuiser en premier ? Combien de produit va-t-on obtenir ? Et à l'inverse, en faisant réagir une solution de concentration inconnue jusqu'à épuisement, peut-on retrouver sa concentration ? Il faut un outil de comptabilité : l'**avancement**.

## L'idée : la chaîne de sandwichs

Une cantine fabrique des sandwichs selon une recette fixe : **2 tranches de pain + 1 tranche de jambon → 1 sandwich**. En réserve : 10 tranches de pain et 7 tranches de jambon.

- Avec 10 tranches de pain, on peut faire 5 sandwichs.
- Avec 7 tranches de jambon, on pourrait en faire 7.

On s'arrête à 5 : le **pain** manque le premier. C'est le **réactif limitant**. Il reste 2 tranches de jambon : le jambon est **en excès**. Le nombre de sandwichs réalisés, c'est l'**avancement**.

Remarque que le jambon était pourtant en plus petite quantité… mais la recette en demande deux fois moins.

## L'avancement et le tableau

Pour la réaction $a\,\mathrm{A} + b\,\mathrm{B} \longrightarrow c\,\mathrm{C} + d\,\mathrm{D}$, l'**avancement** $x$ (en mol) compte le nombre de « recettes » réalisées.

<div class="encadre">

| État | Avancement | $n(\mathrm{A})$ | $n(\mathrm{B})$ | $n(\mathrm{C})$ | $n(\mathrm{D})$ |
|---|---|---|---|---|---|
| initial | $0$ | $n_A$ | $n_B$ | $0$ | $0$ |
| en cours | $x$ | $n_A - a\,x$ | $n_B - b\,x$ | $c\,x$ | $d\,x$ |
| final | $x_f$ | $n_A - a\,x_f$ | $n_B - b\,x_f$ | $c\,x_f$ | $d\,x_f$ |

</div>

Pour une transformation **totale**, l'avancement final est l'**avancement maximal** $x_{\max}$ : la plus petite valeur qui annule la quantité d'un réactif.

$$
x_{\max} = \min\left(\frac{n_A}{a}\,;\ \frac{n_B}{b}\right)
$$

Le réactif qui donne cette plus petite valeur est le **réactif limitant**. Si $\frac{n_A}{a} = \frac{n_B}{b}$, les deux s'épuisent en même temps : le mélange est **stœchiométrique**.

## Le titrage

Titrer une espèce, c'est déterminer sa quantité (ou sa concentration) en la faisant réagir avec une espèce de concentration **connue**, versée progressivement à la burette.

<div class="encadre">

La réaction support doit être **totale**, **rapide** et **unique**.

**Équivalence** : les réactifs ont été introduits dans les proportions stœchiométriques. Avant, le réactif titrant est limitant ; après, c'est l'espèce titrée. Pour $a\,\mathrm{A}$ (titré) $+ b\,\mathrm{B}$ (titrant) :

$$
\frac{n_A}{a} = \frac{n_{B,E}}{b} \qquad\Longleftrightarrow\qquad \frac{c_A \times V_A}{a} = \frac{c_B \times V_E}{b}
$$

</div>

**Repérage colorimétrique** : l'équivalence se voit à un **changement de couleur**. Par exemple, dans le titrage des ions fer(II) par les ions permanganate (violets), le permanganate est décoloré tant qu'il reste des ions fer(II) ; à la première goutte en excès, la solution reste **rose-violet**. Ou on ajoute un indicateur coloré.

En pratique : un premier titrage rapide pour encadrer $V_E$, puis un titrage précis, goutte à goutte, près de l'équivalence.

## Les pièges

- Réactif limitant : comparer $n_A/a$ et $n_B/b$, pas $n_A$ et $n_B$.
- L'avancement est en **moles**, et on lit les quantités **finales** dans la dernière ligne.
- À l'équivalence, ce sont les **quantités de matière** qui sont proportionnelles, avec les coefficients.
- Le volume dans $c_A V_A$ est celui de la **prise d'essai** titrée, pas le volume total du bécher.
