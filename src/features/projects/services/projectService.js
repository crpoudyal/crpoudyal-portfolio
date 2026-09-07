import { supabase } from '../../../lib/supabaseClient.js';
import { fallbackProjects } from '../data/projectsData.js';

/**
 * Fetches all projects from Supabase with fallback data and filters out legacy projects.
 */
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      // Filter out legacy weather and news projects if present in database
      const validRemote = data.filter(item => {
        const title = (item.title || '').toLowerCase();
        return !title.includes('weather') && !title.includes('news');
      });

      // Merge remote records with verified high-res local case studies
      return fallbackProjects.map(fallback => {
        const remoteMatch = validRemote.find(r => 
          r.id === fallback.id || 
          (r.title && fallback.title && r.title.toLowerCase() === fallback.title.toLowerCase()) ||
          (r.title?.toLowerCase().includes('hr') && fallback.title?.toLowerCase().includes('hr')) ||
          (r.title?.toLowerCase().includes('outreach') && fallback.title?.toLowerCase().includes('outreach'))
        );

        if (remoteMatch) {
          return {
            ...fallback,
            ...remoteMatch,
            id: fallback.id, // Consistent ID routing (1: HR, 2: Outreach, 3: Basobas)
            imageUrl: fallback.imageUrl,
            additional_images: fallback.additional_images,
            tags: remoteMatch.tags?.length ? remoteMatch.tags : fallback.tags,
            highlights: fallback.highlights,
            metrics: fallback.metrics,
            architecture: fallback.architecture,
            subtitle: fallback.subtitle,
            company: fallback.company,
            detailed_description: fallback.detailed_description || remoteMatch.detailed_description
          };
        }
        return fallback;
      });
    }
  } catch {
    // Fall back to local project definitions
  }
  return fallbackProjects;
}

/**
 * Fetches a single project by id or fallback match.
 */
export async function getProjectById(id) {
  // First, check if id matches one of fallbackProjects directly
  let localProject = fallbackProjects.find(p => p.id.toString() === id.toString());

  // Handle remote Supabase id 4 mapping to HR
  if (!localProject && id.toString() === '4') {
    localProject = fallbackProjects.find(p => p.title.toLowerCase().includes('hr'));
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (!error && data) {
      const title = (data.title || '').toLowerCase();
      // If remote row is legacy weather or news, return fallback if available or null
      if (title.includes('weather') || title.includes('news')) {
        return localProject || null;
      }

      const enrichedLocal = localProject || fallbackProjects.find(p => 
        (data.title && p.title.toLowerCase() === data.title.toLowerCase()) ||
        (data.title?.toLowerCase().includes('hr') && p.title.toLowerCase().includes('hr')) ||
        (data.title?.toLowerCase().includes('outreach') && p.title.toLowerCase().includes('outreach'))
      );

      return {
        ...enrichedLocal,
        ...data,
        id: enrichedLocal?.id || data.id,
        imageUrl: enrichedLocal?.imageUrl || data.imageUrl,
        additional_images: enrichedLocal?.additional_images || (data.additional_images?.length ? data.additional_images : [data.imageUrl]),
        tags: enrichedLocal?.tags || data.tags,
        highlights: enrichedLocal?.highlights || [],
        metrics: enrichedLocal?.metrics,
        architecture: enrichedLocal?.architecture || "Clean Architecture",
        subtitle: enrichedLocal?.subtitle || "",
        company: enrichedLocal?.company || "Paaila Technologies",
        detailed_description: enrichedLocal?.detailed_description || data.detailed_description
      };
    }
  } catch {
    // Fall back to local project
  }
  return localProject || null;
}
