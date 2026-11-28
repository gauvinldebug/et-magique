---
titre: "Fonctions, spécification et tests"
court: "Fonctions et tests"
description: "Variables et affectation, conditions, boucles for et while, fonctions avec paramètres et valeur de retour, différence entre return et print, spécification par docstring, préconditions avec assert, jeux de tests, expliqués avec une machine à café qui prend des pièces et rend une boisson. Exercices corrigés. Spécialité NSI de première."
ordre: 11
publie: 2026-11-28T14:11:00
video:
  youtube: ""
piege: "**`print` affiche, `return` renvoie.** Une fonction qui affiche son résultat sans le renvoyer renvoie `None` : on ne peut pas réutiliser ce résultat dans un calcul."
pdf:
  cours: /pdf/nsi/premiere/bases-de-la-programmation-cours.pdf
  fiche: /pdf/nsi/premiere/bases-de-la-programmation-fiche.pdf
  exercices: /pdf/nsi/premiere/bases-de-la-programmation-exercices.pdf
suivant: algorithmes-de-tri
---

## Le problème

Un programme de 200 lignes recopie trois fois le même calcul de moyenne. Il y a une erreur dedans : il faut la corriger à trois endroits, et on en oublie un. Comment écrire un morceau de code une fois et s'en servir partout ?

## L'idée : la machine à café

Une machine à café prend des entrées (des pièces, un choix de boisson) et rend une sortie (un gobelet). Tu n'as pas besoin de savoir comment elle marche à l'intérieur, seulement ce qu'elle attend et ce qu'elle donne. Une **fonction**, c'est cette machine.

## Les briques de base

```python
age = 16                    # affectation
if age >= 18:               # condition
    print("majeur")
else:
    print("mineur")
for i in range(3):          # boucle bornée : 0, 1, 2
    print(i)
n = 100
while n > 1:                # boucle non bornée
    n = n // 2
```

`for` répète un nombre connu de fois ; `while` répète tant qu'une condition est vraie.

## Définir une fonction

<div class="encadre">

```python
def moyenne(a, b):
    """Renvoie la moyenne des nombres a et b."""
    return (a + b) / 2
```

`a` et `b` sont les **paramètres** ; `return` renvoie le résultat et **termine** la fonction.

</div>

On l'appelle avec des **arguments** : `m = moyenne(12, 15)` donne 13.5.

## return n'est pas print

<mark>`return` donne le résultat au programme, `print` l'affiche seulement à l'écran.</mark> Une fonction sans `return` renvoie `None`.

## Spécifier et tester

La **docstring** dit ce que fait la fonction. Une **précondition** dit ce qu'elle exige de ses entrées ; on peut la vérifier avec `assert` :

```python
def racine_entiere(n):
    """Renvoie le plus grand entier r tel que r * r <= n. n est un entier positif."""
    assert n >= 0, "n doit être positif"
    r = 0
    while (r + 1) * (r + 1) <= n:
        r = r + 1
    return r

assert racine_entiere(10) == 3
assert racine_entiere(0) == 0
assert racine_entiere(16) == 4
```

Un bon jeu de tests contient des cas courants **et** des cas limites (0, valeur exacte, valeur négative).

## Les pièges

- Confondre `=` (affectation) et `==` (comparaison).
- Afficher au lieu de renvoyer.
- Une boucle `while` dont la condition ne devient jamais fausse : boucle infinie.
