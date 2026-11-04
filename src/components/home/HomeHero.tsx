import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import workstationWebp from "@/assets/tech-workstation-hero.webp";
import workstationJpg from "@/assets/tech-workstation-hero.jpg";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#080D16] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#2A3850]">
      {/* Subtle atmospheric gradient in background */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-[#2563EB]/10 via-[#101827]/40 to-transparent pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-6 space-y-6 md:space-y-7 animate-in fade-in slide-in-from-bottom-3 duration-500">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151F30] border border-[#2A3850] text-[#F4F7FC] text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#67E8F9] shrink-0 animate-pulse" />
              <span>DATABUKS • WEBSITES, APPS & AUTOMATION</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12] tracking-tight text-[#F4F7FC]">
              <span className="block font-sans font-bold">
                Websites, apps and automation
              </span>
              <span className="block font-serif italic font-normal text-[#67E8F9] mt-1 sm:mt-1.5">
                for your business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#B5C1D3] leading-[1.65] max-w-xl">
              DataBuks builds websites, custom applications and AI-powered workflows for Indian businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-glow transition-all focus-ring active:scale-[0.99] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#F4F7FC] bg-[#151F30] hover:bg-[#101827] border border-[#2A3850] rounded-xl transition-all focus-ring"
              >
                <Compass className="w-4 h-4 text-[#67E8F9]" />
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Direct business credentials */}
            <div className="pt-2 text-xs md:text-sm text-[#B5C1D3] flex flex-wrap items-center gap-y-1.5 gap-x-3">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#67E8F9] shrink-0" />
                <span>Clear written scope</span>
              </div>
              <span className="text-[#2A3850] hidden sm:inline">•</span>
              <span>Direct engineering team</span>
              <span className="text-[#2A3850] hidden sm:inline">•</span>
              <span>Based in Nagpur, India</span>
            </div>
          </div>

          {/* Right Column: Authentic Modern Workstation Photograph */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden border border-[#2A3850] shadow-card bg-[#101827] relative group">
              <picture>
                <source srcSet={workstationWebp} type="image/webp" />
                <img
                  src={workstationJpg}
                  alt="Modern software development workstation with high-resolution code editor and ambient blue backlighting"
                  className="w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  width="1200"
                  height="896"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
