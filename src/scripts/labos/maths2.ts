// Encadrés interactifs, deuxième série : Seconde, maths expertes et maths complémentaires.
import { Plan, cadre, curseur, choix, nb, v, borne, el } from './outils';

type Labo = (r: HTMLElement) => void;
const f2 = (x: number) => nb(x, 2);

/* ---------- Seconde : équation réduite d'une droite ---------- */
const droite: Labo = (r) => {
  const c = cadre(r, 'La pente de la route', `Déplace les points A et B. Le coefficient directeur dit de combien on monte quand on avance de 1, l'ordonnée à l'origine dit où la droite coupe l'axe des ordonnées.`);
  const p = new Plan(c.scene, { x: [-6, 6], y: [-5, 5], orthonorme: true, ratio: .62, pasX: 1, pasY: 1 });
  let ax = -2, ay = -1, bx = 2, by = 2;
  const snap = (z: number) => Math.round(z * 2) / 2;
  const A = p.poignee((x, y) => { ax = borne(snap(x), -5.5, 5.5); ay = borne(snap(y), -4.5, 4.5); dessine(); }, 'lb-poignee', 'Point A');
  const B = p.poignee((x, y) => { bx = borne(snap(x), -5.5, 5.5); by = borne(snap(y), -4.5, 4.5); dessine(); }, 'lb-poignee', 'Point B');
  function dessine() {
    p.vide();
    if (Math.abs(bx - ax) < 1e-9) {
      p.seg(ax, p.y0, ax, p.y1, 'lb-f');
      c.lecture.innerHTML = ay === by ? '<span class="p">A et B sont confondus : ils ne définissent pas une droite.</span>'
        : `Droite verticale : pas de coefficient directeur, son équation est ${v('x')} = <b class="i">${f2(ax)}</b>.`;
    } else {
      const m = (by - ay) / (bx - ax), q = ay - m * ax;
      p.droite(m, q, 'lb-f');
      p.poly([[ax, ay], [bx, ay], [bx, by]], 'lb-triangle', false);
      p.txt((ax + bx) / 2, ay, `+${f2(bx - ax)}`.replace('+−', '−'), 'lb-et lb-et-i', 0, by >= ay ? 16 : -8, 'middle');
      p.txt(bx, (ay + by) / 2, (by - ay >= 0 ? '+' : '') + f2(by - ay), 'lb-et lb-et-o', 8, 4);
      if (q > p.y0 && q < p.y1) p.pt(0, q, 'lb-pt lb-pt-t', 6);
      c.lecture.innerHTML = `${v('m')} = (${v('y')}<sub>B</sub> − ${v('y')}<sub>A</sub>) / (${v('x')}<sub>B</sub> − ${v('x')}<sub>A</sub>) = ${f2(by - ay)} / ${f2(bx - ax)} = <b class="o">${f2(m)}</b> &nbsp; ${v('y')} = ${f2(m)}${v('x')} ${q < 0 ? '−' : '+'} <b class="t">${f2(Math.abs(q))}</b>` + (m > 0 ? ' &nbsp; la route monte' : m < 0 ? ' &nbsp; la route descend' : ' &nbsp; route plate');
    }
    p.txt(ax, ay, 'A', 'lb-et', -16, -10); p.txt(bx, by, 'B', 'lb-et', 10, -10);
    A.place(ax, ay); B.place(bx, by);
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : fonctions de référence ---------- */
const reference: Labo = (r) => {
  const c = cadre(r, 'Les silhouettes', `Choisis une fonction et déplace ${v('x')}. Regarde son image, et le point symétrique quand il existe.`);
  const p = new Plan(c.scene, { x: [-4, 4], y: [-4, 5], ratio: .62, pasX: 1, pasY: 1 });
  const fs = [
    { n: 'carré', f: (x: number) => x * x, t: `${v('x')}²`, d: -4, pair: 1 },
    { n: 'inverse', f: (x: number) => (x === 0 ? NaN : 1 / x), t: `1/${v('x')}`, d: -4, pair: -1 },
    { n: 'racine carrée', f: (x: number) => (x < 0 ? NaN : Math.sqrt(x)), t: `√${v('x')}`, d: 0, pair: 0 },
    { n: 'cube', f: (x: number) => x ** 3, t: `${v('x')}³`, d: -4, pair: -1 },
  ];
  let k = 0;
  choix(c.ctrl, fs.map((f) => 'Fonction ' + f.n), 0, (i) => { k = i; dessine(); });
  const x = curseur(c.ctrl, { nom: v('x'), min: -3.5, max: 3.5, pas: .05, val: 1.5, cls: 'i' }, () => dessine());
  const P = p.poignee((xx) => { x.valeur = Math.round(borne(xx, -3.5, 3.5) * 20) / 20; dessine(); }, 'lb-poignee', 'Point de la courbe');
  function dessine() {
    p.vide();
    const F = fs[k], xv = x.valeur, y = F.f(xv);
    if (k === 1) { p.courbe(F.f, 'lb-f', p.x0, -.001); p.courbe(F.f, 'lb-f', .001, p.x1); } else p.courbe(F.f, 'lb-f', Math.max(p.x0, F.d));
    if (!isFinite(y)) {
      P.g.style.display = 'none';
      c.lecture.innerHTML = `<b class="p">${k === 1 ? '0 n\'a pas d\'inverse' : 'pas de racine carrée d\'un nombre négatif'}</b> : ${v('x')} = ${f2(xv)} n'est pas dans l'ensemble de définition.`;
      return;
    }
    P.g.style.display = '';
    p.seg(xv, 0, xv, y, 'lb-pointille-i'); p.seg(0, y, xv, y, 'lb-pointille-o');
    if (F.pair && isFinite(F.f(-xv)) && Math.abs(xv) > .02) {
      p.pt(-xv, F.f(-xv), 'lb-pt lb-pt-t2', 5);
      if (F.pair === 1) p.seg(-xv, y, xv, y, 'lb-reflet'); else p.seg(-xv, -y, xv, y, 'lb-reflet');
    }
    P.place(xv, y);
    const sym = F.pair === 1 ? `paire : ${v('f')}(−${v('x')}) = ${v('f')}(${v('x')}), symétrie par rapport à l'axe des ordonnées`
      : F.pair === -1 ? `impaire : ${v('f')}(−${v('x')}) = −${v('f')}(${v('x')}), symétrie par rapport à l'origine` : 'définie seulement pour x ≥ 0';
    c.lecture.innerHTML = `${v('f')}(${v('x')}) = ${F.t} &nbsp; ${v('f')}(<b class="i">${f2(xv)}</b>) = <b class="o">${nb(y, 3)}</b> &nbsp; <span class="lb-pale">${sym}</span>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : somme de vecteurs (Chasles) ---------- */
const vecteurs: Labo = (r) => {
  const c = cadre(r, 'Le palet sur la glace', `Déplace les extrémités des vecteurs ${v('u')} et ${v('v')}. Mettre ${v('v')} au bout de ${v('u')}, c'est enchaîner deux glissades : le palet arrive au même endroit qu'avec ${v('u')} + ${v('v')}.`);
  const p = new Plan(c.scene, { x: [-5, 7], y: [-4, 5], orthonorme: true, ratio: .62, pasX: 1, pasY: 1 });
  let ux = 3, uy = 1, vx = 1, vy = 2.5;
  const snap = (z: number) => Math.round(z * 2) / 2;
  const U = p.poignee((x, y) => { ux = snap(x); uy = snap(y); dessine(); }, 'lb-poignee', 'Extrémité de u');
  const V = p.poignee((x, y) => { vx = snap(x - ux); vy = snap(y - uy); dessine(); }, 'lb-poignee', 'Extrémité de v');
  function dessine() {
    p.vide();
    p.fleche(0, 0, vx, vy, 'lb-vec lb-vec-i lb-fantome');
    p.seg(vx, vy, ux + vx, uy + vy, 'lb-pointille');
    p.fleche(0, 0, ux + vx, uy + vy, 'lb-vec lb-vec-o');
    p.fleche(0, 0, ux, uy, 'lb-vec lb-vec-t');
    p.fleche(ux, uy, ux + vx, uy + vy, 'lb-vec lb-vec-i');
    p.txt(ux / 2, uy / 2, 'u', 'lb-et lb-et-t lb-it', -10, -8);
    p.txt(ux + vx / 2, uy + vy / 2, 'v', 'lb-et lb-et-i lb-it', 8, 0);
    p.txt(0, 0, 'A', 'lb-et', -14, 16);
    p.txt(ux, uy, 'B', 'lb-et', 8, 14);
    p.txt(ux + vx, uy + vy, 'C', 'lb-et', 10, -6);
    U.place(ux, uy); V.place(ux + vx, uy + vy);
    c.lecture.innerHTML = `${v('u')}(${nb(ux)} ; ${nb(uy)}) + ${v('v')}(${nb(vx)} ; ${nb(vy)}) = <b class="o">(${nb(ux + vx)} ; ${nb(uy + vy)})</b> &nbsp; AB + BC = AC : on additionne les coordonnées`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : évolutions successives ---------- */
const evolution: Labo = (r) => {
  const c = cadre(r, 'Le pull de 50 €', 'Règle deux évolutions successives. Une hausse puis une baisse du même pourcentage ne ramènent pas au prix de départ.');
  const p = new Plan(c.scene, { x: [0, 3], y: [0, 100], ratio: .45, ratioFixe: true, hMin: 220, grille: false, axes: false, etiquettes: false, marge: [26, 10, 30, 10] });
  const t1 = curseur(c.ctrl, { nom: '1<sup>re</sup>', min: -50, max: 100, pas: 1, val: 20, fmt: (x) => (x > 0 ? '+' : '') + nb(x, 0) + ' %', cls: 'o' }, () => dessine());
  const t2 = curseur(c.ctrl, { nom: '2<sup>e</sup>', min: -50, max: 100, pas: 1, val: -20, fmt: (x) => (x > 0 ? '+' : '') + nb(x, 0) + ' %', cls: 'p' }, () => dessine());
  function dessine() {
    const a = 50, c1 = 1 + t1.valeur / 100, c2 = 1 + t2.valeur / 100, b = a * c1, d = b * c2;
    p.domaine([0, 3], [0, Math.max(a, b, d) * 1.08]);
    p.vide();
    const barres: [number, string, string][] = [[a, 'départ', 'lb-bar'], [b, 'après la 1re', 'lb-bar-o'], [d, 'à la fin', 'lb-bar-i']];
    barres.forEach(([val, nom, cls], i) => {
      p.rect(i + .2, 0, i + .8, val, cls);
      p.txt(i + .5, val, nb(val, 2) + ' €', 'lb-et', 0, -8, 'middle');
      p.e('text', { x: p.X(i + .5), y: p.H - 10, class: 'lb-grad', 'text-anchor': 'middle' }, undefined, nom);
    });
    p.seg(0, a, 3, a, 'lb-pointille');
    const cg = c1 * c2, tg = (cg - 1) * 100;
    c.lecture.innerHTML = `CM = ${nb(c1, 2)} × ${nb(c2, 2)} = <b class="o">${nb(cg, 4)}</b> &nbsp; évolution globale : <b class="${Math.abs(tg) < 1e-9 ? 'o' : 'i'}">${tg > 0 ? '+' : ''}${nb(tg, 2)} %</b>` + (t1.valeur === -t2.valeur && t1.valeur !== 0 ? ' &nbsp; <span class="p">et pas 0 % !</span>' : '') + (Math.abs(cg - 1) > 1e-9 && c1 ? ` &nbsp; <span class="lb-pale">pour revenir à 50 € après la 1re, il faudrait ${(1 / c1 - 1) > 0 ? '+' : ''}${nb((1 / c1 - 1) * 100, 1)} %</span>` : '');
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Seconde : moyenne et médiane ---------- */
const statistiques: Labo = (r) => {
  const c = cadre(r, 'La cagnotte et la file', 'Monte ou descends le salaire du patron (la dernière barre). La moyenne, la cagnotte partagée, part avec lui ; la médiane, la personne au milieu de la file, ne bouge pas.');
  const base = [1800, 1900, 1900, 2000, 2100, 2200];
  const p = new Plan(c.scene, { x: [.3, 7.7], y: [0, 10000], ratio: .55, pasX: 1, pasY: 2000, marge: [12, 14, 26, 46], fmtX: () => '' });
  const patron = curseur(c.ctrl, { nom: 'patron', min: 2200, max: 9600, pas: 100, val: 9100, fmt: (x) => nb(x, 0) + ' €', cls: 'i' }, () => dessine());
  const P = p.poignee((_, y) => { patron.valeur = Math.round(borne(y, 2200, 9600) / 100) * 100; dessine(); }, 'lb-poignee', 'Salaire du patron');
  function dessine() {
    p.vide();
    const s = [...base, patron.valeur];
    const moy = s.reduce((a, b) => a + b, 0) / s.length, med = s[3];
    s.forEach((x, i) => p.rect(i + .62, 0, i + 1.38, x, i === 3 ? 'lb-bar-o' : i === 6 ? 'lb-bar-i' : 'lb-bar'));
    p.seg(p.x0, moy, p.x1, moy, 'lb-moy');
    p.txt(p.x0, moy, 'moyenne ' + nb(moy, 0) + ' €', 'lb-et lb-et-i', 6, -8);
    p.txt(4, med, 'médiane', 'lb-et lb-et-o', 0, -8, 'middle');
    p.txt(7, 0, 'patron', 'lb-grad', 0, 16, 'middle');
    P.place(7, patron.valeur);
    c.lecture.innerHTML = `moyenne = <b class="i">${nb(moy, 0)} €</b> &nbsp; médiane = <b class="o">${nb(med, 0)} €</b> &nbsp; étendue = ${nb(s[6] - s[0], 0)} € &nbsp; <span class="lb-pale">${moy > med * 1.2 ? 'la moyenne donne une image trompeuse des salaires' : 'moyenne et médiane sont proches'}</span>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Maths expertes : nombres complexes ---------- */
const complexe: Labo = (r) => {
  const c = cadre(r, 'Le quart de tour', `Déplace le point d'affixe ${v('z')}. Multiplier par ${v('i')} le fait tourner d'un quart de tour autour de O ; le conjugué est son reflet par rapport à l'axe des réels.`);
  const p = new Plan(c.scene, { x: [-5, 5], y: [-4, 4], orthonorme: true, ratio: .62, pasX: 1, pasY: 1, nomX: 'Re', nomY: 'Im' });
  let a = 3, b = 1.5;
  const Z = p.poignee((x, y) => { a = Math.round(borne(x, -4.5, 4.5) * 2) / 2; b = Math.round(borne(y, -3.5, 3.5) * 2) / 2; dessine(); }, 'lb-poignee', 'Point z');
  function dessine() {
    p.vide();
    const m = Math.hypot(a, b);
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: Math.abs(p.X(m) - p.X(0)), class: 'lb-pointille', fill: 'none' });
    p.fleche(0, 0, -b, a, 'lb-vec lb-vec-o');
    p.fleche(0, 0, a, -b, 'lb-vec lb-vec-pale');
    p.fleche(0, 0, a, b, 'lb-vec lb-vec-t');
    p.seg(a, b, a, -b, 'lb-pointille');
    p.txt(a, b, 'z', 'lb-et lb-et-t lb-it', 12, -8);
    p.txt(-b, a, 'iz', 'lb-et lb-et-o lb-it', -6, -10, 'end');
    p.txt(a, -b, 'z̄', 'lb-et lb-it', 12, 14);
    Z.place(a, b);
    const s = (x: number, y: number) => `${nb(x)} ${y < 0 ? '−' : '+'} ${nb(Math.abs(y))}${v('i')}`;
    c.lecture.innerHTML = `${v('z')} = <b class="t">${s(a, b)}</b> &nbsp; ${v('iz')} = <b class="o">${s(-b, a)}</b> &nbsp; ${v('z')}̄ = ${s(a, -b)} &nbsp; |${v('z')}| = √(${nb(a * a + b * b)}) ≈ ${nb(m, 2)}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Maths expertes : chaîne de Markov à deux états ---------- */
const markov: Labo = (r) => {
  const c = cadre(r, 'Vélo ou bus ?', 'Règle les probabilités de passage, puis avance jour après jour. Quel que soit le départ, la répartition se stabilise.');
  const zone = el('div', 'lb-duo');
  c.scene.append(zone);
  const zg = el('div'), zc = el('div');
  zone.append(zg, zc);
  const g = new Plan(zg, { x: [0, 10], y: [0, 6], ratio: .6, ratioFixe: true, hMax: 280, grille: false, axes: false, etiquettes: false, marge: [8, 8, 8, 8] });
  const p = new Plan(zc, { x: [-.5, 15.5], y: [0, 1], ratio: .6, ratioFixe: true, hMax: 280, pasX: 5, pasY: .25, nomX: 'jour', marge: [12, 12, 26, 36] });
  const vv = curseur(c.ctrl, { nom: 'vélo → vélo', min: .05, max: .95, pas: .05, val: .8, cls: 't' }, () => dessine());
  const bv = curseur(c.ctrl, { nom: 'bus → vélo', min: .05, max: .95, pas: .05, val: .4, cls: 'i' }, () => dessine());
  let depart = 0;
  choix(c.ctrl, ['Lundi : vélo', 'Lundi : bus'], 0, (i) => { depart = i; dessine(); });
  function dessine() {
    g.vide(); p.vide();
    const a = vv.valeur, b = bv.valeur;
    // le graphe
    const R = Math.min(g.X(1) - g.X(0), g.Y(0) - g.Y(1)) * .9;
    const noeud = (x: number, nom: string, cls: string) => { g.e('circle', { cx: g.X(x), cy: g.Y(3), r: R, class: cls }); g.txt(x, 3, nom, 'lb-noeud', 0, 6, 'middle'); };
    g.e('path', { d: `M${g.X(3.2)} ${g.Y(3.6)}Q${g.X(5)} ${g.Y(5.2)} ${g.X(6.8)} ${g.Y(3.6)}`, class: 'lb-arc-fin' });
    g.e('path', { d: `M${g.X(6.8)} ${g.Y(2.4)}Q${g.X(5)} ${g.Y(.8)} ${g.X(3.2)} ${g.Y(2.4)}`, class: 'lb-arc-fin' });
    g.txt(5, 4.4, nb(1 - a, 2), 'lb-et', 0, 0, 'middle');
    g.txt(5, 1.6, nb(b, 2), 'lb-et lb-et-i', 0, 10, 'middle');
    g.txt(2, 5.6, nb(a, 2), 'lb-et lb-et-t', 0, 0, 'middle');
    g.txt(8, 5.6, nb(1 - b, 2), 'lb-et', 0, 0, 'middle');
    g.e('path', { d: `M${g.X(1.4)} ${g.Y(3.9)}C${g.X(.2)} ${g.Y(6)} ${g.X(3.8)} ${g.Y(6)} ${g.X(2.6)} ${g.Y(3.9)}`, class: 'lb-arc-fin' });
    g.e('path', { d: `M${g.X(7.4)} ${g.Y(3.9)}C${g.X(6.2)} ${g.Y(6)} ${g.X(9.8)} ${g.Y(6)} ${g.X(8.6)} ${g.Y(3.9)}`, class: 'lb-arc-fin' });
    noeud(2, 'V', 'lb-etat lb-etat-t'); noeud(8, 'B', 'lb-etat');
    // l'évolution
    let x = depart ? 0 : 1;
    const stable = b / (1 - a + b);
    p.seg(p.x0, stable, p.x1, stable, 'lb-lim');
    for (let n = 0; n <= 15; n++) { p.rect(n - .3, 0, n + .3, x, 'lb-bar-t'); x = x * a + (1 - x) * b; }
    p.txt(p.x1, stable, 'état stable', 'lb-et lb-et-o', -4, -8, 'end');
    c.lecture.innerHTML = `part des jours à vélo sur le long terme : ${v('b')} / (1 − ${v('a')} + ${v('b')}) = <b class="o">${nb(stable, 3)}</b> &nbsp; <span class="lb-pale">les barres : probabilité d'être à vélo le jour ${v('n')}</span>`;
  }
  const tout = () => { p.repere(); dessine(); };
  g.quandRedessiner(tout); p.quandRedessiner(tout);
  tout();
};

/* ---------- Maths complémentaires : droite des moindres carrés ---------- */
const regression: Labo = (r) => {
  const c = cadre(r, 'La ficelle tendue', 'Déplace les points du nuage. La droite des moindres carrés se recalcule, elle passe toujours par le point moyen G.');
  const p = new Plan(c.scene, { x: [0, 9], y: [0, 32], ratio: .6, pasX: 1, pasY: 5, nomX: 'année', nomY: 'abonnés (k)' });
  const pts: [number, number][] = [[1, 12], [2, 15], [3, 17], [4, 20], [5, 21]];
  const poignees = pts.map((_, i) => p.poignee((x, y) => { pts[i] = [Math.round(borne(x, .5, 8.5) * 2) / 2, Math.round(borne(y, 1, 31))]; dessine(); }, 'lb-poignee lb-poignee-petite', `Point ${i + 1}`));
  function dessine() {
    p.vide();
    const n = pts.length, mx = pts.reduce((s, q) => s + q[0], 0) / n, my = pts.reduce((s, q) => s + q[1], 0) / n;
    let sxy = 0, sxx = 0;
    pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
    const a = sxx ? sxy / sxx : 0, b = my - a * mx;
    pts.forEach(([x, y]) => p.seg(x, y, x, a * x + b, 'lb-ecart'));
    p.droite(a, b, 'lb-tan');
    p.pt(mx, my, 'lb-pt lb-pt-i', 6); p.txt(mx, my, 'G', 'lb-et lb-et-i', 8, 16);
    const y8 = a * 8 + b;
    p.seg(8, 0, 8, y8, 'lb-pointille-o'); p.pt(8, y8, 'lb-pt lb-pt-o', 5);
    pts.forEach((q, i) => poignees[i].place(q[0], q[1]));
    c.lecture.innerHTML = `${v('y')} = ${nb(a, 2)}${v('x')} ${b < 0 ? '−' : '+'} ${nb(Math.abs(b), 2)} &nbsp; G(${nb(mx, 2)} ; ${nb(my, 2)}) &nbsp; prévision pour l'année 8 : <b class="o">${nb(y8, 1)} k abonnés</b>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

export const LABOS: Record<string, Labo> = { droite, reference, vecteurs, evolution, statistiques, complexe, markov, regression };
