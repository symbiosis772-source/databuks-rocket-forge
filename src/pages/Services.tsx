import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Globe, Layers, Workflow, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Services: React.FC = () => {
  const services = [
    {
      title: "Website Development",
      slug: "website-development",
      path: "/services/website-development",
      icon: Globe,
      tagline: "Present your business clearly and give customers an easy way to enquire, book or buy.",
      description: "Fast, responsive business websites, B2B catalogues, and e-commerce storefronts designed for real conversions across Indian mobile networks.",
      deliverables: ["Responsive custom design", "Contact & WhatsApp enquiry capture", "On-page SEO & OpenGraph setup", "Full source code handover"],
    },
    {
      title: "App & Software Development",
      slug: "app-software-development",
      path: "/services/app-software-development",
      icon: Layers,
      tagline: "Build a product for your customers or a system that helps your team work better.",
      description: "Custom web applications, distributor portals, operations dashboards, and startup MVPs engineered with secure role-based permissions.",
      deliverables: ["Role-based access controls", "PostgreSQL database architecture", "Authentication & audit logs", "Deployment to cloud infrastructure"],
    },
    {
      title: "Business Automation",
      slug: "business-automation",
      path: "/services/business-automation",
      icon: Workflow,
      tagline: "Connect your tools and reduce repetitive steps across sales and operations.",
      description: "Automate lead capture, dispatch notifications, invoice delivery, and daily management reporting between your existing business tools.",
      deliverables: ["Webhook & API integrations", "WhatsApp Business API notifications", "Automated executive digests", "Error handling and retry logic"],
    },
    {
      title: "AI Agents & Integrations",
      slug: "ai-agents",
      path: "/services/ai-agents",
      icon: Bot,
      tagline: "Add useful AI capabilities to your business workflows, with clear boundaries and human handover.",
      description: "Practical knowledge assistants, document parsers, and intelligent enquiry qualification systems built with strict safeguards against hallucinations.",
      deliverables: ["Retrieval-Augmented Generation (RAG)", "Document and invoice OCR extraction", "Smooth human escalation triggers", "API usage & spend controls"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Software & Website Services — DataBuks Nagpur</title>
        <meta
          name="description"
          content="Explore custom website development, web applications, business automation and practical AI agents built by DataBuks for Indian businesses."
        />
        <link rel="canonical" href="https://databuks.org/services" />
      </Helmet>

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Header */}
        <section className="bg-white border-b border-slate-200 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Development Capabilities
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-heading">
                Software development and business automation services.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From your first business website to custom operational software and automated workflows, we provide practical engineering designed around how your company works.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Detailed Service Cards */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-8">
            {services.map((s, index) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.slug}
                  className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-cardHover transition-shadow duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-slate-400">
                            Service 0{index + 1}
                          </span>
                          <h2 className="text-2xl font-bold text-slate-900 font-heading">
                            {s.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-slate-700">
                        {s.tagline}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {s.description}
                      </p>

                      <div className="pt-2">
                        <Link
                          to={s.path}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                        >
                          <span>Explore {s.title} in detail</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                        Typical Deliverables:
                      </span>
                      <ul className="space-y-2.5">
                        {s.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing Consultation CTA */}
        <section className="bg-[#0F172A] text-white py-14 md:py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Have a project in mind?
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2.5 leading-relaxed">
              Tell us what you want to build or automate. We’ll discuss scope, provide a written estimate, and outline clear delivery milestones.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
