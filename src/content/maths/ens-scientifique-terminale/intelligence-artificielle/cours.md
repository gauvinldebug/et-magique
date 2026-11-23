---
titre: Intelligence artificielle, neurone artificiel et apprentissage
court: Intelligence artificielle
description: De la machine de Turing à l'intelligence artificielle, neurone artificiel avec somme pondérée et seuil, apprentissage à partir de données, données d'entraînement et de test, taux d'erreur, plus proches voisins et distance, biais et enjeux éthiques, expliqués avec un conseil de classe et ses coefficients, avec des exercices corrigés pas à pas. Enseignement scientifique de Terminale, partie maths.
ordre: 6
publie: 2026-11-23T09:12:00
video:
  youtube: ""
piege: >-
  **Un taux de réussite élevé ne prouve pas qu'une IA est utile.** Si 95 % des courriels ne sont pas des spams, un programme qui répond toujours « pas spam » a 95 % de réussite sans rien détecter. Et une IA se juge sur des données de **test** qu'elle n'a jamais vues, pas sur ses données d'entraînement.
pdf:
  cours: /pdf/maths/ens-scientifique-terminale/intelligence-artificielle-cours.pdf
  fiche: /pdf/maths/ens-scientifique-terminale/intelligence-artificielle-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-terminale/intelligence-artificielle-exercices.pdf
---

## Le problème

Un filtre anti-spam doit décider seul si un courriel est indésirable. Il regarde trois indices : le courriel contient-il le mot « gratuit » ? Combien contient-il de liens ? L'expéditeur est-il dans le carnet d'adresses ? Comment combiner ces indices pour décider ?

## L'idée : le conseil de classe

Au conseil de classe, chaque matière a un **coefficient** : certaines comptent plus que d'autres. On calcule une moyenne pondérée, puis on la compare à un **seuil** : au-dessus de 10, passage ; en dessous, redoublement.

Un neurone artificiel fait exactement cela. <mark>Il multiplie chaque entrée par un poids, additionne, et compare la somme à un seuil</mark>. Apprendre, pour une IA, c'est régler ces poids à partir d'exemples.

## De Turing à l'IA

<div class="encadre">

En 1936, Alan Turing décrit une machine abstraite capable d'exécuter n'importe quel **algorithme** : c'est le modèle théorique des ordinateurs. L'**intelligence artificielle** regroupe des méthodes qui traitent des problèmes dont la résolution semble demander de l'intelligence humaine : reconnaître une image, traduire, jouer.

Au lieu d'écrire toutes les règles à la main, l'**apprentissage automatique** fait trouver les règles à partir d'un grand nombre d'exemples.

</div>

## Le neurone artificiel

<div class="encadre">

Un neurone reçoit des entrées $x_1, \ldots, x_k$, affectées de **poids** $w_1, \ldots, w_k$. Il calcule la somme pondérée

$$
\cbleu{s} = w_1 x_1 + w_2 x_2 + \cdots + w_k x_k
$$

puis renvoie $1$ si $s \geq \corange{\text{seuil}}$, et $0$ sinon. Un **réseau de neurones** enchaîne des couches de tels neurones.

</div>

## Apprendre et évaluer

<div class="encadre">

- On dispose d'exemples **étiquetés** (courriels déjà classés spam ou non).
- Une partie sert à l'**entraînement** : on ajuste les poids pour faire le moins d'erreurs possible.
- L'autre partie sert au **test** : on mesure le **taux d'erreur** $= \frac{\text{nombre d'erreurs}}{\text{nombre d'exemples}}$ sur des données jamais vues.
- **Plus proches voisins** : pour classer un nouveau point, on regarde la classe majoritaire parmi les $k$ points d'entraînement les plus proches, avec la distance $\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

Une IA reproduit les **biais** de ses données : des données déséquilibrées donnent des décisions injustes. D'où des enjeux **éthiques** (discrimination, vie privée, responsabilité).

</div>

## Retour au problème

Après apprentissage, le filtre utilise les poids $w_1 = 2$ (mot « gratuit », 0 ou 1), $w_2 = 0{,}5$ (nombre de liens), $w_3 = -3$ (expéditeur connu, 0 ou 1) et le seuil $1{,}5$.

Courriel inconnu, avec « gratuit » et 4 liens : $s = 2 \times 1 + 0{,}5 \times 4 + (-3) \times 0 = 4 \geq 1{,}5$, donc spam.

Courriel d'un ami, avec 1 lien : $s = 0 + 0{,}5 - 3 = -2{,}5 < 1{,}5$, donc pas spam.

<mark>Le neurone combine les indices par une somme pondérée et tranche avec un seuil</mark>. Le poids négatif de l'expéditeur connu traduit un indice de confiance.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-terminale/intelligence-artificielle/exercices/). Pour revoir les moyennes pondérées : [statistiques](/maths/seconde/statistiques/cours/). Pour programmer : [algorithmique et programmation](/maths/premiere/algorithmique/cours/).
