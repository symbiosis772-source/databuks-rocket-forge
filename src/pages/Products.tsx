import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import techVoiceMic from "@/assets/tech-voice-mic.webp";
import {
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Bot,
  Mic,
  Sparkles,
  CheckCircle2,
  Workflow,
  Radio,
} from "lucide-react";

export const Products: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Products by DataBuks — AI Tools in Development</title>
        <meta
          name="description"
          content="We’re developing our own AI products alongside our client services. Explore our upcoming Sales Agent and Customizable Voice Agent."
        />
        <link rel="canonical" href="https://databuks.org/products" />
      </Helmet>

      <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#090909] text-[#111111] dark:text-[#F5F5F5] transition-colors duration-200">
        {/* 1. Page Header */}
        <section className="bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] py-16 md:py-24 relative overflow-hidden transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
                <span>In-House Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
                Products by DataBuks
              </h1>

              <p className="text-lg sm:text-xl text-[#555555] dark:text-[#B5B5B5] leading-relaxed pt-1">
                We’re developing our own AI products alongside our client services. Explore what’s coming next.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Product 1: Sales Agent */}
        <section id="sales-agent" className="py-16 md:py-24 border-b border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#090909] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-bold uppercase tracking-wider">
                    Coming soon
                  </span>
                  <span className="text-xs font-mono text-[#555555] dark:text-[#B5B5B5]">
                    Product 01
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
                    Sales Agent
                  </h2>
                  <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                    An upcoming sales-agent product from DataBuks. Contact us to discuss your sales workflow and learn more about the product being developed.
                  </p>
                </div>

                {/* Practical Capabilities Under Development */}
                <div className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] space-y-3 shadow-subtle">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5] block">
                    Focus Areas in Development
                  </span>
                  <ul className="space-y-2 text-sm text-[#555555] dark:text-[#B5B5B5]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#F5F5F5]">Engages website visitors with relevant qualification questions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#F5F5F5]">Extracts key project scope, timeline, and contact details.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#F5F5F5]">Passes structured summaries directly to WhatsApp or your CRM.</span>
                    </li>
                  </ul>
                </div>

                {/* Primary & Secondary Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    to="/contact?product=sales-agent"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
                  >
                    <span>Enquire About Sales Agent</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="https://databuks-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-transparent hover:bg-[#EAEAEA] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl shadow-xs transition-colors"
                  >
                    <span>Preview prototype</span>
                    <ExternalLink className="w-4 h-4 text-[#555555] dark:text-[#B5B5B5]" />
                  </a>
                </div>
              </div>

              {/* Visual: Lead Flow with Connected Nodes */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[#DADADA] dark:border-[#303030] bg-[#FFFFFF] dark:bg-[#171717] p-6 sm:p-8 shadow-card space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DADADA] dark:border-[#303030]">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                      <span className="text-xs font-bold text-[#111111] dark:text-[#F5F5F5]">Lead Flow Topology</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F1F1F1] dark:bg-[#111111] text-[#555555] dark:text-[#B5B5B5] border border-[#DADADA] dark:border-[#303030]">
                      Concept preview
                    </span>
                  </div>

                  {/* Connected Node Architecture Diagram */}
                  <div className="bg-[#FAFAFA] dark:bg-[#090909] rounded-xl p-5 sm:p-6 text-[#111111] dark:text-[#F5F5F5] space-y-4 relative overflow-hidden border border-[#DADADA] dark:border-[#303030]">
                    {/* Decorative subtle node lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="currentColor" strokeWidth="1.5" />
                    </svg>

                    {/* Nodes */}
                    <div className="relative z-10 space-y-3">
                      {/* Node 1: Inbound Visitor */}
                      <div className="p-3 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#111111] dark:bg-[#F5F5F5] animate-pulse" />
                          <span className="text-xs font-medium text-[#111111] dark:text-[#F5F5F5]">Inbound Visitor Session</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#555555] dark:text-[#B5B5B5]">Intent: B2B Quote</span>
                      </div>

                      {/* Node 2: Autonomous Agent Analysis */}
                      <div className="p-3.5 rounded-lg bg-[#F1F1F1] dark:bg-[#111111] border border-[#111111] dark:border-[#F5F5F5] space-y-1.5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#111111] dark:text-[#F5F5F5]">Contextual Dialogue Agent</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-white dark:bg-[#F5F5F5] dark:text-[#090909]">Active</span>
                        </div>
                        <p className="text-[11px] text-[#555555] dark:text-[#B5B5B5] leading-snug">
                          Verifies product specifications, confirms delivery city, and scores purchase readiness.
                        </p>
                      </div>

                      {/* Node 3: Structured Lead Routing */}
                      <div className="p-3 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2">
                          <Workflow className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
                          <span className="text-xs font-medium text-[#111111] dark:text-[#F5F5F5]">Verified Lead Handover</span>
                        </div>
                        <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-[#F5F5F5]">WhatsApp Alert Dispatched</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#555555] dark:text-[#B5B5B5] text-center pt-1">
                    Concept preview illustrating planned multi-stage qualification and routing architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product 2: Customizable Voice Agent */}
        <section id="voice-agent" className="py-16 md:py-24 border-b border-[#DADADA] dark:border-[#303030] bg-[#F1F1F1] dark:bg-[#111111] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Visual: Studio Microphone + Waveform */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl border border-[#DADADA] dark:border-[#303030] bg-[#FFFFFF] dark:bg-[#171717] p-6 sm:p-8 shadow-card space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DADADA] dark:border-[#303030]">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                      <span className="text-xs font-bold text-[#111111] dark:text-[#F5F5F5]">Voice Interface Architecture</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F1F1F1] dark:bg-[#090909] text-[#555555] dark:text-[#B5B5B5] border border-[#DADADA] dark:border-[#303030]">
                      Concept preview
                    </span>
                  </div>

                  {/* Studio Audio Hardware Photograph */}
                  <div className="relative rounded-xl overflow-hidden border border-[#DADADA] dark:border-[#303030] aspect-[16/9] bg-[#090909]">
                    <img
                      src={techVoiceMic}
                      alt="Professional studio broadcast microphone setup representing high-fidelity voice processing"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-mono text-white bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                        High-Fidelity Audio Telephony
                      </span>
                      <span className="text-[10px] font-mono text-gray-200">
                        Ultra-low latency
                      </span>
                    </div>
                  </div>

                  {/* Waveform & Conversational Node Frame */}
                  <div className="bg-[#FAFAFA] dark:bg-[#090909] rounded-xl p-4 sm:p-5 text-[#111111] dark:text-[#F5F5F5] space-y-3 border border-[#DADADA] dark:border-[#303030]">
                    {/* Visual Luminous Waveform in Monochrome */}
                    <div className="h-12 flex items-center justify-center gap-1.5 px-4 bg-[#F1F1F1] dark:bg-[#111111] rounded-lg border border-[#DADADA] dark:border-[#303030]">
                      {[18, 32, 45, 28, 55, 38, 62, 48, 30, 52, 60, 42, 26, 36, 20].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-full transition-all duration-300 bg-[#111111] dark:bg-[#F5F5F5]"
                          style={{
                            height: `${h}%`,
                            opacity: (i % 2 === 0 ? 0.9 : 0.4) + (i % 3 === 0 ? 0.1 : 0),
                          }}
                        />
                      ))}
                    </div>

                    {/* Dialogue Steps */}
                    <div className="space-y-2 pt-1">
                      <div className="p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] flex items-center justify-between text-xs shadow-xs">
                        <div className="flex items-center gap-2">
                          <Radio className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
                          <span className="text-[#111111] dark:text-[#F5F5F5]">Caller: "Need appointment for dental checkup"</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#555555] dark:text-[#B5B5B5]">Speech-to-Text</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#F1F1F1] dark:bg-[#111111] border border-[#111111] dark:border-[#F5F5F5] space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-[#111111] dark:text-[#F5F5F5]">Voice Assistant Response</span>
                          <span className="text-[10px] text-[#555555] dark:text-[#B5B5B5] font-mono">Natural conversational tone</span>
                        </div>
                        <p className="text-[11px] text-[#555555] dark:text-[#B5B5B5]">
                          "We have openings this Thursday at 2:30 PM. Would that suit your schedule?"
                        </p>
                      </div>

                      <div className="p-2 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] flex items-center justify-between text-[11px] shadow-xs">
                        <span className="text-[#555555] dark:text-[#B5B5B5]">Action: Calendar Slot Reserved</span>
                        <span className="text-[#111111] dark:text-[#F5F5F5] font-mono">SMS Confirmation Sent</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#555555] dark:text-[#B5B5B5] text-center pt-1">
                    Concept preview of conversational telephony flow and automated appointment reservation.
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-bold uppercase tracking-wider">
                    Coming soon
                  </span>
                  <span className="text-xs font-mono text-[#555555] dark:text-[#B5B5B5]">
                    Product 02
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
                    Customizable Voice Agent
                  </h2>
                  <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                    A customizable voice-agent product being developed around business-specific conversations and workflows. Talk to us about your requirements and the available customisation.
                  </p>
                </div>

                {/* Practical Capabilities Under Development */}
                <div className="p-5 rounded-xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] space-y-3 shadow-subtle">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5] block">
                    Customisation Focus
                  </span>
                  <ul className="space-y-2 text-sm text-[#555555] dark:text-[#B5B5B5]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#F5F5F5]">Custom conversational flows mapped to your specific business domain.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#F5F5F5]">Handles routine enquiries, scheduling requests, and triage calls.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#F5F5F5]">Configurable escalation to human team members when complexity arises.</span>
                    </li>
                  </ul>
                </div>

                {/* Primary & Secondary Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    to="/contact?product=voice-agent"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
                  >
                    <span>Enquire About Voice Agent</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="https://voice-agent-saas-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-transparent hover:bg-[#EAEAEA] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl shadow-xs transition-colors"
                  >
                    <span>Preview prototype</span>
                    <ExternalLink className="w-4 h-4 text-[#555555] dark:text-[#B5B5B5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Short Enquiry CTA */}
        <section className="bg-[#FAFAFA] dark:bg-[#090909] text-[#111111] dark:text-[#F5F5F5] py-14 md:py-20 border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
                Have a specific product or workflow need?
              </h2>
              <p className="text-sm sm:text-base text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                Whether you want early access to our sales or voice agent, or need bespoke software engineered from scratch, let's discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={siteConfig.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-transparent hover:bg-[#EAEAEA] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl shadow-subtle transition-all focus-ring"
                >
                  <MessageSquare className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
