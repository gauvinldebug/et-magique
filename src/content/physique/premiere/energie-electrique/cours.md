---
titre: Énergie et puissance électriques, effet Joule et rendement
court: Énergie électrique
description: Porteurs de charge et intensité, source réelle de tension, puissance et énergie électriques, effet Joule, bilan de puissance et rendement d'un convertisseur, avec l'image d'une pompe de fontaine. Exercices corrigés. Première spécialité physique-chimie.
ordre: 11
publie: 2026-11-24T01:30:00
video:
  youtube: ""
piege: "**Le kilowattheure est une énergie, pas une puissance.** $1\\ \\mathrm{kWh} = 1000\\ \\mathrm{W} \\times 3600\\ \\mathrm{s} = 3{,}6 \\times 10^{6}\\ \\mathrm{J}$."
pdf:
  cours: /pdf/physique/premiere/energie-electrique-cours.pdf
  fiche: /pdf/physique/premiere/energie-electrique-fiche.pdf
  exercices: /pdf/physique/premiere/energie-electrique-exercices.pdf
suivant: energie-mecanique
---

## Le problème

Une pile neuve affiche 4,5 V. Branchée sur une lampe, on ne mesure plus que 4 V à ses bornes. Un chargeur de téléphone chauffe. Un moteur électrique ne rend jamais toute l'énergie qu'on lui donne. Où passe l'énergie qui manque ? Presque toujours au même endroit : en **chaleur**.

## L'idée : la pompe d'une fontaine

Dans une fontaine, une pompe fait monter l'eau, l'eau redescend en faisant tourner une petite roue, puis revient à la pompe.

- L'**eau** qui circule, ce sont les porteurs de charge (les électrons dans un métal).
- Le **débit** de l'eau, c'est l'intensité du courant.
- La **hauteur** à laquelle la pompe monte l'eau, c'est la tension.
- Les **frottements** de l'eau dans les tuyaux chauffent un peu l'eau : c'est l'effet Joule. Même à l'intérieur de la pompe, il y en a.

## Intensité et porteurs de charge

<div class="encadre">

L'**intensité** du courant est le débit de charges électriques :

$$
I = \frac{Q}{\Delta t}
$$

$I$ en ampères ($\mathrm{A}$), $Q$ en coulombs ($\mathrm{C}$), $\Delta t$ en secondes.

</div>

Dans les métaux, les porteurs de charge sont des **électrons**, qui circulent en sens inverse du sens conventionnel du courant. Dans les solutions, ce sont des **ions**. Chaque électron porte la charge $-e$, avec $e = 1{,}6 \times 10^{-19}\ \mathrm{C}$.

## La source réelle de tension

Une pile n'est pas parfaite. On la modélise par une source idéale de tension $E$ (la force électromotrice, sa tension à vide) en série avec une petite résistance interne $r$.

<div class="encadre">

$$
U_{PN} = E - r\,I
$$

</div>

Plus la pile débite, plus la tension à ses bornes baisse. La partie $rI$ est « perdue » à l'intérieur de la pile, où elle chauffe. C'est la pompe qui frotte sur elle-même.

## Puissance et énergie

<div class="encadre">

**Puissance électrique** reçue (ou fournie) par un dipôle :

$$
\cbleu{P} = \corange{U} \times \cvert{I}
$$

**Énergie** transférée pendant $\Delta t$ :

$$
\mathcal{E} = P \times \Delta t
$$

$P$ en watts, $\mathcal{E}$ en joules si $\Delta t$ est en secondes, en wattheures si $\Delta t$ est en heures.

</div>

## L'effet Joule

Une résistance traversée par un courant convertit toute l'énergie électrique reçue en énergie thermique. Avec la loi d'Ohm $U = RI$ :

$$
P_J = R\,I^2
$$

C'est utile dans un radiateur ou une bouilloire, gênant partout ailleurs : dans les câbles, dans les moteurs, dans les chargeurs.

## Bilan et rendement d'un convertisseur

Un convertisseur (moteur, lampe, panneau solaire, pile) reçoit une énergie sous une forme et en rend une autre. Une partie est toujours perdue, presque toujours en chaleur.

<div class="encadre">

$$
P_{\text{reçue}} = P_{\text{utile}} + P_{\text{perdue}} \qquad \eta = \frac{P_{\text{utile}}}{P_{\text{reçue}}}
$$

</div>

Le rendement est toujours **inférieur à 1**. Un bon moteur électrique dépasse 0,9 ; une lampe à incandescence n'atteint pas 0,05, elle chauffe surtout.

Pour la pile : elle convertit l'énergie chimique. Puissance totale $E I$, puissance perdue $r I^2$, puissance utile fournie au circuit $U_{PN} I$. On vérifie que $E I = U_{PN} I + r I^2$.

## Les pièges

- $P = UI$ pour tout dipôle, $P = RI^2$ seulement pour la puissance dissipée par effet Joule.
- Le **kilowattheure** est une énergie : $1\ \mathrm{kWh} = 3{,}6 \times 10^{6}\ \mathrm{J}$.
- La tension aux bornes d'une pile **baisse** quand elle débite.
- Un rendement s'écrit sans unité, entre 0 et 1 (ou en pourcentage).
