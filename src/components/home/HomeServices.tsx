import React from "react";
import { Link } from "react-router-dom";
import { Globe, Layers, Workflow, Bot, ArrowRight, CheckCircle2 } from "lucide-react";

export const HomeServices: React.FC = () => {
  const services = [
    {
      title: "Website Development",
      slug: "website-development",
      path: "/services/website-development",
      icon: Globe,
      description: "Present your business clearly and give customers an easy way to enquire, book or buy.",
      examples: ["Business websites", "E-commerce stores", "Landing pages"],
      illustrationType: "browser",
    },
    {
      title: "App & Software Development",
      slug: "app-software-development",
      path: "/services/app-software-development",
      icon: Layers,
      description: "Build a product for your customers or a system that helps your team work better.",
      examples: ["Mobile apps", "Customer portals", "Dashboards & MVPs"],
      illustrationType: "dashboard",
    },
    {
      title: "Business Automation",
      slug: "business-automation",
      path: "/services/business-automation",
      icon: Workflow,
      description: "Connect your tools and reduce repetitive steps across sales and operations.",
      examples: ["Lead routing", "CRM updates", "Reminders & reporting"],
      illustrationType: "nodes",
    },
    {
      title: "AI Agents & Integrations",
      slug: "ai-agents",
      path: "/services/ai-agents",
      icon: Bot,
      description: "Add useful AI capabilities to your business workflows, with clear boundaries and human handover.",
      examples: ["Knowledge assistants", "Enquiry qualification", "Support triage"],
      illustrationType: "ai",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            The right solution for the way your business works.
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            From your first business website to the software your team uses every day, we help you plan and build what you need.
          </p>
        </div>

        {/* 2x2 Desktop Layout and Stacked Mobile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-200 hover:shadow-cardHover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Illustration preview */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                      Explore service →
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* 3 Examples */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Common use-cases
                    </span>
                    <ul className="space-y-2">
                      {service.examples.map((eg) => (
                        <li key={eg} className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{eg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-8 pt-4">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View {service.title} details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Not sure which service fits your requirement?{" "}
          <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
            Tell us about your business problem and we'll advise
          </Link>
          .
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

