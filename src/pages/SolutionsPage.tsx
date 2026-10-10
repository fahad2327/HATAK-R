import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CAPABILITIES } from '../data/approvedContent';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Solutions Overview"
        title="Multi-Layered Perimeter Surveillance & Verification"
        description="Comprehensive technical capabilities spanning optical sensor ingestion, edge convolutional classification, motorized targeting, and operator verification."
        statusBadge="Demonstrated"
        statusLabel="Prototype Bench Tested"
        actions={
          <Link to="/contact?type=pilot">
            <Button variant="primary" size="md">
              Discuss a Use Case
            </Button>
          </Link>
        }
      />

      {/* Safety Notice Callout */}
      <section>
        <Container>
          <div className="p-4 bg-brand-navy text-white rounded-sm border border-brand-navy flex items-start gap-4 text-xs">
            <div className="p-2 bg-brand-red text-white rounded-sm shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white uppercase font-mono tracking-wider block mb-1">
                Capability Status & Safety Policy
              </span>
              <p className="text-slate-300 leading-relaxed">
                All capabilities below are explicitly tagged with their current implementation status. Physical response interfaces are restricted strictly to non-lethal, human-in-the-loop acoustic/optical deterrents and require customer-specific legal compliance before pilot activation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep Dive Capability Modules */}
      <section>
        <Container>
          <div className="space-y-8">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className="border border-brand-border bg-white rounded-sm overflow-hidden p-6 md:p-8 hover:border-brand-navy/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-brand-border">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-brand-red">
                        CAPABILITY 0{idx + 1} • {cap.category.toUpperCase()}
                      </span>
                      <Badge status={cap.status} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-navy">
                      {cap.title}
                    </h2>
                    <p className="text-sm text-brand-slate max-w-2xl leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  <div className="lg:w-80 shrink-0 p-4 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm text-xs">
                    <span className="font-mono uppercase font-semibold text-brand-navy block mb-1">
                      Technical Verification
                    </span>
                    <p className="text-brand-slate leading-relaxed">
                      {cap.technicalDetails}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <span className="font-mono text-brand-slate">
                    Implementation Tier: <strong className="text-brand-navy">{cap.status}</strong>
                  </span>
                  <Link to={`/contact?type=pilot&module=${cap.id}`}>
                    <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
                      Inquire About {cap.category} Integration
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Response Workflow */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Protocol Governance
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              The 4-Step Incident Verification Loop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-3">
              <span className="text-xs font-mono font-bold text-brand-red">STEP 01</span>
              <h3 className="font-bold text-brand-navy text-sm">Optical Ingress</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                IP perimeter cameras stream raw frames to edge nodes. Image feeds undergo low-latency preprocessing and background subtraction.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-3">
              <span className="text-xs font-mono font-bold text-brand-red">STEP 02</span>
              <h3 className="font-bold text-brand-navy text-sm">Neural Classification</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                CNN processes frames in real-time, extracting person coordinates and discarding environmental artifacts (animals, wind-blown branches).
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-3">
              <span className="text-xs font-mono font-bold text-brand-red">STEP 03</span>
              <h3 className="font-bold text-brand-navy text-sm">Target Slew & Alert</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                ECU commands motorized mount to slew toward coordinate vector. High-priority telemetry dispatch sent to central security desk.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-3">
              <span className="text-xs font-mono font-bold text-brand-red">STEP 04</span>
              <h3 className="font-bold text-brand-navy text-sm">Operator Authority</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Security operator confirms target visually. Operator executes verbal challenge, spotlight, or alerts physical dispatch personnel.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="border border-brand-border bg-white rounded-sm p-8 md:p-12 text-center space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">
              Evaluate Solutions for Your Specific Facility
            </h2>
            <p className="text-sm text-brand-slate max-w-xl mx-auto leading-relaxed">
              Our engineering team works directly with corporate security directors and facility operators to analyze perimeter topology and sensor density requirements.
            </p>
            <div className="pt-2">
              <Link to="/contact?type=pilot">
                <Button variant="primary" size="lg">
                  Discuss a Use Case with Systems Engineering
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
