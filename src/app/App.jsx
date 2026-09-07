import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';

export const App = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 relative bg-grid-pattern flex flex-col justify-between">
      <div className="mesh-bg"></div>
      <Navbar />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
