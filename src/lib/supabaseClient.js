import { createClient } from '@supabase/supabase-js';
import { ENV } from '../config/env.js';

if (!ENV.SUPABASE_URL || !ENV.SUPABASE_ANON_KEY) {
  console.warn('Missing Supabase environment variables. Check your .env file.');
}

export const supabase = createClient(
  ENV.SUPABASE_URL || 'https://placeholder.supabase.co',
  ENV.SUPABASE_ANON_KEY || 'placeholder-key'
);
