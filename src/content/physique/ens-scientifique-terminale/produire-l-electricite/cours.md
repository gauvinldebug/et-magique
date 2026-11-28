---
titre: "Produire de l'électricité"
court: "Produire l'électricité"
description: "Conversion d'énergie en énergie électrique, alternateur et induction, centrales thermiques, hydrauliques et éoliennes, cellule photovoltaïque, rendement d'une conversion et d'une chaîne, énergie et puissance en kilowattheures, expliqués avec une chaîne de seaux qu'on se passe en en renversant un peu. Exercices corrigés. Enseignement scientifique de Terminale, partie physique-chimie."
ordre: 2
publie: 2026-11-28T10:47:00
video:
  youtube: ""
piege: "**Le rendement n'est jamais supérieur à 1.** Une partie de l'énergie part toujours en chaleur. Si ton calcul donne 1,2, c'est que tu as inversé l'énergie utile et l'énergie reçue."
pdf:
  cours: /pdf/physique/ens-scientifique-terminale/produire-l-electricite-cours.pdf
  fiche: /pdf/physique/ens-scientifique-terminale/produire-l-electricite-fiche.pdf
  exercices: /pdf/physique/ens-scientifique-terminale/produire-l-electricite-exercices.pdf
suivant: choix-energetiques
---

## Le problème

Une centrale nucléaire, un barrage, une éolienne : trois sources très différentes, et pourtant presque toujours la même pièce au bout, un alternateur qui tourne. Seul le panneau solaire fait autrement. Comment transforme-t-on toutes ces énergies en électricité, et combien en perd-on en route ?

## L'idée : la chaîne de seaux

Des gens se passent des seaux d'eau à la file. À chaque passage, un peu d'eau tombe par terre. À l'arrivée, il reste moins d'eau qu'au départ. Chaque convertisseur d'énergie est un maillon de cette chaîne : il transmet l'énergie, mais en perd une partie, le plus souvent sous forme de chaleur.

## L'alternateur

<div class="encadre">

Un **alternateur** convertit de l'énergie mécanique (une rotation) en énergie électrique. Un aimant tourne près d'une bobine : le champ magnétique qui traverse la bobine varie, ce qui fait apparaître une tension. C'est le phénomène d'**induction**.

</div>

Ce qui fait tourner l'alternateur change selon la centrale :

| Centrale | Ce qui fait tourner la turbine |
|---|---|
| thermique (charbon, gaz, nucléaire) | vapeur d'eau chauffée |
| hydraulique | chute d'eau |
| éolienne | vent |

## La cellule photovoltaïque

Elle convertit directement la lumière en électricité, sans rien qui tourne. Le matériau (du silicium en général) absorbe les photons, et cette énergie met en mouvement des électrons. Son rendement est de l'ordre de 15 à 22 %.

## Le rendement

<div class="encadre">

$$
\eta = \frac{E_{\text{utile}}}{E_{\text{reçue}}} = \frac{P_{\text{utile}}}{P_{\text{reçue}}}
$$

Sans unité, toujours entre 0 et 1. Pour une chaîne de convertisseurs, les rendements se **multiplient** : $\eta = \eta_1 \times \eta_2 \times \dots$

</div>

Une centrale thermique a un rendement d'environ 33 % : les deux tiers de l'énergie partent en chaleur, par les tours de refroidissement ou dans la rivière. Un alternateur seul dépasse 95 %.

## Énergie et puissance

$E = P \times \Delta t$. En joules si $P$ est en watts et $\Delta t$ en secondes, ou en **kilowattheures** (kWh) si $P$ est en kW et $\Delta t$ en heures. $1\ \mathrm{kWh} = 3{,}6 \times 10^6$ J.

<mark>Une puissance, c'est un débit d'énergie</mark> : un radiateur de 2 kW allumé 3 h consomme 6 kWh.

## Les pièges

- $\eta \le 1$, toujours.
- Les rendements d'une chaîne se multiplient, ils ne s'additionnent pas.
- kW est une puissance, kWh une énergie.
- Le panneau solaire n'a pas d'alternateur.
