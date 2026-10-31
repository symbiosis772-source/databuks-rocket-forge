import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, FileText, Code2, Cpu } from "lucide-react";
import approachPrototype from "@/assets/editorial-approach-prototype.jpg";

export const ApproachFeature: React.FC = () => {
  const steps = [
    {
      title: "Planning & Scope",
      desc: "Documenting exact features, user roles and integration requirements before any code is written.",
      icon: FileText,
    },
    {
      title: "Interface & Experience",
      desc: "Creating intuitive screens so your customers or team members can perform their tasks quickly.",
      icon: Layers,
    },
    {
      title: "Clean Engineering",
      desc: "Developing fast, stable software with modern frameworks and resilient database structures.",
      icon: Code2,
    },
    {
      title: "Workflow Connection",
      desc: "Hooking into WhatsApp, payment gateways, CRMs, and email for automated handoffs.",
      icon: Cpu,
    },
  ];

  return (
    <section className="bg-[#DEE8EC] py-16 md:py-24 border-b border-[#DDDCD4]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Photo of Physical Prototype / Hardware Detail */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[22px] overflow-hidden bg-[#FFFFFF] border border-[#DDDCD4] shadow-card">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E5E7DA]">
                <img
                  src={approachPrototype}
                  alt="Precision physical electronics and tactile engineering detail"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                  width="1200"
                  height="896"
                />
              </div>
              <div className="p-4 bg-[#FFFFFF] border-t border-[#DDDCD4] flex items-center justify-between text-xs text-[#62665E]">
                <span className="font-medium text-[#242621]">Direct Craftsmanship & Modular Architecture</span>
                <span className="text-[11px] text-[#62665E] italic">Editorial concept preview</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Approach Breakdown */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A43F2B] block">
                How We Deliver
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#242621]">
                From an idea to something people can use.
              </h2>
              <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
                Software projects succeed when expectations are realistic and communication is straightforward. We take you through four clear stages without confusing technical jargon.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDDCD4] space-y-1.5 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#DEE8EC] text-[#A43F2B] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#242621] tracking-tight pt-1">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#62665E] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring"
              >
                <span>Discuss Your Project Concept</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachFeature;
