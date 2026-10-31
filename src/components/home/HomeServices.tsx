import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layers, Workflow, Bot, Check, Layout, Database, MessageSquare, UserCheck } from "lucide-react";

export const HomeServices: React.FC = () => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const services = [
    {
      number: "01",
      title: "Website Development",
      slug: "website-development",
      path: "/services/website-development",
      icon: Globe,
      explanation: "Present your business clearly and give customers an easy way to enquire, book or buy.",
      practicalExample: "Business sites, product catalogues, and e-commerce stores with instant WhatsApp and UPI enquiry routing.",
      visualBadge: "Responsive Web Architecture",
      visualDetails: [
        { label: "Browser Layout", icon: Layout },
        { label: "Enquiry Routing", icon: MessageSquare },
      ],
    },
    {
      number: "02",
      title: "Apps & Custom Software",
      slug: "app-software-development",
      path: "/services/app-software-development",
      icon: Layers,
      explanation: "Build a product for your customers or a system that helps your team work better.",
      practicalExample: "Distributor portals, operations dashboards, role-based tools and early-stage software MVPs.",
      visualBadge: "Role-Based Web App",
      visualDetails: [
        { label: "Admin & Staff Roles", icon: Layers },
        { label: "Cloud Database", icon: Database },
      ],
    },
    {
      number: "03",
      title: "Business Automation",
      slug: "business-automation",
      path: "/services/business-automation",
      icon: Workflow,
      explanation: "Connect your tools and reduce repetitive steps across sales and operations.",
      practicalExample: "Automated lead capture, WhatsApp Business API notifications, order updates, and daily summary digests.",
      visualBadge: "Connected API Pipeline",
      visualDetails: [
        { label: "Webhook Nodes", icon: Workflow },
        { label: "Scheduled Triggers", icon: Check },
      ],
    },
    {
      number: "04",
      title: "AI Agents & Integrations",
      slug: "ai-agents",
      path: "/services/ai-agents",
      icon: Bot,
      explanation: "Add useful AI capabilities to your business workflows, with clear boundaries and human handover.",
      practicalExample: "Knowledge assistants, automated enquiry qualification, and invoice parsing with fallback to human staff.",
      visualBadge: "RAG & Human Escalation",
      visualDetails: [
        { label: "Verified Knowledge", icon: Database },
        { label: "Human Handover", icon: UserCheck },
      ],
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#D8E0D8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading and Introduction Area */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123B32] block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.18] font-bold tracking-tight text-[#182822] font-heading">
              Built for the work your business needs to do.
            </h2>
            <p className="text-base md:text-lg text-[#53635C] leading-relaxed">
              From your first business website to custom operational software and automated pipelines, we provide practical engineering designed around how your company operates.
            </p>
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B32] hover:underline"
              >
                <span>View all service details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Editorial Numbered Service Rows */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((item, index) => {
              const Icon = item.icon;
              const isHighlighted = activeRow === index;

              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveRow(index)}
                  onMouseLeave={() => setActiveRow(null)}
                  className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                    isHighlighted
                      ? "bg-[#E5ECE5]/60 border-[#123B32]/30 shadow-subtle"
                      : "bg-[#F6F5EF] border-[#D8E0D8]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Number and Title */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-mono font-bold text-[#123B32]">
                          {item.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#182822] font-heading">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base text-[#182822] font-medium leading-relaxed">
                        {item.explanation}
                      </p>

                      <p className="text-xs md:text-sm text-[#53635C] leading-relaxed">
                        <strong className="text-[#182822] font-semibold">Practical example:</strong>{" "}
                        {item.practicalExample}
                      </p>
                    </div>

                    {/* Tailored Visual Mini-Badge */}
                    <div className="shrink-0 pt-1 sm:pt-0">
                      <div className="bg-[#FFFFFF] px-3 py-2 rounded-xl border border-[#D8E0D8] text-[11px] font-semibold text-[#123B32] inline-flex items-center gap-1.5 shadow-subtle">
                        <Icon className="w-3.5 h-3.5 text-[#123B32]" />
                        <span>{item.visualBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="mt-5 pt-4 border-t border-[#D8E0D8]/70 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#53635C]">
                      {item.visualDetails.map((v, i) => {
                        const VIcon = v.icon;
                        return (
                          <span key={i} className="inline-flex items-center gap-1">
                            <VIcon className="w-3 h-3 text-[#123B32]" />
                            <span>{v.label}</span>
                          </span>
                        );
                      })}
                    </div>

                    <Link
                      to={item.path}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123B32] hover:text-[#0B2620] group"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
