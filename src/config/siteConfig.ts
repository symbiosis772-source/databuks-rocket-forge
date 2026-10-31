export interface ServiceDetail {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  whoIsThisFor: {
    title: string;
    description: string;
    examples: string[];
  };
  problemsSolved: string[];
  whatWeBuild: {
    title: string;
    description: string;
  }[];
  typicalDeliverables: string[];
  processAndDependencies: {
    steps: { title: string; detail: string }[];
    dependencies: string[];
  };
  costAndTimingFactors: string[];
  faqs: { question: string; answer: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  tagline: string;
  clientContext: string;
  problem: string;
  databuksContribution: string;
  deliveredCapabilities: string[];
  image: string;
  category: "Websites" | "Apps & Software" | "Automation" | "AI";
  liveUrl?: string;
  toolsUsed: string[];
  verifiedNote: string;
}

export const siteConfig = {
  brand: {
    name: "DataBuks",
    legalName: "DataBuks Technology Services",
    tagline: "Websites, apps & automation built around your business.",
    locationBadge: "SOFTWARE DEVELOPMENT • NAGPUR, INDIA",
    city: "Nagpur",
    region: "Maharashtra",
    country: "India",
    addressSummary: "Nagpur, Maharashtra, India",
    email: "contact@databuks.org",
    phoneDisplay: "+91 87886 06608",
    whatsappNumber: "918788606608",
    whatsappUrl: "https://wa.me/918788606608?text=Hi%20DataBuks%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20project.",
    websiteUrl: "https://databuks.org",
    supportedLanguages: "English & Hindi communication available",
  },

  // Central verified configuration to prevent inventing unverified claims
  verificationPolicy: {
    displayTestimonials: false, // Omitted cleanly: only approved, signed-off client testimonials are published
    displayAwards: false, // No unverified badges or fake ratings
    displayTeamPhotos: false, // Real photography only when provided; no fake stock photos
    strictScopePolicy: "All pricing and timelines are based on clear written scope discussed during consultation.",
  },

  navigation: [
    {
      title: "Services",
      path: "/services",
      hasDropdown: true,
      items: [
        {
          name: "Website Development",
          path: "/services/website-development",
          description: "Business websites, landing pages and e-commerce stores designed to turn visitors into enquiries.",
        },
        {
          name: "App & Software Development",
          path: "/services/app-software-development",
          description: "Mobile apps, web portals and custom dashboards built for real customer and team workflows.",
        },
        {
          name: "Business Automation",
          path: "/services/business-automation",
          description: "Connect your tools and reduce manual data entry across leads, orders and daily reporting.",
        },
        {
          name: "AI Agents & Integrations",
          path: "/services/ai-agents",
          description: "Add practical AI assistants and automated triage to your workflows with clear human handover.",
        },
      ],
    },
    {
      title: "Work",
      path: "/portfolio",
    },
    {
      title: "How We Work",
      path: "/#process",
    },
    {
      title: "About",
      path: "/about",
    },
  ],

  capabilitiesStrip: [
    { title: "Business websites", detail: "Clean, responsive websites designed for enquiries and credibility." },
    { title: "Mobile & web apps", detail: "Accessible applications for customers and internal teams." },
    { title: "Custom dashboards", detail: "Centralised views for orders, inventory and business records." },
    { title: "AI & workflow automation", detail: "Practical tool connections that eliminate repetitive manual steps." },
  ],

  faqs: [
    {
      question: "What does a project cost?",
      answer: "Every project has different requirements. Costs depend on the number of screens, custom features, integrations, and whether you need ongoing maintenance. Rather than quoting arbitrary fixed prices, we prepare a transparent, written scope and estimate after an initial discussion.",
    },
    {
      question: "How long does development take?",
      answer: "Timelines depend on project size, required third-party connections, and how quickly content and feedback are provided. A focused business website might take a few weeks, while a custom web application or ERP portal typically requires more staged development. We provide clear milestone dates before starting.",
    },
    {
      question: "Can you improve an existing website or app?",
      answer: "Yes. We frequently help businesses modernise outdated websites, fix mobile responsiveness, resolve speed issues, or add new features and workflows to existing software without rebuilding everything from scratch.",
    },
    {
      question: "Can you connect our existing tools?",
      answer: "In most cases, yes. If your tools have open APIs or webhook support (such as Google Sheets, WhatsApp Business API, CRM systems, payment gateways, or custom databases), we can build reliable automations and integrations between them.",
    },
    {
      question: "What do you need from us to begin?",
      answer: "We start with a conversation to understand your business, your target customers, and what you want the software or website to accomplish. It helps if you have branding assets (logos, colours) and reference websites you like, but we can guide you through every step.",
    },
    {
      question: "What costs continue after launch?",
      answer: "Ongoing costs typically include domain renewal, web hosting or cloud server fees, and any third-party subscription APIs you use (like WhatsApp messaging or payment processing). We clearly separate development fees from these third-party operating costs so there are no surprises.",
    },
  ],

  workingPractices: [
    {
      title: "Direct communication",
      description: "You work directly with the developers and designers building your project. No layers of non-technical account managers.",
    },
    {
      title: "Written project scope",
      description: "Before coding starts, we document what is included, what is excluded, and the agreed milestones so expectations stay aligned.",
    },
    {
      title: "Milestone-based progress reviews",
      description: "You review working software at regular staging checkpoints, ensuring you give feedback as the product is built.",
    },
    {
      title: "Full source code & account handover",
      description: "Upon project completion and sign-off, you own your source code, domain, and deployment accounts completely.",
    },
    {
      title: "Agreed post-launch support",
      description: "We don't disappear after deployment. We agree on a post-launch warranty and support window to ensure stability.",
    },
  ],

  budgetOptions: [
    "Under ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000 – ₹3,00,000",
    "₹3,00,000+",
    "Need guidance on budget",
  ],
};

