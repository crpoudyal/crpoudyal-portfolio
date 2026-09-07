import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { App } from './App.jsx';
import { AppProviders } from './provider.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </StrictMode>
  );
}
