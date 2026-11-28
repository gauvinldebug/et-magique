---
titre: "Les processus et l'ordonnancement"
court: "Processus"
description: "Programme et processus, états d'un processus (élu, prêt, bloqué), ordonnancement par le système d'exploitation, algorithmes du premier arrivé, du plus court d'abord et du tourniquet, commandes ps et kill, interblocage, expliqués avec un cuisinier qui jongle entre plusieurs plats. Exercices corrigés. Spécialité NSI de terminale."
ordre: 10
publie: 2026-11-28T13:10:00
video:
  youtube: ""
piege: "**Un processeur à un seul cœur n'exécute qu'un processus à la fois.** L'impression de simultanéité vient de l'ordonnanceur, qui alterne très vite entre eux."
pdf:
  cours: /pdf/nsi/terminale/processus-cours.pdf
  fiche: /pdf/nsi/terminale/processus-fiche.pdf
  exercices: /pdf/nsi/terminale/processus-exercices.pdf
suivant: routage
---

## Le problème

Sur un ordinateur, la musique joue, le navigateur charge une page, un antivirus tourne en fond. Pourtant, un cœur de processeur ne fait qu'une chose à la fois. Comment tout avance en même temps ?

## L'idée : le cuisinier qui jongle

Un cuisinier seul prépare cinq plats. Il met l'eau à chauffer, et pendant qu'elle chauffe, il coupe les légumes. Il passe d'un plat à l'autre quand l'un doit attendre. Chaque plat avance, et vu de la salle, tout semble se faire en même temps. Le cuisinier, c'est le processeur ; celui qui décide de l'ordre, c'est l'**ordonnanceur**.

## Programme et processus

<div class="encadre">

Un **programme** est un fichier d'instructions. Un **processus** est un programme **en cours d'exécution**, avec sa mémoire, ses fichiers ouverts et son état. Lancer deux fois le même programme crée deux processus.

</div>

Chaque processus a un numéro, le **PID**. Sous Linux, `ps` les liste et `kill 4127` arrête le processus 4127.

## Les états d'un processus

| État | Signification |
|---|---|
| élu | il s'exécute sur le processeur |
| prêt | il attend son tour |
| bloqué | il attend une ressource (lecture disque, clavier, réseau) |

Un processus bloqué redevient prêt quand la ressource arrive ; il ne repasse pas directement à l'état élu.

## L'ordonnancement

Le système d'exploitation choisit quel processus prêt devient élu.

- **Premier arrivé, premier servi** : simple, mais un long processus fait attendre tous les autres.
- **Plus court d'abord** : réduit l'attente moyenne, mais il faut connaître les durées.
- **Tourniquet** (*round robin*) : chacun s'exécute un court **quantum** de temps, puis repasse en fin de file. <mark>C'est la base des systèmes actuels : personne n'attend trop longtemps.</mark>

## L'interblocage

Le processus P1 détient l'imprimante et attend le scanner ; P2 détient le scanner et attend l'imprimante. Aucun ne lâche ce qu'il a : ils attendent pour toujours. C'est un **interblocage** (*deadlock*).

## Les pièges

- Confondre programme (le fichier) et processus (l'exécution).
- Un processus bloqué passe par l'état prêt avant d'être élu.
- Plusieurs processus « en même temps » sur un cœur : ils alternent, ils ne sont pas simultanés.
