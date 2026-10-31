import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FolderKanban } from "lucide-react";

export const WorkInvitation: React.FC = () => {
  return (
    <section className="bg-[#E5E7DA] py-14 md:py-20 border-b border-[#DDDCD4]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="rounded-[22px] bg-[#FFFFFF] border border-[#DDDCD4] p-8 md:p-12 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F4EE] border border-[#DDDCD4] text-[#242621] text-xs font-semibold tracking-wider uppercase">
              <FolderKanban className="w-3.5 h-3.5 text-[#A43F2B]" />
              <span>Verified Client Implementations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#242621]">
              Want to explore our client work?
            </h2>
            <p className="text-base text-[#62665E] leading-relaxed">
              We have designed and engineered business websites, customer portals, operational tools and automation pipelines for Indian businesses and founders. Visit our dedicated portfolio to review real project case studies, specifications, and architecture details.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkInvitation;
