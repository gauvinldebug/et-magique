import h from '../../netlify/functions/video';
import { adapter } from '../../cloudflare/adaptateur';

export const onRequest = adapter(h, { stockage: false, cacheSecondes: 900 });
