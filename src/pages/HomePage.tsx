import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';
import { CAPABILITIES, INDUSTRIES } from '../data/approvedContent';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-b border-brand-border bg-gradient-to-b from-brand-cool-grey-light/50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-border rounded-full text-xs font-mono text-brand-navy shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="font-semibold text-brand-red">BENCH VERIFIED</span>
                <span className="text-brand-slate">|</span>
                <span>INDIAN PATENT APPLICATION FILED</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.08]">
                AI-Assisted Intelligent Perimeter Security
              </h1>

              <p className="text-lg sm:text-xl text-brand-slate max-w-2xl leading-relaxed">
                HATAK R™ couples multi-camera machine vision inference, dual-axis motorized targeting mounts, and a human-supervised decision pipeline to protect high-consequence facilities.
              </p>

              {/* Product Concept Banner: Detect - Decide - Defend */}
              <div className="p-4 bg-brand-navy text-white rounded-sm shadow-subtle flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-brand-slate-light block">Phase 01</span>
                    <span className="font-bold text-sm tracking-wide text-white">DETECT</span>
                    <span className="text-xs text-slate-300 block">Edge CNN Vision</span>
                  </div>
                  <span className="text-brand-slate font-mono">→</span>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-brand-slate-light block">Phase 02</span>
                    <span className="font-bold text-sm tracking-wide text-brand-red">DECIDE</span>
                    <span className="text-xs text-slate-300 block">Human Verified</span>
                  </div>
                  <span className="text-brand-slate font-mono">→</span>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-brand-slate-light block">Phase 03</span>
                    <span className="font-bold text-sm tracking-wide text-white">DEFEND</span>
                    <span className="text-xs text-slate-300 block">Deterrent Action</span>
                  </div>
                </div>
                <div className="text-xs font-mono bg-white/10 px-3 py-1.5 rounded-sm border border-white/10 text-slate-300">
                  Zero Autonomous Force
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/contact?type=pilot">
                  <Button variant="primary" size="lg" className="gap-2">
                    Request a Perimeter Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/technology">
                  <Button variant="outline" size="lg">
                    Inspect Technical Blueprint
                  </Button>
                </Link>
              </div>

              {/* Strict governance trust indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-slate">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Hardware bench verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dual-axis pan/tilt mount</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Industrial field pilot readiness</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Engineering Schematic / Prototype Representation */}
            <div className="lg:col-span-5">
              <div className="border border-brand-border bg-white rounded-sm overflow-hidden shadow-elevated">
                {/* Schematic Head */}
                <div className="px-5 py-3 bg-brand-cool-grey-light border-b border-brand-border flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-brand-navy">UNIT SPEC: HTK-R-PROTOTYPE-V1</span>
                  </div>
                  <Badge status="Demonstrated" />
                </div>

                {/* Authentic Prototype Visual */}
                <div className="p-4 bg-white space-y-4">
                  <div className="relative rounded-sm overflow-hidden border border-brand-border bg-brand-cool-grey-light/30">
                    <img
                      src="/images/prototype.png"
                      alt="HATAK R Working Prototype Unit"
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-brand-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-sm text-[11px] font-mono flex items-center justify-between">
                      <span>PROTOTYPE TEST RIG</span>
                      <span className="text-emerald-400">LAB BENCH VERIFIED</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono border-t border-brand-border pt-3">
                    <div>
                      <span className="text-brand-slate block">Patent Application:</span>
                      <span className="font-semibold text-brand-navy">202141014878</span>
                    </div>
                    <div>
                      <span className="text-brand-slate block">DPIIT Recognition:</span>
                      <span className="font-semibold text-brand-navy">DIPP250915</span>
                    </div>
                  </div>

                  {/* Verifiable Specs Table */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-brand-border">
                      <span className="text-brand-slate">Neural Framework</span>
                      <span className="font-mono font-semibold text-brand-navy">Convolutional Neural Net (CNN)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-brand-border">
                      <span className="text-brand-slate">Target Classification</span>
                      <span className="font-mono font-semibold text-brand-navy">Person / Intrusion Class</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-brand-border">
                      <span className="text-brand-slate">Mount Controller</span>
                      <span className="font-mono font-semibold text-brand-navy">Custom Electronic Control Unit (ECU)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-brand-slate">Verification Status</span>
                      <span className="font-mono font-semibold text-emerald-700">Lab & Bench Tested</span>
                    </div>
                  </div>
                </div>

                {/* Honest Footnote */}
                <div className="px-5 py-3 bg-brand-cool-grey-light/50 border-t border-brand-border text-[11px] text-brand-slate leading-normal">
                  <span className="font-semibold text-brand-navy">Specification Note:</span> Physical prototype built and bench-tested. Field trials at industrial partner sites are currently being scheduled.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Development Status Transparency Section (Explicit brief requirement: no fake metrics) */}
      <section>
        <Container>
          <div className="border border-brand-border rounded-sm bg-white p-8 md:p-10 shadow-subtle">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                System Readiness Audit
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1">
                Transparent Development Status
              </h2>
              <p className="text-sm text-brand-slate mt-2 leading-relaxed">
                In strict accordance with our engineering disclosures, we distinguish verified lab accomplishments from systems currently under active integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-brand-cool-grey-light/40 border border-brand-border rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <Badge status="Demonstrated" />
                  <span className="text-xs font-mono text-brand-slate">Tier 1</span>
                </div>
                <h3 className="font-bold text-brand-navy text-base">Bench Prototype Verified</h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Optical feed processing, CNN person detection, closed-loop motorized mount, and custom ECU firmware confirmed functional on bench test setup.
                </p>
                <div className="text-xs font-mono text-emerald-700 font-medium pt-2 border-t border-brand-border">
                  ✓ Verified in Lab Bench Testing
                </div>
              </div>

              <div className="p-6 bg-brand-cool-grey-light/40 border border-brand-border rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <Badge status="In Development" />
                  <span className="text-xs font-mono text-brand-slate">Tier 2</span>
                </div>
                <h3 className="font-bold text-brand-navy text-base">Multi-Node Mesh & Console</h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Distributed multi-camera coordinate handoff, central telemetry dashboard, and authenticated human operator verification workflows.
                </p>
                <div className="text-xs font-mono text-amber-700 font-medium pt-2 border-t border-brand-border">
                  ⏳ Software & Firmware Integration
                </div>
              </div>

              <div className="p-6 bg-brand-cool-grey-light/40 border border-brand-border rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <Badge status="Planned Architecture" />
                  <span className="text-xs font-mono text-brand-slate">Tier 3</span>
                </div>
                <h3 className="font-bold text-brand-navy text-base">Non-Lethal Deterrence Interfaces</h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Architectural specifications for directional spotlighting, audible dispersal alarms, and non-lethal payload interlocks under dual-key authorization.
                </p>
                <div className="text-xs font-mono text-slate-600 font-medium pt-2 border-t border-brand-border">
                  ⚙ Subject to Safety & Legal Review
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. High-Level System Architecture Visual */}
      <section>
        <Container>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Engineering Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1">
              End-to-End System Pipeline
            </h2>
            <p className="text-sm text-brand-slate mt-2 max-w-2xl leading-relaxed">
              Explore the sequential flow from optical perimeter sensor ingestion to edge neural inference, motorized target acquisition, and authenticated operator review.
            </p>
          </div>

          <ArchitectureDiagram />
        </Container>
      </section>

      {/* 4. Core Capabilities Breakdown */}
      <section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Core Modules
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1">
                Engineered for High-Consequence Perimeters
              </h2>
            </div>
            <Link to="/solutions">
              <Button variant="outline" size="sm" className="gap-2">
                View All Capabilities
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.slice(0, 3).map((cap) => (
              <Card
                key={cap.id}
                header={
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-brand-slate">
                      {cap.category}
                    </span>
                    <Badge status={cap.status} />
                  </div>
                }
                footer={
                  <div className="text-[11px] font-mono text-brand-slate">
                    Implementation: {cap.status}
                  </div>
                }
              >
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed mb-4">
                  {cap.summary}
                </p>
                <div className="p-3 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm text-[11px] text-brand-navy">
                  <span className="font-semibold block text-brand-slate mb-0.5">Bench Spec:</span>
                  {cap.technicalDetails}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Target Industries & Operational Fit */}
      <section>
        <Container>
          <div className="p-8 md:p-12 bg-brand-navy text-white rounded-sm">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Intended Deployments
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                Designed for Expansive & Unmanned Facilities
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Traditional perimeter fences and static CCTV leave operators blind to intrusion vectors until it is too late. HATAK R™ is engineered to bridge this gap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.id}
                  className="p-5 bg-white/5 border border-white/10 rounded-sm hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono text-brand-slate-light block uppercase mb-1">
                      {ind.sector}
                    </span>
                    <h3 className="font-bold text-white text-base mb-2">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {ind.challenge}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-brand-red font-semibold block mb-0.5">
                      Target Phase:
                    </span>
                    <span className="text-xs text-slate-200">
                      {ind.deploymentReadiness}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Notice: Pilot deployments are subject to mutual site surveys and safety review.
              </span>
              <Link to="/industries">
                <Button variant="primary" size="sm" className="gap-2">
                  Explore Industry Profiles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Call to Action / Pilot Engagement */}
      <section>
        <Container>
          <div className="border border-brand-border bg-brand-cool-grey-light/30 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Inquiry Desk
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-1">
                Participate in Early Field Pilots or Technical Evaluation
              </h2>
              <p className="text-sm text-brand-slate mt-2 leading-relaxed">
                We are actively discussing pilot testing with facility managers, defense technology evaluators, and industrial logistics operators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link to="/contact?type=pilot">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Request a Demo / Pilot
                </Button>
              </Link>
              <Link to="/rnd">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Review R&D Milestones
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
