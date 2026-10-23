export interface DivisionInfo {
  id: string;
  name: string;
  bengaliName: string;
  districtsCount: number;
  fieldStation: string;
  enumeratorsCount: number;
  specialties: string[];
  dialects: string[];
  featuredProject: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  divisionCategory: "Social Research" | "Market Research" | "Policy & Development";
  sampleSize: string;
  geography: string;
  methodology: string;
  metricLabel: string;
  metricValue: string;
  accentType: "red" | "yellow" | "green";
  summary: string;
  deliverables: string[];
}

export interface CoreDivision {
  id: "social" | "market";
  title: string;
  tagline: string;
  badgeText: string;
  accentColor: "yellow" | "green";
  description: string;
  keyServices: {
    title: string;
    description: string;
    points: string[];
  }[];
  methodologies: string[];
  typicalClients: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export const BANGLADESH_DIVISIONS: DivisionInfo[] = [
  {
    id: "dhaka",
    name: "Dhaka Division",
    bengaliName: "ঢাকা বিভাগ",
    districtsCount: 13,
    fieldStation: "Banani Corporate HQ & Central Research Hub",
    enumeratorsCount: 340,
    specialties: [
      "Urban Consumer Panels & Shopper Intercepts",
      "Socioeconomic Policy Baselines",
      "Ready-Made Garment (RMG) Worker Living Wage Audits",
      "Corporate CSAT & Brand Health Tracking",
    ],
    dialects: ["Standard Bengali", "Dhakaiya Urban Dialect", "English"],
    featuredProject: "Greater Dhaka Metropolitan Household Expenditure & Consumer Sentiment Barometer",
  },
  {
    id: "chattogram",
    name: "Chattogram Division",
    bengaliName: "চট্টগ্রাম বিভাগ",
    districtsCount: 11,
    fieldStation: "Agrabad Commercial Station & Cox's Bazar Field Base",
    enumeratorsCount: 260,
    specialties: [
      "Humanitarian & Refugee Camp Surveys (Cox's Bazar / Ukhiya)",
      "Port & Industrial Logistics Audits",
      "Chittagong Hill Tracts (CHT) Indigenous Community Studies",
      "Commercial Trade & Wholesale Penetration",
    ],
    dialects: ["Chatgaya (Chittagonian)", "Rohingya", "Chakma", "Standard Bengali"],
    featuredProject: "Rohingya & Host Community Resilience & Livelihood Monitoring Framework",
  },
  {
    id: "rajshahi",
    name: "Rajshahi Division",
    bengaliName: "রাজশাহী বিভাগ",
    districtsCount: 8,
    fieldStation: "Padma Residential Base & Bogura Agri-Station",
    enumeratorsCount: 180,
    specialties: [
      "Agricultural Technology & Seed Adoption Studies",
      "Barind Tract Groundwater & Climate Scarcity Baselines",
      "Microfinance & Rural Lending Impact Evaluations",
      "FMCG Rural Bazaar Distribution Audits",
    ],
    dialects: ["Varendra Bengali", "Pabna Regional Dialect", "Standard Bengali"],
    featuredProject: "Northwest Agri-Value Chain & High-Yield Crop Diversification Study",
  },
  {
    id: "khulna",
    name: "Khulna Division",
    bengaliName: "খুলনা বিভাগ",
    districtsCount: 10,
    fieldStation: "Sonadanga Hub & Satkhira Coastal Station",
    enumeratorsCount: 165,
    specialties: [
      "Sundarbans Mangrove Buffer Zone Socio-Ecology",
      "Soil Salinity Intrusion & Clean Water Access",
      "Aquaculture & Shrimp/Fish Value Chain Surveys",
      "Disaster Risk Reduction (DRR) Program Assessments",
    ],
    dialects: ["Jessore/Khulna Regional Accent", "Standard Bengali"],
    featuredProject: "Coastal Resilience & Adaptive Water Infrastructure Impact Assessment",
  },
  {
    id: "barishal",
    name: "Barishal Division",
    bengaliName: "বরিশাল বিভাগ",
    districtsCount: 6,
    fieldStation: "Band Road Riverine Station & Bhola Island Field Post",
    enumeratorsCount: 125,
    specialties: [
      "Riverine Island (Char) Household Surveys (Boat-deployed)",
      "Cyclone Preparedness & Community Early-Warning Response",
      "Maternal & Child Health Access in Remote Waterways",
      "Rural Mobile Money & Agent Banking Penetration",
    ],
    dialects: ["Barisali Dialect", "Standard Bengali"],
    featuredProject: "River Delta Char Inhabitant Social Protection Baseline Evaluation",
  },
  {
    id: "sylhet",
    name: "Sylhet Division",
    bengaliName: "সিলেট বিভাগ",
    districtsCount: 4,
    fieldStation: "Zindabazar Station & Moulvibazar Tea Research Post",
    enumeratorsCount: 115,
    specialties: [
      "Remittance Inflow & Diaspora Investment Behavior",
      "Tea Garden Labor Welfare & Nutritional Assessments",
      "Haor (Wetland) Seasonal Flood Vulnerability Tracking",
      "Cross-Border Trade & Real Estate Consumer Insights",
    ],
    dialects: ["Sylheti (Siloti Nagri oral traditions)", "Standard Bengali"],
    featuredProject: "Haor Basin Flash-Flood Preparedness & Food Security Rapid Evaluation",
  },
  {
    id: "rangpur",
    name: "Rangpur Division",
    bengaliName: "রংপুর বিভাগ",
    districtsCount: 8,
    fieldStation: "Dhap Central Office & Kurigram Char Operations Post",
    enumeratorsCount: 145,
    specialties: [
      "Monga (Seasonal Poverty) Eradication Follow-up Studies",
      "Teesta Basin Cold-Wave & Erosion Vulnerability",
      "Primary Education Attendance & School Feeding Evaluations",
      "Bottom-of-Pyramid (BoP) Consumer Product Testing",
    ],
    dialects: ["Rangpuri / Kamatapuri", "Standard Bengali"],
    featuredProject: "Northern Border Districts Child Malnutrition & Stunting Endline Assessment",
  },
  {
    id: "mymensingh",
    name: "Mymensingh Division",
    bengaliName: "ময়মনসিংহ বিভাগ",
    districtsCount: 4,
    fieldStation: "Town Hall Station & Netrokona Field Post",
    enumeratorsCount: 95,
    specialties: [
      "Inland Freshwater Fisheries & Poultry Farmers Census",
      "Garo & Indigenous Community Cultural-Social Studies",
      "Rural Technical & Vocational Training (TVET) Outcomes",
      "Agro-Processing Small Enterprise Financial Health",
    ],
    dialects: ["Mymensingh Regional Dialect", "Garo (Mandi)", "Standard Bengali"],
    featuredProject: "Smallholder Inland Aquaculture Productivity & Market Linkages Study",
  },
];

export const CORE_DIVISIONS: Record<"social" | "market", CoreDivision> = {
  social: {
    id: "social",
    title: "Social Research Division",
    tagline: "Empowering Policy, Development & Humanitarian Impact Through Rigorous Field Evidence",
    badgeText: "Social Research Division",
    accentColor: "yellow",
    description:
      "Mirror Metrics delivers methodologically sound, ethically compliant research for international development agencies, multilateral donors, national ministries, and academic institutions across all 64 districts of Bangladesh.",
    keyServices: [
      {
        title: "Baseline, Midline & Endline Evaluations",
        description:
          "Quasi-experimental and experimental (RCT) designs to quantify program impact, tracking indicators across health, agriculture, sanitation, education, and livelihood.",
        points: [
          "Pre- and post-intervention household sampling",
          "Difference-in-differences & propensity score matching",
          "Automated longitudinal cohort tracking",
        ],
      },
      {
        title: "Public Health, Nutrition & Education Studies",
        description:
          "Rigorous field assessments capturing maternal health, child stunting, immunization coverage, and school attendance with biomarker-trained enumerator cadres.",
        points: [
          "Anthropometric measurements (MUAC, height-for-age)",
          "Clinical and facility-based service quality audits",
          "Early childhood development (ECD) indices",
        ],
      },
      {
        title: "Climate Resilience, DRR & Humanitarian Surveys",
        description:
          "Rapid-deployment field teams specialized in disaster-affected riverine chars, coastal salinity zones, and refugee settlements (Cox's Bazar/Bhasan Char).",
        points: [
          "Disaster risk reduction (DRR) knowledge audits",
          "Vulnerability & capacity assessments (VCA)",
          "Rohingya & host-community participatory research",
        ],
      },
      {
        title: "Qualitative Inquiry & Participatory Appraisals",
        description:
          "In-depth exploratory research conducted by seasoned Bengali-speaking sociologists and anthropologists.",
        points: [
          "Focus Group Discussions (FGDs) with gender separation",
          "Key Informant Interviews (KIIs) with local leaders & MPs",
          "Participatory Rural Appraisal (PRA) & community mapping",
        ],
      },
    ],
    methodologies: [
      "Computer-Assisted Personal Interviewing (CAPI) on encrypted tablets",
      "Stratified Multi-Stage Probability Sampling (PPS)",
      "Qualitative Thematic Analysis (NVivo / MAXQDA coding)",
      "Strict IRB Ethics Clearance & Informed Consent Protocols",
    ],
    typicalClients: [
      "United Nations Agencies (UNDP, UNICEF, WFP, UNHCR)",
      "Bilateral Donors (USAID, FCDO, JICA, GIZ)",
      "International NGOs (BRAC, CARE, Save the Children, Oxfam)",
      "Government of Bangladesh Ministries & Planning Commission",
    ],
    metrics: [
      { label: "Social Studies Completed", value: "140+" },
      { label: "Beneficiaries Interviewed", value: "280,000+" },
      { label: "Active Field Stations", value: "8 Divisions" },
      { label: "Data Accuracy Rating", value: "99.6%" },
    ],
  },
  market: {
    id: "market",
    title: "Market Research Division",
    tagline: "Unlocking Commercial Growth Through High-Precision Consumer Intelligence in Bangladesh",
    badgeText: "Market Research Division",
    accentColor: "green",
    description:
      "From bustling Dhaka megacity retail aisles to remote village haats and bazaars, Mirror Metrics provides leading consumer brands, financial institutions, and telecom operators with actionable market insights.",
    keyServices: [
      {
        title: "Consumer Behavior & Brand Health Tracking",
        description:
          "Continuous and syndicated tracking of brand awareness, equity, Net Promoter Score (NPS), and purchase decision pathways across distinct socio-demographic strata.",
        points: [
          "Top-of-mind (TOM) and spontaneous brand recall",
          "Customer Satisfaction (CSAT) & Customer Effort Score",
          "Segmented shopper personas & lifestyle mapping",
        ],
      },
      {
        title: "Product Testing & Retail Shelf Audits",
        description:
          "Blind taste tests, central location tests (CLT), concept testing, packaging evaluations, and retail census audits across both modern trade and traditional trade (Mudir Dokan).",
        points: [
          "In-home usage testing (IHUT) across urban/rural panels",
          "Planogram compliance & Share of Shelf (SoS) auditing",
          "Mystery shopping & dealer channel satisfaction",
        ],
      },
      {
        title: "Market Entry & Feasibility Assessments",
        description:
          "Thorough market sizing, regulatory landscape reviews, supply chain mapping, and competitor intelligence for domestic conglomerates and multinational entrants.",
        points: [
          "Total Addressable Market (TAM / SAM / SOM) estimations",
          "Van Westendorp Price Sensitivity Meter (PSM)",
          "Wholesale market ecosystem & margin distribution analysis",
        ],
      },
      {
        title: "Digital Financial Services (MFS) & Fintech Audits",
        description:
          "Deep-dive research into Bangladesh's rapid transition toward mobile money, agent banking, micro-merchant QR payments, and digital lending.",
        points: [
          "Agent liquidity & customer drop-off diagnostics",
          "Micro-merchant digital readiness assessments",
          "Financial literacy & trust barometers",
        ],
      },
    ],
    methodologies: [
      "Computer-Assisted Telephone Interviewing (CATI) via Dhaka call-center",
      "Central Location Tests (CLT) in Banani & Divisional Focus Suites",
      "Conjoint Analysis & Van Westendorp Price Sensitivity Modeling",
      "Computer Vision Retail Shelf & Planogram Verification",
    ],
    typicalClients: [
      "Top-tier FMCG Multinationals & Local Conglomerates",
      "Leading Mobile Financial Services (MFS) & Payment Networks",
      "Commercial Banks & Microfinance Institutions (MFIs)",
      "Telecom Operators, E-commerce Platforms & Tech Startups",
    ],
    metrics: [
      { label: "Commercial Studies Delivered", value: "110+" },
      { label: "Retail Outlets Audited", value: "35,000+" },
      { label: "Dhaka Central Testing Lab", value: "30-Seat CLT Suite" },
      { label: "Turnaround Time (CATI)", value: "48-72 Hours" },
    ],
  },
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "National Climate Vulnerability & Livelihood Adaptation Baseline Survey",
    clientSector: "International Development Agency & Ministry Partner",
    divisionCategory: "Social Research",
    sampleSize: "14,800 Households",
    geography: "Nationwide (Coastal, Char, Haor & Barind Agro-Ecological Zones)",
    methodology: "Two-stage stratified cluster sampling; KoboToolbox CAPI on encrypted tablets with GPS geofencing.",
    metricLabel: "Independent Back-Check Verification",
    metricValue: "99.8%",
    accentType: "green",
    summary:
      "Executed a comprehensive baseline study across remote climate-impacted regions of Bangladesh to evaluate household resilience, food security coping mechanisms, and alternative livelihood readiness prior to a $50M multilateral intervention.",
    deliverables: [
      "Socioeconomic Baseline Database with 100% GPS audit",
      "Econometric Vulnerability Index across 8 Divisions",
      "Executive Policy Brief for Ministry of Disaster Management",
    ],
  },
  {
    id: "case-2",
    title: "FMCG Brand Equity & Rural Retail Penetration Index across Traditional Trade",
    clientSector: "Multinational Fast-Moving Consumer Goods Leader",
    divisionCategory: "Market Research",
    sampleSize: "2,400 Outlets + 4,800 Shopper Intercepts",
    geography: "All 8 Divisions (Metropolitan, Tier-2 Municipalities & Rural Bazaars)",
    methodology: "Handheld CAPI retail census, shelf-share camera audits, and shopper intercept interviews.",
    metricLabel: "Unmet Demand Identified in Tier-2 Hubs",
    metricValue: "+32.4%",
    accentType: "yellow",
    summary:
      "Evaluated distributor performance, retailer stock-out frequency, and shopper brand preference against aggressive local competitors. Identified crucial distributor bottlenecks in Rangpur and Khulna divisions.",
    deliverables: [
      "Live Planogram & Share-of-Shelf Interactive BI Dashboard",
      "Retailer Margin & Stockout Diagnostic Matrix",
      "Price Sensitivity Heatmap for Tier-2 Consumer Segments",
    ],
  },
  {
    id: "case-3",
    title: "Field Quality Audit & High-Frequency Anomaly Red-Flagging Intervention",
    clientSector: "Bilateral Public Health Research Consortium",
    divisionCategory: "Policy & Development",
    sampleSize: "8,500 Maternal Health Interviews",
    geography: "64 Upazilas across Northern & Southern Districts",
    methodology: "Dual-layer quality control: 10% audio back-checks, supervisor spot-checks, and statistical speed-run algorithms.",
    metricLabel: "Quality Red Flags Resolved Within 24h",
    metricValue: "100%",
    accentType: "red",
    summary:
      "Instituted our flagship Quality Assurance Protocol during a sensitive nationwide healthcare study. Our real-time validation algorithm flagged anomalous completion times and GPS variance, preventing survey fraud.",
    deliverables: [
      "Automated Daily Quality Control Telemetry Reports",
      "Audio-Audit Verification Log with Dialectal Transcripts",
      "Certified High-Fidelity Dataset Ready for Academic Publication",
    ],
  },
  {
    id: "case-4",
    title: "Micro-Merchant QR Adoption & Agent Banking Liquidity Barometer",
    clientSector: "Leading FinTech & Mobile Financial Services Operator",
    divisionCategory: "Market Research",
    sampleSize: "3,600 Micro-Merchants & MFS Agents",
    geography: "Dhaka, Chattogram, Rajshahi, and Sylhet Divisions",
    methodology: "Face-to-face CAPI with interactive transaction simulation and qualitative merchant depth interviews.",
    metricLabel: "Digital Merchant Retention Increase",
    metricValue: "+28.7%",
    accentType: "green",
    summary:
      "Investigated barriers preventing traditional small store owners from transitioning from cash-on-delivery to interoperable Bangla QR payments, uncovering essential liquidity timing preferences.",
    deliverables: [
      "Merchant Behavioral Segmentation & Persona Blueprint",
      "Agent Commission Incentive Optimization Model",
      "Actionable Product UX Roadmap for Merchant App",
    ],
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Research Design & Sampling Architecture",
    badge: "Rigorous Foundation",
    badgeStyle: "badge-yellow",
    accent: "yellow",
    description:
      "We design custom sampling frameworks adhering to strict international statistical standards. Whether multi-stage stratified cluster sampling, Probability Proportional to Size (PPS), or quota sampling, we ensure full demographic representativeness.",
    details: [
      "Statistical power calculations & sample size determination",
      "Institutional Review Board (IRB) ethical submission & approvals",
      "Bilingual questionnaire structuring (English & Bengali)",
      "Cognitive pre-testing & pilot field deployment (100+ interviews)",
    ],
  },
  {
    step: "02",
    title: "CAPI/CATI Digital Field Data Collection",
    badge: "Digital Precision",
    badgeStyle: "badge-green",
    accent: "green",
    description:
      "100% digital data collection using encrypted handheld devices running SurveyCTO, KoboToolbox, and ODK. Eliminates paper transcription errors and enables real-time field synchronization.",
    details: [
      "Geo-stamping with mandatory high-precision GPS coordinate capture",
      "Automated skip-logic, range checks, and constraint validation",
      "Offline encrypted caching with automated cloud sync upon network availability",
      "Comprehensive digital consent logs and respondent privacy safeguards",
    ],
  },
  {
    step: "03",
    title: "Rigorous Quality Control & Auditing",
    badge: "Zero-Fraud Protocol",
    badgeStyle: "badge-red",
    accent: "red",
    isHighlighted: true,
    description:
      "The hallmark of Mirror Metrics. We enforce a zero-tolerance data integrity regime combining algorithmic anomaly detection with on-the-ground human supervisor back-checks.",
    details: [
      "10% random in-person supervisor re-interviews and back-checks",
      "Silent audio auditing of key diagnostic question blocks",
      "Automated timestamp & speed-run algorithms flagging rushed surveys",
      "Daily telemetry verification by our Central Data Quality Unit in Dhaka",
    ],
  },
  {
    step: "04",
    title: "Actionable Analytics & Strategic Reporting",
    badge: "Evidence-Based Output",
    badgeStyle: "badge-green",
    accent: "green",
    description:
      "Our senior data scientists and research fellows transform clean datasets into compelling, decision-ready intelligence using advanced econometric and statistical modeling.",
    details: [
      "Multivariate regression, factor analysis, and difference-in-differences",
      "Qualitative thematic synthesis using NVivo and inductive coding",
      "Interactive cloud business intelligence dashboards (PowerBI / Tableau / Web)",
      "Executive presentations, policy briefs, and peer-review ready documentation",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "nationwide",
    title: "Nationwide Field Infrastructure",
    description:
      "Permanent presence across all 8 divisions and 64 districts with a roster of over 1,200 thoroughly vetted, certified field enumerators ready to mobilize within 72 hours.",
    accent: "green",
  },
  {
    id: "bilingual",
    title: "Bilingual & Dialectal Mastery",
    description:
      "Field teams fluent in regional dialects (Chatgaya, Sylheti, Barisali, Rangpuri, CHT languages) ensuring nuanced qualitative inquiry and culturally sensitive probing.",
    accent: "yellow",
  },
  {
    id: "integrity",
    title: "Uncompromising Data Integrity",
    description:
      "Dual-layer auditing incorporating audio verification, automated outlier detection, and strict back-checks. Every data point is verifiable and academically reproducible.",
    accent: "red",
  },
  {
    id: "multidisciplinary",
    title: "Multidisciplinary Leadership",
    description:
      "Directed by seasoned researchers, economists, sociologists, and former corporate market intelligence leads with decades of combined experience in South Asia.",
    accent: "yellow",
  },
  {
    id: "ethical",
    title: "Strict Ethical & IRB Standards",
    description:
      "Full compliance with international ethical guidelines, ESOMAR codes of conduct, explicit informed consent protocols, and GDPR-aligned encrypted data storage.",
    accent: "green",
  },
  {
    id: "technology",
    title: "Modern Digital CAPI Architecture",
    description:
      "State-of-the-art mobile data capture platforms with automated logic validation, offline reliability in remote riverine chars, and real-time supervisory dashboards.",
    accent: "red",
  },
];
