import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme.js';
import { Moon, Sun, Menu, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-5xl glass-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex justify-between items-center transition-all duration-300 ${
            scrolled ? 'shadow-xl shadow-black/5 dark:shadow-black/30 backdrop-blur-2xl' : ''
          }`}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="CR Poudyal Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-secondary)] flex items-center justify-center text-white shadow-md shadow-[var(--accent)]/30 group-hover:scale-105 transition-transform duration-300">
              <Smartphone size={16} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                CR Poudyal
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--muted)] -mt-1 hidden sm:block">
                Flutter Dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--accent)] hover:bg-[var(--surface)]/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Status Pill + Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for work
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-full hover:bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 hover:rotate-12 active:scale-95 border border-transparent hover:border-[var(--border)]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-slate-600" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[var(--surface)] text-[var(--foreground)] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-card p-6 shadow-2xl border border-[var(--border)] rounded-3xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] mb-1">
                <span className="text-xs uppercase font-mono tracking-wider text-[var(--muted)]">Menu</span>
                <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Available
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium rounded-xl hover:bg-[var(--surface)] text-[var(--foreground)] hover:text-[var(--accent)] transition-all flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-[var(--muted)] text-sm">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-[var(--border)] flex justify-between items-center text-xs text-[var(--muted)]">
                <span>Biratnagar, Nepal</span>
                <a
                  href="/assets/CR-Poudyal-cv.pdf"
                  download="CR-Poudyal-CV.pdf"
                  className="font-semibold text-[var(--accent)]"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
