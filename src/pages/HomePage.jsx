import React from 'react';
import { Hero } from '../features/hero/index.js';
import { TechStack } from '../features/skills/index.js';
import { Experience } from '../features/experience/index.js';
import { Projects } from '../features/projects/index.js';
import { Contact } from '../features/contact/index.js';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;
