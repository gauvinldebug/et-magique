import h from '../../netlify/functions/inscription';
import { adapter } from '../../cloudflare/adaptateur';

export const onRequest = adapter(h);
