import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Eye, Cpu, Compass, Activity, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SOLUTION_GROUPS } from '../data/approvedContent';

export const SolutionsPage: React.FC = () => {
  const { group: activeGroupParam } = useParams<{ group?: string }>();

  const getGroupIcon = (slug: string) => {
    switch (slug) {
      case 'vision':
        return <Eye className="w-6 h-6 text-brand-red" />;
      case 'embedded-control':
        return <Cpu className="w-6 h-6 text-brand-navy" />;
      case 'mechanical-systems':
        return <Compass className="w-6 h-6 text-brand-red" />;
      case 'monitoring':
        return <Activity className="w-6 h-6 text-brand-navy" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-navy" />;
    }
  };

  const filteredGroups = activeGroupParam
    ? SOLUTION_GROUPS.filter((g) => g.slug === activeGroupParam)
    : SOLUTION_GROUPS;

  const displayGroups = filteredGroups.length > 0 ? filteredGroups : SOLUTION_GROUPS;

  return (
    <div className="space-y-16 pb-24 bg-white text-brand-navy">
      <PageHeader
        category="Solutions Architecture"
        title="Engineering Subsystems & Modular Capabilities"
        description="A cohesive perimeter security architecture uniting camera-based edge vision, precision electromechanical positioning, dedicated electronic control units, and centralized monitoring."
        statusBadge="Demonstrated"
        statusLabel="Laboratory Prototype Verified"
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact?type=demo">
              <Button variant="primary" size="md" className="gap-2 shadow-sm">
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/technology">
              <Button variant="outline" size="md">
                System Architecture
              </Button>
            </Link>
          </div>
        }
      />

      {/* 1. Filter Navigation Tabs */}
      <section className="border-b border-brand-border bg-brand-cool-grey-light/30">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3 text-xs font-mono">
            <Link
              to="/solutions"
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                !activeGroupParam
                  ? 'bg-brand-navy text-white'
                  : 'text-brand-slate hover:text-brand-navy hover:bg-white'
              }`}
            >
              All 4 Subsystems
            </Link>
            {SOLUTION_GROUPS.map((g) => (
              <Link
                key={g.slug}
                to={`/solutions/${g.slug}`}
                className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                  activeGroupParam === g.slug
                    ? 'bg-brand-navy text-white'
                    : 'text-brand-slate hover:text-brand-navy hover:bg-white'
                }`}
              >
                {g.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Overview Banner with Human-in-the-Loop Standard */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-cool-grey-light/60 p-8 rounded-xl border border-brand-border">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                Engineering Approach
              </span>
              <h2 className="text-2xl font-bold text-brand-navy">
                Modular, Auditable, and Human-Supervised
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Hatak R treats security not as disconnected CCTV cameras and siren boxes, but as a deterministic engineering system. Every subsystem is designed with isolated power rails, hardware watchdogs, and strict separation between automated observation and human-supervised escalation.
              </p>
            </div>
            <div className="lg:col-span-4 p-5 bg-white rounded-lg border border-brand-border text-xs space-y-2.5 shadow-subtle">
              <div className="flex items-center gap-2 font-bold text-brand-navy">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict Human Authorization Protocol</span>
              </div>
              <p className="text-brand-slate leading-relaxed">
                All alerting and physical tracking sequences require an authorized human operator before activating deterrence measures. Autonomous use of force is strictly excluded from our software and hardware architecture.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Detailed Subsystem Groups */}
      <section>
        <Container>
          <div className="space-y-16">
            {displayGroups.map((group, idx) => (
              <div
                key={group.slug}
                id={group.slug}
                className="scroll-mt-24 p-8 md:p-10 rounded-2xl bg-white border border-brand-border shadow-subtle space-y-8"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-cool-grey flex items-center justify-center shrink-0 border border-brand-border">
                      {getGroupIcon(group.slug)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-brand-red font-bold uppercase">GROUP 0{idx + 1}</span>
                        <span className="text-slate-300">&bull;</span>
                        <span className="text-brand-slate">{group.subtitle}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy mt-1">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge status={group.status} />
                  </div>
                </div>

                {/* Content Grid: What it does & Why it matters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider">
                      What It Does
                    </h4>
                    <p className="text-brand-slate leading-relaxed">
                      {group.whatItDoes}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider">
                      Why It Matters
                    </h4>
                    <p className="text-brand-slate leading-relaxed">
                      {group.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Subsystem Components */}
                <div className="space-y-3">
                  <h4 className="font-bold text-brand-navy uppercase text-xs font-mono tracking-wider">
                    Core Subsystem Components
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.subsystemComponents.map((component, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-lg bg-brand-cool-grey-light/50 border border-brand-border text-xs text-brand-navy flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        <span>{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Honest Limitations Notice */}
                <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-2 font-bold font-mono">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Technical & Environmental Limitations</span>
                  </div>
                  <p className="pl-6 text-amber-800 leading-relaxed">
                    {group.limitations}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-border text-xs">
                  <span className="font-mono text-brand-slate">
                    Implementation Status: <strong>{group.status}</strong>
                  </span>
                  <Link to={`/contact?type=demo&area=${group.slug}`}>
                    <Button variant="primary" size="sm" className="gap-1.5">
                      <span>Inquire About {group.title}</span>
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
          <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold">Require Custom Subsystem Integration?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our engineering team reviews technical specifications for site-specific mounting, sensor protocols, and electrical interfaces.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="red" size="md">
                Contact Systems Engineering
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
