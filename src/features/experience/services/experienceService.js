import { supabase } from '../../../lib/supabaseClient.js';
import { fallbackExperience } from '../data/fallbackExperience.js';

/**
 * Fetches experience entries from Supabase, falling back to local data if unavailable.
 */
export async function getExperiences() {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data.map(item => ({
        ...item,
        logo: item.logo || (item.company?.toLowerCase().includes('velocis') ? '/assets/velociscore.jpeg' : '/assets/hamro-patro.png')
      }));
    }
  } catch {
    // Fall back silently
  }
  return fallbackExperience;
}
