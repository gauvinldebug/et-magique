---
titre: "Informatique embarquée et objets connectés"
court: "Objets connectés"
description: "Systèmes embarqués, capteurs, actionneurs et microcontrôleur, programme qui tourne en boucle, interface homme-machine, objets connectés et sécurité, expliqués avec le corps humain qui sent, réfléchit et bouge. Exercices corrigés. SNT de seconde."
ordre: 6
publie: 2026-11-28T14:50:00
video:
  youtube: ""
piege: "**Un capteur mesure, un actionneur agit.** Le thermomètre d'un chauffage est un capteur ; la résistance qui chauffe est un actionneur. Entre les deux, c'est le programme qui décide."
pdf:
  cours: /pdf/nsi/seconde/objets-connectes-cours.pdf
  fiche: /pdf/nsi/seconde/objets-connectes-fiche.pdf
  exercices: /pdf/nsi/seconde/objets-connectes-exercices.pdf
suivant: photographie-numerique
---

## Le problème

Une voiture récente contient plus de 50 petits ordinateurs. Ta montre compte tes pas, l'éclairage s'allume quand tu passes. Ces objets n'ont ni clavier ni écran d'ordinateur. Comment fonctionnent-ils ?

## L'idée : le corps humain

Quand tu touches une plaque chaude, ta peau **sent** la chaleur, ton cerveau **décide** et ta main **bouge**. Un système embarqué fait la même chose : des capteurs sentent, un microcontrôleur décide, des actionneurs agissent.

## Un système embarqué

<div class="encadre">

Un **système informatique embarqué** est un ordinateur intégré dans un objet pour une tâche précise. Il comprend :

- des **capteurs** qui mesurent une grandeur (température, lumière, mouvement) ;
- un **microcontrôleur** qui exécute un programme ;
- des **actionneurs** qui agissent (moteur, lampe, haut-parleur).

</div>

## Le programme tourne en boucle

Le programme d'un objet embarqué ne s'arrête jamais. Il répète sans cesse : lire les capteurs, décider, commander les actionneurs.

```python
while True:
    lumiere = capteur_lumiere()
    if lumiere < 30:
        allumer_lampe()
    else:
        eteindre_lampe()
```

## L'interface homme-machine

L'**IHM** est ce qui permet à une personne de communiquer avec l'objet : boutons, écran tactile, voyants, commande vocale. Elle doit être simple et sans ambiguïté, surtout dans une voiture ou un avion.

## Les objets connectés

<div class="encadre">

Un **objet connecté** est un système embarqué qui échange des données par un réseau (Wi-Fi, Bluetooth, réseau mobile). On peut le commander à distance et il envoie ses mesures.

</div>

Exemples : enceinte connectée, thermostat, montre, compteur électrique.

## Les risques

Un objet connecté mal protégé peut être piraté : caméra observée à distance, objets utilisés pour attaquer des sites. Il collecte aussi des données sur nos habitudes. Il faut changer le mot de passe d'origine et faire les mises à jour.

## Les pièges

- Capteur = mesurer, actionneur = agir.
- Un objet embarqué n'est pas forcément connecté.
- Le programme d'un objet embarqué tourne en boucle sans fin.
