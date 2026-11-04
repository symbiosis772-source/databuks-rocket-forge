import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FolderKanban } from "lucide-react";

export const WorkInvitation: React.FC = () => {
  return (
    <section className="bg-[#080D16] py-14 md:py-20 border-b border-[#2A3850]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="rounded-[22px] bg-[#151F30] border border-[#2A3850] p-8 md:p-12 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-[#2A3850] text-[#67E8F9] text-xs font-semibold tracking-wider uppercase">
              <FolderKanban className="w-3.5 h-3.5 text-[#67E8F9]" />
              <span>Verified Client Implementations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FC]">
              Want to explore our client work?
            </h2>
            <p className="text-base text-[#B5C1D3] leading-relaxed">
              We have designed and engineered business websites, customer portals, operational tools and automation pipelines for Indian businesses and founders. Visit our dedicated portfolio to review real project case studies, specifications, and architecture details.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-glow transition-all focus-ring active:scale-[0.99] group"
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
