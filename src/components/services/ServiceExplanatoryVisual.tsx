import React from "react";
import {
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Database,
  Layers,
  MessageSquare,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
  Bot,
  UserCheck,
} from "lucide-react";

interface ServiceExplanatoryVisualProps {
  slug: string;
}

export const ServiceExplanatoryVisual: React.FC<ServiceExplanatoryVisualProps> = ({ slug }) => {
  if (slug === "website-development") {
    return (
      <div className="rounded-2xl border border-[#DDDCD4] bg-[#FFFFFF] p-5 sm:p-7 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DDDCD4] gap-2 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A43F2B] block">
              Architectural Composition
            </span>
            <h3 className="text-lg font-bold text-[#242621]">
              Responsive Desktop & Mobile Viewports
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5E7DA] text-xs font-medium text-[#242621]">
            <Globe className="w-3.5 h-3.5 text-[#A43F2B]" />
            Fast Loading • Mobile-First
          </span>
        </div>

        {/* Visual Mockup Container */}
        <div className="relative bg-[#F7F4EE] rounded-xl p-4 sm:p-6 border border-[#DDDCD4] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Desktop Browser Mockup */}
            <div className="lg:col-span-8 rounded-xl bg-white border border-[#DDDCD4] shadow-subtle overflow-hidden">
              {/* Browser chrome */}
              <div className="h-8 bg-[#E5E7DA]/70 border-b border-[#DDDCD4] px-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DDDCD4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DDDCD4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DDDCD4]" />
                </div>
                <div className="text-[11px] font-mono text-[#62665E] bg-white px-3 py-0.5 rounded border border-[#DDDCD4]/60 max-w-[200px] truncate">
                  yourbrand.in
                </div>
              </div>

              {/* Website content preview */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#DDDCD4]/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-[#A43F2B]" />
                    <span className="text-xs font-bold text-[#242621]">Apex Industrial Supplies</span>
                  </div>
                  <div className="hidden sm:flex gap-3 text-[11px] text-[#62665E]">
                    <span>Products</span>
                    <span>Specifications</span>
                    <span>About</span>
                  </div>
                  <span className="text-[11px] font-semibold text-white bg-[#A43F2B] px-2.5 py-1 rounded">
                    Request Quote
                  </span>
                </div>

                <div className="space-y-1.5 max-w-sm">
                  <h4 className="text-sm sm:text-base font-bold text-[#242621] leading-tight">
                    Engineered Valves & Pipeline Solutions
                  </h4>
                  <p className="text-xs text-[#62665E] leading-relaxed">
                    Precision-grade components delivered across India with full mill test certificates.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]">
                    <div className="text-[10px] text-[#62665E]">Gate Valves</div>
                    <div className="text-xs font-bold text-[#242621]">Class 150-900</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]">
                    <div className="text-[10px] text-[#62665E]">Ball Valves</div>
                    <div className="text-xs font-bold text-[#242621]">Forged Steel</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]">
                    <div className="text-[10px] text-[#62665E]">Dispatch</div>
                    <div className="text-xs font-bold text-[#242621]">Ready Stock</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Viewport Mockup */}
            <div className="lg:col-span-4 rounded-2xl bg-white border-2 border-[#242621] p-3 shadow-card max-w-[240px] mx-auto lg:mx-0">
              <div className="w-12 h-1 bg-[#DDDCD4] rounded-full mx-auto mb-2" />
              <div className="flex items-center justify-between pb-2 border-b border-[#DDDCD4]">
                <div className="text-[10px] font-bold text-[#242621]">Apex Supplies</div>
                <div className="w-4 h-3 flex flex-col justify-between">
                  <div className="h-0.5 bg-[#242621] rounded" />
                  <div className="h-0.5 bg-[#242621] rounded" />
                </div>
              </div>
              <div className="py-3 space-y-2">
                <div className="text-xs font-bold text-[#242621] leading-tight">
                  Industrial Valves & Fittings
                </div>
                <div className="text-[10px] text-[#62665E] leading-normal">
                  Instant product lookup and direct WhatsApp quotation.
                </div>
                <div className="p-2 bg-[#DEE8EC] rounded text-[10px] font-semibold text-[#242621] text-center">
                  Inquire on WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#62665E] flex flex-wrap gap-4 pt-2">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Clean semantic HTML
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Optimized Core Web Vitals
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            WhatsApp & Enquiry conversion routing
          </span>
        </div>
      </div>
    );
  }

  if (slug === "app-software-development") {
    return (
      <div className="rounded-2xl border border-[#DDDCD4] bg-[#FFFFFF] p-5 sm:p-7 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DDDCD4] gap-2 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A43F2B] block">
              Application Architecture
            </span>
            <h3 className="text-lg font-bold text-[#242621]">
              Custom Web Application & Operations Dashboard
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DEE8EC] text-xs font-medium text-[#242621]">
            <BarChart3 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Real-Time State & Role Access
          </span>
        </div>

        <div className="bg-[#F7F4EE] rounded-xl p-4 sm:p-6 border border-[#DDDCD4]">
          <div className="rounded-xl bg-white border border-[#DDDCD4] shadow-subtle overflow-hidden">
            {/* Dashboard App Top Bar */}
            <div className="bg-[#242A28] text-white px-4 py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Operations Portal</span>
                <span className="text-[10px] text-[#A2A8A2] hidden sm:inline">• Nagpur Hub</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-[#A2A8A2]">
                <span>Logged in: Operations Lead</span>
                <span className="px-2 py-0.5 bg-[#313835] rounded text-white">Production</span>
              </div>
            </div>

            {/* Metric Row */}
            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-[#DDDCD4]">
              <div className="p-3 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]">
                <div className="text-[11px] text-[#62665E]">Active Orders</div>
                <div className="text-lg font-bold text-[#242621] mt-0.5">142 Batches</div>
                <div className="text-[10px] text-emerald-700 font-medium">98.4% on schedule</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]">
                <div className="text-[11px] text-[#62665E]">Today's Dispatches</div>
                <div className="text-lg font-bold text-[#242621] mt-0.5">₹3,48,200</div>
                <div className="text-[10px] text-[#62665E]">18 shipments released</div>
              </div>
              <div className="p-3 rounded-lg bg-[#F7F4EE] border border-[#DDDCD4]">
                <div className="text-[11px] text-[#62665E]">Inventory Status</div>
                <div className="text-lg font-bold text-[#242621] mt-0.5">Healthy</div>
                <div className="text-[10px] text-[#62665E]">0 stock-out alerts</div>
              </div>
            </div>

            {/* Tabular Data View */}
            <div className="p-4 sm:p-5 space-y-2 overflow-x-auto">
              <div className="text-xs font-bold text-[#242621]">Live Production Queue</div>
              <div className="min-w-[480px] divide-y divide-[#DDDCD4]/60 text-xs">
                <div className="py-2 flex items-center justify-between text-[#62665E] font-medium">
                  <span className="w-24">Order ID</span>
                  <span className="flex-1">Client / Project</span>
                  <span className="w-24 text-center">Stage</span>
                  <span className="w-24 text-right">Action</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="w-24 font-mono font-medium text-[#242621]">#ORD-9021</span>
                  <span className="flex-1 font-semibold text-[#242621]">Kailash Engineering</span>
                  <span className="w-24 text-center">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                      Dispatched
                    </span>
                  </span>
                  <span className="w-24 text-right text-[#A43F2B] font-semibold text-[11px]">View Manifest</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="w-24 font-mono font-medium text-[#242621]">#ORD-9022</span>
                  <span className="flex-1 font-semibold text-[#242621]">Vidarbha Logistics</span>
                  <span className="w-24 text-center">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-semibold">
                      Assembly
                    </span>
                  </span>
                  <span className="w-24 text-right text-[#A43F2B] font-semibold text-[11px]">Update Stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#62665E] flex flex-wrap gap-4 pt-2">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Relational SQL / PostgreSQL backends
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Secure role-based permissions (RBAC)
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Audit logging & CSV/PDF exports
          </span>
        </div>
      </div>
    );
  }

  if (slug === "business-automation") {
    return (
      <div className="rounded-2xl border border-[#DDDCD4] bg-[#FFFFFF] p-5 sm:p-7 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DDDCD4] gap-2 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A43F2B] block">
              Workflow Pipeline
            </span>
            <h3 className="text-lg font-bold text-[#242621]">
              Automated Data Pipeline with Zero Manual Copy-Paste
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5E7DA] text-xs font-medium text-[#242621]">
            <Zap className="w-3.5 h-3.5 text-[#A43F2B]" />
            Connected Systems
          </span>
        </div>

        <div className="bg-[#F7F4EE] rounded-xl p-4 sm:p-6 border border-[#DDDCD4]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-4 border border-[#DDDCD4] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DEE8EC] text-[#A43F2B] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <div className="text-xs font-bold text-[#242621]">Lead Ingestion</div>
              <p className="text-[11px] text-[#62665E] leading-relaxed">
                Customer fills website form or sends WhatsApp requirement enquiry.
              </p>
              <div className="pt-2 border-t border-[#DDDCD4]/60 text-[10px] font-mono text-[#A43F2B]">
                Trigger: Webhook
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-4 border border-[#DDDCD4] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DEE8EC] text-[#A43F2B] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <div className="text-xs font-bold text-[#242621]">Validation & Scrubbing</div>
              <p className="text-[11px] text-[#62665E] leading-relaxed">
                Cleans phone numbers, parses city, checks for duplicate existing records.
              </p>
              <div className="pt-2 border-t border-[#DDDCD4]/60 text-[10px] font-mono text-[#A43F2B]">
                Action: Sanitization
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-4 border border-[#DDDCD4] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DEE8EC] text-[#A43F2B] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <div className="text-xs font-bold text-[#242621]">Central Sync</div>
              <p className="text-[11px] text-[#62665E] leading-relaxed">
                Creates deal in CRM, appends row to Google Sheet, and archives backup.
              </p>
              <div className="pt-2 border-t border-[#DDDCD4]/60 text-[10px] font-mono text-[#A43F2B]">
                Action: Multi-Sync
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-4 border border-[#DDDCD4] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#DEE8EC] text-[#A43F2B] flex items-center justify-center font-bold text-xs">
                04
              </div>
              <div className="text-xs font-bold text-[#242621]">Instant Notification</div>
              <p className="text-[11px] text-[#62665E] leading-relaxed">
                Alerts sales manager via WhatsApp with pre-filled 1-tap reply button.
              </p>
              <div className="pt-2 border-t border-[#DDDCD4]/60 text-[10px] font-mono text-[#A43F2B]">
                Latency: &lt; 2 seconds
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#62665E] flex flex-wrap gap-4 pt-2">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Reliable webhooks with automatic retries
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Official WhatsApp Business Cloud API integration
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
            Custom Zapier, Make, and direct REST integrations
          </span>
        </div>
      </div>
    );
  }

  // ai-agents
  return (
    <div className="rounded-2xl border border-[#DDDCD4] bg-[#FFFFFF] p-5 sm:p-7 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DDDCD4] gap-2 mb-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A43F2B] block">
            System Topology
          </span>
          <h3 className="text-lg font-bold text-[#242621]">
            Domain Knowledge Ingestion with Human Handover
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F1DDD1] text-xs font-medium text-[#242621]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#A43F2B]" />
          Strict Guardrails • Safe AI
        </span>
      </div>

      <div className="bg-[#F7F4EE] rounded-xl p-4 sm:p-6 border border-[#DDDCD4]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {/* Node 1: Verified Knowledge */}
          <div className="bg-white rounded-xl p-4 border border-[#DDDCD4] shadow-subtle space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#242621]">
                <Database className="w-4 h-4 text-[#A43F2B]" />
                <span>1. Verified Knowledge</span>
              </div>
              <p className="text-xs text-[#62665E] leading-relaxed">
                Trained only on your approved catalogs, pricing policies, company FAQs, and service agreements.
              </p>
            </div>
            <div className="p-2 rounded bg-[#F7F4EE] text-[10px] font-mono text-[#62665E]">
              Zero hallucination risk outside your corpus
            </div>
          </div>

          {/* Node 2: Autonomous Assistant */}
          <div className="bg-white rounded-xl p-4 border-2 border-[#A43F2B] shadow-card space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#242621]">
                  <Bot className="w-4 h-4 text-[#A43F2B]" />
                  <span>2. Contextual Agent</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#F1DDD1] text-[#A43F2B] font-semibold">
                  24/7 Active
                </span>
              </div>
              <p className="text-xs text-[#62665E] leading-relaxed">
                Answers repetitive questions, collects prospect phone and requirements, checks availability in seconds.
              </p>
            </div>
            <div className="p-2 rounded bg-[#DEE8EC] text-[10px] font-semibold text-[#242621] text-center">
              Confidence threshold evaluation
            </div>
          </div>

          {/* Node 3: Human Handover */}
          <div className="bg-white rounded-xl p-4 border border-[#DDDCD4] shadow-subtle space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#242621]">
                <UserCheck className="w-4 h-4 text-emerald-700" />
                <span>3. Human Handover</span>
              </div>
              <p className="text-xs text-[#62665E] leading-relaxed">
                When a complex custom inquiry or high-value deal occurs, immediately passes structured transcript to your team on WhatsApp.
              </p>
            </div>
            <div className="p-2 rounded bg-emerald-50 text-[10px] font-medium text-emerald-800">
              Your staff steps in with full context
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-[#62665E] flex flex-wrap gap-4 pt-2">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
          RAG (Retrieval-Augmented Generation) on your business data
        </span>
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
          Instant escalation routing to phone/WhatsApp
        </span>
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#A43F2B]" />
          No fabricated commitments or pricing
        </span>
      </div>
    </div>
  );
};

export default ServiceExplanatoryVisual;

