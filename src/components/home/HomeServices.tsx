import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Layers,
  Workflow,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Smartphone,
  Database,
  UserCheck,
  Send,
} from "lucide-react";

export const HomeServices: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Website Development",
      slug: "website-development",
      path: "/services/website-development",
      explanation: "Help customers understand your business and take the next step.",
      examples: [
        "Business websites and digital catalogues",
        "Online stores and enquiry landing pages",
      ],
      // Handcrafted SVG/HTML visual: Desktop and mobile website layout
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#62665E]">
            <span className="flex items-center gap-1.5 font-semibold text-[#242621]">
              <Laptop className="w-3.5 h-3.5 text-[#A43F2B]" />
              Responsive Web Layout
            </span>
            <span>Mobile-Ready</span>
          </div>
          {/* Wireframe browser and phone layout */}
          <div className="flex items-end gap-3 pt-1">
            {/* Desktop browser mockup */}
            <div className="flex-1 rounded-lg bg-white border border-[#DDDCD4] p-2 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-1 pb-1 border-b border-[#DDDCD4]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDDCD4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDDCD4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDDCD4]" />
                <div className="h-2 w-16 bg-[#F7F4EE] rounded ml-1" />
              </div>
              <div className="h-6 rounded bg-[#F7F4EE] flex items-center px-1.5 justify-between">
                <div className="h-2 w-12 bg-[#242621]/20 rounded" />
                <div className="h-3 w-8 bg-[#A43F2B] rounded text-[7px] text-white flex items-center justify-center font-bold">Enquire</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-5 rounded bg-[#F7F4EE]" />
                <div className="h-5 rounded bg-[#F7F4EE]" />
              </div>
            </div>
            {/* Mobile phone mockup */}
            <div className="w-14 rounded-lg bg-white border border-[#DDDCD4] p-1.5 space-y-1 shadow-xs">
              <div className="w-4 h-1 bg-[#DDDCD4] rounded-full mx-auto" />
              <div className="h-4 rounded bg-[#F7F4EE]" />
              <div className="h-3 rounded bg-[#A43F2B]/20" />
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Apps & Custom Software",
      slug: "app-software-development",
      path: "/services/app-software-development",
      explanation: "Give customers or your team a system built around their tasks.",
      examples: [
        "Booking tools and customer self-service portals",
        "Operational dashboards and distributor portals",
      ],
      // Handcrafted SVG/HTML visual: Dashboard and user interface
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#62665E]">
            <span className="flex items-center gap-1.5 font-semibold text-[#242621]">
              <Layers className="w-3.5 h-3.5 text-[#A43F2B]" />
              Dashboard & Role Interface
            </span>
            <span>Task-Oriented</span>
          </div>
          {/* Dashboard card */}
          <div className="rounded-lg bg-white border border-[#DDDCD4] p-2 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between pb-1 border-b border-[#DDDCD4]/60 text-[9px] text-[#62665E]">
              <span className="font-semibold text-[#242621]">Orders & Operations</span>
              <span className="px-1.5 py-0.2 rounded bg-[#E5E7DA] text-[#242621]">Admin View</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="p-1 rounded bg-[#F7F4EE] text-[9px]">
                <div className="text-[#62665E]">Active</div>
                <div className="font-bold text-[#242621]">24 Tasks</div>
              </div>
              <div className="p-1 rounded bg-[#F7F4EE] text-[9px]">
                <div className="text-[#62665E]">Dispatched</div>
                <div className="font-bold text-[#A43F2B]">18 Orders</div>
              </div>
              <div className="p-1 rounded bg-[#F7F4EE] text-[9px]">
                <div className="text-[#62665E]">Staff</div>
                <div className="font-bold text-[#242621]">6 Online</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Automation & Integrations",
      slug: "business-automation",
      path: "/services/business-automation",
      explanation: "Connect your tools and reduce repeated manual steps.",
      examples: [
        "Enquiry routing and instant WhatsApp alerts",
        "CRM updates, invoice sync and recurring reports",
      ],
      // Handcrafted SVG/HTML visual: Connected workflow with beginning and end
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#62665E]">
            <span className="flex items-center gap-1.5 font-semibold text-[#242621]">
              <Workflow className="w-3.5 h-3.5 text-[#A43F2B]" />
              Connected Workflow
            </span>
            <span>Zero Manual Entry</span>
          </div>
          {/* Flow with nodes */}
          <div className="flex items-center justify-between gap-1.5 pt-1 text-center text-[9px]">
            <div className="flex-1 p-1.5 rounded-lg bg-white border border-[#DDDCD4] shadow-xs">
              <span className="font-bold text-[#242621] block">Web Form</span>
              <span className="text-[#62665E] text-[8px]">New Lead</span>
            </div>
            <span className="text-[#A43F2B] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-white border border-[#DDDCD4] shadow-xs">
              <span className="font-bold text-[#A43F2B] block">Sync Node</span>
              <span className="text-[#62665E] text-[8px]">WhatsApp & Sheets</span>
            </div>
            <span className="text-[#A43F2B] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-white border border-[#DDDCD4] shadow-xs">
              <span className="font-bold text-[#242621] block">Sales Rep</span>
              <span className="text-[#62665E] text-[8px]">Notification</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "04",
      title: "AI Agents",
      slug: "ai-agents",
      path: "/services/ai-agents",
      explanation: "Add AI assistance to defined business workflows.",
      examples: [
        "Knowledge search across company manuals and catalogues",
        "Enquiry assistance with direct handover to human staff",
      ],
      // Handcrafted SVG/HTML visual: Knowledge source -> assistant -> human handover
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#62665E]">
            <span className="flex items-center gap-1.5 font-semibold text-[#242621]">
              <Cpu className="w-3.5 h-3.5 text-[#A43F2B]" />
              Knowledge & Human Handover
            </span>
            <span>Reliable Oversight</span>
          </div>
          {/* Flow */}
          <div className="flex items-center justify-between gap-1.5 pt-1 text-center text-[9px]">
            <div className="flex-1 p-1.5 rounded-lg bg-white border border-[#DDDCD4] shadow-xs flex flex-col items-center">
              <Database className="w-3 h-3 text-[#62665E] mb-0.5" />
              <span className="font-bold text-[#242621]">Knowledge</span>
              <span className="text-[#62665E] text-[8px]">Catalog / Docs</span>
            </div>
            <span className="text-[#A43F2B] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-white border border-[#DDDCD4] shadow-xs flex flex-col items-center">
              <Cpu className="w-3 h-3 text-[#A43F2B] mb-0.5" />
              <span className="font-bold text-[#A43F2B]">Assistant</span>
              <span className="text-[#62665E] text-[8px]">Guided Answer</span>
            </div>
            <span className="text-[#A43F2B] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-white border border-[#DDDCD4] shadow-xs flex flex-col items-center">
              <UserCheck className="w-3 h-3 text-[#242621] mb-0.5" />
              <span className="font-bold text-[#242621]">Team Member</span>
              <span className="text-[#62665E] text-[8px]">Human Review</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#DDDCD4]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading, Subtitle & Primary Link */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A43F2B] block">
                What We Build
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#242621]">
                Useful technology. Built around your business.
              </h2>
              <p className="text-base sm:text-lg text-[#62665E] leading-relaxed pt-1">
                From high-conversion websites to internal tools and automated pipelines, we deliver practical engineering shaped around how your business actually operates.
              </p>
            </div>

            <div className="pt-1">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#A43F2B] hover:text-[#8C3423] group"
              >
                <span>Explore all service specifications</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Service Rows with Plain Explanations, Examples & Small Illustrations */}
          <div className="lg:col-span-7 divide-y divide-[#DDDCD4]">
            {services.map((item) => (
              <div
                key={item.number}
                className="py-7 md:py-8 first:pt-0 last:pb-0 space-y-4 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-[#A43F2B]">
                    {item.number}
                  </span>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#62665E] hover:text-[#A43F2B] transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#242621] tracking-tight mb-2">
                    <Link to={item.path} className="hover:text-[#A43F2B] transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[#62665E] leading-relaxed">
                    {item.explanation}
                  </p>
                </div>

                {/* Practical Examples */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#62665E] block">
                    Practical examples:
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

                {/* Small Illustrative Visual */}
                <div className="pt-2">
                  {item.renderVisual()}
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
