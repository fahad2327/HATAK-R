import React from 'react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Shield } from 'lucide-react';
import { COMPANY_METADATA } from '../data/approvedContent';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white">
      <PageHeader
        category="Legal Governance"
        title="Privacy Policy & Data Handling Practices"
        description="Transparent disclosure regarding the collection, transmission, processing, and retention of personal and technical data submitted to HATAK R™."
        statusBadge="Default"
        statusLabel="Last Revised: October 2026"
      />

      <section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 text-sm text-brand-slate leading-relaxed">
            {/* Core Principle Callout */}
            <div className="p-6 bg-brand-cool-grey-light/70 border border-brand-border rounded-lg text-brand-navy space-y-2">
              <div className="flex items-center gap-2 font-bold text-base text-brand-navy">
                <Shield className="w-5 h-5 text-brand-red" />
                <span>Our Privacy Commitment</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                HATAK R™ is an engineering-focused enterprise technology company. We do not operate ad trackers, surveillance cookies, or data-brokering mechanisms. We collect only what is strictly necessary to evaluate and respond to inbound engineering and business inquiries.
              </p>
            </div>

            {/* 1. Information Collected */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                1. Information We Collect
              </h2>
              <p>
                When you interact with our website or submit an inquiry, we collect information across two distinct categories:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-brand-navy">Directly Provided Information:</strong> When submitting an inquiry via our contact form, we collect your full name, work email address, organization/facility name, inquiry objective, optional site perimeter descriptions, and technical inquiry message.
                </li>
                <li>
                  <strong className="text-brand-navy">Technical Server Logs:</strong> When accessing our website, our server automatically records standard, non-identifying operational telemetry: client IP address (used strictly for ephemeral rate limiting and DDoS defense), user-agent string, timestamp, and requested endpoint.
                </li>
              </ul>
            </div>

            {/* 2. Purpose of Processing */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                2. Purpose of Data Processing
              </h2>
              <p>
                Information collected is processed exclusively for the following lawful operational purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>Evaluating your facility's suitability for HATAK R™ field pilot installations.</li>
                <li>Responding directly to business, research, or investor due-diligence communications.</li>
                <li>Maintaining server security, preventing automated bot abuse, and protecting API endpoints against denial-of-service attempts.</li>
              </ul>
              <p>
                We do not sell, rent, monetize, or disclose your corporate or personal data to any marketing third parties.
              </p>
            </div>

            {/* 3. Server Security & Retention */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                3. Security Measures & Retention Schedule
              </h2>
              <p>
                We maintain disciplined administrative and technical safeguards designed to protect submitted information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>All network communications are transmitted using Transport Layer Security (TLS 1.3 / HTTPS).</li>
                <li>API endpoints implement server-side schema verification, rate-limiting thresholds, and honeypot countermeasures.</li>
                <li>Inquiry records are retained only for the duration necessary to satisfy the business engagement or pilot evaluation, after which records are scheduled for secure deletion upon written request.</li>
              </ul>
              <div className="p-4 bg-brand-cool-grey-light/50 border border-brand-border rounded text-xs text-brand-slate">
                <strong className="text-brand-navy">Realistic Security Notice:</strong> No digital transmission or storage method is infallible. While we engineer rigorous safeguards, we do not claim that any system is "impenetrable." Security is a continuous operational discipline involving active patching and auditing.
              </div>
            </div>

            {/* 4. Subprocessors & Third-Party Services */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                4. Third-Party Service Providers
              </h2>
              <p>
                In production deployments, we may utilize trusted infrastructure providers to deliver services:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong className="text-brand-navy">Managed Hosting & Cloud:</strong> Infrastructure providers hosting our encrypted web services and reverse proxies.</li>
                <li><strong className="text-brand-navy">Transactional Mail:</strong> Server-side SMTP or transactional email dispatchers to transmit inquiry alerts to our systems desk.</li>
              </ul>
              <p>
                No third-party AI model receives personal visitor data or site surveillance recordings without explicit prior bilateral consent.
              </p>
            </div>

            {/* 5. User Rights & Data Deletion */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                5. Your Rights & Data Contact
              </h2>
              <p>
                You retain the right to inspect, correct, or request the immediate deletion of any personal information provided to HATAK R™. To exercise these rights, or to direct questions regarding our data governance, contact our data coordinator:
              </p>
              <div className="p-4 border border-brand-border bg-brand-cool-grey-light/30 rounded font-mono text-xs">
                <span className="text-brand-slate block">Data Governance Officer:</span>
                <span className="font-bold text-brand-navy">{COMPANY_METADATA.contactCoordinates.email}</span>
                <span className="text-brand-slate block mt-1">Subject Line: DATA INQUIRY / DELETION REQUEST</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
