import React from 'react';
import { Smartphone, Heart, ArrowUp } from 'lucide-react';
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-[var(--border)] bg-[var(--card)]/40 backdrop-blur-md relative z-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-[var(--border)]">
          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center text-white shadow-md">
                <Smartphone size={16} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[var(--foreground)]">
                CR Poudyal
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-sm">
              Full Stack Mobile Application Developer specializing in Flutter, Dart, Clean Architecture, and Cross-Platform Apps.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-[var(--muted)]">
            <a href="/#about" className="hover:text-[var(--accent)] transition-colors">About</a>
            <a href="/#skills" className="hover:text-[var(--accent)] transition-colors">Skills</a>
            <a href="/#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
            <a href="/#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
            <a href="/#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
            <a href="/assets/CR-Poudyal-cv.pdf" download="CR-Poudyal-CV.pdf" className="text-[var(--accent)] hover:underline font-semibold">Resume</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.github.com/crpoudyal" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 border border-[var(--border)] transition-all"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chudaraj-poudyal/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 border border-[var(--border)] transition-all"
            >
              <FiLinkedin size={18} />
            </a>
            <a 
              href="https://www.youtube.com/imagineitnepal" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="p-2.5 rounded-xl bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 border border-[var(--border)] transition-all"
            >
              <FiYoutube size={18} />
            </a>
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all ml-2"
              title="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Chudaraj Poudyal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart size={13} className="text-red-500 fill-red-500" />
            <span>for Flutter & Mobile Excellence • Nepal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
