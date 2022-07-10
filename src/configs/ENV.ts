import { config } from 'dotenv';

config({ path: '.env' });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, LOG_DIR, LOG_FORMAT, ORIGIN } = process.env;
