import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  MessageSquare,
  Mic,
  Calendar,
  UserCheck,
} from "lucide-react";

export const UpcomingProducts: React.FC = () => {
  return (
    <section id="products" className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#DDDCD4] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#242621] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#A43F2B]" />
            <span>In-House Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#242621]">
            Products we’re building
          </h2>
          <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
            Alongside client projects, we’re developing our own sales and voice-agent products. Both are currently in active development to help businesses automate routine conversations.
          </p>
        </div>

        {/* Two Substantial Product Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Product 1: Sales Agent */}
          <div className="rounded-2xl bg-[#F7F4EE] border border-[#DDDCD4] p-6 sm:p-8 flex flex-col justify-between shadow-card space-y-6">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#F1DDD1] text-[#A43F2B] rounded-full">
                  Coming soon
                </span>
                <span className="text-xs font-mono text-[#62665E] px-2 py-0.5 bg-white rounded border border-[#DDDCD4]">
                  Concept preview
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#242621] tracking-tight">
                  Sales Agent
                </h3>
                <p className="text-sm font-medium text-[#A43F2B] mt-0.5">
                  Lead conversation and team handover
                </p>
              </div>

              <p className="text-sm text-[#62665E] leading-relaxed">
                An upcoming in-house sales agent designed to help Indian businesses capture visitor inquiries, collect necessary project information, and route qualified conversations directly to team members.
              </p>

              {/* Clean Lead Conversation & Handover Concept Visual */}
              <div className="p-4 rounded-xl bg-white border border-[#DDDCD4] space-y-3">
                <div className="text-[11px] font-mono text-[#62665E] flex items-center justify-between pb-1 border-b border-[#DDDCD4]/60">
                  <span className="flex items-center gap-1.5 font-semibold text-[#242621]">
                    <MessageSquare className="w-3.5 h-3.5 text-[#A43F2B]" />
                    Lead Conversation Flow
                  </span>
                  <span>Interactive Chat</span>
                </div>

                {/* Chat message 1 (Visitor) */}
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="w-5 h-5 rounded-full bg-[#DDDCD4] flex items-center justify-center text-[9px] font-bold text-[#242621] shrink-0">
                    U
                  </div>
                  <div className="p-2.5 rounded-lg rounded-tl-none bg-[#F7F4EE] text-xs text-[#242621] leading-relaxed">
                    Hi, do you dispatch bulk valves and pumps to Nagpur industrial area?
                  </div>
                </div>

                {/* Chat message 2 (Assistant) */}
                <div className="flex items-start justify-end gap-2 ml-auto max-w-[85%]">
                  <div className="p-2.5 rounded-lg rounded-tr-none bg-[#242621] text-white text-xs leading-relaxed">
                    Yes, we deliver across MIDC. What specifications or quantity do you need?
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#A43F2B] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                    A
                  </div>
                </div>

                {/* Handover Card */}
                <div className="p-2.5 rounded-lg bg-[#E5E7DA] border border-[#DDDCD4] flex items-center justify-between text-xs text-[#242621]">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#A43F2B] shrink-0" />
                    <span className="font-semibold text-[11px]">Qualified: Transferred to Sales Team on WhatsApp</span>
                  </div>
                  <span className="text-[10px] text-[#62665E]">Full context saved</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 border-t border-[#DDDCD4] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact?service=sales-agent"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring"
              >
                <span>Enquire About This Product</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://databuks-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-[#242621] hover:text-[#A43F2B] bg-white hover:bg-[#DDDCD4]/60 border border-[#DDDCD4] rounded-xl transition-colors"
              >
                <span>Preview prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product 2: Customizable Voice Agent */}
          <div className="rounded-2xl bg-[#F7F4EE] border border-[#DDDCD4] p-6 sm:p-8 flex flex-col justify-between shadow-card space-y-6">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#F1DDD1] text-[#A43F2B] rounded-full">
                  Coming soon
                </span>
                <span className="text-xs font-mono text-[#62665E] px-2 py-0.5 bg-white rounded border border-[#DDDCD4]">
                  Concept preview
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#242621] tracking-tight">
                  Customizable Voice Agent
                </h3>
                <p className="text-sm font-medium text-[#A43F2B] mt-0.5">
                  Business-specific voice triage & appointment flows
                </p>
              </div>

              <p className="text-sm text-[#62665E] leading-relaxed">
                A voice-agent product being developed for business-specific conversations and workflows. Designed to answer routine inquiries and schedule appointments. Available customisation and integrations are discussed and configured around your business needs.
              </p>

              {/* Clean Voice Conversation & Waveform Concept Visual */}
              <div className="p-4 rounded-xl bg-white border border-[#DDDCD4] space-y-3">
                <div className="text-[11px] font-mono text-[#62665E] flex items-center justify-between pb-1 border-b border-[#DDDCD4]/60">
                  <div className="flex items-center gap-1.5 font-semibold text-[#242621]">
                    <Mic className="w-3.5 h-3.5 text-[#A43F2B]" />
                    <span>Voice Conversation & Appointment Booking</span>
                  </div>
                  {/* Subtle waveform accent that settles */}
                  <div className="flex items-center gap-1 h-3">
                    <span className="w-1 h-3 bg-[#A43F2B] rounded-full animate-pulse" />
                    <span className="w-1 h-2 bg-[#A43F2B]/70 rounded-full" />
                    <span className="w-1 h-3 bg-[#A43F2B] rounded-full animate-pulse" />
                    <span className="w-1 h-1.5 bg-[#A43F2B]/50 rounded-full" />
                  </div>
                </div>

                {/* Spoken exchange snippet */}
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]/60">
                    <span className="text-[10px] uppercase font-bold text-[#62665E] block">Caller:</span>
                    <span className="text-[#242621]">"I need to schedule an on-site equipment check for our machinery."</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#242621] text-white">
                    <span className="text-[10px] uppercase font-bold text-[#F1DDD1] block">Voice Agent:</span>
                    <span>"I can book that for you. Is tomorrow at 11:30 AM suitable for your facility team?"</span>
                  </div>
                </div>

                {/* Scheduled Result */}
                <div className="p-2.5 rounded-lg bg-[#E5E7DA] border border-[#DDDCD4] flex items-center justify-between text-xs text-[#242621]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#A43F2B] shrink-0" />
                    <span className="font-semibold text-[11px]">Appointment Slot Reserved</span>
                  </div>
                  <span className="text-[10px] text-[#62665E]">Synced to calendar</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 border-t border-[#DDDCD4] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact?service=voice-agent"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring"
              >
                <span>Enquire About This Product</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://voice-agent-saas-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-[#242621] hover:text-[#A43F2B] bg-white hover:bg-[#DDDCD4]/60 border border-[#DDDCD4] rounded-xl transition-colors"
              >
                <span>Preview prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProducts;
