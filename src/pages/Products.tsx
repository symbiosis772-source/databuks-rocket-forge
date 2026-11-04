import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import {
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Bot,
  Mic,
  Sparkles,
  Layers,
  CheckCircle2,
  Workflow,
  Radio,
  Clock,
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

      <main className="min-h-screen bg-[#F7F4EE]">
        {/* 1. Page Header */}
        <section className="bg-[#FFFFFF] border-b border-[#DDDCD4] py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#A43F2B] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>In-House Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242621]">
                Products by DataBuks
              </h1>

              <p className="text-lg sm:text-xl text-[#62665E] leading-relaxed pt-1">
                We’re developing our own AI products alongside our client services. Explore what’s coming next.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Product 1: Sales Agent */}
        <section id="sales-agent" className="py-16 md:py-24 border-b border-[#DDDCD4]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1DDD1] text-[#A43F2B] text-xs font-bold uppercase tracking-wider">
                    Coming soon
                  </span>
                  <span className="text-xs font-mono text-[#62665E]">
                    Product 01
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#242621]">
                    Sales Agent
                  </h2>
                  <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
                    An upcoming sales-agent product from DataBuks. Contact us to discuss your sales workflow and learn more about the product being developed.
                  </p>
                </div>

                {/* Practical Capabilities Under Development */}
                <div className="p-5 rounded-xl bg-white border border-[#DDDCD4] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A43F2B] block">
                    Focus Areas in Development
                  </span>
                  <ul className="space-y-2 text-sm text-[#242621]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <span>Engages website visitors with relevant qualification questions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <span>Extracts key project scope, budget tier, and contact details.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <span>Passes structured summaries directly to WhatsApp or your CRM.</span>
                    </li>
                  </ul>
                </div>

                {/* Primary & Secondary Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    to="/contact?product=sales-agent"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
                  >
                    <span>Enquire About Sales Agent</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://databuks-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#242621] bg-white hover:bg-[#E5E7DA] border border-[#DDDCD4] rounded-xl shadow-xs transition-colors"
                  >
                    <span>Preview prototype</span>
                    <ExternalLink className="w-4 h-4 text-[#62665E]" />
                  </a>
                </div>
              </div>

              {/* Visual: Lead Flow with Connected Nodes */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[#DDDCD4] bg-[#FFFFFF] p-6 sm:p-8 shadow-card space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DDDCD4]">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-[#A43F2B]" />
                      <span className="text-xs font-bold text-[#242621]">Lead Flow Topology</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#E5E7DA] text-[#62665E]">
                      Concept preview
                    </span>
                  </div>

                  {/* Connected Node Architecture Diagram */}
                  <div className="bg-[#181B1A] rounded-xl p-5 sm:p-6 text-[#F7F4EE] space-y-4 relative overflow-hidden">
                    {/* Decorative subtle node lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="#88C0D0" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="#88C0D0" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#A43F2B" strokeWidth="1.5" />
                    </svg>

                    {/* Nodes */}
                    <div className="relative z-10 space-y-3">
                      {/* Node 1: Inbound Visitor */}
                      <div className="p-3 rounded-lg bg-[#242A28] border border-[#363E3B] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#88C0D0] animate-pulse" />
                          <span className="text-xs font-medium text-[#DDDCD4]">Inbound Visitor Session</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#A2A8A2]">Intent: B2B Quote</span>
                      </div>

                      {/* Node 2: Autonomous Agent Analysis */}
                      <div className="p-3.5 rounded-lg bg-[#2E3633] border border-[#A43F2B]/60 space-y-1.5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#F1DDD1]">Contextual Dialogue Agent</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A43F2B]/40 text-[#F1DDD1]">Active</span>
                        </div>
                        <p className="text-[11px] text-[#A2A8A2] leading-snug">
                          Verifies product specifications, confirms delivery city, and scores purchase readiness.
                        </p>
                      </div>

                      {/* Node 3: Structured Lead Routing */}
                      <div className="p-3 rounded-lg bg-[#242A28] border border-[#363E3B] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Workflow className="w-3.5 h-3.5 text-[#F1DDD1]" />
                          <span className="text-xs font-medium text-[#DDDCD4]">Verified Lead Handover</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">WhatsApp Alert Dispatched</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#62665E] text-center pt-1">
                    Concept preview illustrating planned multi-stage qualification and routing architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product 2: Customizable Voice Agent */}
        <section id="voice-agent" className="py-16 md:py-24 border-b border-[#DDDCD4] bg-[#FFFFFF]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Visual: Waveform & Conversation Flow */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl border border-[#DDDCD4] bg-[#F7F4EE] p-6 sm:p-8 shadow-card space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#DDDCD4]">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-[#A43F2B]" />
                      <span className="text-xs font-bold text-[#242621]">Voice Interface Topology</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#E5E7DA] text-[#62665E]">
                      Concept preview
                    </span>
                  </div>

                  {/* Luminous Waveform & Conversational Node Frame */}
                  <div className="bg-[#181B1A] rounded-xl p-5 sm:p-6 text-[#F7F4EE] space-y-4">
                    {/* Visual Luminous Waveform */}
                    <div className="h-16 flex items-center justify-center gap-1.5 px-4 bg-[#242A28] rounded-lg border border-[#363E3B]">
                      {[18, 32, 45, 28, 55, 38, 62, 48, 30, 52, 60, 42, 26, 36, 20].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-full transition-all duration-300"
                          style={{
                            height: `${h}%`,
                            backgroundColor: i % 3 === 0 ? "#A43F2B" : i % 2 === 0 ? "#88C0D0" : "#F1DDD1",
                          }}
                        />
                      ))}
                    </div>

                    {/* Dialogue Steps */}
                    <div className="space-y-2.5 pt-1">
                      <div className="p-3 rounded-lg bg-[#242A28] border border-[#363E3B] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <Radio className="w-3.5 h-3.5 text-[#88C0D0]" />
                          <span className="text-[#DDDCD4]">Caller: "Need appointment for dental checkup"</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#A2A8A2]">Speech-to-Text</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#2E3633] border border-[#A43F2B]/60 space-y-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-[#F1DDD1]">Voice Assistant Response</span>
                          <span className="text-[10px] text-emerald-400 font-mono">Calm natural tone</span>
                        </div>
                        <p className="text-[11px] text-[#A2A8A2]">
                          "We have openings this Thursday at 2:30 PM. Would that suit your schedule?"
                        </p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#242A28] border border-[#363E3B] flex items-center justify-between text-[11px]">
                        <span className="text-[#A2A8A2]">Action: Calendar Slot Reserved</span>
                        <span className="text-emerald-400 font-mono">SMS Confirmation Sent</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#62665E] text-center pt-1">
                    Concept preview of conversational telephony flow and automated appointment reservation.
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1DDD1] text-[#A43F2B] text-xs font-bold uppercase tracking-wider">
                    Coming soon
                  </span>
                  <span className="text-xs font-mono text-[#62665E]">
                    Product 02
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#242621]">
                    Customizable Voice Agent
                  </h2>
                  <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
                    A customizable voice-agent product being developed around business-specific conversations and workflows. Talk to us about your requirements and the available customisation.
                  </p>
                </div>

                {/* Practical Capabilities Under Development */}
                <div className="p-5 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A43F2B] block">
                    Customisation Focus
                  </span>
                  <ul className="space-y-2 text-sm text-[#242621]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <span>Custom conversational flows mapped to your specific business domain.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <span>Handles routine enquiries, scheduling requests, and triage calls.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <span>Configurable escalation to human team members when complexity arises.</span>
                    </li>
                  </ul>
                </div>

                {/* Primary & Secondary Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    to="/contact?product=voice-agent"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
                  >
                    <span>Enquire About Voice Agent</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://voice-agent-saas-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#242621] bg-white hover:bg-[#E5E7DA] border border-[#DDDCD4] rounded-xl shadow-xs transition-colors"
                  >
                    <span>Preview prototype</span>
                    <ExternalLink className="w-4 h-4 text-[#62665E]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Short Enquiry CTA */}
        <section className="bg-[#242A28] text-[#F7F4EE] py-14 md:py-20 border-b border-[#363E3B]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F7F4EE]">
                Have a specific product or workflow need?
              </h2>
              <p className="text-sm sm:text-base text-[#A2A8A2] leading-relaxed">
                Whether you want early access to our sales or voice agent, or need bespoke software engineered from scratch, let's discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#F7F4EE] bg-[#313835] hover:bg-[#3D4542] border border-[#48524E] rounded-xl shadow-sm transition-all focus-ring"
                >
                  <MessageSquare className="w-4 h-4 text-[#F1DDD1]" />
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
