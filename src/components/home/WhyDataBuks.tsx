import React from "react";
import { MessageSquare, FileText, CheckCircle, Key, LifeBuoy } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const WhyDataBuks: React.FC = () => {
  const icons = [MessageSquare, FileText, CheckCircle, Key, LifeBuoy];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Working Practices
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
            A development partner you can work with directly.
          </h2>
          <p className="text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
            We operate with straightforward communication, clear written deliverables, and complete transparency on what is being built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.workingPractices.map((practice, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={practice.title}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {practice.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            );
          })}

          {/* 6th Educational Card: No Hidden Lock-ins */}
          <div className="bg-[#EFF6FF] rounded-2xl p-6 sm:p-7 border border-blue-200 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-2">
                Our Commitment
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Practical delivery, no technical jargon.
              </h3>
              <p className="text-xs md:text-sm text-slate-700 mt-2.5 leading-relaxed">
                We speak in plain business terms about what your software does, how long it takes, and what third-party services you actually need.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200/80 text-xs font-semibold text-blue-800">
              Based in {siteConfig.brand.city}, working with businesses nationwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDataBuks;

