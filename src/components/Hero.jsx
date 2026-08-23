import React from 'react';
import { Download } from 'lucide-react';
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="about" className="pt-40 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Intro */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-[var(--accent)] font-semibold tracking-wider uppercase text-sm">
            Hi, I'm Chudaraj Poudyal
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            I build <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] animate-gradient bg-[length:200%_auto]">
              dynamic apps
            </span> <br className="hidden md:block"/>
            for mobile & web.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-lg font-light">
            A passionate Full Stack Mobile App Developer and IT student based in Nepal. I specialize in Flutter, Dart, Node.js, and modern web technologies.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="btn-primary">Get in touch →</a>
            <a href="#" className="btn-secondary">
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 pt-8 text-[var(--muted)]">
            <a href="https://www.github.com/crpoudyal" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/chudaraj-poudyal/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300">
              <FiLinkedin size={22} />
            </a>
            <a href="https://www.youtube.com/imagineitnepal" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300">
              <FiYoutube size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Terminal Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="glass-card overflow-hidden shadow-2xl relative group perspective-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="bg-[#1e1e1e]/80 backdrop-blur-md px-4 py-3 flex gap-2 items-center border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
            <span className="text-xs font-mono text-gray-400 ml-auto">crpoudyal@macbook:~</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-4 bg-[#0d0d0d]/90 text-gray-300 h-full min-h-[320px]">
            <div>
              <span className="text-[#22d3ee]">➜</span> <span className="text-[#818cf8]">~</span>
              <span className="text-white ml-2">cat skills.json</span>
            </div>
            <div className="pl-4 space-y-1 text-gray-400">
              <p><span className="text-[#a6e22e]">"mobile"</span>: ["Flutter", "Dart"],</p>
              <p><span className="text-[#a6e22e]">"frontend"</span>: ["React", "HTML/CSS", "Tailwind"],</p>
              <p><span className="text-[#a6e22e]">"backend"</span>: ["Node.js", "Firebase", "Supabase"],</p>
              <p><span className="text-[#a6e22e]">"database"</span>: ["MongoDB", "PostgreSQL"]</p>
            </div>
            <div className="pt-2">
              <span className="text-[#22d3ee]">➜</span> <span className="text-[#818cf8]">~</span>
              <span className="text-white ml-2">echo $EXPERIENCE</span>
            </div>
            <div className="pl-4 text-[#e6db74]">
              Full Stack Mobile App Developer @ Velocis Core
            </div>
            <div className="flex items-center pt-2">
              <span className="text-[#22d3ee]">➜</span> <span className="text-[#818cf8]">~</span>
              <span className="ml-2 w-2 h-4 bg-gray-400 animate-pulse"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
