/**
 * Global application environment configuration and constants
 */
export const ENV = {
  SUPABASE_URL: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || (typeof process !== 'undefined' && process.env?.VITE_SUPABASE_URL) || 'https://ciexwkpkudlrwhsnnntt.supabase.co',
  SUPABASE_ANON_KEY: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || (typeof process !== 'undefined' && process.env?.VITE_SUPABASE_ANON_KEY) || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZXh3a3BrdWRscndoc25ubnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwNDMyNTUsImV4cCI6MjEwMjYxOTI1NX0.Fjl8B5kcdrU3_YOLAkQw0H9faGE33Vv-z8eaQuovtwI',
  IS_DEV: typeof import.meta !== 'undefined' ? Boolean(import.meta.env?.DEV) : false,
  IS_PROD: typeof import.meta !== 'undefined' ? Boolean(import.meta.env?.PROD) : true,
};
