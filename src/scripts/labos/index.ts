// Branche les encadrés interactifs d'une page de cours : <div class="labo" data-labo="tangente"></div>.
// Chaque encadré n'est construit que lorsqu'il approche de l'écran, et le code d'une matière
// n'est chargé que si la page en contient un.
const MATHS = ['tangente', 'parabole', 'exponentielle', 'cercle', 'cercle-courbe', 'suite', 'produit-scalaire', 'arbre', 'epsilon', 'gendarmes', 'tvi', 'convexite', 'ln', 'rectangles', 'binomiale', 'grands-nombres', 'dominos', 'eq-diff'];

const MATHS2 = ['droite', 'reference', 'vecteurs', 'evolution', 'statistiques', 'complexe', 'markov', 'regression'];
const PHYSIQUE2 = ['chrono', 'son', 'refraction', 'spectre', 'beer', 'synthese', 'doppler', 'orbite', 'titrage'];

const labos = [...document.querySelectorAll<HTMLElement>('.labo[data-labo]')];
if (labos.length) {
  const monte = async (r: HTMLElement) => {
    const nom = r.dataset.labo!;
    try {
      const mod = nom.startsWith('defi-') ? await import('./defis')
        : MATHS.includes(nom) ? await import('./maths')
        : MATHS2.includes(nom) ? await import('./maths2')
          : PHYSIQUE2.includes(nom) ? await import('./physique2') : await import('./physique');
      const f = mod.LABOS[nom] ?? (nom.startsWith('defi-') ? (await import('./defis2')).LABOS2[nom] : undefined);
      if (!f) { r.hidden = true; return; }
      f(r);
      r.classList.add('pret');
      // statistiques sans cookie : une seule mesure par figure, au premier geste
      const geste = () => {
        r.removeEventListener('pointerdown', geste); r.removeEventListener('input', geste);
        (window as any).umami?.track('figure-manipulee', { figure: nom, page: location.pathname });
      };
      r.addEventListener('pointerdown', geste); r.addEventListener('input', geste);
    } catch (e) {
      console.error('Encadré interactif', nom, e);
      r.hidden = true;
    }
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { io.unobserve(e.target); monte(e.target as HTMLElement); }
    }), { rootMargin: '400px 0px' });
    labos.forEach((l) => io.observe(l));
  } else labos.forEach(monte);
}
