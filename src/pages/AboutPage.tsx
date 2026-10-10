import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Compass, ArrowRight, Lock } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ROADMAP_MILESTONES, COMPANY_METADATA } from '../data/approvedContent';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Company Profile"
        title="Engineering Precision for High-Risk Perimeters"
        description="HATAK R™ was conceived to eliminate the dangerous latency between perimeter intrusion detection and actionable deterrence through localized edge intelligence."
        statusBadge="Patent Pending"
        actions={
          <Link to="/contact">
            <Button variant="primary" size="md">
              Contact Leadership
            </Button>
          </Link>
        }
      />

      {/* Origin & Problem Statement */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-extrabold text-brand-navy">
                The Origin of HATAK R™
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Modern perimeter surveillance suffers from two persistent failure modes: static cameras that capture intrusions without vector tracking, and human monitoring centers overwhelmed by environmental false alarms from wind, wildlife, and shadows.
              </p>
              <p className="text-sm text-brand-slate leading-relaxed">
                HATAK R™ was initiated to develop a unified physical and electronic countermeasure platform. By integrating convolutional neural networks directly onto edge control hardware coupled with motorized pan/tilt positioning, the system autonomously isolates human intruders and feeds verified telemetry to operators in real-time.
              </p>
              <div className="p-4 bg-brand-cool-grey-light border-l-2 border-brand-red rounded-r-sm text-xs text-brand-navy leading-relaxed">
                <span className="font-bold block mb-1">Guiding Technical Axiom:</span>
                "Perimeter defense must combine the speed of edge machine vision with the infallible legal and ethical oversight of human authorization."
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <Card
                header={
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-brand-navy">FOUNDATIONAL MISSION</span>
                    <Badge status="Demonstrated" label="Active" />
                  </div>
                }
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-mono uppercase text-brand-slate mb-1">Our Mission</h3>
                    <p className="text-xs text-brand-navy leading-relaxed">
                      Deliver robust, non-lethal intelligent perimeter technologies that protect physical assets, critical infrastructure, and personnel without unnecessary lethal escalation.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brand-border">
                    <h3 className="text-xs font-mono uppercase text-brand-slate mb-1">Our Vision</h3>
                    <p className="text-xs text-brand-navy leading-relaxed">
                      Set the benchmark for intelligent edge perimeter defense through verifiably reliable machine vision and accountable human-in-the-loop engineering.
                    </p>
                  </div>
                </div>
              </Card>

              {/* IP Status Box */}
              <div className="p-4 border border-brand-border bg-white rounded-sm text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold text-brand-navy">
                  <Lock className="w-4 h-4 text-brand-red" />
                  <span>Patent Filing Information</span>
                </div>
                <p className="text-brand-slate text-[11px] leading-normal">
                  {COMPANY_METADATA.ipStatus.patentNotice}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Engineering Values */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Operating Principles
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Engineered on Accountable Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-brand-border rounded-sm space-y-3">
              <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                <Target className="w-4 h-4 text-brand-red" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Truth in Verification</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                We document prototype performance strictly from bench tests and controlled pilot trials. We never publish simulated statistics or unverified claims.
              </p>
            </div>

            <div className="p-6 bg-white border border-brand-border rounded-sm space-y-3">
              <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                <Shield className="w-4 h-4 text-brand-red" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Human Authority</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Our technology automates sensing and targeting calculations, but decision-making authority remains with authenticated human operators.
              </p>
            </div>

            <div className="p-6 bg-white border border-brand-border rounded-sm space-y-3">
              <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                <Compass className="w-4 h-4 text-brand-red" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Hardware-First Integrity</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Algorithms depend on mechanical reliability. We design custom motor drivers, electronic control units, and ruggedized enclosures built for harsh field environments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership & Content Governance Note */}
      <section>
        <Container>
          <div className="border border-brand-border rounded-sm bg-white p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                  Governance & Organization
                </span>
                <h2 className="text-xl font-bold text-brand-navy mt-1">
                  Leadership & Team Disclosures
                </h2>
              </div>
              <Badge status="Default" label="Governance Compliant" />
            </div>

            <p className="text-xs text-brand-slate leading-relaxed max-w-3xl">
              Per company governance guidelines, official founder biographies, DPIIT startup recognition identifiers, and capitalization details are disclosed through formal due-diligence data rooms upon mutual execution of non-disclosure agreements.
            </p>

            {/* Factual Placeholder for Founder / Executive bios */}
            <div className="p-4 bg-brand-cool-grey-light/50 border border-brand-border rounded-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  ENG
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-brand-navy">Founder & Principal Systems Architect</span>
                    <span className="text-[10px] font-mono bg-white px-2 py-0.5 border border-brand-border rounded-sm text-brand-slate">
                      Verification Pending Owner Sign-off
                    </span>
                  </div>
                  <span className="text-xs text-brand-slate block mt-0.5">
                    Hardware, Robotics & Edge Neural Systems Design • HATAK R™ Initiative
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-brand-slate">
                Need accredited investor or partner diligence materials?
              </span>
              <Link to="/contact?type=pilot">
                <Button variant="outline" size="sm" className="gap-2">
                  Request Diligence Packet
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Milestones Roadmap */}
      <section>
        <Container>
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Development Trajectory
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Verified Project Milestones
            </h2>
          </div>

          <div className="border border-brand-border rounded-sm divide-y divide-brand-border bg-white">
            {ROADMAP_MILESTONES.map((m, idx) => (
              <div key={idx} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="md:w-1/4">
                  <span className="text-xs font-mono font-bold text-brand-red block">
                    {m.period}
                  </span>
                  <span className="text-sm font-bold text-brand-navy">
                    {m.phase}
                  </span>
                </div>

                <div className="md:w-1/2">
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {m.objective}
                  </p>
                </div>

                <div className="md:w-1/4 flex md:justify-end">
                  <Badge
                    status={
                      m.verificationStatus === 'Completed'
                        ? 'Demonstrated'
                        : m.verificationStatus === 'In Progress'
                        ? 'In Development'
                        : 'Planned Architecture'
                    }
                    label={m.verificationStatus}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
