/**
 * Global application environment configuration and constants
 */
export const ENV = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
};
