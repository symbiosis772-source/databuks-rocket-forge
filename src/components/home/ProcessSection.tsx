import React from "react";
import { Clock } from "lucide-react";
import procWebp from "@/assets/tech-processor-circuits.webp";
import procJpg from "@/assets/tech-processor-circuits.jpg";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      explanation: "We discuss your target audience, current operations, and specific business problems to define what the software or website must accomplish.",
    },
    {
      number: "02",
      title: "Define scope",
      explanation: "We document exact screens, required third-party APIs, milestone dates, and deliver a fixed-scope estimate before coding starts.",
    },
    {
      number: "03",
      title: "Design & build",
      explanation: "We develop in structured milestones, providing interactive staging previews so you can test features and provide direct feedback.",
    },
    {
      number: "04",
      title: "Test & launch",
      explanation: "We conduct quality testing, deploy to your domain, hand over 100% of the source code, and agree on clear post-launch support.",
    },
  ];

  return (
    <section id="process" className="bg-[#101827] py-16 md:py-24 border-b border-[#2A3850] scroll-mt-24">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header & Supporting Technology Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 md:mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#67E8F9] block">
              Structured Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#F4F7FC]">
              A clear path from discussion to delivery.
            </h2>
            <p className="text-base sm:text-lg text-[#B5C1D3] leading-relaxed">
              Every project follows a defined four-stage process so you always know what is being built, what dependencies exist, and what comes next.
            </p>
          </div>

          {/* Supporting Technology Photo: High-Performance Architecture */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden border border-[#2A3850] shadow-card bg-[#080D16]">
              <picture>
                <source srcSet={procWebp} type="image/webp" />
                <img
                  src={procJpg}
                  alt="High-performance processor silicon and precision circuit architecture representing robust software engineering"
                  className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover object-center"
                  width="1376"
                  height="768"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* 4 Stages: Clean horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="space-y-3.5 pt-4 border-t-2 border-[#2563EB] relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#67E8F9]">
                  {step.number}
                </span>
                <span className="text-[11px] font-mono text-[#B5C1D3] uppercase tracking-wider">
                  Stage {idx + 1}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#F4F7FC]">
                {step.title}
              </h3>

              <p className="text-sm text-[#B5C1D3] leading-relaxed">
                {step.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Realistic Timing Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#151F30] border border-[#2A3850] flex items-start gap-3 max-w-3xl shadow-xs">
          <Clock className="w-5 h-5 text-[#67E8F9] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#B5C1D3] leading-relaxed">
            <strong className="text-[#F4F7FC]">Delivery Note:</strong> Exact delivery duration depends on your overall scope, review turnaround, and external API approvals (such as WhatsApp Business verification and payment gateway onboarding).
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
