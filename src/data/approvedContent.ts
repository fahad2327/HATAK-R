/**
 * HATAK R™ — Approved Content & Factual Registry
 * 
 * Strict Content Governance:
 * - Capabilities are strictly marked: "Demonstrated", "In Development", or "Planned".
 * - Patent status is explicitly "Application Filed (Pending Review)", never "Granted".
 * - No fabricated client logos, testimonials, or simulated live video feeds.
 * - Items needing founder sign-off are marked with TODO tags.
 */

export interface CapabilityItem {
  id: string;
  title: string;
  category: 'vision' | 'hardware' | 'network' | 'workflow';
  status: 'Demonstrated' | 'In Development' | 'Planned Architecture';
  summary: string;
  technicalDetails: string;
}

export interface IndustryUseCase {
  id: string;
  name: string;
  sector: string;
  challenge: string;
  intendedApplication: string;
  deploymentReadiness: string;
}

export interface MilestoneItem {
  period: string;
  phase: string;
  objective: string;
  verificationStatus: 'Completed' | 'In Progress' | 'Roadmap';
}

export const COMPANY_METADATA = {
  name: 'HATAK R™',
  tagline: 'AI-Assisted Intelligent Perimeter Security',
  productConcept: 'Detect — Decide — Defend',
  corePhilosophy: 'Engineering-led situational awareness combining multi-camera edge vision, intelligent classification, and human-verified response workflows.',
  ipStatus: {
    patentDescription: 'Indian Patent Application filed for multi-camera motorized tracking and classification mechanism.',
    patentNotice: 'Patent Pending. Application filed; not yet granted. Public technical disclosure limited to published patent claims.',
    regulatoryNotice: 'All response workflows require human operator authorization. HATAK R™ does not support autonomous physical force.',
  },
  contactCoordinates: {
    email: 'contact@hatak-r.com', // Placeholder / configurable
    technicalDesk: 'engineering@hatak-r.com',
    location: 'Bengaluru / Hyderabad, India', // Founder approval note
    businessInquiryType: [
      'Industrial Perimeter Pilot',
      'Technology & Integration Partnership',
      'Research & Academic Collaboration',
      'Investor Due Diligence',
      'General Technical Inquiry'
    ]
  }
};

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'edge-vision',
    title: 'Multi-Camera Machine Vision & CNN Person Classification',
    category: 'vision',
    status: 'Demonstrated',
    summary: 'Optical sensor feed processed through convolutional neural networks to classify human presence against background environmental motion.',
    technicalDetails: 'Trained on high-contrast industrial perimeter scenarios to minimize false triggers caused by vegetation, animals, and weather variances.'
  },
  {
    id: 'motorized-mount',
    title: 'Dual-Axis Motorized Pan/Tilt Targeting Mount',
    category: 'hardware',
    status: 'Demonstrated',
    summary: 'Precision closed-loop electromechanical mount providing rapid re-orientation toward target vectors identified by perimeter sensors.',
    technicalDetails: 'Driven by microstepping motor drivers and industrial encoder feedback for repeatable angular positioning.'
  },
  {
    id: 'ecu-controller',
    title: 'Dedicated Embedded Electronic Control Unit (ECU)',
    category: 'hardware',
    status: 'Demonstrated',
    summary: 'Custom controller housing edge inference processor, I/O relays, power management, and fail-safe watchdog circuits.',
    technicalDetails: 'Isolated low-voltage bus architecture with hardware interlocks ensuring motion occurs only under verified system heartbeat.'
  },
  {
    id: 'central-monitoring',
    title: 'Centralized Multi-Node Coordination Console',
    category: 'network',
    status: 'In Development',
    summary: 'Distributed mesh reporting status, target vector coordinates, and system telemetry across multi-camera perimeters.',
    technicalDetails: 'Encrypted telemetry bus linking field units to a central operations terminal with low latency telemetry transport.'
  },
  {
    id: 'operator-workflow',
    title: 'Human-in-the-Loop Incident Verification Pipeline',
    category: 'workflow',
    status: 'In Development',
    summary: 'Operator verification system requiring authenticated human confirmation before escalating alerts or initiating deterrent signals.',
    technicalDetails: 'Audit-logged review screen showing synchronized optical capture, classification confidence, and timestamped operator approval.'
  },
  {
    id: 'non-lethal-deterrent',
    title: 'Non-Lethal Deterrent Interface Architecture',
    category: 'workflow',
    status: 'Planned Architecture',
    summary: 'Conceptual interface for directional acoustic warning, high-lumen optical disruption, or non-lethal repellent payloads.',
    technicalDetails: 'Hardware and software interlocks require dual-key human authorization and rigorous site-specific legal compliance before activation.'
  }
];

export const INDUSTRIES: IndustryUseCase[] = [
  {
    id: 'industrial-warehousing',
    name: 'Industrial Logistics & Warehouses',
    sector: 'Supply Chain & Manufacturing',
    challenge: 'Extensive outer yard perimeters with frequent false alarms from logistics traffic and limited night security personnel.',
    intendedApplication: 'Automated perimeter tripwire tracking with targeted spotlighting and prompt operator notification.',
    deploymentReadiness: 'Target for Initial Field Pilot'
  },
  {
    id: 'critical-infrastructure',
    name: 'Restricted Utilities & Sub-stations',
    sector: 'Energy & Water Resources',
    challenge: 'Unmanned substations and isolated pumping stations exposed to vandalism and copper theft.',
    intendedApplication: 'Autonomous visual classification alerting central operations dispatch with exact coordinates and telemetry.',
    deploymentReadiness: 'Target for Pilot Phase II'
  },
  {
    id: 'corporate-campuses',
    name: 'R&D Facilities & Secure Campuses',
    sector: 'Technology & Aerospace',
    challenge: 'Strict boundary privacy requirements without deploying obtrusive physical barricades.',
    intendedApplication: 'Integrated camera mesh sharing vector data with existing Security Operations Center (SOC) video management software.',
    deploymentReadiness: 'Integration Prototype in Planning'
  },
  {
    id: 'remote-compounds',
    name: 'Agricultural & Remote Private Sites',
    sector: 'Commercial Agriculture & Private Acreage',
    challenge: 'Large boundaries where traditional human patrol intervals leave hours of blind spots.',
    intendedApplication: 'Solar/battery-backed standalone pods providing intrusion classification and remote app alerts.',
    deploymentReadiness: 'Concept Evaluation'
  }
];

export const ROADMAP_MILESTONES: MilestoneItem[] = [
  {
    period: 'Phase 1 (Achieved)',
    phase: 'Core Prototype Bench Testing',
    objective: 'Demonstrated camera-assisted CNN person classification, motorized dual-axis tracking mount, and embedded ECU bench integration.',
    verificationStatus: 'Completed'
  },
  {
    period: 'Phase 2 (Current)',
    phase: 'Firmware Hardening & Multi-Sensor Sync',
    objective: 'Refining low-latency optical handoff, environmental ruggedization of enclosure, and operator console verification flow.',
    verificationStatus: 'In Progress'
  },
  {
    period: 'Phase 3 (Upcoming)',
    phase: 'Controlled Site Pilot Program',
    objective: 'Deploying bounded multi-node test array at industrial partner test yard under full operator supervision.',
    verificationStatus: 'Roadmap'
  },
  {
    period: 'Phase 4 (Future)',
    phase: 'Institutional Compliance & Certification',
    objective: 'Electromagnetic compatibility (EMC), industrial safety certifications, and standardized VMS software drivers.',
    verificationStatus: 'Roadmap'
  }
];

export const RECOGNITION_ITEMS = [
  {
    title: 'Startup & Innovation Ecosystem Recognition',
    category: 'Ecosystem',
    description: 'Developed under the aegis of deep-tech incubation support. DPIIT startup registration verification pending public clearance.',
    status: 'Verification Pending Official Publication'
  },
  {
    title: 'Intellectual Property Filing',
    category: 'Patent Application',
    description: 'Indian Patent Application filed covering multi-camera motorized tracking mechanism and electronic control unit architecture.',
    status: 'Application Filed / Patent Pending'
  },
  {
    title: 'Engineering Bench Validation',
    category: 'Technical Proof',
    description: 'Prototype unit demonstrated tracking agility and classification reliability under controlled testyard conditions.',
    status: 'Bench Test Verified'
  }
];
