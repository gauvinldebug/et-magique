---
titre: Statistiques descriptives
court: Statistiques
description: Moyenne, moyenne pondérée, médiane, quartiles, étendue, écart interquartile et écart-type expliqués avec une file d'élèves rangés par taille et une cagnotte partagée, avec des exercices corrigés pas à pas. Seconde maths.
ordre: 8
publie: 2026-11-22T22:07:00
video:
  youtube: ""
piege: >-
  **La médiane se cherche dans la série rangée.** Le milieu de la liste telle qu'on la reçoit ne veut rien dire. Range d'abord les valeurs dans l'ordre croissant, puis compte.
pdf:
  cours: /pdf/maths/seconde/statistiques-cours.pdf
  fiche: /pdf/maths/seconde/statistiques-fiche.pdf
  exercices: /pdf/maths/seconde/statistiques-exercices.pdf
suivant: probabilites
---

## Le problème

Dans une petite entreprise, les salaires mensuels (en euros) sont : 1 800, 1 900, 1 900, 2 000, 2 100, 2 200 et 9 100 (le patron). Le salaire moyen est de 3 000 €. Est-ce qu'on peut dire que « on gagne bien sa vie dans cette entreprise » ?

Pour décrire une série, un seul nombre ne suffit pas. Il faut un indicateur de **position** et un indicateur de **dispersion**.

## L'idée : la cagnotte et la file d'élèves

- La **moyenne**, c'est une **cagnotte partagée** : tout le monde met son salaire dans un pot, et on redistribue la même part à chacun. Un seul très gros salaire gonfle toutes les parts.
- La **médiane**, c'est l'élève **au milieu de la file**, quand tout le monde est rangé par taille. Peu importe que le dernier mesure 2 m ou 3 m, celui du milieu ne bouge pas.
- La **dispersion**, c'est la question : la file est-elle **serrée** (tout le monde à peu près pareil) ou **étalée** ?

## Les indicateurs de position

<div class="encadre">

Pour une série de valeurs $x_1, \dots, x_p$ d'effectifs $n_1, \dots, n_p$, d'effectif total $N$ :

- **moyenne** : $\cbleu{\bar{x}} = \dfrac{n_1x_1 + n_2x_2 + \dots + n_px_p}{N}$ ;
- **médiane** $\corange{Me}$ : la valeur qui partage la série **rangée** en deux groupes de même effectif. Si $N$ est impair, c'est la valeur du milieu ; si $N$ est pair, la moyenne des deux valeurs du milieu ;
- **premier quartile** $Q_1$ : la plus petite valeur telle qu'au moins 25 % des valeurs lui soient inférieures ou égales ; **troisième quartile** $Q_3$ : pareil avec 75 %.

</div>

**Linéarité de la moyenne.** Si on ajoute 50 € à tous les salaires, la moyenne augmente de 50 €. Si on les multiplie par 1,02, la moyenne est multipliée par 1,02.

<div class="labo" data-labo="statistiques"></div>

## Les indicateurs de dispersion

<div class="encadre">

- **étendue** : valeur maximale moins valeur minimale ;
- **écart interquartile** : $Q_3 - Q_1$. La moitié centrale de la série est dans $[Q_1\,;Q_3]$ ;
- **écart-type** $\sigma$ : il mesure l'écart moyen à la moyenne,
$$\sigma = \sqrt{\dfrac{n_1(x_1 - \cbleu{\bar{x}})^2 + \dots + n_p(x_p - \cbleu{\bar{x}})^2}{N}}.$$

</div>

On associe la médiane avec l'écart interquartile (peu sensibles aux valeurs extrêmes), et la moyenne avec l'écart-type. En pratique, l'écart-type se calcule à la calculatrice ou au tableur.

## Retour au problème

La série rangée a 7 valeurs : la 4ᵉ est la médiane, <mark>$\corange{Me} = 2\,000$ €</mark>. Le patron fait monter la moyenne à 3 000 €, alors que **6 salariés sur 7 gagnent au plus 2 200 €**.

$Q_1$ : $\frac{7}{4} = 1{,}75$, donc la 2ᵉ valeur, $Q_1 = 1\,900$. $Q_3$ : $\frac{3 \times 7}{4} = 5{,}25$, donc la 6ᵉ valeur, $Q_3 = 2\,200$. L'écart interquartile est de 300 € : la file est serrée, sauf une valeur très à part. <mark>Ici, la médiane décrit bien mieux l'entreprise que la moyenne</mark>.

La moyenne et l'écart-type reviendront en Première avec l'[espérance d'une variable aléatoire](/maths/premiere/variables-aleatoires/cours/).
