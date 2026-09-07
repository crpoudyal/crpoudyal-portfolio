import React, { useEffect, useState } from 'react';
import { fallbackProjects } from '../data/projectsData.js';
import { getProjects } from '../services/projectService.js';
import { Code2, ExternalLink, ArrowUpRight, Smartphone, CheckCircle2, Layers } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Projects = () => {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    let isMounted = true;
    getProjects().then(data => {
      if (isMounted && data) {
        setProjects(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ['All', 'Flutter Apps', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory || (activeCategory === 'Flutter Apps' && p.tags?.includes('Flutter')));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-4 border border-[var(--accent)]/20">
            <Smartphone size={14} />
            <span>Featured Mobile Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Production & Showcase Apps
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Real-world mobile applications engineered with clean codebases, reactive state flow, and smooth animations.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/30 scale-105'
                    : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-3xl border border-[var(--border)] overflow-hidden flex flex-col group hover:border-[var(--accent)]/50 hover:shadow-2xl transition-all duration-500"
              >
                {/* Mobile Preview Area */}
                <div className="relative pt-6 px-6 pb-2 bg-gradient-to-b from-[var(--surface)]/60 to-[var(--surface)]/20 flex justify-center items-center overflow-hidden border-b border-[var(--border)]">
                  {/* Subtle Glow Behind Phone */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Phone Mockup Frame */}
                  <div className="w-[180px] sm:w-[200px] h-[320px] rounded-2xl border-4 border-slate-800 dark:border-slate-700 bg-black shadow-xl overflow-hidden relative group-hover:scale-[1.03] transition-transform duration-500 flex flex-col">
                    {/* Top Speaker / Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full z-20"></div>

                    {/* Screenshot */}
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <Code2 size={40} className="text-slate-600" />
                      </div>
                    )}
                  </div>

                  {/* Architecture Pill Badge */}
                  {project.architecture && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[var(--card)]/90 backdrop-blur-md text-[var(--accent)] border border-[var(--accent)]/30 shadow-sm flex items-center gap-1">
                        <Layers size={10} />
                        {project.architecture.split('•')[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.subtitle && (
                    <p className="text-xs text-[var(--accent)] font-medium mb-3 font-mono">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-sm text-[var(--muted)] line-clamp-3 mb-5 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-5 pb-4 border-b border-[var(--border)]">
                      {project.highlights.slice(0, 2).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-[var(--foreground)]">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags?.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags && project.tags.length > 4 && (
                      <span className="text-[11px] font-mono text-[var(--muted)] self-center px-1">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[var(--border)] mt-auto">
                    <Link 
                      to={`/project/${project.id}`}
                      className="flex-1 py-2.5 px-3.5 rounded-xl bg-[var(--accent)] text-white text-xs sm:text-sm font-semibold hover:shadow-md hover:shadow-[var(--accent)]/30 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2.5 rounded-xl bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 border border-[var(--border)] transition-all"
                        aria-label="View GitHub Repository"
                        title="GitHub Repo"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2.5 rounded-xl bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 border border-[var(--border)] transition-all"
                        aria-label="Live Demo or Release"
                        title="Live Release"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
