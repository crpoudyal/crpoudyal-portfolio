import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

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
