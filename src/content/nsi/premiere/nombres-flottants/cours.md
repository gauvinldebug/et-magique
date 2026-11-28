---
titre: "Les nombres à virgule en machine"
court: "Nombres flottants"
description: "Représentation approchée des réels en machine, écriture binaire d'un nombre à virgule, nombres flottants et norme IEEE 754 (signe, exposant, mantisse), erreurs d'arrondi comme 0,1 + 0,2, comparaison de flottants avec une tolérance, expliqués avec une règle graduée qui n'a pas toutes les graduations. Exercices corrigés. Spécialité NSI de première."
ordre: 2
publie: 2026-11-28T14:02:00
video:
  youtube: ""
piege: "**On ne compare jamais deux flottants avec ==.** En Python, `0.1 + 0.2 == 0.3` vaut False : on teste plutôt `abs(a - b) < 1e-9`."
pdf:
  cours: /pdf/nsi/premiere/nombres-flottants-cours.pdf
  fiche: /pdf/nsi/premiere/nombres-flottants-fiche.pdf
  exercices: /pdf/nsi/premiere/nombres-flottants-exercices.pdf
suivant: booleens-et-texte
---

## Le problème

Tape `0.1 + 0.2` dans Python : il répond `0.30000000000000004`. Ce n'est pas un bug de Python : aucun ordinateur ne peut stocker exactement 0,1. Pourquoi ?

## L'idée : la règle graduée incomplète

Une règle graduée au millimètre ne permet pas de mesurer exactement 1/3 de centimètre : on lit la graduation la plus proche. La machine a des graduations très serrées, mais en nombre fini. Tout nombre qui ne tombe pas pile sur une graduation est arrondi à la plus proche.

## Les chiffres après la virgule en binaire

<div class="encadre">

Après la virgule, les bits valent $\frac12, \frac14, \frac18, \frac1{16}\dots$

$$
0{,}101_2 = \frac12 + \frac18 = 0{,}625
$$

</div>

Certains nombres simples en base 10 ont une écriture **infinie** en base 2, comme 1/3 en base 10 ($0{,}333\dots$). C'est le cas de 0,1 :

$$
0{,}1 = 0{,}000110011001100\dots_2
$$

Comme on ne garde qu'un nombre fini de bits, <mark>0,1 est stocké de façon approchée</mark>.

## Les flottants

Un nombre **flottant** (type `float` en Python) s'écrit comme en notation scientifique, mais en base 2 :

$$
x = \text{signe} \times 1{,}\text{mantisse} \times 2^{\text{exposant}}
$$

La norme **IEEE 754** en double précision utilise 64 bits : 1 bit de signe, 11 bits d'exposant, 52 bits de mantisse. Cela donne environ 15 à 17 chiffres significatifs.

## Les conséquences

- `0.1 + 0.2 == 0.3` vaut `False`.
- Les erreurs d'arrondi peuvent s'accumuler dans une longue boucle.
- Pour comparer, on teste si l'écart est très petit :

```python
abs((0.1 + 0.2) - 0.3) < 1e-9   # True
```

Pour l'argent, on compte souvent en **centimes entiers** pour éviter tout arrondi.

## Les pièges

- Croire que l'erreur vient de Python : tous les langages ont le même comportement.
- Tester l'égalité de deux flottants avec `==`.
- Les entiers Python (`int`) sont exacts ; seuls les `float` sont approchés.
