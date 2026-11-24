---
titre: Limites de fonctions
court: Limites de fonctions
description: Les limites de fonctions expliquées avec un train et ses rails, les asymptotes, les formes indéterminées, les croissances comparées et la composée, avec des exercices corrigés pas à pas. Terminale spécialité maths.
ordre: 3
publie: 2026-11-22T20:00:00
video:
  youtube: ""
piege: "**L'exponentielle gagne toujours.** Devant $\\corange{x}^{n}$, $\\mathrm{e}^{\\corange{x}}$ l'emporte en $+\\infty$ : $\\frac{\\mathrm{e}^{\\corange{x}}}{\\corange{x}^{3}} \\to +\\infty$, pas vers 0, même si $\\corange{x}^{3}$ démarre plus vite."
pdf:
  cours: /pdf/maths/terminale/limites-de-fonctions-cours.pdf
  fiche: /pdf/maths/terminale/limites-de-fonctions-fiche.pdf
  exercices: /pdf/maths/terminale/limites-de-fonctions-exercices.pdf
suivant: continuite
---

## Le problème

Avec les [suites](/maths/terminale/limites-de-suites/cours/), une seule question : que se passe-t-il quand $\corange{n}$ devient très grand ? Avec une fonction, on peut se poser la question **à plusieurs endroits** : quand $\corange{x}$ tend vers $+\infty$, vers $-\infty$, mais aussi quand $\corange{x}$ s'approche d'une valeur interdite.

Prends $\cbleu{f}(\corange{x}) = \dfrac{1}{\corange{x} - 2}$. En $\corange{x} = 2$, on ne peut pas calculer. Mais que fait la courbe **près** de 2 ? Et très loin à droite ?

## L'idée : le train et les rails

Imagine la courbe comme un train. Certaines droites sont des **rails** : le train finit par rouler collé contre elles, de plus en plus près, sans jamais dérailler. Ces rails, ce sont les <span class="o">asymptotes</span>.

- Un rail **horizontal** $y = \ell$ : loin à droite (ou à gauche), le train se stabilise à la hauteur $\ell$.
- Un rail **vertical** $x = a$ : près de $a$, le train file vers le ciel (ou vers le sol), en longeant le rail.

Pour $\cbleu{f}(\corange{x}) = \dfrac{1}{\corange{x} - 2}$, il y a deux rails : la droite $x = 2$ et la droite $y = 0$.

## Les définitions

<div class="encadre">

**Limite finie en l'infini.** $\lim\limits_{\corange{x} \to +\infty} \cbleu{f}(\corange{x}) = \cvert{\ell}$ si tout intervalle ouvert contenant $\cvert{\ell}$ contient toutes les valeurs $\cbleu{f}(\corange{x})$ pour $\corange{x}$ assez grand. La droite $y = \cvert{\ell}$ est alors **asymptote horizontale** à la courbe en $+\infty$.

**Limite infinie en un réel.** $\lim\limits_{\corange{x} \to a} \cbleu{f}(\corange{x}) = +\infty$ si $\cbleu{f}(\corange{x})$ dépasse n'importe quel réel $A$ dès que $\corange{x}$ est assez proche de $a$. La droite $x = a$ est alors **asymptote verticale**.

</div>

Souvent, la limite n'est pas la même des deux côtés de $a$. On parle de limite **à gauche** ($\corange{x} \to a^-$, avec $\corange{x} < a$) et **à droite** ($\corange{x} \to a^+$, avec $\corange{x} > a$).

Pour $\dfrac{1}{\corange{x} - 2}$ : si $\corange{x} \to 2^+$, le dénominateur est un tout petit nombre positif, donc $\cbleu{f}(\corange{x}) \to +\infty$. Si $\corange{x} \to 2^-$, il est tout petit et négatif, donc $\cbleu{f}(\corange{x}) \to -\infty$.

## Les limites à connaître

| Fonction | en $+\infty$ | en $-\infty$ | en $0$ |
|---|---|---|---|
| $\corange{x}^n$ ($n \ge 1$) | $+\infty$ | $+\infty$ si $n$ pair, $-\infty$ si $n$ impair | $0$ |
| $\frac{1}{\corange{x}}$ | $0$ | $0$ | $+\infty$ à droite, $-\infty$ à gauche |
| $\sqrt{\corange{x}}$ | $+\infty$ | non définie | $0$ |
| $\mathrm{e}^{\corange{x}}$ | $+\infty$ | $0$ | $1$ |

## Opérations et formes indéterminées

Les règles sont les mêmes que pour les suites. Les quatre <span class="p">formes indéterminées</span> aussi :

$$
\crouge{\infty - \infty} \qquad \crouge{0 \times \infty} \qquad \crouge{\tfrac{\infty}{\infty}} \qquad \crouge{\tfrac{0}{0}}
$$

Pour un polynôme ou une fraction rationnelle en l'infini, on <mark>factorise par le terme de plus haut degré</mark>.

$$
\begin{aligned}
\frac{2\corange{x}^2 + 1}{\corange{x}^2 - 3\corange{x}} &= \frac{\corange{x}^2\left(2 + \frac{1}{\corange{x}^2}\right)}{\corange{x}^2\left(1 - \frac{3}{\corange{x}}\right)} && \text{FI } \tfrac{\infty}{\infty} \\
&= \frac{2 + \frac{1}{\corange{x}^2}}{1 - \frac{3}{\corange{x}}} \to \cvert{2} && \text{en } +\infty
\end{aligned}
$$

Le train se colle donc au rail horizontal $y = 2$.

## Les croissances comparées

Quand l'exponentielle affronte une puissance de $\corange{x}$, il y a une forme indéterminée. Le résultat est toujours le même : <mark>l'exponentielle gagne</mark>.

<div class="encadre">

Pour tout entier $n \ge 1$ :

$$
\lim_{\corange{x} \to +\infty} \frac{\mathrm{e}^{\corange{x}}}{\corange{x}^n} = +\infty \qquad\qquad \lim_{\corange{x} \to -\infty} \corange{x}^n\,\mathrm{e}^{\corange{x}} = 0
$$

</div>

Exemple : $\lim\limits_{\corange{x} \to +\infty} (\corange{x}^2 - \mathrm{e}^{\corange{x}})$ ? On factorise par le plus fort : $\corange{x}^2 - \mathrm{e}^{\corange{x}} = \mathrm{e}^{\corange{x}}\left(\frac{\corange{x}^2}{\mathrm{e}^{\corange{x}}} - 1\right)$. La parenthèse tend vers $0 - 1 = -1$, donc la limite vaut $\cvert{-\infty}$.

## La composée

Pour $\cbleu{f}(\corange{x}) = \mathrm{e}^{-\corange{x}^2}$ en $+\infty$, on procède en deux temps, comme un relais :

1. L'intérieur : $-\corange{x}^2 \to -\infty$ quand $\corange{x} \to +\infty$.
2. L'extérieur : $\mathrm{e}^{X} \to 0$ quand $X \to -\infty$.

Par composition, $\lim\limits_{\corange{x} \to +\infty} \mathrm{e}^{-\corange{x}^2} = \cvert{0}$.

## Les théorèmes de comparaison

<div class="encadre">

**Comparaison.** Si $\cbleu{f}(\corange{x}) \ge g(\corange{x})$ pour $\corange{x}$ assez grand et $\lim\limits_{+\infty} g = +\infty$, alors $\lim\limits_{+\infty} \cbleu{f} = +\infty$.

**Gendarmes.** Si $g(\corange{x}) \le \cbleu{f}(\corange{x}) \le h(\corange{x})$ pour $\corange{x}$ assez grand et si $g$ et $h$ ont **la même** limite $\cvert{\ell}$ en $+\infty$, alors $\lim\limits_{+\infty} \cbleu{f} = \cvert{\ell}$.

</div>

Exemple : $-1 \le \cos \corange{x} \le 1$, donc pour $\corange{x} > 0$, $-\frac{1}{\corange{x}} \le \frac{\cos \corange{x}}{\corange{x}} \le \frac{1}{\corange{x}}$. Les deux bornes tendent vers 0, donc $\lim\limits_{+\infty} \frac{\cos \corange{x}}{\corange{x}} = \cvert{0}$ : le train oscille, mais il se colle quand même au rail $y = 0$.

<div class="labo" data-labo="gendarmes"></div>
