import { MATIERES } from '../data/site';
export const cheminsMatieres = () => MATIERES.filter((m) => m.active).map((m) => ({ params: { matiere: m.slug }, props: { matiere: m } }));
