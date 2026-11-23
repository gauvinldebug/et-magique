import h from '../../netlify/functions/desinscription';
import { adapter } from '../../cloudflare/adaptateur';

export const onRequest = adapter(h);
