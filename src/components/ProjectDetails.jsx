import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient.js';
import { ArrowLeft, Code2, ExternalLink, Calendar, Tag } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const fetchProjectDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project details:", err);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-[var(--accent)] animate-pulse py-10 font-medium text-xl">
          Loading project details...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link to="/" className="btn-primary flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-12 font-semibold">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag, idx) => (
                <span key={idx} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg border border-[var(--accent)]/20">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-6 pt-4 pb-8 border-b border-[var(--border)]">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg font-semibold hover:text-[var(--accent)] transition-colors group">
                <div className="p-3 bg-[var(--surface)] rounded-xl group-hover:bg-[var(--accent)]/10 transition-colors">
                  <FiGithub size={24} />
                </div>
                View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-lg font-semibold hover:text-[var(--accent)] transition-colors group">
                <div className="p-3 bg-[var(--surface)] rounded-xl group-hover:bg-[var(--accent)]/10 transition-colors">
                  <ExternalLink size={24} />
                </div>
                Live Demo
              </a>
            )}
          </div>

          {/* Main Cover Image */}
          <div className="w-full aspect-video bg-[var(--surface)] rounded-3xl overflow-hidden relative shadow-2xl border border-[var(--border)]">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--surface)] to-[var(--background)]">
                <Code2 size={100} className="text-[var(--muted)]/20" />
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6">About the Project</h2>
                <div className="prose prose-invert max-w-none text-[var(--muted)] leading-loose text-lg whitespace-pre-wrap">
                  {project.detailed_description || project.description}
                </div>
              </section>

              {/* Additional Images Gallery */}
              {project.additional_images && project.additional_images.length > 0 && (
                <section className="pt-8">
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.additional_images.map((img, idx) => (
                      <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                        <img src={img} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <span key={idx} className="text-sm font-medium px-2 py-1 bg-[var(--surface)] rounded-md border border-[var(--border)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </article>
  );
};

export default ProjectDetails;
