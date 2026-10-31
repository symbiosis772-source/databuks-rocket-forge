import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Compass } from "lucide-react";
import heroHardware from "@/assets/editorial-hero-hardware.jpg";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#DDDCD4]">
      {/* Subtle warm architectural backdrop tint */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#DEE8EC]/30 pointer-events-none -z-0 hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: ~48% Copy */}
          <div className="lg:col-span-6 space-y-6 md:space-y-7">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#242621] text-[11px] sm:text-xs font-semibold tracking-wide uppercase max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#A43F2B] shrink-0" />
              <span className="truncate">DATABUKS • WEBSITES, APPS & AUTOMATION</span>
            </div>

            {/* Main Editorial Heading: Instrument Sans line 1 + Instrument Serif Italic line 2 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[1.1] tracking-tight text-[#242621] break-words">
              <span className="block font-sans font-bold">
                Technology that works
              </span>
              <span className="block font-serif italic font-normal text-[#242621] mt-1 sm:mt-1.5">
                for your business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#62665E] leading-[1.65] max-w-xl">
              We build websites, applications and connected workflows for Indian businesses—helping you serve customers and simplify everyday operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#242621] bg-transparent hover:bg-[#DDDCD4]/40 border border-[#242621] rounded-xl transition-all focus-ring"
              >
                <Compass className="w-4 h-4 text-[#62665E]" />
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Reassuring business credentials */}
            <div className="pt-2 text-xs md:text-sm text-[#62665E] flex flex-wrap items-center gap-y-1.5 gap-x-3">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A43F2B] shrink-0" />
                <span>Clear written scope</span>
              </div>
              <span className="text-[#DDDCD4] hidden sm:inline">•</span>
              <span>Direct engineering team</span>
              <span className="text-[#DDDCD4] hidden sm:inline">•</span>
              <span>Based in Nagpur, India</span>
            </div>
          </div>

          {/* Right Column: ~52% Editorial Photography Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[22px] overflow-hidden bg-[#FFFFFF] border border-[#DDDCD4] shadow-card">
              {/* Aspect ratio container: 4:5 desktop, soft landscape on mobile */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[580px] bg-[#E5E7DA]/50 overflow-hidden">
                <img
                  src={heroHardware}
                  alt="Precision tactile technology components and frosted glass on warm neutral surface"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                  width="896"
                  height="1200"
                />

                {/* Quiet editorial tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#242621]/90 backdrop-blur-md text-[#F7F4EE] px-3.5 py-2 rounded-xl text-xs flex items-center justify-between sm:justify-start gap-2 shadow-sm border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#A43F2B]" />
                  <span className="text-[12px] font-medium tracking-tight">
                    Engineered software & connected workflows
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
