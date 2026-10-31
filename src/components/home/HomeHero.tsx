import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Smartphone, Workflow, ShieldCheck } from "lucide-react";
import audiotonic from "@/assets/portfolio/audiotonic.png";
import reraproperty from "@/assets/portfolio/reraproperty.png";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F5EF] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#D8E0D8]">
      {/* Subtle soft sage geometric backing shape behind visual */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[580px] h-[580px] bg-[#E5ECE5]/80 rounded-full blur-2xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: ~46% Desktop Copy */}
          <div className="lg:col-span-5 space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5ECE5] border border-[#D8E0D8] text-[#123B32] text-xs font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#123B32]" />
              <span>DATABUKS • SOFTWARE DEVELOPMENT</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] lg:leading-[1.12] font-bold tracking-tight text-[#182822] font-heading">
              Your next website, app or smarter workflow starts here.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[18px] text-[#53635C] leading-[1.65] max-w-xl">
              We help Indian businesses build useful websites, custom applications and AI-powered workflows around the way they work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-[#123B32] bg-transparent hover:bg-[#E5ECE5]/70 border border-[#123B32] rounded-lg transition-all focus-ring"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Reassuring note */}
            <div className="pt-2 text-xs md:text-sm text-[#53635C] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#123B32] shrink-0" />
              <span>Direct communication • Defined written scope • Based in Nagpur, India</span>
            </div>
          </div>

          {/* Right Column: ~54% Desktop Art-Directed Project Composition */}
          <div className="lg:col-span-7 relative">
            {/* Composition Container with sage backing accents */}
            <div className="relative pl-0 sm:pl-4">
              {/* Minimal Browser Frame (Primary Screenshot) */}
              <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#D8E0D8] shadow-card overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                {/* Browser Top Window Bar */}
                <div className="bg-[#F6F5EF] border-b border-[#D8E0D8] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#D8E0D8]" />
                    <div className="w-3 h-3 rounded-full bg-[#D8E0D8]" />
                    <div className="w-3 h-3 rounded-full bg-[#D8E0D8]" />
                  </div>
                  {/* Browser Address Bar */}
                  <div className="bg-[#FFFFFF] border border-[#D8E0D8] rounded-md px-3 py-1 text-xs text-[#53635C] font-mono flex items-center gap-1.5 max-w-[270px] truncate">
                    <span className="text-[#53635C]/60">https://</span>
                    <span className="text-[#182822] font-semibold">app.audiotonicnagpur.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#53635C]">
                    <Laptop className="w-4 h-4" />
                  </div>
                </div>

                {/* Primary Screenshot Preview */}
                <div className="relative aspect-[16/10] bg-[#FFFFFF] overflow-hidden">
                  <img
                    src={audiotonic}
                    alt="AudioTonic Trader Portal custom dashboard screenshot"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#123B32]/90 backdrop-blur-md text-[#F6F5EF] text-[11px] font-medium px-2.5 py-1 rounded-md shadow flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6F279]" />
                    <span>Project preview: AudioTonic Trader Portal (Nagpur)</span>
                  </div>
                </div>
              </div>

              {/* Smaller Overlapping Mobile Preview (Lower Edge) */}
              <div className="hidden sm:block absolute -bottom-6 -left-4 w-44 md:w-50 bg-[#123B32] rounded-2xl p-2 shadow-2xl border-2 border-[#182822] z-20 transition-transform duration-300 hover:scale-[1.02]">
                <div className="bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#D8E0D8]">
                  <div className="bg-[#F6F5EF] py-1 px-2 border-b border-[#D8E0D8] flex items-center justify-between text-[9px] text-[#53635C]">
                    <div className="flex items-center gap-1 font-medium">
                      <Smartphone className="w-2.5 h-2.5 text-[#123B32]" />
                      <span>reraproperty.com</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B32]" />
                  </div>
                  <img
                    src={reraproperty}
                    alt="Mobile responsive property portal preview"
                    className="w-full h-36 object-cover object-top"
                  />
                </div>
              </div>

              {/* Small Relevant Workflow Graphic Badge (Top Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-2 bg-[#FFFFFF] rounded-xl px-3.5 py-2.5 border border-[#D8E0D8] shadow-card items-center gap-3 z-20">
                <div className="w-7 h-7 rounded-lg bg-[#E5ECE5] text-[#123B32] flex items-center justify-center">
                  <Workflow className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#182822] flex items-center gap-1.5">
                    <span>Active Workflow</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6F279]" />
                  </div>
                  <div className="text-[10px] text-[#53635C]">
                    Enquiry → WhatsApp → CRM
                  </div>
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
