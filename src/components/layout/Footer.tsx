import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { COMPANY_METADATA } from '../../data/approvedContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-brand-navy-surface pt-16 pb-12 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Identity & Official Registration (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Hatak R Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  HATAK R™
                </span>
                <span className="block text-xs text-slate-400">
                  {COMPANY_METADATA.legalEntity}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {COMPANY_METADATA.corePhilosophy}
            </p>

            <div className="p-3.5 bg-slate-900/80 rounded border border-slate-800 text-xs font-mono space-y-1.5 text-slate-400">
              <div className="flex justify-between">
                <span className="text-slate-500">DPIIT Recognition:</span>
                <span className="text-white font-medium">Certificate {COMPANY_METADATA.dpiitRecognition.certificateNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patent Application:</span>
                <span className="text-white font-medium">No. {COMPANY_METADATA.ipStatus.patentNumber} (Pending)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Registered Office:</span>
                <span className="text-slate-300">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Technology (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/solutions/vision" className="hover:text-white transition-colors">
                  Machine Vision
                </Link>
              </li>
              <li>
                <Link to="/solutions/embedded-control" className="hover:text-white transition-colors">
                  Embedded Control
                </Link>
              </li>
              <li>
                <Link to="/solutions/mechanical-systems" className="hover:text-white transition-colors">
                  Mechanical Systems
                </Link>
              </li>
              <li>
                <Link to="/solutions/monitoring" className="hover:text-white transition-colors">
                  Central Monitoring
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition-colors">
                  System Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Research (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About & Founder
                </Link>
              </li>
              <li>
                <Link to="/rd" className="hover:text-white transition-colors">
                  R&D Milestones
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries & Use Cases
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  Partners & Recognition
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance & Ethics (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Safety & Governance
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_METADATA.ipStatus.regulatoryNotice}
            </p>
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy & Data Handling
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use & Disclaimers
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_METADATA.legalEntity}. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            Registered: DPIIT Recognized
          </div>
        </div>
      </Container>
    </footer>
  );
};
