import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Palette, Network, FileCheck, LifeBuoy } from "lucide-react";

export const BudgetPreview: React.FC = () => {
  const drivers = [
    {
      title: "Screens & feature scope",
      description: "A 5-screen brochure site has very different development hours than a 20-screen customer portal.",
      icon: Layers,
    },
    {
      title: "Design requirements",
      description: "Clean modern component styling vs. highly tailored custom animations and illustration systems.",
      icon: Palette,
    },
    {
      title: "Third-party integrations",
      description: "Connecting WhatsApp Business API, payment gateways, custom ERP databases, or external CRMs.",
      icon: Network,
    },
    {
      title: "Content readiness",
      description: "Having your copy, product catalogues, and photography prepared saves significant project time.",
      icon: FileCheck,
    },
    {
      title: "Post-launch support needs",
      description: "One-off deployment handover vs. structured monthly maintenance, backup monitoring, and feature updates.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Transparent Estimates
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
                A clear scope before development begins.
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                We don’t quote random ballpark numbers or sell rigid off-the-shelf packages. Every proposal is built around your specific business requirements, with clear deliverables and transparent milestones.
              </p>
              <div className="pt-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <span>Read how we estimate projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Cost Drivers */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Key factors that determine your estimate:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {drivers.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div
                      key={d.title}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs font-bold text-slate-900">
                        {d.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  );
                })}

                {/* Consultation Card */}
                <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200/80 flex flex-col justify-center">
                  <h3 className="text-xs font-bold text-blue-900">
                    Need an initial estimate?
                  </h3>
                  <p className="text-[11px] text-blue-700 mt-1 leading-relaxed">
                    Share your requirements on our contact form or message us directly on WhatsApp.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    Request consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetPreview;

