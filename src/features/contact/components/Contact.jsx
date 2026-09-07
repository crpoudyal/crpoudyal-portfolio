import React, { useState } from 'react';
import { sendContactMessage } from '../services/contactService.js';
import { Mail, MessageSquare, Send, CheckCircle2, Copy, Check, MapPin, Clock } from 'lucide-react';
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [copied, setCopied] = useState(false);

  const emailAddress = "crpoudyal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await sendContactMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.warn("Supabase message insert:", err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-4 border border-[var(--accent)]/20">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let's Build Your Next Mobile App
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Have an app idea, a mobile development position, or need Flutter engineering consultation? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Availability Banner */}
            <div className="glass-card p-6 rounded-3xl border border-[var(--border)] space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Current Status: Available
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                Ready for New Challenges
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Currently open to <strong>Full-time Mobile Developer roles</strong>, remote international opportunities, and high-impact Flutter contract projects.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-card p-6 rounded-3xl border border-[var(--border)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)]">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline focus:outline-none"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a 
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[var(--surface)] hover:bg-[var(--accent)]/10 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--card)] flex items-center justify-center text-[var(--accent)] shadow-sm group-hover:scale-105 transition-transform border border-[var(--border)]">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--muted)]">Mail directly to</p>
                  <p className="text-sm sm:text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                    {emailAddress}
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Timezone Details */}
            <div className="glass-card p-6 rounded-3xl border border-[var(--border)] space-y-3 text-xs sm:text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[var(--accent)] shrink-0" />
                <span>Biratnagar & Kathmandu, Nepal (Available Worldwide Remote)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[var(--accent-secondary)] shrink-0" />
                <span>Timezone: GMT+5:45 (Flexible overlap with US/EU/Asia)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.github.com/crpoudyal" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 p-3 rounded-2xl glass-card flex items-center justify-center gap-2 text-xs font-semibold text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/chudaraj-poudyal/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 p-3 rounded-2xl glass-card flex items-center justify-center gap-2 text-xs font-semibold text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
              >
                <FiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.youtube.com/imagineitnepal" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 p-3 rounded-2xl glass-card flex items-center justify-center gap-2 text-xs font-semibold text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
              >
                <FiYoutube size={16} />
                <span>YouTube</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-[var(--border)] relative overflow-hidden"
          >
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-[var(--card)]/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 z-30"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Message Received!</h3>
                  <p className="text-[var(--muted)] text-sm max-w-sm mb-6">
                    Thank you for reaching out. I'll review your message and reply via email within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="btn-secondary text-xs"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-xs font-semibold text-[var(--foreground)] mb-1.5 uppercase font-mono tracking-wider"
                >
                  Your Name *
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[var(--surface)]/60 border border-[var(--border)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--accent)]/10 outline-none transition-all text-sm text-[var(--foreground)]"
                  placeholder="e.g. Alex Johnson"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs font-semibold text-[var(--foreground)] mb-1.5 uppercase font-mono tracking-wider"
                >
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[var(--surface)]/60 border border-[var(--border)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--accent)]/10 outline-none transition-all text-sm text-[var(--foreground)]"
                  placeholder="e.g. alex@company.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs font-semibold text-[var(--foreground)] mb-1.5 uppercase font-mono tracking-wider"
                >
                  Project Details or Inquiry *
                </label>
                <textarea 
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-[var(--surface)]/60 border border-[var(--border)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--accent)]/10 outline-none transition-all text-sm text-[var(--foreground)] resize-none"
                  placeholder="Tell me about your mobile app project, requirements, or role timeline..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs">
                  Couldn't submit automatically. Please feel free to email me directly at{' '}
                  <a href={`mailto:${emailAddress}`} className="font-bold underline">
                    {emailAddress}
                  </a>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full btn-primary py-4 text-sm font-bold flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span>Submitting message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
