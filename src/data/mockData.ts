export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  gradient: string;
  deliverables: string[];
  capabilities: { title: string; desc: string }[];
  impactMetric: { value: string; label: string };
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  keyDrivers: string[];
  focusAreas: string[];
  caseHighlight: {
    clientType: string;
    challenge: string;
    outcome: string;
  };
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: 'Strategy' | 'Tax & Legal' | 'Finance' | 'Technology' | 'Governance';
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  featured?: boolean;
}

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  practice: string;
  bio: string;
  education: string[];
  specialties: string[];
  quote: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  overview: string;
  requirements: string[];
  responsibilities: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  sector: string;
  metric: string;
}

export const FIRM_DETAILS = {
  name: "Apex Advisory LLP",
  tagline: "Accounting, tax and business advisory · preview copy",
  foundedYear: "To be confirmed",
  globalPresence: "Location to be confirmed",
  phone: "Telephone to be confirmed",
  email: "parv.sharmaa@outlook.com",
  hqAddress: "Business address to be confirmed",
  registeredLLPNumber: "Registration details to be confirmed",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "accounting-bookkeeping", slug: "accounting-bookkeeping", title: "Accounting and Bookkeeping",
    eyebrow: "Financial records", tagline: "Clear, organised financial information for day-to-day decisions.",
    description: "Potential support may include bookkeeping, reconciliations and management reporting, subject to the firm's verified scope.",
    longDescription: "This draft service description outlines accounting and bookkeeping support as a proposed area. Confirm the services actually offered, applicable standards, deliverables and any required professional qualifications before publication.",
    iconName: "Briefcase", gradient: "from-blue-600 to-indigo-700", impactMetric: { value: "", label: "" },
    deliverables: ["Bookkeeping and transaction records", "Bank and account reconciliations", "Periodic management reports", "Year-end records preparation"],
    capabilities: [
      { title: "Bookkeeping", desc: "Recording and organising business transactions using agreed processes." },
      { title: "Reconciliations", desc: "Comparing account records with supporting statements and identifying differences." },
      { title: "Reporting", desc: "Preparing agreed periodic summaries to support business oversight." },
    ]
  },
  {
    id: "tax-gst", slug: "tax-gst", title: "Tax and GST Assistance",
    eyebrow: "Tax support", tagline: "Structured support for tax records and filing workflows.",
    description: "Potential assistance with tax and GST records, return preparation or compliance coordination, within verified professional scope.",
    longDescription: "Tax and GST requirements depend on the facts, location and current rules. Confirm the firm's authority and scope for each service, and have tax content checked against current official guidance before launch.",
    iconName: "ShieldCheck", gradient: "from-emerald-600 to-teal-800", impactMetric: { value: "", label: "" },
    deliverables: ["Tax record organisation", "GST transaction summaries", "Filing calendar coordination", "Preparation support within agreed scope"],
    capabilities: [
      { title: "Records and reconciliations", desc: "Organising source records and reconciling relevant tax or GST information." },
      { title: "Compliance coordination", desc: "Helping clients track deadlines and prepare information for applicable filings." },
      { title: "Tax discussions", desc: "Discussing questions based on reviewed facts and the professional's confirmed scope." },
    ]
  },
  {
    id: "business-advisory", slug: "business-advisory", title: "Business Advisory",
    eyebrow: "Business decisions", tagline: "Practical financial insight for planning and operations.",
    description: "Potential support may include budgeting, cash-flow visibility and management reporting for small and growing businesses.",
    longDescription: "This proposed advisory scope focuses on helping owners understand financial information and plan ahead. Confirm services, methods and any limits before describing them as an offering.",
    iconName: "TrendingUp", gradient: "from-sky-500 to-blue-700", impactMetric: { value: "", label: "" },
    deliverables: ["Budget and forecast preparation", "Cash-flow visibility", "Management reporting", "Business planning discussions"],
    capabilities: [
      { title: "Planning", desc: "Building budgets and forecasts based on client-provided assumptions." },
      { title: "Cash flow", desc: "Making expected inflows, outflows and timing easier to review." },
      { title: "Performance reporting", desc: "Summarising agreed indicators to help owners assess business performance." },
    ]
  },
  {
    id: "llp-compliance", slug: "llp-compliance", title: "LLP Compliance Support",
    eyebrow: "Entity administration", tagline: "Organised records and deadline support for LLPs.",
    description: "Potential administrative support for LLP records and filing preparation, subject to confirmation of the firm's role and applicable requirements.",
    longDescription: "LLP obligations depend on the entity's facts and current Indian requirements. Confirm what the firm may perform, who is responsible for filings, and the relevant review process before launch.",
    iconName: "Landmark", gradient: "from-violet-600 to-purple-800", impactMetric: { value: "", label: "" },
    deliverables: ["Compliance calendar coordination", "Record and document organisation", "Filing information preparation", "Deadline reminders and follow-up"],
    capabilities: [
      { title: "Compliance calendar", desc: "Tracking agreed recurring dates and information requirements." },
      { title: "Records organisation", desc: "Maintaining a practical structure for entity documents and supporting records." },
      { title: "Filing coordination", desc: "Preparing information or coordinating with the appropriately authorised professional." },
    ]
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "technology",
    slug: "technology",
    title: "Technology & Software",
    eyebrow: "High-Growth Scale",
    summary: "Guiding SaaS pioneers, semiconductor innovators, and digital platforms through hyper-scale unit economics, capitalization rounds, and recurring revenue optimization.",
    keyDrivers: ["Net Dollar Retention (NDR) engineering", "Cross-border IP tax shielding", "AI regulatory compliance"],
    focusAreas: ["SaaS Unit Economics Auditing", "R&D Tax Incentive Captures", "IP Transfer Pricing Protocols"],
    caseHighlight: {
      clientType: "Enterprise Cloud Software Provider ($180M ARR)",
      challenge: "High churn in mid-market tier and complex European multi-entity tax exposure.",
      outcome: "Restructured customer success delivery and optimized Dublin holding structure, lifting EBITDA by $14.2M annually."
    }
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    eyebrow: "Regulated Impact",
    summary: "Advising hospital networks, medical device manufacturers, and biopharma ventures on clinical risk compliance, M&A integrations, and reimbursement strategies.",
    keyDrivers: ["FDA/EMA compliance burdens", "Value-based care economics", "Clinical data security"],
    focusAreas: ["Provider Network M&A Valuation", "Clinical Supply Chain Redundancy", "HIPAA & Patient Data Protection"],
    caseHighlight: {
      clientType: "Regional Diagnostic Laboratories Network",
      challenge: "Fragmented revenue cycle management across 24 acquired clinic locations.",
      outcome: "Centralized financial operations and reduced claims denial rate from 18% to 2.4% within 9 months."
    }
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Advanced Manufacturing",
    eyebrow: "Industrial Excellence",
    summary: "Engineering supply chain resilience, nearshoring capital deployment, and Industry 4.0 automation for precision equipment and industrial goods manufacturers.",
    keyDrivers: ["Supply chain geopolitical friction", "Automated production yields", "Carbon border tax (CBAM)"],
    focusAreas: ["Nearshoring Facility ROI Feasibility", "Inventory Working Capital Rationalization", "Factory IoT Analytics Integration"],
    caseHighlight: {
      clientType: "Precision Automotive Component Manufacturer",
      challenge: "Vulnerability to overseas raw material supply shocks causing frequent assembly downtime.",
      outcome: "Constructed dual-region supplier model releasing $38M in buffer stock while maintaining 99.8% on-time fulfillment."
    }
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail & Consumer Goods",
    eyebrow: "Omnichannel Commerce",
    summary: "Empowering consumer brands to navigate omnichannel fulfillment, direct-to-consumer margin retention, and dynamic predictive demand planning.",
    keyDrivers: ["Margin squeeze from digital advertising", "Omnichannel returns friction", "Consumer loyalty erosion"],
    focusAreas: ["Direct-to-Consumer Unit Economics", "Distribution Logistics Optimization", "Private Label Margin Strategies"],
    caseHighlight: {
      clientType: "Global Apparel & Lifestyle Brand",
      challenge: "High return rates and bloated regional warehouse inventory holding costs.",
      outcome: "Implemented AI-driven demand forecasting and regional micro-fulfillment, boosting operating margins by 320 bps."
    }
  },
  {
    id: "financial-services",
    slug: "financial-services",
    title: "Financial Services & FinTech",
    eyebrow: "Institutional Integrity",
    summary: "Strategic counsel for retail banks, asset managers, payment gateways, and insurance carriers on prudential capital mandates and digital disruption.",
    keyDrivers: ["Basel IV capital buffers", "Real-time payment rails", "Non-bank fintech competition"],
    focusAreas: ["Prudential Capital Adequacy Modeling", "DORA Operational Resilience Audits", "Payment Rails Commercialization"],
    caseHighlight: {
      clientType: "Licensed European Commercial Challenger Bank",
      challenge: "Preparing for comprehensive central bank capital stress test under rising interest rate scenario.",
      outcome: "Validated credit loss reserves and secured full regulatory capital approval with zero supervisory penalties."
    }
  },
  {
    id: "startups",
    slug: "startups",
    title: "Startups & Emerging Ventures",
    eyebrow: "Velocity & Governance",
    summary: "Providing Series A-to-pre-IPO ventures with institutional-grade financial modeling, board governance, cap-table defense, and M&A exit readiness.",
    keyDrivers: ["Runway preservation", "Institutional cap-table hygiene", "Founders' strategic governance"],
    focusAreas: ["Series B/C Data Room Preparation", "409A Fair Market Valuations", "Fractional CFO & Controller Systems"],
    caseHighlight: {
      clientType: "B2B Supply Chain AI Platform (Series B)",
      challenge: "Lacked audited historical financials and clear cohort analysis ahead of a $45M growth round.",
      outcome: "Instituted GAAP-compliant revenue recognition and cohort modeling, closing the financing round at top-quartile valuation."
    }
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "macro-strategy-2026",
    slug: "macro-strategy-2026",
    title: "Navigating Cross-Border M&A in Fractured Macro Environments",
    category: "Strategy",
    author: {
      name: "Marcus Sterling",
      role: "Senior Partner, Corporate Strategy",
      avatarInitials: "MS"
    },
    date: "October 20, 2026",
    readTime: "7 min read",
    featured: true,
    excerpt: "Why programmatic acquisitions outperform mega-deals during periods of persistent rate volatility and geopolitical realignment.",
    content: [
      "In corporate acquisitions, historical playbook dogma often proves hazardous during macro regime shifts. In 2026, corporate boards face a convergence of debt market discipline, scrutinized regulatory clearances, and localized trade friction.",
      "Our multi-decade transaction analysis demonstrates that programmatic acquirers—firms executing 3 to 6 targeted acquisitions per year rather than single mega-mergers—generate 2.4x higher total shareholder returns with 60% lower post-merger integration failure rates.",
      "Success requires constructing unassailable pre-close synergy scorecards, rigorous working capital carve-out adjustments, and early cultural alignment among regional executive leaders."
    ],
    keyTakeaways: [
      "Smaller programmatic acquisitions insulate balance sheets from liquidity stress.",
      "Clear EBITDA walk-downs must be signed off by operating leaders before binding bids.",
      "Regulatory antitrust filings should be prepared 6 months prior to transaction announcement."
    ]
  },
  {
    id: "ai-governance-regulated-firms",
    slug: "ai-governance-regulated-firms",
    title: "The AI Governance Imperative: Board Oversight in Regulated Sectors",
    category: "Governance",
    author: {
      name: "Julian Vance",
      role: "Partner, Risk & Regulatory Advisory",
      avatarInitials: "JV"
    },
    date: "October 14, 2026",
    readTime: "6 min read",
    featured: true,
    excerpt: "Establishing fiduciary AI guardrails: from algorithmic auditability to liability mitigation under emergent statutory directives.",
    content: [
      "Enterprise adoption of generative AI and autonomous decision models has transitioned from exploratory pilots to mission-critical infrastructure. Yet, regulatory authorities in North America and Europe are holding boards directly liable for algorithmic bias and hallucinations.",
      "A defensible AI governance framework requires three pillars: deterministic model registries with cryptographic lineage, rigorous human-in-the-loop overrides for fiduciary decisions, and continuous validation against drift.",
      "Firms that institute structured AI risk taxonomies today will move significantly faster than cautious peers who stall innovation out of uncalibrated compliance terror."
    ],
    keyTakeaways: [
      "Board audit committees must maintain a centralized inventory of high-impact automated models.",
      "Training data provenance must be documented to defend against copyright and privacy claims.",
      "Continuous stress testing prevents systemic hallucinations in automated financial calculations."
    ]
  },
  {
    id: "pillar-two-beps-roadmap",
    slug: "pillar-two-beps-roadmap",
    title: "OECD Pillar Two Implementation: Tactical Guide for Multinationals",
    category: "Tax & Legal",
    author: {
      name: "Priya Sundaram",
      role: "Partner, Tax & International Structuring",
      avatarInitials: "PS"
    },
    date: "September 28, 2026",
    readTime: "8 min read",
    featured: false,
    excerpt: "Demystifying GloBE rules, Qualified Domestic Minimum Top-Up Taxes (QDMTT), and systemic data readiness for multinational groups.",
    content: [
      "The Global Anti-Base Erosion (GloBE) rules under OECD Pillar Two represent the most comprehensive overhaul of international taxation in a century. For multinational enterprises with revenues exceeding €750M, calculating the effective tax rate (ETR) on a jurisdictional basis requires data points often absent from standard ERP charts of accounts.",
      "Our practice has assisted over 40 global conglomerates in auditing their deferred tax accounting, identifying eligible transitional safe harbors, and automating transitional GloBE reporting calculations.",
      "Waiting until annual financial close to calculate Top-Up Tax liabilities guarantees material audit adjustments and reputational fallout with institutional shareholders."
    ],
    keyTakeaways: [
      "Safe harbor testing must be completed at least two quarters prior to tax filing deadlines.",
      "ERP systems must be reconfigured to track jurisdictional substance-based income exclusions.",
      "Holding company jurisdictions with nominal corporate rates require immediate economic substance restructuring."
    ]
  },
  {
    id: "capital-stack-restructuring",
    slug: "capital-stack-restructuring",
    title: "Capital Stack Restructuring: Protecting Equity in Higher-Rate Regimes",
    category: "Finance",
    author: {
      name: "Sarah Jenkins",
      role: "Partner, Financial Consulting",
      avatarInitials: "SJ"
    },
    date: "September 18, 2026",
    readTime: "5 min read",
    featured: false,
    excerpt: "How mid-market enterprises can preempt covenant breaches through proactive debt recapitalizations and synthetic preferred equity.",
    content: [
      "As legacy 2020-2021 ultra-low fixed loans mature into prevailing debt markets, CFOs are confronted with debt service coverage ratios (DSCR) that test bank covenants. The instinct to delay refinancing until the eleventh hour frequently destroys enterprise value.",
      "We counsel clients to explore structured liquidity solutions—such as asset-backed receivables financing, sale-leaseback transactions, and structured minority equity—to deleverage balance sheets ahead of syndication deadlines.",
      "A proactive turnaround presentation to your lending syndicate demonstrates managerial competence and preserves sponsor equity optionality."
    ],
    keyTakeaways: [
      "Begin lender covenant negotiations at least 12 months before anticipated debt maturity.",
      "Evaluate non-dilutive liquidity sources before consenting to punitive debt-to-equity swaps.",
      "Maintain 13-week rolling cash flow forecasts that incorporate worst-case customer delays."
    ]
  },
  {
    id: "digital-operational-resilience-dora",
    slug: "digital-operational-resilience-dora",
    title: "Operational Resilience in Banking: Surviving Zero-Day Systemic Crises",
    category: "Technology",
    author: {
      name: "David Chen",
      role: "Partner, Digital Transformation",
      avatarInitials: "DC"
    },
    date: "August 30, 2026",
    readTime: "6 min read",
    featured: false,
    excerpt: "Why legacy disaster recovery plans fail against modern distributed cyber threats, and how to construct immutable operating failovers.",
    content: [
      "Disaster recovery tests that rely on pre-scheduled weekend drills bear little resemblance to modern ransomware strikes or multi-region cloud outages. Regulatory scrutiny now mandates continuous evidence of decoupled, cross-cloud failover capabilities.",
      "Apex Advisory assists financial institutions in designing air-gapped data vaults, zero-trust perimeter segmentation, and automated transaction re-routing that prevents catastrophic balance sheet disruptions.",
      "Resilience is an engineering culture, not a binder stored in the compliance department."
    ],
    keyTakeaways: [
      "Cloud architecture must incorporate automated egress fallbacks to secondary cloud providers.",
      "Third-party vendor APIs must be isolated behind circuit-breaker architecture.",
      "Red-team simulations should test the recovery of immutable transaction ledger logs."
    ]
  },
  {
    id: "scaleup-operational-discipline",
    slug: "scaleup-operational-discipline",
    title: "From Venture to Value: The Series B to Pre-IPO Operational Pivot",
    category: "Strategy",
    author: {
      name: "Elena Rostova",
      role: "Managing Partner",
      avatarInitials: "ER"
    },
    date: "August 12, 2026",
    readTime: "5 min read",
    featured: false,
    excerpt: "Transitioning high-velocity tech startups from 'growth-at-all-costs' to audited, predictable free-cash-flow machines.",
    content: [
      "The venture ecosystem has fundamentally recalibrated its reward structure. Capital markets no longer applaud unconstrained top-line expansion unbacked by durable unit economics and robust gross margins.",
      "Founders must institute enterprise financial governance, reliable GAAP revenue recognition schedules, and professionalized board committees well before hiring IPO underwriters.",
      "At Apex Advisory, our startup & scaleup practice bridges raw founder dynamism with institutional rigour to ensure enduring corporate sovereignty."
    ],
    keyTakeaways: [
      "Implement GAAP revenue recognition early to avoid costly restatements during audit diligence.",
      "Separate sales commission incentives from customer retention milestones.",
      "Construct multi-scenario runway models with conservative debtor-collection assumptions."
    ]
  }
];

export const LEADERSHIP_DATA: LeaderItem[] = [
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Managing Partner",
    practice: "Firm Leadership & Corporate Strategy",
    bio: "Elena brings over 24 years of experience advising Fortune 100 boards, sovereign wealth funds, and private equity sponsors on transformative mergers, strategic repositioning, and multi-jurisdictional governance. Prior to co-founding Apex Advisory LLP, she was a Senior Managing Director at a premier global strategy firm.",
    education: ["M.B.A. with Distinction, Harvard Business School", "B.S. in Economics & Applied Mathematics, London School of Economics"],
    specialties: ["Cross-Border M&A", "Board Governance", "Capital Allocation", "Crisis Leadership"],
    quote: "True advisory is not about providing answers the client wishes to hear, but uncovering the analytical truth necessary for enduring success."
  },
  {
    id: "marcus-sterling",
    name: "Marcus Sterling",
    role: "Senior Partner",
    practice: "Corporate Strategy & Growth",
    bio: "Marcus has steered more than $28B in corporate acquisitions, divestitures, and strategic turnarounds across technology, industrial, and telecommunications sectors. He chairs the firm's Global Investment & Valuation Committee.",
    education: ["M.B.A., Wharton School of the University of Pennsylvania", "B.A. in Philosophy, Politics & Economics (PPE), Oxford University"],
    specialties: ["Programmatic M&A", "Commercial Due Diligence", "Market Entry", "Shareholder Activism Defense"],
    quote: "Strategy without operational mechanics is merely theoretical; we architect plans built to withstand competitive friction."
  },
  {
    id: "priya-sundaram",
    name: "Priya Sundaram",
    role: "Partner",
    practice: "Tax & International Structuring",
    bio: "Priya leads the international tax practice, specializing in OECD Pillar Two compliance, complex cross-border transfer pricing, and intellectual property structuring for multinational conglomerates spanning North America, Europe, and Asia.",
    education: ["LL.M. in International Taxation, NYU School of Law", "J.D., Columbia Law School", "B.A., St. Stephen's College"],
    specialties: ["OECD GloBE Rules", "Transfer Pricing", "Tax Controversy", "IP Holding Structures"],
    quote: "Compliance is your strategic baseline; elegant structuring is your commercial advantage."
  },
  {
    id: "julian-vance",
    name: "Julian Vance",
    role: "Partner",
    practice: "Risk & Regulatory Advisory",
    bio: "Formerly a senior supervisory regulator at an international central banking authority, Julian specializes in prudential banking compliance, anti-money laundering (AML) controls, DORA digital resilience, and board-level risk architecture.",
    education: ["M.Sc. in Financial Engineering, Princeton University", "B.S. in Actuarial Science, University of Chicago"],
    specialties: ["Prudential Regulation", "Cyber Governance", "Enterprise Risk Management", "Forensic Investigations"],
    quote: "In risk, the dangers you fail to model are always the ones that arrive with the highest velocity."
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Partner",
    practice: "Financial Consulting & Valuations",
    bio: "Sarah leads our financial diligence and fairness opinion practice, having advised private equity sponsors on over 140 middle-market and upper-middle-market buyouts, recapitalizations, and debt restructuring mandates.",
    education: ["M.S. in Computational Finance, Carnegie Mellon University", "B.S. in Finance, Georgetown University"],
    specialties: ["Quality of Earnings (QoE)", "ASC 820 Valuations", "Debt Capital Advisory", "Lender Negotiations"],
    quote: "Numbers never lie, but accounting choices can obscure. Our duty is absolute clarity of cash-flow reality."
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Partner",
    practice: "Digital Transformation & Technology",
    bio: "David advises enterprise leaders on pragmatic digital modernization, enterprise AI integration, and core IT infrastructure cost optimization. He holds multiple patents in distributed ledger architectures and predictive operational modeling.",
    education: ["M.S. in Computer Science, Stanford University", "B.S. in Electrical Engineering, MIT"],
    specialties: ["Enterprise AI Deployment", "Core ERP Modernization", "FinOps & Cloud Economics", "Cybersecurity Strategy"],
    quote: "Digital transformation is an operational rewrite disguised as a technological project."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Apex Advisory guided our European conglomerate through a €1.2B carve-out with extraordinary precision. Their team uncovered $42M in hidden liabilities during diligence, fundamentally protecting our shareholder return.",
    author: "Hendrik Van Der Meer",
    role: "Group Chief Financial Officer",
    organization: "Aethelgard Industrial Holdings",
    sector: "Advanced Manufacturing",
    metric: "€1.2B Carve-Out Advised"
  },
  {
    id: "test-2",
    quote: "When OECD Pillar Two threatened to disrupt our global holding structure across 16 countries, Apex delivered a legally defensible blueprint that ensured 100% statutory compliance while eliminating double-taxation risk.",
    author: "Amara Okonjo",
    role: "Head of Global Tax & Treasury",
    organization: "Nexura Cloud Global Technologies",
    sector: "Technology & Software",
    metric: "16-Jurisdiction Tax Structuring"
  },
  {
    id: "test-3",
    quote: "In the high-stakes healthcare regulatory climate, Julian Vance and the risk team gave our board absolute confidence during a complex federal compliance examination. Their rigor is unmatched in the industry.",
    author: "Dr. Alistair Finch",
    role: "Chairman of the Governance Committee",
    organization: "Covenant Health Systems Network",
    sector: "Healthcare & Life Sciences",
    metric: "Zero Regulatory Disallowances"
  },
  {
    id: "test-4",
    quote: "From our Series B round through our dual-currency debt syndication, Apex Advisory provided the institutional backbone our management team needed to navigate complex institutional investors.",
    author: "Sophia Sterling-Li",
    role: "Founder & Chief Executive Officer",
    organization: "Veloce Payments Infrastructure",
    sector: "FinTech & Payments",
    metric: "$85M Capital Syndication"
  }
];

export const JOB_OPENINGS_DATA: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Director, Cross-Border M&A Advisory",
    department: "Corporate Strategy",
    location: "New York, NY / Hybrid",
    type: "Full-Time Partner Track",
    experienceLevel: "8–12 Years Experience",
    overview: "Lead complex buy-side and sell-side transaction advisory for private equity sponsors and Fortune 500 corporates.",
    requirements: [
      "Demonstrated track record leading $100M+ M&A diligence processes",
      "Exceptional financial modeling and business valuation capabilities",
      "Executive boardroom presentation and client leadership pedigree",
      "MBA from a top-tier institution or equivalent credential (CFA/CPA)"
    ],
    responsibilities: [
      "Direct engagement teams across commercial due diligence workflows",
      "Author fairness opinions and board-level strategic briefs",
      "Originate new advisory client relationships within target industries",
      "Mentor and develop high-potential engagement associates"
    ]
  },
  {
    id: "job-2",
    title: "Partner / Director, International Tax (Pillar Two)",
    department: "Tax & Compliance",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experienceLevel: "10+ Years Experience",
    overview: "Advise blue-chip multinational groups on OECD GloBE compliance, cross-border restructuring, and tax controversy defense.",
    requirements: [
      "Extensive advisory knowledge of OECD Pillar Two and international tax treaties",
      "Qualified Chartered Tax Adviser (CTA), LL.M. in Taxation, or equivalent",
      "Proven leadership of complex multinational client tax portfolios",
      "Experience interfacing directly with HMRC, IRS, and EU revenue authorities"
    ],
    responsibilities: [
      "Design and review cross-border transfer pricing architectures",
      "Lead top-up tax exposure modeling for multinational groups",
      "Drive business development in the European corporate tax market",
      "Deliver technical updates to firm-wide global tax partners"
    ]
  },
  {
    id: "job-3",
    title: "Engagement Manager, Financial Due Diligence (QoE)",
    department: "Financial Consulting",
    location: "Singapore / Hybrid",
    type: "Full-Time",
    experienceLevel: "6–9 Years Experience",
    overview: "Execute high-velocity Quality of Earnings audits and working capital analyses for private equity buyouts across Asia-Pacific.",
    requirements: [
      "CPA, CA, or equivalent financial accounting qualification",
      "Minimum 4 years direct experience authoring Quality of Earnings reports",
      "Advanced capability in transaction working capital peg calculations",
      "Strong client presence and project management under compressed timelines"
    ],
    responsibilities: [
      "Lead quantitative QoE analytics and normalized EBITDA reconciliations",
      "Identify debt-like items and hidden liabilities in target companies",
      "Collaborate directly with private equity investment partners",
      "Manage and review junior transaction analysts"
    ]
  },
  {
    id: "job-4",
    title: "Principal Consultant, Digital Transformation & AI",
    department: "Digital Transformation",
    location: "Zurich, Switzerland / Hybrid",
    type: "Full-Time",
    experienceLevel: "7–10 Years Experience",
    overview: "Architect enterprise AI integration and operational modernization roadmaps for European banking and industrial clients.",
    requirements: [
      "Deep technical understanding of enterprise AI architecture and data governance",
      "Demonstrated experience modernizing legacy ERP and operational workflows",
      "B.S. or M.S. in Computer Science, Software Engineering, or related discipline",
      "Excellent communication skills bridging engineering and executive leadership"
    ],
    responsibilities: [
      "Formulate multi-year digital transformation blueprints for C-suite clients",
      "Conduct FinOps cloud infrastructure audits and recommend cost captures",
      "Oversee technical proof-of-concepts for enterprise AI workflows",
      "Drive technology vendor evaluation and contract governance"
    ]
  }
];
