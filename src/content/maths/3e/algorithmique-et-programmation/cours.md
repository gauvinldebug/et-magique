---
titre: "Algorithmique et programmation"
court: "Algorithmique"
description: "Programmer en blocs, variables, boucles répéter et répéter jusqu'à, conditions si alors sinon, blocs personnalisés, coordonnées du lutin, déclencher par événements, lire et corriger un script du brevet, expliqués avec un lutin qui suit une partition. Exercices corrigés. 3e maths."
ordre: 13
publie: 2026-11-28T15:51:00
video:
  youtube: ""
piege: "**« Répéter jusqu'à » s'arrête quand la condition devient vraie, pas tant qu'elle est vraie.** « Répéter jusqu'à x > 100 » continue tant que x est inférieur ou égal à 100."
pdf:
  cours: /pdf/maths/3e/algorithmique-et-programmation-cours.pdf
  fiche: /pdf/maths/3e/algorithmique-et-programmation-fiche.pdf
  exercices: /pdf/maths/3e/algorithmique-et-programmation-exercices.pdf
---

## Le problème

Au brevet, on te donne souvent un script en blocs et on te demande ce qu'il dessine ou ce qu'il affiche. Comment le lire sans se tromper, et comment écrire le tien ?

## L'idée : le lutin et sa partition

Un musicien suit une partition : il joue les notes dans l'ordre, répète un refrain, choisit une variante selon un signe. Le lutin d'un programme fait pareil : il suit les blocs dans l'ordre, répète des boucles, teste des conditions. Pour savoir ce qu'il fait, on « joue » la partition à sa place, pas à pas.

## Les variables

<div class="encadre">

Une **variable** est une case nommée qui contient une valeur. « mettre score à 0 », puis « ajouter 5 à score » : score vaut 5.

</div>

## Les boucles

- **répéter $n$ fois** : nombre de tours connu.
- **répéter jusqu'à** une condition : on s'arrête dès que la condition est vraie.
- **répéter indéfiniment** : pour un jeu, une animation.

## Les conditions

<div class="encadre">

**si** condition **alors** … **sinon** … : le lutin choisit une branche selon que la condition est vraie ou fausse. Les conditions se combinent avec **et**, **ou**, **non**.

</div>

## Déplacer et dessiner

Le lutin a une position $(x\,;y)$ et une orientation (90 = vers la droite). « avancer de 50 » le déplace dans sa direction ; « tourner de 90 degrés » change sa direction. Pour dessiner un polygone régulier à $n$ côtés : répéter $n$ fois [avancer, tourner de $\frac{360}{n}$ degrés].

## Les blocs personnalisés

On peut créer son propre bloc, par exemple « carré (côté) », et l'utiliser plusieurs fois avec des valeurs différentes. Cela évite de réécrire le même code.

## Lire un script

On fait un **tableau de suivi** : une colonne par variable, une ligne par étape. On remplit au fur et à mesure.

## Les pièges

- « Répéter jusqu'à » s'arrête quand la condition devient vraie.
- Pour un polygone, l'angle de rotation est $\frac{360}{n}$, pas l'angle intérieur.
- Initialiser les variables au début.
