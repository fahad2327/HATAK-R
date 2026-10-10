import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { RECOGNITION_ITEMS } from '../data/approvedContent';

export const PartnersPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Ecosystem & Verification"
        title="Institutional Recognition & Strategic Partnerships"
        description="Factual overview of incubation affiliations, deep-tech ecosystem participation, and verified intellectual property filings."
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

      {/* Governance Standards Advisory */}
      <section>
        <Container>
          <div className="p-4 bg-brand-cool-grey-light border border-brand-border rounded-sm text-xs text-brand-slate leading-relaxed">
            <span className="font-bold text-brand-navy block mb-0.5">Content Integrity Standards:</span>
            In strict compliance with startup ethics, HATAK R™ publishes only verified institutional relationships and certified IP filings. We do not display synthetic client logos, paid awards, or unauthorized university seals.
          </div>
        </Container>
      </section>

      {/* Verified Recognition Statements */}
      <section>
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Verified Facts
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Ecosystem & Intellectual Property Record
            </h2>
          </div>

          <div className="space-y-6">
            {RECOGNITION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-white border border-brand-border rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-brand-red uppercase">
                      {item.category}
                    </span>
                    <span className="text-brand-slate">•</span>
                    <span className="text-xs font-mono text-brand-slate">Record 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <Badge status="Default" label={item.status} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Pathways */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Collaboration Framework
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Structured Partnership Channels
            </h2>
            <p className="text-xs text-brand-slate mt-2 leading-relaxed">
              We collaborate with established defense contractors, physical security integrators, and academic labs across three defined models:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              header={
                <span className="text-xs font-mono font-bold text-brand-navy">
                  CHANNEL 01
                </span>
              }
            >
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-brand-navy text-sm">
                  Field Pilot & Facility Hosts
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Industrial operators who host instrumented test arrays along boundary fences to benchmark detection metrics against operational false alarm criteria.
                </p>
                <div className="pt-2">
                  <Link to="/contact?type=pilot" className="text-brand-red font-semibold hover:underline flex items-center gap-1">
                    Apply as Pilot Host <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card
              header={
                <span className="text-xs font-mono font-bold text-brand-navy">
                  CHANNEL 02
                </span>
              }
            >
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-brand-navy text-sm">
                  Hardware & Optics OEMs
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Manufacturers of precision industrial stepper motors, continuous slip rings, and ruggedized optical lenses seeking embedded reference designs.
                </p>
                <div className="pt-2">
                  <Link to="/contact" className="text-brand-red font-semibold hover:underline flex items-center gap-1">
                    OEM Integration <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card
              header={
                <span className="text-xs font-mono font-bold text-brand-navy">
                  CHANNEL 03
                </span>
              }
            >
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-brand-navy text-sm">
                  Security Integrators & VMS Vendors
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Software companies developing video management software (VMS) interested in integrating ONVIF/RTSP vector telemetry metadata from HATAK R™ nodes.
                </p>
                <div className="pt-2">
                  <Link to="/contact" className="text-brand-red font-semibold hover:underline flex items-center gap-1">
                    VMS Integration <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="border border-brand-border bg-white rounded-sm p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-brand-navy">
              Discuss Institutional Affiliations
            </h3>
            <p className="text-xs text-brand-slate max-w-lg mx-auto leading-relaxed">
              For technology transfer offices, government deep-tech funds, or institutional partnerships, reach out directly to our corporate development desk.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="primary" size="lg">
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
