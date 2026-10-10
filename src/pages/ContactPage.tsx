import React from 'react';
import { Mail, Shield, Clock, FileCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { ContactForm } from '../components/forms/ContactForm';
import { COMPANY_METADATA } from '../data/approvedContent';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Direct Coordination Desk"
        title="Engineering & Business Inquiries"
        description="Connect with our systems engineering team for perimeter pilot site evaluations, technical integrations, or due diligence requests."
        statusBadge="Default"
        statusLabel="Direct Desk"
      />

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-brand-border rounded-sm shadow-subtle">
              <div className="mb-6 pb-4 border-b border-brand-border">
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider block">
                  Official Technical Intake
                </span>
                <h2 className="text-xl font-bold text-brand-navy mt-1">
                  Submit an Inquiry to Systems Engineering
                </h2>
                <p className="text-xs text-brand-slate mt-1">
                  All submissions are validated server-side, encrypted in transit, and reviewed under strict non-disclosure terms.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Contact Details, Governance, and Security Protocol */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Mail Desks */}
              <Card
                header={
                  <span className="text-xs font-mono font-bold text-brand-navy">
                    DIRECT COMMUNICATION CHANNELS
                  </span>
                }
              >
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">
                        General Inquiries & Pilots
                      </span>
                      <a
                        href={`mailto:${COMPANY_METADATA.contactCoordinates.email}`}
                        className="font-mono text-brand-navy hover:text-brand-red transition-colors underline"
                      >
                        {COMPANY_METADATA.contactCoordinates.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-brand-border">
                    <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">
                        Systems & Engineering Desk
                      </span>
                      <a
                        href={`mailto:${COMPANY_METADATA.contactCoordinates.technicalDesk}`}
                        className="font-mono text-brand-navy hover:text-brand-red transition-colors underline"
                      >
                        {COMPANY_METADATA.contactCoordinates.technicalDesk}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-brand-border">
                    <Clock className="w-4 h-4 text-brand-slate shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-brand-navy block">
                        Response SLA
                      </span>
                      <span className="text-brand-slate">
                        Typically within 1–2 business days for qualified institutional and pilot requests.
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security & Spam Prevention Advisory */}
              <div className="p-5 border border-brand-border bg-brand-cool-grey-light/40 rounded-sm space-y-3 text-xs">
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Submission Security & Data Retention</span>
                </div>
                <p className="text-brand-slate leading-relaxed">
                  Inquiry submissions are protected by rate limiting, anti-automation honeypots, and input sanitization schemas. Contact records are handled exclusively by authorized personnel and are never sold or shared with external advertising networks.
                </p>
                <div className="pt-2 text-[11px] font-mono text-brand-slate border-t border-brand-border">
                  Confidentiality: Mutual NDAs available upon request for detailed site perimeter blueprints.
                </div>
              </div>

              {/* IP / Patent Reference */}
              <div className="p-5 border border-brand-border bg-white rounded-sm space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <FileCheck className="w-4 h-4 text-brand-red" />
                  <span>Patent Notice</span>
                </div>
                <p className="text-brand-slate leading-relaxed">
                  {COMPANY_METADATA.ipStatus.patentNotice}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
