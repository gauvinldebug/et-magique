// Outils communs aux encadrés interactifs des cours (« Manipule »).
// Tout est dessiné en SVG à la taille réelle de l'encadré : le texte garde la même taille
// sur téléphone et sur ordinateur. Les couleurs viennent des variables CSS du site,
// donc le mode sombre suit tout seul.

const NS = 'http://www.w3.org/2000/svg';

/** Nombre à la française : virgule, vrai signe moins, zéros inutiles retirés. */
export function nb(x: number, d = 2): string {
  if (!isFinite(x)) return x > 0 ? '+∞' : x < 0 ? '−∞' : '?';
  let s = x.toFixed(d);
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  if (/^-0$/.test(s)) s = '0';
  const neg = s.startsWith('-');
  const [ent, dec] = s.replace('-', '').split('.');
  // espace fine entre les milliers, seulement à partir de 10 000 (usage français)
  const e = ent.length > 4 ? ent.replace(/\B(?=(\d{3})+$)/g, ' ') : ent;
  return (neg ? '−' : '') + e + (dec ? ',' + dec : '');
}

/** Lettre mathématique en italique (comme dans KaTeX). */
export const v = (s: string, cls = '') => `<i class="lb-v ${cls}">${s}</i>`;

export function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, html?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

export interface Cadre {
  racine: HTMLElement;
  scene: HTMLElement;
  lecture: HTMLElement;
  ctrl: HTMLElement;
}

/** Monte la structure de l'encadré : titre, consigne, scène, lecture des valeurs, commandes. */
export function cadre(racine: HTMLElement, titre: string, consigne: string): Cadre {
  racine.innerHTML = '';
  const tete = el('div', 'lb-tete');
  tete.append(el('span', 'lb-tag', 'Manipule'), el('p', 'lb-titre', titre));
  const scene = el('div', 'lb-scene');
  const lecture = el('div', 'lb-lecture');
  lecture.setAttribute('aria-live', 'polite');
  const ctrl = el('div', 'lb-ctrl');
  racine.append(tete, el('p', 'lb-consigne', consigne), scene, lecture, ctrl);
  return { racine, scene, lecture, ctrl };
}

/* ---------- Commandes ---------- */

export interface Curseur { input: HTMLInputElement; get valeur(): number; set valeur(x: number); }

export function curseur(
  parent: HTMLElement,
  o: { nom: string; min: number; max: number; pas: number; val: number; fmt?: (x: number) => string; cls?: string },
  quand: () => void,
): Curseur {
  const lab = el('label', 'lb-c ' + (o.cls ?? ''));
  const nom = el('span', 'lb-cn', o.nom);
  const input = el('input');
  input.type = 'range';
  input.min = String(o.min); input.max = String(o.max); input.step = String(o.pas); input.value = String(o.val);
  const out = el('output', 'lb-cv');
  const fmt = o.fmt ?? ((x: number) => nb(x));
  const maj = () => {
    out.textContent = fmt(+input.value);
    const p = (+input.value - o.min) / (o.max - o.min || 1);
    input.style.setProperty('--r', (p * 100).toFixed(2) + '%');
  };
  input.addEventListener('input', () => { maj(); quand(); });
  maj();
  lab.append(nom, input, out);
  parent.append(lab);
  return {
    input,
    get valeur() { return +input.value; },
    set valeur(x: number) { input.value = String(x); maj(); },
  };
}

export function bouton(parent: HTMLElement, texte: string, quand: () => void, cls = ''): HTMLButtonElement {
  const b = el('button', 'lb-b ' + cls, texte);
  b.type = 'button';
  b.addEventListener('click', quand);
  parent.append(b);
  return b;
}

/** Bouton à deux positions (enfoncé / relâché). */
export function bascule(parent: HTMLElement, texte: string, actif: boolean, quand: (on: boolean) => void, cls = ''): { get on(): boolean; set on(x: boolean); b: HTMLButtonElement } {
  const b = bouton(parent, texte, () => { etat = !etat; b.setAttribute('aria-pressed', String(etat)); quand(etat); }, 'lb-bas ' + cls);
  let etat = actif;
  b.setAttribute('aria-pressed', String(etat));
  return { b, get on() { return etat; }, set on(x: boolean) { etat = x; b.setAttribute('aria-pressed', String(x)); } };
}

/** Choix exclusif (pastilles). */
export function choix(parent: HTMLElement, options: string[], i0: number, quand: (i: number) => void): { get i(): number } {
  const g = el('div', 'lb-choix');
  g.setAttribute('role', 'group');
  let i = i0;
  const bs = options.map((t, k) => {
    const b = bouton(g, t, () => { i = k; bs.forEach((x, j) => x.setAttribute('aria-pressed', String(j === k))); quand(k); });
    b.setAttribute('aria-pressed', String(k === i0));
    return b;
  });
  parent.append(g);
  return { get i() { return i; } };
}

/* ---------- Le repère ---------- */

export interface OptionsPlan {
  x: [number, number];
  y: [number, number];
  /** hauteur / largeur */
  ratio?: number;
  /** garder le même ratio sur téléphone */
  ratioFixe?: boolean;
  hMin?: number;
  hMax?: number;
  /** même unité sur les deux axes (géométrie) : la plage y est recalculée autour de son centre */
  orthonorme?: boolean;
  pasX?: number;
  pasY?: number;
  grille?: boolean;
  axes?: boolean;
  etiquettes?: boolean;
  nomX?: string;
  nomY?: string;
  fmtX?: (x: number) => string;
  fmtY?: (y: number) => string;
  marge?: [number, number, number, number]; // haut, droite, bas, gauche
}

type Attrs = Record<string, string | number | undefined>;

export class Plan {
  svg: SVGSVGElement;
  fond: SVGGElement;
  couche: SVGGElement;
  dessus: SVGGElement;
  W = 600; H = 360;
  o: OptionsPlan;
  x0 = 0; x1 = 1; y0 = 0; y1 = 1;
  private redessine: () => void = () => {};
  private clipId = 'lb' + Math.random().toString(36).slice(2, 9);
  private clipRect!: SVGRectElement;

  constructor(parent: HTMLElement, o: OptionsPlan) {
    this.o = o;
    this.svg = document.createElementNS(NS, 'svg');
    this.svg.setAttribute('class', 'lb-svg');
    this.svg.setAttribute('role', 'img');
    this.fond = this.g('lb-fond');
    this.couche = this.g('lb-couche');
    this.dessus = this.g('lb-dessus');
    const defs = document.createElementNS(NS, 'defs');
    const cp = document.createElementNS(NS, 'clipPath');
    cp.id = this.clipId;
    this.clipRect = document.createElementNS(NS, 'rect');
    cp.append(this.clipRect); defs.append(cp);
    this.svg.append(defs, this.fond, this.couche, this.dessus);
    parent.append(this.svg);
    this.mesure();
    let larg = 0;
    new ResizeObserver(() => {
      const w = Math.round(parent.clientWidth);
      if (w && w !== larg) { larg = w; this.mesure(); this.redessine(); }
    }).observe(parent);
  }

  /** La fonction qui redessine tout ; appelée aussi quand l'encadré change de taille. */
  quandRedessiner(f: () => void) { this.redessine = f; }

  private g(cls: string) { const g = document.createElementNS(NS, 'g'); g.setAttribute('class', cls); return g; }

  mesure() {
    const w = Math.max(260, Math.round((this.svg.parentElement?.clientWidth || 600)));
    // sur téléphone, la figure gagne en hauteur pour rester lisible
    const ratio = w < 520 && !this.o.ratioFixe ? Math.max(this.o.ratio ?? .6, .82) : this.o.ratio ?? .6;
    const h = Math.round(Math.min(this.o.hMax ?? 440, Math.max(this.o.hMin ?? 230, w * ratio)));
    this.W = w; this.H = h;
    this.svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    this.svg.setAttribute('width', String(w));
    this.svg.setAttribute('height', String(h));
    this.domaine(this.o.x, this.o.y);
    const [mh, md, mb, mg] = this.m;
    this.clipRect.setAttribute('x', String(mg)); this.clipRect.setAttribute('y', String(mh));
    this.clipRect.setAttribute('width', String(w - mg - md)); this.clipRect.setAttribute('height', String(h - mh - mb));
  }

  /** Coupe un tracé au bord de la zone du graphique. */
  coupe<T extends SVGElement>(n: T): T { n.setAttribute('clip-path', `url(#${this.clipId})`); return n; }

  get m() { return this.o.marge ?? [12, 14, 26, 34]; }

  domaine(x: [number, number], y: [number, number]) {
    this.o.x = x; this.o.y = y;
    [this.x0, this.x1] = x;
    [this.y0, this.y1] = y;
    if (this.o.orthonorme) {
      const [mh, md, mb, mg] = this.m;
      // même échelle sur les deux axes, choisie pour que les deux plages demandées tiennent
      const lw = this.W - mg - md, lh = this.H - mh - mb;
      const k = Math.min(lw / (x[1] - x[0]), lh / (y[1] - y[0]));
      const cx = (x[0] + x[1]) / 2, cy = (y[0] + y[1]) / 2;
      this.x0 = cx - lw / k / 2; this.x1 = cx + lw / k / 2;
      this.y0 = cy - lh / k / 2; this.y1 = cy + lh / k / 2;
    }
  }

  X = (x: number) => { const [, md, , mg] = this.m; return mg + (x - this.x0) / (this.x1 - this.x0) * (this.W - mg - md); };
  Y = (y: number) => { const [mh, , mb] = this.m; return this.H - mb - (y - this.y0) / (this.y1 - this.y0) * (this.H - mh - mb); };
  invX = (px: number) => { const [, md, , mg] = this.m; return this.x0 + (px - mg) / (this.W - mg - md) * (this.x1 - this.x0); };
  invY = (py: number) => { const [mh, , mb] = this.m; return this.y0 + (this.H - mb - py) / (this.H - mh - mb) * (this.y1 - this.y0); };

  /** Crée un élément SVG. */
  e(tag: string, a: Attrs, parent: SVGElement = this.couche, texte?: string): SVGElement {
    const n = document.createElementNS(NS, tag) as SVGElement;
    for (const k in a) if (a[k] !== undefined) n.setAttribute(k, String(a[k]));
    if (texte != null) n.textContent = texte;
    parent.append(n);
    return n;
  }

  vide() { this.couche.replaceChildren(); }

  /** Grille, axes et graduations. */
  repere() {
    this.fond.replaceChildren();
    const { grille = true, axes = true, etiquettes = true } = this.o;
    const pasX = this.o.pasX ?? pasAuto(this.x1 - this.x0, this.W / 70);
    const pasY = this.o.pasY ?? pasAuto(this.y1 - this.y0, this.H / 50);
    const [mh, md, mb, mg] = this.m;
    const fx = this.o.fmtX ?? ((x: number) => nb(x, 3));
    const fy = this.o.fmtY ?? ((y: number) => nb(y, 3));
    const ax = Math.min(Math.max(0, this.y0), this.y1); // ordonnée de l'axe des abscisses
    const ay = Math.min(Math.max(0, this.x0), this.x1);
    for (let x = Math.ceil(this.x0 / pasX) * pasX; x <= this.x1 + 1e-9; x += pasX) {
      const px = this.X(x);
      if (grille) this.e('line', { x1: px, x2: px, y1: mh, y2: this.H - mb, class: 'lb-grille' }, this.fond);
      if (etiquettes && Math.abs(x) > 1e-9 && this.X(x) > mg + 4) this.e('text', { x: px, y: Math.min(this.Y(ax) + 16, this.H - 6), class: 'lb-grad', 'text-anchor': 'middle' }, this.fond, fx(x));
    }
    for (let y = Math.ceil(this.y0 / pasY) * pasY; y <= this.y1 + 1e-9; y += pasY) {
      const py = this.Y(y);
      if (grille) this.e('line', { x1: mg, x2: this.W - md, y1: py, y2: py, class: 'lb-grille' }, this.fond);
      if (etiquettes && Math.abs(y) > 1e-9) this.e('text', { x: Math.max(this.X(ay) - 6, mg - 4), y: py + 4, class: 'lb-grad', 'text-anchor': 'end' }, this.fond, fy(y));
    }
    if (axes) {
      this.e('line', { x1: mg, x2: this.W - md, y1: this.Y(ax), y2: this.Y(ax), class: 'lb-axe' }, this.fond);
      this.e('line', { x1: this.X(ay), x2: this.X(ay), y1: mh, y2: this.H - mb, class: 'lb-axe' }, this.fond);
      if (this.o.nomX) this.e('text', { x: this.W - md, y: this.Y(ax) - 7, class: 'lb-nom', 'text-anchor': 'end' }, this.fond, this.o.nomX);
      if (this.o.nomY) this.e('text', { x: this.X(ay) + 7, y: mh + 12, class: 'lb-nom' }, this.fond, this.o.nomY);
      if (etiquettes && this.x0 < 0 && this.y0 < 0) this.e('text', { x: this.X(0) - 6, y: this.Y(0) + 16, class: 'lb-grad', 'text-anchor': 'end' }, this.fond, '0');
    }
  }

  /** Courbe d'une fonction, coupée là où elle n'est pas définie ou saute. */
  courbe(f: (x: number) => number, cls: string, de = this.x0, a = this.x1, parent?: SVGElement) {
    const n = Math.max(80, Math.round(Math.abs(this.X(a) - this.X(de)) / 2));
    let d = '', levé = true, py0 = 0;
    const haut = this.Y(this.y1) - 2000, bas = this.Y(this.y0) + 2000;
    for (let i = 0; i <= n; i++) {
      const x = de + (a - de) * i / n;
      const y = f(x);
      if (!isFinite(y)) { levé = true; continue; }
      let py = this.Y(y);
      if (py < haut || py > bas) { py = Math.max(haut, Math.min(bas, py)); }
      if (!levé && Math.abs(py - py0) > this.H * 3) levé = true;
      d += (levé ? 'M' : 'L') + this.X(x).toFixed(1) + ' ' + py.toFixed(1);
      levé = false; py0 = py;
    }
    return this.coupe(this.e('path', { d, class: cls }, parent));
  }

  /** Droite y = m x + p sur toute la largeur. */
  droite(m: number, p: number, cls: string) {
    return this.coupe(this.seg(this.x0, m * this.x0 + p, this.x1, m * this.x1 + p, cls));
  }

  seg(xa: number, ya: number, xb: number, yb: number, cls: string, parent?: SVGElement) {
    return this.e('line', { x1: this.X(xa), y1: this.Y(ya), x2: this.X(xb), y2: this.Y(yb), class: cls }, parent);
  }

  pt(x: number, y: number, cls: string, r = 5, parent?: SVGElement) {
    return this.e('circle', { cx: this.X(x), cy: this.Y(y), r, class: cls }, parent);
  }

  txt(x: number, y: number, s: string, cls = 'lb-et', dx = 0, dy = 0, ancre: 'start' | 'middle' | 'end' = 'start', parent?: SVGElement) {
    return this.e('text', { x: this.X(x) + dx, y: this.Y(y) + dy, class: cls, 'text-anchor': ancre }, parent, s);
  }

  rect(xa: number, ya: number, xb: number, yb: number, cls: string, parent?: SVGElement) {
    const px = Math.min(this.X(xa), this.X(xb)), py = Math.min(this.Y(ya), this.Y(yb));
    return this.e('rect', { x: px, y: py, width: Math.abs(this.X(xb) - this.X(xa)), height: Math.abs(this.Y(yb) - this.Y(ya)), class: cls }, parent);
  }

  poly(pts: [number, number][], cls: string, ferme = true, parent?: SVGElement) {
    const d = pts.map(([x, y], i) => (i ? 'L' : 'M') + this.X(x).toFixed(1) + ' ' + this.Y(y).toFixed(1)).join('') + (ferme ? 'Z' : '');
    return this.e('path', { d, class: cls }, parent);
  }

  /** Flèche (vecteur) de A vers B, en coordonnées du repère. */
  fleche(xa: number, ya: number, xb: number, yb: number, cls: string, parent?: SVGElement) {
    const ax = this.X(xa), ay = this.Y(ya), bx = this.X(xb), by = this.Y(yb);
    const l = Math.hypot(bx - ax, by - ay);
    const g = this.e('g', { class: cls }, parent);
    if (l < 1) return g;
    const ux = (bx - ax) / l, uy = (by - ay) / l, t = Math.min(11, l * .45);
    this.e('line', { x1: ax, y1: ay, x2: bx - ux * t * .6, y2: by - uy * t * .6 }, g);
    this.e('path', { d: `M${bx} ${by}L${bx - ux * t - uy * t * .5} ${by - uy * t + ux * t * .5}L${bx - ux * t + uy * t * .5} ${by - uy * t - ux * t * .5}Z`, class: 'lb-pointe' }, g);
    return g;
  }

  /**
   * Poignée que l'on attrape au doigt ou à la souris. `place` la positionne,
   * `bouge` reçoit les coordonnées (repère) du pointeur pendant le glisser.
   * Seule la poignée bloque le défilement tactile : le reste de la figure laisse la page défiler.
   */
  poignee(bouge: (x: number, y: number) => void, cls = 'lb-poignee', etiquette = 'Point à déplacer') {
    const g = this.e('g', { class: cls, tabindex: 0, role: 'slider', 'aria-label': etiquette }, this.dessus) as SVGGElement;
    this.e('circle', { r: 22, class: 'lb-zone' }, g);
    this.e('circle', { r: 9, class: 'lb-rond' }, g);
    let actif = false;
    const pos = (ev: PointerEvent) => {
      const r = this.svg.getBoundingClientRect();
      const k = this.W / r.width;
      bouge(this.invX((ev.clientX - r.left) * k), this.invY((ev.clientY - r.top) * k));
    };
    g.addEventListener('pointerdown', (ev) => { actif = true; g.setPointerCapture(ev.pointerId); g.classList.add('tenu'); pos(ev); ev.preventDefault(); });
    g.addEventListener('pointermove', (ev) => { if (actif) pos(ev); });
    const fin = () => { actif = false; g.classList.remove('tenu'); };
    g.addEventListener('pointerup', fin);
    g.addEventListener('pointercancel', fin);
    return {
      g,
      place: (x: number, y: number) => { g.setAttribute('transform', `translate(${this.X(x).toFixed(1)} ${this.Y(y).toFixed(1)})`); },
    };
  }
}

/** Pas de graduation lisible (1, 2, 5 × 10^k) pour au plus `n` graduations. */
export function pasAuto(etendue: number, n: number): number {
  const brut = etendue / Math.max(2, n);
  const p = 10 ** Math.floor(Math.log10(brut));
  for (const k of [1, 2, 5, 10]) if (k * p >= brut) return k * p;
  return 10 * p;
}

export const borne = (x: number, a: number, b: number) => Math.min(b, Math.max(a, x));

/** Lance une boucle d'animation seulement quand l'encadré est visible. */
export function boucle(racine: HTMLElement, pas: (dt: number) => void): { marche: boolean; lancer(): void; arreter(): void } {
  let visible = false, id = 0, avant = 0;
  const etat = {
    marche: false,
    lancer() { etat.marche = true; tourne(); },
    arreter() { etat.marche = false; cancelAnimationFrame(id); id = 0; },
  };
  const tick = (t: number) => {
    const dt = Math.min(50, t - (avant || t)); avant = t;
    pas(dt / 1000);
    id = visible && etat.marche ? requestAnimationFrame(tick) : 0;
    if (!id) avant = 0;
  };
  const tourne = () => { if (!id && visible && etat.marche) id = requestAnimationFrame(tick); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; tourne(); }).observe(racine);
  return etat;
}

export const calme = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Générateur pseudo-aléatoire reproductible. */
export function hasard(graine: number) {
  let s = graine >>> 0 || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}
