import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  Building2,
  Sparkles,
} from "lucide-react";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#DDDCD4]">
      {/* Subtle warm backdrop tint */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#DEE8EC]/20 pointer-events-none -z-0 hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: ~48% Copy */}
          <div className="lg:col-span-6 space-y-6 md:space-y-7 animate-in fade-in slide-in-from-bottom-3 duration-500">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#242621] text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A43F2B] shrink-0" />
              <span>DATABUKS • WEBSITES, APPS & AUTOMATION</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.12] tracking-tight text-[#242621]">
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

          {/* Right Column: ~52% Polished Original Software-Service Composition */}
          <div className="lg:col-span-6 relative pt-4 sm:pt-6 lg:pt-0">
            {/* Visual Container */}
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              {/* Main Element: Large Browser Interface Showing an Illustrative Business Website */}
              <div className="rounded-2xl bg-[#FFFFFF] border border-[#DDDCD4] shadow-card overflow-hidden">
                {/* Browser Window Chrome */}
                <div className="bg-[#F7F4EE] border-b border-[#DDDCD4] px-4 py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DDDCD4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DDDCD4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DDDCD4]" />
                  </div>
                  {/* Address Bar */}
                  <div className="flex-1 max-w-[280px] bg-white border border-[#DDDCD4] rounded-md px-2.5 py-1 text-[11px] font-mono text-[#62665E] flex items-center gap-1.5 truncate">
                    <span className="text-[#A43F2B]">https://</span>
                    <span className="text-[#242621] font-semibold">apex-supplies.in</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#62665E] hidden sm:inline">
                    Online Portal
                  </span>
                </div>

                {/* Browser Content Canvas */}
                <div className="p-4 sm:p-6 bg-[#FFFFFF] space-y-4 sm:space-y-5">
                  {/* Mock Site Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DDDCD4]/60">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#242621] text-white flex items-center justify-center text-[10px] font-bold">
                        A
                      </div>
                      <span className="text-xs font-bold text-[#242621]">Apex Industrial Supplies</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#62665E]">
                      <span className="font-semibold text-[#242621]">Catalog</span>
                      <span>Spares</span>
                      <span>Dealers</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E5E7DA] text-[#242621]">
                      Nagpur Hub
                    </span>
                  </div>

                  {/* Mock Site Hero Banner */}
                  <div className="rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] p-4 sm:p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A43F2B]">
                        B2B Equipment Catalog
                      </span>
                      <span className="text-[10px] text-[#62665E]">Direct Wholesale</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#242621] leading-snug">
                      Commercial pumps, valves & mechanical spare parts.
                    </h3>
                    <p className="text-xs text-[#62665E] leading-relaxed hidden sm:block">
                      Instant stock checks, wholesale volume rates, and direct WhatsApp quote routing.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#A43F2B] inline-flex items-center gap-1.5 shadow-xs">
                        <span>Request Quote</span>
                        <Send className="w-3 h-3" />
                      </span>
                      <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#242621] bg-white border border-[#DDDCD4]">
                        Download Price List
                      </span>
                    </div>
                  </div>

                  {/* Mock Site Product Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
                    <div className="p-2.5 rounded-lg border border-[#DDDCD4] bg-[#FFFFFF] space-y-1">
                      <div className="text-[11px] font-bold text-[#242621]">Rotary Valves</div>
                      <div className="text-[10px] text-[#62665E]">In stock • 48 hrs dispatch</div>
                      <div className="text-[10px] font-semibold text-[#A43F2B]">Wholesale tier</div>
                    </div>
                    <div className="p-2.5 rounded-lg border border-[#DDDCD4] bg-[#FFFFFF] space-y-1">
                      <div className="text-[11px] font-bold text-[#242621]">Heavy Motors</div>
                      <div className="text-[10px] text-[#62665E]">Custom specs</div>
                      <div className="text-[10px] font-semibold text-[#A43F2B]">GST Invoice ready</div>
                    </div>
                    <div className="p-2.5 rounded-lg border border-[#DDDCD4] bg-[#FFFFFF] space-y-1 hidden sm:block">
                      <div className="text-[11px] font-bold text-[#242621]">Seal Kits</div>
                      <div className="text-[10px] text-[#62665E]">OEM compatibility</div>
                      <div className="text-[10px] font-semibold text-[#A43F2B]">Bulk packaging</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Element: Overlapping Mobile Screen Showing an Illustrative Customer Request */}
              <div className="hidden sm:block absolute -bottom-7 -right-4 md:-right-6 w-[205px] md:w-[225px] rounded-[22px] bg-[#242621] p-2 shadow-2xl border border-[#DDDCD4] z-20">
                <div className="bg-[#FFFFFF] rounded-[18px] p-3 space-y-2.5 overflow-hidden text-[#242621]">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between text-[10px] text-[#62665E] pb-1 border-b border-[#DDDCD4]/60">
                    <span className="font-mono font-semibold">10:42</span>
                    <span className="w-10 h-1.5 rounded-full bg-[#DDDCD4]" />
                    <span className="text-[9px]">5G</span>
                  </div>

                  {/* Customer Request Card */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#A43F2B]">
                        New Request
                      </span>
                      <span className="text-[9px] text-[#62665E]">#REQ-891</span>
                    </div>
                    <div className="text-xs font-bold text-[#242621]">Equipment Inspection</div>
                    <div className="text-[10px] text-[#62665E] leading-tight">
                      R. Sharma • Hingna Industrial MIDC
                    </div>
                  </div>

                  {/* Booking / Details Box */}
                  <div className="p-2 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4] space-y-1 text-[10px]">
                    <div className="flex items-center gap-1.5 text-[#242621] font-semibold">
                      <Calendar className="w-3 h-3 text-[#A43F2B]" />
                      <span>Tomorrow, 11:30 AM</span>
                    </div>
                    <div className="text-[9px] text-[#62665E]">
                      Auto-routed to Service Lead on WhatsApp
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="flex items-center justify-between text-[10px] pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#182822]">
                      <CheckCircle2 className="w-3 h-3 text-[#A43F2B]" />
                      <span>Dispatched</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#E5E7DA] text-[#242621] font-medium">
                      Synced to CRM
                    </span>
                  </div>
                </div>
              </div>

              {/* Small Supporting Element: Three-Step Connected Workflow Pill */}
              <div className="mt-4 sm:absolute sm:-top-5 sm:-left-4 md:-left-6 z-20">
                <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#DDDCD4] shadow-card text-[11px] sm:text-xs text-[#242621]">
                  <span className="flex h-2 w-2 rounded-full bg-[#A43F2B] animate-pulse" />
                  <span className="font-semibold text-[#242621]">Enquiry</span>
                  <span className="text-[#DDDCD4]">→</span>
                  <span className="font-medium text-[#62665E]">Organised details</span>
                  <span className="text-[#DDDCD4]">→</span>
                  <span className="font-medium text-[#A43F2B]">Team follow-up</span>
                </div>
              </div>

              {/* Unobtrusive Label */}
              <div className="pt-3 text-center sm:text-right">
                <span className="text-[11px] font-mono text-[#62665E] tracking-tight">
                  Illustrative software interfaces
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
