import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { COMPANY_METADATA } from '../data/approvedContent';

export const ResearchPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Research & Development"
        title="Hardware Milestones & Neural Verification"
        description="Documenting bench testing methodologies, embedded controller firmware development, patent application disclosures, and upcoming field trials."
        statusBadge="Patent Pending"
        statusLabel="Indian Patent Application Filed"
        actions={
          <Link to="/contact">
            <Button variant="primary" size="md">
              Partner on R&D
            </Button>
          </Link>
        }
      />

      {/* Patent Disclosure Status Section */}
      <section>
        <Container>
          <div className="border border-brand-border bg-white rounded-sm p-8 shadow-subtle space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-brand-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-sm bg-brand-navy text-white">
                  <Lock className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-brand-navy">
                    Intellectual Property Disclosure
                  </h2>
                  <span className="text-xs font-mono text-brand-slate">
                    Indian Patent Office • Tracking & Electronic Control System
                  </span>
                </div>
              </div>
              <Badge status="Patent Pending" label="Application Filed — Not Yet Granted" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-brand-slate">
              <div className="space-y-2">
                <span className="font-mono font-bold uppercase text-brand-navy block">
                  Patent Filing Abstract
                </span>
                <p className="leading-relaxed">
                  {COMPANY_METADATA.ipStatus.patentDescription} Covers the novel integration of edge camera vector calculation with closed-loop motorized targeting alignment and failsafe electronic hardware watchdog interlocks.
                </p>
              </div>

              <div className="space-y-2 bg-brand-cool-grey-light/50 p-4 rounded-sm border border-brand-border text-[11px]">
                <span className="font-mono font-bold uppercase text-brand-navy block">
                  Legal Compliance Statement
                </span>
                <p className="leading-relaxed">
                  HATAK R™ explicitly notes that this filing constitutes a pending application under statutory review by the patent authority. No assertion of granted patent rights is made.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bench Testing Methodologies */}
      <section>
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Verification Rigor
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Laboratory & Bench Test Methodologies
            </h2>
            <p className="text-xs text-brand-slate mt-2 leading-relaxed">
              Every prototype hardware component undergoes rigorous stress-testing to ensure deterministic performance before entering industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              header={
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-brand-navy">METHOD 01</span>
                  <Badge status="Demonstrated" label="Completed" />
                </div>
              }
            >
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-brand-navy text-sm">
                  Neural Inference Latency Profiling
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Quantized model execution measured across thousands of high-definition frames to benchmark frame-to-bounding-box processing times under thermal load.
                </p>
                <div className="p-2.5 bg-brand-cool-grey-light rounded-sm font-mono text-[11px] text-brand-navy">
                  Verified Latency: &lt; 45ms per frame
                </div>
              </div>
            </Card>

            <Card
              header={
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-brand-navy">METHOD 02</span>
                  <Badge status="Demonstrated" label="Completed" />
                </div>
              }
            >
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-brand-navy text-sm">
                  Closed-Loop Motor Slew Dynamics
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Step-response analysis of the dual-axis mount under acceleration limits. Optical encoder logs verify angular repeatability without overshoot or hunting.
                </p>
                <div className="p-2.5 bg-brand-cool-grey-light rounded-sm font-mono text-[11px] text-brand-navy">
                  Repeatability: &plusmn; 0.2&deg; angular accuracy
                </div>
              </div>
            </Card>

            <Card
              header={
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-brand-navy">METHOD 03</span>
                  <Badge status="In Development" label="In Progress" />
                </div>
              }
            >
              <div className="space-y-3 text-xs">
                <h3 className="font-bold text-brand-navy text-sm">
                  Environmental False-Positive Filtering
                </h3>
                <p className="text-brand-slate leading-relaxed">
                  Challenging the classifier with real-world weather variance (monsoon rain, wind gusts on vegetation, night vehicle headlights) to eliminate false alarms.
                </p>
                <div className="p-2.5 bg-brand-cool-grey-light rounded-sm font-mono text-[11px] text-brand-navy">
                  In Progress: Dataset Expansion
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* R&D Collaboration & Research Partnerships */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="border border-brand-border bg-white rounded-sm p-8 md:p-10 space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Academic & Industry Partnerships
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
                Collaborate on Perimeter Defense R&D
              </h2>
              <p className="text-xs text-brand-slate mt-2 leading-relaxed">
                We welcome joint research initiatives with academic institutions, robotics laboratories, and defense electronics researchers focusing on embedded edge AI and autonomous mechatronics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-brand-cool-grey-light/40 border border-brand-border rounded-sm space-y-2">
                <span className="font-bold text-brand-navy block">Sensor Fusion & Multi-Spectral Research</span>
                <p className="text-brand-slate leading-relaxed">
                  Exploring integration of long-wave infrared (LWIR) thermal sensors and FMCW radar units with our existing optical CNN pipeline.
                </p>
              </div>

              <div className="p-4 bg-brand-cool-grey-light/40 border border-brand-border rounded-sm space-y-2">
                <span className="font-bold text-brand-navy block">Encrypted Mesh Telemetry Protocols</span>
                <p className="text-brand-slate leading-relaxed">
                  Developing lightweight cryptographic protocols for peer-to-peer perimeter node coordinate handoff in contested RF environments.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-brand-slate">
                Interested in publishing joint research or evaluating hardware?
              </span>
              <Link to="/contact">
                <Button variant="primary" size="md">
                  Inquire for Research Collaboration
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
