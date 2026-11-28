---
titre: "Chaîne d'énergie et chaîne d'information"
court: "Chaînes d'énergie et d'information"
description: "Chaîne d'information (acquérir, traiter, communiquer) et chaîne d'énergie (alimenter, distribuer, convertir, transmettre), exemple du portail automatique, expliqués avec un restaurant où le serveur prend la commande et la cuisine prépare. Exercices corrigés. Technologie de 4e."
ordre: 1
publie: 2026-11-28T15:05:00
video:
  youtube: ""
piege: "**Le capteur appartient à la chaîne d'information, le moteur à la chaîne d'énergie.** La chaîne d'information décide, la chaîne d'énergie agit. Les deux se rejoignent au niveau du distributeur, par exemple un relais ou une carte de commande moteur."
pdf:
  cours: /pdf/technologie/4e/chaine-d-energie-et-d-information-cours.pdf
  fiche: /pdf/technologie/4e/chaine-d-energie-et-d-information-fiche.pdf
  exercices: /pdf/technologie/4e/chaine-d-energie-et-d-information-exercices.pdf
suivant: capteurs-et-actionneurs
---

## Le problème

Tu appuies sur la télécommande, le portail s'ouvre, puis s'arrête tout seul quand il est grand ouvert. Qui a décidé de l'arrêter, et d'où vient la force pour le pousser ?

## L'idée : le restaurant

Dans un restaurant, le serveur **prend la commande**, la transmet à la cuisine, et le chef **décide** de ce qu'il faut préparer : c'est l'information. En cuisine, le gaz **alimente** les fourneaux, le commis **distribue** le travail, les feux **transforment** les aliments, et le plat **arrive** à table : c'est l'énergie. Un objet automatique fonctionne avec ces deux chaînes.

## La chaîne d'information

<div class="encadre">

1. **Acquérir** : les capteurs mesurent (bouton, détecteur de présence, fin de course).
2. **Traiter** : le microcontrôleur exécute le programme et décide.
3. **Communiquer** : il envoie un ordre à la chaîne d'énergie et informe l'utilisateur (voyant, écran, son).

</div>

## La chaîne d'énergie

<div class="encadre">

1. **Alimenter** : fournir l'énergie (secteur, pile, batterie, panneau solaire).
2. **Distribuer** : laisser passer ou non l'énergie selon l'ordre reçu (relais, interrupteur, variateur).
3. **Convertir** : transformer l'énergie (moteur : électrique → mécanique).
4. **Transmettre** : amener le mouvement là où il sert (engrenages, courroie, bras).

</div>

## L'exemple du portail

| Fonction | Composant |
|---|---|
| acquérir | récepteur de télécommande, capteur de fin de course |
| traiter | carte électronique |
| communiquer | ordre au relais, feu clignotant |
| alimenter | réseau électrique 230 V |
| distribuer | relais |
| convertir | moteur électrique |
| transmettre | bras articulé |

## Les pièges

- Le capteur fait partie de l'information, le moteur de l'énergie.
- Distribuer, ce n'est pas convertir : le relais ne transforme pas l'énergie.
- Le voyant qui s'allume sert à communiquer avec l'utilisateur.
