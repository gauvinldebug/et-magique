---
titre: "Diviser pour régner"
court: "Diviser pour régner"
description: "Méthode diviser pour régner en trois étapes (diviser, résoudre, combiner), tri fusion et fusion de deux listes triées, coût en n log n comparé au tri par insertion, recherche dichotomique récursive, expliqués avec un tas de copies à trier à plusieurs. Exercices corrigés. Spécialité NSI de terminale."
ordre: 13
publie: 2026-11-28T13:13:00
video:
  youtube: ""
piege: "**La fusion de deux listes triées ne consiste pas à les mettre bout à bout.** Il faut comparer les premiers éléments à chaque étape pour garder l'ordre."
pdf:
  cours: /pdf/nsi/terminale/diviser-pour-regner-cours.pdf
  fiche: /pdf/nsi/terminale/diviser-pour-regner-fiche.pdf
  exercices: /pdf/nsi/terminale/diviser-pour-regner-exercices.pdf
suivant: programmation-dynamique
---

## Le problème

Trier un million de valeurs par insertion demande de l'ordre de $10^{12}$ comparaisons : des heures. Il existe des tris bien plus rapides. Leur secret : ne jamais attaquer le gros problème de front.

## L'idée : trier les copies à plusieurs

Un professeur doit classer 200 copies par ordre alphabétique. Il coupe le tas en deux et donne chaque moitié à un collègue, qui fait de même, jusqu'à des tas d'une seule copie, déjà triés. Ensuite, on fusionne : deux tas triés se réunissent en un tas trié en regardant juste la copie du dessus de chacun.

## La méthode

<div class="encadre">

**Diviser pour régner** :

1. **diviser** le problème en sous-problèmes plus petits, de même nature ;
2. **résoudre** chaque sous-problème, souvent par un appel récursif ;
3. **combiner** les solutions pour obtenir celle du problème de départ.

</div>

## Le tri fusion

```python
def fusion(a, b):
    res = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            res.append(a[i])
            i += 1
        else:
            res.append(b[j])
            j += 1
    return res + a[i:] + b[j:]

def tri_fusion(t):
    if len(t) <= 1:
        return t
    m = len(t) // 2
    return fusion(tri_fusion(t[:m]), tri_fusion(t[m:]))
```

## Son coût

On coupe en deux environ $\log_2 n$ fois, et à chaque niveau, les fusions traitent les $n$ éléments. <mark>Le tri fusion fait de l'ordre de $n \log_2 n$ comparaisons.</mark>

| $n$ | insertion (environ $n^2$) | fusion (environ $n \log_2 n$) |
|---|---|---|
| 1 000 | 1 000 000 | 10 000 |
| 1 000 000 | $10^{12}$ | $2 \times 10^7$ |

## Un autre exemple : la dichotomie

Chercher une valeur dans un tableau trié, c'est aussi diviser pour régner : on compare au milieu et on ne garde qu'une moitié. Ici, il n'y a rien à combiner.

## Les pièges

- Oublier le cas de base (liste de taille 0 ou 1) : la récursion ne s'arrête pas.
- Fusionner en concaténant : le résultat n'est pas trié.
- Le tri fusion crée de nouvelles listes : il utilise plus de mémoire qu'un tri en place.
