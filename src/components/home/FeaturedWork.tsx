import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Check, ZoomIn } from "lucide-react";
import { portfolioProjects } from "@/data/portfolioData";
import { ImageModal } from "@/components/ui/ImageModal";

export const FeaturedWork: React.FC = () => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  // Top 3 featured projects: AudioTonic (1st), ReraProperty (2nd), DnyanPath (3rd)
  const firstProject = portfolioProjects.find((p) => p.slug === "audiotonic") || portfolioProjects[0];
  const secondProject = portfolioProjects.find((p) => p.slug === "reraproperty") || portfolioProjects[1];
  const thirdProject = portfolioProjects.find((p) => p.slug === "dnyanpath") || portfolioProjects[2];

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Case Studies & Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-heading">
              See what we’ve built.
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
              Real projects delivered for businesses across India. Factual functionality, straightforward execution.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0 group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 1st Project: Large image left, explanation right on desktop */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-200 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Screenshot preview column */}
            <div className="lg:col-span-7 bg-slate-100 relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center p-4 sm:p-6">
              <div className="relative w-full rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white">
                <img
                  src={firstProject.image}
                  alt={`${firstProject.name} interface screenshot`}
                  className="w-full h-auto max-h-[420px] object-cover object-top"
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
                  className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                  aria-label={`Enlarge ${firstProject.name} screenshot`}
                >
                  <span className="bg-slate-900/80 px-3 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-3.5 h-3.5" /> Enlarge screenshot
                  </span>
                </button>
              </div>
            </div>

            {/* Explanation column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                    {firstProject.industry}
                  </span>
                  <span className="text-xs text-slate-400">• {firstProject.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  {firstProject.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {firstProject.tagline}
                </p>

                {/* Problem & Contribution */}
                <div className="space-y-3 mt-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                  <div>
                    <strong className="text-slate-800 block text-xs uppercase tracking-wider mb-0.5">
                      Client Problem:
                    </strong>
                    <span>{firstProject.clientProblem}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-xs uppercase tracking-wider mb-0.5">
                      DataBuks Contribution:
                    </strong>
                    <span>{firstProject.databuksContribution}</span>
                  </div>
                </div>

                {/* Delivered Capabilities */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                    Delivered Capabilities:
                  </span>
                  <ul className="space-y-1.5">
                    {firstProject.deliveredCapabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {firstProject.liveUrl && (
                  <a
                    href={firstProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    <span>Live portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Two Projects: Side-by-Side Cards (Stack on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[secondProject, thirdProject].map((proj) => (
            <div
              key={proj.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Screenshot Frame with Zoom */}
                <div className="bg-slate-100 p-4 border-b border-slate-200 relative group">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-white">
                    <img
                      src={proj.image}
                      alt={`${proj.name} screenshot`}
                      className="w-full h-48 sm:h-56 object-cover object-top"
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
                      className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/30 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                      aria-label={`Enlarge ${proj.name} screenshot`}
                    >
                      <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-[11px] font-medium inline-flex items-center gap-1">
                        <ZoomIn className="w-3 h-3" /> Zoom
                      </span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                      {proj.industry}
                    </span>
                    <span className="text-xs text-slate-400">• {proj.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{proj.tagline}</p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {proj.clientProblem}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Key Delivered Capabilities:
                    </span>
                    <ul className="space-y-1">
                      {proj.deliveredCapabilities.slice(0, 2).map((cap, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <Check className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <Link
                  to={`/portfolio/${proj.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Read case study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700"
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

      {/* Screenshot Zoom Modal */}
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

