import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="bg-[#0F172A] text-white py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading">
            Tell us what you want to build.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            A new website, a business app or a workflow that takes too much manual effort—start with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg shadow-sm transition-all focus-ring"
            >
              <MessageSquareCode className="w-5 h-5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-3 text-xs text-slate-400">
            {siteConfig.brand.supportedLanguages} • Based in {siteConfig.brand.city}, Maharashtra
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

