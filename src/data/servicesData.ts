export interface ServicePageData {
  slug: string;
  name: string;
  shortTagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  whoIsThisFor: {
    summary: string;
    points: { title: string; detail: string }[];
  };
  problemsSolved: {
    title: string;
    description: string;
  }[];
  whatWeCanBuild: {
    title: string;
    description: string;
    items: string[];
  }[];
  typicalDeliverables: string[];
  caseStudySlugs: string[];
  processAndDependencies: {
    steps: { number: string; title: string; detail: string }[];
    dependencies: string[];
  };
  costAndTimingFactors: {
    factor: string;
    explanation: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Record<string, ServicePageData> = {
  "website-development": {
    slug: "website-development",
    name: "Website Development",
    shortTagline: "Present your business clearly and give customers an easy way to enquire, book or buy.",
    heroHeadline: "Business websites built to turn visitors into real enquiries.",
    heroSubtitle: "We design and develop clean, fast-loading websites that communicate your credibility, explain what you offer, and make it effortless for customers across India to contact you.",
    whoIsThisFor: {
      summary: "Ideal for growing businesses that want a polished online presence that represents their real standard of work.",
      points: [
        {
          title: "Service businesses & consultancies",
          detail: "Firms looking to replace outdated pages with a clear showcase of services, case studies and easy consultation booking.",
        },
        {
          title: "Distributors & B2B suppliers",
          detail: "Companies that need a clean digital product catalogue where buyers can browse specifications and request wholesale quotations.",
        },
        {
          title: "Retail & e-commerce brands",
          detail: "Direct-to-consumer businesses wanting an intuitive shopping experience with integrated payment gateways (Razorpay, UPI, Cards).",
        },
        {
          title: "High-intent landing pages",
          detail: "Founders launching a specific campaign, event or product seeking high conversion rates and fast mobile performance.",
        },
      ],
    },
    problemsSolved: [
      {
        title: "Websites that look dated or unmaintained",
        description: "Customers judge your reliability by your web presence. We build modern, professional layouts that reflect your real business calibre.",
      },
      {
        title: "Slow load times on mobile connections",
        description: "Heavy themes and unoptimised images drive away mobile visitors. We build lightweight, efficient pages optimised for fast loading across all networks.",
      },
      {
        title: "Confusing visitor journeys and missed enquiries",
        description: "If customers cannot quickly find what you do or how to reach you, they leave. We build structured pages with direct WhatsApp and enquiry forms.",
      },
      {
        title: "Difficult or fragile content updates",
        description: "We provide manageable content setups so your team can update products, announcements or service details without breaking the layout.",
      },
    ],
    whatWeCanBuild: [
      {
        title: "Corporate & business websites",
        description: "Multi-page websites communicating your company story, services, leadership, and portfolio.",
        items: ["Custom visual design", "Responsive mobile-first layout", "Contact & enquiry forms", "SEO foundations & meta tags"],
      },
      {
        title: "Product catalogues & B2B inquiry sites",
        description: "Structured digital showcases for manufacturers, dealers and exporters.",
        items: ["Categorised product displays", "RFQ / 'Request a Quote' cart", "Downloadable brochures & specs", "WhatsApp inquiry trigger"],
      },
      {
        title: "E-commerce stores & D2C storefronts",
        description: "Complete shopping experiences with secure checkouts and inventory tracking.",
        items: ["Integrated payment gateways", "Order notification emails & SMS", "Inventory management", "Mobile-optimised checkout flow"],
      },
      {
        title: "Focused landing pages",
        description: "High-impact single-page experiences built around a single clear call-to-action.",
        items: ["Headline & offer architecture", "Fast-loading media assets", "Lead qualification forms", "Analytics event tracking"],
      },
    ],
    typicalDeliverables: [
      "Custom responsive website (Desktop, Tablet, Mobile)",
      "Interactive enquiry form with direct email & WhatsApp routing",
      "Essential on-page SEO setup (meta titles, descriptions, OpenGraph tags, sitemap)",
      "SSL certificate configuration & secure HTTPS deployment",
      "Full source code ownership and hosting account access",
      "Post-launch warranty check and orientation walkthrough",
    ],
    caseStudySlugs: ["reraproperty", "dnyanpath", "sioura"],
    processAndDependencies: {
      steps: [
        { number: "01", title: "Discovery & Structure", detail: "We discuss your target audience, required pages, and draft a clear site map." },
        { number: "02", title: "Design & Content Review", detail: "We review wireframes, visual styling, and content drafts before starting development." },
        { number: "03", title: "Development & Testing", detail: "We build clean, responsive pages and test extensively across phones and desktop browsers." },
        { number: "04", title: "Launch & Training", detail: "We connect your custom domain, verify forms and analytics, and hand over access." },
      ],
      dependencies: [
        "Company logo and brand guidelines (if available)",
        "High-resolution photos of products, work or premises",
        "Written copy or bullet points regarding your services",
        "Domain name DNS access for launch deployment",
      ],
    },
    costAndTimingFactors: [
      { factor: "Number of unique templates", explanation: "A 5-page business site takes less time than a 25-page multi-category catalogue." },
      { factor: "E-commerce & payment gateways", explanation: "Product variations, shipping rules, and payment integration add implementation steps." },
      { factor: "Content readiness", explanation: "Having your text and photos ready significantly shortens the project timeline." },
      { factor: "Third-party integrations", explanation: "Connecting CRMs, custom databases or booking engines requires specific API configuration." },
    ],
    faqs: [
      {
        question: "Will my website look good on mobile phones?",
        answer: "Yes, absolutely. Over 70% of web traffic is mobile. We design for smartphones first, ensuring fast tap targets, readable text, and fast load speeds.",
      },
      {
        question: "Can visitors contact me directly via WhatsApp?",
        answer: "Yes. We can integrate smart WhatsApp buttons that open a pre-filled message with the visitor's page context directly into your business WhatsApp number.",
      },
      {
        question: "Who owns the website and domain after completion?",
        answer: "You own 100% of your website, code, and accounts. We deploy directly to your preferred hosting or hand over the full project repository.",
      },
      {
        question: "Can you help update our existing website without starting from zero?",
        answer: "Yes. If your current platform allows modifications, we can review the existing codebase or theme to improve design, responsiveness, or conversion rate.",
      },
    ],
  },

  "app-software-development": {
    slug: "app-software-development",
    name: "App & Software Development",
    shortTagline: "Build a product for your customers or a system that helps your team work better.",
    heroHeadline: "Custom web applications and internal tools designed for how your business operates.",
    heroSubtitle: "We build reliable web portals, mobile apps, and administrative dashboards that replace messy spreadsheets and help your business scale efficiently.",
    whoIsThisFor: {
      summary: "Designed for business owners, founders, and operations leaders who have outgrown generic off-the-shelf software.",
      points: [
        {
          title: "Distributors & wholesale traders",
          detail: "Businesses needing dedicated trader portals for order tracking, stock allocation, and credit balance records.",
        },
        {
          title: "Startup founders & MVP creators",
          detail: "Entrepreneurs needing a working software product with real database logic, user authentication, and payments launched on a clear timeline.",
        },
        {
          title: "Service companies & agencies",
          detail: "Firms needing customer-facing portals where clients can log in, view project status, download invoices, and submit requests.",
        },
        {
          title: "Schools, coaching & training institutes",
          detail: "Organisations needing attendance tracking, fee management, study material distribution, and multi-role access.",
        },
      ],
    },
    problemsSolved: [
      {
        title: "Off-the-shelf software doesn't fit your workflow",
        description: "Generic SaaS tools often charge expensive recurring fees per user while forcing you into rigid processes. Custom software matches your exact business rules.",
      },
      {
        title: "Critical data scattered across dozens of spreadsheets",
        description: "Excel sheets get overwritten, lack access control, and don't provide real-time status. We centralise records in a secure database.",
      },
      {
        title: "Customers constantly asking for order & billing updates",
        description: "A customer portal gives clients 24/7 self-service access to invoices, quotations, and shipment statuses, reducing phone call volume.",
      },
      {
        title: "Lack of granular user permissions",
        description: "We configure strict role-based access control (Admin, Manager, Staff, Customer) so team members only see what they are authorised to access.",
      },
    ],
    whatWeCanBuild: [
      {
        title: "Distributor & trader portals",
        description: "Secure B2B portals for dealers to view price lists, check live inventory, and place bulk orders.",
        items: ["Role-based access", "Credit ledger and balance tracking", "Invoice and quotation generation", "Order status tracking"],
      },
      {
        title: "Custom operations dashboards",
        description: "Centralised web software to manage field staff, jobs, customer support tickets, or warehouse operations.",
        items: ["Real-time data reporting", "Task assignment and audit trails", "Exportable PDF and Excel reports", "Search and filtering"],
      },
      {
        title: "Startup MVPs (Minimum Viable Products)",
        description: "Production-ready web and mobile applications designed to validate a business model with real paying users.",
        items: ["User authentication (Email, Phone OTP, Google)", "Payment gateway integration", "Interactive dashboards", "Scalable cloud database"],
      },
      {
        title: "Customer-facing web applications",
        description: "Self-service web apps allowing your customers to book appointments, upload documents, and track service history.",
        items: ["Clean mobile-friendly UI", "SMS / WhatsApp status alerts", "Document upload and verification", "Secure profile management"],
      },
    ],
    typicalDeliverables: [
      "Full web application codebase with modern frontend and robust backend",
      "Relational database schema (PostgreSQL / MySQL) with automated backups",
      "Authentication and role-based authorization system",
      "Production deployment to cloud infrastructure (Vercel, AWS, or your chosen server)",
      "Administrator user guide and database handover documentation",
      "Initial post-launch warranty and bug-fix support",
    ],
    caseStudySlugs: ["audiotonic", "bizflow", "edumanage"],
    processAndDependencies: {
      steps: [
        { number: "01", title: "Workflow Scoping", detail: "We map out user roles, data fields, screen flows, and business rules in detail." },
        { number: "02", title: "Architecture & Wireframing", detail: "We design database schemas and interactive screen layouts for your review." },
        { number: "03", title: "Iterative Development", detail: "We build in modular milestones, demonstrating working software at each stage." },
        { number: "04", title: "Testing, Deployment & Handover", detail: "We test edge cases, configure security rules, and train your administrative team." },
      ],
      dependencies: [
        "Documented business workflow or sample spreadsheets currently in use",
        "Defined user roles (e.g., Administrator, Sales Rep, Customer)",
        "API credentials for external services (SMS gateways, payment processors)",
        "Cloud hosting account or preference for deployment",
      ],
    },
    costAndTimingFactors: [
      { factor: "Workflow complexity & role count", explanation: "Software with 4 distinct user roles and approval hierarchies requires more testing than a single-admin portal." },
      { factor: "Data migration needs", explanation: "Migrating historical records from existing legacy software or spreadsheets requires validation scripts." },
      { factor: "Mobile app vs. responsive web app", explanation: "A progressive web app (PWA) is often faster and more cost-effective to launch than maintaining separate iOS/Android app store packages." },
      { factor: "Payment and financial integrations", explanation: "Automated billing, reconciliation, and GST invoice generation involve precise compliance logic." },
    ],
    faqs: [
      {
        question: "Can our staff access the application from mobile phones?",
        answer: "Yes. All web applications we build are responsive and touch-optimised, allowing your field staff or managers to view and update data from any smartphone or tablet.",
      },
      {
        question: "Is our business data secure and confidential?",
        answer: "Yes. We implement industry-standard encryption, secure session handling, role-based database constraints, and do not share or expose your proprietary business data.",
      },
      {
        question: "Can the application integrate with Tally or existing accounting tools?",
        answer: "Yes. Depending on your accounting software setup, we can build export routines (XML, CSV) or direct API sync connections for orders and ledgers.",
      },
      {
        question: "Do we have to pay recurring monthly license fees to DataBuks?",
        answer: "No. Unlike SaaS platforms, DataBuks builds custom software where you own the intellectual property. You only pay standard third-party server hosting costs.",
      },
    ],
  },

  "business-automation": {
    slug: "business-automation",
    name: "Business Automation",
    shortTagline: "Connect your tools and reduce repetitive steps across sales and operations.",
    heroHeadline: "Connect your tools so routine business work happens automatically.",
    heroSubtitle: "Stop copy-pasting customer details across spreadsheets, messaging apps, and accounting software. We build reliable automations that keep your team coordinated.",
    whoIsThisFor: {
      summary: "For businesses that spend hours every week manually updating records, sending status messages, or following up on enquiries.",
      points: [
        {
          title: "Sales teams receiving online leads",
          detail: "Businesses receiving enquiries from Meta Ads, Google Ads, or their website that need instant WhatsApp alerts and CRM logging.",
        },
        {
          title: "Distributors and logistics operators",
          detail: "Teams coordinating dispatches where warehouse, sales representatives, and customers all need automated dispatch notifications.",
        },
        {
          title: "Service and repair providers",
          detail: "Companies needing automated service due dates, customer reminders, and internal technician assignments.",
        },
        {
          title: "Finance & operations managers",
          detail: "Organisations requiring weekly summary digests, inventory warning triggers, and automated PDF invoice generation.",
        },
      ],
    },
    problemsSolved: [
      {
        title: "Slow response times to new customer enquiries",
        description: "When enquiries sit in an email inbox for hours, lead conversion drops. Automations can instantly notify sales staff on WhatsApp and send the customer an acknowledgment.",
      },
      {
        title: "Manual data entry errors",
        description: "Typing customer phone numbers or invoice totals across three different systems inevitably causes typos. Connected APIs eliminate duplicate entry.",
      },
      {
        title: "Forgot follow-ups and missed renewal dates",
        description: "Scheduled automation rules keep track of payment deadlines, subscription renewals, or inspection dates automatically.",
      },
      {
        title: "Managers spending hours assembling reports",
        description: "Automated aggregation scripts can gather daily sales numbers and email an executive summary every evening without human intervention.",
      },
    ],
    whatWeCanBuild: [
      {
        title: "Instant lead capture & distribution",
        description: "Capture enquiries from websites, forms, and ad campaigns directly into your CRM or Google Sheets with instant staff notifications.",
        items: ["Multi-channel lead ingestion", "WhatsApp / Telegram alerts to sales reps", "Deduplication and validation", "Automated customer welcome message"],
      },
      {
        title: "Order & dispatch notifications",
        description: "Trigger transactional WhatsApp and SMS updates whenever an order status changes in your system.",
        items: ["Official WhatsApp Business API integration", "Real-time tracking links", "Automated invoice PDF delivery", "Delivery confirmation logging"],
      },
      {
        title: "Internal operations & task workflows",
        description: "Coordinate team activities when milestones are reached.",
        items: ["Project task assignment upon payment receipt", "Inventory threshold warning alerts", "Customer document collection workflows", "Automated daily task digests"],
      },
      {
        title: "Automated business reporting",
        description: "Scheduled data pipelines that extract key numbers from databases and deliver clear summaries.",
        items: ["Daily / weekly revenue snapshots", "Outstanding receivables reminders", "Google Sheets synchronization", "Scheduled email summaries"],
      },
    ],
    typicalDeliverables: [
      "Configured automation workflows with clear error-handling rules",
      "API webhook connections between your forms, CRM, sheets, and messaging platforms",
      "WhatsApp Business API message template setup and verification guidance",
      "Process flow diagram showing exactly how data travels between your tools",
      "Administrator testing and failure-recovery documentation",
      "Post-deployment monitoring window to verify reliable execution",
    ],
    caseStudySlugs: ["bizflow", "audiotonic"],
    processAndDependencies: {
      steps: [
        { number: "01", title: "Workflow Audit", detail: "We map every manual step your team currently takes between different tools." },
        { number: "02", title: "Integration Blueprint", detail: "We verify API support for each software tool and define trigger-action rules." },
        { number: "03", title: "Building & Sandbox Testing", detail: "We build the connectors with error fallbacks and run test cases with sample data." },
        { number: "04", title: "Live Activation & Monitoring", detail: "We switch to live data, verify real transactions, and monitor execution logs." },
      ],
      dependencies: [
        "Admin access to the accounts being connected (CRM, Google Workspace, WhatsApp, etc.)",
        "Approved WhatsApp Business API account (if using official messaging)",
        "Sample records representing common transactions and edge cases",
      ],
    },
    costAndTimingFactors: [
      { factor: "Availability of modern APIs", explanation: "Tools with standard webhooks and REST APIs connect quickly; older legacy software may require custom intermediate scripts." },
      { factor: "Number of connecting systems", explanation: "Connecting 2 tools (e.g. Website to Google Sheets & WhatsApp) is faster than a 6-system multi-stage pipeline." },
      { factor: "Error handling & retry logic", explanation: "Mission-critical financial pipelines need robust retry logic and alert notifications in case a third-party server temporarily drops." },
      { factor: "Messaging volume & API fees", explanation: "WhatsApp and SMS providers charge per-message fees that are paid directly to the service provider." },
    ],
    faqs: [
      {
        question: "What happens if a third-party tool goes down temporarily?",
        answer: "We build automated error-handling and retry queues. If an external service experiences brief downtime, the system retries or flags the record for administrator review so no data is lost.",
      },
      {
        question: "Can we use WhatsApp for automated messages?",
        answer: "Yes, using the official WhatsApp Business Platform (via Meta Cloud API or verified providers like Gupshup/Wati). This ensures compliance with Meta's policies and prevents account bans.",
      },
      {
        question: "Do we have to replace our current software?",
        answer: "In most cases, no. The entire purpose of business automation is to connect the tools you already use, allowing you to get more value out of your existing investments.",
      },
      {
        question: "How do we make changes if our process changes later?",
        answer: "We document the flow clearly and build modular pipelines. When your process evolves, updating trigger rules or adding new notification recipients is straightforward.",
      },
    ],
  },

  "ai-agents": {
    slug: "ai-agents",
    name: "AI Agents & Integrations",
    shortTagline: "Add useful AI capabilities to your business workflows, with clear boundaries and human handover.",
    heroHeadline: "Practical AI features that help your team work faster, not science fiction.",
    heroSubtitle: "We integrate focused AI capabilities into your software—like automated enquiry qualification, document analysis, and knowledge assistants—always designed with clear safeguards and human oversight.",
    whoIsThisFor: {
      summary: "For businesses looking to apply artificial intelligence pragmatically to solve real operational bottlenecks.",
      points: [
        {
          title: "Customer support & enquiry teams",
          detail: "Businesses receiving repetitive questions about product catalogues, operating hours, service coverage, or standard pricing.",
        },
        {
          title: "Service firms with internal knowledge bases",
          detail: "Teams with extensive manuals, policy documents, or product specifications who spend too much time searching through PDFs.",
        },
        {
          title: "High-volume enquiry businesses",
          detail: "Firms needing an intelligent first filter to collect project requirements, budget, and location before routing leads to human consultants.",
        },
        {
          title: "Operational teams processing invoices & forms",
          detail: "Back-office teams needing to extract structured details from scanned bills, purchase orders, or customer submissions.",
        },
      ],
    },
    problemsSolved: [
      {
        title: "Staff wasting hours answering the same 10 questions",
        description: "An AI assistant trained strictly on your approved business documentation can answer standard inquiries accurately 24/7.",
      },
      {
        title: "Hallucinations and unpredictable answers",
        description: "Generic AI chatbots can make up false claims. We build retrieval-augmented systems that answer ONLY from your verified business materials with strict fallback instructions.",
      },
      {
        title: "Lack of human escalation when an enquiry gets serious",
        description: "AI should never trap a customer. We build instant human handover triggers whenever a customer requests a person or asks a high-stakes question.",
      },
      {
        title: "Manual data extraction from PDFs and documents",
        description: "AI vision and language models can accurately pull key figures, addresses, and line items from incoming documents directly into your database.",
      },
    ],
    whatWeCanBuild: [
      {
        title: "Internal knowledge assistants (RAG)",
        description: "A secure search and chat assistant for your internal team that answers questions directly from your company's SOPs, manuals, and documents.",
        items: ["Document indexing & semantic search", "Strict source citation on every answer", "Private data isolation (never shared to train public models)", "User role permissions"],
      },
      {
        title: "Automated enquiry qualification & triage",
        description: "An intelligent conversational agent on your website or WhatsApp that gathers customer requirements before routing to your sales team.",
        items: ["Friendly requirements gathering", "Budget and timeline qualification", "Instant routing to assigned sales rep", "Clear human escalation button"],
      },
      {
        title: "Document analysis & data extraction",
        description: "Automated extraction of structured information from invoices, receipts, and client forms.",
        items: ["PDF and image OCR parsing", "Structured JSON extraction into databases", "Validation checks against known rules", "Exception flagging for manual review"],
      },
      {
        title: "Automated content & summary generation",
        description: "Tools that assist staff by drafting standard customer email replies, meeting summaries, or case notes based on structured inputs.",
        items: ["Standardised draft generation", "Human-in-the-loop approval interface", "Brand tone enforcement", "Time savings on repetitive writing"],
      },
    ],
    typicalDeliverables: [
      "Secure AI integration pipeline connecting your database/docs to vetted AI models",
      "Retrieval-Augmented Generation (RAG) architecture with accurate embeddings and search",
      "Rigid safety guardrails, prompt boundaries, and fallback mechanisms",
      "User interface (chat widget, internal dashboard, or WhatsApp connector)",
      "API usage monitoring and cost management controls",
      "Staff training on operating and maintaining the knowledge base",
    ],
    caseStudySlugs: ["lovewithtrade", "bizflow"],
    processAndDependencies: {
      steps: [
        { number: "01", title: "Feasibility & Use-Case Definition", detail: "We identify specific, bounded tasks where AI delivers real measurable value without unnecessary risk." },
        { number: "02", title: "Data Preparation & Guardrails", detail: "We curate your reference documents, write strict system prompts, and establish fallback rules." },
        { number: "03", title: "Prototype & Evaluation", detail: "We benchmark responses against real-world test cases to ensure accuracy and eliminate hallucinations." },
        { number: "04", title: "Integration & Human Handover", detail: "We connect the solution into your live interface with smooth human escalation paths." },
      ],
      dependencies: [
        "Organised, verified business reference material (PDFs, FAQs, product sheets)",
        "API accounts with vetted model providers (e.g. OpenAI, Anthropic, or Google Cloud)",
        "Designated team member to review test answers during calibration",
      ],
    },
    costAndTimingFactors: [
      { factor: "Data preparation & curation", explanation: "AI outputs are only as reliable as your input documentation. Well-organised FAQs and manuals streamline development." },
      { factor: "Safety guardrails & testing iterations", explanation: "Customer-facing agents require rigorous testing across hundreds of edge-case prompts before deployment." },
      { factor: "Model inference token costs", explanation: "AI providers bill per token (usage volume). We architect caching and concise prompts to keep ongoing operating costs minimal." },
      { factor: "Hosting & vector database needs", explanation: "Storing and searching through thousands of pages of documents requires dedicated vector storage infrastructure." },
    ],
    faqs: [
      {
        question: "Will the AI make up false information (hallucinate)?",
        answer: "We design retrieval-augmented generation (RAG) systems that force the model to answer ONLY based on your approved reference documents. If the answer is not in your documents, it is instructed to say so and offer human support.",
      },
      {
        question: "Is our proprietary company data used to train public AI models?",
        answer: "No. We utilise commercial API endpoints with explicit enterprise privacy guarantees where your data is not retained or used for model training.",
      },
      {
        question: "Can customers easily speak to a human instead?",
        answer: "Always. Every customer-facing assistant we build includes a persistent option to transfer the conversation directly to a team member or WhatsApp chat.",
      },
      {
        question: "What are the ongoing costs of running an AI feature?",
        answer: "Ongoing costs include model API consumption (tokens) and vector database hosting. For most SME workloads, monthly API costs remain very modest (often under a few thousand rupees), and we implement spend caps to avoid unexpected charges.",
      },
    ],
  },
};

