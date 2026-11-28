// Les défis des pages d'exercices : il faut manipuler la figure pour répondre,
// puis vérifier. La correction est immédiate ; après deux essais, un indice s'affiche.
import { Plan, cadre, curseur, bouton, nb, v, borne, el, type Cadre } from './outils';

type Defi = (r: HTMLElement) => void;
const f2 = (x: number) => nb(x, 2);

/** Ajoute « Vérifier », la zone de correction, l'indice et le souvenir du défi réussi. */
export function verif(r: HTMLElement, c: Cadre, test: () => { ok: boolean; msg: string }, indice: string) {
  const retour = el('div', 'lb-retour');
  retour.setAttribute('aria-live', 'polite');
  retour.hidden = true;
  c.lecture.after(retour);
  const cle = 'defi:' + (r.dataset.labo ?? '');
  let essais = 0;
  const deja = (() => { try { return localStorage.getItem(cle) === '1'; } catch { return false; } })();
  if (deja) r.classList.add('reussi');
  const b = bouton(c.ctrl, 'Vérifier', () => {
    const { ok, msg } = test();
    essais++;
    retour.hidden = false;
    retour.className = 'lb-retour ' + (ok ? 'ok' : 'ko');
    retour.innerHTML = (ok ? '<b>Bravo.</b> ' : '<b>Pas encore.</b> ') + msg + (!ok && essais >= 2 ? `<span class="lb-indice"><b>Indice :</b> ${indice}</span>` : '');
    (window as any).umami?.track(ok ? 'defi-reussi' : 'defi-rate', { defi: r.dataset.labo, essais });
    if (ok) {
      r.classList.add('reussi');
      try { localStorage.setItem(cle, '1'); } catch { /* rien */ }
      eclat(b);
    }
  }, 'lb-b-plein lb-verifier');
  // toucher la figure efface l'ancienne correction
  c.ctrl.addEventListener('input', () => { retour.hidden = true; });
  c.scene.addEventListener('pointerdown', () => { retour.hidden = true; });
}

function eclat(e: HTMLElement) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = e.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  for (let i = 0; i < 10; i++) {
    const s = document.createElement('span');
    s.className = 'eclat ' + 'ctk'[i % 3];
    const a = (i / 10) * Math.PI * 2 + Math.random() * .4, d = 50 + Math.random() * 45;
    s.style.setProperty('--x0', `${x}px`); s.style.setProperty('--y0', `${y}px`);
    s.style.setProperty('--x1', `${x + Math.cos(a) * d}px`); s.style.setProperty('--y1', `${y + Math.sin(a) * d - 20}px`);
    s.style.setProperty('--r', `${(Math.random() - .5) * 360}deg`);
    document.body.append(s);
    s.addEventListener('animationend', () => s.remove());
  }
}

/* ---------- Première : tangente horizontale ---------- */
const tangenteHorizontale: Defi = (r) => {
  const c = cadre(r, 'Une tangente bien à plat', `Place le point A sur la courbe de ${v('f')}(${v('x')}) = ${v('x')}³/4 − 1,5${v('x')} à un endroit où la tangente est horizontale, avec ${v('a')} > 0.`, 'Défi');
  const f = (x: number) => x ** 3 / 4 - 1.5 * x, fp = (x: number) => .75 * x * x - 1.5;
  const p = new Plan(c.scene, { x: [-3.6, 3.6], y: [-4, 4], ratio: .62, pasX: 1, pasY: 1 });
  let a = 2.5;
  const A = p.poignee((x) => { a = Math.round(borne(x, -3, 3) * 50) / 50; dessine(); }, 'lb-poignee', 'Point A');
  const ca = curseur(c.ctrl, { nom: v('a'), min: -3, max: 3, pas: .02, val: a, cls: 'i' }, () => { a = ca.valeur; dessine(); });
  function dessine() {
    p.vide();
    p.courbe(f, 'lb-f');
    const m = fp(a);
    p.droite(m, f(a) - m * a, 'lb-tan');
    A.place(a, f(a)); ca.valeur = a;
    c.lecture.innerHTML = `${v('a')} = ${f2(a)}`;
  }
  verif(r, c, () => {
    const ok = Math.abs(a - Math.SQRT2) < .04;
    return { ok, msg: ok ? `En ${v('a')} = √2 ≈ 1,41, ${v('f')}′(${v('a')}) = 0,75 × 2 − 1,5 = 0 : la tangente est horizontale, c'est un minimum local.` : a <= 0 ? `On cherche un point d'abscisse positive.` : `Ici ${v('f')}′(${v('a')}) ≈ ${f2(fp(a))} : la tangente ${fp(a) > 0 ? 'monte' : 'descend'} encore.` };
  }, `résous ${v('f')}′(${v('a')}) = 0,75${v('a')}² − 1,5 = 0.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : une seule racine ---------- */
const racineDouble: Defi = (r) => {
  const c = cadre(r, 'Juste toucher l\'axe', `La parabole a pour équation ${v('y')} = ${v('x')}² + 3${v('x')} + ${v('c')}. Règle ${v('c')} pour que le trinôme ait une seule racine.`, 'Défi');
  const p = new Plan(c.scene, { x: [-6, 3], y: [-4, 6], ratio: .6, pasX: 1, pasY: 1 });
  const cc = curseur(c.ctrl, { nom: v('c'), min: -3, max: 5, pas: .05, val: 0 }, () => dessine());
  function dessine() {
    p.vide();
    p.courbe((x) => x * x + 3 * x + cc.valeur, 'lb-f');
    c.lecture.innerHTML = `${v('c')} = ${f2(cc.valeur)}`;
  }
  verif(r, c, () => {
    const D = 9 - 4 * cc.valeur, ok = Math.abs(cc.valeur - 2.25) < .03;
    return { ok, msg: ok ? `Δ = 9 − 4 × 2,25 = 0 : une racine double, ${v('x')}<sub>0</sub> = −3/2.` : `Δ = 9 − 4${v('c')} = ${f2(D)} : ${D > 0 ? 'deux racines, la parabole coupe l\'axe deux fois' : 'aucune racine, la parabole ne touche pas l\'axe'}.` };
  }, `une seule racine quand Δ = ${v('b')}² − 4${v('ac')} = 0.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : la tangente à exp qui passe par O ---------- */
const expOrigine: Defi = (r) => {
  const c = cadre(r, 'Viser l\'origine', 'Déplace le point sur la courbe de exp jusqu\'à ce que sa tangente passe par l\'origine du repère.', 'Défi');
  const p = new Plan(c.scene, { x: [-3, 2.5], y: [-1, 8], ratio: .62, pasX: 1, pasY: 1 });
  let a = -1;
  const P = p.poignee((x) => { a = Math.round(borne(x, -2.5, 2) * 50) / 50; dessine(); }, 'lb-poignee', 'Point de la courbe');
  const ca = curseur(c.ctrl, { nom: v('a'), min: -2.5, max: 2, pas: .02, val: a, cls: 'i' }, () => { a = ca.valeur; dessine(); });
  function dessine() {
    p.vide();
    const e = Math.exp(a);
    p.courbe(Math.exp, 'lb-f');
    p.droite(e, e * (1 - a), 'lb-tan');
    p.pt(0, 0, 'lb-pt lb-pt-p', 5);
    P.place(a, e); ca.valeur = a;
    c.lecture.innerHTML = `${v('a')} = ${f2(a)}`;
  }
  verif(r, c, () => {
    const ok = Math.abs(a - 1) < .03, oy = Math.exp(a) * (1 - a);
    return { ok, msg: ok ? `La tangente en ${v('a')} = 1 a pour équation ${v('y')} = e${v('x')} : elle passe par O.` : `Ta tangente coupe l'axe des ordonnées en ${f2(oy)}, pas en 0.` };
  }, `la tangente en ${v('a')} coupe l'axe des abscisses en ${v('a')} − 1.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : placer un angle ---------- */
const placerAngle: Defi = (r) => {
  const c = cadre(r, 'Le bon endroit sur le cercle', `Place le point M associé au réel 5π/6 sur le cercle trigonométrique.`, 'Défi');
  const p = new Plan(c.scene, { x: [-1.4, 1.4], y: [-1.35, 1.35], orthonorme: true, ratio: .75, hMax: 480, pasX: .5, pasY: .5 });
  let t = .3;
  const M = p.poignee((x, y) => { t = Math.atan2(y, x); dessine(); }, 'lb-poignee', 'Point M');
  function dessine() {
    p.vide();
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X(1) - p.X(0), class: 'lb-f lb-mince' });
    for (let k = 0; k < 12; k++) { const a = k * Math.PI / 6; p.seg(.94 * Math.cos(a), .94 * Math.sin(a), Math.cos(a), Math.sin(a), 'lb-axe'); }
    p.seg(0, 0, Math.cos(t), Math.sin(t), 'lb-rayon');
    M.place(Math.cos(t), Math.sin(t));
    c.lecture.innerHTML = 'Fais glisser M le long du cercle (les traits marquent les multiples de π/6).';
  }
  verif(r, c, () => {
    const ok = Math.abs(t - 5 * Math.PI / 6) < .09;
    return { ok, msg: ok ? `5π/6 = π − π/6 : cos = −√3/2, sin = 1/2.` : `Ton point correspond à environ ${nb(t * 6 / Math.PI, 1)}π/6.` };
  }, '5π/6, c\'est un demi-tour moins π/6, dans le quart en haut à gauche.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : produit scalaire imposé ---------- */
const produitImpose: Defi = (r) => {
  const c = cadre(r, 'Une ombre de −6', `Avec ${v('u')}(4 ; 0), place B pour que ${v('u')} · ${v('v')} = −6, où ${v('v')} = OB. Plusieurs positions conviennent.`, 'Défi');
  const p = new Plan(c.scene, { x: [-4.5, 6.5], y: [-3.5, 4.5], orthonorme: true, ratio: .6, pasX: 1, pasY: 1 });
  let bx = 2, by = 2;
  const B = p.poignee((x, y) => { bx = Math.round(borne(x, -4, 6) * 2) / 2; by = Math.round(borne(y, -3, 4) * 2) / 2; dessine(); }, 'lb-poignee', 'Point B');
  function dessine() {
    p.vide();
    p.fleche(0, 0, 4, 0, 'lb-vec lb-vec-t');
    p.fleche(0, 0, bx, by, 'lb-vec lb-vec-i');
    p.seg(bx, by, bx, 0, 'lb-ombre');
    B.place(bx, by);
    c.lecture.innerHTML = `B(${nb(bx)} ; ${nb(by)})`;
  }
  verif(r, c, () => {
    const ps = 4 * bx, ok = Math.abs(ps + 6) < 1e-9;
    return { ok, msg: ok ? `${v('u')} · ${v('v')} = 4 × (−1,5) + 0 × ${nb(by)} = −6. Toute la droite ${v('x')} = −1,5 convient.` : `Ici ${v('u')} · ${v('v')} = 4 × ${nb(bx)} = ${nb(ps)}.` };
  }, `${v('u')} · ${v('v')} = 4${v('x')}<sub>B</sub> + 0 × ${v('y')}<sub>B</sub> : seule l'abscisse de B compte.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : trouver le rang ---------- */
const trouverRang: Defi = (r) => {
  const c = cadre(r, 'À partir de quel rang ?', `${v('u')}<sub>${v('n')}</sub> = 3 − (1/3)<sup>${v('n')}</sup>. Place la barre au premier rang à partir duquel tous les termes sont dans la bande ]2,99 ; 3,01[.`, 'Défi');
  const p = new Plan(c.scene, { x: [-.5, 10.5], y: [2.97, 3.015], ratio: .55, pasX: 1, pasY: .01, fmtY: (y) => nb(y, 2) });
  const N = curseur(c.ctrl, { nom: 'rang', min: 0, max: 10, pas: 1, val: 2, fmt: String, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    p.rect(p.x0, 2.99, p.x1, 3.01, 'lb-bande');
    p.seg(p.x0, 3, p.x1, 3, 'lb-lim');
    for (let n = 0; n <= 10; n++) { const u = 3 - 3 ** -n; if (u > p.y0) p.pt(n, u, 'lb-pt lb-pt-t', 5); else p.txt(n, p.y0, '↓', 'lb-et lb-et-t', 0, -4, 'middle'); }
    p.seg(N.valeur - .5, p.y0, N.valeur - .5, p.y1, 'lb-rang');
  }
  verif(r, c, () => {
    const ok = N.valeur === 5;
    return { ok, msg: ok ? `(1/3)<sup>4</sup> ≈ 0,0123 n'est pas inférieur à 0,01, mais (1/3)<sup>5</sup> ≈ 0,0041 l'est : à partir du rang 5, tout est dans la bande.` : N.valeur < 5 ? `Le terme de rang ${N.valeur} n'est pas encore dans la bande : 3 − ${v('u')}<sub>${N.valeur}</sub> ≈ ${nb(3 ** -N.valeur, 4)}.` : `C'est vrai à partir de ce rang, mais pas le premier : regarde le rang juste avant.` };
  }, `cherche le plus petit ${v('n')} tel que (1/3)<sup>${v('n')}</sup> < 0,01.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : exactement deux solutions ---------- */
const deuxSolutions: Defi = (r) => {
  const c = cadre(r, 'Deux solutions, pas une de plus', `Règle ${v('k')} (positif) pour que l'équation ${v('f')}(${v('x')}) = ${v('k')} ait exactement deux solutions sur [−2,2 ; 2,2].`, 'Défi');
  const f = (x: number) => .5 * x ** 3 - 1.5 * x;
  const p = new Plan(c.scene, { x: [-2.6, 2.6], y: [-2.6, 2.6], ratio: .6, pasX: 1, pasY: 1 });
  const k = curseur(c.ctrl, { nom: v('k'), min: 0, max: 2, pas: .05, val: .4, cls: 'o' }, () => dessine());
  function dessine() { p.vide(); p.courbe(f, 'lb-f', -2.2, 2.2); p.droite(0, k.valeur, 'lb-k'); }
  verif(r, c, () => {
    const ok = Math.abs(k.valeur - 1) < 1e-6;
    const n = k.valeur < 1 ? 3 : 1;
    return { ok, msg: ok ? `${v('k')} = 1 est la valeur du maximum local en ${v('x')} = −1 : la droite est tangente là, et coupe la courbe une seconde fois en ${v('x')} = 2.` : `Avec ${v('k')} = ${f2(k.valeur)}, il y a ${n} solution${n > 1 ? 's' : ''}.` };
  }, 'la droite doit toucher la courbe au sommet d\'une bosse.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : point d'inflexion ---------- */
const inflexion: Defi = (r) => {
  const c = cadre(r, 'Le changement de volant', `Place le point de la courbe de ${v('f')}(${v('x')}) = ${v('x')}³/5 − 0,6${v('x')}² − ${v('x')} où se trouve le point d'inflexion.`, 'Défi');
  const f = (x: number) => x ** 3 / 5 - .6 * x * x - x, fp = (x: number) => .6 * x * x - 1.2 * x - 1;
  const p = new Plan(c.scene, { x: [-3, 5], y: [-6, 3], ratio: .62, pasX: 1, pasY: 1 });
  let a = -1.5;
  const A = p.poignee((x) => { a = Math.round(borne(x, -2.8, 4.8) * 20) / 20; dessine(); }, 'lb-poignee', 'Point de la courbe');
  function dessine() { p.vide(); p.courbe(f, 'lb-f'); const m = fp(a); p.droite(m, f(a) - m * a, 'lb-tan'); A.place(a, f(a)); c.lecture.innerHTML = `${v('a')} = ${f2(a)}`; }
  verif(r, c, () => {
    const ok = Math.abs(a - 1) < .06;
    return { ok, msg: ok ? `${v('f')}″(${v('x')}) = 1,2${v('x')} − 1,2 s'annule et change de signe en 1 : la tangente traverse la courbe.` : `En ${v('a')} = ${f2(a)}, ${v('f')}″(${v('a')}) = ${f2(1.2 * a - 1.2)} : la courbe est ${a < 1 ? 'concave' : 'convexe'} ici.` };
  }, `calcule ${v('f')}″ et cherche où elle change de signe.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : ln a = 1 ---------- */
const lnUn: Defi = (r) => {
  const c = cadre(r, 'À la hauteur 1', `Place le point de la courbe de ln dont l'ordonnée vaut 1. Quelle est son abscisse ?`, 'Défi');
  const p = new Plan(c.scene, { x: [-.5, 6], y: [-2.5, 2.5], orthonorme: true, ratio: .6, pasX: 1, pasY: 1 });
  let a = 1.5;
  const P = p.poignee((x) => { a = Math.round(borne(x, .2, 5.8) * 100) / 100; dessine(); }, 'lb-poignee', 'Point de la courbe');
  function dessine() { p.vide(); p.courbe(Math.log, 'lb-f', .01); p.droite(0, 1, 'lb-pointille'); P.place(a, Math.log(a)); c.lecture.innerHTML = `abscisse : ${f2(a)}`; }
  verif(r, c, () => {
    const ok = Math.abs(a - Math.E) < .05;
    return { ok, msg: ok ? `ln e = 1 : l'abscisse est e ≈ 2,718.` : `ln(${f2(a)}) ≈ ${nb(Math.log(a), 3)}.` };
  }, `ln ${v('a')} = 1 ⇔ ${v('a')} = e<sup>1</sup>.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : assez de rectangles ---------- */
const assezRectangles: Defi = (r) => {
  const c = cadre(r, 'Une précision de 0,5', `Sur [0 ; 4], pour ${v('f')}(${v('x')}) = 0,25${v('x')}² + 0,5, choisis le plus petit nombre ${v('n')} de rectangles pour lequel l'écart entre les deux sommes est inférieur à 0,5.`, 'Défi');
  const f = (x: number) => .25 * x * x + .5;
  const p = new Plan(c.scene, { x: [-.4, 4.4], y: [-.4, 5], ratio: .55, pasX: 1, pasY: 1 });
  const n = curseur(c.ctrl, { nom: v('n'), min: 1, max: 60, pas: 1, val: 8, fmt: String, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const N = n.valeur, h = 4 / N;
    for (let i = 0; i < N; i++) { p.rect(i * h, f(i * h), (i + 1) * h, f((i + 1) * h), 'lb-rect-haut'); p.rect(i * h, 0, (i + 1) * h, f(i * h), 'lb-rect-bas'); }
    p.courbe(f, 'lb-f', 0, 4);
  }
  verif(r, c, () => {
    const e = 16 / n.valeur, ok = n.valeur === 33;
    return { ok, msg: ok ? `L'écart vaut 16/${v('n')} : 16/33 ≈ 0,485 < 0,5, alors que 16/32 = 0,5 ne convient pas.` : `Avec ${v('n')} = ${n.valeur}, l'écart vaut 16/${n.valeur} ≈ ${nb(e, 3)}${e < .5 ? ' : c\'est bon, mais existe-t-il plus petit ?' : '.'}` };
  }, `l'écart vaut (${v('f')}(4) − ${v('f')}(0)) × 4/${v('n')} = 16/${v('n')}.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : seuil binomial ---------- */
const seuilBinomial: Defi = (r) => {
  const c = cadre(r, 'Passer les 90 %', `${v('X')} suit la loi binomiale de paramètres ${v('n')} = 10 et ${v('p')} = 0,5. Choisis le plus petit ${v('k')} tel que ${v('P')}(${v('X')} ≤ ${v('k')}) ≥ 0,9.`, 'Défi');
  const p = new Plan(c.scene, { x: [-.7, 10.7], y: [0, .3], ratio: .5, pasX: 1, pasY: .05, fmtY: (y) => nb(y, 2), marge: [12, 14, 26, 44] });
  const t: number[] = []; { let cc = 1; for (let k = 0; k <= 10; k++) { t.push(cc / 1024); cc = cc * (10 - k) / (k + 1); } }
  const k = curseur(c.ctrl, { nom: v('k'), min: 0, max: 10, pas: 1, val: 5, fmt: String, cls: 'i' }, () => dessine());
  function dessine() { p.vide(); t.forEach((q, i) => p.rect(i - .4, 0, i + .4, q, i <= k.valeur ? 'lb-bar-o' : 'lb-bar')); }
  verif(r, c, () => {
    const cum = t.slice(0, k.valeur + 1).reduce((a, b) => a + b, 0), ok = k.valeur === 7;
    return { ok, msg: ok ? `${v('P')}(${v('X')} ≤ 6) ≈ 0,828 < 0,9 et ${v('P')}(${v('X')} ≤ 7) ≈ 0,945 ≥ 0,9.` : `${v('P')}(${v('X')} ≤ ${k.valeur}) ≈ ${nb(cum, 3)}${cum >= .9 ? ' : ça dépasse, mais est-ce le plus petit ?' : '.'}` };
  }, 'additionne les barres vertes de gauche à droite, jusqu\'à dépasser 0,9.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Physique Terminale : viser la cible ---------- */
const viserCible: Defi = (r) => {
  const c = cadre(r, 'Dans la cible', `La balle part du sol à ${v('v')}<sub>0</sub> = 18 m/s. Règle l'angle de tir pour qu'elle retombe dans la cible, entre 29 m et 31 m.`, 'Défi');
  const p = new Plan(c.scene, { x: [-2, 40], y: [-2, 18], orthonorme: true, ratio: .5, pasX: 10, pasY: 5, nomX: 'x (m)', marge: [12, 14, 24, 30] });
  const g = 9.81, V = 18;
  const al = curseur(c.ctrl, { nom: 'α', min: 10, max: 80, pas: 1, val: 20, fmt: (x) => x + '°', cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    p.rect(29, 0, 31, .8, 'lb-cible');
    const a = al.valeur * Math.PI / 180, vx = V * Math.cos(a), vy = V * Math.sin(a), tv = 2 * vy / g;
    const pts: [number, number][] = [];
    for (let i = 0; i <= 60; i++) { const s = tv * i / 60; pts.push([vx * s, vy * s - g * s * s / 2]); }
    p.poly(pts, 'lb-traj', false);
  }
  verif(r, c, () => {
    const a = al.valeur * Math.PI / 180, port = V * V * Math.sin(2 * a) / g, ok = port >= 29 && port <= 31;
    return { ok, msg: ok ? `Portée ${v('v')}<sub>0</sub>² sin(2α)/${v('g')} ≈ ${nb(port, 1)} m. L'angle complémentaire ${90 - al.valeur}° marche aussi.` : `La balle retombe à ${nb(port, 1)} m.` };
  }, `la portée vaut ${v('v')}<sub>0</sub>² sin(2α) / ${v('g')} ; cherche sin(2α) ≈ 0,91.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Physique Première : image deux fois plus grande ---------- */
const imageDouble: Defi = (r) => {
  const c = cadre(r, 'Deux fois plus grande', `Lentille de distance focale ${v('f')}′ = 4 cm. Place l'objet AB pour obtenir une image réelle, renversée, deux fois plus grande que l'objet.`, 'Défi');
  const p = new Plan(c.scene, { x: [-16, 16], y: [-6, 6], ratio: .48, hMin: 230, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  let xa = -10;
  const B = p.poignee((x) => { xa = Math.round(borne(x, -15, -1) * 2) / 2; dessine(); }, 'lb-poignee', 'Objet AB');
  function dessine() {
    p.vide();
    p.seg(p.x0, 0, p.x1, 0, 'lb-axe');
    p.fleche(0, -5, 0, 5.4, 'lb-lentille'); p.fleche(0, 5, 0, -5.4, 'lb-lentille');
    [[-4, 'F'], [4, 'F′']].forEach(([x, nn]) => { p.pt(x as number, 0, 'lb-pt', 3.5); p.txt(x as number, 0, nn as string, 'lb-et', 0, 18, 'middle'); });
    p.fleche(xa, 0, xa, 1.5, 'lb-vec lb-vec-t');
    B.place(xa, 1.5);
    if (Math.abs(xa + 4) > 1e-9) {
      const xi = 1 / (1 / 4 + 1 / xa), yi = 1.5 * xi / xa;
      if (Math.abs(xi) < 16 && Math.abs(yi) < 6) p.fleche(xi, 0, xi, yi, xi > 0 ? 'lb-vec lb-vec-o' : 'lb-vec lb-vec-o lb-virtuel');
    }
    c.lecture.innerHTML = `OA = ${nb(xa, 1)} cm`;
  }
  verif(r, c, () => {
    const ok = Math.abs(xa + 6) < 1e-9;
    const g = Math.abs(xa + 4) < 1e-9 ? Infinity : (1 / (1 / 4 + 1 / xa)) / xa;
    return { ok, msg: ok ? `Avec OA = −6 cm : OA′ = 12 cm et γ = 12 / (−6) = −2.` : isFinite(g) ? `Ici γ ≈ ${nb(g, 2)}.` : `L'objet est au foyer : pas d'image.` };
  }, `γ = OA′/OA = −2, donc OA′ = −2 OA ; reporte dans 1/OA′ − 1/OA = 1/${v('f')}′.`);
  p.quandRedessiner(dessine);
  dessine();
};

export const LABOS: Record<string, Defi> = {
  'defi-tangente-horizontale': tangenteHorizontale, 'defi-racine-double': racineDouble, 'defi-exp-origine': expOrigine,
  'defi-angle': placerAngle, 'defi-produit-scalaire': produitImpose, 'defi-rang': trouverRang, 'defi-deux-solutions': deuxSolutions,
  'defi-inflexion': inflexion, 'defi-ln': lnUn, 'defi-rectangles': assezRectangles, 'defi-binomiale': seuilBinomial,
  'defi-cible': viserCible, 'defi-image-double': imageDouble,
};
