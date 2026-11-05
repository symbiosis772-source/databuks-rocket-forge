import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, CheckCircle2, ShieldAlert, Database, Cpu, MessageSquare, AlertCircle } from "lucide-react";
import { AiSolution, SolutionStep } from "@/data/aiSolutionsData";
import { siteConfig } from "@/config/siteConfig";

interface SolutionDetailModalProps {
  solution: AiSolution | null;
  onClose: () => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({ solution, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (solution) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [solution, onClose]);

  if (!solution) return null;

  const getStepBadge = (type: SolutionStep["type"]) => {
    switch (type) {
      case "ai":
        return {
          label: "AI Processing",
          className: "bg-[#111111] text-[#FFFFFF] dark:bg-[#F5F5F5] dark:text-[#111111] border-transparent",
        };
      case "deterministic":
        return {
          label: "Deterministic Logic",
          className: "bg-[#F1F1F1] text-[#111111] dark:bg-[#222222] dark:text-[#F5F5F5] border-[#DADADA] dark:border-[#303030]",
        };
      case "human":
        return {
          label: "Human Review",
          className: "bg-[#FFFFFF] text-[#111111] dark:bg-[#171717] dark:text-[#F5F5F5] border-[#111111] dark:border-[#F5F5F5]",
        };
      case "input":
        return {
          label: "User / System Input",
          className: "bg-[#F1F1F1] text-[#555555] dark:bg-[#171717] dark:text-[#B5B5B5] border-[#DADADA] dark:border-[#303030]",
        };
      case "output":
      default:
        return {
          label: "Final Output / Action",
          className: "bg-[#111111] text-white dark:bg-[#F5F5F5] dark:text-[#090909] border-transparent",
        };
    }
  };

  const whatsappText = encodeURIComponent(
    `Hi DataBuks, I am interested in discussing the "${solution.name}" AI solution for our workflows.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="solution-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-3xl max-h-[90vh] bg-[#FFFFFF] dark:bg-[#171717] rounded-2xl border border-[#DADADA] dark:border-[#303030] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#111111]">
          <div className="space-y-1.5 pr-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#DADADA] dark:border-[#303030] bg-[#FFFFFF] dark:bg-[#171717] text-[#111111] dark:text-[#F5F5F5]">
              {solution.category}
            </div>
            <h2
              id="solution-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#F5F5F5]"
            >
              {solution.name}
            </h2>
            <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
              {solution.shortExplanation}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] hover:bg-[#EAEAEA] dark:hover:bg-[#222222] transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-7 text-[#111111] dark:text-[#F5F5F5]">
          {/* 1. Who It Is For & The Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                Who This Is For
              </span>
              <p className="text-sm text-[#111111] dark:text-[#F5F5F5] leading-relaxed">
                {solution.whoIsThisFor}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFAFA] dark:bg-[#111111] border border-[#DADADA] dark:border-[#303030] space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                The Business Problem
              </span>
              <p className="text-sm text-[#111111] dark:text-[#F5F5F5] leading-relaxed">
                {solution.problem}
              </p>
            </div>
          </div>

          {/* 2. Step-by-Step Workflow Progression */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                Workflow Architecture & Steps
              </span>
              <span className="text-[11px] text-[#555555] dark:text-[#B5B5B5]">
                Distinguishes AI reasoning from deterministic logic
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#090909] space-y-3">
              {solution.steps.map((step, idx) => {
                const badge = getStepBadge(step.type);
                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-[#FFFFFF] dark:bg-[#171717] border border-[#DADADA] dark:border-[#303030]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#111111] dark:bg-[#F5F5F5] text-white dark:text-[#090909] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-[#111111] dark:text-[#F5F5F5]">
                          {step.name}
                        </div>
                        {step.detail && (
                          <div className="text-xs text-[#555555] dark:text-[#B5B5B5] mt-0.5">
                            {step.detail}
                          </div>
                        )}
                      </div>
                    </div>
                    <span
                      className={`self-start sm:self-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase border shrink-0 ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Required Data Access & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Required Access */}
            <div className="p-4 rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#111111] space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
                  Required Data Access
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#555555] dark:text-[#B5B5B5]">
                {solution.requiredAccess.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] dark:bg-[#F5F5F5] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Deliverables */}
            <div className="p-4 rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#111111] space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
                  Expected Deliverables
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#555555] dark:text-[#B5B5B5]">
                {solution.expectedDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Limitations & Human Review Safeguards */}
          <div className="p-4 rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#F1F1F1] dark:bg-[#111111] space-y-1.5">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#111111] dark:text-[#F5F5F5]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
                Limitations & Human Review Safeguards
              </span>
            </div>
            <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
              {solution.limitationsAndReview}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 border-t border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#111111] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#555555] dark:text-[#B5B5B5] text-center sm:text-left">
            Custom engineered for your specific documents, tools & team permissions.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl border border-[#DADADA] dark:border-[#303030] text-[#111111] dark:text-[#F5F5F5] hover:bg-[#EAEAEA] dark:hover:bg-[#222222] transition-colors"
            >
              Close
            </button>
            <Link
              to={`/contact?solution=${solution.slug}`}
              onClick={onClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all"
            >
              <span>Enquire About This Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
