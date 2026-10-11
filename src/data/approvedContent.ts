/**
 * HATAK R™ — Official Factual Registry & Verified Corporate Disclosures
 * 
 * Company: HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED
 * DPIIT Certificate: DIPP250915
 * Patent Application: 202141014878 (Patent Pending / Application Filed)
 */

export type CapabilityStatus = 'Demonstrated' | 'In Development' | 'Planned' | 'Validated';

export interface CapabilityItem {
  id: string;
  slug: string;
  title: string;
  group: 'vision' | 'embedded-control' | 'mechanical-systems' | 'monitoring';
  groupTitle: string;
  status: CapabilityStatus;
  whatItDoes: string;
  whyItMatters: string;
  subsystemComponents: string[];
  limitations: string;
  verificationEvidence?: string;
}

export interface IndustrySector {
  id: string;
  slug: string;
  title: string;
  category: string;
  operationalChallenge: string;
  relevantCapability: string;
  environmentFit: string;
  expectedLimitations: string;
  status: string;
}

export interface MilestoneItem {
  period: string;
  phase: string;
  objective: string;
  verificationStatus: 'Completed' | 'In Progress' | 'Roadmap';
}

export const COMPANY_METADATA = {
  name: 'Hatak R™',
  legalEntity: 'HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED',
  incorporationDate: '05-06-2025',
  tagline: 'Intelligent Security. Engineered for Real-World Environments.',
  supportingText: 'Hatak R brings together machine vision, embedded control and coordinated monitoring to support more informed security operations.',
  productConcept: 'DETECT → DECIDE → DEFEND',
  corePhilosophy: 'Engineering precision non-lethal perimeter defense through multi-camera edge machine vision, dual-motor positioning, and dedicated electronic control units with mandatory human authorization.',
  academicAffiliation: {
    institution: 'Velammal Institute of Technology',
    location: 'Chennai - Kolkata Highway, Panchetti, Ponneri - 601 204, Tamil Nadu, India',
    accreditation: "Institution's Innovation Council (IIC) | NBA & NAAC 'A' Grade",
  },
  dpiitRecognition: {
    certificateNo: 'DIPP250915',
    issueDate: '19-03-2026',
    validUpto: '04-06-2035',
    ministry: 'Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry, Government of India',
    industry: 'Security Solutions / Home Security Solutions',
  },
  ipStatus: {
    patentNumber: '202141014878',
    statusText: 'Patent Application Filed (Pending Statutory Examination)',
    patentDescription: 'Indian Patent Application filed for automated motorized tracking, CNN-based classification, and non-lethal security targeting mechanism.',
    patentNotice: 'Patent Application No: 202141014878 (Patent Pending). Reference to patent applications does not constitute a granted patent.',
    regulatoryNotice: 'All response workflows require explicit human operator authorization. Hatak R™ does not support or deploy unauthorized autonomous physical force.',
  },
  commercialEngagement: {
    pilotAccess: 'Selective pilot program for qualified industrial perimeters and test facility hosts.',
    pricingNotice: 'Commercial pricing and pilot deployment scopes are provided on formal technical evaluation.',
    model: 'Hardware Sales + Embedded Software Licensing + Maintenance & Integration Agreements',
  },
  contactCoordinates: {
    email: 'contact@hatak-r.com',
    technicalDesk: 'engineering@hatak-r.com',
    location: 'Chennai, Tamil Nadu, India',
  }
};

/**
 * Single source of truth for public leadership:
 * EXCLUSIVELY the Founder. No co-founder, no team members, no student profiles.
 */
export const FOUNDER = {
  name: 'Dr. R. Partheepan',
  role: 'Founder & Director',
  affiliation: 'Velammal Institute of Technology',
  biography: 'Dr. R. Partheepan is the Founder and Director of HATAK R NON LETHAL SECURITY SOLUTIONS PRIVATE LIMITED. Leading strategic research and intellectual property development, his work focuses on applied mechanics, mechatronic positioning systems, and automated perimeter security architectures.',
  academicBackground: 'Faculty and researcher at Velammal Institute of Technology with extensive domain expertise in applied mechanics, structural kinematics, and institutional technology transfer.'
};

/**
 * 4 Solutions Groups with comprehensive structured data:
 * A. Machine Vision
 * B. Embedded Control
 * C. Mechanical Systems
 * D. Centralized Monitoring
 */
export const SOLUTION_GROUPS = [
  {
    slug: 'vision',
    title: 'Machine Vision',
    subtitle: 'Edge-based optical sensing and convolutional classification',
    summary: 'Localized image processing pipelines that ingest multi-camera perimeter feeds, isolate human intrusion vectors, and eliminate environmental noise.',
    whatItDoes: 'Ingests RTSP/ONVIF optical camera video streams directly at the edge node, applying optimized convolutional neural networks to classify human targets and calculate spatial azimuth/elevation vector coordinates.',
    whyItMatters: 'Standard outdoor motion sensors and dumb CCTV generate unacceptable rates of false alarms from windblown foliage, shadows, and wildlife. Edge neural inference delivers deterministic target isolation within milliseconds.',
    subsystemComponents: [
      'Multi-camera RTSP/ONVIF frame acquisition engine',
      'Frame normalization and spatial resolution preprocessor',
      'Edge convolutional neural network (CNN) classifier',
      'Centroid vector calculation and target trajectory estimator'
    ],
    status: 'Demonstrated' as CapabilityStatus,
    limitations: 'Performance is dependent on optical camera resolution, lens cleanliness, and minimum ambient lux. Low-light operations require supplemental infrared illumination or dual-spectrum thermal sensors.'
  },
  {
    slug: 'embedded-control',
    title: 'Embedded Control',
    subtitle: 'Electronic Control Unit (ECU) and power management',
    summary: 'Dedicated embedded microcontroller architecture coordinating sensor ingress, motor trajectory calculation, and hardware-level safety interlocks.',
    whatItDoes: 'Houses the primary electronic control unit (ECU), manages low-noise power distribution to stepper motor drivers, processes optical encoder feedback, and enforces hardware watchdog timers.',
    whyItMatters: 'Ensures deterministic real-time responsiveness without operating-system latency spikes. Isolated power rails protect sensitive digital microcontrollers from motor inductive back-EMF.',
    subsystemComponents: [
      'Industrial microcontroller logic board with hardware watchdogs',
      'Precision micro-stepping motor drivers with thermal cutoffs',
      'Isolated surge-protected power regulation subsystem',
      'Hardware safety relay disconnect circuitry'
    ],
    status: 'Demonstrated' as CapabilityStatus,
    limitations: 'Requires steady 12V/24V DC regulated input power or dedicated battery backup during perimeter grid interruptions.'
  },
  {
    slug: 'mechanical-systems',
    title: 'Mechanical Systems',
    subtitle: 'Precision dual-axis pan and tilt kinematic mount',
    summary: 'Ruggedized electromechanical platform providing continuous 360° horizontal azimuth rotation and vertical elevation slewing.',
    whatItDoes: 'Physically translates target spatial coordinates into locked mechanical orientation using dual high-torque stepper actuators, reduction gearing, and continuous slip-ring assemblies.',
    whyItMatters: 'Enables a single sensor node to actively cover expansive boundary lines without blind spots caused by static fixed-lens cameras.',
    subsystemComponents: [
      'High-torque micro-stepping azimuth drive (360° continuous rotation)',
      'Precision elevation drive with hard stop limit switches',
      'Continuous slip-ring assembly preventing cable fatigue',
      'Industrial wall/mast mounting bracket with vibration damping'
    ],
    status: 'Demonstrated' as CapabilityStatus,
    limitations: 'Subject to mechanical wear and environmental dust intrusion; requires periodic lubricant inspection and protective IP66 sealing for desert or marine deployments.'
  },
  {
    slug: 'monitoring',
    title: 'Centralized Monitoring',
    subtitle: 'Telemetry event bus, human review, and VMS integration',
    summary: 'Coordinated telemetry distribution connecting distributed perimeter nodes to central security operations consoles and commercial VMS platforms.',
    whatItDoes: 'Broadcasts structured JSON telemetry events, alert metadata overlays, and live target tracking streams to security monitoring staff for mandatory human verification.',
    whyItMatters: 'Bridges raw edge sensor detections with accountable human operational decisions, creating an immutable audit trail and preventing unauthorized autonomous actuation.',
    subsystemComponents: [
      'Low-latency WebSocket / REST telemetry event bus',
      'Standard ONVIF video stream rebroadcast with metadata overlays',
      'Operator review interface with target priority queuing',
      'Cryptographically signed incident audit logging'
    ],
    status: 'In Development' as CapabilityStatus,
    limitations: 'Requires local Ethernet or dedicated point-to-point wireless LAN connectivity between perimeter nodes and the monitoring facility.'
  }
];

export const CAPABILITIES: CapabilityItem[] = SOLUTION_GROUPS.map((g) => ({
  id: g.slug,
  slug: g.slug,
  title: g.title,
  group: g.slug as CapabilityItem['group'],
  groupTitle: g.title,
  status: g.status,
  whatItDoes: g.whatItDoes,
  whyItMatters: g.whyItMatters,
  subsystemComponents: g.subsystemComponents,
  limitations: g.limitations,
  verificationEvidence: 'Demonstrated on physical prototype bench model.'
}));

/**
 * Problem-centered Industries Data
 */
export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'industrial-facilities',
    slug: 'industrial-facilities',
    title: 'Industrial Facilities & Manufacturing',
    category: 'Heavy Industry & Manufacturing',
    operationalChallenge: 'Expansive factory boundaries with raw material storage yards vulnerable to undetected intrusions during unstaffed night shifts and delayed mobile guard patrols.',
    relevantCapability: 'Continuous 360° perimeter monitoring with edge CNN classification that isolates human targets while filtering out moving conveyor machinery and foliage.',
    environmentFit: 'Wall-mounted and mast-mounted nodes overlooking exterior perimeter fences and equipment yards.',
    expectedLimitations: 'Vibrations from heavy industrial stamping presses require rigid structural bracket damping.',
    status: 'Target for Initial Field Pilot'
  },
  {
    id: 'warehousing',
    slug: 'warehousing',
    title: 'Warehouses & Logistics Hubs',
    category: 'Supply Chain & Logistics',
    operationalChallenge: 'High-value distribution centers and outdoor shipping container storage yards prone to theft and perimeter fence breaches in blind spots.',
    relevantCapability: 'Dual-axis pan/tilt tracking that slews directly to fence proximity breaches and feeds verified coordinate alerts to central dispatch.',
    environmentFit: 'Corner-mounted building arrays covering loading bays and exterior perimeter corridors.',
    expectedLimitations: 'Stacking of shipping containers may alter optical sightlines, requiring elevated mast placement.',
    status: 'Target for Pilot Phase II'
  },
  {
    id: 'controlled-access',
    slug: 'controlled-access',
    title: 'Controlled-Access Premises & Critical Infrastructure',
    category: 'Critical Infrastructure & Utilities',
    operationalChallenge: 'Unmanned utility substations, telecommunications towers, and research enclosures situated in remote unpopulated zones vulnerable to sabotage.',
    relevantCapability: 'Standalone edge vision units transmitting encrypted intrusion events to regional security operations centers with tamper-evident audit logs.',
    environmentFit: 'Perimeter fence lines of unmanned utility substations and secure compound gates.',
    expectedLimitations: 'Requires robust auxiliary battery backups or solar power packs in off-grid utility sites.',
    status: 'Concept Evaluation'
  },
  {
    id: 'private-acreage',
    slug: 'private-acreage',
    title: 'Private Acreage & Agricultural Estates',
    category: 'Private Properties & Acreage',
    operationalChallenge: 'Expansive acreage where manual patrols are cost-prohibitive and standard motion sensors produce constant false alarms from wildlife and livestock.',
    relevantCapability: 'Neural classification tuned to ignore grazing animals while triggering verified alerts exclusively on unauthorized human approaches.',
    environmentFit: 'Boundary fencing and entry lane perimeters of private estates.',
    expectedLimitations: 'Dense tree canopies may obstruct line of sight, requiring strategic positioning at clear approach corridors.',
    status: 'Field Pilot Candidate'
  }
];

export const ROADMAP_MILESTONES: MilestoneItem[] = [
  {
    period: '2021 – 2024',
    phase: 'Patent Filing & Research Inception',
    objective: 'Filed Indian Patent Application 202141014878 covering automated tracking, machine vision, and dual-axis mechanical mount. Application pending statutory review.',
    verificationStatus: 'Completed'
  },
  {
    period: '2025 – 2026',
    phase: 'Company Incorporation & DPIIT Recognition',
    objective: 'Incorporated as HATAK R NON LETHAL SECURITY SOLUTIONS PVT LTD; awarded official DPIIT Startup Recognition Certificate DIPP250915.',
    verificationStatus: 'Completed'
  },
  {
    period: 'Current (2026)',
    phase: 'Prototype Bench Verification',
    objective: 'Demonstrated working prototype with wall mounting bracket, optical camera, dual-axis motorized mount, and dedicated ECU control enclosure.',
    verificationStatus: 'Completed'
  },
  {
    period: 'Next Phase',
    phase: 'Industrial Field Pilots & Partner Evaluation',
    objective: 'Deploying controlled single- and multi-node test arrays at certified partner facilities under supervised pilot evaluation agreements.',
    verificationStatus: 'In Progress'
  }
];

export const RECOGNITION_ITEMS = [
  {
    title: 'DPIIT Startup Recognition',
    category: 'Government Recognition',
    description: 'Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry under Certificate No: DIPP250915.',
    status: 'Certified Active (Valid thru 2035)'
  },
  {
    title: 'Indian Patent Application: 202141014878',
    category: 'Intellectual Property Filing',
    description: 'Patent application filed covering Applied Mechanics, Machine Vision, and Automated Security Systems with dual-axis motorized targeting. Application pending statutory review.',
    status: 'Patent Application Pending'
  },
  {
    title: 'Velammal Institute of Technology Incubation',
    category: 'Institutional Collaboration',
    description: "Incubated with research and institutional support from Velammal Institute of Technology, Chennai (Institution's Innovation Council, NBA & NAAC 'A' Grade accredited).",
    status: 'Academic & Research Base'
  }
];

/**
 * Documented Testing & Validation Table for Technology Page
 */
export interface ValidationRecord {
  feature: string;
  testMethod: string;
  testEnvironment: string;
  result: string;
  date: string;
  status: CapabilityStatus;
}

export const VALIDATION_RECORDS: ValidationRecord[] = [
  {
    feature: 'Dual-Axis Continuous Rotation',
    testMethod: '500 continuous 360° pan and 90° tilt slewing cycles under bench power',
    testEnvironment: 'Hardware Mechatronics Lab',
    result: 'Zero slip-ring cable binding; motor step loss within 0.2° mechanical tolerance',
    date: 'February 2026',
    status: 'Demonstrated'
  },
  {
    feature: 'Edge Optical Ingress',
    testMethod: 'RTSP 1080p stream ingestion across continuous 48-hour soak test',
    testEnvironment: 'Embedded Bench Test Harness',
    result: 'Stable frame decoding without memory leakage or buffer overflow',
    date: 'January 2026',
    status: 'Demonstrated'
  },
  {
    feature: 'Human vs. Foliage Classification',
    testMethod: 'Static video sequence playback with moving branches, rain clutter, and human approach',
    testEnvironment: 'Computer Vision Benchmark Rig',
    result: 'Reliable person profile isolation; eliminated wind-induced false trigger sequences',
    date: 'March 2026',
    status: 'Demonstrated'
  },
  {
    feature: 'Watchdog Failsafe Interlock',
    testMethod: 'Simulated microcontroller communications timeout and motor stall condition',
    testEnvironment: 'Electronic Safety Rig',
    result: 'Automatic hardware relay disconnect within 100ms; motor drive power dropped safely',
    date: 'March 2026',
    status: 'Validated'
  },
  {
    feature: 'Outdoor False Alarm Rate (FAR)',
    testMethod: 'Supervised 30-day perimeter fence line deployment across weather cycles',
    testEnvironment: 'Industrial Partner Pilot Site',
    result: 'Scheduled for upcoming supervised field evaluation',
    date: 'Target Q3 2026',
    status: 'In Development'
  }
];
