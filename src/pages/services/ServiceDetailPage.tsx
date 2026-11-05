import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData, ServicePageData } from "@/data/servicesData";
import { portfolioProjects } from "@/data/portfolioData";
import { siteConfig } from "@/config/siteConfig";
import { ImageModal } from "@/components/ui/ImageModal";
import { ServiceExplanatoryVisual } from "@/components/services/ServiceExplanatoryVisual";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  AlertCircle,
  Clock,
  ZoomIn,
  MessageSquare,
} from "lucide-react";

interface ServiceDetailPageProps {
  forcedSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ forcedSlug }) => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const slug = forcedSlug || serviceSlug || "website-development";
  const data: ServicePageData = servicesData[slug] || servicesData["website-development"];

  const [modalImage, setModalImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  const relevantProjects = portfolioProjects.filter((p) =>
    data.caseStudySlugs.includes(p.slug)
  );

  return (
    <>
      <Helmet>
        <title>{`${data.name} — DataBuks Software Services`}</title>
        <meta name="description" content={data.heroSubtitle} />
        <link rel="canonical" href={`https://databuks.org/services/${data.slug}`} />
      </Helmet>

      <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#090909] text-[#111111] dark:text-[#F5F5F5] transition-colors duration-200">
        {/* 1. Service-specific Hero and CTA */}
        <section className="bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] py-16 md:py-20 relative overflow-hidden transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold">
                <Link to="/services" className="hover:underline">Services</Link>
                <span>/</span>
                <span>{data.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5] font-heading">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <Link
                  to={`/contact?service=${data.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
                >
                  <span>Discuss Your {data.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`${siteConfig.brand.whatsappUrl}%20regarding%20${encodeURIComponent(data.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-[#FFFFFF] dark:bg-[#171717] hover:bg-[#EAEAEA] dark:hover:bg-[#222222] border border-[#DADADA] dark:border-[#303030] rounded-xl shadow-subtle transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Hub Banner for AI Agents */}
        {slug === "ai-agents" && (
          <section className="bg-[#FFFFFF] dark:bg-[#171717] border-b border-[#DADADA] dark:border-[#303030] py-6 transition-colors duration-200">
            <div className="max-w-[1240px] mx-auto px-5 md:px-8">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
                    <span className="w-2 h-2 rounded-full bg-[#111111] dark:bg-[#F5F5F5]" />
                    <span>Dedicated AI Solutions Hub</span>
                  </div>
                  <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
                    Explore our filterable catalogue of 12 custom AI & automation architectures—including RAG knowledge assistants, customer triage agents, and document intake pipelines.
                  </p>
                </div>
                <Link
                  to="/ai-solutions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] transition-all shadow-subtle shrink-0"
                >
                  <span>Explore AI Solutions Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Explanatory Visual */}
        <section className="py-12 md:py-16 bg-[#FAFAFA] dark:bg-[#090909] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Architecture & Practical Implementation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                How this works in practice.
              </h2>
              <p className="text-sm md:text-base text-[#555555] dark:text-[#B5B5B5] mt-2 leading-relaxed">
                A clear, illustrative look at the interfaces and workflows we build for this service.
              </p>
            </div>

            <ServiceExplanatoryVisual slug={data.slug} />
          </div>
        </section>

        {/* 2. Who This Is For */}
        <section className="py-14 md:py-18 bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Target Fit
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                Who this is for.
              </h2>
              <p className="text-sm md:text-base text-[#555555] dark:text-[#B5B5B5] mt-2 leading-relaxed">
                {data.whoIsThisFor.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whoIsThisFor.points.map((pt) => (
                <div
                  key={pt.title}
                  className="bg-[#FFFFFF] dark:bg-[#171717] p-6 rounded-2xl border border-[#DADADA] dark:border-[#303030] shadow-card"
                >
                  <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                    {pt.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] mt-2 leading-relaxed">
                    {pt.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Problems It Helps Address */}
        <section className="py-14 md:py-18 bg-[#FAFAFA] dark:bg-[#090909] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Bottlenecks We Resolve
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                Problems this service helps address.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.problemsSolved.map((prob) => (
                <div
                  key={prob.title}
                  className="bg-[#FFFFFF] dark:bg-[#171717] p-6 rounded-2xl border border-[#DADADA] dark:border-[#303030] flex items-start gap-4 shadow-subtle"
                >
                  <AlertCircle className="w-5 h-5 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5]">
                      {prob.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] mt-1.5 leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What We Can Build */}
        <section className="py-14 md:py-18 bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Deliverable Types
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                What we can build for you.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whatWeCanBuild.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#FFFFFF] dark:bg-[#171717] p-6 sm:p-7 rounded-2xl border border-[#DADADA] dark:border-[#303030] shadow-card space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DADADA] dark:border-[#303030]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5] block mb-2">
                      Included aspects:
                    </span>
                    <ul className="space-y-1.5">
                      {item.items.map((it, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-[#111111] dark:text-[#F5F5F5]">
                          <CheckCircle2 className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Typical Project Deliverables */}
        <section className="py-14 md:py-18 bg-[#FAFAFA] dark:bg-[#090909] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="bg-[#FFFFFF] dark:bg-[#171717] rounded-2xl p-6 sm:p-8 border border-[#DADADA] dark:border-[#303030] shadow-card">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] block mb-1">
                  Handover Package
                </span>
                <h2 className="text-2xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                  Typical project deliverables.
                </h2>
                <p className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] mt-1">
                  What you receive upon final deployment and milestone completion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.typicalDeliverables.map((deliv, idx) => (
                  <div key={idx} className="bg-[#F1F1F1] dark:bg-[#111111] p-4 rounded-xl border border-[#DADADA] dark:border-[#303030] flex items-start gap-3 shadow-subtle">
                    <Check className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-[#111111] dark:text-[#F5F5F5] font-medium leading-relaxed">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Relevant Confirmed Work */}
        {relevantProjects.length > 0 && (
          <section className="py-14 md:py-18 bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
            <div className="max-w-[1240px] mx-auto px-5 md:px-8">
              <div className="max-w-2xl mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                  Demonstrated Delivery
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                  Relevant confirmed work.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantProjects.map((proj) => (
                  <div
                    key={proj.slug}
                    className="bg-[#FFFFFF] dark:bg-[#171717] rounded-2xl border border-[#DADADA] dark:border-[#303030] overflow-hidden shadow-card hover:border-[#111111] dark:hover:border-[#F5F5F5] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="bg-[#FAFAFA] dark:bg-[#090909] p-3 border-b border-[#DADADA] dark:border-[#303030] relative group">
                        <img
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-44 object-cover object-top rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setModalImage({
                              src: proj.image,
                              alt: proj.name,
                              caption: proj.name,
                            })
                          }
                          className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <span className="bg-[#111111] dark:bg-[#F5F5F5] text-white dark:text-[#090909] px-2.5 py-1 rounded text-xs inline-flex items-center gap-1 shadow">
                            <ZoomIn className="w-3 h-3" /> Zoom
                          </span>
                        </button>
                      </div>
                      <div className="p-5">
                        <span className="text-[11px] font-semibold text-[#555555] dark:text-[#B5B5B5] uppercase">
                          {proj.industry}
                        </span>
                        <h3 className="text-lg font-bold text-[#111111] dark:text-[#F5F5F5] font-heading mt-0.5">
                          {proj.name}
                        </h3>
                        <p className="text-xs text-[#555555] dark:text-[#B5B5B5] mt-2 leading-relaxed">
                          {proj.shortSummary}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <Link
                        to={`/portfolio/${proj.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] hover:underline"
                      >
                        <span>View case study</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. Process & Dependencies */}
        <section className="py-14 md:py-18 bg-[#FAFAFA] dark:bg-[#090909] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Execution Sequence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                Process and dependencies.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {data.processAndDependencies.steps.map((st) => (
                <div key={st.number} className="bg-[#FFFFFF] dark:bg-[#171717] p-5 rounded-xl border border-[#DADADA] dark:border-[#303030] shadow-subtle">
                  <span className="text-xl font-bold font-mono text-[#111111] dark:text-[#F5F5F5]">
                    {st.number}
                  </span>
                  <h3 className="text-base font-bold text-[#111111] dark:text-[#F5F5F5] mt-1">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#555555] dark:text-[#B5B5B5] mt-2 leading-relaxed">
                    {st.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Dependencies */}
            <div className="bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl p-5 shadow-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5] block mb-2">
                What we need from your team to proceed smoothly:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.processAndDependencies.dependencies.map((dep, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#111111] dark:text-[#F5F5F5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#F5F5F5] mt-1.5 shrink-0" />
                    <span>{dep}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. What Affects Cost and Timing */}
        <section className="py-14 md:py-18 bg-[#F1F1F1] dark:bg-[#111111] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Scope Variables
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                What affects cost and timing.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.costAndTimingFactors.map((f, idx) => (
                <div key={idx} className="bg-[#FFFFFF] dark:bg-[#171717] p-5 rounded-xl border border-[#DADADA] dark:border-[#303030] shadow-subtle">
                  <h3 className="text-sm font-bold text-[#111111] dark:text-[#F5F5F5] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                    <span>{f.factor}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] mt-2 leading-relaxed">
                    {f.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQs */}
        <section className="py-14 md:py-18 bg-[#FAFAFA] dark:bg-[#090909] border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] mb-2 block">
                Questions Answered
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#F5F5F5] font-heading">
                {data.name} FAQs.
              </h2>
            </div>

            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {data.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border border-[#DADADA] dark:border-[#303030] rounded-xl px-5 bg-[#FFFFFF] dark:bg-[#171717] data-[state=open]:border-[#111111] dark:data-[state=open]:border-[#F5F5F5] data-[state=open]:shadow-subtle transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-sm md:text-base text-[#111111] dark:text-[#F5F5F5] py-3.5 hover:no-underline hover:text-[#555555] dark:hover:text-[#E0E0E0]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 10. Project Enquiry CTA */}
        <section className="bg-[#F1F1F1] dark:bg-[#111111] text-[#111111] dark:text-[#F5F5F5] py-14 md:py-16 border-t border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111111] dark:text-[#F5F5F5]">
              Ready to discuss your {data.name.toLowerCase()}?
            </h2>
            <p className="text-[#555555] dark:text-[#B5B5B5] text-sm md:text-base mt-2.5 leading-relaxed">
              Tell us your requirements, and we’ll review the scope to provide an honest estimate and clear milestone plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
              <Link
                to={`/contact?service=${data.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] hover:text-black dark:hover:text-white bg-transparent hover:bg-[#EAEAEA] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl transition-colors"
              >
                View other services
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

export default ServiceDetailPage;
