import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Check, ZoomIn } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioData";
import { ImageModal } from "@/components/ui/ImageModal";

export const FeaturedWork: React.FC = () => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  const firstProject = portfolioProjects.find((p) => p.slug === "audiotonic") || portfolioProjects[0];
  const secondProject = portfolioProjects.find((p) => p.slug === "reraproperty") || portfolioProjects[1];
  const thirdProject = portfolioProjects.find((p) => p.slug === "dnyanpath") || portfolioProjects[2];

  return (
    <section className="bg-[#E5ECE5]/60 py-16 md:py-24 border-b border-[#D8E0D8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#123B32] mb-2 block">
              Case Studies & Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#182822] font-heading">
              Explore our work.
            </h2>
            <p className="text-base text-[#53635C] mt-2 max-w-xl leading-relaxed">
              Delivered software and web applications for businesses in India. Verified functionality, straightforward execution.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B32] hover:underline shrink-0 group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 1. Full-Width Featured Project with Large Screenshot */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#D8E0D8] overflow-hidden shadow-card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Screenshot panel with warm ivory background treatment */}
            <div className="lg:col-span-7 bg-[#F6F5EF] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#D8E0D8] flex items-center justify-center relative group">
              <div className="relative w-full rounded-xl overflow-hidden shadow-sm border border-[#D8E0D8] bg-[#FFFFFF] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={firstProject.image}
                  alt={`${firstProject.name} interface screenshot`}
                  className="w-full h-auto max-h-[440px] object-cover object-top"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={() =>
                    setModalImage({
                      src: firstProject.image,
                      alt: firstProject.name,
                      caption: `${firstProject.name} — ${firstProject.tagline}`,
                    })
                  }
                  className="absolute inset-0 bg-[#123B32]/0 hover:bg-[#123B32]/30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                  aria-label={`Enlarge ${firstProject.name} screenshot`}
                >
                  <span className="bg-[#123B32]/90 text-white px-3 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-3.5 h-3.5" /> Enlarge screenshot
                  </span>
                </button>
              </div>
            </div>

            {/* Explanation column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#E5ECE5] text-[#123B32] border border-[#D8E0D8]">
                    {firstProject.industry}
                  </span>
                  <span className="text-xs text-[#53635C]">• {firstProject.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#182822] font-heading">
                  {firstProject.name}
                </h3>
                <p className="text-xs font-medium text-[#53635C] mt-1">
                  {firstProject.tagline}
                </p>

                {/* Explanation and exact confirmed DataBuks contribution */}
                <div className="space-y-3 mt-4 text-xs md:text-sm text-[#53635C] leading-relaxed">
                  <div>
                    <strong className="text-[#182822] block text-xs uppercase tracking-wider mb-0.5">
                      Operational Challenge:
                    </strong>
                    <span>{firstProject.clientProblem}</span>
                  </div>
                  <div>
                    <strong className="text-[#182822] block text-xs uppercase tracking-wider mb-0.5">
                      Exact DataBuks Contribution:
                    </strong>
                    <span>{firstProject.databuksContribution}</span>
                  </div>
                </div>

                {/* Delivered Capabilities */}
                <div className="mt-5 pt-4 border-t border-[#D8E0D8]/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#182822] block mb-2">
                    Confirmed Delivered Capabilities:
                  </span>
                  <ul className="space-y-1.5">
                    {firstProject.deliveredCapabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#182822]">
                        <Check className="w-3.5 h-3.5 text-[#123B32] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to={`/portfolio/${firstProject.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm transition-colors"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {firstProject.liveUrl && (
                  <a
                    href={firstProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#53635C] hover:text-[#182822]"
                  >
                    <span>Live portal</span>
                    <ExternalLink className="w-3 h-3 text-[#53635C]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2 & 3. Two Smaller Coordinated Project Features (Side-by-Side, Stack on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[secondProject, thirdProject].map((proj, idx) => (
            <div
              key={proj.slug}
              className="bg-[#FFFFFF] rounded-2xl border border-[#D8E0D8] overflow-hidden shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Screenshot panel with alternating background */}
                <div className={`p-4 border-b border-[#D8E0D8] relative group ${idx === 0 ? "bg-[#E5ECE5]/40" : "bg-[#F6F5EF]"}`}>
                  <div className="relative rounded-lg overflow-hidden border border-[#D8E0D8] bg-[#FFFFFF] transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src={proj.image}
                      alt={`${proj.name} screenshot`}
                      className="w-full h-48 sm:h-54 object-cover object-top"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setModalImage({
                          src: proj.image,
                          alt: proj.name,
                          caption: `${proj.name} — ${proj.tagline}`,
                        })
                      }
                      className="absolute inset-0 bg-[#123B32]/0 hover:bg-[#123B32]/30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                      aria-label={`Enlarge ${proj.name} screenshot`}
                    >
                      <span className="bg-[#123B32]/90 text-white px-2.5 py-1 rounded-md text-[11px] font-medium inline-flex items-center gap-1 shadow">
                        <ZoomIn className="w-3 h-3" /> Zoom
                      </span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#E5ECE5] text-[#123B32]">
                      {proj.industry}
                    </span>
                    <span className="text-xs text-[#53635C]">• {proj.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#182822] font-heading">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-[#53635C] mt-0.5 font-medium">{proj.tagline}</p>

                  <p className="text-xs sm:text-sm text-[#53635C] mt-3 leading-relaxed">
                    {proj.clientProblem}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#D8E0D8]/60">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#182822] block mb-1.5">
                      Exact DataBuks Role:
                    </span>
                    <p className="text-xs text-[#53635C] leading-relaxed">
                      {proj.databuksContribution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <Link
                  to={`/portfolio/${proj.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#123B32] hover:underline"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#53635C] hover:text-[#182822]"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
          caption={modalImage.caption}
        />
      )}
    </section>
  );
};

export default FeaturedWork;
