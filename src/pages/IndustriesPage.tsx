import React from 'react';
import { Link } from 'react-router-dom';
import { Warehouse, Zap, Building2, Trees, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';

const INDUSTRY_PROFILES = [
  {
    id: 'industrial-warehousing',
    icon: Warehouse,
    title: 'Industrial Facilities & Logistics Yards',
    sector: 'Supply Chain & Manufacturing',
    context: 'Massive open storage yards, fleet vehicle depots, and container transfer stations requiring continuous night-time perimeter protection.',
    riskProfile: 'Unauthorized entry during shift changeover, equipment theft, blind spots across sprawling perimeter fencing.',
    intendedSolution: 'Autonomous optical detection tripwires. When an intruder approaches fence lines, HATAK R™ slews its optical targeting mount, locks on target coordinates, and alerts security personnel with pinpoint telemetry.',
    readiness: 'Target for Initial Field Pilot',
  },
  {
    id: 'critical-infrastructure',
    icon: Zap,
    title: 'Energy, Substations & Critical Utilities',
    sector: 'High-Consequence Infrastructure',
    context: 'Unmanned electrical substations, water pumping stations, and solar energy installations in isolated geographic corridors.',
    riskProfile: 'High risk of copper cable theft, vandalism, and sabotage without on-site security guards available for hours.',
    intendedSolution: 'Solar/battery-backed edge pods operating 24/7 with zero dependence on high-bandwidth cloud uplinks. Real-time classification dispatches central law enforcement/patrol units instantly.',
    readiness: 'Target for Pilot Phase II',
  },
  {
    id: 'corporate-campuses',
    icon: Building2,
    title: 'Research Campuses & Technology Parks',
    sector: 'Enterprise & Aerospace',
    context: 'Sprawling suburban corporate campuses, R&D labs, and defense innovation facilities requiring discrete, non-obtrusive perimeter security.',
    riskProfile: 'Industrial espionage, unauthorized trespassers crossing wooded grounds or unpatrolled boundary lines.',
    intendedSolution: 'Multi-node network integrating directly with corporate Security Operations Centers (SOC). Automated handoff between nodes tracks the target across property boundaries.',
    readiness: 'Integration Prototype in Planning',
  },
  {
    id: 'remote-properties',
    icon: Trees,
    title: 'Expansive Private Properties & Estates',
    sector: 'Private Acreage & Agriculture',
    context: 'Expansive rural estates, vineyards, and agricultural operations where standard CCTV alerts are drowned out by false wildlife alarms.',
    riskProfile: 'Slow police response times, long perimeter perimeters that make physical guard patrols impractical.',
    intendedSolution: 'CNN person-filtering eliminates deer, livestock, and wind alerts, notifying property owners only upon verified human trespass with vector spotlights.',
    readiness: 'Concept Evaluation',
  },
];

export const IndustriesPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <PageHeader
        category="Target Sectors"
        title="Intended Industrial & Commercial Applications"
        description="HATAK R™ is engineered to solve acute perimeter monitoring vulnerabilities across high-consequence facilities, warehouses, and remote critical infrastructure."
        statusBadge="Default"
        statusLabel="Field Pilot In Scheduling"
        actions={
          <Link to="/contact?type=pilot">
            <Button variant="primary" size="md">
              Explore Site Fit
            </Button>
          </Link>
        }
      />

      {/* Deployment Governance Advisory */}
      <section>
        <Container>
          <div className="p-4 bg-brand-cool-grey-light border border-brand-border rounded-sm text-xs text-brand-slate leading-relaxed">
            <span className="font-bold text-brand-navy block mb-0.5">Deployment Transparency Notice:</span>
            The use cases detailed on this page represent intended applications and system design targets based on facility threat assessments. HATAK R™ does not claim active production deployments; pilot engagements are currently being scheduled with qualified institutional partners.
          </div>
        </Container>
      </section>

      {/* Industry Application Profiles */}
      <section>
        <Container>
          <div className="space-y-8">
            {INDUSTRY_PROFILES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="border border-brand-border bg-white rounded-sm p-6 md:p-8 hover:border-brand-slate/40 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-brand-border">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm bg-brand-navy text-white flex items-center justify-center">
                          <Icon className="w-4 h-4 text-brand-red" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-slate">
                            {ind.sector}
                          </span>
                          <h2 className="text-xl md:text-2xl font-bold text-brand-navy">
                            {ind.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-xs text-brand-slate max-w-2xl leading-relaxed">
                        {ind.context}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span className="text-xs font-mono font-semibold text-brand-navy bg-brand-cool-grey-light px-3 py-1.5 rounded-sm border border-brand-border block">
                        Target Status: {ind.readiness}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-xs">
                    <div className="p-4 bg-brand-cool-grey-light/30 border border-brand-border rounded-sm">
                      <span className="font-mono font-bold uppercase text-brand-red block mb-1">
                        Operational Vulnerability
                      </span>
                      <p className="text-brand-slate leading-relaxed">
                        {ind.riskProfile}
                      </p>
                    </div>

                    <div className="p-4 bg-brand-cool-grey-light/30 border border-brand-border rounded-sm">
                      <span className="font-mono font-bold uppercase text-brand-navy block mb-1">
                        HATAK R™ Intended Intervention
                      </span>
                      <p className="text-brand-slate leading-relaxed">
                        {ind.intendedSolution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-brand-slate">
                      Requires initial topological survey and boundary line inspection.
                    </span>
                    <Link to={`/contact?type=pilot&industry=${ind.id}`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        Inquire for {ind.title}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pilot Eligibility & Criteria */}
      <section className="py-12 bg-brand-cool-grey-light/30 border-y border-brand-border">
        <Container>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
              Field Program Criteria
            </span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Field Pilot Site Qualification
            </h2>
            <p className="text-xs text-brand-slate mt-2 leading-relaxed">
              We collaborate with facility owners to validate system performance in real-world environmental conditions under non-disclosure terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-2">
              <span className="font-bold text-brand-navy block">1. Defined Perimeter Boundary</span>
              <p className="text-brand-slate leading-relaxed">
                Sites with clear physical property boundaries (minimum 50m clear line-of-sight) suited for optical tracking calibration.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-2">
              <span className="font-bold text-brand-navy block">2. Security Staff Availability</span>
              <p className="text-brand-slate leading-relaxed">
                Facilities with designated on-site or on-call security operators capable of verifying and acting on system telemetry alerts.
              </p>
            </div>

            <div className="p-5 bg-white border border-brand-border rounded-sm space-y-2">
              <span className="font-bold text-brand-navy block">3. Mutual Research Protocol</span>
              <p className="text-brand-slate leading-relaxed">
                Commitment to log environmental false-positive edge cases to help continuously refine CNN weight quantizations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section>
        <Container>
          <div className="border border-brand-border bg-white rounded-sm p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold text-brand-navy">
              Assess Fit for Your Facility Perimeter
            </h3>
            <p className="text-xs text-brand-slate max-w-lg mx-auto leading-relaxed">
              Submit your site dimensions and operational challenges to receive a preliminary technical feasibility analysis.
            </p>
            <div className="pt-2">
              <Link to="/contact?type=pilot">
                <Button variant="primary" size="lg">
                  Submit Site Profile for Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
