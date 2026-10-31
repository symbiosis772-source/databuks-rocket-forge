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

      <main className="min-h-screen bg-[#F7F4EE]">
        {/* Navigation Breadcrumb */}
        <div className="bg-[#FFFFFF] border-b border-[#DDDCD4] py-4">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#62665E] hover:text-[#A43F2B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-[#FFFFFF] border-b border-[#DDDCD4] py-12 md:py-16">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5E7DA] text-[#A43F2B] border border-[#DDDCD4]">
                  {project.category}
                </span>
                <span className="text-xs text-[#62665E] font-medium">
                  {project.industry}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242621] font-heading">
                {project.name}
              </h1>

              <p className="text-lg text-[#242621] leading-relaxed font-medium">
                {project.tagline}
              </p>

              <p className="text-sm md:text-base text-[#62665E] leading-relaxed">
                {project.shortSummary}
              </p>

              {project.liveUrl && (
                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#242621] bg-[#E5E7DA] hover:bg-[#DDDCD4] rounded-lg transition-colors"
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#62665E]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Real Screenshot Showcase */}
        <section className="py-10 md:py-14">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 border border-[#DDDCD4] shadow-card">
              <div className="relative rounded-xl overflow-hidden border border-[#DDDCD4] bg-[#F7F4EE] group">
                <img
                  src={project.image}
                  alt={`${project.name} application screenshot`}
                  className="w-full h-auto max-h-[550px] object-cover object-top"
                />
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="absolute inset-0 bg-[#A43F2B]/0 hover:bg-[#A43F2B]/30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="Enlarge screenshot"
                >
                  <span className="bg-[#A43F2B]/90 text-white px-3 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-4 h-4" /> Enlarge full screenshot
                  </span>
                </button>
              </div>
              <p className="text-center text-xs text-[#62665E] mt-3">
                Real interface preview of {project.name}. Client proprietary data has been masked for confidentiality.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Case Study Breakdown */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Context, Problem, Contribution */}
              <div className="lg:col-span-8 space-y-8">
                {/* 1. Client Context */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#DDDCD4]">
                  <h2 className="text-xl font-bold text-[#242621] font-heading mb-3">
                    Client Context
                  </h2>
                  <p className="text-sm md:text-base text-[#62665E] leading-relaxed">
                    {project.clientContext}
                  </p>
                </div>

                {/* 2. Problem */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#DDDCD4]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-[#A43F2B] shrink-0" />
                    <h2 className="text-xl font-bold text-[#242621] font-heading">
                      The Operational Challenge
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#62665E] leading-relaxed">
                    {project.clientProblem}
                  </p>
                </div>

                {/* 3. DataBuks Role & Scope */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#DDDCD4]">
                  <h2 className="text-xl font-bold text-[#242621] font-heading mb-3">
                    Exact Role & Scope
                  </h2>
                  <p className="text-sm md:text-base text-[#62665E] leading-relaxed">
                    {project.databuksContribution}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#DDDCD4]/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#242621] block mb-3">
                      Confirmed Delivered Capabilities:
                    </span>
                    <ul className="space-y-2">
                      {project.deliveredCapabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#242621]">
                          <CheckCircle2 className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. Factual Outcome */}
                <div className="bg-[#E5E7DA] rounded-2xl p-6 sm:p-8 border border-[#DDDCD4]">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#A43F2B] shrink-0" />
                    <h2 className="text-xl font-bold text-[#242621] font-heading">
                      Factual Deliverable Outcome
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#242621] leading-relaxed">
                    {project.factualOutcome}
                  </p>
                </div>
              </div>

              {/* Right Column: Meta details, Secondary Tools, CTA */}
              <div className="lg:col-span-4 space-y-6">
                {/* Project Specs Card */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#DDDCD4] space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#62665E]">
                    Project Summary
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-[#62665E] block">Category:</span>
                      <span className="font-semibold text-[#242621]">{project.category}</span>
                    </div>
                    <div>
                      <span className="text-[#62665E] block">Industry:</span>
                      <span className="font-semibold text-[#242621]">{project.industry}</span>
                    </div>
                    <div>
                      <span className="text-[#62665E] block">Location Fit:</span>
                      <span className="font-semibold text-[#242621]">India</span>
                    </div>
                  </div>

                  {/* Secondary Tools Badges */}
                  <div className="pt-4 border-t border-[#DDDCD4]/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#242621] block mb-2 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-[#A43F2B]" /> Technologies Utilised:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F7F4EE] text-[#242621] border border-[#DDDCD4]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Related Project CTA */}
                <div className="bg-[#A43F2B] text-[#F7F4EE] rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold font-heading">
                    Discuss a project like this.
                  </h3>
                  <p className="text-xs text-[#E5E7DA] leading-relaxed">
                    Have similar operational requirements? Let’s review your workflow and prepare a clear written estimate.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#242621] bg-[#F1DDD1] hover:bg-[#cbf056] rounded-lg transition-colors"
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
