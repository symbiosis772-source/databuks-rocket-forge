import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Code2, Users2, Shield } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const AboutPreview: React.FC = () => {
  return (
    <section className="bg-[#EFF6FF] py-16 md:py-24 border-b border-blue-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{siteConfig.brand.addressSummary}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
              Built in Nagpur. Focused on your business.
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              DataBuks is an independent software studio founded with a single focus: helping Indian business owners, distributors, and founders build digital tools that actually work for their day-to-day operations.
            </p>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We skip the agency hype and corporate bureaucracy. You speak directly with the team writing the code and designing your interface, ensuring high attention to detail and honest estimates from day one.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                <span>Meet DataBuks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Tasteful Typographic Brand Composition */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-md space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Operating Principles
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Standard, maintainable tech stacks
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Built on React, Next.js, Node.js, and modern cloud databases so your software can be maintained long-term without proprietary lock-in.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Direct builder contact
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Regular walkthroughs and demos directly with developers who understand your code inside and out.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      100% intellectual property ownership
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Full repository and hosting credentials handed over to you upon project sign-off.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Nagpur, Maharashtra</span>
                <span>Active nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

