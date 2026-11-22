---
titre: Limites de suites
court: Limites de suites
description: Les limites de suites expliquées avec une fourmi et un drapeau, les formes indéterminées, les gendarmes, la limite monotone et un exercice type bac corrigé pas à pas. Terminale spécialité maths.
ordre: 2
publie: 2026-11-22
video:
  youtube: ""
  duree: 10 min
  chapitres:
    - { t: "0:00", titre: "Bonjour et objectif" }
    - { t: "0:09", titre: "Le problème" }
    - { t: "0:59", titre: "La fourmi et le drapeau" }
    - { t: "1:50", titre: "Définitions et limites à connaître" }
    - { t: "3:20", titre: "Opérations et formes indéterminées" }
    - { t: "4:43", titre: "Comparaison et gendarmes" }
    - { t: "5:33", titre: "La limite monotone" }
    - { t: "6:09", titre: "Exercice type bac" }
    - { t: "7:40", titre: "Les pièges" }
    - { t: "8:25", titre: "À toi" }
piege: "**La barrière n'est pas le drapeau.** Une suite croissante et majorée par 3 converge, mais pas forcément vers 3 : elle est aussi majorée par 4, et par 100. Le théorème dit que la limite existe, pas combien elle vaut."
pdf:
  cours: /pdf/maths/terminale/limites-de-suites-cours.pdf
  fiche: /pdf/maths/terminale/limites-de-suites-fiche.pdf
  exercices: /pdf/maths/terminale/limites-de-suites-exercices.pdf
suivant: limites-de-fonctions
---

## Le problème

Dans le chapitre précédent, on a étudié la suite définie par $\uz = 2$ et $\unn = \frac{1}{3}\,\un + 2$. On a démontré qu'elle est croissante et majorée par 3.

Ses termes valent $2$ ; $2{,}67$ ; $2{,}89$ ; $2{,}96$ ; $2{,}99$… Elle a l'air de « se coller » à 3. Mais <mark>« se coller » n'est pas une définition</mark>. Et toutes les suites ne font pas ça : $\corange{n}^2$ grimpe sans s'arrêter, $(-1)^{\corange{n}}$ saute de $-1$ à $1$ sans se décider.

La question du chapitre : quand $\corange{n}$ devient très grand, que fait la suite ?

## L'idée : la fourmi et le drapeau

Une fourmi marche sur une règle. Sa position après $\corange{n}$ pas, c'est $\un$. Un drapeau est planté à 3. À chaque pas, la fourmi parcourt deux tiers de la distance qui la sépare du drapeau : il lui reste $1$, puis $\frac{1}{3}$, puis $\frac{1}{9}$, puis $\frac{1}{27}$…

Elle n'atteint jamais le drapeau. Mais si tu traces une bande autour du drapeau, **aussi étroite que tu veux**, la fourmi finit par y entrer et **n'en ressort plus jamais**. C'est ça, une limite : la suite <span class="o">converge vers 3</span>.

## Les définitions

<div class="encadre">

**Limite finie.** La suite $\cbleu{u}$ a pour limite le réel $\cvert{\ell}$ si tout intervalle ouvert contenant $\cvert{\ell}$ contient tous les termes $\un$ à partir d'un certain rang. On note $\lim\limits_{\corange{n} \to +\infty} \un = \cvert{\ell}$ et on dit que la suite **converge**.

</div>

L'intervalle ouvert, c'est la bande autour du drapeau. « À partir d'un certain rang », c'est le moment où la fourmi entre dans la bande pour ne plus en sortir.

<div class="encadre">

**Limite infinie.** $\un$ tend vers $+\infty$ si tout intervalle $]A\,;+\infty[$ contient tous les termes $\un$ à partir d'un certain rang : la fourmi dépasse toutes les bornes $A$, aussi loin qu'on les place.

</div>

Une suite qui tend vers $\pm\infty$, ou qui n'a pas de limite (comme $(-1)^{\corange{n}}$), **diverge**.

## Les limites à connaître

| Suite | Limite |
|---|---|
| $\corange{n}$, $\corange{n}^2$, $\sqrt{\corange{n}}$ | $+\infty$ |
| $\frac{1}{\corange{n}}$, $\frac{1}{\corange{n}^2}$, $\frac{1}{\sqrt{\corange{n}}}$ | $0$ |
| $q^{\corange{n}}$ avec $q > 1$ | $+\infty$ |
| $q^{\corange{n}}$ avec $-1 < q < 1$ | $0$ |
| $q^{\corange{n}}$ avec $q = 1$ | $1$ |
| $q^{\corange{n}}$ avec $q \le -1$ | pas de limite |

## Opérations et formes indéterminées

Les limites de sommes, produits et quotients se calculent presque toujours « comme on s'y attend ». Sauf dans quatre cas, les <span class="p">formes indéterminées</span> :

$$
\crouge{\infty - \infty} \qquad \crouge{0 \times \infty} \qquad \crouge{\tfrac{\infty}{\infty}} \qquad \crouge{\tfrac{0}{0}}
$$

Deux fourmis partent à l'infini dans des sens opposés : où est le milieu ? Ça dépend de qui va le plus vite. Pour lever l'indétermination, on <mark>factorise par le terme le plus fort</mark>.

$$
\begin{aligned}
\corange{n}^2 - 3\corange{n} &= \corange{n}^2\left(1 - \tfrac{3}{\corange{n}}\right) && \text{FI } \infty - \infty \text{ : on factorise par } \corange{n}^2 \\
1 - \tfrac{3}{\corange{n}} &\to 1 && \text{car } \tfrac{3}{\corange{n}} \to 0 \\
\corange{n}^2 - 3\corange{n} &\to \cvert{+\infty} && \text{par produit}
\end{aligned}
$$

Pour un quotient : $\dfrac{2\corange{n}+1}{\corange{n}+3} = \dfrac{2 + \frac{1}{\corange{n}}}{1 + \frac{3}{\corange{n}}} \to \cvert{2}$.

## Les théorèmes pour justifier

<div class="encadre">

**Comparaison.** Si, à partir d'un certain rang, $\un \le v_{\corange{n}}$ et $\lim \un = +\infty$, alors $\lim v_{\corange{n}} = +\infty$.

**Gendarmes.** Si, à partir d'un certain rang, $v_{\corange{n}} \le \un \le w_{\corange{n}}$ et si $v$ et $w$ ont **la même** limite $\cvert{\ell}$, alors $\lim \un = \cvert{\ell}$.

**Limite monotone.** Une suite croissante et majorée converge. Une suite décroissante et minorée converge. Une suite croissante non majorée tend vers $+\infty$.

</div>

Exemple des gendarmes : $3 - \frac{1}{\corange{n}+1} \le 3 + \frac{(-1)^{\corange{n}}}{\corange{n}+1} \le 3 + \frac{1}{\corange{n}+1}$, et les deux bornes tendent vers 3, donc la suite du milieu tend vers $\cvert{3}$, même si elle zigzague autour du drapeau.

## La limite de notre suite

On pose $v_{\corange{n}} = \un - 3$ : c'est la position de la fourmi par rapport au drapeau.

$$
\begin{aligned}
v_{\corange{n}+1} &= \unn - 3 = \tfrac{1}{3}\un + 2 - 3 && \text{on remplace} \\
&= \tfrac{1}{3}\un - 1 = \tfrac{1}{3}\left(\un - 3\right) && \text{on factorise} \\
&= \tfrac{1}{3}\,v_{\corange{n}}
\end{aligned}
$$

$v$ est géométrique de raison $\frac{1}{3}$ et $v_0 = -1$, donc $v_{\corange{n}} = -\left(\frac{1}{3}\right)^{\corange{n}}$ et $\un = 3 - \left(\frac{1}{3}\right)^{\corange{n}}$. Comme $-1 < \frac{1}{3} < 1$, $\left(\frac{1}{3}\right)^{\corange{n}} \to 0$, donc <mark>$\lim \un = 3$</mark>.
