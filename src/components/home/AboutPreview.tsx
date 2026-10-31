import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Code2, Users2, Shield, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const AboutPreview: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#D8E0D8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typographic DataBuks Brand Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#F6F5EF] rounded-2xl p-7 sm:p-9 border border-[#D8E0D8] space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8E0D8] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#123B32]">
                  STUDIO ARCHITECTURE
                </span>
                <span className="text-xs font-mono text-[#53635C]">
                  EST. NAGPUR
                </span>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-extrabold text-[#182822] font-heading tracking-tight">
                  DataBuks
                </div>
                <p className="text-xs sm:text-sm text-[#53635C] leading-relaxed">
                  An independent engineering studio focused on building software tools that Indian business owners and teams can rely on daily.
                </p>
              </div>

              {/* Confirmed Commitments */}
              <div className="space-y-3 pt-2">
                {[
                  "Direct communication with engineers",
                  "Fixed written scope before development",
                  "Staged progress demos at checkpoints",
                  "100% source code and account handover",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-[#182822]">
                    <CheckCircle2 className="w-4 h-4 text-[#123B32] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#D8E0D8] flex items-center justify-between text-xs text-[#53635C]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#123B32]" />
                  <span>Nagpur, Maharashtra</span>
                </div>
                <span>India-wide service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5ECE5] border border-[#D8E0D8] text-[#123B32] text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>BASED IN NAGPUR • SERVING INDIAN BUSINESSES</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#182822] font-heading">
              A development partner you can work with directly.
            </h2>

            <p className="text-base sm:text-lg text-[#182822] leading-relaxed font-medium">
              We skip layers of non-technical account managers and sales intermediaries. You discuss requirements directly with the team designing and building your product.
            </p>

            <p className="text-sm md:text-base text-[#53635C] leading-relaxed">
              Whether you need to replace an outdated brochure website, launch a custom trader portal for your wholesale network, or connect WhatsApp leads to your team's CRM, we build software using standard web technologies that you can easily maintain long term.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
              >
                <span>Meet DataBuks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
