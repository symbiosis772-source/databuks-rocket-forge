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

export const siteConfig = {
  brand: {
    name: "DataBuks",
    legalName: "DataBuks Technology Services",
    tagline: "Your next website, app or smarter workflow starts here.",
    heroEyebrow: "DATABUKS • SOFTWARE DEVELOPMENT",
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

  verificationPolicy: {
    displayTestimonials: false,
    displayAwards: false,
    displayTeamPhotos: false,
    strictScopePolicy: "All pricing and timelines are based on clear written scope discussed during consultation.",
  },

  navigation: [
    {
      title: "Home",
      path: "/",
    },
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
          name: "Apps & Custom Software",
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
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ],

  capabilitiesStrip: [
    { title: "Business websites", detail: "Clean, responsive websites designed for enquiries and credibility." },
    { title: "Apps & custom software", detail: "Accessible applications for customers and internal teams." },
    { title: "Workflow automation", detail: "Connected tools that eliminate repetitive manual steps." },
    { title: "AI integrations", detail: "Practical AI assistants with reliable human oversight." },
  ],

  faqs: [
    {
      question: "What affects the cost of a project?",
      answer: "Every project has unique requirements. Costs depend on the number of screens, custom business logic, integrations (e.g. WhatsApp API, payment gateways, custom databases), and ongoing maintenance needs. We prepare a transparent, written scope and fixed-scope estimate after our initial discovery conversation.",
    },
    {
      question: "How long does development take?",
      answer: "Timelines depend on project size, required third-party connections, and how quickly content and feedback are provided. A focused business website typically takes a few weeks, while a custom web application or ERP portal requires staged development milestones. We provide clear milestone dates before starting.",
    },
    {
      question: "Can you improve an existing website or app?",
      answer: "Yes. We regularly help Indian businesses modernise outdated websites, fix mobile responsiveness, resolve slow load times, or add new features and workflows to existing software without rebuilding everything from scratch.",
    },
    {
      question: "Can you connect our existing business tools?",
      answer: "In most cases, yes. If your tools support webhooks or open APIs (such as Google Sheets, WhatsApp Business API, CRM systems, payment gateways, or custom databases), we can build reliable automations and integrations between them.",
    },
    {
      question: "What do you need from us to begin?",
      answer: "We start with a conversation to understand your business, your target customers, and what you want the software or website to accomplish. It helps if you have branding assets (logos, colours) and reference examples you like, but we can guide you through every step.",
    },
    {
      question: "What third-party costs continue after launch?",
      answer: "Ongoing third-party costs typically include domain renewal, web hosting or cloud database fees, and any third-party subscription APIs you use (like WhatsApp messaging or payment processing). We clearly separate our development fees from these third-party operating costs so there are no surprises.",
    },
  ],

  workingPractices: [
    {
      title: "Direct communication",
      description: "You work directly with the developers and designers building your project. No non-technical account managers.",
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
};
