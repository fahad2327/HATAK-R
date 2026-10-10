import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Camera, ArrowRight, Sliders } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Engineering Architecture"
        title="Hardware & Neural Vision Technology Stack"
        description="Detailed specifications of the embedded Electronic Control Unit (ECU), edge convolutional network pipeline, and precision closed-loop dual-axis targeting mount."
        statusBadge="Demonstrated"
        statusLabel="Bench Spec v1.0"
        actions={
          <Link to="/contact">
            <Button variant="primary" size="md">
              Submit Technical Enquiry
            </Button>
          </Link>
        }
      />

      {/* Main Interactive System Architecture Visual */}
      <section>
        <Container>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-brand-navy">
              System Architecture Flow
            </h2>
            <p className="text-xs text-brand-slate mt-1">
              Select any stage below to inspect data inputs, computational pipeline, egress telemetry, and safety gates.
            </p>
          </div>
          <ArchitectureDiagram />

          {/* Operational Workflow Blueprint */}
          <div className="mt-8 p-6 bg-white border border-brand-border rounded-sm shadow-subtle">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-brand-border">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-brand-red">
                  Decision Tree & Aiming Protocol
                </span>
                <h3 className="text-lg font-bold text-brand-navy">
                  Operational Control Flowchart
                </h3>
              </div>
              <Badge status="Demonstrated" label="System Architecture Flow" />
            </div>
            <div className="rounded-sm overflow-hidden border border-brand-border bg-white">
              <img
                src="/images/workflow.png"
                alt="HATAK R Operational Workflow: Input -> Decision -> Aiming -> Action"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-brand-slate leading-relaxed">
              <strong>Figure:</strong> Sequential pipeline: 1. Input & Detection (Optical RTSP to ECPU) &rarr; 2. Decision Phase (CNN Person Classification & Authorization Check) &rarr; 3. Aiming Phase (Azimuth & Altitude Motor Trajectory) &rarr; 4. Action Phase (Non-Lethal Response Trigger with Interlocks).
            </p>
          </div>
        </Container>
      </section>

      {/* Hardware Subsystems Technical Breakdown */}
      <section>
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Subsystem Schematics
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Engineered Hardware Subsystems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ECU Subsystem */}
            <Card
              header={
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-brand-navy">SUBSYSTEM 01</span>
                  <Badge status="Demonstrated" />
                </div>
              }
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-brand-red" />
                </div>
                <h3 className="font-bold text-brand-navy text-base">
                  Embedded Electronic Control Unit (ECU)
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  The physical nerve center of each HATAK R™ unit. Combines edge neural compute with isolated motor drive logic, watchdogs, and fault monitors.
                </p>
                <div className="space-y-2 border-t border-brand-border pt-3 text-[11px] font-mono">
                  <div className="flex justify-between text-brand-slate">
                    <span>Power Bus:</span>
                    <span className="text-brand-navy font-semibold">24V DC Isolated</span>
                  </div>
                  <div className="flex justify-between text-brand-slate">
                    <span>Inference Unit:</span>
                    <span className="text-brand-navy font-semibold">Edge Tensor Accelerators</span>
                  </div>
                  <div className="flex justify-between text-brand-slate">
                    <span>Safety Interlock:</span>
                    <span className="text-brand-navy font-semibold">Hardware Watchdog</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Motorized Mount */}
            <Card
              header={
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-brand-navy">SUBSYSTEM 02</span>
                  <Badge status="Demonstrated" />
                </div>
              }
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                  <Sliders className="w-4 h-4 text-brand-red" />
                </div>
                <h3 className="font-bold text-brand-navy text-base">
                  Dual-Axis Pan/Tilt Targeting Mount
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Closed-loop high-torque drive mechanism delivering rapid slewing and precise angular positioning towards detected perimeter coordinates.
                </p>
                <div className="space-y-2 border-t border-brand-border pt-3 text-[11px] font-mono">
                  <div className="flex justify-between text-brand-slate">
                    <span>Drive Mechanism:</span>
                    <span className="text-brand-navy font-semibold">Microstepping Motors</span>
                  </div>
                  <div className="flex justify-between text-brand-slate">
                    <span>Feedback:</span>
                    <span className="text-brand-navy font-semibold">Optical Encoders</span>
                  </div>
                  <div className="flex justify-between text-brand-slate">
                    <span>Angular Slew:</span>
                    <span className="text-brand-navy font-semibold">Up to 90°/sec</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Optical Sensor Pod */}
            <Card
              header={
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-brand-navy">SUBSYSTEM 03</span>
                  <Badge status="In Development" />
                </div>
              }
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                  <Camera className="w-4 h-4 text-brand-red" />
                </div>
                <h3 className="font-bold text-brand-navy text-base">
                  Sensor Pod & Telemetry Interface
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Environmental IP66-sealed optical cluster supporting wide-angle situational cameras and synchronized optical tracking sensors.
                </p>
                <div className="space-y-2 border-t border-brand-border pt-3 text-[11px] font-mono">
                  <div className="flex justify-between text-brand-slate">
                    <span>Ingress Rating:</span>
                    <span className="text-brand-navy font-semibold">IP66 Industrial Enclosure</span>
                  </div>
                  <div className="flex justify-between text-brand-slate">
                    <span>Protocol:</span>
                    <span className="text-brand-navy font-semibold">Encrypted RTSP / MQTT</span>
                  </div>
                  <div className="flex justify-between text-brand-slate">
                    <span>Low Light:</span>
                    <span className="text-brand-navy font-semibold">IR Cut Filter & Starlight</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Convolutional Neural Network Vision Pipeline */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Machine Vision Pipeline
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                Edge Convolutional Classification (CNN)
              </h2>
              <p className="text-xs text-brand-slate leading-relaxed">
                Rather than forwarding gigabytes of video to remote clouds, HATAK R™ performs inference locally within milliseconds. The onboard neural model evaluates bounding features to differentiate real human ingress from false triggers.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-white border border-brand-border rounded-sm text-xs">
                  <span className="font-bold text-brand-navy block mb-0.5">False-Positive Mitigation:</span>
                  <span className="text-brand-slate">Trained specifically against swaying vegetation, tree shadows, passing wildlife, and precipitation to prevent operator fatigue.</span>
                </div>
                <div className="p-3 bg-white border border-brand-border rounded-sm text-xs">
                  <span className="font-bold text-brand-navy block mb-0.5">Vector Centroid Calculation:</span>
                  <span className="text-brand-slate">Extracts coordinate vectors in the camera field of view, transforming pixel bounding centers into motor rotational coordinates.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-brand-border bg-white rounded-sm p-6 space-y-4 shadow-subtle">
                <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                  <span className="text-xs font-mono font-bold text-brand-navy">INFERENCE BENCH PARAMETERS</span>
                  <Badge status="Demonstrated" label="Lab Validated" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-brand-border">
                    <span className="text-brand-slate">Model Architecture:</span>
                    <span className="font-mono font-semibold text-brand-navy">Quantized CNN Model</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border">
                    <span className="text-brand-slate">Frame Inference Window:</span>
                    <span className="font-mono font-semibold text-brand-navy">30 - 45 ms / frame</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-border">
                    <span className="text-brand-slate">Person Class Precision:</span>
                    <span className="font-mono font-semibold text-brand-navy">Verified in Test Bench Scenarios</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-brand-slate">Data Privacy:</span>
                    <span className="font-mono font-semibold text-emerald-700">100% Local Inference — Zero Cloud Video Streaming</span>
                  </div>
                </div>

                <div className="p-3 bg-brand-cool-grey-light text-[11px] text-brand-slate rounded-sm">
                  <strong>Notice:</strong> Performance figures represent bench testing conditions. Real-world accuracy varies depending on lens focal length, mounting height, and ambient illumination.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Enquiry CTA */}
      <section>
        <Container>
          <div className="border border-brand-border bg-white rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-brand-navy">
                Request Complete Engineering Integration Specifications
              </h3>
              <p className="text-xs text-brand-slate mt-1 max-w-lg">
                Available to systems integrators, defense suppliers, and enterprise facility directors under NDA.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="primary" size="md" className="gap-2 shrink-0">
                Submit Technical Enquiry
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
