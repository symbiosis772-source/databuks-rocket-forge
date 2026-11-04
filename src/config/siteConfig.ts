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
    tagline: "Websites, apps and automation for your business.",
    heroEyebrow: "DATABUKS • WEBSITES, APPS & AUTOMATION",
    heroHeadlinePrimary: "Websites, apps and automation",
    heroHeadlineSecondary: "for your business.",
    heroSupportingCopy: "DataBuks builds websites, custom applications and AI-powered workflows for Indian businesses.",
    locationBadge: "SOFTWARE STUDIO • NAGPUR, INDIA",
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
      title: "Products",
      path: "/products",
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

  inHouseProducts: [
    {
      id: "sales-agent",
      name: "Sales Agent",
      status: "In development",
      statusBadge: "Coming soon",
      conceptBadge: "Concept preview",
      headline: "Capture visitor intent, collect details, and route qualified leads.",
      description: "Alongside client projects, we are developing an in-house sales agent designed to help Indian businesses capture visitor inquiries, collect necessary project information, and route qualified conversations directly to the right team members on WhatsApp or CRM.",
      enquiryService: "sales-agent",
      prototypeUrl: "https://databuks-frontend.vercel.app/",
      prototypeLabel: "Preview prototype",
      highlights: [
        "Guides visitors with helpful questions tailored to your business",
        "Collects key details before passing the conversation to your team",
        "Direct handover to WhatsApp or email with the context already recorded",
      ],
      notice: "In development. We will announce launch dates and full channel support as testing progresses.",
    },
    {
      id: "voice-agent",
      name: "Customizable Voice Agent",
      status: "In development",
      statusBadge: "Coming soon",
      conceptBadge: "Concept preview",
      headline: "Custom voice conversations and call triage for your business.",
      description: "A voice-agent product being developed for business-specific conversations and workflows. Designed to answer routine inquiries, schedule customer appointments, and guide callers. Specific customisation (such as conversation scripts, appointment booking, and CRM connections) is discussed and configured around your business needs.",
      enquiryService: "voice-agent",
      prototypeUrl: "https://voice-agent-saas-web.vercel.app/",
      prototypeLabel: "Preview prototype",
      highlights: [
        "Configured for your company's common questions and workflows",
        "Optional connections to calendar booking and internal notifications",
        "Direct escalation path to your staff for complex requests",
      ],
      notice: "Customizable prototype. Integration options and workflows are tailored to each business.",
    },
  ],

  problemSolutions: [
    {
      problem: "Customers struggle to understand your business",
      solution: "A clear website and enquiry journey designed around how buyers evaluate your services.",
      tag: "Websites & Conversion",
      icon: "Globe",
    },
    {
      problem: "Your team repeats the same updates manually",
      solution: "Connected workflows and automation between your forms, WhatsApp, spreadsheets and CRM.",
      tag: "Business Automation",
      icon: "Workflow",
    },
    {
      problem: "Your operations have outgrown spreadsheets",
      solution: "A tailored app, customer portal or internal dashboard built for your exact daily tasks.",
      tag: "Custom Software",
      icon: "Layers",
    },
  ],

  faqs: [
    {
      question: "What can you build?",
      answer: "We build modern business websites, e-commerce stores, custom web and mobile applications, operations dashboards, distributor portals, automated business workflows, and practical AI integrations with human handover.",
    },
    {
      question: "Can you improve an existing website or app?",
      answer: "Yes. We frequently help Indian businesses update outdated websites, resolve slow loading speeds, improve mobile responsiveness, and add new custom features or automations without having to rebuild from zero.",
    },
    {
      question: "What affects cost and timing?",
      answer: "Project cost and delivery timing depend on the total number of screens, custom business logic, third-party integrations (like payment gateways or WhatsApp API), and database needs. We provide a documented, fixed-scope estimate before any development starts.",
    },
    {
      question: "Can you connect our existing tools?",
      answer: "In most cases, yes. As long as your existing software supports webhooks or open APIs (such as WhatsApp Business API, Google Sheets, CRM platforms, accounting tools, or cloud databases), we can create dependable automations between them.",
    },
    {
      question: "Are the upcoming products available yet?",
      answer: "Our client agency services are available now. Our in-house Sales Agent and Customizable Voice Agent are currently in active development. If you would like an early preview or wish to explore custom voice or sales automation for your business, reach out through our contact form.",
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
