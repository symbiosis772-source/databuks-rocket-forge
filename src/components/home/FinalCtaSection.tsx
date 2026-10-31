import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="bg-[#123B32] text-[#F6F5EF] py-16 md:py-24 relative overflow-hidden">
      {/* Restrained abstract line illustration in the background */}
      <svg
        className="absolute top-0 right-0 h-full w-1/2 opacity-10 pointer-events-none stroke-[#D6F279]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M50 450 C 150 350, 250 400, 400 150 C 450 70, 480 30, 500 0" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="400" cy="150" r="6" fill="#D6F279" />
        <circle cx="200" cy="380" r="4" fill="#D6F279" />
        <line x1="0" y1="250" x2="500" y2="250" strokeWidth="0.5" />
        <line x1="250" y1="0" x2="250" y2="500" strokeWidth="0.5" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F5EF] font-heading">
            Have something in mind? Let’s build the next step.
          </h2>
          <p className="text-base sm:text-lg text-[#E5ECE5] leading-relaxed max-w-xl mx-auto">
            A new business website, a custom web app or an automated workflow—start with a straightforward conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#182822] bg-[#D6F279] hover:bg-[#cbf056] rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#F6F5EF] bg-[#184239] hover:bg-[#1e5246] border border-[#276456] rounded-lg shadow-sm transition-all focus-ring"
            >
              <MessageSquare className="w-5 h-5 text-[#D6F279]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-3 text-xs text-[#A3B8AD]">
            {siteConfig.brand.supportedLanguages} • Based in {siteConfig.brand.city}, Maharashtra
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
