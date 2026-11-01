export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Universitas Pelita Harapan (UPH)",
    role: "IT Governance, Risk & Compliance",
    period: "May 2026 – Present",
    description:
      "Formulating IT strategic roadmap and leading the implementation of institutional IT governance frameworks (COBIT 2019, ITIL, ISO 27001) to ensure high audit readiness and risk mitigation across academic operations.",
    achievements: [
      "Formulated IT strategic roadmaps aligning technology initiatives with institutional goals, reducing project delays",
      "Led institutional implementation of IT governance frameworks (COBIT 2019, ITIL, ISO 27001) enhancing audit readiness",
      "Identified and mitigated IT risks across data security, system availability, and third-party vendor domains",
      "Executed periodic IT audits, accreditation evaluations, and service performance reviews with actionable enhancements",
      "Evaluated IT risk levels for incidents and requests logged in ManageEngine to set mitigation priorities",
      "Updated comprehensive IT documentation (SOPs, policies, and operational procedures) aligned with active systems",
    ],
    technologies: [
      "COBIT 2019",
      "ITIL",
      "ISO 27001:2022",
      "IT Risk Management",
      "ManageEngine",
      "IT Auditing",
      "Policy & SOP Formulation",
    ],
  },
  {
    company: "PT Bank Danamon Indonesia, Tbk",
    role: "IT Asset Management",
    period: "January 2026 – May 2026",
    description:
      "Controlled end-to-end IT asset lifecycle, software license compliance, and auction procedures in strict adherence to banking regulatory standards (OJK & Bank Indonesia).",
    achievements: [
      "Monitored end-to-end IT asset lifecycle (procurement, distribution, to secure disposal) using FAS system",
      "Ensured full compliance with OJK and Bank Indonesia regulations for hardware and software assets during audits",
      "Managed software license compliance to eliminate illegal usage and optimize operational cost efficiency",
      "Analyzed and troubleshot asset-related issues logged via JIRA ticketing system, adhering strictly to SLA",
      "Developed and optimized Asset Management Policies, SOPs, and forms for banking governance",
      "Coordinated external asset auction execution and maintained inventory buffer stock for business continuity",
    ],
    technologies: [
      "FAS (Fixed Asset System)",
      "JIRA Ticketing",
      "OJK/BI Regulatory Compliance",
      "License Management",
      "Asset Lifecycle",
      "IT Budgeting",
    ],
  },
  {
    company: "PT Esensi Solusi Buana (ESB)",
    role: "IT Infrastructure Analyst",
    period: "April 2025 – October 2025",
    description:
      "Engineered network infrastructure, firewall security policies, and developed automated workflow tools that significantly boosted operational service level agreements.",
    achievements: [
      "Developed and implemented AppSheet-based ticketing system, attaining 90% SLA resolution for 500+ employees",
      "Configured MikroTik firewall filtering rules and dual-ISP internet load balancing (First Media & iForte)",
      "Created enterprise captive portal and configured bandwidth management with UniFi Controllers and MikroTik",
      "Provided first-line technical support across POS, Kiosks, CCTV, laptops, Windows, macOS, and network hardware",
      "Audited IT work device assets across company branches, reducing redundant costs and optimizing device utilization",
    ],
    technologies: [
      "MikroTik",
      "UniFi Controller",
      "Firewall Filtering",
      "Load Balancing",
      "AppSheet Automation",
      "Network Routing",
      "Google Workspace & M365",
    ],
  },
  {
    company: "PT Siloam International Hospitals Tbk",
    role: "IT Operations & Admin Staff",
    period: "April 2024 – April 2025",
    description:
      "Maintained nationwide IT standard operating procedures, documentation workflows, and regional support across 43 hospital business units in Indonesia.",
    achievements: [
      "Created and updated IT Infrastructure SOPs and process workflows using MS Visio and Office suite",
      "Disseminated policies and SOPs across 43 Siloam Hospitals Group units nationwide to ensure standardized ops",
      "Coordinated data requests and document revisions with Regional IT leadership and Operations Department Head",
      "Participated actively in the SHG Cyber Security Champion Program and ISO 27001:2022 transition initiatives",
    ],
    technologies: [
      "MS Visio & Office 365",
      "SOP & Workflow Design",
      "Healthcare IT Operations",
      "ISO 27001:2022",
      "Regional IT Support",
    ],
  },
];
