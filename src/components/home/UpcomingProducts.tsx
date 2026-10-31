import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Play, Pause, Sparkles, MessageSquare, Mic, PhoneCall } from "lucide-react";

export const UpcomingProducts: React.FC = () => {
  const [isPlayingWave, setIsPlayingWave] = useState(true);

  return (
    <section id="products" className="bg-[#F7F4EE] py-16 md:py-24 border-b border-[#DDDCD4] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5E7DA] border border-[#DDDCD4] text-[#242621] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#A43F2B]" />
            <span>In-House R&D</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.14] font-bold tracking-tight text-[#242621]">
            Products we’re building.
          </h2>
          <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
            Alongside client projects, we’re developing our own sales and voice-agent products. Both are currently in active development to help businesses automate high-friction conversations.
          </p>
        </div>

        {/* Two Substantial Product Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Product 1: Sales Agent */}
          <div className="rounded-[22px] bg-[#FFFFFF] border border-[#DDDCD4] p-6 sm:p-8 flex flex-col justify-between shadow-card space-y-6">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#F1DDD1] text-[#A43F2B] rounded-full">
                  Coming soon • In development
                </span>
                <span className="text-xs font-mono text-[#62665E] px-2 py-0.5 bg-[#F7F4EE] rounded border border-[#DDDCD4]">
                  Concept preview
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#242621] tracking-tight">
                  Sales Agent
                </h3>
                <p className="text-sm font-medium text-[#A43F2B] mt-0.5">
                  Automated lead qualification and inquiry routing
                </p>
              </div>

              <p className="text-sm text-[#62665E] leading-relaxed">
                An upcoming in-house sales agent designed to help Indian businesses capture visitor intent, collect required project parameters, and hand over qualified leads directly to sales teams.
              </p>

              {/* Original Abstract Lead-Flow Illustration (No client screenshots) */}
              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-3">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#62665E] flex items-center justify-between">
                  <span>Abstract Qualification Flow</span>
                  <span className="text-[#A43F2B]">Direct Pipeline</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#DDDCD4] flex flex-col items-center">
                    <MessageSquare className="w-4 h-4 text-[#A43F2B] mb-1" />
                    <span className="font-semibold text-[#242621] text-[11px]">Visitor Intent</span>
                    <span className="text-[10px] text-[#62665E] mt-0.5">Inquiry capture</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#DDDCD4] flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-[#A43F2B] border-t-transparent animate-spin mb-1" style={{ animationDuration: '3s' }} />
                    <span className="font-semibold text-[#242621] text-[11px]">Structured Triage</span>
                    <span className="text-[10px] text-[#62665E] mt-0.5">Key questions</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#DDDCD4] flex flex-col items-center">
                    <PhoneCall className="w-4 h-4 text-[#242621] mb-1" />
                    <span className="font-semibold text-[#242621] text-[11px]">Team Escalation</span>
                    <span className="text-[10px] text-[#62665E] mt-0.5">WhatsApp / CRM</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#62665E] leading-relaxed pt-1">
                  Features are observed in sandbox prototype testing. Supported channels and full specifications will be confirmed upon release.
                </p>
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
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-[#242621] hover:text-[#A43F2B] bg-[#F7F4EE] hover:bg-[#DDDCD4]/60 border border-[#DDDCD4] rounded-xl transition-colors"
              >
                <span>Preview prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product 2: Customizable Voice Agent */}
          <div className="rounded-[22px] bg-[#FFFFFF] border border-[#DDDCD4] p-6 sm:p-8 flex flex-col justify-between shadow-card space-y-6">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#F1DDD1] text-[#A43F2B] rounded-full">
                  Coming soon • In development
                </span>
                <span className="text-xs font-mono text-[#62665E] px-2 py-0.5 bg-[#F7F4EE] rounded border border-[#DDDCD4]">
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
                A voice-agent product being developed for business-specific conversations and workflows. Available customisation (such as conversational scripts, appointment booking, and CRM integrations) will be confirmed during a discussion.
              </p>

              {/* Original Waveform & Conversational Flow Graphic */}
              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#62665E]">
                  <div className="flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-[#A43F2B]" />
                    <span>Acoustic Waveform & Triage Flow</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlayingWave(!isPlayingWave)}
                    className="inline-flex items-center gap-1 text-[10px] text-[#242621] hover:text-[#A43F2B] px-1.5 py-0.5 rounded bg-white border border-[#DDDCD4]"
                    aria-label={isPlayingWave ? "Pause wave animation" : "Resume wave animation"}
                  >
                    {isPlayingWave ? (
                      <>
                        <Pause className="w-2.5 h-2.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-2.5 h-2.5" />
                        <span>Play</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Animated / Settled Waveform Bars */}
                <div className="h-14 bg-[#FFFFFF] rounded-lg border border-[#DDDCD4] flex items-center justify-center gap-1.5 px-4 overflow-hidden">
                  {[18, 32, 48, 26, 42, 54, 38, 22, 45, 52, 28, 36, 48, 20, 34, 46, 24, 16].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-[#A43F2B] rounded-full transition-all duration-300"
                      style={{
                        height: isPlayingWave ? `${h}px` : '20px',
                        opacity: 0.7 + (i % 3) * 0.1,
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#62665E] px-1">
                  <span>Custom speech recognition</span>
                  <span>•</span>
                  <span>Business context rules</span>
                  <span>•</span>
                  <span>Human fail-safe</span>
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
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-[#242621] hover:text-[#A43F2B] bg-[#F7F4EE] hover:bg-[#DDDCD4]/60 border border-[#DDDCD4] rounded-xl transition-colors"
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
