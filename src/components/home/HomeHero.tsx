import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import workstationWebp from "@/assets/tech-workstation-hero.webp";
import workstationJpg from "@/assets/tech-workstation-hero.jpg";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] dark:bg-[#090909] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#DADADA] dark:border-[#303030] transition-colors">
      {/* Subtle neutral gradient in background */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-[#111111]/[0.02] dark:from-[#FFFFFF]/[0.02] to-transparent pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-6 space-y-6 md:space-y-7 animate-in fade-in slide-in-from-bottom-3 duration-500">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F1F1] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#F5F5F5] shrink-0" />
              <span>DATABUKS • WEBSITES, APPS & AUTOMATION</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12] tracking-tight text-[#111111] dark:text-[#F5F5F5]">
              <span className="block font-sans font-bold">
                Websites, apps and automation
              </span>
              <span className="block font-serif italic font-normal text-[#222222] dark:text-[#EAEAEA] mt-1 sm:mt-1.5">
                for your business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#555555] dark:text-[#B5B5B5] leading-[1.65] max-w-xl">
              DataBuks builds websites, custom applications and AI-powered workflows for businesses and founders worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#111111] dark:text-[#F5F5F5] bg-transparent hover:bg-[#F1F1F1] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl transition-all focus-ring"
              >
                <Compass className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Direct business credentials */}
            <div className="pt-2 text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] flex flex-wrap items-center gap-y-1.5 gap-x-3">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0" />
                <span>Clear written scope</span>
              </div>
              <span className="text-[#DADADA] dark:text-[#303030] hidden sm:inline">•</span>
              <span>Direct engineering team</span>
              <span className="text-[#DADADA] dark:text-[#303030] hidden sm:inline">•</span>
              <span>Based in Nagpur, India. Working worldwide.</span>
            </div>
          </div>

          {/* Right Column: Authentic Modern Workstation Photograph */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden border border-[#DADADA] dark:border-[#303030] shadow-card bg-[#F1F1F1] dark:bg-[#171717] relative group">
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
