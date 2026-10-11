import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building, FileText } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export const PartnersPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white">
      <PageHeader
        category="Ecosystem & Verification"
        title="Official Recognition & Strategic Collaborations"
        description="Factual overview of government startup certifications, academic research incubation, and structured industrial pilot channels."
        statusBadge="Default"
        statusLabel="Official Disclosures"
        actions={
          <Link to="/contact">
            <Button variant="primary" size="md">
              Partnership Enquiry
            </Button>
          </Link>
        }
      />

      {/* Governance & Integrity Advisory */}
      <section>
        <Container>
          <div className="p-4 bg-brand-cool-grey-light rounded-md border border-brand-border text-xs text-brand-slate leading-relaxed">
            <span className="font-semibold text-brand-navy block mb-0.5">Content Integrity Standards:</span>
            In strict adherence to corporate and startup ethics, HATAK R™ publishes only verified government certificates and institutional relationships. We do not display synthetic client logos, unverified awards, or unconfirmed corporate endorsements.
          </div>
        </Container>
      </section>

      {/* 1. Government Recognition */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section 01 • Statutory Accreditation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Government Recognition
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Official startup recognition granted under the Startup India initiative by the Ministry of Commerce & Industry.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Certificate Image: Clean, framed, balanced without dominating */}
              <div className="lg:col-span-5 bg-brand-cool-grey-light p-2 rounded-lg border border-brand-border">
                <div className="aspect-[3/4] max-h-[380px] overflow-hidden rounded bg-white border border-brand-border/70 flex items-center justify-center">
                  <img
                    src="/images/dpiit-certificate.png"
                    alt="DPIIT Certificate of Recognition DIPP250915"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pt-2 text-center text-[11px] font-mono text-brand-slate">
                  Official DPIIT Certificate of Recognition
                </div>
              </div>

              {/* Certificate Details */}
              <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-900 border border-emerald-300 font-mono font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>VERIFIED GOVERNMENT OF INDIA RECOGNITION</span>
                  </span>
                  <Badge status="Demonstrated" label="Active thru 2035" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                    DPIIT Startup Recognition — Certificate No. DIPP250915
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    Issued to <strong>HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED</strong> by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry.
                  </p>
                </div>

                <div className="p-4 bg-brand-cool-grey-light/60 rounded border border-brand-border font-mono text-xs space-y-2">
                  <div className="flex justify-between border-b border-brand-border/70 pb-1.5">
                    <span className="text-brand-slate">Certificate Number:</span>
                    <span className="font-bold text-brand-navy">DIPP250915</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-border/70 pb-1.5">
                    <span className="text-brand-slate">Issue Date:</span>
                    <span className="text-brand-navy">19-03-2026</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-border/70 pb-1.5">
                    <span className="text-brand-slate">Validity Period:</span>
                    <span className="text-brand-navy">Valid through 04-06-2035</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-slate">Industry Classification:</span>
                    <span className="text-brand-navy">Security Solutions / Home Security</span>
                  </div>
                </div>

                <p className="text-xs text-brand-slate leading-relaxed">
                  Confirms eligible startup status under the statutory gazette notifications of the Government of India, certifying our incorporation and engineering focus on non-lethal automated security technology.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Institutional and Research Collaborations */}
      <section className="bg-brand-cool-grey-light/50 border-y border-brand-border py-16">
        <Container>
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section 02 • Academic & Research Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Institutional & Research Collaborations
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Foundational research roots, laboratory facilities, and intellectual property development supported by recognized institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Velammal Institute of Technology */}
            <div className="bg-white p-6 rounded-lg border border-brand-border shadow-subtle space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-brand-cool-grey text-brand-navy">
                  <Building className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-navy">
                    Velammal Institute of Technology
                  </h3>
                  <span className="text-xs font-mono text-brand-slate">
                    Chennai, Tamil Nadu • Incubation & Lab Facilities
                  </span>
                </div>
              </div>

              <p className="text-xs text-brand-slate leading-relaxed">
                Primary institutional incubation base. The institution operates under the Ministry of Education's Institution's Innovation Council (IIC) and holds NBA & NAAC 'A' Grade accreditations. Research faculty and student engineers collaborate on applied mechanics, mechatronics, and embedded neural computing.
              </p>

              <div className="p-3 bg-brand-cool-grey-light rounded text-xs font-mono text-brand-navy space-y-1">
                <div>Affiliation: Anna University, Chennai</div>
                <div>Campus: Panchetti, Ponneri, Chennai - 601 204</div>
              </div>
            </div>

            {/* Indian Patent Office Record */}
            <div className="bg-white p-6 rounded-lg border border-brand-border shadow-subtle space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-brand-cool-grey text-brand-navy">
                  <FileText className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-brand-navy">
                    Indian Patent Office (Statutory Filing)
                  </h3>
                  <span className="text-xs font-mono text-brand-slate">
                    Application No: 202141014878 • Patent Pending
                  </span>
                </div>
              </div>

              <p className="text-xs text-brand-slate leading-relaxed">
                Filed application covering automated motorized tracking, CNN-based classification, and non-lethal perimeter targeting mechanism. Statutory review is ongoing; reference to application filings does not constitute a granted patent.
              </p>

              <div className="p-3 bg-brand-cool-grey-light rounded text-xs font-mono text-brand-navy space-y-1">
                <div>Technical Domains: Applied Mechanics & Machine Vision</div>
                <div>Status: Under Examination / Patent Pending</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Confirmed Industry Partners & Pathways */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section 03 • Industrial Collaboration Channels
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Industry Engagement Channels
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              We structure our external commercial relationships through three clearly defined engagement models:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card header={<span className="font-mono text-xs font-bold text-brand-navy">CHANNEL 01 • FIELD PILOTS</span>}>
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-base text-brand-navy">
                  Pilot Site Hosts
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Industrial perimeter operators, logistics yards, and commercial facility managers hosting supervised node installations to benchmark false-alarm mitigation.
                </p>
                <div className="pt-2">
                  <Link to="/contact?type=pilot" className="text-brand-red font-semibold hover:underline flex items-center gap-1">
                    Apply as Pilot Host <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card header={<span className="font-mono text-xs font-bold text-brand-navy">CHANNEL 02 • HARDWARE OEMS</span>}>
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-base text-brand-navy">
                  Hardware & Component OEMs
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Manufacturers of precision stepper motors, optical lenses, slip rings, and industrial camera sensors seeking embedded co-design integration.
                </p>
                <div className="pt-2">
                  <Link to="/contact" className="text-brand-red font-semibold hover:underline flex items-center gap-1">
                    OEM Integration <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card header={<span className="font-mono text-xs font-bold text-brand-navy">CHANNEL 03 • VMS INTEGRATORS</span>}>
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-base text-brand-navy">
                  Physical Security Integrators
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Systems integrators and Video Management Software (VMS) providers integrating ONVIF/RTSP vector telemetry metadata into centralized command consoles.
                </p>
                <div className="pt-2">
                  <Link to="/contact" className="text-brand-red font-semibold hover:underline flex items-center gap-1">
                    VMS Partnership <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section>
        <Container>
          <div className="bg-brand-navy text-white rounded-lg p-8 md:p-10 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Discuss Institutional Affiliations & Pilot Integration
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              For technology transfer offices, government innovation programs, or industrial perimeter pilots, connect with our corporate development desk.
            </p>
            <div className="pt-3">
              <Link to="/contact">
                <Button variant="red" size="md">
                  Submit Institutional Partnership Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
