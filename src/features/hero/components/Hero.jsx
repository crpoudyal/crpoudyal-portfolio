import React, { useState } from 'react';
import { Download, Sparkles, ArrowRight, Zap, RefreshCw, UserCheck, Activity, MapPin, Clock, Database, ShieldCheck, HeartPulse } from 'lucide-react';
import { FiGithub, FiLinkedin, FiYoutube, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [activeApp, setActiveApp] = useState('emr_hr');
  const [isReloading, setIsReloading] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const triggerHotReload = () => {
    setIsReloading(true);
    setReloadKey(prev => prev + 1);
    setTimeout(() => {
      setIsReloading(false);
    }, 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 15 },
    },
  };

  return (
    <section id="about" className="pt-32 md:pt-40 pb-20 px-4 sm:px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--accent)]/15 via-[var(--accent-secondary)]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Intro & Value Proposition */}
        <motion.div 
          className="lg:col-span-7 space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Flutter Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/25 text-[var(--accent)] text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span>Mobile Developer • Flutter & Dart Specialist</span>
            <Sparkles size={14} className="text-[var(--accent-secondary)]" />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Crafting Fluid, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[#00b4d8] to-[var(--accent-secondary)]">
              60 FPS Mobile Apps
            </span> <br />
            with Modern Architecture.
          </motion.h1>

          {/* Bio Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
            Hi, I'm <strong className="text-[var(--foreground)] font-semibold">Chudaraj (CR) Poudyal</strong>. A dedicated Full Stack Mobile Application Developer based in Nepal. I turn complex requirements into high-performance, beautiful iOS and Android apps using Flutter, Clean Architecture, BLoC, and scalable backends.
          </motion.p>
          
          {/* Quick Metrics Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-4 py-2 max-w-lg">
            <div className="p-3.5 rounded-2xl glass-card text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--accent)]">2+</div>
              <div className="text-xs text-[var(--muted)] font-medium mt-0.5">Years Exp.</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--accent-secondary)]">10K+</div>
              <div className="text-xs text-[var(--muted)] font-medium mt-0.5">App User Reach</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500">60 FPS</div>
              <div className="text-xs text-[var(--muted)] font-medium mt-0.5">Fluid UI/UX</div>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3.5 pt-1 items-center">
            <a href="#projects" className="btn-primary">
              View Mobile Apps
              <ArrowRight size={18} />
            </a>
            <a 
              href="/assets/CR-Poudyal-cv.pdf" 
              download="CR-Poudyal-CV.pdf"
              className="btn-secondary"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 text-[var(--muted)]">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]/70 mr-1 hidden sm:inline">
              Connect:
            </span>
            <a 
              href="https://www.github.com/crpoudyal" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300 border border-[var(--border)]"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chudaraj-poudyal/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300 border border-[var(--border)]"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="https://www.youtube.com/imagineitnepal" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube Channel"
              className="p-2.5 rounded-xl bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300 border border-[var(--border)]"
            >
              <FiYoutube size={20} />
            </a>
            <a 
              href="mailto:crpoudyal@gmail.com" 
              aria-label="Email Me"
              className="p-2.5 rounded-xl bg-[var(--surface)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300 border border-[var(--border)]"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Flutter Smartphone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Floating Pill: Hot Reload Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerHotReload}
            className="absolute -top-5 right-2 sm:right-6 z-30 cursor-pointer flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card)] border border-[var(--accent)]/40 shadow-xl text-xs font-mono text-[var(--accent)] font-semibold hover:border-[var(--accent)] transition-all"
            title="Click to simulate Flutter Hot Reload!"
          >
            <RefreshCw size={14} className={isReloading ? "animate-spin text-[var(--accent-secondary)]" : ""} />
            <span>⚡ Hot Reload</span>
          </motion.div>

          {/* Floating Tag: Architecture Badge */}
          <div className="absolute -bottom-4 -left-2 sm:left-4 z-30 glass-card px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-medium border border-[var(--border)]">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
            <span>Clean Architecture • BLoC</span>
          </div>

          {/* The Smartphone Frame */}
          <div className="w-[300px] sm:w-[320px] h-[610px] phone-bezel bg-[#0b0f19] relative flex flex-col overflow-hidden select-none">
            {/* Phone Dynamic Island / Camera Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] mr-1.5"></div>
              <div className="w-2 h-2 rounded-full bg-[#0a84ff]/70"></div>
            </div>

            {/* Status Bar */}
            <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[10px] font-mono text-slate-300 z-30">
              <span className="font-semibold">9:41</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <span className="text-[9px]">5G</span>
                <div className="w-4 h-2 border border-slate-300 rounded-sm p-0.5 flex items-center">
                  <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
                </div>
              </div>
            </div>

            {/* Flutter App Bar Inside Simulator */}
            <div className="px-4 py-2 bg-gradient-to-r from-[#02569B] to-[#0175C2] text-white flex justify-between items-center z-20 shadow-md">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center font-bold text-xs">
                  F
                </div>
                <span className="text-xs font-semibold tracking-tight">Flutter Demo</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] bg-black/25 px-2 py-0.5 rounded-full font-mono">
                <Zap size={10} className="text-amber-300" />
                <span>60 FPS</span>
              </div>
            </div>

            {/* Reload Flash Overlay */}
            {isReloading && (
              <motion.div 
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cyan-400/30 z-50 pointer-events-none flex items-center justify-center"
              >
                <span className="px-3 py-1 bg-black/80 rounded-lg text-cyan-300 font-mono text-xs font-bold">
                  ⚡ Reloaded (180ms)
                </span>
              </motion.div>
            )}

            {/* Screen Content Body */}
            <div key={reloadKey} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0a0e17] text-slate-100 font-sans">
              <AnimatePresence mode="wait">
                {/* 1. DYNAMICEMR - HR SCREEN */}
                {activeApp === 'emr_hr' && (
                  <motion.div 
                    key="emr_hr"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    {/* App Header */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg text-white relative overflow-hidden">
                      <div className="absolute -right-3 -top-3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-wide uppercase opacity-85 flex items-center gap-1">
                          <ShieldCheck size={12} className="text-blue-200" />
                          DynamicEMR HRMS
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white">Live Sync</span>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold opacity-90">Good Morning,</p>
                          <p className="text-base font-bold">Dr. Chudaraj P.</p>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-bold text-xs border border-white/20">
                          HR
                        </div>
                      </div>
                    </div>

                    {/* Live GPS Attendance Card */}
                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>GPS Attendance</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                          In Geofence
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-700/40">
                        <div className="flex items-center gap-1 text-[11px] text-slate-300">
                          <MapPin size={12} className="text-blue-400" />
                          <span className="truncate max-w-[120px]">Biratnagar Hospital</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
                          <Clock size={11} className="text-indigo-400" />
                          <span>08:00 - 16:00</span>
                        </div>
                      </div>

                      <button className="w-full py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                        <UserCheck size={13} />
                        <span>Check-In Verified (08:02 AM)</span>
                      </button>
                    </div>

                    {/* Leave & Shift Summary */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/40">
                        <p className="text-[10px] text-slate-400">Annual Leave</p>
                        <p className="text-sm font-bold text-blue-400 mt-0.5">14 Days Left</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/40">
                        <p className="text-[10px] text-slate-400">Sick Leave</p>
                        <p className="text-sm font-bold text-cyan-400 mt-0.5">6 Days Left</p>
                      </div>
                    </div>

                    <div className="text-center pt-0.5">
                      <span className="text-[9px] font-mono text-blue-300/90 bg-blue-950/60 px-2 py-1 rounded-md border border-blue-800/40">
                        Clean Architecture • BLoC • FCM
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* 2. DYNAMICEMR - OUTREACH SCREEN */}
                {activeApp === 'emr_outreach' && (
                  <motion.div 
                    key="emr_outreach"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    {/* Header */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 shadow-lg text-white relative overflow-hidden">
                      <div className="absolute -right-3 -top-3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-wide uppercase opacity-85 flex items-center gap-1">
                          <HeartPulse size={12} className="text-emerald-200" />
                          EMR Outreach
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-100 border border-emerald-300/20">
                          Camp #12
                        </span>
                      </div>
                      <p className="text-sm font-bold mt-2">Morang Health Mission</p>
                      <p className="text-[11px] opacity-80 flex items-center gap-1 mt-0.5">
                        <MapPin size={11} />
                        Rural Clinic Sector 3
                      </p>
                    </div>

                    {/* Offline-First Storage Card */}
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-300">
                          <Database size={14} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-200 text-[11px]">Offline SQLite Sync</p>
                          <p className="text-[9px] text-emerald-400">100% Offline Ready • 142 Records</p>
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>

                    {/* Patient Field Card 1 */}
                    <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/40 space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-teal-300 font-semibold">PATIENT #842</span>
                        <span className="text-slate-400">09:42 AM</span>
                      </div>
                      <p className="text-xs font-bold text-slate-200">Ramesh K. • Age 48</p>
                      <p className="text-[10px] text-slate-400">Vitals: BP 120/80 • Glucose: 110 mg/dL</p>
                    </div>

                    {/* Patient Field Card 2 */}
                    <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-mono text-teal-300 font-semibold">PATIENT #843</span>
                        <span className="text-slate-400">10:15 AM</span>
                      </div>
                      <p className="text-xs font-bold text-slate-200">Sita M. • Age 34</p>
                      <p className="text-[10px] text-slate-400">Screening: General Checkup • Referred</p>
                    </div>

                    <div className="text-center pt-0.5">
                      <span className="text-[9px] font-mono text-teal-300/90 bg-teal-950/60 px-2 py-1 rounded-md border border-teal-800/40">
                        Offline-First • SQLite & BLoC • Geo-Tagging
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Tab Switcher at Bottom of Phone */}
            <div className="px-3 py-2.5 bg-[#0f1422] border-t border-slate-800/80 flex justify-around items-center z-30">
              <button 
                onClick={() => setActiveApp('emr_hr')}
                className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-all ${
                  activeApp === 'emr_hr' ? 'text-blue-400 scale-105' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck size={16} />
                <span>EMR HR</span>
              </button>

              <button 
                onClick={() => setActiveApp('emr_outreach')}
                className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-all ${
                  activeApp === 'emr_outreach' ? 'text-emerald-400 scale-105' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Activity size={16} />
                <span>Outreach</span>
              </button>
            </div>

            {/* Home Indicator Bar */}
            <div className="py-1 flex justify-center bg-[#0b0f19]">
              <div className="w-24 h-1 bg-slate-500/50 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
