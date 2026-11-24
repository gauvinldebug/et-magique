---
titre: Mécanique des fluides
court: Mécanique des fluides
description: Poussée d'Archimède, débit volumique, conservation du débit, relation de Bernoulli et effet Venturi, expliqués avec le pouce sur un tuyau d'arrosage. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 12
publie: 2026-11-24T01:11:00
video:
  youtube: ""
piege: "**Là où le fluide va plus vite, la pression est plus faible, pas plus forte.** C'est contre-intuitif, mais c'est ce que dit la relation de Bernoulli à altitude constante : $P + \\frac{1}{2}\\rho v^2$ reste constant."
pdf:
  cours: /pdf/physique/terminale/mecanique-des-fluides-cours.pdf
  fiche: /pdf/physique/terminale/mecanique-des-fluides-fiche.pdf
  exercices: /pdf/physique/terminale/mecanique-des-fluides-exercices.pdf
suivant: thermodynamique
---

## Le problème

Un paquebot de plusieurs dizaines de milliers de tonnes flotte. Quand tu poses ton pouce sur l'embout d'un tuyau d'arrosage, l'eau jaillit plus loin. Et une voiture qui double un camion se sent aspirée vers lui. Trois phénomènes, une même physique : celle des fluides, liquides et gaz.

## L'idée : le pouce sur le tuyau

Pose ton pouce sur l'embout d'un tuyau d'arrosage. Le robinet n'a pas bougé : il passe toujours le même volume d'eau par seconde. Mais la sortie est plus étroite, donc l'eau doit aller **plus vite** pour passer.

Ce que l'eau gagne en vitesse, elle le perd en **pression** : c'est un échange, comme un budget fixe partagé entre la pression, la vitesse et l'altitude. Ces deux idées, conservation du débit et partage du budget, sont tout le chapitre (après Archimède).

## La poussée d'Archimède

Un objet plongé dans un fluide subit, de la part de ce fluide, une force verticale vers le haut.

<div class="encadre">

**Poussée d'Archimède** : force verticale, vers le haut, de valeur égale au poids du volume de fluide déplacé.

$$
\cbleu{\Pi} = \rho_{\text{fluide}} \times V_{\text{immergé}} \times g
$$

</div>

Elle vient de la différence de pression entre le bas de l'objet (plus profond, pression plus forte) et le haut. Un objet flotte si la poussée d'Archimède peut équilibrer son poids avant qu'il soit entièrement immergé, c'est-à-dire si sa masse volumique moyenne est inférieure à celle du fluide. La coque d'un paquebot est pleine d'air : sa masse volumique moyenne est inférieure à celle de l'eau.

## Le débit et sa conservation

<div class="encadre">

**Débit volumique** : volume de fluide qui traverse une section par unité de temps.

$$
\cbleu{D_V} = \frac{V}{\Delta t} = S \times v \qquad (\mathrm{m^3 \cdot s^{-1}})
$$

**Conservation du débit** (fluide incompressible, écoulement permanent) : le débit est le même dans toutes les sections d'une canalisation.

$$
S_A \times v_A = S_B \times v_B
$$

</div>

C'est le pouce sur le tuyau : si la section est divisée par 4, la vitesse est multipliée par 4. Les liquides sont pratiquement incompressibles ; un gaz peut être traité ainsi tant que sa vitesse reste modérée.

## La relation de Bernoulli

<div class="encadre">

Pour un **fluide parfait** (sans frottements), **incompressible**, en **écoulement permanent**, le long d'une ligne de courant :

$$
P + \frac{1}{2}\rho v^2 + \rho g z = \text{constante}
$$

$P$ pression (Pa), $\rho$ masse volumique ($\mathrm{kg \cdot m^{-3}}$), $v$ vitesse, $z$ altitude (axe vers le haut).

</div>

Chaque terme est une énergie par unité de volume : pression, énergie cinétique, énergie potentielle de pesanteur. Leur somme est le budget fixe.

Deux cas particuliers à connaître :

- **Fluide au repos** ($v = 0$) : $P + \rho g z$ = constante, on retrouve la loi de la statique des fluides de Première.
- **Altitude constante** : $P + \frac{1}{2}\rho v^2$ = constante. <mark>Plus le fluide va vite, plus sa pression est faible.</mark>

## L'effet Venturi

Dans un tube qui se rétrécit (un **tube de Venturi**), le fluide accélère dans la partie étroite (conservation du débit), donc sa pression y baisse (Bernoulli). Applications : les pulvérisateurs de parfum, la trompe à eau du laboratoire, les débitmètres, et l'aspiration ressentie entre deux véhicules qui se croisent.

Un autre résultat classique, la **formule de Torricelli** : l'eau qui sort par un petit trou à une profondeur $h$ sous la surface libre d'un grand réservoir a une vitesse $v = \sqrt{2 g h}$, la même que si elle était tombée en chute libre de la hauteur $h$.

## Les pièges

- Le volume dans $\Pi$ est le volume **immergé**, et la masse volumique celle du **fluide**, pas de l'objet.
- Section plus petite → vitesse plus grande → pression plus **faible**.
- Bernoulli ne vaut que pour un fluide **parfait**, incompressible, en écoulement permanent.
- Les sections en $\mathrm{m^2}$ : un diamètre de 2 cm donne $S = \pi \times (0{,}01)^2$, avec le **rayon**.
