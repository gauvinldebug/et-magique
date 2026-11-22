---
titre: Suites numériques
---

<div class="encadre">

**L'image.** L'**escalier** : on ajoute toujours la même hauteur $r$ (arithmétique). La **photocopieuse** : on multiplie toujours par le même zoom $q$ (géométrique).

</div>

## Les deux suites

| | Arithmétique | Géométrique |
|---|---|---|
| Récurrence | $\unn = \un + r$ | $\unn = q\,\un$ |
| Terme général | $\un = \uz + \corange{n}r$ | $\un = \uz\,q^{\corange{n}}$ |
| Entre deux rangs | $\un = u_p + (\corange{n} - p)r$ | $\un = u_p\,q^{\corange{n} - p}$ |
| Prouver | $\unn - \un$ constant | $\frac{\unn}{\un}$ constant |
| Variations | signe de $r$ | $q > 1$ ou $0 < q < 1$ (si $\uz > 0$) |

## Les sommes

<div class="etape o">

$1 + 2 + \dots + \corange{n} = \frac{\corange{n}(\corange{n} + 1)}{2}$ ; $1 + q + \dots + q^{\corange{n}} = \frac{1 - q^{\corange{n}+1}}{1 - q}$ ($q \ne 1$).

**Somme de termes consécutifs** : arithmétique, $(\text{nombre de termes}) \times \frac{\text{premier} + \text{dernier}}{2}$ ; géométrique, $\text{premier} \times \frac{1 - q^{\text{nombre de termes}}}{1 - q}$.

</div>

## Les méthodes

- Variations : signe de $\unn - \un$, ou variations de $\cbleu{f}$ si $\un = \cbleu{f}(\corange{n})$.
- Évolution de $t\,\%$ : $\times\left(1 + \frac{t}{100}\right)$. Baisse de $t\,\%$ : $\times\left(1 - \frac{t}{100}\right)$.
- Seuil (« à partir de quel rang ») : calculatrice (tableau de valeurs) ou algorithme avec une boucle `while`.

## Les pièges

- <span class="p">Ajouter ou multiplier ?</span> Un pourcentage constant donne une suite géométrique.
- Le nombre de termes de $\uz$ à $\un$ est $\corange{n} + 1$, pas $\corange{n}$.
- Calculer trois termes ne prouve pas qu'une suite est arithmétique ou géométrique.
