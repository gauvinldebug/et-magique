---
titre: Lentilles minces, relation de conjugaison et modèle de l'œil
court: Lentilles et images
description: Lentille mince convergente, foyers et distance focale, construction d'une image, relation de conjugaison, grandissement, image réelle ou virtuelle, modèle de l'œil et accommodation, avec l'image d'un point de rendez-vous. Exercices corrigés. Première spécialité physique-chimie.
ordre: 14
publie: 2026-11-24T01:33:00
video:
  youtube: ""
piege: "**Les distances sont algébriques.** Un objet placé avant la lentille a $\\overline{OA} < 0$. Oublier le signe moins dans la relation de conjugaison donne un résultat faux."
pdf:
  cours: /pdf/physique/premiere/lentilles-et-images-cours.pdf
  fiche: /pdf/physique/premiere/lentilles-et-images-fiche.pdf
  exercices: /pdf/physique/premiere/lentilles-et-images-exercices.pdf
suivant: couleurs
---

## Le problème

L'objectif d'un appareil photo, un vidéoprojecteur, une loupe et ton œil ont tous au moins une lentille convergente. Selon la place de l'objet, la lentille donne une image renversée sur un écran, ou une image droite et agrandie qu'on ne peut pas attraper sur un écran. Une seule relation permet de tout prévoir.

## L'idée : le point de rendez-vous

D'un point lumineux partent des rayons dans toutes les directions. Une lentille convergente les dévie de telle façon qu'ils se **retrouvent tous au même point**, de l'autre côté. Ce point de rendez-vous, c'est l'**image**.

Pour trouver le rendez-vous, pas besoin de suivre tous les rayons : <mark>deux rayons bien choisis suffisent</mark>, puisque tous passent par le même point.

## Les éléments d'une lentille mince convergente

- Le **centre optique** O : un rayon qui passe par O n'est pas dévié.
- L'**axe optique** : la droite perpendiculaire à la lentille passant par O.
- Le **foyer image** F' : un rayon arrivant parallèle à l'axe ressort en passant par F'.
- Le **foyer objet** F, symétrique de F' par rapport à O : un rayon passant par F ressort parallèle à l'axe.
- La **distance focale** $f' = \overline{OF'}$, positive pour une lentille convergente.

## Construire l'image

<div class="etape o">

Pour un objet AB perpendiculaire à l'axe, A sur l'axe, on trace depuis B deux des trois rayons :

1. le rayon passant par O, non dévié ;
2. le rayon parallèle à l'axe, qui ressort par F' ;
3. le rayon passant par F, qui ressort parallèle à l'axe.

Leur intersection est B'. A' est sur l'axe, à la verticale de B'.

</div>

Si les rayons qui sortent de la lentille s'écartent, ce sont leurs **prolongements** (en pointillés, vers l'arrière) qui se croisent : l'image est **virtuelle**.

## La relation de conjugaison

On oriente l'axe dans le sens de la lumière, de gauche à droite, avec l'origine en O. Les distances sont **algébriques** : $\overline{OA} < 0$ pour un objet réel placé avant la lentille.

<div class="encadre">

$$
\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}
$$

**Grandissement :**

$$
\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}
$$

</div>

Lire le résultat :

- $\overline{OA'} > 0$ : image **réelle**, après la lentille, on peut la recueillir sur un écran ;
- $\overline{OA'} < 0$ : image **virtuelle**, du même côté que l'objet, visible seulement en regardant à travers la lentille ;
- $\gamma < 0$ : image **renversée** ; $\gamma > 0$ : image **droite** ;
- $|\gamma| > 1$ : image agrandie ; $|\gamma| < 1$ : image réduite.

<div class="labo" data-labo="lentille"></div>

## Trois situations à connaître

| Position de l'objet | Image | Exemple |
|---|---|---|
| très loin (à l'infini) | réelle, dans le plan focal image | appareil photo, œil |
| entre $2f$ et $f$ avant la lentille | réelle, renversée, agrandie | vidéoprojecteur |
| entre F et O | virtuelle, droite, agrandie | loupe |

## Le modèle de l'œil

| Œil réel | Modèle |
|---|---|
| iris | diaphragme |
| cristallin | lentille convergente de focale variable |
| rétine | écran |

La distance entre le cristallin et la rétine est **fixe**, environ 17 mm. Pour que l'image d'un objet se forme toujours sur la rétine, le cristallin change de courbure, donc de distance focale : c'est l'**accommodation**. Au repos, l'œil voit net à l'infini. Pour un objet proche, les muscles bombent le cristallin, sa distance focale diminue.

## Les pièges

- Le **signe** de $\overline{OA}$ : négatif pour un objet avant la lentille.
- Ne pas oublier d'**inverser** à la fin : on calcule $1/\overline{OA'}$, puis $\overline{OA'}$.
- Une image virtuelle ne se projette pas sur un écran.
- Dans l'œil, c'est la focale qui change, pas la distance cristallin-rétine.
