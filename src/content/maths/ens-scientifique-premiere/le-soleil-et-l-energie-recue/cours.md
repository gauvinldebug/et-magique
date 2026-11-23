---
titre: Le Soleil et l'énergie reçue par la Terre
court: Le Soleil et l'énergie reçue
description: Puissance surfacique reçue et loi en inverse du carré de la distance, aire d'une sphère et d'un disque, puissance moyenne reçue par la Terre, albédo et pourcentages, loi de Wien et proportionnalité inverse, expliqués avec une bombe de peinture, avec des exercices corrigés pas à pas. Enseignement scientifique de Première, partie maths.
ordre: 2
publie: 2026-11-23T09:02:00
video:
  youtube: ""
piege: >-
  **Deux fois plus loin, ce n'est pas deux fois moins d'énergie, c'est quatre fois moins.** La puissance se répartit sur une sphère d'aire $4\pi d^2$ : elle varie comme $\frac{1}{d^2}$. Et la Terre reçoit le Soleil sur un disque d'aire $\pi R^2$ mais le répartit sur une sphère d'aire $4\pi R^2$ : on divise par 4.
pdf:
  cours: /pdf/maths/ens-scientifique-premiere/le-soleil-et-l-energie-recue-cours.pdf
  fiche: /pdf/maths/ens-scientifique-premiere/le-soleil-et-l-energie-recue-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-premiere/le-soleil-et-l-energie-recue-exercices.pdf
suivant: cristaux-et-mailles
---

## Le problème

Au-dessus de l'atmosphère, chaque mètre carré tourné vers le Soleil reçoit environ $1\,360$ W. Pourtant, les climatologues disent que la Terre reçoit en moyenne seulement $340\ \text{W/m}^2$. Qui a raison ? Et combien reçoit Mars, une fois et demie plus loin du Soleil ?

## L'idée : la bombe de peinture

Vaporise de la peinture sur un mur, d'abord de près, puis deux fois plus loin. De loin, la tache est deux fois plus large **et** deux fois plus haute : sa surface est quatre fois plus grande. La même quantité de peinture s'étale donc en une couche **quatre fois plus fine**.

Le Soleil fait pareil avec son énergie : <mark>plus on s'éloigne, plus elle s'étale, comme le carré de la distance</mark>.

## Puissance surfacique

<div class="encadre">

Le Soleil émet une puissance totale $P \approx 3{,}8 \times 10^{26}$ W dans toutes les directions. À la distance $d$, elle se répartit sur une sphère d'aire $4\pi d^2$. La puissance reçue par mètre carré vaut

$$
\cbleu{\mathcal{P}} = \frac{P}{4\pi \corange{d}^2}
$$

Si $d$ est multiplié par $k$, $\mathcal{P}$ est divisée par $\crouge{k^2}$.

</div>

## La moyenne sur toute la Terre

<div class="encadre">

La Terre, vue du Soleil, est un **disque** d'aire $\pi R^2$ : c'est la surface qui intercepte la lumière. Mais cette énergie se répartit, en moyenne sur une journée et sur tout le globe, sur la **sphère** d'aire $4\pi R^2$. D'où la moyenne :

$$
\frac{1\,360 \times \pi R^2}{4\pi R^2} = \frac{1\,360}{4} = 340\ \text{W/m}^2
$$

</div>

## Albédo

<div class="encadre">

L'**albédo** est la proportion de la puissance reçue qui est réfléchie (nombre entre 0 et 1). L'albédo moyen de la Terre est environ $0{,}30$. La puissance absorbée vaut donc $\mathcal{P}_\text{abs} = (1 - \text{albédo}) \times \mathcal{P}_\text{reçue}$.

Glace : albédo proche de $0{,}8$. Océan : environ $0{,}06$. Quand la glace fond, la Terre absorbe davantage : c'est une rétroaction.

</div>

## La loi de Wien

<div class="encadre">

La longueur d'onde du maximum d'émission d'un corps chaud est **inversement proportionnelle** à sa température :

$$
\lambda_\text{max} \times T = 2{,}9 \times 10^{-3}\ \text{m·K}
$$

Deux fois plus chaud, $\lambda_\text{max}$ deux fois plus petite.

</div>

## Retour au problème

Les deux valeurs sont justes : $1\,360\ \text{W/m}^2$ pour une surface face au Soleil, $340\ \text{W/m}^2$ en moyenne sur tout le globe, jour et nuit compris (division par 4).

Pour Mars, la distance est multipliée par $1{,}52$ : on divise par $1{,}52^2 \approx 2{,}31$. <mark>Mars reçoit environ $1\,360 \div 2{,}31 \approx 590\ \text{W/m}^2$</mark>.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-premiere/le-soleil-et-l-energie-recue/exercices/). La suite : [cristaux et mailles](/maths/ens-scientifique-premiere/cristaux-et-mailles/cours/). Pour revoir les pourcentages : [proportions et évolutions](/maths/premiere-tronc-commun/proportions-et-evolutions/cours/).
