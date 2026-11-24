// Encadrés interactifs des cours de maths (Première et Terminale).
import { Plan, cadre, curseur, bouton, bascule, choix, nb, v, borne, el, hasard, calme } from './outils';

type Labo = (r: HTMLElement) => void;

const f2 = (x: number) => nb(x, 2);

/* ---------- Première : la tangente et la sécante ---------- */
const tangente: Labo = (r) => {
  const c = cadre(r, 'La loupe sur la courbe', 'Déplace le point A sur la courbe. Puis affiche la sécante et rapproche le second point : sa pente se colle au nombre dérivé.');
  const f = (x: number) => x ** 3 / 4 - 1.5 * x;
  const fp = (x: number) => 0.75 * x * x - 1.5;
  const p = new Plan(c.scene, { x: [-3.6, 3.6], y: [-4, 4], ratio: .62, pasX: 1, pasY: 1 });
  const A = p.poignee((x) => { a.valeur = Math.round(borne(x, -3, 3) * 20) / 20; dessine(); }, 'lb-poignee', 'Point A');
  const a = curseur(c.ctrl, { nom: v('a'), min: -3, max: 3, pas: .05, val: 1.6, cls: 'i' }, () => dessine());
  const h = curseur(c.ctrl, { nom: v('h'), min: -2, max: 2, pas: .05, val: 1.5, cls: 'i' }, () => dessine());
  h.input.closest('label')!.hidden = true;
  const sec = bascule(c.ctrl, 'Voir la sécante', false, (on) => { h.input.closest('label')!.hidden = !on; dessine(); });
  function dessine() {
    p.vide();
    const xa = a.valeur, ya = f(xa), m = fp(xa);
    p.courbe(f, 'lb-f');
    p.droite(m, ya - m * xa, 'lb-tan');
    // « on avance de 1, on monte de f'(a) »
    p.poly([[xa, ya], [xa + 1, ya], [xa + 1, ya + m]], 'lb-triangle', false);
    p.txt(xa + .5, ya, '1', 'lb-et lb-et-i', 0, m >= 0 ? 16 : -8, 'middle');
    p.txt(xa + 1, ya + m / 2, nb(m), 'lb-et lb-et-o', 6, 4);
    let lec = `${v('f')}′(${v('a')}) = <b class="o">${f2(m)}</b> &nbsp; tangente : ${v('y')} = ${f2(m)}${v('x')} ${ya - m * xa < 0 ? '−' : '+'} ${f2(Math.abs(ya - m * xa))}`;
    if (sec.on) {
      let hv = h.valeur; if (Math.abs(hv) < .05) hv = .05;
      const xb = xa + hv, yb = f(xb), t = (yb - ya) / hv;
      p.droite(t, ya - t * xa, 'lb-sec');
      p.pt(xb, yb, 'lb-pt lb-pt-sec');
      p.txt(xb, yb, 'M', 'lb-et', 8, -8);
      lec = `taux entre ${v('a')} et ${v('a')} + ${v('h')} : <b class="t">${f2(t)}</b> &nbsp;→&nbsp; ${v('f')}′(${v('a')}) = <b class="o">${f2(m)}</b>` + (Math.abs(hv) <= .1 ? ' &nbsp;<span class="lb-ok">presque confondus</span>' : '');
    }
    p.txt(xa, ya, 'A', 'lb-et', -14, -10);
    A.place(xa, ya);
    c.lecture.innerHTML = lec;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : le second degré ---------- */
const parabole: Labo = (r) => {
  const c = cadre(r, 'Le jet d\'eau', `Change ${v('a')}, ${v('b')} et ${v('c')}. Regarde le signe de Δ et le nombre de points où la parabole touche l'axe.`);
  const p = new Plan(c.scene, { x: [-6, 6], y: [-6, 6], ratio: .62, pasX: 1, pasY: 1 });
  const a = curseur(c.ctrl, { nom: v('a'), min: -2, max: 2, pas: .1, val: -.5 }, () => dessine());
  const b = curseur(c.ctrl, { nom: v('b'), min: -5, max: 5, pas: .1, val: 1 }, () => dessine());
  const cc = curseur(c.ctrl, { nom: v('c'), min: -5, max: 5, pas: .1, val: 3 }, () => dessine());
  function dessine() {
    p.vide();
    const A = Math.round(a.valeur * 10) / 10, B = b.valeur, C = cc.valeur;
    if (Math.abs(A) < 1e-9) {
      p.droite(B, C, 'lb-f');
      c.lecture.innerHTML = `<span class="p">${v('a')} = 0 : ce n'est plus un trinôme, juste une droite.</span>`;
      return;
    }
    const f = (x: number) => A * x * x + B * x + C;
    const D = Math.round((B * B - 4 * A * C) * 1e6) / 1e6;
    const al = -B / (2 * A), be = f(al);
    p.seg(al, p.y0, al, p.y1, 'lb-pointille');
    p.courbe(f, 'lb-f');
    p.pt(al, be, 'lb-pt lb-pt-t');
    p.txt(al, be, 'S', 'lb-et', 8, A > 0 ? 18 : -10);
    let rac = '';
    if (D > 0) {
      const x1 = (-B - Math.sqrt(D)) / (2 * A), x2 = (-B + Math.sqrt(D)) / (2 * A);
      [x1, x2].forEach((x) => p.pt(x, 0, 'lb-pt lb-pt-o', 6));
      rac = `deux racines : ${v('x')}<sub>1</sub> ≈ ${f2(Math.min(x1, x2))} et ${v('x')}<sub>2</sub> ≈ ${f2(Math.max(x1, x2))}`;
    } else if (D === 0) {
      p.pt(al, 0, 'lb-pt lb-pt-o', 6);
      rac = `une racine double : ${v('x')}<sub>0</sub> = ${f2(al)}`;
    } else rac = 'aucune racine réelle';
    const sD = D > 0 ? 'o' : D === 0 ? 'i' : 'p';
    c.lecture.innerHTML = `Δ = ${v('b')}² − 4${v('a')}${v('c')} = <b class="${sD}">${f2(D)}</b> &nbsp; ${rac} &nbsp; sommet S(${f2(al)} ; ${f2(be)})`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : exponentielle ---------- */
const exponentielle: Labo = (r) => {
  const c = cadre(r, 'La pente égale la hauteur', `Déplace le point sur la courbe de exp. La pente de la tangente (le triangle) est toujours égale à la hauteur du point.`);
  const p = new Plan(c.scene, { x: [-4, 2.6], y: [-1, 8], ratio: .62, pasX: 1, pasY: 1 });
  const P = p.poignee((x) => { a.valeur = Math.round(borne(x, -3, 2) * 20) / 20; dessine(); }, 'lb-poignee', 'Point de la courbe');
  const a = curseur(c.ctrl, { nom: v('a'), min: -3, max: 2, pas: .05, val: .5, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const xa = a.valeur, ea = Math.exp(xa);
    p.courbe(Math.exp, 'lb-f');
    p.droite(ea, ea * (1 - xa), 'lb-tan');
    p.seg(xa, 0, xa, ea, 'lb-haut');
    p.poly([[xa, ea], [xa + 1, ea], [xa + 1, 2 * ea]], 'lb-triangle', false);
    p.txt(xa + .5, ea, '1', 'lb-et lb-et-i', 0, 16, 'middle');
    p.txt(xa + 1, 1.5 * ea, 'e' + supa(), 'lb-et lb-et-o', 6, 4);
    p.txt(xa, ea / 2, 'e' + supa(), 'lb-et lb-et-o', -8, 4, 'end');
    p.pt(xa - 1, 0, 'lb-pt lb-pt-i', 4);
    P.place(xa, ea);
    c.lecture.innerHTML = `hauteur : e<sup>${v('a')}</sup> = <b class="o">${f2(ea)}</b> &nbsp; pente : exp′(${v('a')}) = <b class="o">${f2(ea)}</b> &nbsp; la tangente coupe l'axe en ${v('a')} − 1 = ${f2(xa - 1)}`;
  }
  const supa = () => 'ᵃ';
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Le cercle trigonométrique (et la courbe en Terminale) ---------- */
function fracPi(t: number): string {
  const k = t / Math.PI;
  for (const q of [1, 2, 3, 4, 6, 12]) {
    const n = Math.round(k * q);
    if (Math.abs(k * q - n) < 1e-6) {
      if (n === 0) return '0';
      const g = pgcd(Math.abs(n), q), nn = n / g, qq = q / g;
      const num = (nn < 0 ? '−' : '') + (Math.abs(nn) === 1 ? '' : Math.abs(nn)) + 'π';
      return qq === 1 ? num : `${num}/${qq}`;
    }
  }
  return nb(t, 2);
}
const pgcd = (a: number, b: number): number => (b ? pgcd(b, a % b) : a);
function exact(x: number): string {
  const tab: [number, string][] = [[0, '0'], [.5, '1/2'], [Math.SQRT2 / 2, '√2/2'], [Math.sqrt(3) / 2, '√3/2'], [1, '1']];
  for (const [val, s] of tab) {
    if (Math.abs(Math.abs(x) - val) < 1e-9) return (x < 0 && val ? '−' : '') + s;
  }
  return '≈ ' + nb(x, 3);
}

const cercle = (avecCourbe: boolean): Labo => (r) => {
  const c = cadre(r, avecCourbe ? 'La grande roue' : 'Le fil sur la bobine', avecCourbe
    ? 'Fais tourner le point sur le cercle : sa hauteur dessine la courbe de sinus, l\'une se lit sur l\'autre.'
    : 'Fais tourner le point M. Le fil enroulé mesure l\'angle en radians, cos et sin se lisent sur les axes.');
  const zone = el('div', avecCourbe ? 'lb-duo' : '');
  c.scene.append(zone);
  const zc = el('div'), zg = el('div');
  zone.append(zc);
  const p = new Plan(zc, { x: [-1.35, 1.35], y: [-1.35, 1.35], orthonorme: true, ratio: avecCourbe ? 1 : .72, ratioFixe: avecCourbe, hMax: 380, pasX: .5, pasY: .5, marge: [10, 10, 22, 30] });
  let q: Plan | null = null;
  if (avecCourbe) { zone.append(zg); q = new Plan(zg, { x: [-.2, 2 * Math.PI + .2], y: [-1.35, 1.35], ratio: 1, hMax: 380, pasX: Math.PI / 2, pasY: .5, fmtX: fracPi, marge: [10, 10, 22, 30] }); }
  const t = curseur(c.ctrl, { nom: 'angle', min: avecCourbe ? 0 : -2 * Math.PI, max: 2 * Math.PI, pas: Math.PI / 12, val: Math.PI / 3, fmt: fracPi, cls: 'i' }, () => dessine());
  const M = p.poignee((x, y) => {
    let th = Math.atan2(y, x);
    const prec = t.valeur;
    // on garde le nombre de tours en cours, pour pouvoir dépasser π
    th += Math.round((prec - th) / (2 * Math.PI)) * 2 * Math.PI;
    const pas = Math.PI / 12, s = Math.round(th / pas) * pas;
    if (Math.abs(s - th) < .06) th = s;
    t.valeur = borne(th, +t.input.min, +t.input.max);
    dessine();
  }, 'lb-poignee', 'Point M');
  function dessine() {
    p.vide();
    const th = t.valeur, co = Math.cos(th), si = Math.sin(th);
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X(1) - p.X(0), class: 'lb-f lb-mince' });
    // l'arc (le fil enroulé)
    const n = 60, pts: [number, number][] = [];
    for (let i = 0; i <= n; i++) { const a = th * i / n; pts.push([Math.cos(a) * (1 + .0), Math.sin(a)]); }
    p.poly(pts, 'lb-arc', false);
    p.seg(0, 0, co, si, 'lb-rayon');
    p.seg(co, 0, co, si, 'lb-pointille');
    p.seg(0, si, co, si, 'lb-pointille');
    p.seg(0, 0, co, 0, 'lb-cos');
    p.seg(0, 0, 0, si, 'lb-sin');
    p.pt(co, 0, 'lb-pt lb-pt-t', 4); p.pt(0, si, 'lb-pt lb-pt-i', 4);
    p.txt(co, si, 'M', 'lb-et', co >= 0 ? 12 : -22, si >= 0 ? -10 : 18);
    p.pt(1, 0, 'lb-pt', 3); p.txt(1, 0, 'I', 'lb-et', 6, 16);
    M.place(co, si);
    if (q) {
      q.vide();
      q.courbe(Math.cos, 'lb-f lb-f-pale');
      q.courbe(Math.sin, 'lb-f lb-f-i');
      const tt = ((th % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      q.seg(tt, 0, tt, si, 'lb-sin');
      q.pt(tt, si, 'lb-pt lb-pt-i', 6);
      q.pt(tt, co, 'lb-pt lb-pt-t', 5);
      q.txt(q.x1, Math.sin(q.x1 - .25), 'sin', 'lb-et lb-et-i', -4, -10, 'end');
      q.txt(q.x1, Math.cos(q.x1 - .25), 'cos', 'lb-et lb-et-t', -4, 18, 'end');
    }
    c.lecture.innerHTML = `angle = <b class="i">${fracPi(th)}</b> rad (${nb(th * 180 / Math.PI, 1)}°) &nbsp; cos = <b class="t">${exact(co)}</b> &nbsp; sin = <b class="i">${exact(si)}</b>`;
  }
  const tout = () => { p.repere(); q?.repere(); dessine(); };
  p.quandRedessiner(tout); q?.quandRedessiner(tout);
  tout();
};

/* ---------- Première : suites arithmétiques et géométriques ---------- */
const suite: Labo = (r) => {
  const c = cadre(r, 'L\'escalier et la photocopieuse', 'Choisis le type de suite, puis le premier terme et la raison. Regarde comment les termes avancent.');
  const p = new Plan(c.scene, { x: [-.5, 10.5], y: [-1, 10], ratio: .55, pasX: 1 });
  let geo = false;
  choix(c.ctrl, ['Arithmétique (on ajoute)', 'Géométrique (on multiplie)'], 0, (i) => { geo = i === 1; rr.input.closest('label')!.hidden = geo; qq.input.closest('label')!.hidden = !geo; dessine(); });
  const u0 = curseur(c.ctrl, { nom: `${v('u')}<sub>0</sub>`, min: -5, max: 5, pas: .5, val: 1 }, () => dessine());
  const rr = curseur(c.ctrl, { nom: v('r'), min: -2, max: 2, pas: .25, val: .75, cls: 'i' }, () => dessine());
  const qq = curseur(c.ctrl, { nom: v('q'), min: -1.5, max: 2, pas: .05, val: 1.3, cls: 'i' }, () => dessine());
  qq.input.closest('label')!.hidden = true;
  function dessine() {
    const u: number[] = [u0.valeur];
    for (let n = 1; n <= 10; n++) u.push(geo ? u[n - 1] * qq.valeur : u[n - 1] + rr.valeur);
    const lo = Math.min(0, ...u), hi = Math.max(0, ...u);
    const marge = Math.max(1, (hi - lo) * .12);
    p.domaine([-.5, 10.5], [lo - marge, hi + marge]);
    p.o.pasY = undefined;
    p.repere(); p.vide();
    u.forEach((un, n) => {
      p.seg(n, 0, n, un, 'lb-barre');
      if (n) p.seg(n - 1, u[n - 1], n, un, 'lb-pointille');
      p.pt(n, un, 'lb-pt lb-pt-t', 5);
    });
    const sens = geo
      ? (u0.valeur === 0 || qq.valeur === 1 ? 'constante' : qq.valeur < 0 ? 'ni croissante ni décroissante (les signes alternent)' : qq.valeur === 0 ? 'nulle à partir du rang 1' : (qq.valeur > 1) === (u0.valeur > 0) ? 'croissante' : 'décroissante')
      : rr.valeur > 0 ? 'croissante' : rr.valeur < 0 ? 'décroissante' : 'constante';
    c.lecture.innerHTML = (geo
      ? `${v('u')}<sub>${v('n')}</sub> = ${nb(u0.valeur)} × ${nb(qq.valeur)}<sup>${v('n')}</sup>`
      : `${v('u')}<sub>${v('n')}</sub> = ${nb(u0.valeur)} ${rr.valeur < 0 ? '−' : '+'} ${nb(Math.abs(rr.valeur))}${v('n')}`)
      + ` &nbsp; ${v('u')}<sub>10</sub> = <b class="t">${nb(u[10], 2)}</b> &nbsp; suite <b class="i">${sens}</b>`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Première : produit scalaire ---------- */
const produitScalaire: Labo = (r) => {
  const c = cadre(r, 'La lampe et l\'ombre', `Déplace l'extrémité B du vecteur ${v('v')}. L'ombre de B sur la droite (OA) donne le produit scalaire : OA × OH, avec un signe.`);
  const p = new Plan(c.scene, { x: [-4.5, 6.5], y: [-3.5, 4.5], orthonorme: true, ratio: .62, pasX: 1, pasY: 1 });
  let bx = 2, by = 3;
  const ux = 4, uy = 0;
  const B = p.poignee((x, y) => { bx = borne(Math.round(x * 2) / 2, p.x0 + .5, p.x1 - .5); by = borne(Math.round(y * 2) / 2, p.y0 + .5, p.y1 - .5); dessine(); }, 'lb-poignee', 'Point B');
  function dessine() {
    p.vide();
    const ps = ux * bx + uy * by;
    const hx = bx; // projection sur l'axe des abscisses
    p.seg(p.x0, 0, p.x1, 0, 'lb-pointille');
    p.seg(bx, by, hx, 0, 'lb-ombre');
    if (Math.abs(hx) > 1e-9) p.seg(0, 0, hx, 0, ps >= 0 ? 'lb-proj-o' : 'lb-proj-p');
    p.fleche(0, 0, ux, uy, 'lb-vec lb-vec-t');
    p.fleche(0, 0, bx, by, 'lb-vec lb-vec-i');
    // l'angle
    const th = Math.atan2(by, bx), R = .7, pts: [number, number][] = [];
    for (let i = 0; i <= 30; i++) { const a = th * i / 30; pts.push([R * Math.cos(a), R * Math.sin(a)]); }
    if (Math.hypot(bx, by) > .1) p.poly(pts, 'lb-arc-fin', false);
    p.txt(0, 0, 'O', 'lb-et', -14, 16);
    p.txt(ux, uy, 'A', 'lb-et', 4, 18);
    p.txt(hx, 0, 'H', 'lb-et', 4, by >= 0 ? 18 : -8);
    B.place(bx, by);
    const nv = Math.hypot(bx, by), ang = nv ? Math.acos(borne(ps / (4 * nv), -1, 1)) * 180 / Math.PI : 0;
    const s = Math.abs(ps) < 1e-9 ? `<b class="i">0</b> : les vecteurs sont orthogonaux` : `<b class="${ps > 0 ? 'o' : 'p'}">${nb(ps)}</b>` + (ps > 0 ? ' (angle aigu, l\'ombre est du côté de A)' : ' (angle obtus, l\'ombre part à l\'opposé)');
    c.lecture.innerHTML = `${v('u')}(4 ; 0), ${v('v')}(${nb(bx)} ; ${nb(by)}) &nbsp; angle ≈ ${nb(ang, 0)}° &nbsp; ${v('u')} · ${v('v')} = 4 × ${nb(bx)} + 0 × ${nb(by)} = ${s}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : arbre pondéré et probabilités totales ---------- */
const arbre: Labo = (r) => {
  const c = cadre(r, 'Le test de dépistage', 'Règle la part de malades et la fiabilité du test. Regarde ce que vaut vraiment un test positif.');
  const p = new Plan(c.scene, { x: [0, 10], y: [0, 10], ratio: .5, ratioFixe: true, hMin: 260, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  const pm = curseur(c.ctrl, { nom: `${v('P')}(M)`, min: .005, max: .5, pas: .005, val: .01, fmt: (x) => nb(x * 100, 1) + ' %' }, () => dessine());
  const sens = curseur(c.ctrl, { nom: `${v('P')}<sub>M</sub>(T)`, min: .5, max: 1, pas: .01, val: .99, fmt: (x) => nb(x * 100, 0) + ' %', cls: 'o' }, () => dessine());
  const fp = curseur(c.ctrl, { nom: `${v('P')}<sub>M̄</sub>(T)`, min: 0, max: .3, pas: .005, val: .02, fmt: (x) => nb(x * 100, 1) + ' %', cls: 'p' }, () => dessine());
  function dessine() {
    p.vide();
    const a = pm.valeur, b = sens.valeur, d = fp.valeur;
    const noeuds: [number, number, string, number, string][] = [
      // x, y, nom, proba de la branche, classe
      [4, 7.5, 'M', a, ''], [4, 2.5, 'M̄', 1 - a, ''],
      [8.2, 9, 'T', b, 'o'], [8.2, 6, 'T̄', 1 - b, ''], [8.2, 4, 'T', d, 'p'], [8.2, 1, 'T̄', 1 - d, ''],
    ];
    const lien = (x1: number, y1: number, x2: number, y2: number, pr: number, cls: string) => {
      const l = p.seg(x1, y1, x2, y2, 'lb-branche ' + cls);
      l.setAttribute('stroke-width', String(1.5 + 9 * pr));
      p.txt((x1 + x2) / 2, (y1 + y2) / 2, nb(pr, 3), 'lb-et lb-proba', 0, -8, 'middle');
    };
    lien(.6, 5, 4, 7.5, a, ''); lien(.6, 5, 4, 2.5, 1 - a, '');
    lien(4.6, 7.5, 8, 9, b, 'lb-br-o'); lien(4.6, 7.5, 8, 6, 1 - b, '');
    lien(4.6, 2.5, 8, 4, d, 'lb-br-p'); lien(4.6, 2.5, 8, 1, 1 - d, '');
    p.pt(.6, 5, 'lb-pt', 4);
    noeuds.forEach(([x, y, n]) => p.txt(x, y, n, 'lb-noeud', 0, 6, 'middle'));
    const mt = a * b, st = (1 - a) * d, pt = mt + st;
    p.txt(10, 9, nb(mt * 100, 2) + ' %', 'lb-et lb-et-o', 0, 5, 'end');
    p.txt(10, 4, nb(st * 100, 2) + ' %', 'lb-et lb-et-p', 0, 5, 'end');
    c.lecture.innerHTML = `${v('P')}(T) = ${nb(mt, 4)} + ${nb(st, 4)} = ${nb(pt, 4)} &nbsp; si le test est positif : ${v('P')}<sub>T</sub>(M) = ${nb(mt, 4)} / ${nb(pt, 4)} ≈ <b class="${mt / pt < .5 ? 'p' : 'o'}">${nb(100 * mt / pt, 1)} %</b>`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : définition de la limite (la fourmi et le drapeau) ---------- */
const epsilon: Labo = (r) => {
  const c = cadre(r, 'La bande autour du drapeau', 'Rétrécis la bande autour de 3. Il existe toujours un rang à partir duquel tous les termes sont dedans. Zoome pour le vérifier.');
  const p = new Plan(c.scene, { x: [-.5, 14.5], y: [1.8, 3.5], ratio: .55, pasX: 1 });
  const eps = [1, .5, .3, .2, .1, .05, .02, .01, .005, .002, .001];
  const e = curseur(c.ctrl, { nom: 'largeur', min: 0, max: eps.length - 1, pas: 1, val: 4, fmt: (i) => '± ' + nb(eps[i], 3), cls: 'o' }, () => dessine());
  const zoom = bascule(c.ctrl, 'Zoomer sur le drapeau', false, () => dessine());
  const u = (n: number) => 3 - 3 ** -n;
  function dessine() {
    const ep = eps[e.valeur];
    if (zoom.on) p.domaine([-.5, 14.5], [3 - 2.6 * ep, 3 + 1.3 * ep]); else p.domaine([-.5, 14.5], [1.8, 3.5]);
    p.o.fmtY = (y) => nb(y, zoom.on ? Math.max(2, Math.ceil(-Math.log10(ep)) + 1) : 1);
    p.repere(); p.vide();
    p.rect(p.x0, 3 - ep, p.x1, 3 + ep, 'lb-bande');
    p.seg(p.x0, 3, p.x1, 3, 'lb-lim');
    // le drapeau
    const fx = p.x1 - .3;
    p.e('path', { d: `M${p.X(fx)} ${p.Y(3)}v-34l-22 9 22 9`, class: 'lb-drapeau' });
    let N = 0; while (3 ** -N >= ep) N++;
    for (let n = 0; n <= 14; n++) {
      const un = u(n);
      if (un < p.y0 - 1) continue;
      p.pt(n, un, n >= N ? 'lb-pt lb-pt-o' : 'lb-pt lb-pt-t', 5);
    }
    p.seg(N - .5, p.y0, N - .5, p.y1, 'lb-rang');
    p.txt(N - .5, p.y1, `rang ${N}`, 'lb-et lb-et-i', 6, 14);
    c.lecture.innerHTML = `${v('u')}<sub>${v('n')}</sub> = 3 − (1/3)<sup>${v('n')}</sup> &nbsp; bande ]3 − ${nb(ep, 3)} ; 3 + ${nb(ep, 3)}[ &nbsp; à partir du rang <b class="i">${N}</b>, <b class="o">tous les termes sont dedans</b>`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : théorème des gendarmes ---------- */
const gendarmes: Labo = (r) => {
  const c = cadre(r, 'Le train entre les rails', `Avance ${v('x')}. La courbe de cos ${v('x')} / ${v('x')} oscille, mais elle reste coincée entre −1/${v('x')} et 1/${v('x')}, qui tendent toutes les deux vers 0.`);
  const p = new Plan(c.scene, { x: [0, 40], y: [-1.1, 1.1], ratio: .55, pasX: 5, pasY: .5 });
  const P = p.poignee((x) => { xv.valeur = Math.round(borne(x, 1, 39) * 2) / 2; dessine(); }, 'lb-poignee', 'Point de la courbe');
  const xv = curseur(c.ctrl, { nom: v('x'), min: 1, max: 39, pas: .5, val: 6, cls: 'i' }, () => dessine());
  const f = (x: number) => Math.cos(x) / x;
  function dessine() {
    p.vide();
    const n = 120, haut: [number, number][] = [], bas: [number, number][] = [];
    for (let i = 0; i <= n; i++) { const x = .9 + (40 - .9) * i / n; haut.push([x, Math.min(1.1, 1 / x)]); bas.unshift([x, Math.max(-1.1, -1 / x)]); }
    p.poly([...haut, ...bas], 'lb-bande');
    p.courbe((x) => 1 / x, 'lb-gend', .9);
    p.courbe((x) => -1 / x, 'lb-gend', .9);
    p.courbe(f, 'lb-f', .9);
    const x = xv.valeur;
    p.seg(x, -1 / x, x, 1 / x, 'lb-rang');
    p.pt(x, f(x), 'lb-pt lb-pt-t', 5);
    P.place(x, f(x));
    c.lecture.innerHTML = `${nb(-1 / x, 3)} ≤ <b class="t">${nb(f(x), 3)}</b> ≤ ${nb(1 / x, 3)} &nbsp; écart entre les rails : 2/${v('x')} = <b class="o">${nb(2 / x, 3)}</b>, il tend vers 0`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : théorème des valeurs intermédiaires ---------- */
const tvi: Labo = (r) => {
  const c = cadre(r, 'Le crayon et la rivière', `Monte ou descends la droite ${v('y')} = ${v('k')}. Tant que la courbe est tracée sans lever le crayon, elle la coupe au moins une fois entre ${v('f')}(${v('a')}) et ${v('f')}(${v('b')}).`);
  const p = new Plan(c.scene, { x: [-2.6, 2.6], y: [-2.6, 2.6], ratio: .6, pasX: 1, pasY: 1 });
  const A = -2.2, B = 2.2;
  const lisse = (x: number) => .5 * x ** 3 - 1.5 * x;
  const saut = (x: number) => (x < .5 ? x / 2 - 1 : x / 2 + .5);
  let mode = 0;
  choix(c.ctrl, ['Sans lever le crayon', 'Avec un saut'], 0, (i) => { mode = i; dessine(); });
  const k = curseur(c.ctrl, { nom: v('k'), min: -2, max: 2, pas: .05, val: .3, cls: 'o' }, () => dessine());
  function dessine() {
    p.vide();
    const f = mode ? saut : lisse;
    const kv = k.valeur;
    if (mode) { p.courbe(f, 'lb-f', A, .4999); p.courbe(f, 'lb-f', .5, B); p.pt(.5, f(.4999), 'lb-pt lb-pt-vide', 5); p.pt(.5, f(.5), 'lb-pt lb-pt-t', 5); }
    else p.courbe(f, 'lb-f', A, B);
    p.seg(A, f(A), A, 0, 'lb-pointille'); p.seg(B, f(B), B, 0, 'lb-pointille');
    p.txt(A, 0, 'a', 'lb-et lb-it', 0, f(A) < 0 ? -8 : 18, 'middle');
    p.txt(B, 0, 'b', 'lb-et lb-it', 0, f(B) < 0 ? -8 : 18, 'middle');
    p.droite(0, kv, 'lb-k');
    const sol: number[] = [], n = 800;
    for (let i = 0; i < n; i++) {
      const x1 = A + (B - A) * i / n, x2 = A + (B - A) * (i + 1) / n;
      const g1 = f(x1) - kv, g2 = f(x2) - kv;
      if (g1 === 0) sol.push(x1);
      else if (g1 * g2 < 0 && Math.abs(g1 - g2) < .2) { let a = x1, b = x2; for (let j = 0; j < 30; j++) { const m = (a + b) / 2; (f(a) - kv) * (f(m) - kv) <= 0 ? (b = m) : (a = m); } sol.push((a + b) / 2); }
    }
    sol.forEach((x) => { p.seg(x, kv, x, 0, 'lb-pointille-o'); p.pt(x, kv, 'lb-pt lb-pt-o', 6); });
    const entre = (kv - f(A)) * (kv - f(B)) <= 0;
    let txt = `${v('f')}(${v('a')}) ≈ ${f2(f(A))}, ${v('f')}(${v('b')}) ≈ ${f2(f(B))}, ${v('k')} = ${f2(kv)} : `;
    if (sol.length) txt += `<b class="o">${sol.length} solution${sol.length > 1 ? 's' : ''}</b> à ${v('f')}(${v('x')}) = ${v('k')}`;
    else if (entre) txt += `<b class="p">aucune solution</b> : le crayon s'est levé, la courbe saute par-dessus la droite`;
    else txt += `<b class="i">aucune solution</b>, mais ${v('k')} n'est pas entre ${v('f')}(${v('a')}) et ${v('f')}(${v('b')}) : le théorème ne promet rien`;
    c.lecture.innerHTML = txt;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : convexité ---------- */
const convexite: Labo = (r) => {
  const c = cadre(r, 'Le volant sur la route de montagne', 'Fais glisser le point. Côté convexe, la courbe passe au-dessus de sa tangente ; côté concave, en dessous. Au point d\'inflexion, la tangente la traverse.');
  const p = new Plan(c.scene, { x: [-3.6, 3.6], y: [-4, 4], ratio: .62, pasX: 1, pasY: 1 });
  const f = (x: number) => .2 * x ** 3 - 1.2 * x, fp = (x: number) => .6 * x * x - 1.2, fs = (x: number) => 1.2 * x;
  const A = p.poignee((x) => { a.valeur = Math.round(borne(x, -3, 3) * 20) / 20; dessine(); }, 'lb-poignee', 'Point de la courbe');
  const a = curseur(c.ctrl, { nom: v('a'), min: -3, max: 3, pas: .05, val: 1.8, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    p.rect(p.x0, p.y0, 0, p.y1, 'lb-zone-p');
    p.rect(0, p.y0, p.x1, p.y1, 'lb-zone-o');
    p.txt(p.x0, p.y1, 'concave', 'lb-et lb-et-p', 10, 18);
    p.txt(p.x1, p.y1, 'convexe', 'lb-et lb-et-o', -10, 18, 'end');
    p.courbe(f, 'lb-f');
    const xa = a.valeur, m = fp(xa), s = fs(xa);
    p.droite(m, f(xa) - m * xa, Math.abs(xa) < .03 ? 'lb-tan lb-tan-i' : s > 0 ? 'lb-tan lb-tan-o' : 'lb-tan lb-tan-p');
    p.pt(0, 0, 'lb-pt lb-pt-i', 4);
    A.place(xa, f(xa));
    const etat = Math.abs(xa) < .03
      ? `<b class="i">point d'inflexion</b> : le volant passe de droite à gauche, la tangente traverse la courbe`
      : s > 0 ? `<b class="o">convexe</b> : tu tournes à gauche, la courbe est au-dessus de la tangente`
        : `<b class="p">concave</b> : tu tournes à droite, la courbe est en dessous de la tangente`;
    c.lecture.innerHTML = `${v('f')}″(${v('a')}) = ${f2(s)} &nbsp; ${etat}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : logarithme ---------- */
const ln: Labo = (r) => {
  const c = cadre(r, 'Le chemin retour', `Déplace le point sur la courbe de ln. Son reflet par rapport à la droite ${v('y')} = ${v('x')} est sur la courbe de exp : ln défait ce que exp a fait.`);
  const p = new Plan(c.scene, { x: [-3, 6.5], y: [-3, 5], orthonorme: true, ratio: .62, pasX: 1, pasY: 1 });
  const P = p.poignee((x) => { a.valeur = Math.round(borne(x, .1, 6) * 20) / 20; dessine(); }, 'lb-poignee', 'Point de la courbe ln');
  const a = curseur(c.ctrl, { nom: v('a'), min: .1, max: 6, pas: .05, val: 2.5, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    p.droite(1, 0, 'lb-pointille');
    p.courbe(Math.exp, 'lb-f2');
    p.courbe(Math.log, 'lb-f', .005);
    const xa = a.valeur, l = Math.log(xa);
    p.seg(xa, l, l, xa, 'lb-reflet');
    p.pt(l, xa, 'lb-pt lb-pt-t2', 5);
    p.seg(xa, 0, xa, l, 'lb-pointille-i'); p.seg(0, l, xa, l, 'lb-pointille-o');
    p.txt(p.x1, Math.log(p.x1), 'ln', 'lb-et lb-et-t', -4, -10, 'end');
    p.txt(Math.log(p.y1 - .3), p.y1 - .3, 'exp', 'lb-et', 8, 0);
    P.place(xa, l);
    const rem = Math.abs(xa - 1) < .03 ? ' &nbsp; <span class="lb-ok">ln 1 = 0</span>' : Math.abs(xa - Math.E) < .03 ? ' &nbsp; <span class="lb-ok">ln e = 1</span>' : '';
    c.lecture.innerHTML = `ln(<b class="i">${f2(xa)}</b>) = <b class="o">${nb(l, 3)}</b> &nbsp; ⇔ &nbsp; e<sup>${nb(l, 3)}</sup> = ${f2(xa)}${rem}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : intégrale et rectangles ---------- */
const rectangles: Labo = (r) => {
  const c = cadre(r, 'Encadrer l\'aire avec des rectangles', `Augmente le nombre de rectangles. L'aire sous la courbe est coincée entre les petits et les grands rectangles, et l'écart fond.`);
  const f = (x: number) => .25 * x * x + .5;
  const I = 64 / 12 + 2;
  const p = new Plan(c.scene, { x: [-.4, 4.4], y: [-.4, 5], ratio: .58, pasX: 1, pasY: 1 });
  const n = curseur(c.ctrl, { nom: v('n'), min: 1, max: 60, pas: 1, val: 4, fmt: (x) => String(x), cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const N = n.valeur, h = 4 / N;
    let s = 0, S = 0;
    for (let i = 0; i < N; i++) {
      const xa = i * h, xb = xa + h, lo = f(xa), hi = f(xb);
      s += lo * h; S += hi * h;
      p.rect(xa, lo, xb, hi, 'lb-rect-haut');
      p.rect(xa, 0, xb, lo, 'lb-rect-bas');
    }
    p.courbe(f, 'lb-f', 0, 4);
    p.seg(4, 0, 4, f(4), 'lb-pointille');
    c.lecture.innerHTML = `<b class="t">${nb(s, 3)}</b> ≤ ∫<sub>0</sub><sup>4</sup> ${v('f')}(${v('x')}) d${v('x')} ≤ <b class="i">${nb(S, 3)}</b> &nbsp; écart : 16/${v('n')} = ${nb(S - s, 3)} &nbsp; valeur exacte : <b class="o">22/3 ≈ ${nb(I, 3)}</b>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : loi binomiale ---------- */
function binom(n: number, p: number): number[] {
  const t: number[] = [];
  let c = 1;
  for (let k = 0; k <= n; k++) { t.push(c * p ** k * (1 - p) ** (n - k)); c = c * (n - k) / (k + 1); }
  return t;
}
const binomiale: Labo = (r) => {
  const c = cadre(r, 'La planche de Galton', `Règle ${v('n')} (le nombre d'épreuves) et ${v('p')} (la probabilité de succès), puis choisis ${v('k')}. Lâche des billes pour voir le hasard se ranger.`);
  const p = new Plan(c.scene, { x: [-.7, 20.7], y: [0, .3], ratio: .55, marge: [12, 14, 26, 44] });
  const n = curseur(c.ctrl, { nom: v('n'), min: 1, max: 40, pas: 1, val: 20, fmt: String }, () => { k.input.max = String(n.valeur); if (k.valeur > n.valeur) k.valeur = n.valeur; billes = null; dessine(); });
  const pp = curseur(c.ctrl, { nom: v('p'), min: 0, max: 1, pas: .01, val: .5 }, () => { billes = null; dessine(); });
  const k = curseur(c.ctrl, { nom: v('k'), min: 0, max: 20, pas: 1, val: 12, fmt: String, cls: 'i' }, () => dessine());
  const cumul = bascule(c.ctrl, `Voir ${v('P')}(${v('X')} ≤ ${v('k')})`, false, () => dessine());
  let billes: number[] | null = null, total = 0;
  const alea = hasard(Date.now());
  bouton(c.ctrl, 'Lâcher 200 billes', () => {
    const N = n.valeur, P = pp.valeur;
    if (!billes) { billes = new Array(N + 1).fill(0); total = 0; }
    for (let j = 0; j < 200; j++) { let s = 0; for (let i = 0; i < N; i++) if (alea() < P) s++; billes[s]++; }
    total += 200; dessine();
  });
  function dessine() {
    const N = n.valeur, P = pp.valeur, K = k.valeur, t = binom(N, P);
    const max = Math.max(...t, ...(billes ? billes.map((b) => b / total) : [0]));
    p.domaine([-.7, N + .7], [0, max * 1.12 || 1]);
    p.o.pasX = N > 24 ? 5 : N > 10 ? 2 : 1;
    p.o.fmtY = (y) => nb(y, 2);
    p.repere(); p.vide();
    const lw = .8;
    let cum = 0;
    t.forEach((pk, i) => {
      if (i <= K) cum += pk;
      const cls = i === K ? 'lb-bar-i' : cumul.on && i < K ? 'lb-bar-o' : 'lb-bar';
      p.rect(i - lw / 2, 0, i + lw / 2, pk, cls);
    });
    if (billes) billes.forEach((b, i) => { if (b) p.pt(i, b / total, 'lb-bille', 3.5); });
    const E = N * P;
    p.seg(E, 0, E, p.y1, 'lb-esp');
    p.txt(E, p.y1, `E(X) = ${nb(E, 2)}`, 'lb-et lb-et-o', 5, 14);
    c.lecture.innerHTML = `${v('P')}(${v('X')} = ${K}) ≈ <b class="i">${nb(t[K], 4)}</b> &nbsp; ${v('P')}(${v('X')} ≤ ${K}) ≈ <b class="o">${nb(Math.min(1, cum), 4)}</b> &nbsp; ${v('E')}(${v('X')}) = ${v('np')} = ${nb(E, 2)}` + (billes ? ` &nbsp; <span class="lb-pale">${total} billes lâchées (points)</span>` : '');
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : loi des grands nombres ---------- */
const grandsNombres: Labo = (r) => {
  const c = cadre(r, 'Lancer le dé, encore et encore', 'Lance le dé. Au début, la fréquence des 6 part dans tous les sens. Plus tu lances, plus elle se resserre autour de 1/6.');
  const p = new Plan(c.scene, { x: [0, 10], y: [0, 1], ratio: .5, marge: [12, 14, 26, 44] });
  const alea = hasard(Date.now() ^ 0x5bd1e995);
  let n = 0, six = 0;
  const hist: number[] = [];
  const lancer = (k: number) => {
    for (let i = 0; i < k && n < 20000; i++) { n++; if (alea() < 1 / 6) six++; hist.push(six / n); }
    dessine();
  };
  bouton(c.ctrl, '1 lancer', () => lancer(1));
  bouton(c.ctrl, '10 lancers', () => lancer(10));
  bouton(c.ctrl, '100 lancers', () => lancer(100));
  bouton(c.ctrl, '1 000 lancers', () => lancer(1000));
  bouton(c.ctrl, 'Recommencer', () => { n = 0; six = 0; hist.length = 0; dessine(); }, 'lb-b-pale');
  function dessine() {
    const X = Math.max(10, n);
    p.domaine([0, X], [0, n < 30 ? 1 : n < 300 ? .5 : .35]);
    p.o.fmtY = (y) => nb(y, 2);
    p.repere(); p.vide();
    p.seg(0, 1 / 6, X, 1 / 6, 'lb-lim');
    p.txt(X, 1 / 6, '1/6', 'lb-et lb-et-o', -4, -8, 'end');
    if (hist.length) {
      const pas = Math.max(1, Math.floor(hist.length / 600));
      const pts: [number, number][] = [];
      for (let i = 0; i < hist.length; i += pas) pts.push([i + 1, hist[i]]);
      pts.push([hist.length, hist[hist.length - 1]]);
      p.poly(pts, 'lb-f', false);
      p.pt(n, six / n, 'lb-pt lb-pt-t', 5);
    }
    c.lecture.innerHTML = n
      ? `${n} lancer${n > 1 ? 's' : ''}, ${six} fois 6 : fréquence <b class="t">${nb(six / n, 4)}</b> &nbsp; 1/6 ≈ <b class="o">0,1667</b> &nbsp; écart : ${nb(Math.abs(six / n - 1 / 6), 4)}`
      : 'Aucun lancer pour l\'instant.';
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : récurrence, les dominos ---------- */
const dominos: Labo = (r) => {
  const c = cadre(r, 'Les dominos', 'Active ou coupe l\'initialisation et l\'hérédité, puis pousse. Il faut les deux pour que tous tombent.');
  const N = 12;
  const p = new Plan(c.scene, { x: [0, N + 1.9], y: [0, 4], ratio: .32, ratioFixe: true, hMin: 150, hMax: 230, grille: false, axes: false, etiquettes: false, marge: [8, 8, 22, 8] });
  const init = bascule(c.ctrl, 'Le premier tombe (initialisation)', true, () => remet(), 'lb-bas-o');
  const her = bascule(c.ctrl, 'Chacun fait tomber le suivant (hérédité)', true, () => remet(), 'lb-bas-i');
  const go = bouton(c.ctrl, 'Pousser', () => pousse(), 'lb-b-plein');
  bouton(c.ctrl, 'Relever', () => remet(), 'lb-b-pale');
  const trou = 5; // sans hérédité, l'écart après ce domino est trop grand
  let tombes = -1;
  function dessine() {
    p.vide();
    const s = p.X(1) - p.X(0);
    const w = Math.min(22, s * .3), h = Math.min(p.Y(0) - p.Y(4) - 18, s * 1.75);
    const repos = Math.asin(Math.min(1, (s - w) / h)) * 180 / Math.PI;
    p.seg(0, 0, N + 2, 0, 'lb-axe');
    for (let i = 0; i < N; i++) {
      const x = 1 + i + (!her.on && i > trou ? .9 : 0);
      const dernier = i === N - 1 || (!her.on && i === trou);
      const g = p.e('g', { class: 'lb-domino' + (i <= tombes ? ' tombe' : ''), style: `--d:${i * 110}ms;--a:${dernier ? 84 : repos}deg`, transform: `translate(${p.X(x).toFixed(1)} ${p.Y(0).toFixed(1)})` });
      const r2 = p.e('rect', { x: -w / 2, y: -h, width: w, height: h, rx: 2, class: i === 0 ? 'lb-dom lb-dom-o' : 'lb-dom' }, g);
      r2.setAttribute('style', `transform-origin:${w / 2}px 0px`);
      p.e('text', { x: 0, y: 16, class: 'lb-grad', 'text-anchor': 'middle' }, g, String(i));
      if (!her.on && i === trou) p.e('text', { x: s * .95, y: -h - 6, class: 'lb-et lb-et-p', 'text-anchor': 'middle' }, g, 'trop loin');
    }
  }
  function pousse() {
    tombes = !init.on ? -1 : her.on ? N - 1 : trou;
    dessine();
    go.disabled = true;
    const msg = !init.on
      ? `<b class="p">Rien ne tombe</b> : personne n'a poussé le premier. Sans initialisation, l'hérédité seule ne prouve rien.`
      : !her.on ? `<b class="p">La chaîne s'arrête</b> après P(${trou}) : sans hérédité, un domino ne fait pas forcément tomber le suivant.`
        : `<b class="o">Tous tombent</b> : P(0) est vraie, et P(${v('n')}) vraie entraîne P(${v('n')} + 1) vraie. Donc P(${v('n')}) est vraie pour tout ${v('n')}.`;
    c.lecture.innerHTML = msg;
  }
  function remet() { tombes = -1; go.disabled = false; dessine(); c.lecture.innerHTML = 'Les dominos sont debout.'; }
  p.quandRedessiner(dessine);
  remet();
  if (calme()) r.classList.add('lb-calme');
};

/* ---------- Terminale : équations différentielles ---------- */
const eqDiff: Labo = (r) => {
  const c = cadre(r, 'Le champ des pentes', `Chaque petit trait donne la pente imposée par ${v('y')}′ = ${v('a')}${v('y')} + ${v('b')}. Choisis le point de départ : la solution suit les traits.`);
  const p = new Plan(c.scene, { x: [-3, 3], y: [-4, 4], ratio: .62, pasX: 1, pasY: 1 });
  const a = curseur(c.ctrl, { nom: v('a'), min: -1.5, max: 1.5, pas: .1, val: -.8 }, () => dessine());
  const b = curseur(c.ctrl, { nom: v('b'), min: -2, max: 2, pas: .1, val: 1.6 }, () => dessine());
  const y0 = curseur(c.ctrl, { nom: `${v('y')}(0)`, min: -3.5, max: 3.5, pas: .1, val: -2, cls: 'i' }, () => dessine());
  const P = p.poignee((_, y) => { y0.valeur = Math.round(borne(y, -3.5, 3.5) * 10) / 10; dessine(); }, 'lb-poignee', 'Point de départ');
  function dessine() {
    p.vide();
    const A = Math.round(a.valeur * 10) / 10, B = b.valeur, Y0 = y0.valeur;
    const L = Math.min(p.X(1) - p.X(0), p.Y(0) - p.Y(1)) * .28;
    for (let x = -2.75; x <= 2.8; x += .5) for (let y = -3.5; y <= 3.6; y += .5) {
      const m = A * y + B;
      const dx = 1, dy = m, px = dx * (p.X(1) - p.X(0)), py = dy * (p.Y(0) - p.Y(1)), l = Math.hypot(px, py);
      const cx = p.X(x), cy = p.Y(y);
      p.e('line', { x1: cx - px / l * L, y1: cy + py / l * L, x2: cx + px / l * L, y2: cy - py / l * L, class: 'lb-champ' });
    }
    let sol: (x: number) => number, txt: string;
    if (Math.abs(A) < 1e-9) { sol = (x) => Y0 + B * x; txt = `${v('a')} = 0 : ${v('y')}′ = ${nb(B)}, les solutions sont des droites`; }
    else {
      const eq = -B / A, C = Y0 - eq;
      sol = (x) => C * Math.exp(A * x) + eq;
      p.droite(0, eq, 'lb-lim');
      p.txt(p.x0, eq, 'équilibre', 'lb-et lb-et-o', 6, -6);
      txt = `${v('y')}(${v('x')}) = ${nb(C)} e<sup>${nb(A)}${v('x')}</sup> ${eq < 0 ? '−' : '+'} ${nb(Math.abs(eq))} &nbsp; équilibre : −${v('b')}/${v('a')} = <b class="o">${nb(eq)}</b>` + (A < 0 ? ' &nbsp; toutes les solutions s\'en rapprochent' : ' &nbsp; les solutions s\'en éloignent');
    }
    p.courbe(sol, 'lb-f');
    P.place(0, Y0);
    c.lecture.innerHTML = txt;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

export const LABOS: Record<string, Labo> = {
  tangente, parabole, exponentielle, cercle: cercle(false), 'cercle-courbe': cercle(true), suite,
  'produit-scalaire': produitScalaire, arbre, epsilon, gendarmes, tvi, convexite, ln, rectangles,
  binomiale, 'grands-nombres': grandsNombres, dominos, 'eq-diff': eqDiff,
};
