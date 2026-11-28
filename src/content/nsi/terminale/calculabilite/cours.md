---
titre: "Calculabilité et décidabilité"
court: "Calculabilité"
description: "Programme vu comme une donnée, problème de l'arrêt et démonstration par l'absurde de son indécidabilité, notion de problème décidable, machine de Turing et thèse de Church-Turing, expliqués avec un détecteur de mensonges qu'on interroge sur lui-même. Exercices corrigés. Spécialité NSI de terminale."
ordre: 16
publie: 2026-11-28T13:16:00
video:
  youtube: ""
piege: "**Indécidable ne veut pas dire « on n'a pas encore trouvé ».** Il est prouvé qu'aucun programme, même futur, ne peut résoudre le problème de l'arrêt pour tous les programmes."
pdf:
  cours: /pdf/nsi/terminale/calculabilite-cours.pdf
  fiche: /pdf/nsi/terminale/calculabilite-fiche.pdf
  exercices: /pdf/nsi/terminale/calculabilite-exercices.pdf
suivant: paradigmes-de-programmation
---

## Le problème

Il serait formidable d'avoir un outil qui lit n'importe quel programme et annonce : « attention, il va tourner en boucle à l'infini ». On le chercherait en vain : on peut prouver qu'il n'existera jamais.

## L'idée : le détecteur interrogé sur lui-même

Imagine un détecteur qui prédit toujours ce que tu vas faire. Tu décides de faire exactement le contraire de sa prédiction. S'il dit « tu vas t'arrêter », tu continues ; s'il dit « tu vas continuer », tu t'arrêtes. Quelle que soit sa réponse, il a tort. Un tel détecteur infaillible ne peut donc pas exister.

## Un programme est une donnée

Un programme est un texte : on peut le donner en entrée à un autre programme. C'est ce que font un compilateur, un interpréteur Python ou un antivirus, qui lisent du code.

## Le problème de l'arrêt

<div class="encadre">

Existe-t-il une fonction `arret(prog, x)` qui, pour **tout** programme `prog` et toute entrée `x`, renvoie `True` si `prog(x)` s'arrête et `False` s'il boucle indéfiniment ?

</div>

**Réponse : non.** Supposons qu'elle existe, et écrivons :

```python
def paradoxe(prog):
    if arret(prog, prog):
        while True:
            pass
    else:
        return
```

Que fait `paradoxe(paradoxe)` ?

- Si `arret(paradoxe, paradoxe)` vaut `True`, `paradoxe` entre dans une boucle infinie : il ne s'arrête pas. Contradiction.
- Si elle vaut `False`, `paradoxe` s'arrête aussitôt. Contradiction encore.

<mark>Dans les deux cas, c'est absurde : la fonction `arret` ne peut pas exister.</mark>

## Décidable, indécidable

Un problème est **décidable** s'il existe un algorithme qui répond correctement oui ou non pour toute entrée, en un temps fini. « Ce nombre est-il premier ? » est décidable. Le problème de l'arrêt est **indécidable**.

## Ce qu'est un calcul

En 1936, Alan Turing décrit une machine abstraite très simple : un ruban de cases, une tête de lecture, une table de règles. La **thèse de Church-Turing** affirme que tout ce qui est calculable par un algorithme l'est par une machine de Turing. Ton ordinateur, aussi puissant soit-il, ne calcule rien de plus : il calcule plus vite.

## Les pièges

- Indécidable ne signifie pas difficile ou lent : c'est impossible en général, par principe.
- On peut savoir si **certains** programmes s'arrêtent ; c'est pour **tous** les programmes que c'est impossible.
- Un problème indécidable n'a rien à voir avec un problème dont la réponse est inconnue aujourd'hui.
