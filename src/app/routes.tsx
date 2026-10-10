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

// Utility component to restore scroll position on route change
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
        <div className="max-w-md mx-auto space-y-4">
          <span className="text-xs font-mono font-bold text-brand-red uppercase">
            Error 404 • Resource Not Located
          </span>
          <h1 className="text-3xl font-extrabold text-brand-navy">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-slate">
            The requested technical route does not exist or has been relocated within the HATAK R™ specification index.
          </p>
          <div className="pt-4">
            <Link to="/">
              <Button variant="primary" size="md">
                Return to System Overview
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/rnd" element={<ResearchPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
