---
titre: Circuits électriques, loi d'Ohm et capteurs
court: Signaux et capteurs
description: Intensité et tension, loi des nœuds, loi des mailles, loi d'Ohm, caractéristique d'un dipôle, capteurs résistifs (thermistance, photorésistance) et courbe d'étalonnage, avec l'image d'un réseau de routes de montagne. Exercices corrigés. Seconde physique-chimie.
ordre: 10
publie: 2026-11-24T01:49:00
video:
  youtube: ""
piege: "**L'ampèremètre se branche en série, le voltmètre en dérivation.** Un ampèremètre branché en dérivation court-circuite le dipôle, et peut griller."
pdf:
  cours: /pdf/physique/seconde/signaux-electriques-cours.pdf
  fiche: /pdf/physique/seconde/signaux-electriques-fiche.pdf
  exercices: /pdf/physique/seconde/signaux-electriques-exercices.pdf
---

## Le problème

Un thermostat allume le chauffage quand la pièce refroidit. Un lampadaire s'allume à la tombée de la nuit. Personne n'appuie sur un bouton : un **capteur** transforme la température ou la lumière en signal électrique. Pour le lire, il faut comprendre comment courant et tension se répartissent dans un circuit.

## L'idée : les routes de montagne

Imagine un réseau de routes de montagne où roulent des voitures.

- L'**intensité**, c'est le **débit de voitures** sur une route. À un carrefour, il ne se perd aucune voiture : ce qui entre ressort.
- La **tension**, c'est une **différence d'altitude** entre deux points. Si tu fais une boucle et reviens à ton point de départ, tu as monté exactement autant que tu es descendu.

Ces deux images donnent les deux lois des circuits. <mark>Le débit se partage aux carrefours, l'altitude se partage le long d'une boucle.</mark>

## Intensité et tension

<div class="encadre">

| Grandeur | Symbole | Unité | Appareil | Branchement |
|---|---|---|---|---|
| intensité | $I$ | ampère (A) | ampèremètre | en **série** |
| tension | $U$ | volt (V) | voltmètre | en **dérivation** |

</div>

Une tension se note $U_{AB}$, c'est une différence entre deux points : $U_{AB} = V_A - V_B$, et $U_{BA} = -U_{AB}$.

## Les deux lois des circuits

<div class="encadre">

**Loi des nœuds.** La somme des intensités qui arrivent à un nœud est égale à la somme des intensités qui en repartent.

$$
I = I_1 + I_2
$$

**Loi des mailles.** Dans une maille (une boucle fermée), la somme des tensions, comptées avec leur signe en tournant dans un même sens, est nulle. Dans un circuit en série : la tension du générateur est égale à la somme des tensions des récepteurs.

$$
U_G = U_1 + U_2
$$

</div>

Conséquences :

- En **série**, l'intensité est la **même** partout.
- En **dérivation**, la tension est la **même** aux bornes de chaque branche.

## La loi d'Ohm

La **caractéristique** d'un dipôle est la courbe de la tension à ses bornes en fonction de l'intensité qui le traverse. Pour un **conducteur ohmique** (une résistance), c'est une **droite passant par l'origine**.

<div class="encadre">

$$
\cbleu{U} = \corange{R} \times \cvert{I}
$$

$R$ est la résistance, en ohms ($\Omega$). Elle mesure à quel point le dipôle freine le passage du courant.

</div>

Pour une lampe ou une diode, la caractéristique n'est pas une droite : ces dipôles ne suivent pas la loi d'Ohm.

## Les capteurs

Un capteur transforme une grandeur physique en grandeur électrique.

- **Thermistance CTN** : sa résistance **diminue** quand la température augmente.
- **Photorésistance** : sa résistance **diminue** quand l'éclairement augmente.

<div class="etape o">

Pour utiliser un capteur, on réalise d'abord un **étalonnage** : on mesure sa résistance pour plusieurs valeurs connues de la grandeur (avec un thermomètre de référence, par exemple), et on trace la **courbe d'étalonnage**. Ensuite, une simple mesure de résistance, lue sur la courbe, donne la grandeur.

</div>

## Les pièges

- Ampèremètre **en série**, voltmètre **en dérivation**.
- Dans $U = RI$, $I$ en **ampères** : 20 mA = 0,020 A.
- La loi d'Ohm ne vaut que pour un conducteur ohmique.
- Une CTN a une résistance qui **baisse** quand il fait chaud.
