// Encadrés interactifs de physique-chimie, deuxième série.
import { Plan, cadre, curseur, bouton, choix, nb, v, borne, el, boucle, calme } from './outils';

type Labo = (r: HTMLElement) => void;

/** Couleur approchée d'une lumière de longueur d'onde λ (en nm), pour l'affichage. */
function couleurLambda(l: number): string {
  let R = 0, G = 0, B = 0;
  if (l < 440) { R = -(l - 440) / 60; B = 1; } else if (l < 490) { G = (l - 440) / 50; B = 1; }
  else if (l < 510) { G = 1; B = -(l - 510) / 20; } else if (l < 580) { R = (l - 510) / 70; G = 1; }
  else if (l < 645) { R = 1; G = -(l - 645) / 65; } else R = 1;
  const f = l < 420 ? .3 + .7 * (l - 380) / 40 : l > 700 ? .3 + .7 * (780 - l) / 80 : 1;
  const c = (x: number) => Math.round(255 * Math.pow(Math.max(0, x) * f, .8));
  return `rgb(${c(R)},${c(G)},${c(B)})`;
}
const nomCouleur = (l: number) => l < 380 ? 'ultraviolet (invisible)' : l < 450 ? 'violet' : l < 490 ? 'bleu' : l < 520 ? 'cyan' : l < 565 ? 'vert' : l < 590 ? 'jaune' : l < 625 ? 'orange' : l <= 780 ? 'rouge' : 'infrarouge (invisible)';

/* ---------- Seconde : chronophotographie ---------- */
const chrono: Labo = (r) => {
  const c = cadre(r, 'La chronophotographie', 'Choisis un mouvement. Les positions sont prises à intervalles de temps égaux : des points régulièrement espacés, c\'est une vitesse constante.');
  const p = new Plan(c.scene, { x: [0, 12], y: [-3.4, 3.4], orthonorme: true, ratio: .62, hMax: 460, hMin: 220, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  let m = 0;
  choix(c.ctrl, ['Rectiligne uniforme', 'Rectiligne accéléré', 'Rectiligne ralenti', 'Circulaire uniforme'], 0, (i) => { m = i; dessine(); });
  const n = curseur(c.ctrl, { nom: 'position', min: 1, max: 11, pas: 1, val: 5, fmt: (x) => 'M' + x, cls: 'i' }, () => dessine());
  const pos = (k: number): [number, number] => {
    if (m === 0) return [.8 + k * .95, 0];
    if (m === 1) return [.8 + .09 * k * k, 0];
    if (m === 2) return [.8 + 1.9 * k - .086 * k * k, 0];
    const a = k * Math.PI / 6; return [6 + 3 * Math.cos(a), 3 * Math.sin(a)];
  };
  function dessine() {
    p.vide();
    const pts = Array.from({ length: 12 }, (_, k) => pos(k));
    if (m === 3) p.e('circle', { cx: p.X(6), cy: p.Y(0), r: p.X(3) - p.X(0), class: 'lb-pointille', fill: 'none' });
    else p.seg(0, 0, 12, 0, 'lb-pointille');
    pts.forEach(([x, y], k) => { p.pt(x, y, k === n.valeur ? 'lb-pt lb-pt-i' : 'lb-pt lb-pt-t', k === n.valeur ? 6 : 4.5); if (k % 2 === 0 || (m !== 3 && p.W > 560)) p.txt(x, y, 'M' + k, 'lb-grad', 0, m === 3 ? (y >= 0 ? -10 : 18) : 20, 'middle'); });
    const k = n.valeur, [xa, ya] = pts[k - 1], [xb, yb] = pts[k + 1] ?? pos(k + 1);
    // vitesse en M_k ≈ (M_{k-1} M_{k+1}) / 2τ, à l'échelle de la figure
    const vx = (xb - xa) / 2, vy = (yb - ya) / 2;
    p.fleche(pts[k][0], pts[k][1], pts[k][0] + vx, pts[k][1] + vy, 'lb-vec lb-vec-o');
    const nom = ['rectiligne uniforme : la vitesse garde la même valeur et la même direction', 'rectiligne accéléré : les points s\'écartent, la vitesse augmente', 'rectiligne ralenti : les points se resserrent, la vitesse diminue', 'circulaire uniforme : même valeur de vitesse, mais sa direction tourne'][m];
    c.lecture.innerHTML = `vitesse en M${k} ≈ M${k - 1}M${k + 1} / 2τ, longueur de la flèche : <b class="o">${nb(Math.hypot(vx, vy), 2)}</b> &nbsp; mouvement <b class="i">${nom}</b>`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Seconde : le son (hauteur et intensité) ---------- */
const son: Labo = (r) => {
  const c = cadre(r, 'Grave ou aigu, fort ou faible', 'La fréquence règle la hauteur, l\'amplitude règle le volume. Écoute le son pour vérifier (baisse un peu le volume de ton appareil).');
  const p = new Plan(c.scene, { x: [0, 10], y: [-1.2, 1.2], ratio: .4, hMin: 200, pasX: 2, pasY: .5, nomX: 't (ms)', nomY: 'u', fmtY: () => '' });
  const f = curseur(c.ctrl, { nom: v('f'), min: 100, max: 2000, pas: 10, val: 440, fmt: (x) => nb(x, 0) + ' Hz', cls: 'i' }, () => dessine());
  const a = curseur(c.ctrl, { nom: 'amplitude', min: .1, max: 1, pas: .05, val: .7, fmt: (x) => nb(x * 100, 0) + ' %' }, () => dessine());
  let ctx: AudioContext | null = null;
  bouton(c.ctrl, 'Écouter', () => {
    try {
      ctx ??= new AudioContext();
      const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime;
      o.frequency.value = f.valeur;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.18 * a.valeur, t + .03); g.gain.setValueAtTime(.18 * a.valeur, t + .7); g.gain.linearRampToValueAtTime(0, t + .8);
      o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + .85);
    } catch { /* pas de son disponible */ }
  }, 'lb-b-plein');
  function dessine() {
    p.vide();
    const F = f.valeur, A = a.valeur, T = 1000 / F;
    p.courbe((t) => A * Math.sin(2 * Math.PI * t / T), 'lb-f');
    if (T * 1.2 < 10) { p.seg(T / 4, 1.1, T * 1.25, 1.1, 'lb-lambda'); p.txt(T * .75, 1.1, 'T', 'lb-et lb-et-o lb-it', 0, -6, 'middle'); }
    const hauteur = F < 250 ? 'grave' : F < 1000 ? 'médium' : 'aigu';
    c.lecture.innerHTML = `période ${v('T')} = 1/${v('f')} = <b class="o">${nb(T, 2)} ms</b> &nbsp; son <b class="i">${hauteur}</b> &nbsp; <span class="lb-pale">l'oreille humaine entend de 20 Hz à 20 000 Hz</span>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : réfraction ---------- */
const refraction: Labo = (r) => {
  const c = cadre(r, 'La voiture qui mord sur le bas-côté', 'Change l\'angle d\'incidence et le second milieu. En entrant dans un milieu plus réfringent, le rayon se rapproche de la normale.');
  const p = new Plan(c.scene, { x: [-5, 5], y: [-4, 4], orthonorme: true, ratio: .62, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  const milieux = [{ n: 'air', i: 1 }, { n: 'eau', i: 1.33 }, { n: 'verre', i: 1.5 }, { n: 'diamant', i: 2.42 }];
  let m1 = 0, m2 = 1;
  const i1 = curseur(c.ctrl, { nom: v('i') + '<sub>1</sub>', min: 0, max: 89, pas: 1, val: 45, fmt: (x) => nb(x, 0) + '°', cls: 'i' }, () => dessine());
  const ch1 = el('div', 'lb-choix'), ch2 = el('div', 'lb-choix');
  c.ctrl.append(ch1, ch2);
  choix(ch1, milieux.map((x) => 'En haut : ' + x.n), 0, (k) => { m1 = k; dessine(); });
  choix(ch2, milieux.map((x) => 'En bas : ' + x.n), 1, (k) => { m2 = k; dessine(); });
  const S = p.poignee((x, y) => { if (y > 0) { i1.valeur = Math.round(borne(Math.atan2(-x, y) * 180 / Math.PI, 0, 89)); dessine(); } }, 'lb-poignee', 'Source du rayon');
  function dessine() {
    p.vide();
    const n1 = milieux[m1].i, n2 = milieux[m2].i, a = i1.valeur * Math.PI / 180, L = 3.6;
    p.rect(p.x0, 0, p.x1, p.y0, n2 > n1 ? 'lb-milieu' : n2 === n1 ? 'lb-milieu-pale' : 'lb-milieu-pale');
    p.seg(p.x0, 0, p.x1, 0, 'lb-axe');
    p.seg(0, p.y1, 0, p.y0, 'lb-pointille');
    p.txt(p.x0, 0, `${milieux[m1].n} (n = ${nb(n1, 2)})`, 'lb-et', 8, -10);
    p.txt(p.x0, 0, `${milieux[m2].n} (n = ${nb(n2, 2)})`, 'lb-et', 8, 22);
    const sx = -L * Math.sin(a), sy = L * Math.cos(a);
    p.fleche(sx, sy, 0, 0, 'lb-vec lb-vec-i');
    S.place(sx, sy);
    const s2 = n1 * Math.sin(a) / n2;
    p.fleche(0, 0, L * Math.sin(a), L * Math.cos(a), s2 > 1 ? 'lb-vec lb-vec-t' : 'lb-vec lb-vec-pale');
    let txt: string;
    if (s2 > 1) txt = `<b class="p">réflexion totale</b> : ${v('n')}<sub>1</sub> sin ${v('i')}<sub>1</sub> = ${nb(n1 * Math.sin(a), 2)} dépasse ${v('n')}<sub>2</sub> = ${nb(n2, 2)}, aucun rayon ne traverse`;
    else {
      const b = Math.asin(s2);
      p.fleche(0, 0, L * Math.sin(b), -L * Math.cos(b), 'lb-vec lb-vec-o');
      txt = `${v('n')}<sub>1</sub> sin ${v('i')}<sub>1</sub> = ${v('n')}<sub>2</sub> sin ${v('i')}<sub>2</sub> &nbsp; ${v('i')}<sub>2</sub> = <b class="o">${nb(b * 180 / Math.PI, 1)}°</b> &nbsp; ` + (n2 > n1 ? 'le rayon se rapproche de la normale' : n2 < n1 ? 'le rayon s\'écarte de la normale' : 'même milieu : le rayon ne dévie pas');
    }
    c.lecture.innerHTML = txt;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Première : photons et spectre ---------- */
const spectre: Labo = (r) => {
  const c = cadre(r, 'L\'énergie d\'un photon', 'Fais glisser la longueur d\'onde. Plus elle est courte, plus le photon transporte d\'énergie.');
  const p = new Plan(c.scene, { x: [300, 850], y: [0, 4.4], ratio: .42, hMin: 210, pasX: 100, pasY: 1, nomX: 'λ (nm)', nomY: 'E (eV)', marge: [14, 14, 26, 36] });
  const l = curseur(c.ctrl, { nom: 'λ', min: 300, max: 850, pas: 1, val: 520, fmt: (x) => nb(x, 0) + ' nm', cls: 'i' }, () => dessine());
  const P = p.poignee((x) => { l.valeur = Math.round(borne(x, 300, 850)); dessine(); }, 'lb-poignee', 'Longueur d\'onde');
  const hc = 6.626e-34 * 2.998e8;
  function dessine() {
    p.vide();
    for (let x = 380; x < 780; x += 4) p.rect(x, 0, x + 4.5, .35, 'lb-spectre').setAttribute('style', `fill:${couleurLambda(x + 2)}`);
    const E = (x: number) => hc / (x * 1e-9) / 1.602e-19;
    p.courbe(E, 'lb-f');
    const L = l.valeur, e = E(L);
    p.seg(L, 0, L, e, 'lb-pointille-i');
    p.e('circle', { cx: p.X(L), cy: p.Y(e), r: 14, class: 'lb-photon', style: `fill:${L >= 380 && L <= 780 ? couleurLambda(L) : 'var(--gris)'}` });
    P.place(L, e);
    c.lecture.innerHTML = `${v('E')} = ${v('hc')}/λ = <b class="o">${nb(hc / (L * 1e-9) * 1e19, 2)} × 10<sup>−19</sup> J</b> ≈ ${nb(e, 2)} eV &nbsp; fréquence ν = ${nb(2.998e8 / (L * 1e-9) / 1e14, 2)} × 10<sup>14</sup> Hz &nbsp; <b class="i">${nomCouleur(L)}</b>`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première : loi de Beer-Lambert ---------- */
const beer: Labo = (r) => {
  const c = cadre(r, 'La loi de Beer-Lambert', 'Change la concentration de la solution de sulfate de cuivre. Plus elle est concentrée, plus elle est bleue et plus son absorbance est grande, proportionnellement.');
  const zone = el('div', 'lb-duo lb-duo-cuve');
  c.scene.append(zone);
  const zg = el('div'), zc = el('div');
  zone.append(zg, zc);
  const cu = new Plan(zg, { x: [0, 10], y: [0, 10], ratio: .9, ratioFixe: true, hMax: 260, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  const p = new Plan(zc, { x: [0, 0.11], y: [0, 1.6], ratio: .7, ratioFixe: true, hMax: 260, pasX: .02, pasY: .4, nomX: 'c (mol/L)', nomY: 'A', marge: [12, 14, 26, 36], fmtX: (x) => nb(x, 2) });
  const k = 13; // L/mol à λ = 800 nm, ordre de grandeur pour le sulfate de cuivre
  const conc = curseur(c.ctrl, { nom: v('c'), min: 0, max: .1, pas: .002, val: .05, fmt: (x) => nb(x, 3) + ' mol/L', cls: 'i' }, () => dessine());
  function dessine() {
    cu.vide(); p.vide();
    const C = conc.valeur, A = k * C, T = Math.pow(10, -A);
    // la cuve
    cu.rect(3, 1, 7, 8.5, 'lb-cuve');
    cu.rect(3, 1, 7, 7.5, 'lb-solution').setAttribute('style', `fill:rgba(20,110,230,${(1 - T) * .95 + .02})`);
    cu.fleche(.3, 4.5, 2.8, 4.5, 'lb-vec lb-vec-pale');
    cu.fleche(7.2, 4.5, 9.7, 4.5, 'lb-vec lb-vec-pale').setAttribute('style', `opacity:${.15 + .85 * T}`);
    cu.txt(8.5, 4.5, nb(T * 100, 0) + ' %', 'lb-et', 0, -10, 'middle');
    p.droite(k, 0, 'lb-tan');
    p.pt(C, A, 'lb-pt lb-pt-t', 6);
    p.seg(C, 0, C, A, 'lb-pointille-i'); p.seg(0, A, C, A, 'lb-pointille');
    c.lecture.innerHTML = `${v('A')} = ${v('k')} × ${v('c')} = ${k} × ${nb(C, 3)} = <b class="t">${nb(A, 2)}</b> &nbsp; lumière transmise : ${nb(T * 100, 0)} % &nbsp; <span class="lb-pale">la solution absorbe le rouge-orangé, elle paraît bleue</span>`;
  }
  const tout = () => { p.repere(); dessine(); };
  p.quandRedessiner(tout); cu.quandRedessiner(tout);
  tout();
};

/* ---------- Première : synthèse additive ---------- */
const synthese: Labo = (r) => {
  const c = cadre(r, 'Trois projecteurs', 'Règle l\'intensité des projecteurs rouge, vert et bleu. Là où les faisceaux se superposent, les lumières s\'additionnent.');
  const p = new Plan(c.scene, { x: [-5, 5], y: [-4, 4], orthonorme: true, ratio: .62, grille: false, axes: false, etiquettes: false, marge: [10, 10, 10, 10] });
  const R = curseur(c.ctrl, { nom: 'rouge', min: 0, max: 255, pas: 5, val: 255, fmt: (x) => nb(x / 2.55, 0) + ' %', cls: 'p' }, () => dessine());
  const G = curseur(c.ctrl, { nom: 'vert', min: 0, max: 255, pas: 5, val: 255, fmt: (x) => nb(x / 2.55, 0) + ' %', cls: 'o' }, () => dessine());
  const B = curseur(c.ctrl, { nom: 'bleu', min: 0, max: 255, pas: 5, val: 255, fmt: (x) => nb(x / 2.55, 0) + ' %', cls: 't' }, () => dessine());
  function dessine() {
    p.vide();
    p.rect(p.x0, p.y0, p.x1, p.y1, 'lb-noir');
    const rr = p.X(2.1) - p.X(0);
    const g = p.e('g', { style: 'mix-blend-mode:normal;isolation:isolate' });
    [[0, 1.1, `rgb(${R.valeur},0,0)`], [-1.1, -.8, `rgb(0,${G.valeur},0)`], [1.1, -.8, `rgb(0,0,${B.valeur})`]].forEach(([x, y, col]) => {
      p.e('circle', { cx: p.X(x as number), cy: p.Y(y as number), r: rr, style: `fill:${col};mix-blend-mode:screen` }, g);
    });
    const tout = `rgb(${R.valeur},${G.valeur},${B.valeur})`;
    const nom = (r: number, gg: number, b: number) => {
      const on = [r > 0, gg > 0, b > 0], n = on.filter(Boolean).length;
      if (!n) return 'noir';
      if (n === 3 && r === gg && gg === b) return r === 255 ? 'blanc' : 'gris';
      if (n === 2 && r && gg && !b && r === gg) return 'jaune';
      if (n === 2 && gg && b && !r && gg === b) return 'cyan';
      if (n === 2 && r && b && !gg && r === b) return 'magenta';
      return 'une nuance';
    };
    c.lecture.innerHTML = `au centre : <span class="lb-pastille" style="background:${tout}"></span> <b>${nom(R.valeur, G.valeur, B.valeur)}</b> &nbsp; rouge + vert = jaune, vert + bleu = cyan, rouge + bleu = magenta, les trois = blanc`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : effet Doppler ---------- */
const doppler: Labo = (r) => {
  const c = cadre(r, 'La sirène qui passe', 'Fais varier la vitesse de la source. Devant elle les ondes se tassent (son plus aigu), derrière elles s\'étirent (son plus grave).');
  const p = new Plan(c.scene, { x: [-10, 10], y: [-5, 5], orthonorme: true, ratio: .5, grille: false, axes: false, etiquettes: false, marge: [6, 6, 6, 6] });
  const vs = curseur(c.ctrl, { nom: v('v') + '/' + v('c'), min: 0, max: .9, pas: .05, val: .4, fmt: (x) => nb(x, 2), cls: 'i' }, () => dessine());
  const fe = 440;
  let t = 0;
  const anim = boucle(r, (dt) => { t += dt; dessine(); });
  if (!calme()) anim.lancer();
  function dessine() {
    p.vide();
    const V = vs.valeur, cel = 4, T = .5;
    const x = (s: number) => -8 + (((s * V * cel) % 16) + 16) % 16;
    const now = t;
    const tSrc = (s: number) => x(s);
    for (let k = 0; k < 12; k++) {
      const te = Math.floor(now / T) * T - k * T;
      if (te < 0) continue;
      const age = now - te, rad = age * cel;
      if (rad > 14) continue;
      const xe = tSrc(te);
      if (xe > tSrc(now) + 1e-6) continue; // émis avant que la source ne revienne au début
      p.e('circle', { cx: p.X(xe), cy: p.Y(0), r: p.X(rad) - p.X(0), class: 'lb-onde', style: `opacity:${Math.max(0, 1 - rad / 14)}` });
    }
    const xs = tSrc(now);
    p.pt(xs, 0, 'lb-pt lb-pt-p', 8);
    p.e('rect', { x: p.X(8.6), y: p.Y(.6), width: p.X(1) - p.X(0), height: p.Y(-.6) - p.Y(.6), class: 'lb-recepteur' });
    p.txt(8.6, -1, 'récepteur', 'lb-grad', 0, 14);
    const fa = fe / (1 - V), fl = fe / (1 + V);
    c.lecture.innerHTML = `émis : ${fe} Hz &nbsp; reçu devant (approche) : <b class="i">${nb(fa, 0)} Hz</b> &nbsp; reçu derrière (éloignement) : <b class="t">${nb(fl, 0)} Hz</b>`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : satellite en orbite circulaire ---------- */
const orbite: Labo = (r) => {
  const c = cadre(r, 'Le boulet qui tombe à côté', 'Change l\'altitude du satellite. Plus il est haut, plus il va lentement et plus son tour est long. T² / r³ reste le même : c\'est la troisième loi de Kepler.');
  const p = new Plan(c.scene, { x: [-50, 50], y: [-46, 46], orthonorme: true, ratio: .62, grille: false, axes: false, etiquettes: false, marge: [6, 6, 6, 6] });
  const G = 6.674e-11, M = 5.972e24, RT = 6371;
  const h = curseur(c.ctrl, { nom: 'altitude', min: 400, max: 36000, pas: 100, val: 20200, fmt: (x) => nb(x, 0) + ' km', cls: 'i' }, () => dessine());
  let ang = 0;
  const anim = boucle(r, (dt) => { const rr = (RT + h.valeur) * 1e3; const T = 2 * Math.PI * Math.sqrt(rr ** 3 / (G * M)); ang += dt * 2 * Math.PI / (T / 1800); dessine(); });
  if (!calme()) anim.lancer();
  function dessine() {
    p.vide();
    const k = 1 / 1000; // 1 unité = 1 000 km
    const rr = (RT + h.valeur) * 1e3, vit = Math.sqrt(G * M / rr), T = 2 * Math.PI * rr / vit;
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X(RT * k) - p.X(0), class: 'lb-terre' });
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X((RT + 35786) * k) - p.X(0), class: 'lb-pointille', fill: 'none' });
    const R = (RT + h.valeur) * k;
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X(R) - p.X(0), class: 'lb-orbite' });
    const x = R * Math.cos(ang), y = R * Math.sin(ang);
    p.fleche(x, y, x - Math.sin(ang) * vit / 600, y + Math.cos(ang) * vit / 600, 'lb-vec lb-vec-o');
    p.fleche(x, y, x - Math.cos(ang) * 6, y - Math.sin(ang) * 6, 'lb-vec lb-vec-i');
    p.pt(x, y, 'lb-pt lb-pt-t', 6);
    p.txt(0, -(RT + 35786) * k, 'orbite géostationnaire', 'lb-grad', 0, -6, 'middle');
    const hT = T / 3600;
    c.lecture.innerHTML = `${v('v')} = √(${v('GM')}/${v('r')}) = <b class="o">${nb(vit / 1000, 2)} km/s</b> &nbsp; période ${v('T')} = <b class="t">${hT < 48 ? nb(hT, 2) + ' h' : nb(hT / 24, 1) + ' jours'}</b> &nbsp; ${v('T')}²/${v('r')}³ = ${nb(T * T / rr ** 3 * 1e14, 3)} × 10<sup>−14</sup> s²/m³ <span class="lb-pale">(constant)</span>`;
  }
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale : titrage pH-métrique ---------- */
const titrage: Labo = (r) => {
  const c = cadre(r, 'Les invités et les chaises', 'Verse la soude dans l\'acide chlorhydrique. Au saut de pH, toutes les chaises sont occupées : c\'est l\'équivalence.');
  const zone = el('div', 'lb-duo lb-duo-cuve');
  c.scene.append(zone);
  const zg = el('div'), zc = el('div');
  zone.append(zg, zc);
  const b = new Plan(zg, { x: [0, 10], y: [0, 12], ratio: 1.1, ratioFixe: true, hMax: 300, grille: false, axes: false, etiquettes: false, marge: [8, 8, 8, 8] });
  const p = new Plan(zc, { x: [0, 25], y: [0, 14], ratio: .8, ratioFixe: true, hMax: 300, pasX: 5, pasY: 2, nomX: 'V (mL)', nomY: 'pH', marge: [12, 14, 26, 32] });
  const ca = .1, Va = 10, cb = .1;
  const VE = ca * Va / cb;
  const V = curseur(c.ctrl, { nom: v('V'), min: 0, max: 25, pas: .1, val: 6, fmt: (x) => nb(x, 1) + ' mL', cls: 'i' }, () => dessine());
  const pH = (vb: number) => {
    const nH = ca * Va - cb * vb, vt = (Va + vb) / 1000;
    if (Math.abs(nH) < 1e-9) return 7;
    const conc = Math.abs(nH) / 1000 / vt;
    const x = conc / 2 + Math.sqrt(conc * conc / 4 + 1e-14);
    return nH > 0 ? -Math.log10(x) : 14 + Math.log10(x);
  };
  function dessine() {
    b.vide(); p.vide();
    const vb = V.valeur, ph = pH(vb);
    // burette et bécher
    b.rect(4.3, 6, 5.7, 11.8, 'lb-cuve');
    b.rect(4.3, 6, 5.7, 6 + 5.8 * (1 - vb / 25), 'lb-solution-pale');
    b.rect(2, .3, 8, 4.8, 'lb-cuve');
    const col = ph < 8.2 ? 'rgba(255,255,255,0)' : `rgba(220,40,160,${Math.min(.75, (ph - 8.2) / 3)})`;
    b.rect(2, .3, 8, .3 + 2.2 + 1.8 * vb / 25, 'lb-solution-pale').setAttribute('style', `fill:${col === 'rgba(255,255,255,0)' ? 'var(--terme-doux)' : col}`);
    b.txt(5, 5.3, 'soude', 'lb-grad', 0, 0, 'middle');
    b.txt(5, .3, 'acide + phénolphtaléine', 'lb-grad', 0, -4, 'middle');
    p.seg(VE, 0, VE, 14, 'lb-pointille-o'); p.txt(VE, 0, 'V', 'lb-et lb-et-o lb-it', 4, -6);
    p.courbe(pH, 'lb-f', 0, 25);
    p.pt(vb, ph, 'lb-pt lb-pt-i', 6);
    const etat = vb < VE - .05 ? `avant l'équivalence : il reste des ions H<sub>3</sub>O<sup>+</sup> (des invités debout)` : vb > VE + .05 ? `après l'équivalence : la soude est en excès, la solution rosit` : `<b class="o">équivalence</b> : ${v('c')}<sub>A</sub>${v('V')}<sub>A</sub> = ${v('c')}<sub>B</sub>${v('V')}<sub>E</sub>`;
    c.lecture.innerHTML = `${v('V')} = ${nb(vb, 1)} mL &nbsp; pH = <b class="i">${nb(ph, 2)}</b> &nbsp; ${v('V')}<sub>E</sub> = <b class="o">${nb(VE, 1)} mL</b> &nbsp; <span class="lb-pale">${etat}</span>`;
  }
  const tout = () => { p.repere(); dessine(); };
  p.quandRedessiner(tout); b.quandRedessiner(tout);
  tout();
};

export const LABOS: Record<string, Labo> = { chrono, son, refraction, spectre, beer, synthese, doppler, orbite, titrage };
