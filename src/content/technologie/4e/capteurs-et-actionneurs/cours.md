---
titre: "Capteurs et actionneurs"
court: "Capteurs et actionneurs"
description: "Capteurs logiques et analogiques, grandeur physique et signal, seuil, actionneurs (moteur, LED, buzzer, servomoteur), choisir un capteur, expliqués avec les cinq sens et les muscles. Exercices corrigés. Technologie de 4e."
ordre: 2
publie: 2026-11-28T15:06:00
video:
  youtube: ""
piege: "**Un capteur logique ne donne que deux états.** Un bouton est appuyé ou non ; il ne dit pas avec quelle force. Pour mesurer une valeur qui varie (température, lumière), il faut un capteur analogique."
pdf:
  cours: /pdf/technologie/4e/capteurs-et-actionneurs-cours.pdf
  fiche: /pdf/technologie/4e/capteurs-et-actionneurs-fiche.pdf
  exercices: /pdf/technologie/4e/capteurs-et-actionneurs-exercices.pdf
suivant: algorithmes-et-programmes
---

## Le problème

Une porte automatique s'ouvre quand tu approches, un thermostat allume le chauffage quand il fait froid. Comment l'objet sent-il ce qui se passe, et comment agit-il ?

## L'idée : les sens et les muscles

Tes yeux, ta peau, tes oreilles captent le monde : ce sont tes capteurs. Ton cerveau décide. Tes muscles bougent : ce sont tes actionneurs. Un objet technique a les mêmes trois étages.

## Les capteurs

<div class="encadre">

Un **capteur** transforme une grandeur physique (lumière, température, distance, pression) en un **signal électrique** que le microcontrôleur peut lire.

</div>

- **Capteur logique** (tout ou rien) : deux états seulement, 0 ou 1. Bouton-poussoir, interrupteur de fin de course, détecteur de présence.
- **Capteur analogique** : une valeur qui varie en continu. Capteur de température, de luminosité, de distance à ultrasons.

## Le seuil

Avec un capteur analogique, le programme compare souvent la mesure à un **seuil** : si la luminosité est inférieure à 300, allumer l'éclairage. Choisir le bon seuil se fait par des essais.

## Les actionneurs

<div class="encadre">

Un **actionneur** transforme un ordre électrique en action physique.

</div>

| Actionneur | Action |
|---|---|
| moteur | faire tourner |
| servomoteur | tourner jusqu'à un angle précis |
| LED, lampe | éclairer |
| buzzer, haut-parleur | émettre un son |
| vérin | pousser ou tirer en ligne droite |

## Choisir un capteur

On choisit un capteur selon la grandeur à mesurer, l'étendue de mesure (de combien à combien), la précision, le prix et l'environnement (pluie, poussière).

## Les pièges

- Logique : deux états ; analogique : une infinité de valeurs.
- Une LED est un actionneur, pas un capteur.
- Le capteur ne décide rien : c'est le programme qui compare au seuil.
