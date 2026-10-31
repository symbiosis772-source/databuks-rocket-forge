import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, ArrowRightCircle, Sparkles, CheckCircle, Database, MessageSquare, Send, Users } from "lucide-react";

export const AutomationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"leads" | "orders" | "reporting">("leads");

  const tabData = {
    leads: {
      title: "Lead Management Workflow",
      explanation: "When a potential client fills an enquiry form or messages your ad, the details are instantly captured, validated, and sent to the right salesperson with a templated acknowledgment sent to the customer.",
      steps: [
        { title: "Website / Ad enquiry", sub: "Form or WhatsApp prompt submitted", icon: Send },
        { title: "Capture & validate", sub: "Phone & requirement checked", icon: Database },
        { title: "Route to right rep", sub: "Assigned by location or service", icon: Users },
        { title: "Update CRM / Sheets", sub: "Pipeline record created instantly", icon: CheckCircle },
        { title: "Send approved follow-up", sub: "WhatsApp / Email acknowledgment", icon: MessageSquare },
      ],
      benefits: [
        "Eliminates hours of delay between lead submission and sales response",
        "No customer numbers lost in individual WhatsApp inboxes",
        "Zero duplicate manual data entry for your sales representatives",
      ],
    },
    orders: {
      title: "Order & Dispatch Updates",
      explanation: "Whenever your warehouse or billing team updates an order status in your portal, tracking links, invoices, and dispatch confirmations are automatically triggered to the buyer.",
      steps: [
        { title: "Order created or paid", sub: "System records confirmed sale", icon: Send },
        { title: "Invoice generated", sub: "Automated GST PDF compiled", icon: Database },
        { title: "Warehouse dispatch", sub: "Courier tracking number logged", icon: Users },
        { title: "Customer alert sent", sub: "WhatsApp message with live link", icon: MessageSquare },
        { title: "Delivery logged", sub: "Ledger and CRM status updated", icon: CheckCircle },
      ],
      benefits: [
        "Cuts customer status inquiry phone calls by over 60%",
        "Instant delivery of tax invoices and dispatch tracking links",
        "Automatic notifications if a shipment encounters delay exceptions",
      ],
    },
    reporting: {
      title: "Automated Internal Reporting",
      explanation: "Instead of having managers spend their evenings compiling numbers from multiple spreadsheets, scheduled automated pipelines extract key figures and send clean summaries to leadership.",
      steps: [
        { title: "Scheduled daily trigger", sub: "Runs automatically at 8:00 PM", icon: Send },
        { title: "Pull operational data", sub: "Extracts sales, stock, payments", icon: Database },
        { title: "Aggregate & format", sub: "Calculates totals & variances", icon: Users },
        { title: "Generate summary", sub: "Executive digest formatted", icon: CheckCircle },
        { title: "Deliver to owners", sub: "WhatsApp & Email dispatch", icon: MessageSquare },
      ],
      benefits: [
        "Owners get accurate daily business snapshots without asking staff",
        "Early warning alerts when inventory falls below minimum safety stock",
        "Replaces messy end-of-week spreadsheet consolidation",
      ],
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="bg-[#0F172A] text-white py-16 md:py-24 border-b border-slate-800">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECTED WORKFLOWS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
            Make everyday work flow better.
          </h2>
          <p className="text-base md:text-lg text-slate-300 mt-3 leading-relaxed">
            If enquiries, updates and reminders are moving manually between tools, a connected workflow can help your team stay organised.
          </p>
        </div>

        {/* 3 Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "leads"}
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
              activeTab === "leads"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Lead management
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "orders"}
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
              activeTab === "orders"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Order updates
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "reporting"}
            onClick={() => setActiveTab("reporting")}
            className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-colors ${
              activeTab === "reporting"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Internal reporting
          </button>
        </div>

        {/* Main Content: Explanation Left, Diagram Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
          {/* Explanation Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
              {current.title}
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {current.explanation}
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Why this matters:
              </span>
              <ul className="space-y-2">
                {current.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to="/contact?service=business-automation"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
              >
                <span>Discuss an Automation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Diagram Column (Right on Desktop, Vertical on Mobile) */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-2xl p-6 md:p-8 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between border-b border-slate-800 pb-3">
              <span>ILLUSTRATIVE WORKFLOW FLOWCHART</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active Architecture
              </span>
            </div>

            {/* Step Nodes in SVG/HTML */}
            <div className="space-y-3">
              {current.steps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === current.steps.length - 1;
                return (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 hover:border-blue-500/80 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white truncate">
                          {step.title}
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          {step.sub}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-500 shrink-0">
                        0{idx + 1}
                      </span>
                    </div>

                    {!isLast && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-4 h-4 text-blue-400/70" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-[11px] text-slate-500 text-center">
              Customised to match your specific tools (WhatsApp Business API, Google Sheets, CRM, ERP, Email).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;

