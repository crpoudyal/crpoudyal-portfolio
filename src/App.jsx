import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <div className="mesh-bg"></div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      
      <footer className="py-8 text-center text-[var(--muted)] border-t border-[var(--border)]">
        <p className="text-sm">
          © {new Date().getFullYear()} CR Poudyal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
