import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Send, Database, Users, CheckCircle, MessageSquare, Sparkles } from "lucide-react";

export const AutomationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"enquiries" | "orders" | "reports">("enquiries");

  const useCases = {
    enquiries: {
      title: "Organising Incoming Enquiries",
      description: "When an enquiry arrives via your website or WhatsApp ad, details are validated, the assigned salesperson is notified immediately, and the customer receives an approved confirmation.",
      steps: [
        { name: "Enquiry", sub: "Form or WhatsApp click", icon: Send },
        { name: "Capture details", sub: "Validate name & requirements", icon: Database },
        { name: "Notify team", sub: "Direct WhatsApp alert to sales rep", icon: Users },
        { name: "Update CRM", sub: "Customer record & stage logged", icon: CheckCircle },
        { name: "Follow-up", sub: "Approved welcome message sent", icon: MessageSquare },
      ],
      practicalGain: "Cuts response time from several hours to under 2 minutes, preventing leads from going cold.",
    },
    orders: {
      title: "Connecting Order & Dispatch Updates",
      description: "When warehouse staff mark an order dispatched or update a bill, courier tracking links and tax invoices are automatically generated and sent to the client.",
      steps: [
        { name: "Order confirmed", sub: "Billing invoice approved", icon: Send },
        { name: "Capture details", sub: "Package weight & docket logged", icon: Database },
        { name: "Notify team", sub: "Dispatch supervisor sign-off", icon: Users },
        { name: "Update CRM", sub: "Ledger and delivery status synced", icon: CheckCircle },
        { name: "Follow-up", sub: "WhatsApp alert with tracking link", icon: MessageSquare },
      ],
      practicalGain: "Reduces repetitive 'Where is my order?' phone calls by more than 60%.",
    },
    reports: {
      title: "Preparing Recurring Reports",
      description: "Scheduled automation scripts pull operational figures across sales ledgers and inventory points, generating an executive evening digest without human calculation errors.",
      steps: [
        { name: "Scheduled trigger", sub: "Runs daily at 8:00 PM", icon: Send },
        { name: "Capture details", sub: "Extract day's billing & dispatch", icon: Database },
        { name: "Notify team", sub: "Variance & stock alerts flagged", icon: Users },
        { name: "Update CRM", sub: "Master dashboard consolidated", icon: CheckCircle },
        { name: "Follow-up", sub: "Email/WhatsApp executive digest", icon: MessageSquare },
      ],
      practicalGain: "Saves managers 5–10 hours each week assembling spreadsheets manually.",
    },
  };

  const current = useCases[activeTab];

  return (
    <section className="bg-[#123B32] text-[#F6F5EF] py-16 md:py-24 border-b border-[#0C2923]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#184239] border border-[#276456] text-[#D6F279] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECTED WORKFLOWS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#F6F5EF] font-heading">
            Less repetitive work. More connected operations.
          </h2>
          <p className="text-base md:text-lg text-[#E5ECE5] mt-3 leading-relaxed">
            If enquiries, updates and reminders are moving manually between spreadsheets and chat apps, a connected workflow can keep your team organised.
          </p>
        </div>

        {/* 3 Use-Case Tabs */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#1B4F43]" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "enquiries"}
            onClick={() => setActiveTab("enquiries")}
            className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
              activeTab === "enquiries"
                ? "bg-[#D6F279] text-[#123B32] shadow-sm font-bold"
                : "bg-[#184239] text-[#E5ECE5] hover:bg-[#1e5246] hover:text-[#FFFFFF]"
            }`}
          >
            Organising incoming enquiries
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "orders"}
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
              activeTab === "orders"
                ? "bg-[#D6F279] text-[#123B32] shadow-sm font-bold"
                : "bg-[#184239] text-[#E5ECE5] hover:bg-[#1e5246] hover:text-[#FFFFFF]"
            }`}
          >
            Connecting order updates
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "reports"}
            onClick={() => setActiveTab("reports")}
            className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
              activeTab === "reports"
                ? "bg-[#D6F279] text-[#123B32] shadow-sm font-bold"
                : "bg-[#184239] text-[#E5ECE5] hover:bg-[#1e5246] hover:text-[#FFFFFF]"
            }`}
          >
            Preparing recurring reports
          </button>
        </div>

        {/* Content Area: Diagram & Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
          {/* Explanation Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#F6F5EF] font-heading">
              {current.title}
            </h3>
            <p className="text-sm md:text-base text-[#E5ECE5] leading-relaxed">
              {current.description}
            </p>

            <div className="p-4 rounded-xl bg-[#184239] border border-[#276456]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6F279] block mb-1">
                Practical Business Gain:
              </span>
              <p className="text-xs md:text-sm text-[#F6F5EF] leading-relaxed">
                {current.practicalGain}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/services/business-automation"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#123B32] bg-[#D6F279] hover:bg-[#cbf056] rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
              >
                <span>Explore Business Automation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Workflow Diagram Column (Right on Desktop, Vertical on Mobile) */}
          <div className="lg:col-span-7 bg-[#0C2923] rounded-2xl p-6 md:p-8 border border-[#1B4F43]">
            <div className="text-xs font-mono text-[#A3B8AD] uppercase tracking-wider mb-6 flex items-center justify-between border-b border-[#1B4F43] pb-3">
              <span>EXAMPLE WORKFLOW FLOWCHART</span>
              <span className="text-[#D6F279] flex items-center gap-1.5 text-[11px] font-sans font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D6F279]" />
                Live Architecture
              </span>
            </div>

            {/* Sequence Nodes: Enquiry → Capture details → Notify team → Update CRM → Follow-up */}
            <div className="space-y-3">
              {current.steps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === current.steps.length - 1;

                return (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#123B32] border border-[#1B4F43] hover:border-[#D6F279]/50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#184239] text-[#D6F279] flex items-center justify-center shrink-0 border border-[#276456]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#F6F5EF] truncate">
                          {step.name}
                        </div>
                        <div className="text-xs text-[#A3B8AD] truncate">
                          {step.sub}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#D6F279]/70 shrink-0">
                        Step 0{idx + 1}
                      </span>
                    </div>

                    {!isLast && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-4 h-4 text-[#D6F279]/60" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-[11px] text-[#A3B8AD] text-center">
              Example workflow. Customised to connect your real tools (WhatsApp Business API, Google Sheets, CRM, ERP, and Email).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
