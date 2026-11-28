---
titre: "Listes, piles et files"
court: "Listes, piles, files"
description: "Structures de données linéaires, interface et implémentation, pile (LIFO) avec empiler et dépiler, file (FIFO) avec enfiler et défiler, liste chaînée, applications : annuler, parenthèses, file d'attente, expliquées avec une pile d'assiettes et une file au self. Exercices corrigés. Spécialité NSI de terminale."
ordre: 3
publie: 2026-11-28T13:03:00
video:
  youtube: ""
piege: "**Pile et file ne retirent pas le même élément.** La pile rend le dernier arrivé (LIFO), la file rend le premier arrivé (FIFO)."
pdf:
  cours: /pdf/nsi/terminale/listes-piles-files-cours.pdf
  fiche: /pdf/nsi/terminale/listes-piles-files-fiche.pdf
  exercices: /pdf/nsi/terminale/listes-piles-files-exercices.pdf
suivant: arbres-binaires
---

## Le problème

Le bouton « Annuler » d'un traitement de texte doit défaire la dernière action, puis l'avant-dernière. Une imprimante partagée doit imprimer les documents dans l'ordre où ils sont arrivés. Il faut deux façons différentes de ranger des éléments.

## L'idée : la pile d'assiettes et la file du self

Sur une pile d'assiettes, on pose et on prend toujours sur le dessus : la dernière posée est la première reprise. Dans la file du self, on entre par l'arrière et on sort par l'avant : le premier arrivé est le premier servi.

## La pile (LIFO)

<div class="encadre">

Une **pile** (*Last In, First Out*) offre :

- `empiler(x)` : poser `x` au sommet ;
- `depiler()` : retirer et renvoyer le sommet ;
- `est_vide()`.

</div>

En Python, une liste fait une bonne pile : `append` pour empiler, `pop()` pour dépiler. Les deux se font en temps constant.

```python
pile = []
pile.append("taper")
pile.append("gras")
pile.pop()     # "gras" : on annule la dernière action
```

## La file (FIFO)

<div class="encadre">

Une **file** (*First In, First Out*) offre `enfiler(x)` à l'arrière, `defiler()` à l'avant, et `est_vide()`.

</div>

`liste.pop(0)` fonctionne, mais décale tous les éléments : c'est lent sur une grande file. On utilise `collections.deque` (`append` et `popleft`), ou deux piles.

## Interface et implémentation

<mark>L'interface dit ce qu'on peut faire, l'implémentation dit comment c'est codé.</mark> Une même interface de file peut être codée avec une liste Python, une `deque`, deux piles ou une liste chaînée. Le programme qui l'utilise n'a pas à changer.

## La liste chaînée

Chaque élément (un **maillon**) contient une valeur et un lien vers le maillon suivant. Ajouter en tête est immédiat ; accéder au 1000e élément oblige à suivre 1000 liens.

## Les pièges

- Confondre LIFO et FIFO.
- Dépiler une pile vide : il faut tester `est_vide()` avant.
- Croire qu'une liste Python est une liste chaînée : c'est un tableau dynamique.
