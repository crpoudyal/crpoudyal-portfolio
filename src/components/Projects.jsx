import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Code2, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const fallbackProjects = [
  {
    id: 1,
    title: "Weather App",
    description: "A beautiful weather application providing real-time forecasts and conditions.",
    githubUrl: "https://github.com/crpoudyal/Weather_App/",
    imageUrl: "/assets/project-1.png",
    tags: ["Flutter", "Dart", "REST API"]
  },
  {
    id: 2,
    title: "News App",
    description: "Stay updated with the latest news worldwide using this sleek news aggregator.",
    githubUrl: "https://github.com/crpoudyal/news_app_bloc",
    imageUrl: "/assets/project-2.png",
    tags: ["Flutter", "Bloc", "News API"]
  },
  {
    id: 3,
    title: "Basobas",
    description: "A property listing and real estate application built for ease of use.",
    githubUrl: "https://github.com/crpoudyal/",
    imageUrl: "/assets/project-3.png",
    tags: ["Flutter", "Firebase"]
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true });

        if (error || !data || data.length === 0) {
          setProjects(fallbackProjects);
        } else {
          setProjects(data);
        }
      } catch (err) {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16 justify-center md:justify-start"
        >
          <div className="p-4 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 text-[var(--accent)] rounded-2xl shadow-inner border border-[var(--accent)]/10">
            <Code2 size={28} />
          </div>
          <div>
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase">Browse My Recent</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
          </div>
        </motion.div>

        {loading ? (
          <div className="text-center text-[var(--accent)] animate-pulse py-10 font-medium">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] hover:border-[var(--accent)]/40"
              >
                <div className="h-56 bg-[var(--surface)] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] to-[var(--background)] flex items-center justify-center z-0">
                    <Code2 size={64} className="text-[var(--muted)]/20" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6 bg-[var(--card)]/90 backdrop-blur-md rounded-t-3xl border-t border-white/5">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                  <p className="text-[var(--muted)] text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag, idx) => (
                      <span key={idx} className="text-xs font-semibold px-3 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg border border-[var(--accent)]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-6 border-t border-[var(--border)]">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)] transition-colors group/link">
                        <FiGithub size={18} className="group-hover/link:-rotate-12 transition-transform" /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-[var(--accent)] transition-colors group/link">
                        <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
