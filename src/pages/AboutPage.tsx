import React from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import {
  ROADMAP_MILESTONES,
  COMPANY_METADATA,
  FOUNDER,
  RECOGNITION_ITEMS,
} from '../data/approvedContent';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-24 bg-white text-brand-navy">
      <PageHeader
        category="Company Profile"
        title="About Hatak R™"
        description="HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED is an engineering-driven industrial technology company developing intelligent non-lethal security and monitoring systems."
        statusBadge="Patent Pending"
        statusLabel="Patent Application Filed"
        actions={
          <Link to="/contact">
            <Button variant="primary" size="md">
              Contact Leadership
            </Button>
          </Link>
        }
      />

      {/* 1. Company Overview */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-cool-grey-light/60 p-8 sm:p-10 rounded-2xl border border-brand-border">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                01 &bull; Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                {COMPANY_METADATA.legalEntity}
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Incorporated in India, Hatak R™ is a deep-technology hardware and intelligent systems company recognized by the Department for Promotion of Industry and Internal Trade (DPIIT Certificate No. DIPP250915). Established from advanced research at Velammal Institute of Technology in Chennai, our focus is the integration of edge machine vision, dedicated electronic control units, and motorized subsystems for verified perimeter monitoring.
              </p>
              <div className="p-4 bg-white rounded-lg border border-brand-border text-xs font-mono text-brand-slate space-y-2 shadow-subtle">
                <div className="flex flex-wrap justify-between gap-2">
                  <span>Legal Name: <strong>{COMPANY_METADATA.legalEntity}</strong></span>
                  <span>Incorporated: <strong>{COMPANY_METADATA.incorporationDate}</strong></span>
                </div>
                <div className="flex flex-wrap justify-between gap-2 pt-2 border-t border-brand-border">
                  <span>DPIIT Recognition: <strong>{COMPANY_METADATA.dpiitRecognition.certificateNo}</strong></span>
                  <span>Registered Location: <strong>{COMPANY_METADATA.contactCoordinates.location}</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-navy uppercase">
                <Building className="w-4 h-4 text-brand-red" />
                <span>Academic Origin</span>
              </div>
              <h3 className="font-bold text-base text-brand-navy">
                Velammal Institute of Technology
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Incubated with engineering research and laboratory infrastructure under the Institution's Innovation Council (IIC). The institution holds NBA and NAAC 'A' Grade accreditations.
              </p>
              <div className="pt-2 border-t border-brand-border text-[11px] font-mono text-brand-slate">
                Chennai - Kolkata Highway, Panchetti, Ponneri
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Mission */}
      <section>
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-brand-navy text-white shadow-card space-y-4 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              02 &bull; Mission Statement
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Eliminating Critical Perimeter Response Latency Through Embedded Intelligence
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              To engineer deterministic, non-lethal perimeter defense systems that bridge optical sensing and human-verified deterrence—preventing unauthorized intrusions while maintaining strict accountability and ethical standards.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Problem Being Addressed */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              03 &bull; Problem Being Addressed
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Structural Vulnerabilities in Modern Perimeter Security
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Industrial facilities, logistics parks, and critical utilities face two structural deficiencies in traditional perimeter defense:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded bg-brand-red-light text-brand-red flex items-center justify-center font-bold text-sm font-mono">
                01
              </div>
              <h3 className="font-bold text-lg text-brand-navy">
                Passive Monitoring and Delayed Response
              </h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                Standard perimeter CCTV cameras passively record intrusions without active engagement. By the time human operators notice alerts and mobile guard patrols reach distant fence lines, intrusions have already succeeded.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded bg-brand-red-light text-brand-red flex items-center justify-center font-bold text-sm font-mono">
                02
              </div>
              <h3 className="font-bold text-lg text-brand-navy">
                Sensor Nuisance Alarms & Operator Fatigue
              </h3>
              <p className="text-sm text-brand-slate leading-relaxed">
                Infrared beams and basic motion detectors generate high false-alarm rates triggered by rain, shadows, and wildlife. Security personnel suffer alert fatigue and frequently ignore or disable critical sensors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Engineering Philosophy */}
      <section className="bg-brand-cool-grey-light/30 border-y border-brand-border py-16">
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              04 &bull; Engineering Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Deterministic, Accountable & Non-Lethal
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Our engineering foundation is grounded in precision mechanical design, edge intelligence, and human supervision:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <span className="text-xs font-mono font-bold text-brand-navy block uppercase">
                Edge Computing
              </span>
              <h3 className="text-base font-bold text-brand-navy">
                Localized Inference
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Image processing and neural classification occur locally on the perimeter node, ensuring sub-second response without dependency on cloud bandwidth.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <span className="text-xs font-mono font-bold text-brand-red block uppercase">
                Ethical Standard
              </span>
              <h3 className="text-base font-bold text-brand-navy">
                Mandatory Human Authorization
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Automated detection is paired with required human operator confirmation. We strictly reject autonomous lethal actuation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-brand-border shadow-subtle space-y-3">
              <span className="text-xs font-mono font-bold text-brand-navy block uppercase">
                Hardware Reliability
              </span>
              <h3 className="text-base font-bold text-brand-navy">
                Dedicated ECU Architecture
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Microcontrollers and motor drivers feature independent power rails and hardware watchdogs for fail-safe physical operation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Founder Profile (Dr. R. Partheepan ONLY) */}
      <section>
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-brand-border p-8 sm:p-12 shadow-card space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                05 &bull; Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-1">
                Founder & Technical Leadership
              </h2>
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
                    Mechatronic Positioning
                  </span>
                  <span className="px-2.5 py-1 bg-brand-cool-grey rounded border border-brand-border text-brand-navy">
                    Institutional IP Transfer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Approved Milestones */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              06 &bull; Verified Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Corporate & Research Timeline
            </h2>
            <p className="text-sm text-brand-slate leading-relaxed">
              Milestones supported by official documentation and prototype demonstrations:
            </p>
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

      {/* 7. Recognition */}
      <section className="bg-brand-cool-grey-light/30 border-y border-brand-border py-16">
        <Container>
          <div className="max-w-3xl space-y-2 mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              07 &bull; Statutory & Academic Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Government Recognition & Filings
            </h2>
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

      {/* 8. Contact CTA */}
      <section>
        <Container>
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                08 &bull; Direct Enquiry
              </span>
              <h3 className="text-2xl font-bold">Connect With Hatak R™ Leadership</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For research collaboration, technical evaluation, or partnership inquiries, reach out directly to our leadership desk.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="red" size="md">
                Contact Company
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
