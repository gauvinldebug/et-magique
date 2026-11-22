---
titre: Dénombrement
---

<div class="encadre">

**L'image.** Le **vestiaire** : les choix s'enchaînent, on multiplie. Le **podium** : l'ordre compte, pas de répétition. La **poignée de cartes** : l'ordre ne compte pas.

</div>

## Décider

| Ordre ? | Répétition ? | Outil | Nombre |
|---|---|---|---|
| oui | oui | $k$-uplets (cadenas) | $n^k$ |
| oui | non | arrangements (podium) | $\frac{n!}{(n-k)!}$ |
| oui, tous | non | permutations (ranger) | $n!$ |
| non | non | combinaisons (poignée) | $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ |

<div class="etape o">

**Réflexe.** Je me demande : « Si j'échange deux éléments, est-ce que j'obtiens un résultat différent ? » Si oui, l'ordre compte.

</div>

## Les formules

- $\mathrm{Card}(E \times F) = \mathrm{Card}(E) \times \mathrm{Card}(F)$ ; un ensemble à $n$ éléments a $2^n$ parties.
- $0! = 1$ ; $\binom{n}{0} = \binom{n}{n} = 1$ ; $\binom{n}{1} = n$.
- $\binom{n}{k} = \binom{n}{n-k}$ ; $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$ ; $\sum_{k=0}^{n}\binom{n}{k} = 2^n$.

## Les méthodes

- « **Au moins un** » : je compte le contraire (« aucun ») et je soustrais du total.
- Plusieurs groupes à choisir en même temps (2 filles **et** 3 garçons) : je multiplie les combinaisons.
- « **Ou** » entre deux cas qui ne se recoupent pas : j'additionne.

## Les pièges

- <span class="p">Arrangement ou combinaison ?</span> Un comité n'a pas d'ordre ; un bureau (président, trésorier) en a un.
- Ne pas oublier les répétitions possibles (codes, mots de passe).
- La calculatrice : $\binom{n}{k}$ s'obtient avec la touche « Combinaison » ou « nCr ».
