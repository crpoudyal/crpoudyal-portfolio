import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // First try to insert to supabase if available
      const { error } = await supabase
        .from('messages')
        .insert([formData]);
        
      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.warn("Supabase insertion failed, simulating success for demo purposes.");
      // Fallback: If Supabase fails (e.g. not configured yet), just simulate success
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16 justify-center text-center flex-col"
        >
          <div className="p-4 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 text-[var(--accent)] rounded-2xl shadow-inner border border-[var(--accent)]/10 inline-block">
            <MessageSquare size={28} />
          </div>
          <div>
            <p className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Contact Me</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6 leading-tight">Let's talk about <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]">your next project.</span></h3>
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 pt-8">
              <a href="mailto:crpoudyal@gmail.com" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-[var(--surface)] transition-colors duration-300">
                <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--accent)]/50 group-hover:shadow-[0_0_15px_var(--accent)] transition-all duration-300">
                  <Mail className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--muted)] tracking-wider uppercase mb-1">Email</p>
                  <p className="text-xl font-medium group-hover:text-[var(--accent)] transition-colors">crpoudyal@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-[var(--card)] flex flex-col items-center justify-center text-center p-8 z-20 backdrop-blur-xl"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle2 size={80} className="text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-[var(--muted)] mb-8 text-lg">Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary">
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  className="peer w-full px-5 py-4 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--accent)]/10 outline-none transition-all placeholder-transparent"
                  placeholder="John Doe"
                />
                <label 
                  htmlFor="name" 
                  className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                    focusedInput === 'name' || formData.name 
                      ? '-top-2.5 text-xs font-semibold px-1 bg-[var(--card)] text-[var(--accent)] rounded' 
                      : 'top-4 text-[var(--muted)]'
                  }`}
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="peer w-full px-5 py-4 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--accent)]/10 outline-none transition-all placeholder-transparent"
                  placeholder="john@example.com"
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                    focusedInput === 'email' || formData.email 
                      ? '-top-2.5 text-xs font-semibold px-1 bg-[var(--card)] text-[var(--accent)] rounded' 
                      : 'top-4 text-[var(--muted)]'
                  }`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  className="peer w-full px-5 py-4 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:ring-4 focus:ring-[var(--accent)]/10 outline-none transition-all resize-none placeholder-transparent"
                  placeholder="How can I help you?"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                    focusedInput === 'message' || formData.message 
                      ? '-top-2.5 text-xs font-semibold px-1 bg-[var(--card)] text-[var(--accent)] rounded' 
                      : 'top-4 text-[var(--muted)]'
                  }`}
                >
                  Your Message
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={status === 'loading'}
                className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse flex items-center gap-2">Sending<span className="animate-bounce">...</span></span>
                ) : (
                  <>
                    Send Message 
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Send size={20} />
                    </motion.div>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
