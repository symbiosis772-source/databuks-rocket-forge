import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  ArrowRight,
  Database,
  Bot,
  Cpu,
  Layers,
  ArrowDown,
  Shield,
  FileSearch,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { aiSolutionsData, AiSolution, SolutionCategory } from "@/data/aiSolutionsData";
import { SolutionDetailModal } from "@/components/ai/SolutionDetailModal";
import { siteConfig } from "@/config/siteConfig";

export const AiSolutions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | SolutionCategory>("All");
  const [activeModalSolution, setActiveModalSolution] = useState<AiSolution | null>(null);

  const filteredSolutions =
    selectedCategory === "All"
      ? aiSolutionsData
      : aiSolutionsData.filter((item) => item.category === selectedCategory);

  const categories: Array<"All" | SolutionCategory> = [
    "All",
    "RAG & Knowledge",
    "AI Agents",
    "Automation",
  ];

  const scrollToCatalogue = () => {
    const el = document.getElementById("solutions-catalogue");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Custom AI Solutions & Workflow Automation — DataBuks</title>
        <meta
          name="description"
          content="Custom RAG knowledge assistants, task-oriented AI agents, and deterministic business automation engineered for businesses worldwide. Based in Nagpur, India."
        />
        <link rel="canonical" href="https://databuks.org/ai-solutions" />
      </Helmet>

      <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#090909] text-[#111111] dark:text-[#F5F5F5] transition-colors duration-200">
        {/* ========================================================
            1. HUB HERO SECTION
            ======================================================== */}
        <section className="bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] py-16 md:py-24 transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
                <span>Custom AI Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading leading-[1.15]">
                AI systems built around your business knowledge and workflows.
              </h1>

              <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                We build retrieval-augmented generation systems, AI agents and connected automations that help teams find information, handle enquiries and complete defined business tasks.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/contact?service=ai-solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
                >
                  <span>Discuss an AI Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={scrollToCatalogue}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-[#FFFFFF] dark:bg-[#171717] hover:bg-[#EAEAEA] dark:hover:bg-[#222222] border border-[#DADADA] dark:border-[#303030] rounded-xl shadow-subtle transition-colors focus-ring"
                >
                  <span>Explore Solutions</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3-Part Card Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 pt-10 border-t border-[#DADADA] dark:border-[#303030]">
              {/* Card 1: RAG */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] dark:text-[#F5F5F5]">
                  RAG Systems
                </h3>
                <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Find relevant information in your approved documents and use it to support answers with citations.
                </p>
              </div>

              {/* Card 2: AI Agents */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] dark:text-[#F5F5F5]">
                  AI Agents
                </h3>
                <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Use business tools to carry out defined tasks within agreed permissions and role boundaries.
                </p>
              </div>

              {/* Card 3: Automation */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Automation
                </h3>
                <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Move information between systems and trigger repeatable actions reliably without human friction.
                </p>
              </div>
            </div>

            {/* Architecture Diagram: Readable and Responsive */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card">
              <div className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-5 text-center sm:text-left">
                System Workflow Architecture
              </div>

              {/* Desktop Horizontal Flow / Mobile Vertical Flow */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* Node 1: Business knowledge + Connected tools */}
                <div className="w-full lg:w-1/3 p-4 sm:p-5 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-center space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                    Source Layer
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                    Business Knowledge + Connected Tools
                  </div>
                  <div className="text-xs text-[#555555] dark:text-[#B5B5B5]">
                    Drive, Notion, CRM, SQL, APIs
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex items-center justify-center shrink-0">
                  <div className="hidden lg:flex items-center gap-1 text-[#555555] dark:text-[#B5B5B5]">
                    <div className="w-6 h-0.5 bg-[#DADADA] dark:bg-[#303030]" />
                    <ArrowRight className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                  </div>
                  <div className="lg:hidden text-[#111111] dark:text-[#F5F5F5]">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Node 2: AI Workflow */}
                <div className="w-full lg:w-1/3 p-4 sm:p-5 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-center space-y-1 relative">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                    Execution Layer
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                    AI Workflow & Reasoning
                  </div>
                  <div className="text-xs text-[#555555] dark:text-[#B5B5B5]">
                    Vector retrieval, guardrails, role boundaries
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex items-center justify-center shrink-0">
                  <div className="hidden lg:flex items-center gap-1 text-[#555555] dark:text-[#B5B5B5]">
                    <div className="w-6 h-0.5 bg-[#DADADA] dark:bg-[#303030]" />
                    <ArrowRight className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                  </div>
                  <div className="lg:hidden text-[#111111] dark:text-[#F5F5F5]">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                </div>

                {/* Node 3: Answer, Action or Human Review */}
                <div className="w-full lg:w-1/3 p-4 sm:p-5 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-center space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                    Outcome Layer
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                    Answer, Action or Human Review
                  </div>
                  <div className="text-xs text-[#555555] dark:text-[#B5B5B5]">
                    Cited response, ticket triage, staff escalation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. FILTERABLE SOLUTION CATALOGUE
            ======================================================== */}
        <section id="solutions-catalogue" className="py-16 md:py-24 bg-[#FAFAFA] dark:bg-[#090909] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 space-y-10">
            {/* Catalogue Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DADADA] dark:border-[#303030] pb-8">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                  Solution Examples
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading">
                  12 AI & automation architectures we can build for your business.
                </h2>
                <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Examples of solutions we can build. Each system is custom developed and deployed within your own infrastructure or cloud. Not off-the-shelf software or live demos.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                      selectedCategory === cat
                        ? "bg-[#111111] text-[#FFFFFF] dark:bg-[#F5F5F5] dark:text-[#090909] border-[#111111] dark:border-[#F5F5F5] shadow-subtle"
                        : "bg-[#FFFFFF] text-[#555555] dark:bg-[#171717] dark:text-[#B5B5B5] border-[#DADADA] dark:border-[#303030] hover:text-[#111111] dark:hover:text-[#F5F5F5]"
                    }`}
                  >
                    {cat}
                    <span className="ml-1.5 opacity-60">
                      ({cat === "All" ? aiSolutionsData.length : aiSolutionsData.filter((i) => i.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Catalogue Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.id}
                  className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card flex flex-col justify-between hover:border-[#111111] dark:hover:border-[#F5F5F5] transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    {/* Category Pill */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#555555] dark:text-[#B5B5B5]">
                        {solution.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-[#111111] dark:text-[#F5F5F5] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
                      {solution.name}
                    </h3>

                    {/* Problem Statement */}
                    <div className="p-3 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                      <span className="font-semibold text-[#111111] dark:text-[#F5F5F5] block mb-0.5">
                        Problem:
                      </span>
                      {solution.problem}
                    </div>

                    {/* Short Explanation */}
                    <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                      {solution.shortExplanation}
                    </p>

                    {/* Workflow Step Preview */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block mb-2">
                        Workflow Sequence:
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {solution.steps.map((st, i) => (
                          <div
                            key={i}
                            className="text-[11px] px-2 py-1 rounded bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] truncate"
                            title={`${st.name} (${st.type})`}
                          >
                            <span className="opacity-50 mr-1">{i + 1}.</span>
                            {st.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-4 border-t border-[#DADADA] dark:border-[#303030]">
                    <button
                      type="button"
                      onClick={() => setActiveModalSolution(solution)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#111111] text-[#111111] dark:text-[#F5F5F5] hover:bg-[#111111] hover:text-white dark:hover:bg-[#F5F5F5] dark:hover:text-[#090909] transition-all"
                    >
                      <span>Explore solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. DELIVERY APPROACH (4-STAGE PROCESS)
            ======================================================== */}
        <section className="py-16 md:py-24 bg-[#F1F1F1] dark:bg-[#111111] border-y border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                How We Deliver
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading">
                A disciplined four-stage development process.
              </h2>
              <p className="text-sm md:text-base text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                We avoid speculative prototypes. Every AI implementation is scoped against defined inputs, deterministic boundaries, and measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stage 1 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                  Stage 01
                </span>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Understand the workflow
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Map the exact inputs, documents, role permissions, and target tools. Determine where AI adds leverage and where deterministic logic is required.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                  Stage 02
                </span>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Build a focused prototype
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Implement vector indexing, retrieval pipelines, or tool calling on sample business data to validate response accuracy and grounding before rollout.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                  Stage 03
                </span>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Evaluate and integrate
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Benchmark citation fidelity, simulate edge cases, test guardrails, and connect the workflow to your internal systems via webhooks or APIs.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                  Stage 04
                </span>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Deploy and improve
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Deploy to your chosen cloud or on-prem environment. Establish monitoring, token cost tracking, human escalation queues, and training for your staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. CONCRETE CONSIDERATIONS & CREDIBILITY SECTION
            ======================================================== */}
        <section className="py-16 md:py-24 bg-[#FAFAFA] dark:bg-[#090909] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block">
                Engineering Principles
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading">
                Real considerations for deploying AI in production.
              </h2>
              <p className="text-sm md:text-base text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                We believe in straightforward engineering over marketing hype. Here is how we address real-world reliability, security, and operational expenses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Consideration 1 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Access Permissions & Security
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Systems only query documents and tools the assigned user role is authorized to see. Sensitive internal records remain isolated behind role-based access control.
                </p>
              </div>

              {/* Consideration 2 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <FileSearch className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Source References & Citations
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Rather than generating unsupported statements, answers cite specific source documents, sections, or manual pages so your team can verify any claim instantly.
                </p>
              </div>

              {/* Consideration 3 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Missing Information Handling
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  When relevant documentation is absent, the system explicitly states it cannot answer and flags the missing topic for review—preventing fabricated answers.
                </p>
              </div>

              {/* Consideration 4 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Human Review & Escalation
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  High-stakes operational decisions (such as refunds, contract changes, or customer complaints) always pause for explicit human authorization.
                </p>
              </div>

              {/* Consideration 5 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Audit Trails & Observability
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Every user prompt, retrieved context chunk, confidence score, and external tool trigger is logged with transparent tracing for quality assurance.
                </p>
              </div>

              {/* Consideration 6 */}
              <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                </div>
                <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Predictable Operating Costs
                </h3>
                <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  We design with model-tier selection (e.g., small local models for classification, frontier models only for complex synthesis) to keep monthly inference fees controlled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. UPCOMING IN-HOUSE PRODUCTS CROSS-LINK
            ======================================================== */}
        <section className="py-12 bg-[#F1F1F1] dark:bg-[#111111] border-t border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5]">
                  In-House Products
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-[#F5F5F5]">
                  Looking for our upcoming products?
                </h3>
                <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                  Alongside custom engineering client projects, DataBuks is actively developing two dedicated in-house products: our autonomous Sales Agent and customizable Voice Agent.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#111111] text-[#111111] dark:text-[#F5F5F5] hover:bg-[#111111] hover:text-white dark:hover:bg-[#F5F5F5] dark:hover:text-[#090909] transition-all shrink-0"
              >
                <span>Explore Products by DataBuks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. FINAL CALL TO ACTION
            ======================================================== */}
        <section className="py-16 md:py-24 bg-[#FAFAFA] dark:bg-[#090909] border-t border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading max-w-2xl mx-auto">
              Ready to connect your business workflows to AI?
            </h2>
            <p className="text-base text-[#555555] dark:text-[#B5B5B5] max-w-xl mx-auto leading-relaxed">
              Tell us what your team spends time searching for, triaging, or repeating manually. We'll outline a practical architecture and initial prototype.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                to="/contact?service=ai-solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
              >
                <span>Discuss an AI Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`${siteConfig.brand.whatsappUrl}%20regarding%20AI%20Solutions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-[#FFFFFF] dark:bg-[#171717] hover:bg-[#EAEAEA] dark:hover:bg-[#222222] border border-[#DADADA] dark:border-[#303030] rounded-xl shadow-subtle transition-colors focus-ring"
              >
                <MessageSquare className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-[#555555] dark:text-[#B5B5B5] pt-4">
              Engineering studio in Nagpur, India • Working worldwide
            </p>
          </div>
        </section>
      </main>

      {/* Solution Detail Modal */}
      <SolutionDetailModal
        solution={activeModalSolution}
        onClose={() => setActiveModalSolution(null)}
      />
    </>
  );
};

export default AiSolutions;
