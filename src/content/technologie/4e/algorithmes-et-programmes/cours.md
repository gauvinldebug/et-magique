---
titre: "Algorithmes et programmes"
court: "Algorithmes et programmes"
description: "Algorithme, programme, instructions, séquence, boucles, conditions, variables, événements, organigramme et programmation par blocs, expliqués avec une recette de cuisine. Exercices corrigés. Technologie de 4e."
ordre: 3
publie: 2026-11-28T15:07:00
video:
  youtube: ""
piege: "**Une boucle « répéter indéfiniment » ne s'arrête jamais toute seule.** Pour qu'un objet réagisse, il faut placer la condition à l'intérieur de la boucle, sinon elle n'est testée qu'une seule fois au démarrage."
pdf:
  cours: /pdf/technologie/4e/algorithmes-et-programmes-cours.pdf
  fiche: /pdf/technologie/4e/algorithmes-et-programmes-fiche.pdf
  exercices: /pdf/technologie/4e/algorithmes-et-programmes-exercices.pdf
suivant: transmettre-le-mouvement
---

## Le problème

Un robot aspirateur avance, tourne quand il touche un mur, revient à sa base quand sa batterie est faible. Personne ne le dirige. Comment sait-il quoi faire ?

## L'idée : la recette de cuisine

Une recette donne des étapes dans l'ordre : casser les œufs, ajouter la farine, mélanger **jusqu'à ce que** la pâte soit lisse, **si** elle est trop épaisse **alors** ajouter du lait. Un **algorithme** est une recette pour une machine. Le **programme** est cette recette traduite dans un langage que la machine comprend.

## Algorithme et programme

<div class="encadre">

Un **algorithme** est une suite finie d'instructions qui permet de résoudre un problème. Un **programme** est un algorithme écrit dans un langage de programmation (blocs Scratch, Python…).

</div>

## Les briques de base

- **Séquence** : les instructions s'exécutent l'une après l'autre.
- **Boucle** : répéter un bloc un nombre de fois, tant qu'une condition est vraie, ou indéfiniment.
- **Condition** : si … alors … sinon …
- **Variable** : une case mémoire qui porte un nom et contient une valeur qui peut changer (score, vitesse).
- **Événement** : un déclencheur (appui sur un bouton, message reçu).

## L'organigramme

<div class="encadre">

Un **organigramme** représente un algorithme avec des formes : ovale pour le début et la fin, rectangle pour une action, losange pour une condition (deux sorties : oui et non), flèches pour l'ordre.

</div>

## Un exemple : la barrière de parking

```
quand le programme démarre
répéter indéfiniment
    si voiture détectée alors
        lever la barrière
        attendre 5 secondes
        baisser la barrière
```

## Tester et corriger

On teste le programme dans plusieurs situations. Une erreur dans un programme s'appelle un **bug** ; la corriger, c'est **déboguer**.

## Les pièges

- Une condition placée hors de la boucle n'est testée qu'une fois.
- L'ordre des instructions compte.
- Une variable doit être initialisée avant d'être utilisée.
