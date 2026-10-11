import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Lock, Building, CheckCircle2, Award } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  ROADMAP_MILESTONES,
  COMPANY_METADATA,
  LEADERSHIP_TEAM,
  CORE_ENGINEERING_TEAM,
} from '../data/approvedContent';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Company Profile"
        title="Engineering Precision for High-Risk Perimeters"
        description="HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED was founded to eliminate the dangerous latency between perimeter intrusion detection and actionable deterrence through localized edge intelligence."
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
                HATAK R™ was conceived at Velammal Institute of Technology to develop a unified physical and electronic countermeasure platform. By integrating convolutional neural networks directly onto edge control hardware coupled with motorized pan/tilt positioning, the system autonomously isolates human intruders and feeds verified telemetry to operators in real-time.
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
                      Set the global benchmark for intelligent edge perimeter defense through verifiably reliable machine vision and accountable human-in-the-loop engineering.
                    </p>
                  </div>
                </div>
              </Card>

              {/* IP Status Box */}
              <div className="p-4 border border-brand-border bg-white rounded-sm text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold text-brand-navy">
                  <Lock className="w-4 h-4 text-brand-red" />
                  <span>Patent & Incorporation Record</span>
                </div>
                <p className="text-brand-slate text-[11px] leading-normal">
                  {COMPANY_METADATA.ipStatus.patentNotice}
                </p>
                <div className="text-[11px] font-mono text-emerald-800 pt-1 border-t border-brand-border">
                  DPIIT Startup Certificate: {COMPANY_METADATA.dpiitRecognition.certificateNo}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership & Core Engineering Team */}
      <section>
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Organization & Leadership
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Founders & Engineering Team
            </h2>
            <p className="text-xs text-brand-slate mt-2 leading-relaxed">
              HATAK R™ is driven by an engineering team specializing in applied mechanics, embedded robotics, and edge computer vision.
            </p>
          </div>

          {/* Founders & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-brand-border rounded-sm hover:border-brand-navy/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-brand-navy text-white flex items-center justify-center font-bold text-sm mb-4">
                    {leader.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-red font-semibold block mb-1">
                    {leader.role}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy mb-1">
                    {leader.name}
                  </h3>
                  {leader.affiliation && (
                    <span className="text-[11px] text-brand-slate block mb-3 font-mono">
                      {leader.affiliation}
                    </span>
                  )}
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {leader.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border text-[11px] font-mono text-brand-navy font-medium">
                  Verified Executive
                </div>
              </div>
            ))}
          </div>

          {/* Core Engineering Members */}
          <div className="border border-brand-border rounded-sm bg-brand-cool-grey-light/30 p-6 md:p-8">
            <div className="mb-4">
              <h3 className="text-base font-bold text-brand-navy">
                Core Engineering Specialists
              </h3>
              <p className="text-xs text-brand-slate">
                Hardware design, mechatronics drive, and computer vision implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CORE_ENGINEERING_TEAM.map((eng, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-brand-border rounded-sm space-y-2"
                >
                  <span className="text-[11px] font-mono text-brand-red uppercase font-semibold block">
                    {eng.role}
                  </span>
                  <h4 className="font-bold text-sm text-brand-navy">
                    {eng.name}
                  </h4>
                  <p className="text-xs text-brand-slate leading-normal">
                    {eng.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Institutional Origin & Incubation */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-red uppercase">
                <Building className="w-4 h-4" />
                <span>Academic & Incubation Heritage</span>
              </div>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                Velammal Institute of Technology
              </h2>
              <p className="text-xs text-brand-slate leading-relaxed">
                Incubated with deep-tech support at Velammal Institute of Technology, Chennai (Panchetti, Ponneri - 601 204). Backed by the Institution's Innovation Council (IIC) with NBA and NAAC 'A' Grade academic credentials.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-brand-navy">
                <span className="px-3 py-1 bg-white border border-brand-border rounded-sm">
                  Institution's Innovation Council
                </span>
                <span className="px-3 py-1 bg-white border border-brand-border rounded-sm">
                  NBA & NAAC 'A' Grade
                </span>
                <span className="px-3 py-1 bg-white border border-brand-border rounded-sm">
                  Chennai - Kolkata Highway Campus
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 border border-brand-border rounded-sm space-y-3 text-xs">
              <span className="font-mono font-bold text-brand-navy block uppercase">
                Statutory Startup Status
              </span>
              <div className="space-y-1 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-brand-slate">Certificate No:</span>
                  <span className="font-bold text-brand-navy">DIPP250915</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-slate">Recognized By:</span>
                  <span className="text-brand-navy">DPIIT / GoI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-slate">Valid Upto:</span>
                  <span className="text-brand-navy">04-06-2035</span>
                </div>
              </div>
              <div className="pt-2 border-t border-brand-border text-emerald-700 font-semibold flex items-center gap-1.5 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Certified DPIIT Recognized Startup
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Engineering Values */}
      <section>
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
                <Compass className="w-4 h-4 text-brand-red" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Human Authority</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Our technology automates sensing and targeting calculations, but decision-making authority remains with authenticated human operators.
              </p>
            </div>

            <div className="p-6 bg-white border border-brand-border rounded-sm space-y-3">
              <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                <Award className="w-4 h-4 text-brand-red" />
              </div>
              <h3 className="font-bold text-brand-navy text-sm">Hardware-First Integrity</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Algorithms depend on mechanical reliability. We design custom motor drivers, electronic control units, and ruggedized enclosures built for harsh field environments.
              </p>
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
