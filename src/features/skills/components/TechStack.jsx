import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CheckCircle2, Workflow, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skillsData.js';

export const TechStack = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-4 border border-[var(--accent)]/20">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Specialized Mobile Tech Stack
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Every tool, framework, and architectural pattern I use is chosen for building resilient, 60 FPS mobile products.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/30 scale-105'
                  : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/80'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === category.id
                    ? 'bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/30 scale-105'
                    : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/80'
                }`}
              >
                <category.icon size={14} />
                <span>{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: catIdx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--border)] relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-[var(--border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 shadow-sm">
                      <category.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[var(--muted)] mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[var(--accent)] font-semibold px-3 py-1 rounded-full bg-[var(--accent)]/10 self-start sm:self-auto">
                    {category.skills.length} Competencies
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-4 rounded-2xl bg-[var(--surface)]/40 hover:bg-[var(--surface)]/90 border border-transparent hover:border-[var(--accent)]/30 transition-all duration-300 group flex items-start gap-3.5 hover:shadow-md"
                    >
                      {/* Skill Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[var(--card)] flex items-center justify-center p-2 shadow-sm shrink-0 border border-[var(--border)] group-hover:scale-110 transition-transform">
                        {skill.icon ? (
                          <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                        ) : (
                          <Sparkles size={18} className="text-[var(--accent)]" />
                        )}
                      </div>

                      {/* Skill Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-sm text-[var(--foreground)] truncate group-hover:text-[var(--accent)] transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-semibold text-[var(--accent)] uppercase font-mono px-2 py-0.5 rounded bg-[var(--accent)]/10 shrink-0">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--muted)] mt-1 leading-snug">
                          {skill.highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Clean Architecture Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[var(--card)] via-[var(--surface)] to-[var(--card)] border border-[var(--border)] shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider font-mono">
                <Workflow size={16} />
                <span>Architecture Philosophy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Scalable & Testable Clean Architecture
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                By decoupling the <strong>Presentation Layer (Widgets & BLoC)</strong> from the <strong>Domain Layer (Use Cases & Entities)</strong> and <strong>Data Layer (Repositories & API Sources)</strong>, my codebases stay maintainable, crash-free, and easy to scale across engineering teams.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2.5 text-xs text-[var(--foreground)] font-medium p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Zero UI business logic mixing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--foreground)] font-medium p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>100% Mockable Repositories</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--foreground)] font-medium p-2.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Offline-first caching strategy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
