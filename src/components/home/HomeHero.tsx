import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Laptop, Smartphone } from "lucide-react";
import audiotonic from "@/assets/portfolio/audiotonic.png";
import reraproperty from "@/assets/portfolio/reraproperty.png";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200">
      {/* Very subtle blue radial glow behind visual */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 50% Desktop Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small Location Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>SOFTWARE DEVELOPMENT • NAGPUR, INDIA</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.12] font-bold tracking-tight text-slate-900 font-heading">
              Websites, apps & automation built around your business.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              DataBuks helps Indian businesses build their online presence, launch digital products and simplify everyday operations with custom software and AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-sm transition-all focus-ring"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Supporting Micro-copy */}
            <div className="pt-2 text-xs md:text-sm text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Have an idea or a workflow that needs fixing? Let’s talk.</span>
            </div>
          </div>

          {/* Right Column: 50% Desktop Product Visual in Browser + Mobile Frame */}
          <div className="lg:col-span-6 relative">
            {/* Browser Frame */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden transition-transform duration-300 hover:shadow-cardHover">
              {/* Browser Window Chrome */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                {/* Browser Address Bar */}
                <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-500 font-mono flex items-center gap-1.5 max-w-[260px] truncate">
                  <span className="text-slate-400">https://</span>
                  <span className="text-slate-700 font-semibold">app.audiotonicnagpur.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Laptop className="w-4 h-4" />
                </div>
              </div>

              {/* Main Screenshot Preview */}
              <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden">
                <img
                  src={audiotonic}
                  alt="AudioTonic Trader Portal Dashboard interface preview"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow">
                  Project preview: AudioTonic Trader Portal (Nagpur)
                </div>
              </div>
            </div>

            {/* Overlay Mobile Preview Frame */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-44 md:w-48 bg-slate-900 rounded-2xl p-2 shadow-2xl border-2 border-slate-800">
              <div className="bg-white rounded-xl overflow-hidden border border-slate-100">
                <div className="bg-slate-100 py-1 px-2 border-b border-slate-200 flex items-center justify-between text-[9px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <Smartphone className="w-2.5 h-2.5" />
                    <span>Mobile preview</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <img
                  src={reraproperty}
                  alt="Mobile responsive layout preview"
                  className="w-full h-40 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

