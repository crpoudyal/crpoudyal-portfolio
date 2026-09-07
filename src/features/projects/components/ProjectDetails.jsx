import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/projectService.js';
import { ArrowLeft, Code2, Smartphone, CheckCircle2, Layers, Tag, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true;

    getProjectById(id).then(data => {
      if (isMounted) {
        setProject(data);
        setActiveImageIndex(0);
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
          The project you are looking for does not exist or has been removed.
        </p>
        <Link to="/#projects" className="btn-primary flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  const images = project.additional_images && project.additional_images.length > 0 
    ? project.additional_images 
    : (project.imageUrl ? [project.imageUrl] : []);

  const currentScreenshot = images[activeImageIndex] || project.imageUrl;

  const nextScreenshot = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevScreenshot = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
              {project.company && (
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                  {project.company}
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
            <div className="flex flex-wrap items-center gap-3.5 pt-4 pb-8 border-b border-[var(--border)]">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary flex items-center gap-2"
                >
                  <Play size={16} className="fill-current" />
                  <span>View on Google Play</span>
                </a>
              )}
              {project.githubUrl ? (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary flex items-center gap-2"
                >
                  <FiGithub size={18} />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono px-3.5 py-2 rounded-xl bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Production Enterprise App
                </span>
              )}
            </div>
          </div>

          {/* Core Content Grid: Mobile Phone Frame Preview + Architecture Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Native Phone Mockup Frame with Screenshot Gallery */}
            <div className="lg:col-span-5 flex flex-col items-center sticky top-28 space-y-4">
              <div className="w-[280px] sm:w-[310px] h-[580px] phone-bezel bg-[#0b0f19] rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col border-[5px] border-slate-800">
                {/* Phone Speaker Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] mr-1"></div>
                </div>

                {/* Screenshot in Native Mobile Framing */}
                {currentScreenshot ? (
                  <motion.img 
                    key={currentScreenshot}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={currentScreenshot} 
                    alt={`${project.title} screenshot ${activeImageIndex + 1}`} 
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900">
                    <Code2 size={64} className="text-slate-600" />
                  </div>
                )}

                {/* Screenshot Navigation Controls Overlay */}
                {images.length > 1 && (
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                    <button 
                      onClick={prevScreenshot}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md pointer-events-auto transition-transform hover:scale-110"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button 
                      onClick={nextScreenshot}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md pointer-events-auto transition-transform hover:scale-110"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery Strip */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 pt-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-[var(--accent)] scale-105 shadow-md shadow-[var(--accent)]/30' 
                          : 'border-[var(--border)] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
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
                  <div className="text-lg font-bold text-[var(--foreground)] mt-0.5 truncate">
                    {project.metrics?.platform || "Android"}
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl glass-card text-center">
                  <div className="text-xs text-[var(--muted)] font-mono">Architecture</div>
                  <div className="text-lg font-bold text-[var(--accent-secondary)] mt-0.5 truncate">
                    {project.metrics?.architecture?.split(' ')[0] || "Clean"}
                  </div>
                </div>
              </div>

              {/* Technical Breakdown */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border)] space-y-6">
                <div className="flex items-center gap-2.5 text-[var(--accent)] font-bold text-sm uppercase tracking-wider font-mono">
                  <Layers size={18} />
                  <span>Architecture & Engineering Highlights</span>
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
