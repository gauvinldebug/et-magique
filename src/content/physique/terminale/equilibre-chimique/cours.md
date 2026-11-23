---
titre: Équilibre chimique et évolution spontanée
court: Équilibre et évolution spontanée
description: Transformations non totales, équilibre dynamique, quotient de réaction, constante d'équilibre et critère d'évolution spontanée, expliqués avec deux salles reliées par des portes. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 6
publie: 2026-11-24T01:05:00
video:
  youtube: ""
piege: "**À l'équilibre, la réaction ne s'arrête pas.** Les réactions dans les deux sens continuent, à la même vitesse : les concentrations ne bougent plus, mais les molécules, elles, continuent de réagir."
pdf:
  cours: /pdf/physique/terminale/equilibre-chimique-cours.pdf
  fiche: /pdf/physique/terminale/equilibre-chimique-fiche.pdf
  exercices: /pdf/physique/terminale/equilibre-chimique-exercices.pdf
suivant: piles-et-electrolyse
---

## Le problème

Quand on mélange un acide faible et de l'eau, une partie seulement de l'acide réagit (voir [Force des acides et des bases](/physique/terminale/force-des-acides-et-des-bases/cours/)). Pourquoi la réaction s'arrête-t-elle en route ? Et si on ajoute un réactif, ou un produit, dans quel sens le système va-t-il évoluer ?

## L'idée : deux salles et des portes

Imagine deux salles de fête reliées par des portes. À gauche, la salle des réactifs ; à droite, celle des produits. Les invités passent dans les deux sens.

- Au début, tout le monde est à gauche : beaucoup de gens passent à droite, presque personne ne revient.
- Plus la salle de droite se remplit, plus il y a de gens qui en ressortent.
- À un moment, autant de gens passent dans chaque sens par minute. Le nombre d'invités dans chaque salle ne change plus, et pourtant tout le monde continue de circuler.

C'est l'<span class="o">équilibre dynamique</span>. L'état final d'une transformation non totale n'est pas un arrêt, c'est un match nul entre deux réactions opposées.

## Le quotient de réaction

Pour la réaction $a\,\mathrm{A} + b\,\mathrm{B} \rightleftharpoons c\,\mathrm{C} + d\,\mathrm{D}$ en solution :

<div class="encadre">

**Quotient de réaction** (sans unité) :

$$
\cbleu{Q_r} = \frac{\left(\frac{[\mathrm{C}]}{c^\circ}\right)^{c} \left(\frac{[\mathrm{D}]}{c^\circ}\right)^{d}}{\left(\frac{[\mathrm{A}]}{c^\circ}\right)^{a} \left(\frac{[\mathrm{B}]}{c^\circ}\right)^{b}}
$$

Le **solvant** (l'eau) et les **solides** n'y figurent pas : on leur attribue la valeur 1.

**Constante d'équilibre** $K$ : valeur de $Q_r$ à l'équilibre. Elle ne dépend que de la réaction et de la **température**.

$$
Q_{r,\mathrm{\acute eq}} = K
$$

</div>

$Q_r$ mesure le remplissage de la salle de droite par rapport à celle de gauche. $K$ est le remplissage du match nul.

Une constante d'acidité $K_A$ est un cas particulier : c'est la constante d'équilibre de la réaction d'un acide avec l'eau.

## Le critère d'évolution spontanée

<div class="encadre">

On calcule $Q_{r,i}$ dans l'état initial et on le compare à $K$ :

- $Q_{r,i} < K$ : le système évolue spontanément dans le **sens direct** (gauche → droite) ;
- $Q_{r,i} = K$ : le système est **à l'équilibre**, pas d'évolution macroscopique ;
- $Q_{r,i} > K$ : il évolue dans le **sens indirect** (droite → gauche).

</div>

<mark>$Q_r$ évolue toujours vers $K$</mark>. Si la salle de droite est trop vide, des invités y vont ; si elle est trop pleine, ils en reviennent.

Conséquence pratique : si on ajoute un réactif, $Q_r$ diminue, devient inférieur à $K$, et le système repart dans le sens direct. Si on retire un produit au fur et à mesure (par distillation, par exemple), la réaction continue jusqu'à épuisement d'un réactif. C'est ainsi qu'on améliore un rendement.

## Totale ou non totale ?

Le **taux d'avancement final** $\tau = \dfrac{x_f}{x_{\max}}$ dit si la transformation est totale ($\tau = 1$) ou non ($\tau < 1$).

Ordre de grandeur utile : si $K > 10^4$, la transformation peut généralement être considérée comme **totale** ; si $K < 10^{-4}$, elle est très peu avancée. Entre les deux, on a un équilibre avec des quantités notables de réactifs et de produits. Ce critère reste indicatif, $\tau$ dépend aussi des quantités initiales.

## Les pièges

- L'eau (solvant) et les solides ne figurent **pas** dans $Q_r$.
- Chaque concentration est élevée à la puissance de son **coefficient stœchiométrique**.
- $K$ dépend de la température, pas des quantités initiales.
- À l'équilibre, la réaction continue dans les deux sens : il est **dynamique**.
