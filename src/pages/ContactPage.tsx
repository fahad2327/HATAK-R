import React from 'react';
import { Mail, Shield, Clock, FileCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { ContactForm } from '../components/forms/ContactForm';
import { COMPANY_METADATA } from '../data/approvedContent';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white">
      <PageHeader
        category="Direct Coordination Desk"
        title="Engineering & Pilot Site Inquiries"
        description="Connect with our systems engineering team for perimeter pilot site evaluations, technical integrations, or institutional collaboration requests."
        statusBadge="Default"
        statusLabel="Direct Desk"
      />

      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Official Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-subtle">
              <div className="mb-6 pb-4 border-b border-brand-border">
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider block">
                  Official Technical Intake
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mt-1">
                  Submit an Inquiry to Systems Engineering
                </h2>
                <p className="text-xs sm:text-sm text-brand-slate mt-1.5 leading-relaxed">
                  All submissions are validated server-side, encrypted in transit, and handled under strict confidentiality governance.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Direct Channels, SLA, and Security */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Mail Desks */}
              <Card
                header={
                  <span className="text-xs font-mono font-bold text-brand-navy uppercase tracking-wider">
                    DIRECT COMMUNICATION CHANNELS
                  </span>
                }
              >
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-brand-cool-grey text-brand-navy shrink-0">
                      <Mail className="w-4 h-4 text-brand-red" />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy block">
                        General Inquiries & Pilots
                      </span>
                      <a
                        href={`mailto:${COMPANY_METADATA.contactCoordinates.email}`}
                        className="font-mono text-xs text-brand-slate hover:text-brand-red transition-colors underline"
                      >
                        {COMPANY_METADATA.contactCoordinates.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-brand-border">
                    <div className="p-2 rounded bg-brand-cool-grey text-brand-navy shrink-0">
                      <Mail className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy block">
                        Systems & Engineering Desk
                      </span>
                      <a
                        href={`mailto:${COMPANY_METADATA.contactCoordinates.technicalDesk}`}
                        className="font-mono text-xs text-brand-slate hover:text-brand-red transition-colors underline"
                      >
                        {COMPANY_METADATA.contactCoordinates.technicalDesk}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-brand-border">
                    <div className="p-2 rounded bg-brand-cool-grey text-brand-slate shrink-0">
                      <Clock className="w-4 h-4 text-brand-slate" />
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy block">
                        Response SLA
                      </span>
                      <span className="text-xs text-brand-slate">
                        Typically within 1–2 business days for qualified industrial pilot and technical requests.
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security & Spam Prevention Advisory */}
              <div className="p-5 border border-brand-border bg-brand-cool-grey-light/50 rounded-lg space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Submission Security & Data Retention</span>
                </div>
                <p className="text-brand-slate leading-relaxed">
                  Inquiry submissions are protected by rate limiting, anti-automation honeypots, and input sanitization schemas. Contact records are handled exclusively by authorized personnel and are never sold or shared with external advertising networks.
                </p>
                <div className="pt-2 text-[11px] font-mono text-brand-slate border-t border-brand-border/60">
                  Confidentiality: Mutual NDAs available upon request for detailed site perimeter blueprints.
                </div>
              </div>

              {/* IP / Patent Reference */}
              <div className="p-5 border border-brand-border bg-white rounded-lg space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <FileCheck className="w-4 h-4 text-brand-red" />
                  <span>Patent Application Notice</span>
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
