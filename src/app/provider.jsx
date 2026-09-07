import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../stores/ThemeContext.jsx';

export const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
