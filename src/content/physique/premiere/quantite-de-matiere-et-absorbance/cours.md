---
titre: Quantité de matière, concentration et absorbance
court: Quantité de matière et absorbance
description: Masse molaire, quantité de matière, volume molaire, concentration, couleur d'une solution, absorbance et loi de Beer-Lambert, expliqués avec des vis vendues au poids. Exercices corrigés. Première spécialité physique-chimie.
ordre: 1
publie: 2026-11-24T01:20:00
video:
  youtube: ""
piege: "**Une solution rouge absorbe le vert, pas le rouge.** La couleur perçue est la couleur complémentaire de celle qui est absorbée. On règle donc le spectrophotomètre sur la couleur absorbée, au maximum du spectre d'absorption."
pdf:
  cours: /pdf/physique/premiere/quantite-de-matiere-et-absorbance-cours.pdf
  fiche: /pdf/physique/premiere/quantite-de-matiere-et-absorbance-fiche.pdf
  exercices: /pdf/physique/premiere/quantite-de-matiere-et-absorbance-exercices.pdf
suivant: oxydoreduction
---

## Le problème

Une recette de chimie ne dit pas « mets 3 000 milliards de milliards de molécules d'éthanol ». Personne ne sait les compter une par une. Elle dit « 0,050 mol », et au laboratoire on pèse ou on mesure un volume. Comment passer de la balance au nombre d'entités ? Et comment connaître la concentration d'une solution colorée sans rien peser ?

## L'idée : les vis vendues au poids

Dans une quincaillerie, les petites vis ne se comptent pas : on les **pèse**. Si une vis pèse 2 g et que le sachet pèse 300 g, il contient 150 vis. On a compté sans compter.

En chimie, c'est pareil, avec un « sachet » standard : la **mole**. Une mole, c'est $6{,}02 \times 10^{23}$ entités (le nombre d'Avogadro $N_A$). La masse d'une mole de l'espèce, sa **masse molaire**, joue le rôle du poids d'une vis.

## Quantité de matière

<div class="encadre">

| On connaît… | Quantité de matière | Unités |
|---|---|---|
| le nombre d'entités $N$ | $n = \dfrac{N}{N_A}$ | $N_A = 6{,}02 \times 10^{23}\ \mathrm{mol^{-1}}$ |
| la masse $m$ d'un échantillon | $n = \dfrac{m}{M}$ | $m$ en g, $M$ en $\mathrm{g \cdot mol^{-1}}$ |
| le volume $V$ d'un gaz | $n = \dfrac{V}{V_m}$ | $V_m \approx 24\ \mathrm{L \cdot mol^{-1}}$ à 20 °C et 1 bar |
| la concentration $c$ et le volume $V$ d'une solution | $n = c \times V$ | $c$ en $\mathrm{mol \cdot L^{-1}}$, $V$ en L |

</div>

La **masse molaire moléculaire** est la somme des masses molaires atomiques. Pour l'eau, $M(\mathrm{H_2O}) = 2 \times 1{,}0 + 16{,}0 = 18{,}0\ \mathrm{g \cdot mol^{-1}}$.

Pour un liquide, on mesure souvent un volume : on passe par la masse volumique, $m = \rho \times V$, puis $n = m/M$.

Le **volume molaire** d'un gaz ne dépend pas de la nature du gaz, seulement de la température et de la pression.

## Concentrations

<div class="encadre">

**Concentration en quantité de matière** : $\ \cbleu{c} = \dfrac{n_{\text{soluté}}}{V_{\text{solution}}}$ en $\mathrm{mol \cdot L^{-1}}$.

**Concentration en masse** : $\ c_m = \dfrac{m_{\text{soluté}}}{V_{\text{solution}}}$ en $\mathrm{g \cdot L^{-1}}$. Elles sont reliées par $c_m = c \times M$.

</div>

## Couleur et absorbance

Une solution colorée **absorbe** une partie de la lumière blanche. La couleur qu'on voit est la **couleur complémentaire** de celle qui est absorbée (sur le cercle chromatique, elles sont opposées). Une solution de sulfate de cuivre absorbe surtout le rouge-orangé : elle paraît bleue.

Un **spectrophotomètre** mesure l'**absorbance** $A$ d'une solution (sans unité) à une longueur d'onde donnée. Le graphique $A = f(\lambda)$ est le **spectre d'absorption** ; on travaille au maximum, $\lambda_{\max}$, où la mesure est la plus sensible.

<div class="encadre">

**Loi de Beer-Lambert** (solution diluée, à $\lambda$ fixée) :

$$
\cbleu{A} = k \times \corange{c}
$$

L'absorbance est **proportionnelle** à la concentration de l'espèce colorée.

</div>

**Dosage par étalonnage** : on mesure l'absorbance de solutions étalons de concentrations connues, on trace la droite $A = f(c)$, et on y lit la concentration de la solution inconnue. Cette méthode est approfondie en [Terminale](/physique/terminale/dosages-et-titrages/cours/).

<div class="labo" data-labo="beer"></div>

## Les pièges

- $n = m/M$ : la masse en **grammes** si $M$ est en $\mathrm{g \cdot mol^{-1}}$.
- La concentration se calcule avec le volume de la **solution**, pas celui du solvant.
- Couleur perçue = complémentaire de la couleur absorbée.
- Beer-Lambert seulement pour une solution **diluée**.
