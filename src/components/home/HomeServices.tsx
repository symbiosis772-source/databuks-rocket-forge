import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HomeServices: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Websites & E-commerce",
      slug: "website-development",
      path: "/services/website-development",
      explanation: "Clean, responsive websites engineered to establish authority and convert visitors into qualified business enquiries.",
      examples: [
        "Corporate & industrial marketing sites",
        "Product catalogues with WhatsApp inquiry flows",
        "E-commerce stores with automated order notifications",
      ],
    },
    {
      number: "02",
      title: "Apps & Custom Software",
      slug: "app-software-development",
      path: "/services/app-software-development",
      explanation: "Tailored web applications and portals that solve operational bottlenecks or turn new business concepts into working MVPs.",
      examples: [
        "Internal staff dashboards & distributor portals",
        "Inventory, booking and operations management tools",
        "Early-stage SaaS and digital product MVPs",
      ],
    },
    {
      number: "03",
      title: "Automation & Integrations",
      slug: "business-automation",
      path: "/services/business-automation",
      explanation: "Connect your existing software stack so data moves smoothly between CRM, spreadsheets, accounting, and messaging.",
      examples: [
        "Automated WhatsApp Business notifications",
        "Lead capture to CRM & Google Sheets pipelines",
        "Payment reconciliation & automated invoicing alerts",
      ],
    },
    {
      number: "04",
      title: "AI Agents & Features",
      slug: "ai-agents",
      path: "/services/ai-agents",
      explanation: "Practical conversational and automated triage tools built directly into your everyday business workflows with clear human oversight.",
      examples: [
        "Customer inquiry triage and qualification bots",
        "Internal knowledge base search & document summarization",
        "Structured routing with immediate handover to human staff",
      ],
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#DDDCD4]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading, Context & Original Line Illustration */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A43F2B] block">
                Engineering Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#242621]">
                Useful technology. Built around your business.
              </h2>
              <p className="text-base sm:text-lg text-[#62665E] leading-relaxed pt-1">
                Whether you need a polished web presence, custom internal software or automated pipelines, we deliver practical systems shaped around the real way your company works.
              </p>
            </div>

            {/* Original Technical Line Illustration */}
            <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#62665E] uppercase tracking-wider">
                <span>Architecture Blueprint</span>
                <span className="text-[#A43F2B]">Direct Engineering</span>
              </div>
              <svg
                viewBox="0 0 320 120"
                className="w-full h-auto text-[#242621]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Node 1: Web Interface */}
                <rect x="10" y="20" width="70" height="70" rx="8" className="stroke-[#242621] fill-white" />
                <line x1="20" y1="35" x2="65" y2="35" className="stroke-[#DDDCD4]" />
                <line x1="20" y1="48" x2="55" y2="48" className="stroke-[#DDDCD4]" />
                <line x1="20" y1="60" x2="60" y2="60" className="stroke-[#DDDCD4]" />
                <circle cx="25" cy="75" r="3" className="fill-[#A43F2B] stroke-[#A43F2B]" />
                <text x="34" y="78" fontSize="8" className="fill-[#242621] stroke-none font-sans font-medium">UI / Portal</text>

                {/* Connecting Line 1 */}
                <path d="M80 55 H125" className="stroke-[#A43F2B]" strokeDasharray="3 3" />
                <polygon points="125,52 130,55 125,58" className="fill-[#A43F2B] stroke-[#A43F2B]" />

                {/* Node 2: Logic & Automations */}
                <rect x="130" y="15" width="80" height="80" rx="8" className="stroke-[#242621] fill-white" />
                <circle cx="170" cy="45" r="14" className="stroke-[#A43F2B]" />
                <path d="M170 37 V45 H177" className="stroke-[#A43F2B]" />
                <text x="145" y="75" fontSize="8" className="fill-[#242621] stroke-none font-sans font-medium">Core Logic</text>

                {/* Connecting Line 2 */}
                <path d="M210 55 H245" className="stroke-[#A43F2B]" strokeDasharray="3 3" />
                <polygon points="245,52 250,55 245,58" className="fill-[#A43F2B] stroke-[#A43F2B]" />

                {/* Node 3: Database & Integrations */}
                <rect x="250" y="20" width="60" height="70" rx="8" className="stroke-[#242621] fill-white" />
                <ellipse cx="280" cy="38" rx="18" ry="6" className="stroke-[#62665E]" />
                <path d="M262 38 V65 C262 68 298 68 298 65 V38" className="stroke-[#62665E]" />
                <text x="260" y="78" fontSize="8" className="fill-[#242621] stroke-none font-sans font-medium">Database</text>
              </svg>
              <p className="text-[11px] text-[#62665E] leading-relaxed">
                Every project is architected with clear boundaries, modular components, and full source code handover.
              </p>
            </div>

            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#A43F2B] hover:text-[#8C3423] group"
              >
                <span>Read detailed service descriptions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Numbered Service Rows with Thin Dividers */}
          <div className="lg:col-span-7 divide-y divide-[#DDDCD4]">
            {services.map((item) => (
              <div
                key={item.number}
                className="py-7 md:py-8 first:pt-0 last:pb-0 group transition-all"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-[#A43F2B]">
                    {item.number}
                  </span>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#62665E] hover:text-[#A43F2B] transition-colors"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#242621] tracking-tight mt-2 mb-2.5">
                  <Link
                    to={item.path}
                    className="hover:text-[#A43F2B] transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-[15px] text-[#62665E] leading-relaxed mb-4">
                  {item.explanation}
                </p>

                {/* Practical Examples */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#62665E] block">
                    Common implementations:
                  </span>
                  <ul className="space-y-1 text-xs sm:text-sm text-[#242621]">
                    {item.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B] shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
