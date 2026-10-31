import React from "react";
import { Search, Compass, Code2, Rocket, Clock } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      summary: "Discuss the business, users and problem.",
      detail: "We start with a thorough conversation about your target customers, operational bottlenecks, and what the website or software must achieve.",
      icon: Search,
    },
    {
      number: "02",
      title: "Plan",
      summary: "Define deliverables, dependencies, timeline and estimate.",
      detail: "We prepare a structured written scope outlining every screen, feature, required third-party API, and milestone timeline before work begins.",
      icon: Compass,
    },
    {
      number: "03",
      title: "Design & build",
      summary: "Develop the agreed solution and review progress.",
      detail: "We develop in iterative sprints, providing you staging links where you can interact with working prototypes and provide timely feedback.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Launch & handover",
      summary: "Test, deploy and agree the next steps for support.",
      detail: "We conduct quality testing, deploy to your domain, hand over source code and administrator accounts, and provide post-launch support.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="bg-white py-16 md:py-24 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Structured Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            From the first conversation to launch.
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            Every project follows a defined four-stage process so you always know what is being worked on and what comes next.
          </p>
        </div>

        {/* Horizontal timeline on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-blue-600">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    {step.summary}
                  </p>
                  <p className="text-xs md:text-sm text-slate-500 mt-3 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Stage {step.number} of 04
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Timeline Disclaimer Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 max-w-3xl">
          <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-800">Please note:</strong> Actual project duration depends on scope size, how quickly text and assets are provided, review response turnaround, and third-party API approval times (such as payment gateways and WhatsApp accounts).
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

