import React from 'react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { AlertTriangle } from 'lucide-react';
import { COMPANY_METADATA } from '../data/approvedContent';

export const TermsPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white">
      <PageHeader
        category="Legal Governance"
        title="Terms of Service & Operational Disclaimers"
        description="Conditions governing access to and utilization of the HATAK R™ official website, technical documentation, and pilot inquiry systems."
        statusBadge="Default"
        statusLabel="Last Revised: October 2026"
      />

      <section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-10 text-sm text-brand-slate leading-relaxed">
            {/* Safety & Physical Force Critical Disclaimer */}
            <div className="p-6 bg-brand-navy text-white rounded-lg space-y-3 shadow-subtle">
              <div className="flex items-center gap-2 font-bold text-base text-brand-red">
                <AlertTriangle className="w-5 h-5 text-brand-red" />
                <span className="text-white">Strict Safety & Operational Disclaimer</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                This public website provides conceptual, engineering, and architectural information regarding HATAK R™ perimeter technology. This website does NOT contain or expose any operational controls, weapon actuation protocols, live camera control commands, or physical response triggers. Any physical deterrent functionality operates strictly through dedicated, hardware-interlocked field controllers subject to independent safety and regulatory licensing.
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or navigating the HATAK R™ website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should refrain from using this website or transmitting technical inquiries through our forms.
              </p>
            </div>

            {/* 2. Intellectual Property Rights */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                2. Intellectual Property & Patents
              </h2>
              <p>
                All text, diagrams, system schematics, UI components, code, and design tokens displayed on this website are the proprietary intellectual property of HATAK R™ and its founders, protected by applicable copyright and trade secret laws.
              </p>
              <div className="p-4 bg-brand-cool-grey-light/60 border border-brand-border rounded text-xs space-y-1">
                <strong className="text-brand-navy block">Statutory Patent Notice:</strong>
                <span>{COMPANY_METADATA.ipStatus.patentNotice} Reference to patent applications does not guarantee patent issuance. Unauthorized duplication of proprietary electromechanical or tracking designs is prohibited.</span>
              </div>
            </div>

            {/* 3. Representation of Technology & Prototypes */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                3. Technical Accuracy & Unreleased Features
              </h2>
              <p>
                Information presented on this site reflects the ongoing engineering research and prototype bench testing of HATAK R™. Features designated as "In Development" or "Planned" represent technical roadmaps, not currently commercialized or certified field products.
              </p>
              <p>
                We make no representation that unreleased features will be deployed identically to conceptual descriptions. Technical specifications are subject to revision during ongoing bench verification and formal compliance testing.
              </p>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                4. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, HATAK R™, its founders, engineers, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the information provided on this public website.
              </p>
            </div>

            {/* 5. Pilot Inquiries & NDA Governance */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                5. Pilot Inquiries & Non-Disclosure
              </h2>
              <p>
                Submitting a field pilot or technical inquiry through our contact form does not create a binding deployment contract, partnership, or legal obligation on either party. Formal pilot arrangements, site surveys, and access to internal firmware or CAD schematics require execution of a separate mutual Non-Disclosure Agreement (NDA) and Master Evaluation Agreement.
              </p>
            </div>

            {/* 6. Governing Law */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-navy">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles. Any legal proceedings arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
