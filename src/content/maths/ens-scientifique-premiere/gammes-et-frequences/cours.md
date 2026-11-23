---
titre: Son et musique, gammes et fréquences
court: Gammes et fréquences
description: Fréquence et hauteur d'une note, octave et quinte comme rapports de fréquences, cycle des quintes et gamme de Pythagore, comma pythagoricien, gamme tempérée et racine douzième de 2, expliqués avec un escalier en colimaçon, avec des exercices corrigés pas à pas. Enseignement scientifique de Première, partie maths.
ordre: 5
publie: 2026-11-23T09:05:00
video:
  youtube: ""
piege: >-
  **Les intervalles se multiplient, ils ne s'additionnent pas.** Monter d'une octave, c'est **multiplier** la fréquence par 2, pas lui ajouter une quantité fixe. Ainsi un demi-ton tempéré multiplie la fréquence par $2^{1/12} \approx 1{,}059$, et deux demi-tons la multiplient par $2^{2/12}$, pas par $2 \times 1{,}059$.
pdf:
  cours: /pdf/maths/ens-scientifique-premiere/gammes-et-frequences-cours.pdf
  fiche: /pdf/maths/ens-scientifique-premiere/gammes-et-frequences-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-premiere/gammes-et-frequences-exercices.pdf
suivant: numeriser-un-son
---

## Le problème

Le la du diapason vibre à 440 Hz. Un piano moderne a 12 touches (blanches et noires) par octave, toutes séparées par le même intervalle. Quelle est la fréquence du do situé 3 touches au-dessus de ce la ?

## L'idée : l'escalier en colimaçon

Imagine un escalier en colimaçon. Chaque fois que tu fais un tour complet, tu te retrouves au-dessus de ton point de départ : c'est la **même note**, une octave plus haut. Les marches sont les notes de la gamme.

Pour que toutes les marches aient la même hauteur « à l'oreille », il ne faut pas ajouter le même nombre de hertz à chaque marche, mais <mark>multiplier la fréquence par le même nombre</mark>.

## Octave et quinte

<div class="encadre">

La **hauteur** d'une note est liée à sa fréquence $f$ (en hertz). Un **intervalle** entre deux notes est le **rapport** de leurs fréquences.

- **Octave** : rapport $\corange{2}$. La 440 Hz et la 880 Hz sont « la même note ».
- **Quinte** : rapport $\corange{\frac{3}{2}}$. C'est l'intervalle le plus consonant après l'octave.

Enchaîner deux intervalles, c'est **multiplier** leurs rapports.

</div>

## La gamme de Pythagore

<div class="encadre">

On part d'une note, on monte de quinte en quinte (on multiplie par $\frac{3}{2}$), et chaque fois qu'on dépasse l'octave, on redescend en divisant par 2.

Problème : 12 quintes ne retombent pas exactement sur 7 octaves.

$$
\left(\frac{3}{2}\right)^{12} \approx 129{,}7 \qquad 2^7 = 128
$$

Le décalage $\frac{129{,}7}{128} \approx \crouge{1{,}014}$ s'appelle le **comma pythagoricien** : la spirale des quintes ne se referme jamais.

</div>

## La gamme tempérée

<div class="encadre">

On découpe l'octave en 12 demi-tons **égaux**. Le rapport $q$ d'un demi-ton vérifie $q^{12} = 2$, donc

$$
q = 2^{1/12} = \sqrt[12]{2} \approx 1{,}0595
$$

Une note située $\corange{n}$ demi-tons au-dessus d'une note de fréquence $f_0$ a pour fréquence $\cbleu{f} = f_0 \times 2^{\corange{n}/12}$. Les fréquences forment une **suite géométrique**. La quinte tempérée vaut $2^{7/12} \approx 1{,}498$, presque $\frac{3}{2}$.

</div>

## Retour au problème

Le do est 3 demi-tons au-dessus du la :

$$
f = 440 \times 2^{3/12} \approx 440 \times 1{,}189 \approx 523{,}3 \text{ Hz}
$$

<mark>Le do vibre à environ 523 Hz</mark>.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-premiere/gammes-et-frequences/exercices/). La suite : [numériser un son](/maths/ens-scientifique-premiere/numeriser-un-son/cours/). Pour revoir les puissances : [puissances](/maths/4e/puissances/cours/).
