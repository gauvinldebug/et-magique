// Encadrés interactifs des cours de SVT et de l'enseignement scientifique.
import { Plan, cadre, curseur, bouton, choix, nb, v, hasard } from './outils';

type Labo = (r: HTMLElement) => void;

/* ---------- Première : activité d'une enzyme ---------- */
const enzyme: Labo = (r) => {
  const c = cadre(r, 'Le casse-noix', 'Choisis le facteur à faire varier, puis bouge les curseurs. Le point montre la vitesse de la réaction dans les conditions choisies.');
  const p = new Plan(c.scene, { x: [0, 10], y: [0, 105], ratio: .55, pasX: 2, pasY: 25, nomX: '[S] (mmol/L)', nomY: 'vitesse (%)', marge: [12, 14, 26, 36] });
  let mode = 0;
  choix(c.ctrl, ['Substrat', 'Température', 'pH'], 0, (i) => { mode = i; tout(); });
  const S = curseur(c.ctrl, { nom: '[S]', min: 0, max: 10, pas: .1, val: 3, fmt: (x) => nb(x, 1) + ' mmol/L' }, () => dessine());
  const T = curseur(c.ctrl, { nom: v('θ'), min: 0, max: 70, pas: 1, val: 37, fmt: (x) => nb(x, 0) + ' °C', cls: 'i' }, () => dessine());
  const H = curseur(c.ctrl, { nom: 'pH', min: 0, max: 14, pas: .1, val: 7, fmt: (x) => nb(x, 1) }, () => dessine());
  const Km = 1.5;
  const fT = (t: number) => t <= 37 ? Math.exp(-(((t - 37) / 16) ** 2)) : Math.exp(-(((t - 37) / 7) ** 2));
  const fH = (h: number) => Math.exp(-(((h - 7) / 1.6) ** 2));
  const fS = (s: number) => s / (Km + s);
  const vit = (s: number, t: number, h: number) => 100 * fS(s) / fS(10) * fT(t) * fH(h);
  const axes: [number, number, number, string][] = [[10, 2, 0, '[S] (mmol/L)'], [70, 10, 0, 'θ (°C)'], [14, 2, 0, 'pH']];
  function tout() {
    const [max, pas, , nom] = axes[mode];
    p.o.pasX = pas; p.o.nomX = nom; p.domaine([0, max], [0, 105]);
    p.repere(); dessine();
  }
  function dessine() {
    p.vide();
    const s = S.valeur, t = T.valeur, h = H.valeur;
    const f = mode === 0 ? (x: number) => vit(x, t, h) : mode === 1 ? (x: number) => vit(s, x, h) : (x: number) => vit(s, t, x);
    const x = [s, t, h][mode];
    p.courbe(f, 'lb-f', p.x0, p.x1);
    p.seg(x, 0, x, f(x), 'lb-pointille');
    p.pt(x, f(x), 'lb-pt lb-pt-t', 6);
    let note: string;
    if (t > 50) note = `au-delà de 50 °C, la protéine se <b class="p">dénature</b> : sa forme change, le site actif ne reconnaît plus le substrat, et c'est irréversible.`;
    else if (t < 10) note = `au froid, les molécules bougent peu : les rencontres enzyme-substrat sont rares, mais l'enzyme n'est pas abîmée.`;
    else if (Math.abs(h - 7) > 3) note = `un pH éloigné de l'optimum modifie les charges du site actif : le substrat s'y fixe mal.`;
    else if (mode === 0 && s > 6) note = `presque tous les sites actifs sont occupés : ajouter du substrat ne sert plus à grand-chose, la vitesse plafonne.`;
    else note = `conditions proches de l'optimum (37 °C, pH 7 pour cette enzyme).`;
    c.lecture.innerHTML = `vitesse : <b class="t">${nb(vit(s, t, h), 0)} %</b> de la vitesse maximale &nbsp; ${note}`;
  }
  p.quandRedessiner(tout);
  tout();
};

/* ---------- Terminale : dérive génétique ---------- */
const derive: Labo = (r) => {
  const c = cadre(r, 'Le sac de billes', 'Cinq populations partent de la même fréquence d\'allèle. Chaque génération, on tire des billes au hasard dans le sac des parents. Change la taille des populations et relance : seul le hasard décide.');
  const G = 100;
  const p = new Plan(c.scene, { x: [0, G], y: [0, 1], ratio: .55, pasX: 20, pasY: .25, nomX: 'générations', nomY: 'fréquence', marge: [12, 14, 26, 40] });
  const tailles = [10, 50, 200, 1000];
  let ti = 1;
  choix(c.ctrl, tailles.map((n) => n + ' individus'), ti, (i) => { ti = i; calcule(); dessine(); });
  const p0 = curseur(c.ctrl, { nom: v('f') + '<sub>0</sub>', min: .1, max: .9, pas: .05, val: .5, fmt: (x) => nb(x, 2), cls: 'i' }, () => { calcule(); dessine(); });
  let graine = 11;
  bouton(c.ctrl, 'Relancer le hasard', () => { graine = (graine * 7919 + 17) % 100003; calcule(); dessine(); }, 'lb-b-pale');
  let pops: number[][] = [];
  function calcule() {
    const a = hasard(graine), N = 2 * tailles[ti];
    pops = Array.from({ length: 5 }, () => {
      const f = [p0.valeur];
      for (let g = 1; g <= G; g++) {
        const q = f[g - 1];
        let k: number;
        if (N <= 400) { k = 0; for (let i = 0; i < N; i++) if (a() < q) k++; }
        else { const z = Math.sqrt(-2 * Math.log(1 - a())) * Math.cos(2 * Math.PI * a()); k = Math.round(N * q + z * Math.sqrt(N * q * (1 - q))); }
        f.push(Math.min(1, Math.max(0, k / N)));
      }
      return f;
    });
  }
  const cls = ['lb-f', 'lb-f lb-f-i', 'lb-marches', 'lb-f lb-f-pale', 'lb-f2'];
  function dessine() {
    p.vide();
    p.seg(0, p0.valeur, G, p0.valeur, 'lb-pointille');
    pops.forEach((f, i) => p.poly(f.map((y, g) => [g, y] as [number, number]), cls[i], false));
    const fixe = pops.filter((f) => f[G] === 1).length, perdu = pops.filter((f) => f[G] === 0).length;
    c.lecture.innerHTML = `après ${G} générations : allèle <b class="o">fixé</b> dans ${fixe} population${fixe > 1 ? 's' : ''}, <b class="p">disparu</b> dans ${perdu} &nbsp; ${tailles[ti] <= 50 ? 'petite population : la dérive est forte.' : tailles[ti] >= 1000 ? 'grande population : les fréquences bougent à peine.' : 'population moyenne : les courbes s\'écartent lentement.'}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  calcule(); p.repere(); dessine();
};

/* ---------- Terminale : datation absolue ---------- */
const datation: Labo = (r) => {
  const c = cadre(r, 'Le sablier atomique', 'Choisis un couple père-fils et fais avancer le temps. Le rapport fils/père mesuré dans la roche suffit à retrouver son âge.');
  const couples = [
    { nom: 'Carbone 14', pere: '¹⁴C', fils: '¹⁴N', t: 5730, u: 'ans', c: 'ans' },
    { nom: 'Potassium-argon', pere: '⁴⁰K', fils: '⁴⁰Ar', t: 1.25, u: 'milliards d\'années', c: 'Ga' },
    { nom: 'Uranium-plomb', pere: '²³⁸U', fils: '²⁰⁶Pb', t: 4.47, u: 'milliards d\'années', c: 'Ga' },
  ];
  let ci = 1;
  const p = new Plan(c.scene, { x: [0, 5], y: [0, 105], ratio: .55, pasX: 1, pasY: 25, nomX: 't / t½', nomY: 'atomes (%)', marge: [12, 14, 26, 36] });
  choix(c.ctrl, couples.map((x) => x.nom), ci, (i) => { ci = i; dessine(); });
  const t = curseur(c.ctrl, { nom: v('t'), min: 0, max: 5, pas: .05, val: 1.5, fmt: (x) => nb(x * couples[ci].t, couples[ci].t > 100 ? 0 : 2) + ' ' + couples[ci].c, cls: 'i' }, () => dessine());
  function dessine() {
    p.vide();
    const k = couples[ci], x = t.valeur;
    t.valeur = x; // met à jour l'unité affichée
    p.courbe((u) => 100 * 2 ** -u, 'lb-f', 0, 5);
    p.courbe((u) => 100 * (1 - 2 ** -u), 'lb-f lb-f-i', 0, 5);
    p.txt(.1, 96, k.pere + ' (père)', 'lb-et lb-et-t', 4, 0);
    p.txt(4.9, 92, k.fils + ' (fils)', 'lb-et lb-et-i', 0, 0, 'end');
    const P = 100 * 2 ** -x, F = 100 - P;
    p.seg(x, 0, x, 100, 'lb-rang');
    p.pt(x, P, 'lb-pt lb-pt-t', 5); p.pt(x, F, 'lb-pt lb-pt-i', 5);
    const rap = F / P;
    c.lecture.innerHTML = `rapport mesuré ${k.fils}/${k.pere} = <b class="i">${nb(rap, 2)}</b> &nbsp; âge : ${v('t')} = ln(1 + ${nb(rap, 2)}) / λ = <b class="o">${nb(x * k.t, k.t > 100 ? 0 : 2)} ${k.u}</b> (${nb(x, 2)} demi-vies)${x > 4.5 ? ' &nbsp; il reste trop peu d\'atomes pères : la mesure devient imprécise, il faut un couple à plus longue demi-vie.' : ''}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Terminale : brassage à la méiose ---------- */
const meiose: Labo = (r) => {
  const c = cadre(r, 'Le jeu de cartes', 'Un individu AaBb fabrique des gamètes. Choisis si les deux gènes sont sur des chromosomes différents ou sur le même, puis tire des gamètes.');
  const p = new Plan(c.scene, { x: [0, 4], y: [0, 55], ratio: .5, pasX: 1, pasY: 10, etiquettes: false, nomY: '% des gamètes', marge: [12, 14, 30, 36] });
  let lies = false;
  choix(c.ctrl, ['Gènes indépendants', 'Gènes liés'], 0, (i) => { lies = i === 1; tirage = null; dessine(); });
  const rec = curseur(c.ctrl, { nom: 'recombinés', min: 0, max: 50, pas: 1, val: 16, fmt: (x) => nb(x, 0) + ' %', cls: 'i' }, () => { tirage = null; dessine(); });
  let tirage: number[] | null = null, graine = 5;
  bouton(c.ctrl, 'Tirer 200 gamètes', () => {
    graine = (graine * 7919 + 3) % 100003;
    const a = hasard(graine), th = theorie();
    tirage = [0, 0, 0, 0];
    for (let i = 0; i < 200; i++) { let u = a() * 100, k = 0; while (k < 3 && u > th[k]) { u -= th[k]; k++; } tirage[k]++; }
    dessine();
  }, 'lb-b-pale');
  const noms = ['AB', 'ab', 'Ab', 'aB'];
  const theorie = () => lies ? [(100 - rec.valeur) / 2, (100 - rec.valeur) / 2, rec.valeur / 2, rec.valeur / 2] : [25, 25, 25, 25];
  function dessine() {
    p.vide();
    const th = theorie();
    for (let k = 10; k <= 50; k += 10) p.txt(0, k, String(k), 'lb-grad', -6, 4, 'end');
    th.forEach((y, i) => {
      p.rect(i + .18, 0, i + .82, y, i < 2 ? 'lb-bar lb-bar-t' : 'lb-bar lb-bar-i');
      p.txt(i + .5, 0, noms[i], 'lb-et', 0, 18, 'middle');
      if (tirage) { const yy = tirage[i] / 2; p.seg(i + .1, yy, i + .9, yy, 'lb-tan'); p.txt(i + .5, yy, String(tirage[i]), 'lb-et', 0, -6, 'middle'); }
    });
    const parentaux = th[0] + th[1];
    c.lecture.innerHTML = lies
      ? `gamètes parentaux (AB, ab) : <b class="t">${nb(parentaux, 0)} %</b> &nbsp; recombinés (Ab, aB) : <b class="i">${nb(100 - parentaux, 0)} %</b> &nbsp; les recombinés n'existent que grâce au crossing-over, en prophase I. Plus les gènes sont éloignés, plus il est fréquent.`
      : `4 types de gamètes en proportions égales (25 % chacun) : à l'anaphase I, chaque paire de chromosomes se sépare au hasard. C'est le brassage interchromosomique.${tirage ? ' Le tirage s\'écarte un peu de 25 % : c\'est le hasard de l\'échantillon.' : ''}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Enseignement scientifique 1re : photosynthèse ---------- */
const photosynthese: Labo = (r) => {
  const c = cadre(r, 'La batterie au soleil', 'Règle l\'éclairement et le CO₂ disponible. Sous la ligne zéro, la plante respire plus qu\'elle ne produit : elle consomme du dioxygène.');
  const p = new Plan(c.scene, { x: [0, 100], y: [-20, 100], ratio: .55, pasX: 20, pasY: 20, nomX: 'éclairement (%)', nomY: 'O₂ produit', marge: [12, 14, 26, 36] });
  const co2 = [{ n: 'CO₂ faible', m: 45 }, { n: 'CO₂ normal', m: 75 }, { n: 'CO₂ riche', m: 100 }];
  let ci = 1;
  choix(c.ctrl, co2.map((x) => x.n), ci, (i) => { ci = i; dessine(); });
  const L = curseur(c.ctrl, { nom: 'lumière', min: 0, max: 100, pas: 1, val: 40, fmt: (x) => nb(x, 0) + ' %' }, () => dessine());
  const resp = 12;
  const f = (x: number) => (co2[ci].m + resp) * x / (x + 18) - resp;
  function dessine() {
    p.vide();
    p.seg(0, 0, 100, 0, 'lb-axe');
    co2.forEach((k, i) => { if (i !== ci) p.courbe((x) => (k.m + resp) * x / (x + 18) - resp, 'lb-f2', 0, 100); });
    p.courbe(f, 'lb-f', 0, 100);
    const x = L.valeur, y = f(x);
    const comp = 18 * resp / (co2[ci].m);
    p.pt(comp, 0, 'lb-pt lb-pt-p', 4);
    p.pt(x, y, 'lb-pt lb-pt-t', 6);
    c.lecture.innerHTML = y < 0
      ? `bilan : <b class="p">la plante consomme du O₂</b> : la respiration l'emporte sur la photosynthèse. Point de compensation vers ${nb(comp, 0)} % d'éclairement.`
      : `bilan : <b class="o">+${nb(y, 0)}</b> unités de O₂ rejetées &nbsp; ${x > 70 ? 'la lumière n\'est plus le facteur limitant : seul plus de CO₂ ferait monter le plateau.' : 'ici, c\'est la lumière qui limite la production.'}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

/* ---------- Enseignement scientifique 1re : bilan radiatif ---------- */
const bilanRadiatif: Labo = (r) => {
  const c = cadre(r, 'La baignoire à l\'équilibre', 'Change l\'albédo (la part de lumière renvoyée) et la part de l\'infrarouge retenue par les gaz à effet de serre (curseur « serre »). La courbe donne la température moyenne d\'équilibre.');
  const p = new Plan(c.scene, { x: [0, .8], y: [-80, 40], ratio: .55, pasX: .1, pasY: 20, nomX: 'albédo', nomY: 'θ (°C)', fmtX: (x) => nb(x, 1), marge: [12, 14, 26, 40] });
  const A = curseur(c.ctrl, { nom: 'albédo', min: 0, max: .8, pas: .01, val: .3, fmt: (x) => nb(x, 2) }, () => dessine());
  const E = curseur(c.ctrl, { nom: 'serre', min: 0, max: 1, pas: .01, val: .78, fmt: (x) => nb(x * 100, 0) + ' %', cls: 'i' }, () => dessine());
  const S = 1361, sig = 5.67e-8;
  const temp = (a: number, e: number) => (S * (1 - a) / (4 * sig * (1 - e / 2))) ** .25 - 273.15;
  function dessine() {
    p.vide();
    const a = A.valeur, e = E.valeur, th = temp(a, e);
    p.courbe((x) => temp(x, 0), 'lb-f2', 0, .8);
    p.courbe((x) => temp(x, e), 'lb-f', 0, .8);
    p.seg(0, 15, .8, 15, 'lb-pointille');
    p.txt(.79, 15, 'Terre actuelle : 15 °C', 'lb-et', 0, -6, 'end');
    p.pt(a, th, 'lb-pt lb-pt-t', 6);
    c.lecture.innerHTML = `température d'équilibre : <b class="t">${nb(th, 0)} °C</b> &nbsp; sans effet de serre : ${nb(temp(a, 0), 0)} °C &nbsp; ${a > .5 ? 'une Terre couverte de glace renvoie la lumière et se refroidit encore : c\'est une rétroaction positive.' : e < .3 ? 'sans atmosphère qui retient l\'infrarouge, la Terre serait gelée.' : 'les gaz à effet de serre renvoient vers le sol une partie de l\'infrarouge émis par la Terre.'}`;
  }
  p.quandRedessiner(() => { p.repere(); dessine(); });
  p.repere(); dessine();
};

export const LABOS: Record<string, Labo> = { enzyme, derive, datation, meiose, photosynthese, 'bilan-radiatif': bilanRadiatif };
