import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/projectService.js';
import { ArrowLeft, Code2, ExternalLink, Smartphone, CheckCircle2, Layers, Tag } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;

    getProjectById(id).then(data => {
      if (isMounted) {
        setProject(data);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-[var(--accent)] animate-pulse py-10 font-semibold text-lg flex items-center gap-2">
          <Smartphone size={20} className="animate-bounce" />
          Loading case study...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6 px-4">
        <h2 className="text-3xl font-extrabold">Project Not Found</h2>
        <p className="text-[var(--muted)] text-center max-w-md">
          The project you are looking for does not exist or has been relocated.
        </p>
        <Link to="/#projects" className="btn-primary flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-10 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.category && (
                <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                  {project.category}
                </span>
              )}
              {project.architecture && (
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]">
                  {project.architecture}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--foreground)]">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="text-lg sm:text-xl text-[var(--accent)] font-medium">
                {project.subtitle}
              </p>
            )}

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap gap-3.5 pt-4 pb-8 border-b border-[var(--border)]">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                >
                  <FiGithub size={18} />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary"
                >
                  <ExternalLink size={18} />
                  <span>Live App / Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Core Content Grid: Mobile Phone Frame Preview + Architecture Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Native Phone Mockup Frame */}
            <div className="lg:col-span-5 flex justify-center sticky top-28">
              <div className="w-[280px] sm:w-[310px] h-[600px] phone-bezel bg-[#0b0f19] rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col">
                {/* Phone Speaker Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] mr-1"></div>
                </div>

                {/* Screenshot in Native Mobile Framing */}
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900">
                    <Code2 size={64} className="text-slate-600" />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Architecture, Metrics, and Technical Writeup */}
            <div className="lg:col-span-7 space-y-8">
              {/* Engineering Metrics Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl glass-card text-center">
                  <div className="text-xs text-[var(--muted)] font-mono">Performance</div>
                  <div className="text-lg font-bold text-emerald-500 mt-0.5">60 FPS</div>
                </div>
                <div className="p-3.5 rounded-2xl glass-card text-center">
                  <div className="text-xs text-[var(--muted)] font-mono">State</div>
                  <div className="text-lg font-bold text-[var(--accent)] mt-0.5 truncate">
                    {project.metrics?.stateManagement?.split(' ')[0] || "BLoC"}
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl glass-card text-center">
                  <div className="text-xs text-[var(--muted)] font-mono">Platform</div>
                  <div className="text-lg font-bold text-[var(--foreground)] mt-0.5">iOS & Android</div>
                </div>
                <div className="p-3.5 rounded-2xl glass-card text-center">
                  <div className="text-xs text-[var(--muted)] font-mono">Design</div>
                  <div className="text-lg font-bold text-[var(--accent-secondary)] mt-0.5">Material 3</div>
                </div>
              </div>

              {/* Technical Breakdown */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6">
                <div className="flex items-center gap-2.5 text-[var(--accent)] font-bold text-sm uppercase tracking-wider font-mono">
                  <Layers size={18} />
                  <span>Architecture & Implementation</span>
                </div>
                
                <div className="text-[var(--foreground)]/90 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line">
                  {project.detailed_description || project.description}
                </div>

                {/* Highlights List */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
                    <h4 className="text-xs font-bold font-mono text-[var(--muted)] uppercase tracking-wider">
                      Key Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--foreground)]">
                          <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Technologies Used */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-4">
                <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono font-bold uppercase tracking-wider">
                  <Tag size={14} />
                  <span>Technologies & Packages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
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
