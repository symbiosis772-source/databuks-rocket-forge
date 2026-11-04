import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import heroWebp from "@/assets/futuristic-digital-network.webp";
import heroJpg from "@/assets/futuristic-digital-network.jpg";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#DDDCD4]">
      {/* Subtle warm backdrop tint */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#DEE8EC]/20 pointer-events-none -z-0 hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline and Agency Offer */}
          <div className="lg:col-span-6 space-y-6 md:space-y-7 animate-in fade-in slide-in-from-bottom-3 duration-500">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#242621] text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A43F2B] shrink-0" />
              <span>DATABUKS • WEBSITES, APPS & AUTOMATION</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12] tracking-tight text-[#242621]">
              <span className="block font-sans font-bold">
                Websites, apps and automation
              </span>
              <span className="block font-serif italic font-normal text-[#242621] mt-1 sm:mt-1.5">
                for your business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#62665E] leading-[1.65] max-w-xl">
              We help Indian businesses build their online presence, launch digital products and simplify everyday work with custom software and AI.
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

            {/* Direct business credentials */}
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

          {/* Right Column: Futuristic Digital Network Artwork */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden border border-[#DDDCD4] shadow-card bg-[#161817] relative group">
              <picture>
                <source srcSet={heroWebp} type="image/webp" />
                <img
                  src={heroJpg}
                  alt="Sculptural network of luminous fiber-optic paths illustrating connected digital systems and software engineering"
                  className="w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  width="1200"
                  height="960"
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
