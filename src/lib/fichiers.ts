import { existsSync } from 'node:fs';
import { join } from 'node:path';
/** Un PDF n'est proposé au téléchargement que s'il existe vraiment dans public/. */
export const existe = (chemin?: string) => !!chemin && existsSync(join(process.cwd(), 'public', chemin));
