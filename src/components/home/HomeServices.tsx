import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Layers,
  Workflow,
  Cpu,
  CheckCircle2,
  Laptop,
  Database,
  UserCheck,
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
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#090909] border border-[#DADADA] dark:border-[#303030] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#555555] dark:text-[#B5B5B5]">
            <span className="flex items-center gap-1.5 font-semibold text-[#111111] dark:text-[#F5F5F5]">
              <Laptop className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
              Responsive Web Layout
            </span>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-medium">Mobile-Ready</span>
          </div>
          <div className="flex items-end gap-3 pt-1">
            <div className="flex-1 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] p-2 space-y-1.5 shadow-subtle">
              <div className="flex items-center gap-1 pb-1 border-b border-[#DADADA] dark:border-[#303030]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DADADA] dark:bg-[#303030]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#DADADA] dark:bg-[#303030]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#DADADA] dark:bg-[#303030]" />
                <div className="h-2 w-16 bg-[#F1F1F1] dark:bg-[#111111] rounded ml-1" />
              </div>
              <div className="h-6 rounded bg-[#F1F1F1] dark:bg-[#111111] flex items-center px-1.5 justify-between">
                <div className="h-2 w-12 bg-[#DADADA] dark:bg-[#303030] rounded" />
                <div className="h-3.5 px-2 bg-[#111111] text-white dark:bg-[#F5F5F5] dark:text-[#090909] rounded text-[8px] flex items-center justify-center font-bold">Enquire</div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-5 rounded bg-[#F1F1F1] dark:bg-[#111111]" />
                <div className="h-5 rounded bg-[#F1F1F1] dark:bg-[#111111]" />
              </div>
            </div>
            <div className="w-14 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] p-1.5 space-y-1 shadow-subtle">
              <div className="w-4 h-1 bg-[#DADADA] dark:bg-[#303030] rounded-full mx-auto" />
              <div className="h-4 rounded bg-[#F1F1F1] dark:bg-[#111111]" />
              <div className="h-3 rounded bg-[#111111]/20 dark:bg-[#F5F5F5]/20" />
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
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#090909] border border-[#DADADA] dark:border-[#303030] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#555555] dark:text-[#B5B5B5]">
            <span className="flex items-center gap-1.5 font-semibold text-[#111111] dark:text-[#F5F5F5]">
              <Layers className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
              Dashboard & Role Interface
            </span>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-medium">Task-Oriented</span>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] p-2 space-y-1.5 shadow-subtle">
            <div className="flex items-center justify-between pb-1 border-b border-[#DADADA] dark:border-[#303030] text-[9px] text-[#555555] dark:text-[#B5B5B5]">
              <span className="font-semibold text-[#111111] dark:text-[#F5F5F5]">Orders & Operations</span>
              <span className="px-1.5 py-0.2 rounded bg-[#F1F1F1] dark:bg-[#111111] text-[#111111] dark:text-[#F5F5F5] border border-[#DADADA] dark:border-[#303030]">Admin View</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="p-1 rounded bg-[#F1F1F1] dark:bg-[#111111] text-[9px]">
                <div className="text-[#555555] dark:text-[#B5B5B5]">Active</div>
                <div className="font-bold text-[#111111] dark:text-[#F5F5F5]">24 Tasks</div>
              </div>
              <div className="p-1 rounded bg-[#F1F1F1] dark:bg-[#111111] text-[9px]">
                <div className="text-[#555555] dark:text-[#B5B5B5]">Dispatched</div>
                <div className="font-bold text-[#111111] dark:text-[#F5F5F5]">18 Orders</div>
              </div>
              <div className="p-1 rounded bg-[#F1F1F1] dark:bg-[#111111] text-[9px]">
                <div className="text-[#555555] dark:text-[#B5B5B5]">Staff</div>
                <div className="font-bold text-[#111111] dark:text-[#F5F5F5]">6 Online</div>
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
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#090909] border border-[#DADADA] dark:border-[#303030] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#555555] dark:text-[#B5B5B5]">
            <span className="flex items-center gap-1.5 font-semibold text-[#111111] dark:text-[#F5F5F5]">
              <Workflow className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
              Connected Workflow
            </span>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-medium">Zero Manual Entry</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 pt-1 text-center text-[9px]">
            <div className="flex-1 p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-subtle">
              <span className="font-bold text-[#111111] dark:text-[#F5F5F5] block">Web Form</span>
              <span className="text-[#555555] dark:text-[#B5B5B5] text-[8px]">New Lead</span>
            </div>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#111111]/30 dark:border-[#F5F5F5]/30 shadow-subtle">
              <span className="font-bold text-[#111111] dark:text-[#F5F5F5] block">Sync Node</span>
              <span className="text-[#555555] dark:text-[#B5B5B5] text-[8px]">WhatsApp & Sheets</span>
            </div>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-subtle">
              <span className="font-bold text-[#111111] dark:text-[#F5F5F5] block">Sales Rep</span>
              <span className="text-[#555555] dark:text-[#B5B5B5] text-[8px]">Notification</span>
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
      renderVisual: () => (
        <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#090909] border border-[#DADADA] dark:border-[#303030] space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#555555] dark:text-[#B5B5B5]">
            <span className="flex items-center gap-1.5 font-semibold text-[#111111] dark:text-[#F5F5F5]">
              <Cpu className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
              Knowledge & Human Handover
            </span>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-medium">Reliable Oversight</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 pt-1 text-center text-[9px]">
            <div className="flex-1 p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-subtle flex flex-col items-center">
              <Database className="w-3 h-3 text-[#555555] dark:text-[#B5B5B5] mb-0.5" />
              <span className="font-bold text-[#111111] dark:text-[#F5F5F5]">Knowledge</span>
              <span className="text-[#555555] dark:text-[#B5B5B5] text-[8px]">Catalog / Docs</span>
            </div>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#111111]/30 dark:border-[#F5F5F5]/30 shadow-subtle flex flex-col items-center">
              <Cpu className="w-3 h-3 text-[#111111] dark:text-[#F5F5F5] mb-0.5" />
              <span className="font-bold text-[#111111] dark:text-[#F5F5F5]">Assistant</span>
              <span className="text-[#555555] dark:text-[#B5B5B5] text-[8px]">Guided Answer</span>
            </div>
            <span className="text-[#111111] dark:text-[#F5F5F5] font-bold">→</span>
            <div className="flex-1 p-1.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-subtle flex flex-col items-center">
              <UserCheck className="w-3 h-3 text-[#111111] dark:text-[#F5F5F5] mb-0.5" />
              <span className="font-bold text-[#111111] dark:text-[#F5F5F5]">Team Member</span>
              <span className="text-[#555555] dark:text-[#B5B5B5] text-[8px]">Human Review</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="bg-[#F1F1F1] dark:bg-[#111111] py-16 md:py-24 border-b border-[#DADADA] dark:border-[#303030] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading, Subtitle & Primary Link */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                What We Build
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
                Useful technology. Built around your business.
              </h2>
              <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] leading-relaxed pt-1">
                From high-conversion websites to internal tools and automated pipelines, we deliver practical engineering shaped around how your business actually operates.
              </p>
            </div>

            <div className="pt-1">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] hover:underline group transition-colors"
              >
                <span>Explore all service specifications</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Service Rows */}
          <div className="lg:col-span-7 divide-y divide-[#DADADA] dark:divide-[#303030]">
            {services.map((item) => (
              <div
                key={item.number}
                className="py-7 md:py-8 first:pt-0 last:pb-0 space-y-4 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-[#111111] dark:text-[#F5F5F5]">
                    {item.number}
                  </span>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#F5F5F5] tracking-tight mb-2">
                    <Link to={item.path} className="hover:underline transition-colors">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                    {item.explanation}
                  </p>
                </div>

                {/* Practical Examples */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                    Practical examples:
                  </span>
                  <ul className="space-y-1 text-xs sm:text-sm text-[#111111] dark:text-[#F5F5F5]">
                    {item.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5] shrink-0" />
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
