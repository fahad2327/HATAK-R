import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { TechnologyPage } from '../pages/TechnologyPage';
import { IndustriesPage } from '../pages/IndustriesPage';
import { ResearchPage } from '../pages/ResearchPage';
import { PartnersPage } from '../pages/PartnersPage';
import { ContactPage } from '../pages/ContactPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { TermsPage } from '../pages/TermsPage';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

// Restore scroll position on route change
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// 404 Not Found Page
export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center">
      <Container>
        <div className="max-w-md mx-auto bg-white border border-brand-border p-8 rounded-xl shadow-card space-y-4">
          <span className="text-xs font-mono font-bold text-brand-red uppercase">
            Error 404 • Resource Not Located
          </span>
          <h1 className="text-3xl font-bold text-brand-navy">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-slate leading-relaxed">
            The requested technical route does not exist or has been relocated within the HATAK R™ specification index.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/">
              <Button variant="primary" size="md">
                Return to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md">
                Contact Desk
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Solutions and Sub-routes */}
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:group" element={<SolutionsPage />} />
        
        {/* Technology Architecture */}
        <Route path="/technology" element={<TechnologyPage />} />
        
        {/* Industries and Sub-routes */}
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustriesPage />} />
        
        {/* R&D (supporting both /rd and /rnd) */}
        <Route path="/rd" element={<ResearchPage />} />
        <Route path="/rnd" element={<ResearchPage />} />
        
        {/* About, Partners, Contact */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Legal & Compliance */}
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        
        {/* 404 Route */}
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
