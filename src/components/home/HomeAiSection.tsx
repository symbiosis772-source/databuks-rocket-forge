import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Database, Bot, Cpu } from "lucide-react";

export const HomeAiSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFA] dark:bg-[#090909] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI & Automation Development</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading leading-tight">
                Your business knowledge. Connected to useful AI.
              </h2>

              <p className="text-sm sm:text-base text-[#555555] dark:text-[#B5B5B5] leading-relaxed max-w-xl">
                Explore custom knowledge assistants, AI agents and automated workflows designed around your business.
              </p>

              {/* 3 Short Labels */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5]">
                  <Database className="w-3.5 h-3.5 text-[#555555] dark:text-[#B5B5B5]" />
                  <span>RAG Systems</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5]">
                  <Bot className="w-3.5 h-3.5 text-[#555555] dark:text-[#B5B5B5]" />
                  <span>AI Agents</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5]">
                  <Cpu className="w-3.5 h-3.5 text-[#555555] dark:text-[#B5B5B5]" />
                  <span>Workflow Automation</span>
                </span>
              </div>

              {/* Primary CTA */}
              <div className="pt-2">
                <Link
                  to="/ai-solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
                >
                  <span>Explore AI Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Mini-Preview Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#111111] dark:text-[#F5F5F5]">Knowledge Assistant</span>
                  <span className="text-[10px] uppercase font-bold text-[#555555] dark:text-[#B5B5B5]">RAG</span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Indexed against internal manuals and wikis with cited sources and permission boundaries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#111111] dark:text-[#F5F5F5]">Sales & Triage Agents</span>
                  <span className="text-[10px] uppercase font-bold text-[#555555] dark:text-[#B5B5B5]">Agents</span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Interacts with leads and support queues within guardrails, escalating to human staff when appropriate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#111111] dark:text-[#F5F5F5]">System Integrations</span>
                  <span className="text-[10px] uppercase font-bold text-[#555555] dark:text-[#B5B5B5]">Automation</span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Deterministic routing from inboxes and webhooks into CRM, ERP, and WhatsApp groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAiSection;
