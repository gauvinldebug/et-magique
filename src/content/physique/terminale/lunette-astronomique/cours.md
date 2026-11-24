---
titre: La lunette astronomique
court: Lunette astronomique
description: Modèle de la lunette astronomique afocale, image intermédiaire, construction des rayons, grossissement et cercle oculaire, expliqués avec un relais entre un photographe et une loupe. Exercices corrigés. Terminale spécialité physique-chimie.
ordre: 15
publie: 2026-11-24T01:14:00
video:
  youtube: ""
piege: "**Le grossissement compare des angles, pas des tailles.** La Lune vue dans la lunette n'est pas « plus grande » : elle est vue sous un angle plus grand. Et $G = \\frac{f'_1}{f'_2}$, l'objectif au numérateur."
pdf:
  cours: /pdf/physique/terminale/lunette-astronomique-cours.pdf
  fiche: /pdf/physique/terminale/lunette-astronomique-fiche.pdf
  exercices: /pdf/physique/terminale/lunette-astronomique-exercices.pdf
suivant: effet-photoelectrique
---

## Le problème

À l'œil nu, la Lune est un petit disque. Avec une lunette de quelques dizaines d'euros, on voit ses cratères. Comment deux lentilles suffisent-elles à rapprocher un objet situé à 384 000 km ? Et pourquoi l'image est-elle à l'envers ?

## L'idée : le photographe et la loupe

Une lunette, c'est un relais entre deux lentilles convergentes.

- L'**objectif**, tourné vers le ciel, joue le rôle d'un photographe : il forme une **image intermédiaire** de l'astre, petite, réelle, renversée, dans le tube.
- L'**oculaire**, contre l'œil, est une **loupe** : on regarde cette image intermédiaire de très près, sous un grand angle.

Le photographe a une longue focale ; la loupe, une courte. C'est ce rapport qui fait le grossissement.

## Rappels sur la lentille convergente

Une lentille mince convergente de centre optique $O$ a un foyer objet $F$ et un foyer image $F'$, symétriques par rapport à $O$, à la distance focale $f' = \overline{OF'}$. Trois rayons utiles :

- un rayon passant par $O$ n'est pas dévié ;
- un rayon parallèle à l'axe optique ressort en passant par $F'$ ;
- un rayon passant par $F$ ressort parallèle à l'axe.

Un objet **à l'infini** (une étoile, la Lune) donne une image dans le **plan focal image**. Un objet placé dans le **plan focal objet** donne une image à l'infini, que l'œil observe sans fatigue.

(Voir aussi [Lentilles et images](/physique/premiere/lentilles-et-images/cours/) en Première.)

## La lunette afocale

<div class="encadre">

Une lunette astronomique est **afocale** : le **foyer image de l'objectif** $F'_1$ est confondu avec le **foyer objet de l'oculaire** $F_2$.

- L'astre, à l'infini, donne par l'objectif une image intermédiaire $A_1B_1$ dans le plan focal image de l'objectif.
- Cette image est dans le plan focal objet de l'oculaire, donc l'oculaire en donne une image **à l'infini**.

Un objet à l'infini donne une image à l'infini : l'œil observe sans accommoder.

</div>

La longueur de la lunette vaut environ $f'_1 + f'_2$.

## Le grossissement

L'astre est vu à l'œil nu sous l'angle $\theta$ ; dans la lunette, sous l'angle $\theta'$.

<div class="encadre">

$$
\cbleu{G} = \frac{\theta'}{\theta} = \frac{f'_1}{f'_2}
$$

</div>

Démonstration (petits angles, $\tan\theta \approx \theta$) : dans le triangle de l'objectif, $\theta \approx \dfrac{A_1B_1}{f'_1}$ ; dans celui de l'oculaire, $\theta' \approx \dfrac{A_1B_1}{f'_2}$. Le rapport donne $G = \dfrac{f'_1}{f'_2}$.

Avec un objectif de 900 mm et un oculaire de 10 mm, $G = 90$. Changer d'oculaire change le grossissement.

L'image finale est **renversée** : c'est sans importance pour observer le ciel, gênant pour un paysage (les longues-vues ajoutent un système qui redresse l'image).

## Le cercle oculaire

Tous les rayons qui traversent l'objectif et ressortent de l'oculaire passent par un petit disque : l'image de l'objectif donnée par l'oculaire. C'est le **cercle oculaire**, l'endroit où placer l'œil pour recueillir le maximum de lumière.

## Les pièges

- Afocale : $F'_1 = F_2$. Ne pas confondre avec $F_1 = F'_2$.
- $G = f'_1 / f'_2$ : **objectif en haut**. Un grand grossissement demande un objectif de grande focale et un oculaire de courte focale.
- Le grossissement est un rapport d'**angles**, sans unité.
- L'image intermédiaire est réelle et renversée ; l'image finale est à l'infini et renversée.
