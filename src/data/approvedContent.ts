/**
 * HATAK R™ — Official Factual Registry & Verified Corporate Disclosures
 * 
 * Company: HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED
 * DPIIT Certificate: DIPP250915
 * Patent Application: 202141014878
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

export interface TeamMember {
  name: string;
  role: string;
  affiliation?: string;
  focus: string;
}

export const COMPANY_METADATA = {
  name: 'HATAK R™',
  legalEntity: 'HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED',
  incorporationDate: '05-06-2025',
  tagline: 'AI-Assisted Intelligent Non-Lethal Security Systems',
  productConcept: 'Detect — Decide — Defend',
  corePhilosophy: 'Redefining intelligent non-lethal perimeter defense through multi-camera edge machine vision, dual-motor 360° targeting, and an electronic control unit.',
  academicAffiliation: {
    institution: 'Velammal Institute of Technology',
    location: 'Chennai - Kolkata Highway, Panchetti, Ponneri - 601 204, Tamil Nadu, India',
    accreditation: "Institution's Innovation Council (IIC) | NBA & NAAC 'A' Grade",
  },
  dpiitRecognition: {
    certificateNo: 'DIPP250915',
    issueDate: '19-03-2026',
    validUpto: '04-06-2035',
    ministry: 'Ministry of Commerce & Industry, Government of India (#startupindia)',
    industry: 'Security Solutions / Home Security Solutions',
  },
  ipStatus: {
    patentNumber: '202141014878',
    patentDescription: 'Indian Patent Application filed for automated motorized tracking, CNN-based classification, and non-lethal security targeting mechanism.',
    patentNotice: 'Patent Application No: 202141014878 (Patent Pending). Technical Domains: Applied Mechanics | Machine Vision | Automated Security Systems.',
    regulatoryNotice: 'All response workflows require human operator authorization. HATAK R™ does not support unauthorized autonomous physical force.',
  },
  pricing: {
    deviceRange: '₹50,000 – ₹75,000 per unit',
    amcRange: '₹5,000 – ₹10,000 per year',
    model: 'Hybrid Revenue Model: Hardware Sales + AI Software + AMC Service Licensing',
  },
  contactCoordinates: {
    email: 'contact@hatak-r.com',
    teamLeadEmail: 'fahad@hatak-r.com',
    technicalDesk: 'engineering@hatak-r.com',
    location: 'Chennai, Tamil Nadu, India',
    businessInquiryType: [
      'Industrial Perimeter Pilot',
      'Technology & Integration Partnership',
      'Research & Academic Collaboration',
      'Investor Due Diligence',
      'General Technical Inquiry'
    ]
  }
};

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: 'Dr. R. Partheepan',
    role: 'Founder & Director',
    affiliation: 'Velammal Institute of Technology',
    focus: 'Applied Mechanics, Automated Security Architecture, and Strategic Research Leadership.'
  },
  {
    name: 'Dr. S.S. Manikandan',
    role: 'Co-Founder & Director',
    affiliation: 'Velammal Institute of Technology',
    focus: 'Machine Vision Systems, Mechatronics Integration, and Institutional Incubation.'
  },
  {
    name: 'Fahad H.',
    role: 'Team Lead & Systems Architect',
    focus: 'Hardware/Software Co-Design, Edge Neural Computing, and Prototype Engineering.'
  }
];


export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'edge-vision',
    title: 'Multi-Camera Machine Vision & CNN Person Classification',
    category: 'vision',
    status: 'Demonstrated',
    summary: 'Wall-mounted and perimeter IP camera feeds processed by convolutional neural networks to classify authorized personnel vs. unauthorized intruders in real-time.',
    technicalDetails: 'Trained to eliminate false triggers from vegetation, weather, and wildlife, delivering instantaneous target vector coordinates.'
  },
  {
    id: 'motorized-mount',
    title: 'Dual-Motor Pan/Tilt Platform (360° Coverage)',
    category: 'hardware',
    status: 'Demonstrated',
    summary: 'Precision electromechanical platform featuring independent azimuth rotation and altitude/elevation movement for continuous 360° hemispherical tracking.',
    technicalDetails: 'High-torque micro-stepping drives and encoder feedback ensure rapid slewing and locked alignment with detected intruder coordinates.'
  },
  {
    id: 'ecu-controller',
    title: 'Electronic Control Unit (ECPU) & Power Management',
    category: 'hardware',
    status: 'Demonstrated',
    summary: 'Centralized edge processing and power management system managing sensor ingress, motor trajectory commands, and fail-safe interlocks.',
    technicalDetails: 'Isolated industrial bus with hardware watchdogs and external power regulation supporting 24/7 continuous duty cycles.'
  },
  {
    id: 'central-monitoring',
    title: 'Centralized Control & Multi-Unit Integration',
    category: 'network',
    status: 'In Development',
    summary: 'Enables central monitoring and coordination across multiple wall-mounted camera nodes and motorized targeting units across large premises.',
    technicalDetails: 'Low-latency telemetry bus connecting remote perimeter units to the central security monitoring console.'
  },
  {
    id: 'operator-workflow',
    title: 'Decision & Aiming Phase Verification Loop',
    category: 'workflow',
    status: 'In Development',
    summary: 'Sequential Detect → Decide → Aim → Defend pipeline ensuring authenticated review before escalations or deterrent triggers are dispatched.',
    technicalDetails: 'Audited operator console showing synchronous optical capture, CNN classification confidence, and timestamped operator confirmation.'
  },
  {
    id: 'non-lethal-deterrent',
    title: 'Non-Lethal Response Mechanism Interface',
    category: 'workflow',
    status: 'Planned Architecture',
    summary: 'Externally powered non-lethal deterrent mechanism (rubber projectile deterrent / directional warning) engineered for controlled-access property protection.',
    technicalDetails: 'Requires strict regulatory clearance, hardware interlocks, and explicit authorized site permissions prior to field deployment.'
  }
];

export const INDUSTRIES: IndustryUseCase[] = [
  {
    id: 'industrial-warehousing',
    name: 'Industrial Perimeters & Storage Yards',
    sector: 'Supply Chain & Manufacturing',
    challenge: 'Expansive factory boundaries and storage yards vulnerable during non-working hours with delayed guard patrols.',
    intendedApplication: 'Automated 360° vector tracking with continuous camera surveillance alerting central dispatch immediately upon fence-line crossing.',
    deploymentReadiness: 'Target for Initial Field Pilot'
  },
  {
    id: 'critical-infrastructure',
    name: 'Remote Infrastructure & Power Stations',
    sector: 'Energy & Telecommunications',
    challenge: 'Substations, data centers, and communication towers situated far from rapid emergency response units.',
    intendedApplication: 'Standalone edge vision units providing autonomous intrusion detection and immediate deterrent response in unpopulated zones.',
    deploymentReadiness: 'Target for Pilot Phase II'
  },
  {
    id: 'farmhouses-properties',
    name: 'Farmhouses & Gated Private Estates',
    sector: 'Private Acreage & Gated Communities',
    challenge: 'Large acreage where manual guard patrols leave vast blind spots and create severe manpower costs.',
    intendedApplication: 'Dual-motor platform covering wide approach vectors with CNN filtering to ignore livestock and wildlife.',
    deploymentReadiness: 'Field Pilot Candidate'
  },
  {
    id: 'restricted-zones',
    name: 'Isolated Restricted Zones & Test Labs',
    sector: 'Research & High-Security Enclosures',
    challenge: 'Secured scientific enclosures and testing facilities with restricted access requiring 24/7 autonomous surveillance.',
    intendedApplication: 'Integrated camera mesh and ECPU controlling access corridors and logging vector telemetry for audit compliance.',
    deploymentReadiness: 'Concept Evaluation'
  }
];

export const ROADMAP_MILESTONES: MilestoneItem[] = [
  {
    period: '2021 – 2024',
    phase: 'Patent Filing & Research Inception',
    objective: 'Filed Indian Patent Application 202141014878 covering automated targeting, machine vision, and dual-axis mechanical drive.',
    verificationStatus: 'Completed'
  },
  {
    period: '2025 – 2026',
    phase: 'Company Incorporation & DPIIT Recognition',
    objective: 'Incorporated as HATAK R NON LETHAL SECURITY SOLUTIONS PVT LTD; awarded official DPIIT Startup Recognition (DIPP250915).',
    verificationStatus: 'Completed'
  },
  {
    period: 'Current (2026)',
    phase: 'Prototype Bench Verification',
    objective: 'Demonstrated working prototype with wall bracket mount, optical camera, dual-axis green mount, and yellow ECPU control enclosure.',
    verificationStatus: 'Completed'
  },
  {
    period: 'Next Phase',
    phase: 'Industrial Field Pilots & Certification',
    objective: 'Deploying controlled multi-node test arrays at certified partner facilities under supervision.',
    verificationStatus: 'In Progress'
  }
];

export const RECOGNITION_ITEMS = [
  {
    title: 'DPIIT Startup Recognition',
    category: 'Government of India Recognition',
    description: 'Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry under Certificate No: DIPP250915.',
    status: 'Certified Active (Valid thru 2035)'
  },
  {
    title: 'Indian Patent Application: 202141014878',
    category: 'Intellectual Property Filing',
    description: 'Patent filed covering Applied Mechanics, Machine Vision, and Automated Security Systems with dual-axis motorized targeting.',
    status: 'Patent Pending / Application Filed'
  },
  {
    title: 'Velammal Institute of Technology Incubation',
    category: 'Institutional Origin & Research Base',
    description: "Incubated with support from Velammal Institute of Technology, Chennai (Institution's Innovation Council, NBA & NAAC 'A' Grade accredited).",
    status: 'Academic & Research Partner'
  }
];
