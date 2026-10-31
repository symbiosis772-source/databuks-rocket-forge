import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { portfolioProjects } from "@/data/portfolioData";
import { ImageModal } from "@/components/ui/ImageModal";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Wrench,
  ShieldCheck,
  ZoomIn,
} from "lucide-react";

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${project.name} Case Study — DataBuks`}</title>
        <meta name="description" content={project.shortSummary} />
        <link rel="canonical" href={`https://databuks.org/portfolio/${project.slug}`} />
      </Helmet>

      <main className="min-h-screen bg-[#F6F5EF]">
        {/* Navigation Breadcrumb */}
        <div className="bg-[#FFFFFF] border-b border-[#D8E0D8] py-4">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#53635C] hover:text-[#123B32] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-[#FFFFFF] border-b border-[#D8E0D8] py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5ECE5] text-[#123B32] border border-[#D8E0D8]">
                  {project.category}
                </span>
                <span className="text-xs text-[#53635C] font-medium">
                  {project.industry}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#182822] font-heading">
                {project.name}
              </h1>

              <p className="text-lg text-[#182822] leading-relaxed font-medium">
                {project.tagline}
              </p>

              <p className="text-sm md:text-base text-[#53635C] leading-relaxed">
                {project.shortSummary}
              </p>

              {project.liveUrl && (
                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#182822] bg-[#E5ECE5] hover:bg-[#D8E0D8] rounded-lg transition-colors"
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#53635C]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Real Screenshot Showcase */}
        <section className="py-10 md:py-14">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 border border-[#D8E0D8] shadow-card">
              <div className="relative rounded-xl overflow-hidden border border-[#D8E0D8] bg-[#F6F5EF] group">
                <img
                  src={project.image}
                  alt={`${project.name} application screenshot`}
                  className="w-full h-auto max-h-[550px] object-cover object-top"
                />
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="absolute inset-0 bg-[#123B32]/0 hover:bg-[#123B32]/30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="Enlarge screenshot"
                >
                  <span className="bg-[#123B32]/90 text-white px-3 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-4 h-4" /> Enlarge full screenshot
                  </span>
                </button>
              </div>
              <p className="text-center text-xs text-[#53635C] mt-3">
                Real interface preview of {project.name}. Client proprietary data has been masked for confidentiality.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Case Study Breakdown */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Context, Problem, Contribution */}
              <div className="lg:col-span-8 space-y-8">
                {/* 1. Client Context */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D8E0D8]">
                  <h2 className="text-xl font-bold text-[#182822] font-heading mb-3">
                    Client Context
                  </h2>
                  <p className="text-sm md:text-base text-[#53635C] leading-relaxed">
                    {project.clientContext}
                  </p>
                </div>

                {/* 2. Problem */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D8E0D8]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-[#123B32] shrink-0" />
                    <h2 className="text-xl font-bold text-[#182822] font-heading">
                      The Operational Challenge
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#53635C] leading-relaxed">
                    {project.clientProblem}
                  </p>
                </div>

                {/* 3. DataBuks Role & Scope */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#D8E0D8]">
                  <h2 className="text-xl font-bold text-[#182822] font-heading mb-3">
                    Exact Role & Scope
                  </h2>
                  <p className="text-sm md:text-base text-[#53635C] leading-relaxed">
                    {project.databuksContribution}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#D8E0D8]/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#182822] block mb-3">
                      Confirmed Delivered Capabilities:
                    </span>
                    <ul className="space-y-2">
                      {project.deliveredCapabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#182822]">
                          <CheckCircle2 className="w-4 h-4 text-[#123B32] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Factual Outcome */}
                <div className="bg-[#E5ECE5] rounded-2xl p-6 sm:p-8 border border-[#D8E0D8]">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#123B32] shrink-0" />
                    <h2 className="text-xl font-bold text-[#182822] font-heading">
                      Factual Deliverable Outcome
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#182822] leading-relaxed">
                    {project.factualOutcome}
                  </p>
                </div>
              </div>

              {/* Right Column: Meta details, Secondary Tools, CTA */}
              <div className="lg:col-span-4 space-y-6">
                {/* Project Specs Card */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#D8E0D8] space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#53635C]">
                    Project Summary
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-[#53635C] block">Category:</span>
                      <span className="font-semibold text-[#182822]">{project.category}</span>
                    </div>
                    <div>
                      <span className="text-[#53635C] block">Industry:</span>
                      <span className="font-semibold text-[#182822]">{project.industry}</span>
                    </div>
                    <div>
                      <span className="text-[#53635C] block">Location Fit:</span>
                      <span className="font-semibold text-[#182822]">India</span>
                    </div>
                  </div>

                  {/* Secondary Tools Badges */}
                  <div className="pt-4 border-t border-[#D8E0D8]/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#182822] block mb-2 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-[#123B32]" /> Technologies Utilised:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F6F5EF] text-[#182822] border border-[#D8E0D8]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Related Project CTA */}
                <div className="bg-[#123B32] text-[#F6F5EF] rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold font-heading">
                    Discuss a project like this.
                  </h3>
                  <p className="text-xs text-[#E5ECE5] leading-relaxed">
                    Have similar operational requirements? Let’s review your workflow and prepare a clear written estimate.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#182822] bg-[#D6F279] hover:bg-[#cbf056] rounded-lg transition-colors"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {modalOpen && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageSrc={project.image}
          imageAlt={project.name}
          caption={`${project.name} — ${project.tagline}`}
        />
      )}
    </>
  );
};

export default CaseStudyDetail;
