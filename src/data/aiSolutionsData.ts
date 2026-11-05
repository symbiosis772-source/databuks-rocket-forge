export type SolutionCategory = "RAG & Knowledge" | "AI Agents" | "Automation";

export interface SolutionStep {
  name: string;
  type: "input" | "ai" | "deterministic" | "human" | "output";
  detail?: string;
}

export interface AiSolution {
  id: string;
  slug: string;
  name: string;
  category: SolutionCategory;
  problem: string;
  solution: string;
  shortExplanation: string;
  workflowSummary: string;
  steps: SolutionStep[];
  whoIsThisFor: string;
  requiredAccess: string[];
  expectedDeliverables: string[];
  limitationsAndReview: string;
}

export const aiSolutionsData: AiSolution[] = [
  // ----------------------------------------------------
  // 1. RAG & Knowledge Solutions
  // ----------------------------------------------------
  {
    id: "company-knowledge-assistant",
    slug: "company-knowledge-assistant",
    name: "Company Knowledge Assistant",
    category: "RAG & Knowledge",
    problem: "Useful information is spread across documents and internal guides.",
    solution: "A searchable assistant that retrieves relevant material from approved company sources and supports answers with references.",
    shortExplanation: "Indexes your approved company manuals, guides, and wikis to answer internal staff questions with direct citations.",
    workflowSummary: "Question → Permitted documents → Relevant passages → Answer with sources",
    steps: [
      { name: "Staff Question", type: "input", detail: "Query received via internal web app or Slack" },
      { name: "Permitted Documents", type: "deterministic", detail: "Role-gated vector database lookup" },
      { name: "Relevant Passages", type: "ai", detail: "Semantic similarity retrieval & re-ranking" },
      { name: "Answer with Sources", type: "output", detail: "Grounded response with verified page links" },
    ],
    whoIsThisFor: "Growing businesses, distributed teams, and operations departments managing extensive documentation across Drive, Notion, and internal PDFs.",
    requiredAccess: [
      "Read-only access to approved knowledge repositories (Google Drive, Notion, Confluence, or PDF folder)",
      "User role definitions for permission-gated documents",
      "List of approved document owners for clarification routing",
    ],
    expectedDeliverables: [
      "Custom semantic retrieval pipeline and vector indexing",
      "Role-based access control (RBAC) ensuring users only query authorized documents",
      "Conversational search interface or workspace integration",
      "Citation generator linking answers directly to source pages",
    ],
    limitationsAndReview: "Answers are strictly grounded in indexed materials. When information is absent or conflicting, the assistant explicitly states it cannot answer and suggests the designated document owner.",
  },
  {
    id: "customer-support-knowledge-assistant",
    slug: "customer-support-knowledge-assistant",
    name: "Customer Support Knowledge Assistant",
    category: "RAG & Knowledge",
    problem: "Support teams repeatedly search product documentation and FAQs.",
    solution: "Help staff or customers find information from an approved support knowledge base, with escalation when an answer is unavailable.",
    shortExplanation: "Assists support agents or self-service visitors with verified answers from your official support documentation and articles.",
    workflowSummary: "Question → Support knowledge → Referenced answer → Human escalation",
    steps: [
      { name: "Customer Query", type: "input", detail: "Inquiry via portal, email, or messaging" },
      { name: "Support Knowledge", type: "deterministic", detail: "Indexed against public help guides & FAQs" },
      { name: "Referenced Answer", type: "ai", detail: "Clear solution drafted with help center link" },
      { name: "Human Escalation", type: "human", detail: "1-click pass to staff if unresolved" },
    ],
    whoIsThisFor: "Customer success teams, tier-1 technical support desks, and high-volume customer portals seeking faster response times without losing accuracy.",
    requiredAccess: [
      "Official customer-facing help articles, FAQs, and product guides",
      "Helpdesk platform webhook (Zendesk, Freshdesk, Intercom, or custom API)",
      "Escalation routing endpoints for on-duty support staff",
    ],
    expectedDeliverables: [
      "Knowledge ingestion pipeline for public and internal support guides",
      "Customer Q&A interface with source article links",
      "Confidence score evaluation that flags edge cases",
      "Smooth human escalation handover preserving chat history",
    ],
    limitationsAndReview: "The assistant does not execute account changes, refunds, or system overrides. Queries below confidence thresholds are handed off to human staff immediately.",
  },
  {
    id: "product-technical-documentation-assistant",
    slug: "product-technical-documentation-assistant",
    name: "Product & Technical Documentation Assistant",
    category: "RAG & Knowledge",
    problem: "Teams struggle to locate the right product specifications or technical instructions.",
    solution: "Retrieve relevant sections from manuals and documentation, with links back to the source material.",
    shortExplanation: "Extracts exact clauses, tolerance tables, and installation instructions from technical manuals and schematics.",
    workflowSummary: "Technical question → Documentation retrieval → Relevant guidance → Source links",
    steps: [
      { name: "Technical Question", type: "input", detail: "Parameter, error code, or installation check" },
      { name: "Doc Retrieval", type: "deterministic", detail: "Query matched across product version datasheets" },
      { name: "Relevant Guidance", type: "ai", detail: "Passage synthesis with formula and diagram notes" },
      { name: "Source Links", type: "output", detail: "Direct citation to specific manual page/clause" },
    ],
    whoIsThisFor: "Field technicians, implementation partners, hardware distributors, and engineering teams handling deep technical libraries.",
    requiredAccess: [
      "Technical datasheets, API documentation, installation guides, and PDF manuals",
      "Product SKU or version matrix for accurate document matching",
    ],
    expectedDeliverables: [
      "Table-aware and diagram-aware PDF parsing pipeline",
      "Multi-version document support to avoid obsolete instructions",
      "Exact page/clause deep-link generation",
      "Exportable answers for client maintenance logs",
    ],
    limitationsAndReview: "Provides guidance and pointers to source materials; does not replace formal engineering sign-off, safety certifications, or certified professional assessment.",
  },
  {
    id: "policy-onboarding-assistant",
    slug: "policy-onboarding-assistant",
    name: "Policy & Onboarding Assistant",
    category: "RAG & Knowledge",
    problem: "Employees repeatedly ask where to find internal policies and onboarding guidance.",
    solution: "Provide answers grounded in approved policy documents, respecting access permissions and document versions.",
    shortExplanation: "Guides new hires and staff through company handbooks, leave policies, and standard operating procedures with complete auditability.",
    workflowSummary: "Employee question → Authorised policies → Referenced answer → Team contact if needed",
    steps: [
      { name: "Employee Question", type: "input", detail: "Inquiry about benefits, expenses, or SOPs" },
      { name: "Authorised Policies", type: "deterministic", detail: "Filtered by employee location and role" },
      { name: "Referenced Answer", type: "ai", detail: "Grounded quote with handbook version" },
      { name: "Team Contact", type: "human", detail: "Direct contact info for relevant HR/Ops lead" },
    ],
    whoIsThisFor: "People operations, HR leads, and growing teams onboarding staff across multiple functions, offices, or remote locations.",
    requiredAccess: [
      "Approved company policies, handbook PDFs, and onboarding curriculum",
      "Role-level permission rules (e.g. standard staff vs. manager policies)",
      "Designated HR/Operations point-of-contact directory",
    ],
    expectedDeliverables: [
      "Permission-aware policy ingestion and version control indexing",
      "Conversational employee portal interface",
      "Version tracking to ensure answers never cite retired handbooks",
      "Escalation buttons to message department coordinators",
    ],
    limitationsAndReview: "Configurable solution for informational orientation. Does not constitute legal advice or replace formal HR consultations for sensitive personnel issues.",
  },

  // ----------------------------------------------------
  // 2. AI Agents Solutions
  // ----------------------------------------------------
  {
    id: "sales-enquiry-assistant",
    slug: "sales-enquiry-assistant",
    name: "Sales Enquiry Assistant",
    category: "AI Agents",
    problem: "High volume of inbound enquiries with uneven qualification and slow routing.",
    solution: "Collect agreed enquiry details, answer approved questions and route the conversation to the appropriate team.",
    shortExplanation: "Engages website visitors, collects essential scope details, answers approved business FAQs, and delivers structured leads.",
    workflowSummary: "Inbound query → Detail collection & qualification → Approved FAQs → Structured handoff to sales team",
    steps: [
      { name: "Inbound Query", type: "input", detail: "Visitor initiates conversation on website or chat" },
      { name: "Detail Collection", type: "ai", detail: "Gathers requirements, timeline, and company profile" },
      { name: "Approved FAQs", type: "ai", detail: "Answers routine questions within strict boundaries" },
      { name: "Structured Handoff", type: "human", detail: "Qualified lead sent to CRM/WhatsApp for rep follow-up" },
    ],
    whoIsThisFor: "B2B companies, agencies, equipment distributors, and consulting firms looking to capture and qualify prospective clients 24/7.",
    requiredAccess: [
      "Approved company capability briefs, service catalogues, and pricing policies",
      "Lead qualification criteria (required fields, qualifying budget or timeline thresholds)",
      "Target CRM or notification webhook (WhatsApp, Slack, HubSpot, or Email)",
    ],
    expectedDeliverables: [
      "Custom conversational agent tailored to your brand voice",
      "Guardrails preventing unsupported commitments or pricing promises",
      "Structured lead summary generation for rapid sales review",
      "Direct integration with your existing CRM or notification stream",
    ],
    limitationsAndReview: "Does not negotiate contracts or finalize agreements. Complex or non-standard inquiries are instantly routed with complete conversation history to sales representatives.",
  },
  {
    id: "appointment-coordination-agent",
    slug: "appointment-coordination-agent",
    name: "Appointment Coordination Agent",
    category: "AI Agents",
    problem: "Back-and-forth messaging to find mutual availability wastes administrative time.",
    solution: "Support scheduling requests through an approved calendar integration, with confirmation before bookings or changes where required.",
    shortExplanation: "Conversational agent that checks real-time calendar availability, proposes suitable slots, and confirms bookings with mutual sign-off.",
    workflowSummary: "Scheduling request → Calendar availability lookup → Slot proposal → User confirmation → Booking confirmation & reminder",
    steps: [
      { name: "Scheduling Request", type: "input", detail: "Customer asks to book, reschedule, or check times" },
      { name: "Calendar Lookup", type: "deterministic", detail: "Real-time query of team calendar availability" },
      { name: "Slot Proposal", type: "ai", detail: "Conversational presentation of open options" },
      { name: "Confirmation", type: "human", detail: "Explicit user verification before calendar write" },
    ],
    whoIsThisFor: "Professional service firms, clinics, executive recruiters, and sales development reps spending excessive hours coordinating appointments.",
    requiredAccess: [
      "Calendar API access (Google Calendar, Microsoft Outlook, or Cal.com)",
      "Business scheduling rules (buffer times, working hours, maximum meetings per day)",
      "SMS or WhatsApp notification service for booking confirmations",
    ],
    expectedDeliverables: [
      "Natural language date/time parsing agent",
      "Real-time calendar availability lookup preventing double-bookings",
      "Mandatory confirmation step prior to calendar event creation",
      "Automated calendar invites and reminder dispatches",
    ],
    limitationsAndReview: "Restricted strictly to defined availability windows. Rescheduling or cancellation requires customer verification, with human escalation when disputes occur.",
  },
  {
    id: "support-triage-agent",
    slug: "support-triage-agent",
    name: "Support Triage Agent",
    category: "AI Agents",
    problem: "Unsorted customer tickets create response bottlenecks and misallocated staff effort.",
    solution: "Categorise incoming requests, gather useful context and prepare or route tickets for staff.",
    shortExplanation: "Analyzes incoming support messages, classifies priority, collects missing diagnostic details, and routes to the right specialist.",
    workflowSummary: "Customer ticket/message → Intent & severity classification → Context enrichment → Routing to specialist team",
    steps: [
      { name: "Customer Ticket", type: "input", detail: "Incoming email, web ticket, or message" },
      { name: "Classification", type: "ai", detail: "Identifies category, urgency, and sentiment" },
      { name: "Context Enrichment", type: "deterministic", detail: "Fetches user account status & recent history" },
      { name: "Specialist Routing", type: "human", detail: "Assigned to appropriate team with summary" },
    ],
    whoIsThisFor: "Support managers and multi-tier customer operations teams seeking consistent prioritization and faster time-to-first-response.",
    requiredAccess: [
      "Helpdesk API (Zendesk, Freshdesk, Linear, Jira, or custom database)",
      "Classification taxonomy (categories, priority rules, department responsibilities)",
      "Customer account lookup API (optional, for tier-based routing)",
    ],
    expectedDeliverables: [
      "Multi-label classification and priority evaluation model",
      "Automated ticket tagging, field population, and routing rules",
      "Executive summary draft prepared for the assigned agent",
      "SLA monitoring triggers for urgent tickets",
    ],
    limitationsAndReview: "The triage agent assists staff by categorizing and preparing requests; it does not close high-priority tickets without human verification.",
  },
  {
    id: "document-processing-assistant",
    slug: "document-processing-assistant",
    name: "Document Processing Assistant",
    category: "AI Agents",
    problem: "Manual data entry from invoices, purchase orders, or reports is slow and prone to typographical errors.",
    solution: "Extract agreed fields from incoming documents, validate the structure and send uncertain cases for review.",
    shortExplanation: "Parses complex semi-structured PDFs and receipts, validates extracted numbers against schemas, and flags anomalies for human check.",
    workflowSummary: "Document ingest → OCR & structured parsing → Field validation & score check → Clean payload or human review exception",
    steps: [
      { name: "Document Ingest", type: "input", detail: "PDF, scan, or image upload" },
      { name: "Structured Parsing", type: "ai", detail: "Extracts key-value pairs & line items" },
      { name: "Validation Check", type: "deterministic", detail: "Mathematical & schema validation" },
      { name: "Review or Commit", type: "human", detail: "High-confidence auto-commit; exceptions to review" },
    ],
    whoIsThisFor: "Finance teams, freight forwarders, property administrators, and back-office operations processing repetitive vendor paperwork.",
    requiredAccess: [
      "Document ingestion endpoint (email inbox, cloud bucket, or manual upload UI)",
      "Target database or ERP destination schema",
      "Sample documents representing standard and edge-case variations",
    ],
    expectedDeliverables: [
      "Multi-page document parsing and schema extraction pipeline",
      "Deterministic data validation (math cross-checks, tax calculations, required fields)",
      "Confidence scoring per extracted field",
      "Lightweight human-in-the-loop review interface for exceptions",
    ],
    limitationsAndReview: "Low-confidence extractions or documents failing schema validation are automatically isolated for manual review before any database commit.",
  },

  // ----------------------------------------------------
  // 3. Automation Workflows Solutions
  // ----------------------------------------------------
  {
    id: "enquiry-to-crm",
    slug: "enquiry-to-crm",
    name: "Enquiry to CRM Pipeline",
    category: "Automation",
    problem: "Form submission leads sit unentered or delayed across disconnected tools.",
    solution: "Form submission → Validate details → Update CRM → Notify team",
    shortExplanation: "Deterministic automation that validates inbound form leads, enriches contact details, updates CRM, and notifies sales reps instantly.",
    workflowSummary: "Form submission → Validate details → Update CRM → Notify team",
    steps: [
      { name: "Form Submission", type: "input", detail: "User submits website enquiry form" },
      { name: "Validate Details", type: "deterministic", detail: "Cleans phone format, checks email MX record" },
      { name: "Update CRM", type: "deterministic", detail: "Upserts contact & creates deal in CRM" },
      { name: "Notify Team", type: "output", detail: "Instant WhatsApp or Slack alert with 1-tap reply" },
    ],
    whoIsThisFor: "Sales leaders and marketing teams that want instantaneous response times to incoming prospects with zero manual copy-pasting.",
    requiredAccess: [
      "Website form webhook or webhook-enabled contact endpoint",
      "CRM API key and custom field mapping (HubSpot, Zoho, Salesforce, or Airtable)",
      "Notification service credentials (WhatsApp Business Cloud API, Slack, or Email)",
    ],
    expectedDeliverables: [
      "Resilient webhook receiver with automated retry queue",
      "Sanitization logic for international and domestic phone numbers",
      "Duplicate lead prevention and history merging",
      "Instant team alert dispatch with structured summary",
    ],
    limitationsAndReview: "Deterministic workflow based on defined mapping rules. Unmapped custom fields require scope update. Integrations subject to third-party vendor API limits.",
  },
  {
    id: "support-request-routing",
    slug: "support-request-routing",
    name: "Support Request Routing",
    category: "Automation",
    problem: "Customer requests must be manually reassigned and tracked across shifts.",
    solution: "Incoming request → Classify → Assign team → Track status",
    shortExplanation: "Automatically routes tickets according to client tier, product line, and timezone availability, tracking SLA timers continuously.",
    workflowSummary: "Incoming request → Classify → Assign team → Track status",
    steps: [
      { name: "Incoming Request", type: "input", detail: "Customer email or support portal ticket" },
      { name: "Rule Classification", type: "deterministic", detail: "Matched by product line, SLA tier, & keywords" },
      { name: "Assign Team", type: "deterministic", detail: "Dispatched to on-call specialist queue" },
      { name: "Track Status", type: "output", detail: "Monitors SLA countdown & escalates if breached" },
    ],
    whoIsThisFor: "Multi-product businesses, managed service providers, and support operations managing tiered SLAs.",
    requiredAccess: [
      "Helpdesk API / shared inbox access",
      "Routing criteria ruleset and team shift roster",
      "SLA thresholds by customer subscription tier",
    ],
    expectedDeliverables: [
      "Rule-based routing engine with fallback general queue",
      "On-call rotation calendar integration",
      "Real-time SLA status tracking and alert triggers",
      "Daily unassigned ticket audit reports",
    ],
    limitationsAndReview: "Executes deterministic business logic. Tickets with novel edge-cases outside configured rules route to the primary team lead for manual assignment.",
  },
  {
    id: "document-intake",
    slug: "document-intake",
    name: "Automated Document Intake",
    category: "Automation",
    problem: "Incoming vendor PDFs and receipts require manual filing, renaming, and entry into internal databases.",
    solution: "Upload → Extract fields → Review exceptions → Update approved system",
    shortExplanation: "Monitors file inboxes or cloud dropboxes, verifies file integrity, applies standardized naming, and routes files to target systems.",
    workflowSummary: "Upload → Extract fields → Review exceptions → Update approved system",
    steps: [
      { name: "File Upload", type: "input", detail: "File arrives via email attachment, SFTP, or portal" },
      { name: "Field Extraction", type: "deterministic", detail: "Barcode / header extraction & checksum validation" },
      { name: "Review Exceptions", type: "human", detail: "Corrupted or non-standard files flagged for staff" },
      { name: "System Update", type: "output", detail: "Standardized archival & ERP record created" },
    ],
    whoIsThisFor: "Logistics coordinators, legal offices, property managers, and procurement teams processing hundreds of recurring documents.",
    requiredAccess: [
      "Input drop folder (Google Drive, AWS S3, Dropbox, or dedicated email inbox)",
      "File naming taxonomy and folder hierarchy rules",
      "Target storage and database endpoints",
    ],
    expectedDeliverables: [
      "Automated file watcher and ingestion worker",
      "File integrity and duplicate detection engine",
      "Standardized metadata tagging and directory filing",
      "Exception notification queue for unreadable documents",
    ],
    limitationsAndReview: "Deterministic file automation. Password-protected or damaged files are routed to an exception folder for manual team intervention.",
  },
  {
    id: "scheduled-business-reporting",
    slug: "scheduled-business-reporting",
    name: "Scheduled Business Reporting",
    category: "Automation",
    problem: "Managers spend hours compiling weekly summaries from disparate databases and spreadsheets.",
    solution: "Approved data sources → Prepare report → Review where needed → Deliver summary",
    shortExplanation: "Aggregates key metrics from your database, payment gateway, and CRM, delivering an executive summary to WhatsApp or email on schedule.",
    workflowSummary: "Approved data sources → Prepare report → Review where needed → Deliver summary",
    steps: [
      { name: "Approved Data Sources", type: "input", detail: "Scheduled trigger queries SQL, CRM, & analytics" },
      { name: "Prepare Report", type: "deterministic", detail: "Calculates KPIs, growth rates, & anomaly checks" },
      { name: "Review where needed", type: "human", detail: "Draft review step for sensitive executive numbers" },
      { name: "Deliver Summary", type: "output", detail: "Delivered via executive email or WhatsApp digest" },
    ],
    whoIsThisFor: "Business owners, chief operating officers, and department heads who need dependable operational visibility without manual spreadsheet gymnastics.",
    requiredAccess: [
      "Read-only credentials to primary database (PostgreSQL, MySQL, Supabase)",
      "Analytics or payment gateway read-only API access",
      "Delivery endpoint (recipient email list or executive WhatsApp group)",
    ],
    expectedDeliverables: [
      "Scheduled reporting cron worker with failure alert monitor",
      "SQL aggregation queries and data sanity checks",
      "Clean mobile-responsive HTML/PDF report template",
      "Executive summary snippet formatted for quick mobile reading",
    ],
    limitationsAndReview: "Dependent on primary database uptime and schema stability. Out-of-bounds metrics (e.g. 10x deviation) trigger a data-verification warning before delivery.",
  },
];
