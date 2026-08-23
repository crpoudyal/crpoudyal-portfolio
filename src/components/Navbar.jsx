import React from 'react';
import { useTheme } from '../ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 glass-card px-6 py-3 rounded-full flex justify-between items-center transition-all duration-300">
      <div className="font-bold text-xl tracking-tight text-[var(--foreground)]">
        <span className="text-[var(--accent)]">&gt;</span> crpoudyal
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a href="#about" className="text-sm hover:text-[var(--accent)] font-medium transition-colors">About</a>
        <a href="#experience" className="text-sm hover:text-[var(--accent)] font-medium transition-colors">Experience</a>
        <a href="#projects" className="text-sm hover:text-[var(--accent)] font-medium transition-colors">Projects</a>
        <a href="#contact" className="text-sm hover:text-[var(--accent)] font-medium transition-colors">Contact</a>
      </div>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[var(--surface)] transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    </nav>
  );
};

export default Navbar;
