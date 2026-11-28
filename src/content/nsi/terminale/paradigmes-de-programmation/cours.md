---
titre: "Les paradigmes de programmation"
court: "Paradigmes"
description: "Paradigme impératif, paradigme fonctionnel (fonctions pures, absence d'effets de bord, fonctions passées en paramètre, map et filter), paradigme objet, choix du paradigme selon le problème, expliqués avec trois façons de donner une recette de cuisine. Exercices corrigés. Spécialité NSI de terminale."
ordre: 17
publie: 2026-11-28T13:17:00
video:
  youtube: ""
piege: "**Une fonction qui modifie une liste reçue en paramètre a un effet de bord.** Elle n'est pas pure : l'appeler deux fois peut donner deux résultats différents."
pdf:
  cours: /pdf/nsi/terminale/paradigmes-de-programmation-cours.pdf
  fiche: /pdf/nsi/terminale/paradigmes-de-programmation-fiche.pdf
  exercices: /pdf/nsi/terminale/paradigmes-de-programmation-exercices.pdf
suivant: modularite-et-mise-au-point
---

## Le problème

On peut calculer la somme des carrés des nombres pairs d'une liste de plusieurs façons : avec une boucle et une variable qu'on modifie, avec des fonctions qu'on enchaîne, ou avec des objets. Ce ne sont pas des détails de style : ce sont des manières différentes de penser un programme.

## L'idée : trois façons de donner une recette

- La recette **impérative** : « prends un bol, verse la farine, ajoute les œufs, mélange ». Une suite d'ordres qui modifient l'état de la cuisine.
- La recette **fonctionnelle** : « la pâte, c'est mélanger(farine, œufs) ». On décrit ce qu'on obtient en combinant des transformations.
- La recette **objet** : on a un objet Four, avec ses réglages et sa méthode `cuire`. On fait interagir des objets.

## Le paradigme impératif

<div class="encadre">

Le programme est une **suite d'instructions** qui modifient l'**état** (les variables).

</div>

```python
s = 0
for x in liste:
    if x % 2 == 0:
        s = s + x ** 2
```

## Le paradigme fonctionnel

<div class="encadre">

Le programme est une **composition de fonctions**. Les fonctions sont **pures** : même entrée, même sortie, et **aucun effet de bord** (rien n'est modifié hors de la fonction).

</div>

```python
pairs = filter(lambda x: x % 2 == 0, liste)
carres = map(lambda x: x ** 2, pairs)
s = sum(carres)
```

Les fonctions sont des valeurs comme les autres : on peut les **passer en paramètre** (`map` reçoit une fonction) ou les renvoyer.

<mark>Une fonction pure est facile à tester et à réutiliser : son résultat ne dépend que de ses paramètres.</mark>

## Le paradigme objet

Le programme est un ensemble d'**objets** qui regroupent données et méthodes, et qui s'envoient des messages (voir le chapitre sur la programmation objet).

## Choisir

| Paradigme | Point fort |
|---|---|
| impératif | proche du fonctionnement de la machine, intuitif |
| fonctionnel | pas d'effets de bord, facile à tester, se parallélise bien |
| objet | modéliser des entités (personnages, comptes, fenêtres) |

Python permet les trois. Haskell est surtout fonctionnel ; C est impératif ; Java est très orienté objet.

## Les pièges

- Une fonction qui affiche, modifie une variable globale ou une liste reçue a un effet de bord.
- `map` et `filter` renvoient des objets à parcourir, pas des listes : `list(map(...))` pour les voir.
- Les paradigmes ne s'excluent pas : un même programme peut les mélanger.
