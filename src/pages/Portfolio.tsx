import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { portfolioProjects, ProjectItem } from "@/data/portfolioData";
import { ImageModal } from "@/components/ui/ImageModal";
import { ArrowRight, ExternalLink, ZoomIn, Check } from "lucide-react";

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  const categories = ["All", "Websites", "Apps & Software", "Automation", "AI"];

  const filteredProjects = selectedCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies — DataBuks Selected Work</title>
        <meta
          name="description"
          content="Explore real websites, web applications, portals, and automations delivered by DataBuks for businesses across India."
        />
        <link rel="canonical" href="https://databuks.org/portfolio" />
      </Helmet>

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Header Section */}
        <section className="bg-white border-b border-slate-200 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Selected Work
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-heading">
                Websites, apps & software delivered for Indian businesses.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Review our delivered projects across real estate, B2B distribution, education, manufacturing, and e-commerce. Factual functionality, straightforward delivery.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-8" role="tablist" aria-label="Project categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Frame with Zoom */}
                    <div className="bg-slate-100 p-3.5 border-b border-slate-200 relative group">
                      <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-white">
                        <img
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          className="w-full h-48 sm:h-52 object-cover object-top"
                          loading="lazy"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setModalImage({
                              src: project.image,
                              alt: project.name,
                              caption: `${project.name} — ${project.tagline}`,
                            })
                          }
                          className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
                          aria-label={`Enlarge ${project.name} screenshot`}
                        >
                          <span className="bg-slate-900/80 px-2.5 py-1 rounded text-xs inline-flex items-center gap-1 shadow">
                            <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-400">• {project.industry}</span>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 font-heading">
                        {project.name}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {project.tagline}
                      </p>

                      <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                        {project.shortSummary}
                      </p>

                      {/* Capabilities pills */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                          Delivered Highlights:
                        </span>
                        <ul className="space-y-1">
                          {project.deliveredCapabilities.slice(0, 2).map((cap, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                              <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
                      >
                        <span>Live link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Enquiry CTA */}
        <section className="bg-white border-t border-slate-200 py-14">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Have a similar project in mind?
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
              We can help you scope requirements, design the interface, and deploy custom software matching your workflow.
            </p>
            <div className="pt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
          caption={modalImage.caption}
        />
      )}
    </>
  );
};

export default Portfolio;
