// Encadrés interactifs des cours de physique-chimie (Première et Terminale).
import { Plan, cadre, curseur, bouton, bascule, choix, nb, v, borne, el, hasard, boucle, calme } from './outils';

type Labo = (r: HTMLElement) => void;
const ov = (s: string) => `<span class="lb-barre-sus">${s}</span>`;

/* ---------- Première : lentille mince convergente ---------- */
const lentille: Labo = (r) => {
  const c = cadre(r, 'Le point de rendez-vous', 'Déplace l\'objet AB ou change la distance focale. Les trois rayons se croisent là où se forme l\'image.');
  const p = new Plan(c.scene, { x: [-16, 16], y: [-6, 6], ratio: .5, hMin: 240, grille: false, etiquettes: false, axes: false, marge: [10, 10, 10, 10] });
  const oa = curseur(c.ctrl, { nom: ov('OA'), min: -15, max: -1, pas: .5, val: -9, fmt: (x) => nb(x, 1) + ' cm', cls: 'i' }, () => dessine());
  const fo = curseur(c.ctrl, { nom: v('f') + '′', min: 2, max: 6, pas: .5, val: 4, fmt: (x) => nb(x, 1) + ' cm' }, () => dessine());
  const B = p.poignee((x) => { oa.valeur = Math.round(borne(x, -15, -1) * 2) / 2; dessine(); }, 'lb-poignee', 'Objet AB');
  const AB = 2.2;
  function dessine() {
    p.vide();
    const xa = oa.valeur, f = fo.valeur;
    p.seg(p.x0, 0, p.x1, 0, 'lb-axe');
    // la lentille
    p.fleche(0, -5, 0, 5.4, 'lb-lentille'); p.fleche(0, 5, 0, -5.4, 'lb-lentille');
    [[-f, 'F'], [f, 'F′']].forEach(([x, n]) => { p.pt(x as number, 0, 'lb-pt', 3.5); p.txt(x as number, 0, n as string, 'lb-et', 0, 18, 'middle'); });
    p.txt(0, 0, 'O', 'lb-et', 6, 16);
    p.fleche(xa, 0, xa, AB, 'lb-vec lb-vec-t');
    p.txt(xa, 0, 'A', 'lb-et', 0, 18, 'middle'); p.txt(xa, AB, 'B', 'lb-et', -12, -4);
    B.place(xa, AB);
    const infini = Math.abs(xa + f) < 1e-9;
    const xi = infini ? Infinity : 1 / (1 / f + 1 / xa);
    const g = infini ? Infinity : xi / xa, yi = AB * g;
    const reelle = xi > 0;
    // rayon 1 : parallèle à l'axe, ressort par F'
    const pente1 = -AB / f;
    p.seg(xa, AB, 0, AB, 'lb-rayon1');
    p.seg(0, AB, p.x1, AB + pente1 * p.x1, 'lb-rayon1');
    // rayon 2 : par O, non dévié
    const pente2 = AB / xa;
    p.seg(xa, AB, p.x1, pente2 * p.x1, 'lb-rayon2');
    // rayon 3 : par F, ressort parallèle
    if (Math.abs(xa + f) > 1e-9) {
      const y3 = AB * (0 + f) / (xa + f); // hauteur à la lentille
      if (Math.abs(y3) < 8) { p.seg(xa, AB, 0, y3, 'lb-rayon3'); p.seg(0, y3, p.x1, y3, 'lb-rayon3'); }
      if (!reelle && Math.abs(y3) < 8) p.seg(0, y3, p.x0, y3, 'lb-rayon3 lb-virtuel');
    }
    if (!reelle && !infini) {
      p.seg(0, AB, p.x0, AB + pente1 * p.x0, 'lb-rayon1 lb-virtuel');
      p.seg(xa, AB, p.x0, pente2 * p.x0, 'lb-rayon2 lb-virtuel');
    }
    let txt: string;
    if (infini) txt = `L'objet est sur le foyer F : les rayons ressortent parallèles, <b class="i">l'image est rejetée à l'infini</b>.`;
    else {
      if (Math.abs(xi) < 17 && Math.abs(yi) < 7) {
        p.fleche(xi, 0, xi, yi, reelle ? 'lb-vec lb-vec-o' : 'lb-vec lb-vec-o lb-virtuel');
        p.txt(xi, 0, 'A′', 'lb-et', 0, yi > 0 ? 18 : -8, 'middle'); p.txt(xi, yi, 'B′', 'lb-et', 8, yi > 0 ? -4 : 14);
      }
      txt = `${ov('OA′')} = <b class="o">${nb(xi, 1)} cm</b> &nbsp; γ = ${ov('OA′')} / ${ov('OA')} = <b class="i">${nb(g, 2)}</b> &nbsp; image ${reelle ? 'réelle, renversée' : 'virtuelle, droite (effet loupe)'}, ${Math.abs(g) > 1 ? 'plus grande' : 'plus petite'} que l'objet`;
    }
    c.lecture.innerHTML = txt;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Première : onde progressive périodique ---------- */
const onde: Labo = (r) => {
  const c = cadre(r, 'La ola', 'Change la longueur d\'onde et la période. Le point rouge monte et descend sur place : c\'est la perturbation qui avance, pas la matière.');
  const p = new Plan(c.scene, { x: [0, 12], y: [-1.6, 1.4], ratio: .4, hMin: 200, pasX: 1, pasY: 1, nomX: 'x (m)', etiquettes: true });
  const la = curseur(c.ctrl, { nom: 'λ', min: 1, max: 6, pas: .5, val: 4, fmt: (x) => nb(x, 1) + ' m' }, () => dessine());
  const T = curseur(c.ctrl, { nom: v('T'), min: .5, max: 4, pas: .1, val: 2, fmt: (x) => nb(x, 1) + ' s', cls: 'i' }, () => dessine());
  let t = 0;
  const anim = boucle(r, (dt) => { t += dt; dessine(); });
  const lecture = bascule(c.ctrl, 'Pause', false, (on) => { on ? anim.arreter() : anim.lancer(); });
  if (calme()) { lecture.on = true; } else anim.lancer();
  function dessine() {
    p.vide();
    const L = la.valeur, P = T.valeur;
    const y = (x: number) => Math.sin(2 * Math.PI * (t / P - x / L));
    p.courbe(y, 'lb-f');
    const x0 = 1.5;
    p.seg(x0, -1.3, x0 + L, -1.3, 'lb-lambda');
    p.seg(x0, -1.45, x0, -1.15, 'lb-lambda'); p.seg(x0 + L, -1.45, x0 + L, -1.15, 'lb-lambda');
    p.seg(x0, -1.3, x0, y(x0), 'lb-pointille'); p.seg(x0 + L, -1.3, x0 + L, y(x0 + L), 'lb-pointille');
    p.txt(x0 + L / 2, -1.3, 'λ', 'lb-et lb-et-o', 0, -8, 'middle');
    p.pt(x0, y(x0), 'lb-pt lb-pt-p', 6);
    p.pt(x0 + L, y(x0 + L), 'lb-pt lb-pt-p2', 5);
    c.lecture.innerHTML = `célérité ${v('v')} = λ / ${v('T')} = ${nb(L, 1)} / ${nb(P, 1)} = <b class="o">${nb(L / P, 2)} m/s</b> &nbsp; fréquence ${v('f')} = 1/${v('T')} = ${nb(1 / P, 2)} Hz &nbsp; <span class="lb-pale">les deux points distants de λ vibrent en phase</span>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : énergie mécanique ---------- */
const energie: Labo = (r) => {
  const c = cadre(r, 'Le skateur dans la rampe', 'Le skateur part sans vitesse du haut à gauche. Déplace-le : l\'énergie passe d\'une forme à l\'autre. Avec des frottements, une partie se perd en chaleur.');
  const zone = el('div', 'lb-duo lb-duo-large');
  c.scene.append(zone);
  const zr = el('div'), zb = el('div');
  zone.append(zr, zb);
  const p = new Plan(zr, { x: [-5.5, 5.5], y: [-.5, 5.6], ratio: .55, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  const q = new Plan(zb, { x: [0, 3], y: [0, 2700], ratio: .55, ratioFixe: true, hMax: 300, grille: false, etiquettes: false, axes: false, marge: [16, 8, 26, 8] });
  const h = (x: number) => .2 * x * x;
  const m = 50, g = 9.81, H0 = 5;
  const x = curseur(c.ctrl, { nom: 'position', min: -5, max: 5, pas: .05, val: -2, fmt: (s) => nb(h(s), 2) + ' m de haut', cls: 'i' }, () => dessine());
  const frot = bascule(c.ctrl, 'Avec frottements', false, () => dessine());
  const S = p.poignee((xx) => { x.valeur = Math.round(borne(xx, -5, 5) * 20) / 20; dessine(); }, 'lb-poignee', 'Skateur');
  // longueur de piste parcourue depuis x = -5
  const dist = (xx: number) => { let s = 0; const n = 200; for (let i = 0; i < n; i++) { const a = -5 + (xx + 5) * i / n, b = -5 + (xx + 5) * (i + 1) / n; s += Math.hypot(b - a, h(b) - h(a)); } return s; };
  function dessine() {
    p.vide(); q.vide();
    p.courbe(h, 'lb-piste', -5.2, 5.2);
    const xx = x.valeur, hh = h(xx);
    const Em0 = m * g * H0, perte = frot.on ? 60 * dist(xx) : 0;
    const Em = Em0 - perte, Epp = m * g * hh, Ec = Em - Epp;
    const ok = Ec >= -1e-6;
    S.place(xx, hh);
    p.seg(xx, 0, xx, hh, 'lb-pointille');
    const bar = (i: number, val: number, cls: string, nom: string) => {
      q.rect(i + .2, 0, i + .8, Math.max(0, val), cls);
      q.e('text', { x: q.X(i + .5), y: q.H - 8, class: 'lb-et', 'text-anchor': 'middle' }, undefined, nom);
      q.txt(i + .5, Math.max(0, val), nb(Math.max(0, val), 0) + ' J', 'lb-grad', 0, -6, 'middle');
    };
    bar(0, ok ? Ec : 0, 'lb-bar-o', 'Ec'); bar(1, Epp, 'lb-bar-t', 'Epp'); bar(2, ok ? Em : Em, 'lb-bar-i', 'Em');
    if (frot.on) q.seg(2.2, Em0, 2.8, Em0, 'lb-pointille');
    c.lecture.innerHTML = ok
      ? `${v('E')}<sub>pp</sub> = ${v('mgh')} = <b class="t">${nb(Epp, 0)} J</b> &nbsp; ${v('E')}<sub>c</sub> = <b class="o">${nb(Ec, 0)} J</b> (${v('v')} ≈ ${nb(Math.sqrt(2 * Math.max(0, Ec) / m), 1)} m/s) &nbsp; ${v('E')}<sub>m</sub> = <b class="i">${nb(Em, 0)} J</b>` + (frot.on ? ` &nbsp; <span class="lb-pale">perdus en chaleur : ${nb(perte, 0)} J</span>` : ' &nbsp; <span class="lb-pale">constante</span>')
      : `<b class="p">Le skateur n'arrive pas jusqu'ici</b> : il n'a plus assez d'énergie, les frottements en ont pris ${nb(perte, 0)} J.`;
  }
  const tout = () => dessine();
  p.quandRedessiner(tout); q.quandRedessiner(tout);
  dessine();
};

/* ---------- Terminale : chute libre avec vitesse initiale ---------- */
const projectile: Labo = (r) => {
  const c = cadre(r, 'Les deux ombres', 'Règle la vitesse et l\'angle, puis lance. L\'ombre au sol avance à vitesse constante, l\'ombre sur le mur fait un lancer vertical.');
  const p = new Plan(c.scene, { x: [-2, 66], y: [-2, 34], orthonorme: true, ratio: .55, pasX: 10, pasY: 10, nomX: 'x (m)', nomY: 'y (m)', marge: [12, 14, 24, 36] });
  const g = 9.81;
  const v0 = curseur(c.ctrl, { nom: v('v') + '<sub>0</sub>', min: 5, max: 25, pas: .5, val: 18, fmt: (x) => nb(x, 1) + ' m/s' }, () => { t = 0; dessine(); });
  const al = curseur(c.ctrl, { nom: 'α', min: 5, max: 85, pas: 1, val: 50, fmt: (x) => nb(x, 0) + '°', cls: 'i' }, () => { t = 0; dessine(); });
  let t = 2 * 18 * Math.sin(50 * Math.PI / 180) / 9.81 * .35;
  const anim = boucle(r, (dt) => {
    const tv = 2 * v0.valeur * Math.sin(al.valeur * Math.PI / 180) / g;
    t += dt; if (t >= tv) { t = tv; anim.arreter(); go.disabled = false; }
    dessine();
  });
  const go = bouton(c.ctrl, 'Lancer', () => { t = 0; go.disabled = true; if (calme()) { t = 2 * v0.valeur * Math.sin(al.valeur * Math.PI / 180) / g; go.disabled = false; dessine(); } else anim.lancer(); }, 'lb-b-plein');
  function dessine() {
    p.vide();
    const V = v0.valeur, a = al.valeur * Math.PI / 180, vx = V * Math.cos(a), vy = V * Math.sin(a);
    const tv = 2 * vy / g, portee = vx * tv, fl = vy * vy / (2 * g);
    const xt = (s: number) => vx * s, yt = (s: number) => -g * s * s / 2 + vy * s;
    const pts: [number, number][] = [];
    for (let i = 0; i <= 80; i++) { const s = tv * i / 80; pts.push([xt(s), yt(s)]); }
    p.poly(pts, 'lb-traj', false);
    p.seg(vx * tv / 2, 0, vx * tv / 2, fl, 'lb-pointille');
    p.txt(vx * tv / 2, fl, 'flèche', 'lb-et lb-et-o', 0, -8, 'middle');
    p.txt(portee, 0, 'portée', 'lb-et lb-et-o', 0, -8, 'middle');
    const X = xt(t), Y = yt(t), vyt = vy - g * t;
    // les deux ombres
    p.pt(X, 0, 'lb-ombre-pt', 6); p.pt(0, Y, 'lb-ombre-pt', 6);
    p.seg(X, Y, X, 0, 'lb-pointille'); p.seg(X, Y, 0, Y, 'lb-pointille');
    const k = .7;
    p.fleche(X, Y, X + vx * k, Y, 'lb-vec lb-vec-t');
    p.fleche(X, Y, X, Y + vyt * k, 'lb-vec lb-vec-i');
    p.pt(X, Y, 'lb-pt lb-pt-p', 7);
    c.lecture.innerHTML = `${v('t')} = ${nb(t, 2)} s &nbsp; ${v('v')}<sub>${v('x')}</sub> = <b class="t">${nb(vx, 1)} m/s</b> (constante) &nbsp; ${v('v')}<sub>${v('y')}</sub> = <b class="i">${nb(vyt, 1)} m/s</b> &nbsp; portée <b class="o">${nb(portee, 1)} m</b>, flèche <b class="o">${nb(fl, 1)} m</b>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : décroissance radioactive ---------- */
const radioactivite: Labo = (r) => {
  const c = cadre(r, 'Cent pièces lancées', 'Fais avancer le temps. Chaque noyau se désintègre au hasard, mais à chaque demi-vie il en reste à peu près la moitié.');
  const noyaux = [
    { nom: 'Carbone 14', t: 5730, u: 'ans' },
    { nom: 'Iode 131', t: 8.02, u: 'jours' },
    { nom: 'Radon 222', t: 3.82, u: 'jours' },
  ];
  let ni = 0;
  choix(c.ctrl, noyaux.map((n) => n.nom), 0, (i) => { ni = i; dessine(); });
  const zone = el('div', 'lb-duo');
  c.scene.append(zone);
  const zg = el('div'), zc = el('div');
  zone.append(zg, zc);
  const grille = new Plan(zg, { x: [0, 10], y: [0, 10], ratio: 1, ratioFixe: true, hMax: 300, grille: false, axes: false, etiquettes: false, marge: [8, 8, 8, 8] });
  const p = new Plan(zc, { x: [0, 6], y: [0, 105], ratio: .8, ratioFixe: true, hMax: 300, pasX: 1, pasY: 25, nomX: 't / t½', marge: [12, 12, 26, 36] });
  const t = curseur(c.ctrl, { nom: v('t'), min: 0, max: 6, pas: .05, val: 1, fmt: (x) => nb(x * noyaux[ni].t, noyaux[ni].t > 100 ? 0 : 1) + ' ' + noyaux[ni].u, cls: 'i' }, () => dessine());
  let graine = 7;
  let vies: number[] = [];
  const tire = () => { const a = hasard(graine); vies = Array.from({ length: 100 }, () => -Math.log(1 - a()) / Math.LN2); };
  tire();
  bouton(c.ctrl, 'Autre tirage', () => { graine = (graine * 7919 + 13) % 100003; tire(); dessine(); }, 'lb-b-pale');
  function dessine() {
    grille.vide(); p.vide();
    const T = t.valeur;
    let reste = 0;
    vies.forEach((vie, i) => {
      const vivant = vie > T; if (vivant) reste++;
      grille.pt(i % 10 + .5, 9.5 - Math.floor(i / 10), vivant ? 'lb-noyau' : 'lb-noyau-fini', Math.min(grille.X(1) - grille.X(0), grille.Y(0) - grille.Y(1)) * .36);
    });
    p.courbe((x) => 100 * 2 ** -x, 'lb-f', 0, 6);
    for (let k = 1; k <= 5; k++) { p.seg(k, 0, k, 100 / 2 ** k, 'lb-pointille'); p.seg(0, 100 / 2 ** k, k, 100 / 2 ** k, 'lb-pointille'); }
    p.seg(T, 0, T, 100, 'lb-rang');
    // la courbe des noyaux réellement restants (marches)
    const pts: [number, number][] = [[0, 100]];
    [...vies].sort((a, b) => a - b).forEach((vie, i) => { if (vie <= 6) { pts.push([vie, 100 - i]); pts.push([vie, 99 - i]); } });
    pts.push([6, vies.filter((x) => x > 6).length]);
    p.poly(pts.filter(([x]) => x <= T).concat([[T, reste]]), 'lb-marches', false);
    p.pt(T, 100 * 2 ** -T, 'lb-pt lb-pt-t', 5);
    const n = noyaux[ni];
    c.lecture.innerHTML = `demi-vie du ${n.nom.toLowerCase()} : ${nb(n.t, 2)} ${n.u} &nbsp; loi : ${v('N')} = 100 × 2<sup>−${v('t')}/${v('t')}½</sup> ≈ <b class="t">${nb(100 * 2 ** -T, 1)}</b> &nbsp; noyaux restants ici : <b class="i">${reste}</b>`;
  }
  const tout = () => { p.repere(); dessine(); };
  p.quandRedessiner(tout); grille.quandRedessiner(tout);
  tout();
};

/* ---------- Terminale : circuit RC ---------- */
const rc: Labo = (r) => {
  const c = cadre(r, 'Le réservoir et le tuyau étroit', 'Change R et C. La constante de temps τ = RC se lit à 63 % de E, ou là où la tangente à l\'origine coupe l\'asymptote.');
  const E = 5;
  const p = new Plan(c.scene, { x: [0, 500], y: [0, 5.8], ratio: .55, pasX: 100, pasY: 1, nomX: 't (ms)', nomY: 'uC (V)', marge: [12, 14, 26, 36] });
  let charge = true;
  choix(c.ctrl, ['Charge', 'Décharge'], 0, (i) => { charge = i === 0; dessine(); });
  const R = curseur(c.ctrl, { nom: v('R'), min: .5, max: 10, pas: .5, val: 2, fmt: (x) => nb(x, 1) + ' kΩ' }, () => dessine());
  const C = curseur(c.ctrl, { nom: v('C'), min: 5, max: 100, pas: 5, val: 25, fmt: (x) => nb(x, 0) + ' µF', cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const tau = R.valeur * C.valeur; // kΩ × µF = ms
    const u = charge ? (t: number) => E * (1 - Math.exp(-t / tau)) : (t: number) => E * Math.exp(-t / tau);
    p.seg(0, E, p.x1, E, 'lb-pointille');
    p.txt(p.x1, E, 'E = 5 V', 'lb-et', -4, -8, 'end');
    if (charge) p.seg(0, 0, Math.min(tau, p.x1), Math.min(tau, p.x1) * E / tau, 'lb-tan');
    else p.seg(0, E, Math.min(tau, p.x1), E - Math.min(tau, p.x1) * E / tau, 'lb-tan');
    const ut = u(tau);
    if (tau < p.x1) {
      p.seg(tau, 0, tau, ut, 'lb-pointille-o'); p.seg(0, ut, tau, ut, 'lb-pointille-o');
      p.txt(tau, 0, 'τ', 'lb-et lb-et-o', 0, -6, 'middle');
    }
    if (5 * tau < p.x1) { p.seg(5 * tau, 0, 5 * tau, p.y1, 'lb-rang'); p.txt(5 * tau, p.y1, '5τ', 'lb-et lb-et-i', 5, 14); }
    p.courbe(u, 'lb-f', 0, p.x1);
    c.lecture.innerHTML = `τ = ${v('R')} × ${v('C')} = ${nb(R.valeur * 1000, 0)} Ω × ${nb(C.valeur, 0)} µF = <b class="o">${nb(tau, 1)} ms</b> &nbsp; à τ : ${v('u')}<sub>C</sub> = <b class="o">${nb(ut, 2)} V</b> (${charge ? '63' : '37'} % de E) &nbsp; ${charge ? 'chargé' : 'déchargé'} au bout de 5τ = ${nb(5 * tau, 0)} ms`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

export const LABOS: Record<string, Labo> = { lentille, onde, energie, projectile, radioactivite, rc };
