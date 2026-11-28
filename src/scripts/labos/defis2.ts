// Deuxième série de défis : Seconde, Terminale (suite) et physique-chimie.
// Même principe que defis.ts : on manipule, on vérifie, l'indice vient après deux essais.
import { Plan, cadre, curseur, nb, v, borne } from './outils';
import { verif } from './defis';

type Defi = (r: HTMLElement) => void;
const f2 = (x: number) => nb(x, 2);
const pas = (x: number, p: number) => Math.round(x / p) * p;

/* ---------- Seconde : la droite d'équation donnée ---------- */
const droiteImposee: Defi = (r) => {
  const c = cadre(r, 'Trouver le bon point', `A(−2 ; 3) est fixe. Place B pour que la droite (AB) ait pour équation ${v('y')} = −0,5${v('x')} + 2.`, 'Défi');
  const p = new Plan(c.scene, { x: [-5, 5], y: [-4, 5], orthonorme: true, ratio: .7, hMax: 440, pasX: 1, pasY: 1 });
  let bx = 2, by = 3;
  const B = p.poignee((x, y) => { bx = pas(borne(x, -5, 5), .5); by = pas(borne(y, -4, 5), .5); dessine(); }, 'lb-poignee', 'Point B');
  function dessine() {
    p.vide();
    if (bx !== -2) p.droite((by - 3) / (bx + 2), 3 - 2 * (by - 3) / (bx + 2), 'lb-f');
    p.pt(-2, 3, 'lb-pt lb-pt-p', 5); p.txt(-2, 3, 'A', 'lb-et', -14, -8);
    B.place(bx, by);
    c.lecture.innerHTML = `B(${nb(bx, 1)} ; ${nb(by, 1)})`;
  }
  verif(r, c, () => {
    const surD = Math.abs(by - (-.5 * bx + 2)) < 1e-9 && bx !== -2;
    if (surD) return { ok: true, msg: `B est sur la droite : −0,5 × ${nb(bx, 1)} + 2 = ${nb(by, 1)}. Toute autre position sur cette droite convient aussi.` };
    if (bx === -2) return { ok: false, msg: 'A et B ont la même abscisse : la droite (AB) est verticale.' };
    const m = (by - 3) / (bx + 2);
    return { ok: false, msg: `Le coefficient directeur de (AB) vaut (${nb(by, 1)} − 3) / (${nb(bx, 1)} + 2) ≈ ${f2(m)}, on veut −0,5.` };
  }, `quand ${v('x')} augmente de 2, ${v('y')} doit baisser de 1.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : compléter le parallélogramme ---------- */
const parallelogramme: Defi = (r) => {
  const c = cadre(r, 'Le quatrième sommet', 'A(−3 ; −1), B(2 ; 0) et C(3 ; 3) sont fixes. Place D pour que ABCD soit un parallélogramme.', 'Défi');
  const p = new Plan(c.scene, { x: [-5, 5], y: [-3, 5], orthonorme: true, ratio: .7, hMax: 440, pasX: 1, pasY: 1 });
  const A: [number, number] = [-3, -1], B: [number, number] = [2, 0], C: [number, number] = [3, 3];
  let dx = 0, dy = 3;
  const D = p.poignee((x, y) => { dx = Math.round(borne(x, -5, 5)); dy = Math.round(borne(y, -3, 5)); dessine(); }, 'lb-poignee', 'Point D');
  function dessine() {
    p.vide();
    p.poly([A, B, C, [dx, dy]], 'lb-f lb-mince');
    p.fleche(A[0], A[1], B[0], B[1], 'lb-vec lb-vec-t');
    p.fleche(dx, dy, C[0], C[1], 'lb-vec lb-vec-o');
    ([[A, 'A', -16, 16], [B, 'B', 8, 16], [C, 'C', 8, -8]] as const).forEach(([q, n, ox, oy]) => { p.pt(q[0], q[1], 'lb-pt', 4); p.txt(q[0], q[1], n, 'lb-et', ox, oy); });
    p.txt(dx, dy, 'D', 'lb-et', -18, -10);
    D.place(dx, dy);
    c.lecture.innerHTML = `D(${dx} ; ${dy}) · ${v('AB')} = (5 ; 1) · ${v('DC')} = (${3 - dx} ; ${3 - dy})`;
  }
  verif(r, c, () => {
    const ok = dx === -2 && dy === 2;
    return { ok, msg: ok ? `${v('AB')} = ${v('DC')} = (5 ; 1) : ABCD est un parallélogramme, et D = (−2 ; 2).` : `Il faut ${v('AB')} = ${v('DC')}. Ici ${v('DC')} = (${3 - dx} ; ${3 - dy}).` };
  }, `${v('DC')} doit valoir (5 ; 1), donc D = (3 − 5 ; 3 − 1).`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : où la racine croise la droite ---------- */
const racineDroite: Defi = (r) => {
  const c = cadre(r, 'Le point de rencontre', `Place le point de la courbe de ${v('x')} ↦ √${v('x')} où elle recoupe la droite ${v('y')} = ${v('x')}/2, ailleurs qu'en O.`, 'Défi');
  const p = new Plan(c.scene, { x: [-.5, 7.5], y: [-.5, 3.5], ratio: .55, pasX: 1, pasY: 1 });
  let a = 1;
  const P = p.poignee((x) => { a = pas(borne(x, 0, 7.5), .05); dessine(); }, 'lb-poignee', 'Point de la courbe');
  function dessine() {
    p.vide();
    p.courbe((x) => (x >= 0 ? Math.sqrt(x) : NaN), 'lb-f', 0);
    p.droite(.5, 0, 'lb-tan');
    p.seg(a, 0, a, Math.sqrt(a), 'lb-pointille');
    P.place(a, Math.sqrt(a));
    c.lecture.innerHTML = `${v('x')} = ${f2(a)}`;
  }
  verif(r, c, () => {
    const ok = Math.abs(a - 4) < .06;
    return { ok, msg: ok ? `√4 = 2 et 4/2 = 2 : les deux courbes se croisent en (4 ; 2).` : `En ${v('x')} = ${f2(a)} : √${v('x')} ≈ ${f2(Math.sqrt(a))} mais ${v('x')}/2 = ${f2(a / 2)}.` };
  }, `√${v('x')} = ${v('x')}/2 donne ${v('x')} = ${v('x')}²/4 en élevant au carré.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : l'évolution réciproque ---------- */
const evolutionReciproque: Defi = (r) => {
  const c = cadre(r, 'Revenir au prix de départ', 'Un article à 100 € baisse de 20 %. Quelle hausse en pourcentage le ramène exactement à 100 € ?', 'Défi');
  const p = new Plan(c.scene, { x: [0, 3], y: [0, 125], ratio: .5, pasX: 10, pasY: 25, etiquettes: true, fmtX: () => '' });
  const ct = curseur(c.ctrl, { nom: 'hausse', min: 0, max: 40, pas: .5, val: 20, fmt: (x) => nb(x, 1) + ' %', cls: 'o' }, () => dessine());
  function dessine() {
    p.vide();
    const fin = 80 * (1 + ct.valeur / 100);
    p.seg(0, 100, 3, 100, 'lb-pointille');
    [[100, 'lb-bar lb-bar-t', 'départ'], [80, 'lb-bar lb-bar-i', '−20 %'], [fin, 'lb-bar lb-bar-o', `+${nb(ct.valeur, 1)} %`]].forEach(([h, cls, t], i) => {
      p.rect(.25 + i, 0, .75 + i, h as number, cls as string);
      p.txt(.5 + i, h as number, `${f2(h as number)} €`, 'lb-et', 0, -8, 'middle');
      p.txt(.5 + i, 0, t as string, 'lb-et', 0, 18, 'middle');
    });
    c.lecture.innerHTML = `80 × ${f2(1 + ct.valeur / 100)} = ${f2(fin)} €`;
  }
  verif(r, c, () => {
    const ok = Math.abs(ct.valeur - 25) < .01;
    return { ok, msg: ok ? `80 × 1,25 = 100 : il faut une hausse de 25 %, pas de 20 %. La hausse se calcule sur 80, pas sur 100.` : `On arrive à ${f2(80 * (1 + ct.valeur / 100))} €, pas à 100 €.` };
  }, 'le coefficient multiplicateur doit valoir 100/80.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde : la note qui manque ---------- */
const moyenneCible: Defi = (r) => {
  const c = cadre(r, 'La note qui manque', 'Cinq notes sont connues : 10, 14, 9, 15 et 11. Fais glisser la sixième pour que la moyenne des six soit exactement 12.', 'Défi');
  const notes = [10, 14, 9, 15, 11];
  const p = new Plan(c.scene, { x: [0, 6], y: [0, 20], ratio: .55, pasX: 10, pasY: 5, fmtX: () => '' });
  let n6 = 16;
  const P = p.poignee((_, y) => { n6 = Math.round(borne(y, 0, 20)); dessine(); }, 'lb-poignee', 'Sixième note');
  function dessine() {
    p.vide();
    const m = (notes.reduce((s, x) => s + x, 0) + n6) / 6;
    [...notes, n6].forEach((x, i) => {
      p.rect(.2 + i, 0, .8 + i, x, i === 5 ? 'lb-bar lb-bar-o' : 'lb-bar lb-bar-t');
      p.txt(.5 + i, x, String(x), 'lb-et', 0, -8, 'middle');
    });
    p.seg(0, 12, 6, 12, 'lb-pointille'); p.txt(0, 12, 'objectif 12', 'lb-et', 4, -6);
    p.seg(0, m, 6, m, 'lb-tan');
    P.place(5.5, n6);
    c.lecture.innerHTML = `6<sup>e</sup> note : ${n6} · la ligne verte est la moyenne actuelle`;
  }
  verif(r, c, () => {
    const s = notes.reduce((a, x) => a + x, 0) + n6, ok = n6 === 13;
    return { ok, msg: ok ? `59 + 13 = 72 et 72 / 6 = 12.` : `La somme vaut ${s}, la moyenne ${f2(s / 6)}.` };
  }, 'pour une moyenne de 12 sur six notes, la somme doit faire 72.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : l'asymptote horizontale ---------- */
const asymptote: Defi = (r) => {
  const c = cadre(r, 'Viser l\'asymptote', `${v('f')}(${v('x')}) = (${v('a')}${v('x')} + 1)/(${v('x')} − 2). Règle ${v('a')} pour que la droite ${v('y')} = 3 soit asymptote à la courbe en +∞.`, 'Défi');
  const p = new Plan(c.scene, { x: [-6, 12], y: [-6, 8], ratio: .58, pasX: 2, pasY: 2 });
  const ca = curseur(c.ctrl, { nom: v('a'), min: -4, max: 5, pas: .1, val: 1, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const a = ca.valeur, f = (x: number) => (a * x + 1) / (x - 2);
    p.seg(2, -6, 2, 8, 'lb-pointille');
    p.seg(-6, 3, 12, 3, 'lb-lim');
    p.courbe(f, 'lb-f', -6, 1.98); p.courbe(f, 'lb-f', 2.02, 12);
    c.lecture.innerHTML = `${v('a')} = ${nb(a, 1)} · ${v('f')}(1000) ≈ ${f2(f(1000))}`;
  }
  verif(r, c, () => {
    const ok = Math.abs(ca.valeur - 3) < .01;
    return { ok, msg: ok ? `En factorisant par ${v('x')} : ${v('f')}(${v('x')}) = (3 + 1/${v('x')})/(1 − 2/${v('x')}) → 3.` : `Avec ${v('a')} = ${nb(ca.valeur, 1)}, la courbe tend vers ${nb(ca.valeur, 1)} en +∞.` };
  }, `factorise le haut et le bas par ${v('x')} : la limite est le quotient des coefficients de ${v('x')}.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : équation différentielle ---------- */
const edoPoint: Defi = (r) => {
  const c = cadre(r, 'Passer par le point', `${v('y')} est solution de ${v('y')}′ = ${v('k')}${v('y')} avec ${v('y')}(0) = 1. Règle ${v('k')} pour que la courbe passe par le point (2 ; 4).`, 'Défi');
  const p = new Plan(c.scene, { x: [-.5, 3], y: [-.5, 6], ratio: .6, pasX: .5, pasY: 1 });
  const ck = curseur(c.ctrl, { nom: v('k'), min: 0, max: 1.2, pas: .005, val: .4, fmt: (x) => nb(x, 3) }, () => dessine());
  function dessine() {
    p.vide();
    const k = ck.valeur;
    p.courbe((x) => Math.exp(k * x), 'lb-f');
    p.pt(2, 4, 'lb-pt lb-pt-p', 6);
    p.pt(0, 1, 'lb-pt', 4);
    c.lecture.innerHTML = `${v('y')}(2) = e<sup>2${v('k')}</sup> ≈ ${f2(Math.exp(2 * k))}`;
  }
  verif(r, c, () => {
    const ok = Math.abs(ck.valeur - Math.LN2) < .006;
    return { ok, msg: ok ? `e<sup>2${v('k')}</sup> = 4 donne ${v('k')} = ln 4 / 2 = ln 2 ≈ 0,693.` : `Ici ${v('y')}(2) ≈ ${f2(Math.exp(2 * ck.valeur))}, pas 4.` };
  }, `les solutions sont ${v('y')} = e<sup>${v('k')}${v('x')}</sup> ; résous e<sup>2${v('k')}</sup> = 4 avec ln.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : la période ---------- */
const periode: Defi = (r) => {
  const c = cadre(r, 'Une période de π', `Règle ω pour que ${v('f')}(${v('x')}) = cos(ω${v('x')}) ait π pour plus petite période.`, 'Défi');
  const pi = (x: number) => { const k = Math.round(x / Math.PI * 2); return k === 0 ? '0' : k % 2 ? (k === 1 ? "π/2" : `${k}π/2`) : (k / 2 === 1 ? 'π' : `${k / 2}π`); };
  const p = new Plan(c.scene, { x: [-.3, 2 * Math.PI + .3], y: [-1.6, 1.6], ratio: .45, pasX: Math.PI / 2, pasY: 1, fmtX: pi });
  const cw = curseur(c.ctrl, { nom: 'ω', min: .5, max: 4, pas: .05, val: 1 }, () => dessine());
  function dessine() {
    p.vide();
    p.rect(0, -1.6, Math.PI, 1.6, 'lb-bande');
    p.courbe((x) => Math.cos(cw.valeur * x), 'lb-f');
    c.lecture.innerHTML = `ω = ${f2(cw.valeur)} · période 2π/ω ≈ ${f2(2 * Math.PI / cw.valeur)}`;
  }
  verif(r, c, () => {
    const w = cw.valeur, ok = Math.abs(w - 2) < .01;
    if (ok) return { ok, msg: `2π/ω = π donne ω = 2 : la courbe fait exactement un motif dans la bande.` };
    if (Math.abs(w - 4) < .01) return { ok, msg: `π est bien une période ici, mais la plus petite vaut π/2.` };
    return { ok, msg: `La période vaut 2π/${f2(w)} ≈ ${f2(2 * Math.PI / w)}, pas π ≈ 3,14.` };
  }, 'la période de cos(ω' + v('x') + ') est 2π/ω.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Seconde (physique) : réfraction ---------- */
const refraction30: Defi = (r) => {
  const c = cadre(r, 'Un angle de 30° dans l\'eau', 'La lumière passe de l\'air (n = 1,00) à l\'eau (n = 1,33). Règle l\'angle d\'incidence pour que le rayon réfracté fasse 30° avec la normale. La direction visée est en pointillés verts.', 'Défi');
  const p = new Plan(c.scene, { x: [-1.3, 1.3], y: [-1.1, 1.1], orthonorme: true, ratio: .62, hMax: 420, axes: false, grille: false, etiquettes: false });
  const ci = curseur(c.ctrl, { nom: v('i'), min: 0, max: 85, pas: .5, val: 20, fmt: (x) => nb(x, 1) + '°', cls: 'o' }, () => dessine());
  const rad = (d: number) => d * Math.PI / 180;
  function dessine() {
    p.vide();
    p.rect(p.x0, 0, p.x1, p.y0, 'lb-aplat');
    p.seg(p.x0, 0, p.x1, 0, 'lb-axe');
    p.seg(0, 1.05, 0, -1.05, 'lb-pointille');
    p.seg(0, 0, Math.sin(rad(30)), -Math.cos(rad(30)), 'lb-lim');
    const i = rad(ci.valeur), rr = Math.asin(Math.sin(i) / 1.33);
    p.fleche(-Math.sin(i), Math.cos(i), 0, 0, 'lb-vec lb-vec-t');
    p.fleche(0, 0, Math.sin(rr) * .95, -Math.cos(rr) * .95, 'lb-vec lb-vec-o');
    p.txt(p.x0, .9, 'air', 'lb-et', 10); p.txt(p.x0, -.95, 'eau', 'lb-et', 10);
    c.lecture.innerHTML = `${v('i')} = ${nb(ci.valeur, 1)}°`;
  }
  verif(r, c, () => {
    const rr = Math.asin(Math.sin(rad(ci.valeur)) / 1.33) * 180 / Math.PI, ok = Math.abs(rr - 30) < .4;
    return { ok, msg: ok ? `sin ${v('i')} = 1,33 × sin 30° = 0,665, donc ${v('i')} ≈ 41,7°.` : `Avec ${v('i')} = ${nb(ci.valeur, 1)}°, le rayon réfracté fait ${nb(rr, 1)}°.` };
  }, `loi de Snell-Descartes : 1,00 × sin ${v('i')} = 1,33 × sin 30°.`);
  p.quandRedessiner(dessine);
  dessine();
};

/* ---------- Terminale (physique) : constante de temps ---------- */
const rcTau: Defi = (r) => {
  const c = cadre(r, 'Charger au bon rythme', `Le condensateur a une capacité ${v('C')} = 100 µF et se charge sous ${v('E')} = 5 V. Règle ${v('R')} pour que la tension atteigne 63 % de ${v('E')} à ${v('t')} = 2 ms.`, 'Défi');
  const p = new Plan(c.scene, { x: [0, 12], y: [0, 5.6], ratio: .55, pasX: 2, pasY: 1, nomX: 't (ms)', nomY: 'u (V)' });
  const cr = curseur(c.ctrl, { nom: v('R'), min: 5, max: 60, pas: 1, val: 40, fmt: (x) => x + ' Ω', cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const tau = cr.valeur * 100e-6 * 1000;
    p.seg(0, 5, 12, 5, 'lb-pointille');
    p.seg(0, 3.15, 2, 3.15, 'lb-lim'); p.seg(2, 0, 2, 3.15, 'lb-lim');
    p.courbe((t) => 5 * (1 - Math.exp(-t / tau)), 'lb-f', 0);
    c.lecture.innerHTML = `${v('R')} = ${cr.valeur} Ω · ${v('u')}(2 ms) ≈ ${f2(5 * (1 - Math.exp(-2 / tau)))} V`;
  }
  verif(r, c, () => {
    const ok = cr.valeur === 20;
    return { ok, msg: ok ? `τ = ${v('RC')} = 20 × 100 × 10<sup>−6</sup> = 2 ms : à ${v('t')} = τ, la tension vaut 63 % de ${v('E')}.` : `τ = ${v('RC')} = ${nb(cr.valeur * .1, 1)} ms, il faut 2 ms.` };
  }, `63 % de ${v('E')} est atteint à ${v('t')} = τ = ${v('RC')}.`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale (physique) : demi-vie ---------- */
const demiVie: Defi = (r) => {
  const c = cadre(r, 'Plus que 12,5 %', 'L\'iode 131 a une demi-vie de 8 jours. Place le point de la courbe où il ne reste que 12,5 % des noyaux de départ.', 'Défi');
  const p = new Plan(c.scene, { x: [0, 42], y: [0, 105], ratio: .55, pasX: 8, pasY: 25, nomX: 't (jours)', nomY: 'N/N₀ (%)' });
  let t = 4;
  const N = (x: number) => 100 * Math.pow(.5, x / 8);
  const P = p.poignee((x) => { t = pas(borne(x, 0, 42), .5); dessine(); }, 'lb-poignee', 'Point de la courbe');
  function dessine() {
    p.vide();
    p.courbe(N, 'lb-f', 0);
    p.seg(0, 12.5, 42, 12.5, 'lb-pointille');
    p.seg(t, 0, t, N(t), 'lb-pointille');
    P.place(t, N(t));
    c.lecture.innerHTML = `${v('t')} = ${nb(t, 1)} jours`;
  }
  verif(r, c, () => {
    const ok = Math.abs(t - 24) < .6;
    return { ok, msg: ok ? `12,5 % = 100 % ÷ 2 ÷ 2 ÷ 2 : trois demi-vies, soit 24 jours.` : `À ${nb(t, 1)} jours, il reste ${nb(N(t), 1)} % des noyaux.` };
  }, 'à chaque demi-vie, le nombre de noyaux est divisé par 2.');
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Première (physique) : énergie mécanique ---------- */
const hauteurVitesse: Defi = (r) => {
  const c = cadre(r, 'Arriver à 6 m/s', `Une bille glisse sans frottement le long d'une rampe. Règle la hauteur de départ ${v('h')} pour qu'elle arrive en bas à 6,0 m/s (${v('g')} = 9,81 N/kg).`, 'Défi');
  const p = new Plan(c.scene, { x: [-.3, 5], y: [-.2, 3.2], orthonorme: true, ratio: .55, hMax: 360, pasX: 1, pasY: .5, nomY: 'h (m)' });
  const ch = curseur(c.ctrl, { nom: v('h'), min: .2, max: 3, pas: .05, val: 1, fmt: (x) => nb(x, 2) + ' m', cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const h = ch.valeur;
    p.poly([[0, 0], [0, h], [4, 0]], 'lb-aplat');
    p.seg(0, h, 4, 0, 'lb-f');
    p.pt(.08, h + .1, 'lb-pt lb-pt-o', 8);
    c.lecture.innerHTML = `${v('h')} = ${nb(h, 2)} m`;
  }
  verif(r, c, () => {
    const vit = Math.sqrt(2 * 9.81 * ch.valeur), ok = Math.abs(ch.valeur - 1.835) < .04;
    return { ok, msg: ok ? `${v('mgh')} = ½${v('mv')}² donne ${v('h')} = ${v('v')}²/(2${v('g')}) = 36/19,62 ≈ 1,83 m. La masse ne compte pas.` : `De ${nb(ch.valeur, 2)} m, la bille arrive à ${nb(vit, 1)} m/s.` };
  }, `l'énergie mécanique se conserve : ${v('mgh')} = ½${v('mv')}².`);
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale (physique) : orbite géostationnaire ---------- */
const geostationnaire: Defi = (r) => {
  const c = cadre(r, 'Rester au-dessus du même point', `Règle l'altitude ${v('h')} du satellite pour que sa période soit d'un jour sidéral (23 h 56 min). ${v('R')}<sub>T</sub> = 6 371 km, ${v('GM')}<sub>T</sub> = 3,986 × 10<sup>14</sup> m³/s².`, 'Défi');
  const p = new Plan(c.scene, { x: [-50, 50], y: [-46, 46], orthonorme: true, ratio: .7, hMax: 440, axes: false, grille: false, etiquettes: false });
  const chh = curseur(c.ctrl, { nom: v('h'), min: 400, max: 42000, pas: 100, val: 20000, fmt: (x) => nb(x, 0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' km', cls: 'o' }, () => dessine());
  const T = (h: number) => 2 * Math.PI * Math.sqrt(((6371 + h) * 1e3) ** 3 / 3.986e14) / 3600;
  function dessine() {
    p.vide();
    const rr = (6371 + chh.valeur) / 1000;
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X(6.371) - p.X(0), class: 'lb-aplat' });
    p.e('circle', { cx: p.X(0), cy: p.Y(0), r: p.X(rr) - p.X(0), class: 'lb-f lb-mince' });
    p.txt(0, 0, 'Terre', 'lb-et', 0, 4, 'middle');
    p.pt(rr * Math.cos(.6), rr * Math.sin(.6), 'lb-pt lb-pt-o', 6);
    const t = T(chh.valeur), hh = Math.floor(t), mm = Math.round((t - hh) * 60);
    c.lecture.innerHTML = `période : ${hh} h ${String(mm).padStart(2, '0')} min`;
  }
  verif(r, c, () => {
    const ok = Math.abs(T(chh.valeur) - 23.934) < .1;
    return { ok, msg: ok ? `Vers 35 800 km d'altitude (${v('r')} ≈ 42 160 km), le satellite tourne aussi vite que la Terre : il reste au-dessus du même point.` : `Le satellite fait un tour en ${f2(T(chh.valeur))} h, il faut 23,93 h.` };
  }, `troisième loi de Kepler : ${v('T')}² / ${v('r')}³ = 4π² / ${v('GM')}<sub>T</sub>. Plus il est haut, plus il est lent.`);
  p.quandRedessiner(dessine);
  dessine();
};

export const LABOS2: Record<string, Defi> = {
  'defi-droite': droiteImposee, 'defi-parallelogramme': parallelogramme, 'defi-racine-droite': racineDroite,
  'defi-evolution': evolutionReciproque, 'defi-moyenne': moyenneCible, 'defi-asymptote': asymptote,
  'defi-edo': edoPoint, 'defi-periode': periode, 'defi-refraction': refraction30, 'defi-rc': rcTau,
  'defi-demi-vie': demiVie, 'defi-energie': hauteurVitesse, 'defi-geostationnaire': geostationnaire,
};
