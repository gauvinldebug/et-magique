---
titre: Estimer une population, capture-recapture et intervalle de confiance
court: Estimer une population
description: Échantillon et population, méthode de capture-marquage-recapture, fréquence observée et proportion inconnue, intervalle de confiance au niveau 95 %, précision et taille de l'échantillon, expliqués avec les poissons marqués d'un étang, avec des exercices corrigés pas à pas. Enseignement scientifique de Terminale, partie maths.
ordre: 5
publie: 2026-11-23T09:11:00
video:
  youtube: ""
piege: >-
  **Pour deux fois plus de précision, il faut quatre fois plus d'individus.** L'intervalle de confiance a une demi-largeur $\frac{1}{\sqrt{n}}$ : pour la diviser par 2, il faut multiplier $n$ par 4. Et un intervalle de confiance à 95 % peut, dans 5 % des cas, ne pas contenir la vraie valeur.
pdf:
  cours: /pdf/maths/ens-scientifique-terminale/estimer-une-population-cours.pdf
  fiche: /pdf/maths/ens-scientifique-terminale/estimer-une-population-fiche.pdf
  exercices: /pdf/maths/ens-scientifique-terminale/estimer-une-population-exercices.pdf
suivant: intelligence-artificielle
---

## Le problème

Des biologistes veulent connaître le nombre de truites d'un lac, sans pouvoir toutes les compter. Ils en pêchent 200, les marquent et les relâchent. Une semaine plus tard, ils en pêchent 400, dont 100 sont marquées. Combien de truites vivent dans le lac ?

## L'idée : les poissons marqués de l'étang

Les poissons marqués se mélangent aux autres. Si tu repêches au hasard, la proportion de poissons marqués dans ton filet devrait être à peu près la même que dans tout l'étang.

Le filet est un **échantillon**, l'étang est la **population**. <mark>On estime une proportion inconnue de la population à partir de la fréquence observée dans un échantillon</mark>, en acceptant une marge d'erreur.

## Capture-marquage-recapture

<div class="encadre">

On marque $\corange{M}$ individus. Lors de la recapture de $\corange{n}$ individus, $\corange{m}$ sont marqués. Si les marqués se sont bien mélangés :

$$
\frac{m}{n} \approx \frac{M}{N} \qquad \text{donc} \qquad \cbleu{N} \approx \frac{M \times n}{m}
$$

</div>

## Intervalle de confiance

<div class="encadre">

Dans un échantillon de taille $n$ (assez grand), on observe une fréquence $f$. La proportion inconnue $p$ dans la population appartient, avec un **niveau de confiance de 95 %**, à l'intervalle

$$
\left[\, f - \frac{1}{\sqrt{n}} \,;\, f + \frac{1}{\sqrt{n}} \,\right]
$$

Sa largeur vaut $\frac{2}{\sqrt{n}}$ : plus l'échantillon est grand, plus l'estimation est **précise**. Cela signifie que, sur un grand nombre d'échantillons, environ 95 % des intervalles ainsi construits contiennent $p$.

</div>

## Retour au problème

Estimation ponctuelle : $N \approx \frac{200 \times 400}{100} = 800$ truites.

Avec la marge d'erreur : $f = \frac{100}{400} = 0{,}25$ et $\frac{1}{\sqrt{400}} = 0{,}05$. La proportion de truites marquées est dans $[0{,}20 \,;\, 0{,}30]$ au niveau 95 %. Comme $N = \frac{200}{p}$ :

$$
\frac{200}{0{,}30} \approx 667 \leq N \leq \frac{200}{0{,}20} = 1\,000
$$

<mark>Le lac contient environ 800 truites, entre 667 et 1 000 au niveau de confiance 95 %</mark>.

Pour t'entraîner : [les exercices corrigés](/maths/ens-scientifique-terminale/estimer-une-population/exercices/). La suite : [intelligence artificielle](/maths/ens-scientifique-terminale/intelligence-artificielle/cours/). Pour revoir l'échantillonnage : [probabilités et échantillonnage](/maths/seconde/probabilites/cours/).
