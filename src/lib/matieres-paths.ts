import { MATIERES } from '../data/site';
export const cheminsMatieres = () => MATIERES.filter((m) => m.active).map((m) => ({ params: { matiere: m.slug }, props: { matiere: m } }));
// Annales et planning du bac : seulement pour les matières qui les ont.
export const cheminsMatieresBac = () => cheminsMatieres().filter((c) => c.props.matiere.bac);
