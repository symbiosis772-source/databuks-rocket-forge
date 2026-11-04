import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Workflow, Layers, HelpCircle } from "lucide-react";

export const ProblemSolutionSection: React.FC = () => {
  const items = [
    {
      problem: "Customers struggle to understand your business",
      solution: "A clear website and enquiry journey.",
      description: "Organise your services, products, and proofs so prospective buyers immediately know what you offer and how to reach you.",
      icon: Globe,
      link: "/services/website-development",
      linkText: "Explore websites",
    },
    {
      problem: "Your team repeats the same updates manually",
      solution: "Connected workflows and automation.",
      description: "Link your web forms, WhatsApp, spreadsheets and CRM so data moves automatically without manual copy-pasting.",
      icon: Workflow,
      link: "/services/business-automation",
      linkText: "Explore automation",
    },
    {
      problem: "Your operations have outgrown spreadsheets",
      solution: "A tailored app, portal or dashboard.",
      description: "Replace cluttered shared sheets with an intuitive software system built around your team's exact daily tasks and roles.",
      icon: Layers,
      link: "/services/app-software-development",
      linkText: "Explore custom software",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] dark:bg-[#090909] py-16 md:py-20 border-b border-[#DADADA] dark:border-[#303030] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3 mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F1F1] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
            <span>Problem to Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
            What would you like to improve?
          </h2>
          <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
            Common business needs we discuss and solve with practical software.
          </p>
        </div>

        {/* 3 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.problem}
                className="rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] p-6 flex flex-col justify-between shadow-card card-hover transition-all"
              >
                <div className="space-y-4">
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#555555] dark:text-[#B5B5B5] uppercase tracking-wider">
                      Target Area
                    </span>
                  </div>

                  {/* Problem & Arrow & Solution */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#555555] dark:text-[#B5B5B5]">
                      Current situation:
                    </div>
                    <p className="text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] leading-snug">
                      "{item.problem}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#DADADA] dark:border-[#303030] space-y-1.5">
                    <div className="text-xs font-semibold text-[#111111] dark:text-[#F5F5F5]">
                      What we build:
                    </div>
                    <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5] tracking-tight">
                      {item.solution}
                    </h3>
                    <p className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-5 mt-4 border-t border-[#DADADA] dark:border-[#303030]">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] hover:underline group"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
