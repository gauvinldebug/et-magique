---
titre: Fluides au repos, pression et loi de Mariotte
court: Statique des fluides
description: Masse volumique, pression et force pressante, interprétation microscopique, loi de Mariotte et loi fondamentale de la statique des fluides, expliquées avec une pile de manteaux sur un lit. Exercices corrigés. Première spécialité physique-chimie.
ordre: 9
publie: 2026-11-24T01:28:00
video:
  youtube: ""
piege: "**La pression ne dépend que de la profondeur, pas de la forme du récipient.** Au fond d'un tube fin de 10 m rempli d'eau, la pression est la même qu'au fond d'un lac de 10 m."
pdf:
  cours: /pdf/physique/premiere/statique-des-fluides-cours.pdf
  fiche: /pdf/physique/premiere/statique-des-fluides-fiche.pdf
  exercices: /pdf/physique/premiere/statique-des-fluides-exercices.pdf
suivant: mouvement-et-forces
---

## Le problème

Quand tu plonges au fond d'une piscine, tes oreilles te font mal. Quand tu montes en montagne, ton paquet de chips gonfle. Dans les deux cas, c'est la **pression** qui change. Elle augmente quand on descend dans un liquide, elle diminue quand on monte dans l'air.

## L'idée : la pile de manteaux

Pendant une fête, tout le monde jette son manteau sur le même lit. Le manteau du dessus ne supporte rien. Celui du dessous supporte le poids de tous les autres. <mark>Plus on est bas dans la pile, plus on est écrasé.</mark>

Dans un fluide, c'est pareil. Chaque couche supporte le poids de toutes les couches au-dessus. Au fond de la piscine, tu as sur la tête toute l'eau, plus toute l'atmosphère.

## Les grandeurs d'un fluide

<div class="encadre">

**Masse volumique.** $\rho = \dfrac{m}{V}$ en $\mathrm{kg \cdot m^{-3}}$. Eau : $1{,}0 \times 10^{3}\ \mathrm{kg \cdot m^{-3}}$. Air au niveau de la mer : environ $1{,}2\ \mathrm{kg \cdot m^{-3}}$.

**Force pressante.** Un fluide exerce sur toute surface $S$ en contact une force perpendiculaire à la surface, dirigée vers elle, de valeur

$$
\cbleu{F} = \corange{P} \times \cvert{S}
$$

avec $P$ la pression en pascals ($\mathrm{Pa}$), $S$ en $\mathrm{m^2}$, $F$ en newtons.

</div>

Repères : la pression atmosphérique vaut environ $1{,}013 \times 10^{5}\ \mathrm{Pa}$, soit $1{,}013\ \mathrm{bar}$ ($1\ \mathrm{bar} = 10^{5}\ \mathrm{Pa}$). Un pneu de voiture est gonflé vers $2{,}5\ \mathrm{bar}$ au-dessus de la pression atmosphérique.

## Ce qui se passe à l'échelle des molécules

Un gaz, ce sont des molécules qui filent dans tous les sens et rebondissent sur les parois. Chaque choc pousse un peu la paroi. La pression, c'est l'effet moyen de ces milliards de chocs.

- Plus il y a de molécules dans un même volume, plus il y a de chocs : la pression monte.
- Plus les molécules vont vite (température plus haute), plus les chocs sont violents : la pression monte.

La température, à cette échelle, mesure l'agitation des molécules.

## La loi de Mariotte

<div class="encadre">

Pour une quantité de gaz donnée, **à température constante**, le produit de la pression par le volume reste constant :

$$
P \times V = \text{constante} \qquad\Longleftrightarrow\qquad P_1\,V_1 = P_2\,V_2
$$

</div>

Diviser le volume par deux double la pression : les molécules sont deux fois plus serrées, elles frappent deux fois plus souvent les parois. Cette loi est bien vérifiée pour les gaz aux pressions usuelles.

## La loi fondamentale de la statique des fluides

<div class="encadre">

Dans un fluide **incompressible** (un liquide) au repos, pour deux points A et B d'altitudes $z_A$ et $z_B$ (axe vertical vers le haut) :

$$
P_B - P_A = \rho\,g\,(z_A - z_B)
$$

</div>

Lis-la avec la pile de manteaux : si B est plus bas que A ($z_B < z_A$), alors $P_B > P_A$. L'écart de pression vaut le poids de la colonne de liquide entre les deux, par unité de surface.

Pour l'eau, $\rho g \approx 1{,}0 \times 10^{3} \times 9{,}8 \approx 10^{4}\ \mathrm{Pa \cdot m^{-1}}$ : <mark>chaque mètre de profondeur ajoute environ 0,1 bar</mark>. À 10 m sous l'eau, la pression a doublé par rapport à la surface.

Conséquences :

- Deux points à la **même profondeur** dans le même liquide ont la **même pression**, quelle que soit la forme du récipient.
- La surface libre d'un liquide au repos est **horizontale**, et le niveau est le même dans des vases reliés entre eux (vases communicants).

## Les pièges

- Les pressions en **pascals** dans les formules, pas en bars ni en hectopascals.
- La loi de Mariotte ne vaut qu'à **température constante** et pour une **même quantité** de gaz.
- Dans $P_B - P_A = \rho g (z_A - z_B)$, l'axe $z$ est dirigé **vers le haut** : un point plus profond a un $z$ plus petit.
- La loi fondamentale s'applique aux liquides. Pour l'air, $\rho$ varie avec l'altitude, on ne l'utilise que sur de petites hauteurs.
