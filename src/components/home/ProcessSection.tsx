import React from "react";
import { Clock } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      explanation: "We discuss your target audience, current operations, and specific business problems to define what the software must accomplish.",
    },
    {
      number: "02",
      title: "Scope",
      explanation: "We document exact screens, required third-party APIs, milestone dates, and deliver a fixed-scope estimate before coding starts.",
    },
    {
      number: "03",
      title: "Design & build",
      explanation: "We develop in structured milestones, providing interactive staging previews so you can test features and provide feedback.",
    },
    {
      number: "04",
      title: "Test & launch",
      explanation: "We conduct quality testing, deploy to your domain, hand over 100% of the source code, and agree on post-launch support.",
    },
  ];

  return (
    <section id="process" className="bg-[#F6F5EF] py-16 md:py-24 border-b border-[#D8E0D8] scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#123B32] mb-2 block">
            Structured Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#182822] font-heading">
            Clear steps from idea to launch.
          </h2>
          <p className="text-base md:text-lg text-[#53635C] mt-2.5 leading-relaxed">
            Every project follows a defined four-stage process so you always know what is being built, what dependencies exist, and what comes next.
          </p>
        </div>

        {/* Editorial Numbered Timeline with Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="space-y-4 pt-4 border-t-2 border-[#123B32] relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#123B32]">
                  {step.number}
                </span>
                <span className="text-[11px] font-mono text-[#53635C] uppercase tracking-wider">
                  Stage {idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#182822] font-heading">
                {step.title}
              </h3>

              <p className="text-sm text-[#53635C] leading-relaxed">
                {step.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Realistic Timing Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#FFFFFF] border border-[#D8E0D8] flex items-start gap-3 max-w-3xl">
          <Clock className="w-5 h-5 text-[#123B32] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#53635C] leading-relaxed">
            <strong className="text-[#182822]">Delivery Note:</strong> Exact delivery duration depends on your overall scope, review turnaround, and external API approvals (such as WhatsApp Business verification and payment gateway onboarding).
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
