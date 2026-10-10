import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Container } from './Container';
import { COMPANY_METADATA } from '../../data/approvedContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white border-t border-brand-navy mt-auto">
      {/* Safety & Compliance Verification Callout */}
      <div className="border-b border-white/10 py-8 bg-black/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-sm bg-white/5 border border-white/10 shrink-0 text-brand-red">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white uppercase font-mono tracking-wider text-[11px] mb-1">
                  Human-Supervised Protocol
                </h4>
                <p className="leading-relaxed">
                  HATAK R™ strictly implements human-in-the-loop verification before triggering any response or escalation workflow. Autonomous physical force is fundamentally prohibited.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-sm bg-white/5 border border-white/10 shrink-0 text-brand-red">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white uppercase font-mono tracking-wider text-[11px] mb-1">
                  Intellectual Property
                </h4>
                <p className="leading-relaxed">
                  {COMPANY_METADATA.ipStatus.patentNotice} Technical disclosures are constrained to published patent claims and engineering bench specifications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-sm bg-white/5 border border-white/10 shrink-0 text-brand-red">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white uppercase font-mono tracking-wider text-[11px] mb-1">
                  Verified Data & Status
                </h4>
                <p className="leading-relaxed">
                  All system capabilities are clearly designated as Demonstrated, In Development, or Planned. HATAK R™ does not fabricate customer metrics or certifications.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="py-12 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1: Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="HATAK R Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-lg tracking-tight text-white">
                  HATAK <span className="text-brand-red">R™</span>
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                {COMPANY_METADATA.legalEntity}. Incubated in partnership with Velammal Institute of Technology, Chennai. Redefining intelligent perimeter security through edge CNN classification and dual-motor targeting mounts.
              </p>
              <div className="pt-1 space-y-1 text-[11px] font-mono text-slate-400">
                <div>DPIIT Startup Certificate: <strong className="text-white">DIPP250915</strong></div>
                <div>Indian Patent App: <strong className="text-white">202141014878</strong></div>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-slate-light block mb-1">
                  Primary Coordination Desks
                </span>
                <div className="flex flex-col gap-1 text-xs font-mono">
                  <a
                    href={`mailto:${COMPANY_METADATA.contactCoordinates.email}`}
                    className="text-white hover:text-brand-red transition-colors underline decoration-white/30"
                  >
                    {COMPANY_METADATA.contactCoordinates.email}
                  </a>
                  <a
                    href={`mailto:${COMPANY_METADATA.contactCoordinates.teamLeadEmail}`}
                    className="text-slate-300 hover:text-brand-red transition-colors"
                  >
                    Team Lead: {COMPANY_METADATA.contactCoordinates.teamLeadEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: System & Tech */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Platform
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link to="/solutions" className="hover:text-white transition-colors">
                    Solutions Overview
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="hover:text-white transition-colors">
                    System Architecture
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-white transition-colors">
                    Industrial Sectors
                  </Link>
                </li>
                <li>
                  <Link to="/rnd" className="hover:text-white transition-colors">
                    R&D & Prototypes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Organization */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Organization
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    Company & Mission
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-white transition-colors">
                    Partners & Recognition
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Technical Inquiries
                  </Link>
                </li>
                <li>
                  <Link to="/contact?type=pilot" className="hover:text-white transition-colors">
                    Request a Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Governance & Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Governance
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <span className="text-slate-400 block text-[11px] mt-2">
                    DPIIT Status: Registration in Progress
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 block text-[11px]">
                    Internal Administration: Restricted
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright & Technical Sub-footer */}
      <div className="py-4 text-xs text-slate-400">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} HATAK R™. All rights reserved. Industrial Engineering & AI Systems.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>STRICT DISCLOSURE CONTROL</span>
            <span>•</span>
            <Link to="/privacy" className="hover:underline">
              DATA INTEGRITY
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:underline">
              DISCLAIMERS
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};
