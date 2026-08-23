import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <div className="mesh-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-[var(--muted)] border-t border-[var(--border)]">
        <p className="text-sm">
          © {new Date().getFullYear()} CR Poudyal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
