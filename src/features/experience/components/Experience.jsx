import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fallbackExperience } from '../data/fallbackExperience.js';
import { getExperiences } from '../services/experienceService.js';

export const Experience = () => {
  const [experiences, setExperiences] = useState(fallbackExperience);

  useEffect(() => {
    let isMounted = true;
    getExperiences().then(data => {
      if (isMounted && data) {
        setExperiences(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-4 border border-[var(--accent)]/20">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Professional track record delivering real-world mobile applications, from enterprise software to apps with millions of users.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)]/40 transition-all duration-300"
            >
              {/* Header: Company Info & Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-4">
                  {/* Company Logo / Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-1.5 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform overflow-hidden">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <Building2 size={28} className="text-[var(--accent)]" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Present
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--muted)] flex items-center gap-1.5 mt-1">
                      <MapPin size={14} className="text-[var(--accent)]" />
                      <span>{exp.location}</span>
                    </p>
                  </div>
                </div>

                {exp.type && (
                  <span className="text-xs font-mono font-medium px-3 py-1.5 rounded-xl bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] self-start sm:self-auto">
                    {exp.type}
                  </span>
                )}
              </div>

              {/* Roles Timeline */}
              <div className="mt-8 space-y-10 relative before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent)] before:via-[var(--accent-secondary)]/40 before:to-transparent">
                {exp.roles?.map((role, idx) => (
                  <div key={idx} className="relative pl-8 group/role">
                    {/* Glowing Bullet */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-[var(--card)] bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] group-hover/role:scale-125 transition-transform"></div>

                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover/role:text-[var(--accent)] transition-colors">
                        {role.title}
                      </h4>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] self-start sm:self-auto flex items-center gap-1.5">
                        <Calendar size={12} />
                        {role.duration}
                      </span>
                    </div>

                    {/* Highlights */}
                    {role.highlights && (
                      <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                        {role.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 size={15} className="text-[var(--accent)] mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Pills */}
                    {role.tech && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--border)]/60">
                        {role.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
