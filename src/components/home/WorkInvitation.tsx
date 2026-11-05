import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FolderKanban } from "lucide-react";

export const WorkInvitation: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] dark:bg-[#090909] py-14 md:py-20 border-b border-[#DADADA] dark:border-[#303030] transition-colors duration-200">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="rounded-[22px] bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030] p-8 md:p-12 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F1F1] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] text-xs font-semibold tracking-wider uppercase">
              <FolderKanban className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
              <span>Verified Client Implementations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]">
              Want to explore our client work?
            </h2>
            <p className="text-base text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
              We have designed and engineered business websites, customer portals, operational tools and automation pipelines for businesses and founders across industries. Visit our dedicated portfolio to review real project case studies, specifications, and architecture details.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99] group"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkInvitation;
