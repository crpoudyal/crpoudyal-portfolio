import { supabase } from '../../../lib/supabaseClient.js';
import { fallbackExperience } from '../data/fallbackExperience.js';

/**
 * Fetches experience entries from Supabase, enriching with logos and rich details.
 */
export async function getExperiences() {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      const enriched = data.map(item => {
        const companyLower = (item.company || '').toLowerCase();
        
        // Find matching local fallback to merge detailed highlights if remote only has summary string
        const fallback = fallbackExperience.find(f => 
          f.company.toLowerCase().includes(companyLower) || 
          companyLower.includes(f.company.toLowerCase().split(' ')[0])
        );

        let logo = item.logo;
        if (!logo) {
          if (companyLower.includes('paaila')) {
            logo = '/assets/paaila-logo.png';
          } else if (companyLower.includes('velocis')) {
            logo = '/assets/velociscore.jpeg';
          } else if (companyLower.includes('hamro')) {
            logo = '/assets/hamro-patro.png';
          } else {
            logo = '/assets/paaila-logo.png';
          }
        }

        // Merge roles
        const roles = item.roles && item.roles.length > 0 
          ? item.roles.map((role, idx) => {
              const fallbackRole = fallback?.roles?.[idx] || fallback?.roles?.[0];
              return {
                ...role,
                highlights: role.highlights || fallbackRole?.highlights || (role.description ? [role.description] : []),
                tech: role.tech || fallbackRole?.tech || ["Flutter", "Dart", "Clean Architecture"]
              };
            })
          : (fallback?.roles || []);

        const isCurrent = companyLower.includes('paaila') || item.current === true;

        return {
          ...fallback,
          ...item,
          logo,
          current: isCurrent,
          roles
        };
      });

      // Sort: current experiences first
      return enriched.sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0));
    }
  } catch {
    // Fall back silently
  }
  return fallbackExperience;
}
