import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Lock, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';
import { VALIDATION_RECORDS } from '../data/approvedContent';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white text-brand-navy">
      <PageHeader
        category="Engineering Architecture"
        title="Hardware, Machine Vision & Subsystems Stack"
        description="Detailed technical review of our embedded Electronic Control Unit (ECU), edge convolutional vision pipeline, precision dual-axis kinematic mount, and human-in-the-loop verification protocol."
        statusBadge="Demonstrated"
        statusLabel="Laboratory Prototype Verified"
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact?type=demo">
              <Button variant="primary" size="md" className="gap-2 shadow-sm">
                <span>Request Technical Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="md">
                Subsystems Index
              </Button>
            </Link>
          </div>
        }
      />

      {/* A. Architecture Overview & Interactive Flow Diagram */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Section A &bull; Architecture Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Seven-Stage Deterministic Pipeline
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Hatak R™ is architected as an edge-first distributed security platform. Rather than streaming raw high-bandwidth video to remote cloud servers, frame normalization, neural inference, and trajectory calculations occur locally at the perimeter node.
              </p>
            </div>

            {/* Interactive Architecture Flow Diagram */}
            <ArchitectureDiagram />

            {/* Seven-Stage Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3 pt-4 font-mono text-xs">
              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border border-brand-border space-y-1">
                <span className="text-[10px] text-brand-red font-bold block">01 INPUT</span>
                <span className="font-bold text-brand-navy block">Sensor Ingress</span>
                <span className="text-[11px] text-brand-slate block">RTSP / ONVIF IP</span>
                <Badge status="Demonstrated" className="text-[9px] py-0 px-1 mt-1" />
              </div>

              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border border-brand-border space-y-1">
                <span className="text-[10px] text-brand-navy font-bold block">02 PREPROCESS</span>
                <span className="font-bold text-brand-navy block">Normalization</span>
                <span className="text-[11px] text-brand-slate block">Spatial Scaling</span>
                <Badge status="Demonstrated" className="text-[9px] py-0 px-1 mt-1" />
              </div>

              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border border-brand-border space-y-1">
                <span className="text-[10px] text-brand-navy font-bold block">03 INFERENCE</span>
                <span className="font-bold text-brand-navy block">Edge CNN</span>
                <span className="text-[11px] text-brand-slate block">Local Neural Model</span>
                <Badge status="Demonstrated" className="text-[9px] py-0 px-1 mt-1" />
              </div>

              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border border-brand-border space-y-1">
                <span className="text-[10px] text-brand-navy font-bold block">04 CLASSIFY</span>
                <span className="font-bold text-brand-navy block">Target Vector</span>
                <span className="text-[11px] text-brand-slate block">Person / Noise</span>
                <Badge status="Demonstrated" className="text-[9px] py-0 px-1 mt-1" />
              </div>

              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border border-brand-border space-y-1">
                <span className="text-[10px] text-brand-red font-bold block">05 ALERT</span>
                <span className="font-bold text-brand-navy block">Telemetry Bus</span>
                <span className="text-[11px] text-brand-slate block">Encrypted JSON</span>
                <Badge status="In Development" className="text-[9px] py-0 px-1 mt-1" />
              </div>

              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border-2 border-brand-red space-y-1">
                <span className="text-[10px] text-brand-red font-bold block">06 VERIFY</span>
                <span className="font-bold text-brand-navy block">Human Review</span>
                <span className="text-[11px] text-brand-slate block">Operator Screen</span>
                <Badge status="In Development" className="text-[9px] py-0 px-1 mt-1" />
              </div>

              <div className="p-3 bg-brand-cool-grey-light/70 rounded-lg border-2 border-brand-red space-y-1">
                <span className="text-[10px] text-brand-red font-bold block">07 RESPOND</span>
                <span className="font-bold text-brand-navy block">Authorized Action</span>
                <span className="text-[11px] text-brand-slate block">Human Supervised</span>
                <Badge status="In Development" className="text-[9px] py-0 px-1 mt-1" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* B. Machine Vision Pipeline */}
      <section className="bg-brand-cool-grey-light/40 border-y border-brand-border py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Section B &bull; Machine Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Video Frame Acquisition & CNN Target Classification
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Outdoor perimeter security fails when sensors confuse ambient environmental movement with genuine human intrusion. Our localized vision pipeline isolates targets deterministically.
              </p>

              <div className="space-y-3 text-xs text-brand-slate">
                <div className="p-3.5 bg-white rounded-lg border border-brand-border space-y-1">
                  <strong className="text-brand-navy block">Video Frame Ingress & Preprocessing:</strong>
                  Ingests standard RTSP optical video streams from IP cameras. Preprocessing normalizes spatial pixel dimensions and performs contrast leveling to maintain inference consistency across changing daylight conditions.
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-brand-border space-y-1">
                  <strong className="text-brand-navy block">Convolutional Neural Model & Classification:</strong>
                  Frames are evaluated through an optimized lightweight convolutional network trained to identify human posture centroids and isolate movement against background foliage, rain clutter, and shadows.
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-brand-border space-y-1">
                  <strong className="text-brand-navy block">Confidence Thresholds & Limitations:</strong>
                  Candidate bounding boxes below strict confidence thresholds are discarded without raising alerts. Adverse weather (dense fog or heavy downpours) reduces optical range; operations in zero ambient lux require auxiliary infrared illumination.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-brand-border shadow-subtle space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                <span className="text-xs font-mono font-bold text-brand-navy uppercase">
                  Vision Ingress & Edge Benchmark Specs
                </span>
                <Badge status="Demonstrated" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-brand-cool-grey-light/50 rounded border border-brand-border space-y-1">
                  <span className="text-brand-slate text-[11px] block">Stream Format</span>
                  <span className="font-bold text-brand-navy">RTSP / ONVIF Profile S</span>
                </div>
                <div className="p-3 bg-brand-cool-grey-light/50 rounded border border-brand-border space-y-1">
                  <span className="text-brand-slate text-[11px] block">Edge Host</span>
                  <span className="font-bold text-brand-navy">Embedded Compute Unit</span>
                </div>
                <div className="p-3 bg-brand-cool-grey-light/50 rounded border border-brand-border space-y-1">
                  <span className="text-brand-slate text-[11px] block">Target Classes</span>
                  <span className="font-bold text-brand-navy">Person Vectors</span>
                </div>
                <div className="p-3 bg-brand-cool-grey-light/50 rounded border border-brand-border space-y-1">
                  <span className="text-brand-slate text-[11px] block">Output Telemetry</span>
                  <span className="font-bold text-brand-navy">Azimuth / Elevation Offset</span>
                </div>
              </div>
              <div className="p-3 bg-brand-cool-grey-light/40 rounded border border-brand-border text-xs text-brand-slate">
                <span className="font-semibold text-brand-navy block mb-0.5">Bench Observation:</span>
                Successfully demonstrated reliable human profile isolation during controlled courtyard and laboratory test sequences.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* C. Embedded Electronics & ECU */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section C &bull; Embedded Electronics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Dedicated Electronic Control Unit (ECU) Architecture
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Industrial reliability requires electrical isolation between computational microcontrollers and motorized inductive actuators:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card header={<span className="font-mono text-xs font-bold text-brand-navy">POWER & ISOLATION</span>}>
              <div className="space-y-2 text-xs">
                <h3 className="font-bold text-sm text-brand-navy">Regulated Power Rails</h3>
                <p className="text-brand-slate leading-relaxed">
                  Dual isolated voltage buses isolate high-current stepper motor drivers from sensitive 3.3V/5V logic boards, preventing back-EMF spikes and brownouts.
                </p>
                <div className="pt-2 font-mono text-slate-500">
                  Rating: 12V / 24V DC Industrial Bus
                </div>
              </div>
            </Card>

            <Card header={<span className="font-mono text-xs font-bold text-brand-navy">SENSOR INTERFACES</span>}>
              <div className="space-y-2 text-xs">
                <h3 className="font-bold text-sm text-brand-navy">Motor Drive & Encoders</h3>
                <p className="text-brand-slate leading-relaxed">
                  Micro-stepping motor driver channels with thermal shutdown protection and optical home-position limit switch inputs for precision homing calibration.
                </p>
                <div className="pt-2 font-mono text-slate-500">
                  Control: Hardware PWM & Direction Logic
                </div>
              </div>
            </Card>

            <Card header={<span className="font-mono text-xs font-bold text-brand-red">SAFETY & WATCHDOGS</span>}>
              <div className="space-y-2 text-xs">
                <h3 className="font-bold text-sm text-brand-navy">Failsafe Hardware Shutdown</h3>
                <p className="text-brand-slate leading-relaxed">
                  Independent hardware watchdog timer. If microprocessor communications stall or sensor feedback is interrupted, power relays cut motor drive within 100ms.
                </p>
                <div className="pt-2 font-mono text-emerald-700 font-semibold">
                  Status: Validated in Lab Rig
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* D. Mechanical Subsystems & Prototype Display */}
      <section className="bg-brand-cool-grey-light/40 border-y border-brand-border py-16">
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section D &bull; Mechanical Subsystems
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Dual-Axis Pan & Tilt Kinematic Platform
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Precision motorized mount providing horizontal azimuth rotation and vertical elevation slewing for continuous perimeter line tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Prototype Showcase */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-brand-border shadow-subtle space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-brand-border">
                <img
                  src="/images/prototype.png"
                  alt="Hatak R Physical Prototype Bench Model"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between font-mono">
                  <span className="font-bold text-brand-navy">PHYSICAL BENCH PROTOTYPE</span>
                  <Badge status="Demonstrated" />
                </div>
                <p className="text-brand-slate leading-relaxed">
                  Working prototype model featuring industrial wall bracket, optical camera, dual-axis motorized mount, and dedicated yellow ECU control enclosure.
                </p>
              </div>
            </div>

            {/* High-Level Mechanical Overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-brand-navy">
                    Azimuth Slewing & Continuous Slip-Ring Platform
                  </h3>
                  <Badge status="Demonstrated" />
                </div>
                <p className="text-xs text-brand-slate leading-relaxed">
                  High-torque micro-stepping drive coupled with internal slip-ring wiring harness allows continuous 360° pan motion without cable entanglement or rotational dead-zones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-brand-navy">
                    Vertical Elevation Tilt Assembly
                  </h3>
                  <Badge status="Demonstrated" />
                </div>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Precision geared elevation stage with optical hard-stop switches providing reliable tilt positioning from -15° downward surveillance to +45° perimeter approach angles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-brand-border shadow-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-brand-navy">
                    Structural Mounting & Environmental Enclosure
                  </h3>
                  <Badge status="In Development" />
                </div>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Heavy-duty wall and mast mounting fixtures engineered to dampen motor vibration and withstand outdoor wind loading across industrial perimeter fences.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* E. Monitoring & Integration */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section E &bull; Monitoring & Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Centralized Monitoring & Event Telemetry Bus
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Coordinating distributed edge nodes with central security operations centers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <span className="text-xs font-mono font-bold text-brand-navy uppercase block">
                Video Ingress
              </span>
              <h3 className="text-base font-bold text-brand-navy">
                Standard ONVIF & RTSP
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Compatible with standard commercial video management systems (VMS). Rebroadcasts video streams with target bounding-box metadata overlays.
              </p>
              <div className="pt-2 text-xs font-mono text-brand-slate">
                Status: <strong>In Development</strong>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <span className="text-xs font-mono font-bold text-brand-navy uppercase block">
                Telemetry
              </span>
              <h3 className="text-base font-bold text-brand-navy">
                JSON / WebSocket Event Bus
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Real-time structured event bus delivering spatial coordinates, classification confidence, node health diagnostics, and timestamped audit logs.
              </p>
              <div className="pt-2 text-xs font-mono text-brand-slate">
                Status: <strong>In Development</strong>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <span className="text-xs font-mono font-bold text-brand-red uppercase block">
                Safety Governance
              </span>
              <h3 className="text-base font-bold text-brand-navy">
                Hardware Relay Interlocks
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Dry-contact hardware relays and cryptographic tokens ensuring deterrent spotlights or sirens cannot trigger without verified human confirmation.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-700 font-semibold">
                Status: <strong>Validated in Lab</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* F. Testing & Validation Table */}
      <section className="bg-brand-cool-grey-light/30 border-y border-brand-border py-16">
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Section F &bull; Testing & Validation Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Empirical Testing Evidence & Bench Observations
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              We publish actual documented test results from hardware and vision benchmark evaluations. We distinguish demonstrated bench metrics from planned field trial criteria.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-brand-border shadow-subtle bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-brand-navy text-white font-mono uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4">Test Method</th>
                  <th className="py-3 px-4">Test Environment</th>
                  <th className="py-3 px-4">Result</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {VALIDATION_RECORDS.map((rec, idx) => (
                  <tr key={idx} className="hover:bg-brand-cool-grey-light/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-brand-navy">{rec.feature}</td>
                    <td className="py-3.5 px-4 text-brand-slate">{rec.testMethod}</td>
                    <td className="py-3.5 px-4 font-mono text-brand-slate">{rec.testEnvironment}</td>
                    <td className="py-3.5 px-4 text-brand-navy">{rec.result}</td>
                    <td className="py-3.5 px-4 font-mono text-brand-slate">{rec.date}</td>
                    <td className="py-3.5 px-4">
                      <Badge status={rec.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* G. Technical Documentation */}
      <section>
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white border border-brand-border shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-red uppercase">
                <FileText className="w-4 h-4" />
                <span>Section G &bull; Technical Documentation</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">
                Datasheets & Architectural Summaries
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                Qualified industrial pilot hosts and integration partners can request our detailed System Specification Brief, interface diagrams, and safety compliance dossiers.
              </p>
              <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                <span>Detailed engineering documentation provided under bilateral NDA.</span>
              </div>
            </div>

            <div className="shrink-0">
              <Link to="/contact?type=technical">
                <Button variant="primary" size="lg" className="shadow-sm">
                  Request Technical Brief
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
