---
titre: "La programmation orientée objet"
court: "Programmation objet"
description: "Classes et objets, attributs et méthodes, constructeur __init__, self, encapsulation, exemple d'une classe Compte et d'une classe Point, interface et implémentation, expliqués avec un moule à gâteaux et ses gâteaux. Exercices corrigés. Spécialité NSI de terminale."
ordre: 2
publie: 2026-11-28T13:02:00
video:
  youtube: ""
piege: "**Oublier `self` en premier paramètre d'une méthode.** Python passe automatiquement l'objet lui-même : sans `self`, l'appel `objet.methode()` déclenche une erreur sur le nombre d'arguments."
pdf:
  cours: /pdf/nsi/terminale/programmation-objet-cours.pdf
  fiche: /pdf/nsi/terminale/programmation-objet-fiche.pdf
  exercices: /pdf/nsi/terminale/programmation-objet-exercices.pdf
suivant: listes-piles-files
---

## Le problème

Un jeu gère cent personnages. Chacun a un nom, des points de vie, une position. Avec des listes séparées (`noms`, `vies`, `positions`), on finit par mélanger les indices. Comment regrouper tout ce qui concerne un personnage ?

## L'idée : le moule et les gâteaux

Une **classe** est un moule : elle décrit la forme une fois pour toutes. Chaque **objet** est un gâteau sorti du moule : il a la même forme, mais sa propre garniture. On fabrique autant de gâteaux qu'on veut avec un seul moule.

## Classe, objet, attributs, méthodes

<div class="encadre">

- Une **classe** définit un nouveau type.
- Un **objet** (ou **instance**) est une valeur de ce type.
- Les **attributs** sont les données de l'objet.
- Les **méthodes** sont les fonctions qui agissent sur l'objet.

</div>

```python
class Compte:
    def __init__(self, titulaire, solde=0):
        self.titulaire = titulaire
        self.solde = solde

    def deposer(self, montant):
        self.solde = self.solde + montant

    def retirer(self, montant):
        if montant > self.solde:
            return False
        self.solde = self.solde - montant
        return True

c = Compte("Léa", 50)
c.deposer(20)
print(c.solde)   # 70
```

## Le constructeur et self

`__init__` est le **constructeur** : il est appelé à la création de l'objet (`Compte("Léa", 50)`) et initialise les attributs.

<mark>`self` désigne l'objet sur lequel la méthode travaille.</mark> Écrire `c.deposer(20)` revient à appeler `Compte.deposer(c, 20)`.

## Interface et encapsulation

L'**interface** d'une classe, c'est ce qu'on a le droit d'utiliser : ici `deposer` et `retirer`. L'**implémentation**, c'est la façon dont c'est codé à l'intérieur. En passant par les méthodes plutôt qu'en modifiant `c.solde` directement, on garde les règles (pas de retrait supérieur au solde) : c'est l'**encapsulation**.

## Les pièges

- Oublier `self` dans la définition d'une méthode, ou oublier `self.` devant un attribut (on crée alors une simple variable locale).
- Confondre la classe `Compte` et l'objet `c`.
- `__init__` s'écrit avec deux tirets bas de chaque côté.
