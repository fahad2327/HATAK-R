import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Cpu, Shield, AlertCircle, Play } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { LogoIntro } from '../components/layout/LogoIntro';
import {
  COMPANY_METADATA,
  FOUNDER,
  SOLUTION_GROUPS,
  INDUSTRY_SECTORS,
  ROADMAP_MILESTONES,
  RECOGNITION_ITEMS,
} from '../data/approvedContent';

export const HomePage: React.FC = () => {
  const [showVideoIntro, setShowVideoIntro] = useState(false);

  return (
    <div className="pb-24 bg-white text-brand-navy">
      {/* 1. Initial Logo Experience & Video Animation */}
      <LogoIntro forceShow={showVideoIntro} onComplete={() => setShowVideoIntro(false)} />

      {/* 2. Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 bg-gradient-to-b from-brand-cool-grey-light to-white border-b border-brand-border">
        {/* Subtle technical background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline, Narrative & Primary Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs font-mono shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="font-semibold text-brand-navy">INTELLECTUAL PROPERTY PENDING</span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-slate">DPIIT RECOGNIZED</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
                {COMPANY_METADATA.tagline}
              </h1>

              <p className="text-base sm:text-lg text-brand-slate leading-relaxed max-w-2xl">
                {COMPANY_METADATA.supportingText}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/contact?type=demo">
                  <Button variant="primary" size="lg" className="gap-2 shadow-sm">
                    <span>REQUEST A DEMO</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/technology">
                  <Button variant="outline" size="lg">
                    Explore Technology
                  </Button>
                </Link>
                <button
                  type="button"
                  onClick={() => setShowVideoIntro(true)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-navy hover:text-brand-red px-3.5 py-3 rounded-lg border border-brand-border bg-white hover:bg-brand-cool-grey-light transition-colors shadow-subtle"
                  aria-label="Experience Hatak R brand intro animation"
                >
                  <Play className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
                  <span>Experience Brand Intro</span>
                </button>
              </div>

              {/* Verified Institutional Credibility Badges */}
              <div className="pt-6 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-brand-slate">
                <div>
                  <span className="text-brand-navy font-bold block">DPIIT STARTUP</span>
                  <span>Certificate {COMPANY_METADATA.dpiitRecognition.certificateNo}</span>
                </div>
                <div>
                  <span className="text-brand-navy font-bold block">PATENT APPLICATION</span>
                  <span>No. {COMPANY_METADATA.ipStatus.patentNumber} (Pending)</span>
                </div>
                <div>
                  <span className="text-brand-navy font-bold block">ACADEMIC BASE</span>
                  <span>Velammal Inst. of Tech</span>
                </div>
              </div>
            </div>

            {/* Right Column: Physical Prototype Bench Model Display */}
            <div className="lg:col-span-5">
              <div className="bg-white p-5 rounded-xl border border-brand-border shadow-elevated space-y-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-brand-border relative group">
                  <img
                    src="/images/prototype-clean.png"
                    alt="Hatak R Physical Prototype Bench Model"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-brand-navy/90 text-white font-mono text-[11px] font-semibold tracking-wider">
                      BENCH PROTOTYPE
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge status="Demonstrated" label="Bench Verified" />
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono">
                    <span className="font-bold text-brand-navy flex items-center gap-1.5">
                      <img src="/images/logo-transparent.png" alt="Hatak R" className="w-4 h-4 object-contain" />
                      SYSTEM BENCHMARK UNIT
                    </span>
                    <span className="text-brand-slate">Stage: Prototype v1.0</span>
                  </div>
                  <p className="text-brand-slate leading-relaxed">
                    Demonstrated laboratory model: industrial mounting bracket, optical IP camera ingress, dual-axis micro-stepping motorized mount, and dedicated ECU control enclosure.
                  </p>
                  <div className="pt-2 border-t border-brand-border flex items-center justify-between text-[11px] font-mono text-brand-slate">
                    <span>Rotation: Dual-Axis 360°</span>
                    <span>Inference: Edge Neural Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Company Value Proposition: 01 DETECT → 02 ANALYZE → 03 RESPOND */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Core Architecture
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
              Three-Stage Deterministic Security
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Hatak R replaces uncoordinated alarms with a synchronized pipeline engineered to identify events, classify observations, and support authorized human oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-8 rounded-xl bg-brand-cool-grey-light/50 border border-brand-border space-y-4 hover:border-brand-slate-light transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-brand-red">01</span>
                <div className="w-10 h-10 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-navy">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy">DETECT</h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                Camera-based sensing and multi-angle machine vision identify spatial movement and events requiring immediate operational review along perimeter zones.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-slate border-t border-brand-border">
                Sensor Ingress &bull; RTSP/ONVIF
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-xl bg-brand-cool-grey-light/50 border border-brand-border space-y-4 hover:border-brand-slate-light transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-brand-navy">02</span>
                <div className="w-10 h-10 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-navy">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy">ANALYZE</h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                Edge image processing and convolutional classification algorithms isolate human intrusion profiles while filtering environmental noise, shadows, and foliage.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-slate border-t border-brand-border">
                CNN Inference &bull; Edge Microcontroller
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-xl bg-brand-cool-grey-light/50 border border-brand-border space-y-4 hover:border-brand-slate-light transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-brand-red">03</span>
                <div className="w-10 h-10 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-navy">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy">RESPOND</h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                Structured telemetry alerts, synchronized motorized alignment, and mandatory human-supervised procedures support appropriate, accountable incident handling.
              </p>
              <div className="pt-2 font-mono text-xs text-brand-slate border-t border-brand-border">
                Operator Review &bull; Human-in-the-Loop
              </div>
            </div>
          </div>

          {/* Safety Notice */}
          <div className="mt-8 p-4 rounded-lg bg-brand-cool-grey-light/30 border border-brand-border flex items-center gap-3 text-xs text-brand-slate">
            <AlertCircle className="w-4 h-4 text-brand-red shrink-0" />
            <span>
              <strong>Operational Disclaimer:</strong> All response protocols strictly enforce human-in-the-loop verification. Hatak R™ does not deploy or support unverified autonomous physical actuation.
            </span>
          </div>
        </Container>
      </section>

      {/* 4. Featured Engineering Capabilities */}
      <section className="py-20 bg-brand-cool-grey-light/40 border-y border-brand-border">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                Subsystem Architecture
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                Featured Engineering Capabilities
              </h2>
            </div>
            <Link to="/solutions" className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1">
              <span>View all 4 subsystem groups</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTION_GROUPS.map((group, idx) => (
              <Card key={group.slug} className="flex flex-col justify-between h-full space-y-4 hover:shadow-card transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-slate">
                      CAPABILITY 0{idx + 1}
                    </span>
                    <Badge status={group.status} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {group.title}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {group.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <Link
                    to={`/solutions/${group.slug}`}
                    className="text-xs font-semibold text-brand-navy hover:text-brand-red flex items-center gap-1 group"
                  >
                    <span>Inspect subsystem</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Technology Preview & Interactive Flow Diagram */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Architecture Preview
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
              System Ingress to Response Pipeline
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Conceptual dataflow illustrating how multi-source optical inputs are processed at the edge, classified, and escalated for human verification.
            </p>
          </div>

          {/* Clean Architecture Diagram */}
          <div className="p-8 md:p-12 rounded-xl bg-brand-navy text-white shadow-card space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Stage 1</span>
                <span className="font-bold text-sm block">Camera Input</span>
                <span className="text-[11px] text-slate-400 block">RTSP / ONVIF IP Feeds</span>
                <Badge status="Demonstrated" className="text-[10px] py-0 px-2 mt-1" />
              </div>

              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Stage 2</span>
                <span className="font-bold text-sm block">Edge Processing</span>
                <span className="text-[11px] text-slate-400 block">Frame Normalization</span>
                <Badge status="Demonstrated" className="text-[10px] py-0 px-2 mt-1" />
              </div>

              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Stage 3</span>
                <span className="font-bold text-sm block">Classification</span>
                <span className="text-[11px] text-slate-400 block">CNN Target Isolation</span>
                <Badge status="Demonstrated" className="text-[10px] py-0 px-2 mt-1" />
              </div>

              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2 text-center">
                <span className="text-[10px] font-mono text-brand-red uppercase block">Stage 4</span>
                <span className="font-bold text-sm block">Alert & Review</span>
                <span className="text-[11px] text-slate-400 block">Telemetry Dispatch</span>
                <Badge status="In Development" className="text-[10px] py-0 px-2 mt-1" />
              </div>

              <div className="p-4 rounded-lg bg-slate-800/80 border-2 border-brand-red space-y-2 text-center">
                <span className="text-[10px] font-mono text-brand-red uppercase block">Stage 5</span>
                <span className="font-bold text-sm text-brand-red block">Authorized Response</span>
                <span className="text-[11px] text-slate-400 block">Supervised Execution</span>
                <Badge status="In Development" className="text-[10px] py-0 px-2 mt-1" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800 text-xs text-slate-400 gap-4">
              <div>
                Clear separation between <span className="text-white font-medium">Demonstrated Bench Hardware</span> and <span className="text-amber-400 font-medium">In Development Multi-Unit VMS</span>.
              </div>
              <Link to="/technology">
                <Button variant="outline" size="sm" className="text-white border-slate-700 hover:bg-slate-800">
                  <span>Explore Full Technology Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Application Environments */}
      <section className="py-20 bg-brand-cool-grey-light/30 border-t border-brand-border">
        <Container>
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Application Environments
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
              Engineered for High-Consequence Perimeters
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Addressing operational challenges across complex industrial, logistics, and controlled-access environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SECTORS.map((sec) => (
              <Card key={sec.id} className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-brand-red font-semibold uppercase block">
                    {sec.category}
                  </span>
                  <h3 className="text-base font-bold text-brand-navy">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {sec.operationalChallenge}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border">
                  <Link
                    to={`/industries/${sec.slug}`}
                    className="text-xs font-semibold text-brand-navy hover:text-brand-red flex items-center gap-1 group"
                  >
                    <span>View environment profile</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Engineering and R&D Milestones */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                Development Track
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                Engineering & R&D Progress
              </h2>
            </div>
            <Link to="/rd" className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1">
              <span>View complete R&D records</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADMAP_MILESTONES.map((m) => (
              <div key={m.phase} className="p-6 rounded-xl bg-white border border-brand-border shadow-subtle space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-navy">
                      {m.period}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                      m.verificationStatus === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700 font-semibold'
                        : 'bg-amber-50 text-amber-700 font-semibold'
                    }`}>
                      {m.verificationStatus}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    {m.phase}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {m.objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Founder Section (Dr. R. Partheepan ONLY - strict requirement) */}
      <section className="py-20 bg-brand-cool-grey-light/40 border-y border-brand-border">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-xl border border-brand-border p-8 md:p-12 shadow-card space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Leadership
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-brand-slate">
                Founder & Technical Leadership
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-3xl border-4 border-brand-cool-grey shadow-subtle">
                  RP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">{FOUNDER.name}</h3>
                  <p className="text-xs font-mono text-brand-red font-semibold">{FOUNDER.role}</p>
                  <p className="text-xs text-brand-slate mt-0.5">{FOUNDER.affiliation}</p>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4 text-sm text-brand-slate leading-relaxed border-t md:border-t-0 md:border-l border-brand-border md:pl-8 pt-6 md:pt-0">
                <p>
                  {FOUNDER.biography}
                </p>
                <p>
                  {FOUNDER.academicBackground}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-brand-cool-grey rounded border border-brand-border text-brand-navy">
                    Applied Mechanics
                  </span>
                  <span className="px-2.5 py-1 bg-brand-cool-grey rounded border border-brand-border text-brand-navy">
                    Robotic Positioning
                  </span>
                  <span className="px-2.5 py-1 bg-brand-cool-grey rounded border border-brand-border text-brand-navy">
                    Perimeter Security Architectures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Recognition Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Official Verification
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
              Government Recognition & Filings
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Official startup credentials issued by statutory authorities and academic research bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECOGNITION_ITEMS.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-brand-border shadow-subtle space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-brand-red font-semibold uppercase block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border font-mono text-xs text-emerald-700 font-medium">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Final Call-to-Action */}
      <section>
        <Container>
          <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-14 shadow-card flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-red">
                Engineering Partnership
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Explore an Engineering Partnership with Hatak R.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our systems engineering desk to discuss technical requirements, review site feasibility, or schedule a formal laboratory demonstration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link to="/contact?type=demo" className="w-full sm:w-auto">
                <Button variant="red" size="lg" className="w-full justify-center">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/contact?type=technical" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center text-white border-slate-700 hover:bg-slate-800">
                  Discuss Technical Needs
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
