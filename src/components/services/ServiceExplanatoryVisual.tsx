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
      <div className="rounded-2xl border border-[#2A3850] bg-[#151F30] p-5 sm:p-7 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2A3850] gap-2 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#67E8F9] block">
              Architectural Composition
            </span>
            <h3 className="text-lg font-bold text-[#F4F7FC]">
              Responsive Desktop & Mobile Viewports
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#101827] border border-[#2A3850] text-xs font-medium text-[#67E8F9]">
            <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
            Fast Loading • Mobile-First
          </span>
        </div>

        {/* Visual Mockup Container */}
        <div className="relative bg-[#080D16] rounded-xl p-4 sm:p-6 border border-[#2A3850] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Desktop Browser Mockup */}
            <div className="lg:col-span-8 rounded-xl bg-[#101827] border border-[#2A3850] shadow-subtle overflow-hidden">
              {/* Browser chrome */}
              <div className="h-8 bg-[#151F30] border-b border-[#2A3850] px-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2A3850]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2A3850]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2A3850]" />
                </div>
                <div className="text-[11px] font-mono text-[#B5C1D3] bg-[#080D16] px-3 py-0.5 rounded border border-[#2A3850] max-w-[200px] truncate">
                  yourbrand.in
                </div>
              </div>

              {/* Website content preview */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#2A3850] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-[#2563EB]" />
                    <span className="text-xs font-bold text-[#F4F7FC]">Apex Industrial Supplies</span>
                  </div>
                  <div className="hidden sm:flex gap-3 text-[11px] text-[#B5C1D3]">
                    <span>Products</span>
                    <span>Specifications</span>
                    <span>About</span>
                  </div>
                  <span className="text-[11px] font-semibold text-white bg-[#2563EB] px-2.5 py-1 rounded">
                    Request Quote
                  </span>
                </div>

                <div className="space-y-1.5 max-w-sm">
                  <h4 className="text-sm sm:text-base font-bold text-[#F4F7FC] leading-tight">
                    Engineered Valves & Pipeline Solutions
                  </h4>
                  <p className="text-xs text-[#B5C1D3] leading-relaxed">
                    Precision-grade components delivered across India with full mill test certificates.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2 rounded-lg bg-[#151F30] border border-[#2A3850]">
                    <div className="text-[10px] text-[#B5C1D3]">Gate Valves</div>
                    <div className="text-xs font-bold text-[#F4F7FC]">Class 150-900</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#151F30] border border-[#2A3850]">
                    <div className="text-[10px] text-[#B5C1D3]">Ball Valves</div>
                    <div className="text-xs font-bold text-[#F4F7FC]">Forged Steel</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#151F30] border border-[#2A3850]">
                    <div className="text-[10px] text-[#B5C1D3]">Dispatch</div>
                    <div className="text-xs font-bold text-[#67E8F9]">Ready Stock</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Viewport Mockup */}
            <div className="lg:col-span-4 rounded-2xl bg-[#101827] border-2 border-[#2A3850] p-3 shadow-card max-w-[240px] mx-auto lg:mx-0">
              <div className="w-12 h-1 bg-[#2A3850] rounded-full mx-auto mb-2" />
              <div className="flex items-center justify-between pb-2 border-b border-[#2A3850]">
                <div className="text-[10px] font-bold text-[#F4F7FC]">Apex Supplies</div>
                <div className="w-4 h-3 flex flex-col justify-between">
                  <div className="h-0.5 bg-[#B5C1D3] rounded" />
                  <div className="h-0.5 bg-[#B5C1D3] rounded" />
                </div>
              </div>
              <div className="py-3 space-y-2">
                <div className="text-xs font-bold text-[#F4F7FC] leading-tight">
                  Industrial Valves & Fittings
                </div>
                <div className="text-[10px] text-[#B5C1D3] leading-normal">
                  Instant product lookup and direct WhatsApp quotation.
                </div>
                <div className="p-2 bg-[#2563EB] rounded text-[10px] font-semibold text-white text-center">
                  Inquire on WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#B5C1D3] flex flex-wrap gap-4 pt-2">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Clean semantic HTML
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Optimized Core Web Vitals
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            WhatsApp & Enquiry conversion routing
          </span>
        </div>
      </div>
    );
  }

  if (slug === "app-software-development") {
    return (
      <div className="rounded-2xl border border-[#2A3850] bg-[#151F30] p-5 sm:p-7 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2A3850] gap-2 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#67E8F9] block">
              Application Architecture
            </span>
            <h3 className="text-lg font-bold text-[#F4F7FC]">
              Custom Web Application & Operations Dashboard
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#101827] border border-[#2A3850] text-xs font-medium text-[#67E8F9]">
            <BarChart3 className="w-3.5 h-3.5 text-[#2563EB]" />
            Real-Time State & Role Access
          </span>
        </div>

        <div className="bg-[#080D16] rounded-xl p-4 sm:p-6 border border-[#2A3850]">
          <div className="rounded-xl bg-[#101827] border border-[#2A3850] shadow-subtle overflow-hidden">
            {/* Dashboard App Top Bar */}
            <div className="bg-[#151F30] text-[#F4F7FC] px-4 py-2.5 flex items-center justify-between text-xs border-b border-[#2A3850]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Operations Portal</span>
                <span className="text-[10px] text-[#B5C1D3] hidden sm:inline">• Nagpur Hub</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-[#B5C1D3]">
                <span>Logged in: Operations Lead</span>
                <span className="px-2 py-0.5 bg-[#2563EB]/20 text-[#67E8F9] border border-[#2563EB]/40 rounded">Production</span>
              </div>
            </div>

            {/* Metric Row */}
            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-[#2A3850]">
              <div className="p-3 rounded-lg bg-[#151F30] border border-[#2A3850]">
                <div className="text-[11px] text-[#B5C1D3]">Active Orders</div>
                <div className="text-lg font-bold text-[#F4F7FC] mt-0.5">142 Batches</div>
                <div className="text-[10px] text-emerald-400 font-medium">98.4% on schedule</div>
              </div>
              <div className="p-3 rounded-lg bg-[#151F30] border border-[#2A3850]">
                <div className="text-[11px] text-[#B5C1D3]">Today's Dispatches</div>
                <div className="text-lg font-bold text-[#F4F7FC] mt-0.5">₹3,48,200</div>
                <div className="text-[10px] text-[#B5C1D3]">18 shipments released</div>
              </div>
              <div className="p-3 rounded-lg bg-[#151F30] border border-[#2A3850]">
                <div className="text-[11px] text-[#B5C1D3]">Inventory Status</div>
                <div className="text-lg font-bold text-[#F4F7FC] mt-0.5">Healthy</div>
                <div className="text-[10px] text-emerald-400">0 stock-out alerts</div>
              </div>
            </div>

            {/* Tabular Data View */}
            <div className="p-4 sm:p-5 space-y-2 overflow-x-auto">
              <div className="text-xs font-bold text-[#F4F7FC]">Live Production Queue</div>
              <div className="min-w-[480px] divide-y divide-[#2A3850] text-xs">
                <div className="py-2 flex items-center justify-between text-[#B5C1D3] font-medium">
                  <span className="w-24">Order ID</span>
                  <span className="flex-1">Client / Project</span>
                  <span className="w-24 text-center">Stage</span>
                  <span className="w-24 text-right">Action</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="w-24 font-mono font-medium text-[#67E8F9]">#ORD-9021</span>
                  <span className="flex-1 font-semibold text-[#F4F7FC]">Kailash Engineering</span>
                  <span className="w-24 text-center">
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-[10px] font-semibold">
                      Dispatched
                    </span>
                  </span>
                  <span className="w-24 text-right text-[#67E8F9] font-semibold text-[11px]">View Manifest</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="w-24 font-mono font-medium text-[#67E8F9]">#ORD-9022</span>
                  <span className="flex-1 font-semibold text-[#F4F7FC]">Vidarbha Logistics</span>
                  <span className="w-24 text-center">
                    <span className="px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800 text-amber-300 text-[10px] font-semibold">
                      Assembly
                    </span>
                  </span>
                  <span className="w-24 text-right text-[#67E8F9] font-semibold text-[11px]">Update Stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#B5C1D3] flex flex-wrap gap-4 pt-2">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Relational SQL / PostgreSQL backends
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Secure role-based permissions (RBAC)
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Audit logging & CSV/PDF exports
          </span>
        </div>
      </div>
    );
  }

  if (slug === "business-automation") {
    return (
      <div className="rounded-2xl border border-[#2A3850] bg-[#151F30] p-5 sm:p-7 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2A3850] gap-2 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#67E8F9] block">
              Workflow Pipeline
            </span>
            <h3 className="text-lg font-bold text-[#F4F7FC]">
              Automated Data Pipeline with Zero Manual Copy-Paste
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#101827] border border-[#2A3850] text-xs font-medium text-[#67E8F9]">
            <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
            Connected Systems
          </span>
        </div>

        <div className="bg-[#080D16] rounded-xl p-4 sm:p-6 border border-[#2A3850]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-[#101827] rounded-xl p-4 border border-[#2A3850] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#151F30] border border-[#2A3850] text-[#67E8F9] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <div className="text-xs font-bold text-[#F4F7FC]">Lead Ingestion</div>
              <p className="text-[11px] text-[#B5C1D3] leading-relaxed">
                Customer fills website form or sends WhatsApp requirement enquiry.
              </p>
              <div className="pt-2 border-t border-[#2A3850] text-[10px] font-mono text-[#67E8F9]">
                Trigger: Webhook
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#101827] rounded-xl p-4 border border-[#2A3850] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#151F30] border border-[#2A3850] text-[#67E8F9] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <div className="text-xs font-bold text-[#F4F7FC]">Validation & Scrubbing</div>
              <p className="text-[11px] text-[#B5C1D3] leading-relaxed">
                Cleans phone numbers, parses city, checks for duplicate existing records.
              </p>
              <div className="pt-2 border-t border-[#2A3850] text-[10px] font-mono text-[#67E8F9]">
                Action: Sanitization
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#101827] rounded-xl p-4 border border-[#2A3850] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#151F30] border border-[#2A3850] text-[#67E8F9] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <div className="text-xs font-bold text-[#F4F7FC]">Central Sync</div>
              <p className="text-[11px] text-[#B5C1D3] leading-relaxed">
                Creates deal in CRM, appends row to Google Sheet, and archives backup.
              </p>
              <div className="pt-2 border-t border-[#2A3850] text-[10px] font-mono text-[#67E8F9]">
                Action: Multi-Sync
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#101827] rounded-xl p-4 border border-[#2A3850] shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#151F30] border border-[#2A3850] text-[#67E8F9] flex items-center justify-center font-bold text-xs">
                04
              </div>
              <div className="text-xs font-bold text-[#F4F7FC]">Instant Notification</div>
              <p className="text-[11px] text-[#B5C1D3] leading-relaxed">
                Alerts sales manager via WhatsApp with pre-filled 1-tap reply button.
              </p>
              <div className="pt-2 border-t border-[#2A3850] text-[10px] font-mono text-emerald-400">
                Latency: &lt; 2 seconds
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-[#B5C1D3] flex flex-wrap gap-4 pt-2">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Reliable webhooks with automatic retries
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Official WhatsApp Business Cloud API integration
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            Custom Zapier, Make, and direct REST integrations
          </span>
        </div>
      </div>
    );
  }

  // ai-agents
  return (
    <div className="rounded-2xl border border-[#2A3850] bg-[#151F30] p-5 sm:p-7 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#2A3850] gap-2 mb-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#67E8F9] block">
            System Topology
          </span>
          <h3 className="text-lg font-bold text-[#F4F7FC]">
            Domain Knowledge Ingestion with Human Handover
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#101827] border border-[#2A3850] text-xs font-medium text-[#67E8F9]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
          Strict Guardrails • Safe AI
        </span>
      </div>

      <div className="bg-[#080D16] rounded-xl p-4 sm:p-6 border border-[#2A3850]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {/* Node 1: Verified Knowledge */}
          <div className="bg-[#101827] rounded-xl p-4 border border-[#2A3850] shadow-subtle space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4F7FC]">
                <Database className="w-4 h-4 text-[#2563EB]" />
                <span>1. Verified Knowledge</span>
              </div>
              <p className="text-xs text-[#B5C1D3] leading-relaxed">
                Trained only on your approved catalogs, pricing policies, company FAQs, and service agreements.
              </p>
            </div>
            <div className="p-2 rounded bg-[#151F30] text-[10px] font-mono text-[#67E8F9] border border-[#2A3850]">
              Zero hallucination risk outside your corpus
            </div>
          </div>

          {/* Node 2: Autonomous Assistant */}
          <div className="bg-[#101827] rounded-xl p-4 border-2 border-[#2563EB] shadow-card space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F4F7FC]">
                  <Bot className="w-4 h-4 text-[#67E8F9]" />
                  <span>2. Contextual Agent</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#67E8F9] border border-[#2563EB]/40 font-semibold">
                  24/7 Active
                </span>
              </div>
              <p className="text-xs text-[#B5C1D3] leading-relaxed">
                Answers repetitive questions, collects prospect phone and requirements, checks availability in seconds.
              </p>
            </div>
            <div className="p-2 rounded bg-[#151F30] text-[10px] font-semibold text-[#67E8F9] text-center border border-[#2A3850]">
              Confidence threshold evaluation
            </div>
          </div>

          {/* Node 3: Human Handover */}
          <div className="bg-[#101827] rounded-xl p-4 border border-[#2A3850] shadow-subtle space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F4F7FC]">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>3. Human Handover</span>
              </div>
              <p className="text-xs text-[#B5C1D3] leading-relaxed">
                When a complex custom inquiry or high-value deal occurs, immediately passes structured transcript to your team on WhatsApp.
              </p>
            </div>
            <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-[10px] font-medium text-emerald-400">
              Your staff steps in with full context
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-[#B5C1D3] flex flex-wrap gap-4 pt-2">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
          RAG (Retrieval-Augmented Generation) on your business data
        </span>
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
          Instant escalation routing to phone/WhatsApp
        </span>
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
          No fabricated commitments or pricing
        </span>
      </div>
    </div>
  );
};

export default ServiceExplanatoryVisual;