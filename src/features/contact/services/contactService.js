import { supabase } from '../../../lib/supabaseClient.js';

/**
 * Inserts a contact message into Supabase.
 */
export async function sendContactMessage({ name, email, message }) {
  const { error } = await supabase
    .from('messages')
    .insert([{ name, email, message }]);

  if (error) {
    throw error;
  }
  return true;
}
