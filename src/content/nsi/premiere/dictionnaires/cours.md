---
titre: "Les dictionnaires"
court: "Dictionnaires"
description: "Dictionnaires Python, associations clé-valeur, création, lecture, ajout et modification, test d'appartenance avec in, parcours des clés, des valeurs et des couples avec items, compter des occurrences, expliqués avec un vestiaire où chaque ticket donne un manteau. Exercices corrigés. Spécialité NSI de première."
ordre: 5
publie: 2026-11-28T14:05:00
video:
  youtube: ""
piege: "**Lire une clé absente provoque une KeyError.** On teste d'abord `if cle in d`, ou on utilise `d.get(cle, valeur_par_defaut)`."
pdf:
  cours: /pdf/nsi/premiere/dictionnaires-cours.pdf
  fiche: /pdf/nsi/premiere/dictionnaires-fiche.pdf
  exercices: /pdf/nsi/premiere/dictionnaires-exercices.pdf
suivant: donnees-en-tables
---

## Le problème

On veut retrouver le numéro de téléphone de « Sami » dans un carnet. Avec un tableau de couples, il faut tout parcourir. On aimerait accéder directement à une valeur par son nom, pas par sa position.

## L'idée : le vestiaire

Au vestiaire, tu donnes un ticket numéroté et on te rend ton manteau. Personne ne fouille tous les manteaux : le ticket mène directement au bon crochet. Dans un dictionnaire, la clé est le ticket, la valeur est le manteau.

## Clés et valeurs

<div class="encadre">

Un **dictionnaire** associe des **clés** à des **valeurs**. Chaque clé est unique.

</div>

```python
tel = {"Sami": "0612", "Léa": "0755"}
tel["Sami"]            # lecture : "0612"
tel["Tom"] = "0699"    # ajout
tel["Léa"] = "0700"    # modification
"Sami" in tel          # True : la clé existe
len(tel)               # 3
```

Les clés doivent être non modifiables : chaînes, nombres, p-uplets. Une liste ne peut pas être une clé.

## Parcourir

```python
for nom in tel:                 # les clés
    print(nom)
for numero in tel.values():     # les valeurs
    print(numero)
for nom, numero in tel.items(): # les couples
    print(nom, numero)
```

## Compter des occurrences

C'est l'usage le plus courant :

```python
def compter(texte):
    c = {}
    for lettre in texte:
        if lettre in c:
            c[lettre] = c[lettre] + 1
        else:
            c[lettre] = 1
    return c

compter("banane")   # {'b': 1, 'a': 2, 'n': 2, 'e': 1}
```

<mark>Accéder à une valeur par sa clé est très rapide, même dans un dictionnaire d'un million d'entrées</mark>, alors qu'il faudrait parcourir un tableau.

## Les pièges

- Lire une clé absente : KeyError. Tester avec `in`, ou utiliser `d.get(cle, 0)`.
- Deux fois la même clé : la seconde valeur écrase la première.
- `for x in d` parcourt les clés, pas les valeurs.
