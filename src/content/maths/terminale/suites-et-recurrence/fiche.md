---
titre: Raisonnement par récurrence
---

<div class="encadre">

**But.** Démontrer qu'une propriété $P(\corange{n})$ est vraie pour tout entier $\corange{n} \ge n_0$.

<div class="etape o">

**1. Initialisation.** Je vérifie $P(n_0)$, au premier rang.

</div>
<div class="etape i">

**2. Hérédité.** Je suppose $P(\corange{k})$ vraie pour un $\corange{k} \ge n_0$ quelconque (hypothèse de récurrence) et je démontre $P(\corange{k+1})$.

</div>
<div class="etape t">

**3. Conclusion.** « Par récurrence, $P(\corange{n})$ est vraie pour tout $\corange{n} \ge n_0$. »

</div>

</div>

## La méthode pour une suite $\unn = f(\un)$

Je pars de l'hypothèse sur $\uk$ et je fais les mêmes opérations que dans la formule de la suite, jusqu'à obtenir $\ukk$.

- Multiplier par un nombre **positif** : le sens de l'inégalité ne change pas.
- Multiplier par un nombre **négatif** : le sens <span class="p">change</span>.
- Ajouter le même nombre des deux côtés : le sens ne change pas.

## Les questions types

| On me demande… | Je démontre par récurrence… |
|---|---|
| $\cbleu{u}$ est majorée par $M$ | $\un \le M$ |
| $\cbleu{u}$ est minorée par $m$ | $\un \ge m$ |
| $\cbleu{u}$ est croissante | $\un \le \unn$ |
| une formule explicite | $\un = \ldots$ |

## Les pièges

- <span class="p">L'hérédité seule ne prouve rien</span> : sans initialisation, rien ne tombe.
- Si je n'ai pas utilisé l'hypothèse de récurrence, il y a une erreur quelque part.
- Je n'écris jamais « on suppose $P(\corange{n})$ vraie pour tout $\corange{n}$ » : c'est ce qu'on veut démontrer.
- Croissante + majorée ⇒ la suite converge (mais pas forcément vers le majorant).
