import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import {
  MapPin,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About DataBuks — Software Development Studio in Nagpur, India</title>
        <meta
          name="description"
          content="Learn about DataBuks: an independent software studio in Nagpur, India building custom websites, web applications and automations for Indian businesses."
        />
        <link rel="canonical" href="https://databuks.org/about" />
      </Helmet>

      <main className="min-h-screen bg-[#080D16] text-[#F4F7FC]">
        {/* Header Hero */}
        <section className="bg-[#101827] border-b border-[#2A3850] py-16 md:py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151F30] border border-[#2A3850] text-[#67E8F9] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#67E8F9]" />
                <span>{siteConfig.brand.addressSummary}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FC] font-heading">
                Practical software development, built around how your business works.
              </h1>
              <p className="text-base sm:text-lg text-[#B5C1D3] leading-relaxed">
                DataBuks is an independent software studio in Nagpur, Maharashtra. We partner with Indian business owners, distributors, and startup founders to design and build websites, custom operational portals, and workflow automations.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section: What We Do & Who We Help */}
        <section className="py-16 md:py-20 bg-[#080D16]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-6 text-[#F4F7FC] leading-relaxed text-sm sm:text-base">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FC] font-heading">
                  Why DataBuks exists.
                </h2>
                <p className="text-[#B5C1D3]">
                  Many Indian businesses find themselves stuck between two bad options: expensive agencies that charge hefty fees for generic designs with layers of non-technical account managers, or rigid off-the-shelf software packages that force operations into an awkward template.
                </p>
                <p className="text-[#B5C1D3]">
                  DataBuks provides a direct, capable alternative. When you engage DataBuks, you work directly with the developers and designers building your project. We listen to the exact way you handle enquiries, process orders, or distribute products, and build software that aligns with your real business process.
                </p>

                <h3 className="text-xl font-bold text-[#F4F7FC] font-heading pt-4">
                  Who we help.
                </h3>
                <p className="text-[#B5C1D3]">
                  Our work primarily serves growing Indian SMEs, B2B wholesale distributors, education providers, professional service firms, and early-stage founders looking to validate a software MVP.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Wholesale distributors needing trader portals",
                    "Service firms replacing outdated brochure sites",
                    "E-commerce brands seeking mobile checkouts",
                    "Founders building custom web application MVPs",
                    "Businesses connecting WhatsApp & CRM pipelines",
                    "Educational academies tracking student portals",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#151F30] p-3 rounded-lg border border-[#2A3850] text-xs text-[#F4F7FC]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Commitments & Facts */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#151F30] rounded-2xl p-6 sm:p-7 border border-[#2A3850] shadow-card space-y-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#67E8F9] block">
                    Verified Operating Commitments
                  </span>

                  <div className="space-y-4">
                    {siteConfig.workingPractices.map((practice) => (
                      <div key={practice.title} className="border-b border-[#2A3850]/60 pb-3 last:border-b-0 last:pb-0">
                        <h4 className="text-sm font-bold text-[#F4F7FC] flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                          <span>{practice.title}</span>
                        </h4>
                        <p className="text-xs text-[#B5C1D3] mt-1 leading-relaxed">
                          {practice.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Fact Box */}
                <div className="bg-[#101827] rounded-2xl p-6 border border-[#2A3850] space-y-3">
                  <div className="flex items-center gap-2 text-[#67E8F9] text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Location & Availability</span>
                  </div>
                  <h4 className="text-base font-bold text-[#F4F7FC]">
                    Proudly based in Nagpur, Maharashtra
                  </h4>
                  <p className="text-xs text-[#B5C1D3] leading-relaxed">
                    We work with clients locally across Vidarbha and remotely throughout India. All consultations are available in both English and Hindi.
                  </p>
                  <div className="pt-1 text-xs font-semibold text-[#67E8F9]">
                    Phone & WhatsApp: {siteConfig.brand.phoneDisplay}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Philosophy */}
        <section className="bg-[#101827] py-16 md:py-20 border-y border-[#2A3850]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#67E8F9] mb-2 block">
                Engineering Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FC] font-heading">
                Technology choices you can maintain long term.
              </h2>
              <p className="text-sm md:text-base text-[#B5C1D3] mt-2 leading-relaxed">
                We avoid fragile proprietary platforms or experimental frameworks that make future maintenance difficult.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#151F30] p-6 rounded-2xl border border-[#2A3850]">
                <div className="w-10 h-10 rounded-xl bg-[#101827] text-[#67E8F9] flex items-center justify-center mb-4 border border-[#2A3850]">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F4F7FC] font-heading">
                  Standard Web Standards
                </h3>
                <p className="text-xs md:text-sm text-[#B5C1D3] mt-2 leading-relaxed">
                  We build frontend applications using React, Next.js, TypeScript, and Tailwind CSS. Clean, readable code that any senior engineer can inspect and build upon.
                </p>
              </div>

              <div className="bg-[#151F30] p-6 rounded-2xl border border-[#2A3850]">
                <div className="w-10 h-10 rounded-xl bg-[#101827] text-[#67E8F9] flex items-center justify-center mb-4 border border-[#2A3850]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F4F7FC] font-heading">
                  Robust Database Design
                </h3>
                <p className="text-xs md:text-sm text-[#B5C1D3] mt-2 leading-relaxed">
                  We utilize battle-tested relational databases (PostgreSQL, Supabase) with strict foreign keys, role constraints, and automated daily backup routines.
                </p>
              </div>

              <div className="bg-[#151F30] p-6 rounded-2xl border border-[#2A3850]">
                <div className="w-10 h-10 rounded-xl bg-[#101827] text-[#67E8F9] flex items-center justify-center mb-4 border border-[#2A3850]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F4F7FC] font-heading">
                  Practical Integrations
                </h3>
                <p className="text-xs md:text-sm text-[#B5C1D3] mt-2 leading-relaxed">
                  Official WhatsApp Business Cloud APIs, Indian payment gateways (Razorpay/UPI), and resilient webhooks built with automatic retry queues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#080D16] text-[#F4F7FC] py-14 md:py-16 border-b border-[#2A3850]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F4F7FC]">
              Let's talk about what you want to build.
            </h2>
            <p className="text-[#B5C1D3] text-sm md:text-base mt-2.5 leading-relaxed">
              Whether you need a fresh website or an internal tool to streamline daily operations, start with a quick message.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#F4F7FC] bg-[#151F30] hover:bg-[#1E293B] border border-[#2A3850] rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#67E8F9]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;