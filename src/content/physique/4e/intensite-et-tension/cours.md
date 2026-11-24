---
titre: Intensité et tension dans les circuits
court: Intensité et tension
description: Mesurer l'intensité avec un ampèremètre et la tension avec un voltmètre, les lois de l'intensité et des tensions dans un circuit en série et en dérivation, avec l'image d'un toboggan aquatique. Exercices corrigés type brevet. Quatrième physique-chimie.
ordre: 3
publie: 2026-11-24T01:58:00
video:
  youtube: ""
piege: "**En série, l'intensité est la même partout ; en dérivation, c'est la tension qui est la même.** Inverser les deux règles est l'erreur la plus fréquente."
pdf:
  cours: /pdf/physique/4e/intensite-et-tension-cours.pdf
  fiche: /pdf/physique/4e/intensite-et-tension-fiche.pdf
  exercices: /pdf/physique/4e/intensite-et-tension-exercices.pdf
suivant: la-loi-d-ohm
---

## Le problème

Dans une guirlande de Noël bon marché, si une ampoule grille, toute la guirlande s'éteint. Dans ta maison, si une lampe grille, les autres restent allumées. Ce n'est pas le même montage, et le courant ne s'y répartit pas de la même façon.

## L'idée : le toboggan aquatique

Imagine un parc aquatique. Une pompe monte l'eau en haut d'une tour, l'eau redescend par des toboggans, puis revient à la pompe.

- L'**intensité**, c'est le **débit** d'eau, la quantité qui passe chaque seconde.
- La **tension**, c'est la **hauteur** de la chute.

Si l'eau passe par un seul toboggan qui fait plusieurs virages à la suite, tout le débit passe partout, et la hauteur totale se partage entre les virages : c'est le **montage en série**. Si elle se partage entre plusieurs toboggans côte à côte, chacun reçoit une part du débit, mais <mark>tous descendent de la même hauteur</mark> : c'est le **montage en dérivation**.

## Mesurer

<div class="encadre">

| Grandeur | Unité | Appareil | Branchement | Bornes |
|---|---|---|---|---|
| intensité $I$ | ampère (A) | ampèremètre | en **série** | A (ou mA) et COM |
| tension $U$ | volt (V) | voltmètre | en **dérivation** | V et COM |

</div>

Le courant doit **entrer** par la borne A (ou V) et **sortir** par la borne COM pour obtenir une valeur positive. On commence toujours par le plus grand calibre.

## Dans un circuit en série

Les dipôles sont branchés les uns après les autres, en une seule boucle.

<div class="etape o">

**Loi d'unicité de l'intensité.** L'intensité est **la même** en tout point du circuit : $I = I_1 = I_2$.

**Loi d'additivité des tensions.** La tension aux bornes du générateur est égale à la **somme** des tensions aux bornes des récepteurs : $U_G = U_1 + U_2$.

</div>

Si un dipôle est retiré ou grille, la boucle est ouverte : plus rien ne fonctionne.

## Dans un circuit en dérivation

Les dipôles sont dans des branches différentes, reliées en deux points, les **nœuds**.

<div class="etape o">

**Loi d'égalité des tensions.** La tension est **la même** aux bornes de chaque branche : $U_G = U_1 = U_2$.

**Loi d'additivité des intensités (loi des nœuds).** L'intensité dans la branche principale est égale à la **somme** des intensités dans les branches dérivées : $I = I_1 + I_2$.

</div>

Si un dipôle grille, les autres branches fonctionnent encore. C'est le montage des installations électriques des maisons.

## Les pièges

- Ampèremètre **en série**, voltmètre **en dérivation**.
- En série, c'est $I$ qui est commune ; en dérivation, c'est $U$.
- Les intensités en mA : $250\ \mathrm{mA} = 0{,}250\ \mathrm{A}$.
- Un ampèremètre branché en dérivation fait un court-circuit.
