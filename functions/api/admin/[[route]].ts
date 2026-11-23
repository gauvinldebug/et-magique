import h from '../../../netlify/functions/admin';
import { adapter } from '../../../cloudflare/adaptateur';

export const onRequest = adapter(h);
