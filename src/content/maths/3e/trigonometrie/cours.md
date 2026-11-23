---
titre: La trigonométrie dans le triangle rectangle
court: Trigonométrie
description: Cosinus, sinus et tangente d'un angle aigu dans un triangle rectangle, calculer une longueur ou un angle à la calculatrice, expliqués avec une échelle posée contre un mur, avec des exercices corrigés type brevet. 3e maths.
ordre: 5
publie: 2026-11-23T01:04:00
video:
  youtube: ""
piege: >-
  **Vérifie que la calculatrice est en degrés.** En mode radians, $\cos(60)$ donne $-0{,}95$ au lieu de $0{,}5$. Et le côté **opposé** ou **adjacent** dépend de l'angle choisi : il change si on change d'angle.
pdf:
  cours: /pdf/maths/3e/trigonometrie-cours.pdf
  fiche: /pdf/maths/3e/trigonometrie-fiche.pdf
  exercices: /pdf/maths/3e/trigonometrie-exercices.pdf
suivant: probabilites
---

## Le problème

Une échelle de 5 m est posée contre un mur. Pour être stable, elle doit faire un angle de 70° avec le sol. À quelle hauteur atteint-elle le mur ?

Pythagore ne suffit pas : on ne connaît qu'une seule longueur. Mais on connaît un **angle**.

## L'idée : l'échelle contre le mur

L'échelle, le mur et le sol forment un **triangle rectangle**. L'échelle est l'**hypoténuse**, toujours de la même longueur.

- Plus on **redresse** l'échelle (angle avec le sol plus grand), plus elle monte **haut** sur le mur, et plus son pied se **rapproche** du mur.
- Pour un angle donné, la hauteur atteinte est toujours la **même fraction** de la longueur de l'échelle. Cette fraction, c'est le **sinus** de l'angle.

## Le vocabulaire du triangle rectangle

<div class="encadre">

Dans un triangle rectangle, pour un angle aigu $\widehat{A}$ :

- l'**hypoténuse** est le côté opposé à l'angle droit (le plus long) ;
- le côté **opposé** à $\widehat{A}$ est celui qui ne touche pas $\widehat{A}$ ;
- le côté **adjacent** à $\widehat{A}$ est celui qui touche $\widehat{A}$ et qui n'est pas l'hypoténuse.

</div>

## Cosinus, sinus, tangente

<div class="encadre">

$$
\cbleu{\cos \widehat{A} = \frac{\text{adjacent}}{\text{hypoténuse}}} \qquad
\corange{\sin \widehat{A} = \frac{\text{opposé}}{\text{hypoténuse}}} \qquad
\cvert{\tan \widehat{A} = \frac{\text{opposé}}{\text{adjacent}}}
$$

</div>

Pour s'en souvenir : **CAH SOH TOA** (Cosinus Adjacent Hypoténuse, Sinus Opposé Hypoténuse, Tangente Opposé Adjacent).

Le cosinus et le sinus d'un angle aigu sont toujours compris entre 0 et 1, car l'hypoténuse est le plus grand côté.

## Calculer une longueur

On choisit la formule qui contient **le côté connu et le côté cherché**, puis on fait un produit en croix.

Exemple : hypoténuse 6 cm, angle 35°, on cherche le côté adjacent. $\cos 35° = \dfrac{\text{adj}}{6}$, donc $\text{adj} = 6 \times \cos 35° \approx 4{,}91$ cm.

## Calculer un angle

On calcule le cosinus, le sinus ou la tangente, puis on utilise la touche **inverse** de la calculatrice : $\cos^{-1}$ (ou Arccos), $\sin^{-1}$, $\tan^{-1}$.

Exemple : adjacent 4, opposé 3. $\tan \widehat{A} = \dfrac{3}{4}$, donc $\widehat{A} = \tan^{-1}(0{,}75) \approx 36{,}9°$.

## Retour au problème

La hauteur sur le mur est le côté **opposé** à l'angle de 70°, et l'échelle est l'hypoténuse : c'est le sinus.

$$
\sin 70° = \frac{h}{5} \iff h = 5 \times \sin 70° \approx 4{,}70
$$

<mark>L'échelle atteint environ 4,70 m de hauteur</mark>.

Pour les calculs de longueurs sans angle, retourne au [théorème de Thalès](/maths/3e/theoreme-de-thales/cours/). Au lycée, le cosinus et le sinus deviennent des fonctions dans la [trigonométrie de Première](/maths/premiere/trigonometrie/cours/).
