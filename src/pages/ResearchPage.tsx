import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Cpu, Eye, Compass } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { COMPANY_METADATA } from '../data/approvedContent';

export const ResearchPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white text-brand-navy">
      <PageHeader
        category="Research & Development"
        title="Hardware Verification & Neural Vision R&D"
        description="Evidence-driven technical documentation of our laboratory bench testing methodologies, embedded microcontroller firmware development, patent disclosures, and supervised field evaluation protocols."
        statusBadge="Patent Pending"
        statusLabel="Patent Application Filed"
        actions={
          <Link to="/contact?type=research">
            <Button variant="primary" size="md">
              Partner on R&D
            </Button>
          </Link>
        }
      />

      {/* 1. Status Definitions: What Each Status Designation Means */}
      <section>
        <Container>
          <div className="bg-brand-cool-grey-light/60 p-6 sm:p-8 rounded-xl border border-brand-border space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Standards of Evidence
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-xs font-mono text-brand-slate">
                Rigorous Status Definitions
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
              Evidence-Driven Capability Designations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 bg-white rounded-lg border border-brand-border space-y-1.5">
                <Badge status="Validated" />
                <p className="text-brand-slate pt-1 leading-relaxed">
                  Supported by reproducible physical instrument logs and hardware-in-the-loop laboratory test results.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-brand-border space-y-1.5">
                <Badge status="Demonstrated" />
                <p className="text-brand-slate pt-1 leading-relaxed">
                  Functioning successfully on our physical bench prototype under controlled indoor or courtyard conditions.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-brand-border space-y-1.5">
                <Badge status="In Development" />
                <p className="text-brand-slate pt-1 leading-relaxed">
                  Active engineering design and bench firmware implementation undergoing internal stress testing.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-brand-border space-y-1.5">
                <Badge status="Planned" />
                <p className="text-brand-slate pt-1 leading-relaxed">
                  Future architectural direction planned for upcoming multi-node arrays and outdoor pilot trials.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Engineering Approach & Prototype Development */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Prototype Development
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Physical Bench Model v1.0
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Rather than relying on abstract simulations, our engineering approach centers around physical mechatronic prototyping. Our demonstrated bench unit combines an industrial wall mounting bracket, optical IP camera ingress, dual-axis micro-stepping motorized mount, and dedicated yellow ECU control enclosure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 bg-brand-cool-grey-light/50 rounded-lg border border-brand-border">
                  <strong className="text-brand-navy block">Motorized Kinematics:</strong>
                  High-torque azimuth & elevation micro-stepping drive.
                </div>
                <div className="p-3 bg-brand-cool-grey-light/50 rounded-lg border border-brand-border">
                  <strong className="text-brand-navy block">Sensor Ingress:</strong>
                  Real-time RTSP optical frame acquisition.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-4 rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-brand-border">
                <img
                  src="/images/prototype-clean.png"
                  alt="Hatak R Physical Bench Prototype"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[11px] font-mono text-brand-slate text-center">
                Bench Model v1.0 &bull; Demonstrated Laboratory Unit
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Core R&D Domains: Machine Vision, Embedded Electronics & Mechanical Integration */}
      <section className="bg-brand-cool-grey-light/40 border-y border-brand-border py-16">
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Research Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Active Investigation Areas
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Targeted research initiatives addressing hardware durability, noise reduction, and failsafe execution:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-cool-grey text-brand-navy">
                  <Eye className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-bold text-base text-brand-navy">
                  Machine Vision Research
                </h3>
              </div>
              <p className="text-xs text-brand-slate leading-relaxed">
                Investigating model quantization to run robust convolutional person detection on low-power edge nodes while minimizing frame processing latency.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-navy font-semibold">
                Status: Demonstrated on Bench
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-cool-grey text-brand-navy">
                  <Cpu className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="font-bold text-base text-brand-navy">
                  Embedded Electronics
                </h3>
              </div>
              <p className="text-xs text-brand-slate leading-relaxed">
                Designing galvanically isolated power regulation circuits to eliminate inductive motor back-EMF noise from resetting computational microcontrollers.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-navy font-semibold">
                Status: Demonstrated on Bench
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-cool-grey text-brand-navy">
                  <Compass className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="font-bold text-base text-brand-navy">
                  Mechanical Integration
                </h3>
              </div>
              <p className="text-xs text-brand-slate leading-relaxed">
                Engineering sealed IP66 bearing housings and vibration-damped bracket assemblies for sustained continuous 360° pan rotation in dusty environments.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-navy font-semibold">
                Status: In Development
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Future Research Priorities & Field Pilot Program */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Roadmap Directions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Future Research Priorities
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Advancing from single-node bench verification to multi-node coordinated perimeter defense:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-brand-border shadow-subtle space-y-3">
              <span className="font-mono text-xs font-bold text-brand-navy uppercase">
                Priority 01 &bull; Multi-Node Target Hand-off
              </span>
              <p className="text-xs text-brand-slate leading-relaxed">
                Developing distributed spatial coordinate translation so an intruder vector tracked by Node A is seamlessly handed off to Node B as they traverse long fence corridors.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-slate">
                Status: <strong>Planned (Phase II)</strong>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-brand-border shadow-subtle space-y-3">
              <span className="font-mono text-xs font-bold text-brand-navy uppercase">
                Priority 02 &bull; Dual-Spectrum Thermal Ingress
              </span>
              <p className="text-xs text-brand-slate leading-relaxed">
                Evaluating long-wave infrared (LWIR) sensor payloads alongside optical cameras to maintain detection capability during pitch-black night conditions and zero-lux environments.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-slate">
                Status: <strong>Planned (Concept Phase)</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Patent Application Disclosure Section */}
      <section>
        <Container>
          <div className="bg-brand-cool-grey-light/50 p-6 sm:p-8 rounded-xl border border-brand-border space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-brand-cool-grey text-brand-navy shrink-0">
                <Lock className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
                  Intellectual Property Disclosure
                </h2>
                <span className="text-xs font-mono text-brand-slate">
                  Indian Patent Office &bull; Application No: 202141014878 (Patent Pending)
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
              {COMPANY_METADATA.ipStatus.patentDescription} Covers the integration of edge camera vector calculation with closed-loop motorized targeting alignment and failsafe electronic hardware watchdog interlocks. Reference to patent applications does not constitute a granted patent.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. CTA Section */}
      <section>
        <Container>
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold">Collaborate on Applied Defense Mechatronics</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We invite academic laboratories, research institutes, and deep-technology partners to participate in our ongoing hardware optimization and pilot programs.
              </p>
            </div>
            <Link to="/contact?type=research">
              <Button variant="red" size="md">
                Inquire on Research Alliance
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
