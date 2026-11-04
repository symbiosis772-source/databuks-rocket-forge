import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="bg-[#101827] text-[#F4F7FC] py-16 md:py-24 relative overflow-hidden border-b border-[#2A3850]">
      {/* Subtle technical coordinate geometry in background */}
      <svg
        className="absolute top-0 right-0 h-full w-1/2 opacity-15 pointer-events-none stroke-[#2563EB]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M50 450 C 150 350, 250 400, 400 150 C 450 70, 480 30, 500 0" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="400" cy="150" r="6" fill="#67E8F9" />
        <circle cx="200" cy="380" r="4" fill="#67E8F9" />
        <line x1="0" y1="250" x2="500" y2="250" strokeWidth="0.5" stroke="#2A3850" />
        <line x1="250" y1="0" x2="250" y2="500" strokeWidth="0.5" stroke="#2A3850" />
      </svg>

      <div className="max-w-[1240px] mx-auto px-5 md:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FC]">
            What would you like to build?
          </h2>
          <p className="text-base sm:text-lg text-[#B5C1D3] leading-relaxed max-w-xl mx-auto">
            A new business website, custom web software or an automated business workflow—start with a straightforward conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#F4F7FC] bg-[#151F30] hover:bg-[#1E293B] border border-[#2A3850] rounded-xl shadow-sm transition-all focus-ring"
            >
              <MessageSquare className="w-5 h-5 text-[#67E8F9]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-3 text-xs text-[#B5C1D3]">
            {siteConfig.brand.supportedLanguages} • Engineering studio in {siteConfig.brand.city}, Maharashtra
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
