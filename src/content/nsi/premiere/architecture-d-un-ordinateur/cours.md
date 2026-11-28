---
titre: "L'architecture d'un ordinateur"
court: "Architecture"
description: "Modèle de von Neumann (processeur avec unité de commande et unité arithmétique et logique, mémoire, entrées-sorties, bus), cycle chargement-décodage-exécution, registres, langage machine et assembleur, portes logiques ET, OU, NON et circuits combinatoires, expliqués avec un cuisinier qui suit une recette. Exercices corrigés. Spécialité NSI de première."
ordre: 8
publie: 2026-11-28T14:08:00
video:
  youtube: ""
piege: "**Dans le modèle de von Neumann, programme et données sont dans la même mémoire.** Le processeur ne distingue une instruction d'une donnée que par l'endroit où il va la chercher."
pdf:
  cours: /pdf/nsi/premiere/architecture-d-un-ordinateur-cours.pdf
  fiche: /pdf/nsi/premiere/architecture-d-un-ordinateur-fiche.pdf
  exercices: /pdf/nsi/premiere/architecture-d-un-ordinateur-exercices.pdf
suivant: systeme-d-exploitation
---

## Le problème

Un ordinateur exécute des milliards d'instructions par seconde, alors que ses composants ne savent faire que des choses très simples : laisser passer du courant ou non. Comment s'organise une machine capable de tout calculer ?

## L'idée : le cuisinier et sa recette

Un cuisinier lit la recette ligne par ligne : il lit l'instruction, comprend ce qu'elle demande, l'exécute, puis passe à la suivante. La recette et les ingrédients sont rangés dans le même placard. Le processeur, c'est le cuisinier ; la mémoire, c'est le placard.

## Le modèle de von Neumann

<div class="encadre">

Depuis 1945, presque tous les ordinateurs suivent l'**architecture de von Neumann** :

- le **processeur** (CPU), formé de l'**unité de commande** (qui lit et décode les instructions) et de l'**unité arithmétique et logique** (UAL, qui calcule) ;
- la **mémoire**, qui contient à la fois **le programme et les données** ;
- les **entrées-sorties** (clavier, écran, disque, réseau) ;
- des **bus**, qui transportent les informations entre eux.

</div>

## Le cycle d'exécution

Le processeur répète sans fin :

1. **charger** l'instruction dont l'adresse est dans le compteur de programme ;
2. la **décoder** ;
3. l'**exécuter**, puis passer à l'instruction suivante.

Il garde quelques valeurs dans des **registres**, de toutes petites mémoires internes très rapides. Un processeur à 3 GHz fait 3 milliards de cycles d'horloge par seconde.

## Le langage machine

Les instructions sont des nombres binaires. L'**assembleur** les écrit avec des mots courts :

```
LOAD R1, 10     ; R1 reçoit le contenu de l'adresse 10
ADD R1, R1, 5   ; R1 = R1 + 5
STORE R1, 11    ; on range R1 à l'adresse 11
```

Un programme Python est traduit, au bout du compte, en instructions de ce genre.

## Les portes logiques

Tout calcul est construit avec des **portes logiques**, réalisées par des transistors :

| a | b | ET | OU | NON a |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 |

<mark>En combinant des portes, on fabrique un additionneur, puis toute l'UAL.</mark> Un demi-additionneur de deux bits donne la somme `a XOR b` et la retenue `a ET b`.

## Les pièges

- Mémoire vive (RAM, effacée à l'extinction) et stockage (disque, permanent) ne sont pas la même chose.
- Les registres sont dans le processeur, pas dans la RAM.
- Une fréquence plus élevée ne suffit pas à dire qu'un processeur est plus rapide (nombre de cœurs, mémoire cache…).
