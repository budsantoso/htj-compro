export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  features: string[];
  impact: string[];
  lessons: string[];
}

export const projects: Project[] = [
  {
    slug: "it-governance-audit-cobit2019",
    title: "COBIT 2019 & ITIL IT Governance Capability Assessment",
    category: "IT Governance & Audit",
    summary:
      "Assessed enterprise IT governance capability levels using the COBIT 2019 and ITIL frameworks, published in the accredited scientific journal G-Tech.",
    technologies: ["COBIT 2019", "ITIL", "Capability Level Audit", "Published Research", "SOP Mapping"],
    featured: true,
    githubUrl: "https://doi.org/10.33379/gtech.v7i4.3141",
    problem:
      "Enterprises often lack structured capability measurements across information technology processes, resulting in compliance gaps and unaligned IT investments.",
    solution:
      "Conducted a comprehensive audit utilizing COBIT 2019 and ITIL frameworks, defining targeted maturity levels, identifying control gaps, and providing actionable governance roadmaps.",
    architecture: [
      "Process Identification & Scope Definition using COBIT 2019 Design Guide",
      "Capability Level Measurement across targeted governance objectives",
      "Gap Analysis against desired baseline maturity",
      "Actionable recommendations prioritized by business impact and audit compliance",
    ],
    challenges: [
      "Translating abstract governance standards into practical institutional metrics",
      "Harmonizing ITIL service management workflows with COBIT governance controls",
      "Peer-reviewed academic publishing with rigorous methodological verification",
    ],
    features: [
      "Standardized governance evaluation scoring model",
      "Process domain capability mapping",
      "Gap mitigation priority matrix",
      "Published research paper in accredited national journal",
    ],
    impact: [
      "Successfully identified critical control areas for enterprise IT readiness",
      "Produced peer-reviewed scientific publication cited by industry researchers",
      "Created reusable audit blueprint for institutional governance benchmarking",
    ],
    lessons: [
      "Governance frameworks must adapt to business scale rather than being dogmatically imposed",
      "Stakeholder interviews reveal operational realities that documentation alone obscures",
    ],
  },
  {
    slug: "appsheet-it-ticketing-automation",
    title: "AppSheet Automated IT Ticketing & SLA Management",
    category: "Workflow Automation / Service Management",
    summary:
      "Designed and deployed an automated AppSheet ticketing platform achieving 90% SLA resolution across 500+ employees at PT Esensi Solusi Buana.",
    technologies: ["AppSheet", "Google Workspace", "Automation Bots", "SLA Tracking", "SOP Design"],
    featured: true,
    problem:
      "Employee technical requests were scattered across messaging apps without formal tracking, causing unresolved incidents, poor accountability, and no SLA metrics.",
    solution:
      "Architected a custom low-code AppSheet application integrated with Google Sheets/Workspace, featuring role-based dashboards, automated email notifications, and SLA calculation engines.",
    architecture: [
      "Mobile and web intake forms with dynamic categorization",
      "Automated assignment bots based on incident urgency and IT team schedules",
      "Real-time SLA calculation engine tracking resolution times",
      "Supervisory dashboard with live performance charts and audit logs",
    ],
    challenges: [
      "Driving user adoption among 500+ employees accustomed to informal chat requests",
      "Designing multi-tier escalation logic without requiring expensive SaaS licenses",
      "Handling edge-case reassignment while preserving accurate SLA timers",
    ],
    features: [
      "90% ticket resolution SLA tracking across all departments",
      "Automated status push alerts and email notifications",
      "Hardware and software issue classification with priority routing",
      "Centralized asset tagging tied to reported incidents",
    ],
    impact: [
      "Achieved 90% ticket resolution SLA for over 500 company employees",
      "Eliminated 100% of untracked technical complaints",
      "Reduced average incident resolution turnaround from days to hours",
    ],
    lessons: [
      "Intuitive low-code solutions often achieve faster adoption than complex enterprise suites",
      "Clear status visibility directly improves end-user satisfaction",
    ],
  },
  {
    slug: "bank-danamon-it-asset-lifecycle",
    title: "Banking IT Asset Governance & Auction Management",
    category: "Compliance & Asset Management",
    summary:
      "Orchestrated banking IT asset lifecycle, software license audits, and external auctions adhering to OJK and Bank Indonesia regulatory standards at PT Bank Danamon.",
    technologies: ["Fixed Asset System (FAS)", "JIRA", "OJK & BI Regulations", "License Compliance", "Audit Preparation"],
    featured: true,
    problem:
      "Banking environments require stringent asset tracking from procurement to disposal, where non-compliance with OJK/BI regulations risks severe regulatory penalties.",
    solution:
      "Standardized asset management policies, executed software license reconciliations, controlled inter-branch transfers, and supervised secure asset disposal auctions with comprehensive audit documentation.",
    architecture: [
      "FAS (Fixed Asset System) tracking physical and virtual assets",
      "JIRA Service Management for handling branch device requisition workflows",
      "Quarterly license compliance reconciliation engine",
      "Standardized documentation framework prepared for external regulatory audits",
    ],
    challenges: [
      "Reconciling multi-branch hardware across hundreds of banking locations nationwide",
      "Navigating stringent regulatory data-security requirements during physical asset disposal",
      "Ensuring zero unauthorized software licenses across production workstations",
    ],
    features: [
      "100% regulatory compliance with OJK and Bank Indonesia IT standards",
      "External auction workflow execution with complete chain-of-custody records",
      "Automated buffer stock monitoring for mission-critical branch continuity",
      "Comprehensive asset SOP and form standardization",
    ],
    impact: [
      "Zero audit findings during internal and external regulatory inspections",
      "Optimized IT capital expenditures through accurate device lifecycle tracking",
      "Protected bank from unauthorized software licensing legal liabilities",
    ],
    lessons: [
      "Chain-of-custody documentation is as vital as the physical asset itself in banking",
      "Proactive license compliance saves substantial organizational budget",
    ],
  },
  {
    slug: "enterprise-network-load-balancing",
    title: "Enterprise Dual-ISP Load Balancing & Firewall Security",
    category: "Infrastructure & Network Engineering",
    summary:
      "Engineered high-availability network routing, firewall filtering, and captive portal infrastructure using MikroTik and UniFi at PT Esensi Solusi Buana.",
    technologies: ["MikroTik RouterOS", "UniFi Controller", "Firewall Rules", "PCC Load Balancing", "Captive Portal"],
    featured: true,
    problem:
      "Single-ISP downtime frequently paralyzed enterprise operations, while unmanaged bandwidth allocation caused severe lag for business-critical SaaS tools.",
    solution:
      "Implemented Per Connection Classifier (PCC) dual-ISP load balancing (First Media & iForte), layered firewall security rules, and centralized wireless management via UniFi Controllers.",
    architecture: [
      "Dual WAN gateway with automatic failover and PCC load balancing",
      "Layer 7 protocol filtering and content blocking firewall rules",
      "VLAN segmentation separating guest, employee, and POS infrastructure",
      "UniFi controller managing high-density enterprise access points",
    ],
    challenges: [
      "Configuring seamless failover without dropping active banking and POS sessions",
      "Balancing bandwidth across 100+ concurrent devices during peak work hours",
      "Physical deployment and cable routing across multi-room office premises",
    ],
    features: [
      "Zero-downtime dual-WAN redundancy with automated failover",
      "Corporate captive portal with guest access duration policies",
      "Bandwidth shaping prioritizing business-critical cloud traffic",
      "Content-filtering firewall rules blocking unauthorized web domains",
    ],
    impact: [
      "Achieved 99.9% network availability across corporate headquarters",
      "Eliminated internet downtime disruptions for enterprise POS and office workflows",
      "Prevented security threats through robust perimeter firewall policies",
    ],
    lessons: [
      "Redundant ISP failover requires meticulous session-aware routing rules",
      "Network segmentation by role is the first line of defense in internal security",
    ],
  },
  {
    slug: "siloam-hospitals-sop-standardization",
    title: "Nationwide Healthcare IT Infrastructure SOP Standardization",
    category: "IT Operations & Governance",
    summary:
      "Created, standardized, and disseminated IT operational SOPs and workflow architectures across 43 Siloam Hospitals Group units in Indonesia.",
    technologies: ["MS Visio", "ISO 27001:2022", "Healthcare IT", "Process Modeling", "SOP Framework"],
    featured: true,
    problem:
      "Operating 43 hospital units nationwide created fragmented IT procedures, inconsistent resolution standards, and heightened audit vulnerability.",
    solution:
      "Developed comprehensive process workflows using MS Visio, standardized operational documentation across infrastructure teams, and supported nationwide adoption aligned with ISO 27001:2022.",
    architecture: [
      "Standardized Visio process flow diagrams for routine and emergency IT ops",
      "Document revision and approval lifecycle with hospital unit heads",
      "Centralized policy repository accessible to regional IT teams nationwide",
      "ISO 27001:2022 transition mapping across healthcare infrastructure",
    ],
    challenges: [
      "Harmonizing disparate practices across 43 regional hospital teams",
      "Aligning healthcare clinical requirements with stringent IT security protocols",
      "Maintaining up-to-date documentation during rapid digital transformations",
    ],
    features: [
      "Standardized documentation covering 43 hospital branches nationwide",
      "Cyber Security Champion 2024 participation and training dissemination",
      "Process visualization simplifying complex technical procedures for field staff",
      "Audit-ready documentation for institutional accreditation reviews",
    ],
    impact: [
      "Established uniform IT operational standards across Indonesia's largest hospital network",
      "Accelerated onboarding and cross-branch IT personnel collaboration",
      "Supported successful ISO 27001:2022 audit transition",
    ],
    lessons: [
      "Standard operating procedures succeed only when field engineers find them clear and useful",
      "Visual flowcharts dramatically reduce procedural human errors",
    ],
  },
];
