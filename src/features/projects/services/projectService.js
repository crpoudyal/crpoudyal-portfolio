import { supabase } from '../../../lib/supabaseClient.js';
import { fallbackProjects } from '../data/projectsData.js';

/**
 * Fetches all projects from Supabase with fallback data.
 */
export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });

    if (!error && data && data.length > 0) {
      return data.map((item, index) => {
        const fallback = fallbackProjects[index] || {};
        return {
          ...fallback,
          ...item,
          imageUrl: item.imageUrl || fallback.imageUrl,
          tags: item.tags || fallback.tags,
        };
      });
    }
  } catch {
    // Fall back silently
  }
  return fallbackProjects;
}

/**
 * Fetches a single project by id.
 */
export async function getProjectById(id) {
  const localProject = fallbackProjects.find(p => p.id.toString() === id.toString());
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (!error && data) {
      return {
        ...localProject,
        ...data,
        imageUrl: data.imageUrl || localProject?.imageUrl,
        tags: data.tags || localProject?.tags,
        highlights: localProject?.highlights || [],
        metrics: localProject?.metrics || {
          fps: "60 FPS",
          stateManagement: "flutter_bloc",
          architecture: "Clean Architecture",
          platform: "iOS & Android"
        }
      };
    }
  } catch {
    // Fall back to local project
  }
  return localProject || null;
}
