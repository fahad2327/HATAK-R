import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-brand-navy selection:bg-brand-cool-grey selection:text-brand-navy font-sans">
        {/* Skip to Main Content Link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-navy focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-red text-xs font-mono font-medium"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
