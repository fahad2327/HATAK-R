import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Factory, Warehouse, ShieldAlert, Trees, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { INDUSTRY_SECTORS } from '../data/approvedContent';

export const IndustriesPage: React.FC = () => {
  const { slug: activeSlug } = useParams<{ slug?: string }>();

  const getSectorIcon = (slug: string) => {
    switch (slug) {
      case 'industrial-facilities':
        return <Factory className="w-6 h-6 text-brand-navy" />;
      case 'warehousing':
        return <Warehouse className="w-6 h-6 text-brand-red" />;
      case 'controlled-access':
        return <ShieldAlert className="w-6 h-6 text-brand-navy" />;
      case 'private-acreage':
        return <Trees className="w-6 h-6 text-brand-red" />;
      default:
        return <Factory className="w-6 h-6 text-brand-navy" />;
    }
  };

  const filteredSectors = activeSlug
    ? INDUSTRY_SECTORS.filter((s) => s.slug === activeSlug)
    : INDUSTRY_SECTORS;

  const displaySectors = filteredSectors.length > 0 ? filteredSectors : INDUSTRY_SECTORS;

  return (
    <div className="space-y-16 pb-24 bg-white text-brand-navy">
      <PageHeader
        category="Target Environments"
        title="Application Environments & Problem Profiles"
        description="Engineered around high-risk operational challenges where static surveillance cameras leave dangerous blind spots and outdoor false alarms trigger operator fatigue."
        statusBadge="Demonstrated"
        statusLabel="Field Pilot Candidate Profiles"
        actions={
          <Link to="/contact?type=pilot">
            <Button variant="primary" size="md">
              Inquire for Site Evaluation
            </Button>
          </Link>
        }
      />

      {/* 1. Filter Navigation Tabs */}
      <section className="border-b border-brand-border bg-brand-cool-grey-light/30">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3 text-xs font-mono">
            <Link
              to="/industries"
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                !activeSlug
                  ? 'bg-brand-navy text-white'
                  : 'text-brand-slate hover:text-brand-navy hover:bg-white'
              }`}
            >
              All Environments
            </Link>
            {INDUSTRY_SECTORS.map((s) => (
              <Link
                key={s.slug}
                to={`/industries/${s.slug}`}
                className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                  activeSlug === s.slug
                    ? 'bg-brand-navy text-white'
                    : 'text-brand-slate hover:text-brand-navy hover:bg-white'
                }`}
              >
                {s.title.split('&')[0].trim()}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Qualification Criteria Banner */}
      <section>
        <Container>
          <div className="p-8 rounded-xl bg-brand-cool-grey-light/60 border border-brand-border space-y-2 text-sm text-brand-slate">
            <div className="flex items-center gap-2 text-brand-navy font-bold text-base font-mono">
              <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
              <span>Pilot Host Evaluation Criteria</span>
            </div>
            <p className="leading-relaxed">
              Hatak R™ evaluates pilot deployment candidates based on perimeter fence geometry, power availability, and the presence of dedicated security review staff. Deployments are designed as supervised engineering trials under strict human-in-the-loop protocols.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Problem-Centered Sector Profiles */}
      <section>
        <Container>
          <div className="space-y-12">
            {displaySectors.map((sec) => (
              <div
                key={sec.id}
                id={sec.slug}
                className="scroll-mt-24 p-8 md:p-10 rounded-2xl bg-white border border-brand-border shadow-subtle space-y-8"
              >
                {/* Sector Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-cool-grey flex items-center justify-center shrink-0 border border-brand-border">
                      {getSectorIcon(sec.slug)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-red font-bold uppercase block">
                        {sec.category}
                      </span>
                      <h3 className="text-2xl font-bold text-brand-navy mt-0.5">
                        {sec.title}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded bg-brand-cool-grey text-brand-navy font-semibold self-start sm:self-auto">
                    {sec.status}
                  </span>
                </div>

                {/* 4 Core Pillars for each Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  {/* Pillar 1: Operational Challenge */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider">
                      The Operational Challenge
                    </h4>
                    <p className="text-brand-slate leading-relaxed">
                      {sec.operationalChallenge}
                    </p>
                  </div>

                  {/* Pillar 2: Relevant Hatak R Capability */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider">
                      Relevant Hatak R™ Capability
                    </h4>
                    <p className="text-brand-slate leading-relaxed">
                      {sec.relevantCapability}
                    </p>
                  </div>

                  {/* Pillar 3: Environment Fit */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider">
                      Environment Fit & Mounting
                    </h4>
                    <p className="text-brand-slate leading-relaxed">
                      {sec.environmentFit}
                    </p>
                  </div>

                  {/* Pillar 4: Expected Limitations */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>Expected Limitations</span>
                    </h4>
                    <p className="text-amber-800 leading-relaxed text-xs p-3 rounded-lg bg-amber-50 border border-amber-200">
                      {sec.expectedLimitations}
                    </p>
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border text-xs">
                  <span className="font-mono text-brand-slate">
                    Feasibility Review: <strong>Subject to site audit</strong>
                  </span>
                  <Link to={`/contact?type=pilot&area=${sec.slug}`}>
                    <Button variant="primary" size="sm" className="gap-1.5">
                      <span>Inquire for {sec.title.split('&')[0].trim()}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Bottom CTA */}
      <section>
        <Container>
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold">Have a Non-Standard Perimeter Layout?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our engineering team assesses site drawings, fence line perimeters, and sightline obstacles to estimate multi-node coverage.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="red" size="md">
                Request Feasibility Review
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
