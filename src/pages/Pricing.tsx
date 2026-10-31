import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import {
  FileText,
  Clock,
  Layers,
  ArrowRight,
  Server,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const Pricing: React.FC = () => {
  const scopeGuidance = [
    {
      range: "Under ₹25,000",
      typicalFit: "Focused landing pages or single-page business sites",
      scope: "Single-page responsive design, essential contact/WhatsApp links, fast mobile loading, and basic SEO meta tags.",
    },
    {
      range: "₹25,000 – ₹50,000",
      typicalFit: "Multi-page company websites & digital catalogues",
      scope: "Multi-page business websites (Home, About, Services, Contact, Portfolio), custom enquiry forms, product catalogues, and responsive mobile architecture.",
    },
    {
      range: "₹50,000 – ₹1,00,000",
      typicalFit: "E-commerce stores & advanced workflow automations",
      scope: "Direct-to-consumer e-commerce storefronts, payment gateway integration (Razorpay/UPI), multi-step webhook automations, or focused administrative dashboards.",
    },
    {
      range: "₹1,00,000 – ₹3,00,000",
      typicalFit: "Custom web applications, portals & startup MVPs",
      scope: "Full web applications with role-based access control (Admin, Staff, Customer), relational database architecture, quotation engines, and customer self-service portals.",
    },
    {
      range: "₹3,00,000+",
      typicalFit: "Complex distribution ERPs & bespoke systems",
      scope: "Multi-branch ERPs, complex inventory formulation workflows, high-throughput automated reporting, and bespoke algorithmic software.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Project Scope & Estimates — DataBuks Transparent Pricing</title>
        <meta
          name="description"
          content="Understand how DataBuks estimates website, software, and automation projects. Clear written scopes, milestone reviews, and transparent pricing in INR."
        />
        <link rel="canonical" href="https://databuks.org/pricing" />
      </Helmet>

      <main className="min-h-screen bg-[#F7F4EE]">
        {/* Header Hero */}
        <section className="bg-[#FFFFFF] border-b border-[#DDDCD4] py-16 md:py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A43F2B] block">
                Transparent Engagement
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242621] font-heading">
                Project Scope & Estimates
              </h1>
              <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
                We believe software projects succeed when scope is clear from day one. Rather than selling rigid packages with hidden exclusions, every project begins with a tailored, written proposal.
              </p>
            </div>
          </div>
        </section>

        {/* How Estimates Are Prepared */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A43F2B] mb-2 block">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#242621] font-heading">
                How we prepare project estimates.
              </h2>
              <p className="text-sm md:text-base text-[#62665E] mt-2 leading-relaxed">
                Our estimates reflect the actual development hours required to build and test your solution reliably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#DDDCD4] shadow-card">
                <div className="w-10 h-10 rounded-xl bg-[#E5E7DA] text-[#A43F2B] flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#242621] font-heading">
                  1. Discovery & Screen Mapping
                </h3>
                <p className="text-xs md:text-sm text-[#62665E] mt-2 leading-relaxed">
                  We itemise each screen, form, user role, and external API connection required so you see exactly what is being estimated.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#DDDCD4] shadow-card">
                <div className="w-10 h-10 rounded-xl bg-[#E5E7DA] text-[#A43F2B] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#242621] font-heading">
                  2. Milestone Scheduling
                </h3>
                <p className="text-xs md:text-sm text-[#62665E] mt-2 leading-relaxed">
                  We break delivery into clear checkpoints (e.g. Design Review, Alpha Build, Staging Review, Launch Handover) with tied milestones.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#DDDCD4] shadow-card">
                <div className="w-10 h-10 rounded-xl bg-[#E5E7DA] text-[#A43F2B] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#242621] font-heading">
                  3. Fixed Scope Agreement
                </h3>
                <p className="text-xs md:text-sm text-[#62665E] mt-2 leading-relaxed">
                  Once agreed in writing, your fee remains fixed for that defined scope. If your requirements expand during build, changes are quoted separately before work starts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INR Scope Guidance Table */}
        <section className="py-16 md:py-20 bg-[#FFFFFF] border-y border-[#DDDCD4]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A43F2B] mb-2 block">
                Scope Guidelines (INR)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#242621] font-heading">
                General project scope ranges.
              </h2>
              <p className="text-sm md:text-base text-[#62665E] mt-2 leading-relaxed">
                These ranges indicate what level of functionality typically fits within various scopes. All projects receive an exact written quote based on your specific requirements.
              </p>
            </div>

            <div className="space-y-4">
              {scopeGuidance.map((item) => (
                <div
                  key={item.range}
                  className="bg-[#F7F4EE] rounded-2xl p-6 border border-[#DDDCD4] flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="md:w-1/4">
                    <span className="text-xl font-bold font-mono text-[#A43F2B] block">
                      {item.range}
                    </span>
                    <span className="text-xs font-semibold text-[#242621] mt-0.5 block">
                      {item.typicalFit}
                    </span>
                  </div>

                  <div className="md:w-1/2">
                    <p className="text-xs md:text-sm text-[#62665E] leading-relaxed">
                      {item.scope}
                    </p>
                  </div>

                  <div className="md:w-1/4 flex md:justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#A43F2B] hover:text-[#8C3423] bg-[#FFFFFF] hover:bg-[#E5E7DA] border border-[#DDDCD4] rounded-lg transition-colors"
                    >
                      <span>Request estimate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#62665E] mt-4 text-center">
              All prices quoted in Indian Rupees (₹). GST details, if applicable, are stated clearly on formal estimates.
            </p>
          </div>
        </section>

        {/* Third-Party Operational Costs (Transparency) */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A43F2B] mb-2 block">
                Ongoing Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#242621] font-heading">
                Third-party operating costs to anticipate.
              </h2>
              <p className="text-sm md:text-base text-[#62665E] mt-2 leading-relaxed">
                We clearly separate our development fees from ongoing third-party infrastructure. You pay service providers directly, ensuring you retain 100% control over your business assets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDDCD4]">
                <Server className="w-5 h-5 text-[#A43F2B] mb-2.5" />
                <h3 className="text-sm font-bold text-[#242621]">
                  Domain Name
                </h3>
                <p className="text-xs text-[#62665E] mt-1.5 leading-relaxed">
                  Typically ₹800 – ₹1,500/year, paid directly to registrars like Cloudflare, Namecheap, or GoDaddy.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDDCD4]">
                <Layers className="w-5 h-5 text-[#A43F2B] mb-2.5" />
                <h3 className="text-sm font-bold text-[#242621]">
                  Cloud Hosting / Server
                </h3>
                <p className="text-xs text-[#62665E] mt-1.5 leading-relaxed">
                  Static websites qualify for generous free tiers (Vercel/Cloudflare). Dynamic databases typically range from ₹0 to ₹2,000/month.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDDCD4]">
                <MessageSquare className="w-5 h-5 text-[#A43F2B] mb-2.5" />
                <h3 className="text-sm font-bold text-[#242621]">
                  WhatsApp & SMS APIs
                </h3>
                <p className="text-xs text-[#62665E] mt-1.5 leading-relaxed">
                  Official WhatsApp Business Cloud API bills per conversation directly from Meta based on real messaging volume.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#DDDCD4]">
                <CheckCircle2 className="w-5 h-5 text-[#A43F2B] mb-2.5" />
                <h3 className="text-sm font-bold text-[#242621]">
                  Payment Gateways
                </h3>
                <p className="text-xs text-[#62665E] mt-1.5 leading-relaxed">
                  Providers like Razorpay charge standard transaction rates (typically 2% on credit cards, free or nominal on UPI).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Estimate CTA */}
        <section className="bg-[#A43F2B] text-[#F7F4EE] py-14 md:py-16">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Request a tailored project estimate.
            </h2>
            <p className="text-[#E5E7DA] text-sm md:text-base mt-2.5 leading-relaxed">
              Share your business requirements. We’ll review your details and respond with a structured written proposal and delivery timeline.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#242621] bg-[#F1DDD1] hover:bg-[#cbf056] rounded-lg shadow-sm"
              >
                <span>Request a Tailored Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
