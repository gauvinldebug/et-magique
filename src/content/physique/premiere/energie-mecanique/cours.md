---
titre: Énergie cinétique, potentielle et mécanique
court: Énergie mécanique
description: Énergie cinétique, travail d'une force constante, théorème de l'énergie cinétique, énergie potentielle de pesanteur, conservation et dissipation de l'énergie mécanique, avec l'image de deux seaux d'eau. Exercices corrigés. Première spécialité physique-chimie.
ordre: 12
publie: 2026-11-24T01:31:00
video:
  youtube: ""
piege: "**Dans $E_c = \\frac{1}{2}mv^2$, la vitesse est au carré.** Rouler deux fois plus vite, c'est quatre fois plus d'énergie cinétique, donc environ quatre fois plus de distance pour freiner."
pdf:
  cours: /pdf/physique/premiere/energie-mecanique-cours.pdf
  fiche: /pdf/physique/premiere/energie-mecanique-fiche.pdf
  exercices: /pdf/physique/premiere/energie-mecanique-exercices.pdf
suivant: ondes-mecaniques
---

## Le problème

Un skateur s'élance du haut d'une rampe. En bas, il va vite. Il remonte de l'autre côté, ralentit, s'arrête un instant, redescend. S'il ne pousse jamais, il remonte un peu moins haut à chaque aller-retour. Quelque chose se transforme, et quelque chose se perd.

## L'idée : deux seaux d'eau

Imagine deux seaux. L'un s'appelle **hauteur**, l'autre **vitesse**. Le skateur verse sans cesse l'eau de l'un dans l'autre :

- en descendant, le seau hauteur se vide dans le seau vitesse ;
- en remontant, c'est l'inverse.

La quantité totale d'eau, c'est l'**énergie mécanique**. Sans frottement, elle ne change jamais. Avec des frottements, <mark>un peu d'eau fuit à chaque transvasement</mark> : elle ne disparaît pas, elle chauffe les roues et l'air.

## L'énergie cinétique

<div class="encadre">

Un système de masse $m$ en translation à la vitesse $v$ possède l'énergie cinétique

$$
E_c = \frac{1}{2}\,\corange{m}\,\cbleu{v}^2
$$

$E_c$ en joules, $m$ en kilogrammes, $v$ en $\mathrm{m \cdot s^{-1}}$.

</div>

## Le travail d'une force

Une force fait varier l'énergie d'un système quand son point d'application se déplace. Pour une force $\vec{F}$ constante, sur un déplacement rectiligne de A à B :

$$
W_{AB}(\vec{F}) = \vec{F} \cdot \overrightarrow{AB} = F \times AB \times \cos\alpha
$$

avec $\alpha$ l'angle entre la force et le déplacement.

- $\alpha < 90°$ : travail **moteur** (positif), la force aide le mouvement.
- $\alpha = 90°$ : travail **nul**, la force ne change pas l'énergie.
- $\alpha > 90°$ : travail **résistant** (négatif), la force freine.

**Travail du poids.** Avec un axe $z$ vertical vers le haut : $W_{AB}(\vec{P}) = m\,g\,(z_A - z_B)$. Il ne dépend que de la différence d'altitude, pas du chemin suivi.

**Travail d'une force de frottement** constante, opposée au déplacement : $W_{AB}(\vec{f}) = -f \times AB$.

## Le théorème de l'énergie cinétique

<div class="encadre">

La variation d'énergie cinétique d'un système entre A et B est égale à la somme des travaux des forces qui s'exercent sur lui :

$$
E_c(B) - E_c(A) = \sum W_{AB}(\vec{F})
$$

</div>

## L'énergie potentielle de pesanteur

Le poids a une propriété précieuse : son travail ne dépend pas du chemin. On dit que c'est une force **conservative**. On lui associe une énergie stockée, l'énergie potentielle de pesanteur :

$$
E_{pp} = m\,g\,z
$$

avec $z$ l'altitude, l'axe étant vertical vers le haut. Le choix de l'origine de $z$ est libre : seules les variations de $E_{pp}$ comptent. On a $W_{AB}(\vec{P}) = -\Delta E_{pp} = E_{pp}(A) - E_{pp}(B)$.

## L'énergie mécanique

<div class="encadre">

$$
E_m = E_c + E_{pp}
$$

- Si le système n'est soumis qu'à des forces conservatives (ou à des forces qui ne travaillent pas), **$E_m$ se conserve**.
- Si des forces non conservatives travaillent (frottements), $\Delta E_m = W(\text{forces non conservatives})$. Avec des frottements, $E_m$ **diminue** : l'énergie perdue est dissipée en énergie thermique.

</div>

Exemple : une balle lâchée sans vitesse d'une hauteur $h$, sans frottement. En haut, $E_m = mgh$. En bas, $E_m = \frac{1}{2}mv^2$. Donc $v = \sqrt{2gh}$, indépendante de la masse. De 20 m, $v = \sqrt{2 \times 9{,}8 \times 20} \approx 20\ \mathrm{m \cdot s^{-1}}$, soit environ $72\ \mathrm{km \cdot h^{-1}}$.

## Les pièges

- La vitesse est **au carré** dans $E_c$ et doit être en $\mathrm{m \cdot s^{-1}}$.
- Le travail du poids ne dépend que de la **différence d'altitude**.
- La réaction normale d'un support, perpendiculaire au déplacement, ne travaille pas.
- Avec des frottements, l'énergie mécanique **n'est pas conservée**, l'énergie totale si.
