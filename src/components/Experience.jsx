import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const fallbackExperience = [
  {
    id: 1,
    company: "Velocis Core",
    location: "Biratnagar, Kosi Zone, Nepal",
    roles: [
      {
        title: "Full Stack Mobile App Developer",
        duration: "Sep 2024 - Present",
        description: "Dart, Flutter, Firebase, REST APIs, MongoDB, Node.js"
      },
      {
        title: "Flutter Developer",
        duration: "Mar 2024 - Sep 2024",
        description: "Flutter, Dart, Bloc, Firebase, Notification, REST APIs"
      }
    ]
  },
  {
    id: 2,
    company: "Hamro Patro, Inc.",
    location: "Kathmandu, Bagmati, Nepal",
    roles: [
      {
        title: "Junior Flutter Developer",
        duration: "Nov 2022 - Dec 2022",
        description: "Flutter, Dart, REST APIs"
      },
      {
        title: "Mobile Application Developer Internship",
        duration: "Sep 2022 - Nov 2022",
        description: "Dart, Flutter"
      }
    ]
  }
];

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const { data, error } = await supabase
          .from('experiences')
          .select('*')
          .order('id', { ascending: false });

        if (error || !data || data.length === 0) {
          setExperiences(fallbackExperience);
        } else {
          setExperiences(data);
        }
      } catch (err) {
        setExperiences(fallbackExperience);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16 justify-center md:justify-start"
        >
          <div className="p-4 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 text-[var(--accent)] rounded-2xl shadow-inner border border-[var(--accent)]/10">
            <Briefcase size={28} />
          </div>
          <div>
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase">Explore My</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
          </div>
        </motion.div>

        {loading ? (
          <div className="text-center text-[var(--accent)] animate-pulse py-10 font-medium">Loading experience...</div>
        ) : (
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 md:p-10 hover:border-[var(--accent)]/50 transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--muted)] group-hover:from-[var(--accent)] group-hover:to-[var(--accent-secondary)] transition-all duration-300">{exp.company}</h3>
                    <p className="text-[var(--muted)] text-sm mt-1 font-medium flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)]"></span>
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[9px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent)] before:via-[var(--accent-secondary)]/50 before:to-transparent">
                  {exp.roles?.map((role, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/role"
                    >
                      <div className="flex items-center justify-center w-5 h-5 rounded-full border-[4px] border-[var(--card)] bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] shrink-0 md:order-1 md:group-odd/role:-translate-x-1/2 md:group-even/role:translate-x-1/2 ml-0 z-10 transition-transform duration-300 group-hover/role:scale-125"></div>
                      <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-3rem)] glass-card p-6 rounded-2xl shadow-md bg-[var(--surface)]/40 hover:bg-[var(--surface)]/80 transition-all duration-300 border-transparent hover:border-[var(--accent)]/30 group-hover/role:-translate-y-1">
                        <h4 className="font-bold text-lg text-[var(--foreground)] mb-1">{role.title}</h4>
                        <time className="text-xs text-[var(--accent)] font-mono font-medium mb-4 inline-block px-2 py-1 bg-[var(--accent)]/10 rounded-md">{role.duration}</time>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
