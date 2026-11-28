---
titre: "Les algorithmes gloutons"
court: "Algorithmes gloutons"
description: "Problèmes d'optimisation et principe glouton (faire à chaque étape le meilleur choix local), rendu de monnaie, problème du sac à dos, cas où le glouton est optimal et cas où il ne l'est pas, expliqués avec un enfant qui prend toujours le plus gros bonbon du bocal. Exercices corrigés. Spécialité NSI de première."
ordre: 14
publie: 2026-11-28T14:14:00
video:
  youtube: ""
piege: "**Un algorithme glouton ne donne pas toujours la meilleure solution.** Avec des pièces de 1, 3 et 4, il rend 6 en 4 + 1 + 1 (3 pièces) au lieu de 3 + 3 (2 pièces)."
pdf:
  cours: /pdf/nsi/premiere/algorithmes-gloutons-cours.pdf
  fiche: /pdf/nsi/premiere/algorithmes-gloutons-fiche.pdf
  exercices: /pdf/nsi/premiere/algorithmes-gloutons-exercices.pdf
suivant: k-plus-proches-voisins
---

## Le problème

Rendre la monnaie avec le moins de pièces possible, remplir un sac de randonnée avec les objets les plus utiles sans dépasser son poids, planifier un maximum de réunions dans une salle. Essayer toutes les combinaisons est souvent beaucoup trop long. Existe-t-il un raccourci ?

## L'idée : le plus gros bonbon d'abord

Un enfant devant un bocal prend toujours le plus gros bonbon qui reste, sans réfléchir à la suite. C'est rapide, et souvent pas mal. Mais parfois, en prenant le plus gros, il laisse un bocal où rien ne va ensemble. Un **algorithme glouton**, c'est cet enfant.

## Le principe

<div class="encadre">

Un **algorithme glouton** construit une solution étape par étape en faisant à chaque fois le **meilleur choix immédiat**, sans jamais revenir en arrière.

</div>

C'est rapide, mais le choix localement le meilleur ne mène pas toujours à la meilleure solution globale.

## Le rendu de monnaie

On rend la plus grosse pièce possible, tant qu'il reste quelque chose à rendre :

```python
def rendu(somme, pieces):
    """pieces est triée par ordre décroissant."""
    res = []
    for p in pieces:
        while somme >= p:
            res.append(p)
            somme = somme - p
    return res

rendu(68, [50, 20, 10, 5, 2, 1])   # [50, 10, 5, 2, 1]
```

<mark>Avec les pièces en euros, le glouton donne toujours le minimum de pièces.</mark> Avec des pièces de 1, 3 et 4, pour rendre 6, il donne 4 + 1 + 1 alors que 3 + 3 suffit.

## Le sac à dos

Un sac supporte 10 kg. Objets : A (7 kg, valeur 42), B (5 kg, 30), C (5 kg, 30). Stratégie gloutonne : prendre d'abord les objets de meilleur rapport valeur/poids. Les trois ont un rapport de 6. Si on prend A en premier, il reste 3 kg : valeur totale 42. Mais B + C donnent 60.

## Les pièges

- Croire que le glouton est toujours optimal.
- Oublier de trier les pièces ou les objets avant de commencer.
- Le glouton ne revient jamais sur un choix déjà fait.
