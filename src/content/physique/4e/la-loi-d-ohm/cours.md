---
titre: La résistance et la loi d'Ohm
court: Loi d'Ohm
description: Le rôle d'une résistance dans un circuit, l'ohm et l'ohmmètre, la caractéristique d'un conducteur ohmique, la loi d'Ohm U = R × I et ses usages, avec l'image d'un couloir étroit. Exercices corrigés type brevet. Quatrième physique-chimie.
ordre: 4
publie: 2026-11-24T01:59:00
video:
  youtube: ""
piege: "**Dans U = R × I, l'intensité doit être en ampères.** Avec des milliampères, le résultat est 1000 fois trop grand."
pdf:
  cours: /pdf/physique/4e/la-loi-d-ohm-cours.pdf
  fiche: /pdf/physique/4e/la-loi-d-ohm-fiche.pdf
  exercices: /pdf/physique/4e/la-loi-d-ohm-exercices.pdf
suivant: lumiere-et-couleurs
---

## Le problème

Une LED branchée directement sur une pile de 9 V grille en un instant. Avec une petite pièce cylindrique à rayures colorées en série, elle brille tranquillement pendant des heures. Cette petite pièce, c'est une **résistance**. Que fait-elle exactement ?

## L'idée : le couloir étroit

À la sortie d'un concert, la foule quitte la salle. Si la sortie est un grand hall, tout le monde sort vite. Si la sortie est un **couloir étroit**, le flot ralentit.

Une résistance, c'est un couloir étroit pour le courant. <mark>Plus la résistance est grande, plus le courant est faible</mark>, pour une même tension. Et pour faire passer le même courant dans un couloir plus étroit, il faut pousser plus fort : une tension plus grande.

## La résistance

<div class="encadre">

La **résistance** $R$ d'un dipôle mesure sa capacité à **s'opposer** au passage du courant. Elle s'exprime en **ohms** ($\Omega$) et se mesure avec un **ohmmètre**, branché aux bornes du dipôle **hors du circuit**.

</div>

Ajouter une résistance en série dans un circuit **diminue l'intensité**. C'est ce qui protège la LED.

$1\ \mathrm{k\Omega} = 1000\ \Omega$.

## La caractéristique d'un conducteur ohmique

On fait varier la tension aux bornes d'une résistance et on mesure à chaque fois l'intensité. On trace $U$ en fonction de $I$.

Pour une résistance, on obtient une **droite qui passe par l'origine** : la tension est **proportionnelle** à l'intensité. Un tel dipôle est appelé **conducteur ohmique**.

## La loi d'Ohm

<div class="encadre">

$$
\cbleu{U} = \corange{R} \times \cvert{I}
$$

$U$ en volts (V), $R$ en ohms ($\Omega$), $I$ en ampères (A).

On en tire : $I = \dfrac{U}{R}$ et $R = \dfrac{U}{I}$.

</div>

Le coefficient directeur de la caractéristique est la résistance $R$.

La loi d'Ohm ne s'applique **qu'aux conducteurs ohmiques**. Une lampe ou une diode ne la suivent pas : leur caractéristique n'est pas une droite.

## L'effet Joule

Une résistance traversée par un courant **chauffe**. C'est l'**effet Joule**. Il est utile dans un grille-pain, un radiateur, une bouilloire. Il est gênant dans les câbles, qui perdent de l'énergie et peuvent s'échauffer dangereusement.

## Les pièges

- Intensité en **ampères** : 20 mA = 0,020 A.
- L'ohmmètre se branche **hors tension**, sur le dipôle seul.
- La loi d'Ohm ne vaut que pour un **conducteur ohmique**.
- Plus $R$ est grand, plus $I$ est **petit**.
