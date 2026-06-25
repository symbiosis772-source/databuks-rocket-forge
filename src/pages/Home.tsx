import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Plus, Mic, ArrowUp, PanelLeft, MessageSquarePlus, Search,
  Image as ImageIcon, Code2, Sparkles, Rocket, Briefcase,
  Layers, DollarSign, Phone, ExternalLink, Settings, HelpCircle, User,
} from "lucide-react";
import SEO from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import logo from "@/assets/brand/databuks-logo.png";
import { portfolio } from "@/data/portfolio";

type Reply = {
  title: string;
  body: string;
  bullets?: string[];
  ctas?: { label: string; href: string; primary?: boolean; external?: boolean }[];
  showcase?: typeof portfolio;
};

const SUGGESTIONS = [
  { icon: Rocket,    label: "Build an MVP",        prompt: "I want to build an MVP for my startup" },
  { icon: Code2,     label: "Custom website",      prompt: "I need a custom website for my business" },
  { icon: Sparkles,  label: "Add AI features",     prompt: "Add AI features to my product" },
  { icon: Briefcase, label: "See your work",       prompt: "Show me your past work" },
];

function answer(query: string): Reply {
  const q = query.toLowerCase().trim();

  if (/(price|pricing|cost|charge|budget|how much)/.test(q)) {
    return {
      title: "Transparent, project-based pricing.",
      body: "Most engagements fall into one of three bands. Final quote depends on scope, integrations and timeline — we'll share a fixed estimate within 24 hours of a quick call.",
      bullets: [
        "Landing / marketing site — from ₹25k, 1 week",
        "Full website or web app — from ₹75k, 2–3 weeks",
        "Custom product / AI workflow — from ₹1.5L, 3–5 weeks",
      ],
      ctas: [
        { label: "See full pricing", href: "/pricing", primary: true },
        { label: "Get a custom quote", href: "/contact" },
      ],
    };
  }

  if (/(portfolio|work|project|case|example|client|past)/.test(q)) {
    return {
      title: "A small slice of our work.",
      body: "Below are a few public projects. Most of our work is under NDA — we ship products for clients across real estate, e-commerce, education and healthcare that we can't display publicly.",
      showcase: portfolio.slice(0, 6),
      ctas: [
        { label: "View all projects", href: "/portfolio", primary: true },
        { label: "Discuss yours", href: "/contact" },
      ],
    };
  }

  if (/(mvp|startup|launch|prototype|idea)/.test(q)) {
    return {
      title: "MVP to live product in 1–1.5 weeks.",
      body: "We pair a founder-style PM with senior engineers to ship a working MVP fast — not a clickable mockup. You'll have a deployed product, working auth, payments and a real database from week one.",
      bullets: [
        "Discovery call + scoped spec — Day 1",
        "Working prototype — Day 4",
        "Polished MVP shipped to production — Day 10",
      ],
      ctas: [
        { label: "Start your MVP", href: "/contact", primary: true },
        { label: "See how we work", href: "/services" },
      ],
    };
  }

  if (/(ai|ml|gpt|automation|chatbot|agent|llm)/.test(q)) {
    return {
      title: "AI that actually ships.",
      body: "From chat assistants to document pipelines, we build production AI features that plug into your existing product — no demos, no hand-wavy proofs of concept.",
      bullets: [
        "Custom GPTs and RAG over your own data",
        "Workflow automation with n8n / Zapier / custom code",
        "Voice and vision agents on the latest model APIs",
      ],
      ctas: [
        { label: "Explore AI services", href: "/services", primary: true },
        { label: "Tell us your use case", href: "/contact" },
      ],
    };
  }

  if (/(website|landing|site|web|page)/.test(q)) {
    return {
      title: "Custom websites, not templates.",
      body: "Every site we ship is designed from scratch around your brand — fast, SEO-clean, fully responsive and built on a stack you can maintain.",
      bullets: [
        "Marketing sites, e-commerce, and dashboards",
        "Tech: React, Next.js, Tailwind, Supabase / Node",
        "Lighthouse 95+ on launch day",
      ],
      ctas: [
        { label: "See website services", href: "/services", primary: true },
        { label: "Get a quote", href: "/contact" },
      ],
    };
  }

  if (/(contact|talk|call|whatsapp|email|reach|hire)/.test(q)) {
    return {
      title: "Two ways to reach us.",
      body: "We reply within a few hours, every day.",
      bullets: [
        "WhatsApp — +91 87886 06608 (fastest)",
        "Email — databuksllc@gmail.com",
      ],
      ctas: [
        { label: "Open contact page", href: "/contact", primary: true },
        { label: "WhatsApp us", href: "https://wa.me/918788606608", external: true },
      ],
    };
  }

  if (/(tech|stack|tool|framework|next|react|node)/.test(q)) {
    return {
      title: "A modern, boring-on-purpose stack.",
      body: "We pick tools that are fast to ship, easy to maintain and well-supported five years from now.",
      bullets: [
        "Frontend — React, Next.js, Vite, Tailwind, Framer Motion",
        "Backend — Node, Supabase, Postgres, Edge Functions",
        "AI — OpenAI, Anthropic, Gemini, custom RAG pipelines",
      ],
      ctas: [{ label: "Browse our stack", href: "/technologies", primary: true }],
    };
  }

  if (/(about|team|who|company|databuks)/.test(q)) {
    return {
      title: "DataBuks — a small, senior studio.",
      body: "We're a tight team building digital products for startups, creators and growing businesses. Indian-friendly pricing, global quality, founder-direct communication.",
      ctas: [
        { label: "About us", href: "/about", primary: true },
        { label: "Start a project", href: "/contact" },
      ],
    };
  }

  // Default fallback
  return {
    title: "Here's how we can help.",
    body: `Thanks for the message — "${query.slice(0, 120)}". Pick a direction below or tell us a bit more and we'll route you to the right team.`,
    bullets: [
      "Custom websites and web apps",
      "MVPs for founders, shipped in weeks",
      "AI features, automations and workflows",
    ],
    ctas: [
      { label: "Talk to us", href: "/contact", primary: true },
      { label: "See past work", href: "/portfolio" },
    ],
  };
}

const SIDEBAR_LINKS = [
  { icon: MessageSquarePlus, label: "New chat", href: "#new", isAction: true },
  { icon: Search,            label: "Search chats", href: "#search", isAction: true },
  { icon: Layers,            label: "Services", href: "/services" },
  { icon: Briefcase,         label: "Work", href: "/portfolio" },
  { icon: Code2,             label: "Technologies", href: "/technologies" },
  { icon: DollarSign,        label: "Pricing", href: "/pricing" },
  { icon: User,              label: "About", href: "/about" },
  { icon: Phone,             label: "Contact", href: "/contact" },
];

const Home = () => {
  const [input, setInput] = useState("");
  const [thread, setThread] = useState<{ q: string; a: Reply }[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = (text?: string) => {
    const q = (text ?? input).trim();
    if (!q) return;
    const a = answer(q);
    setThread((t) => [...t, { q, a }]);
    setInput("");
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [thread]);

  const empty = thread.length === 0;

  return (
    <div className="min-h-screen bg-snow text-ink flex">
      <SEO
        title="DataBuks — Ideas, shipped as products"
        description="A technology studio building custom websites, apps and AI workflows. Ask anything — we ship in weeks, not months."
        path="/home"
      />

      {/* Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-paper border-r border-fog transition-[width] duration-200 ${
          collapsed ? "w-[64px]" : "w-[260px]"
        } sticky top-0 h-screen`}
      >
        <div className="flex items-center justify-between px-3 py-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-[10px] hover:bg-fog text-ink"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="w-[18px] h-[18px]" />
          </button>
          {!collapsed && (
            <Link to="/" className="flex items-center gap-1.5 pr-2">
              <img src={logo} alt="" className="h-6 w-auto object-contain" />
            </Link>
          )}
        </div>

        <nav className="flex-1 px-2 py-1 space-y-0.5 overflow-y-auto">
          {SIDEBAR_LINKS.map((l) => {
            const Icon = l.icon;
            const className = `flex items-center gap-2.5 px-2.5 py-2 rounded-[10px] text-[14px] text-ink hover:bg-fog transition-colors ${
              collapsed ? "justify-center" : ""
            }`;
            if (l.isAction) {
              return (
                <button
                  key={l.label}
                  onClick={() => { if (l.label === "New chat") setThread([]); }}
                  className={`${className} w-full text-left`}
                >
                  <Icon className="w-[18px] h-[18px] shrink-0" />
                  {!collapsed && <span>{l.label}</span>}
                </button>
              );
            }
            return (
              <Link key={l.label} to={l.href} className={className}>
                <Icon className="w-[18px] h-[18px] shrink-0" />
                {!collapsed && <span>{l.label}</span>}
              </Link>
            );
          })}
        </nav>

        {!collapsed && (
          <div className="border-t border-fog p-3 space-y-1">
            <div className="px-2 pb-2">
              <p className="text-[13px] text-ink font-medium">Ship your idea</p>
              <p className="text-[12px] text-smoke leading-snug mt-0.5">
                MVPs and custom products, delivered in 1–3 weeks.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-2.5 py-2 rounded-[10px] hover:bg-fog text-[14px] text-ink"
            >
              <HelpCircle className="w-[18px] h-[18px]" /> Help
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 px-2.5 py-2 rounded-[10px] hover:bg-fog text-[14px] text-ink"
            >
              <Settings className="w-[18px] h-[18px]" /> Settings
            </Link>
          </div>
        )}
      </aside>

      {/* Main stage */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Brand header */}
        <header className="flex items-center justify-between px-5 md:px-8 h-14 border-b border-fog md:border-b-0 bg-snow">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DataBuks" className="h-7 w-auto md:hidden" />
            <span className="text-[18px] font-semibold tracking-[-0.015em] text-ink">DataBuks</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex text-[14px] text-ink hover:text-smoke px-2"
            >
              Sign up for free
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-ink text-white text-[14px] font-medium rounded-[10px] px-4 py-2 hover:bg-[#1f1f1f] transition-colors"
            >
              Log in
            </Link>
          </div>
        </header>

        {/* Thread / empty stage */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <div className={`max-w-[760px] mx-auto px-5 md:px-8 ${empty ? "h-full flex flex-col justify-center" : "py-10 space-y-10"}`}>
            {empty ? (
              <div className="text-center animate-fade-in">
                <h1 className="text-[28px] md:text-[34px] font-normal text-ink tracking-[-0.01em]">
                  Where should we begin?
                </h1>
                <p className="text-[15px] text-smoke mt-3">
                  Ask DataBuks anything — pricing, ideas, timelines, tech.
                </p>
              </div>
            ) : (
              thread.map((m, i) => (
                <div key={i} className="space-y-6 animate-fade-up">
                  {/* User */}
                  <div className="flex justify-end">
                    <div className="bg-fog text-ink rounded-[18px] px-4 py-2.5 max-w-[80%] text-[15px] leading-[1.5]">
                      {m.q}
                    </div>
                  </div>
                  {/* Assistant */}
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center shrink-0 mt-0.5">
                      <img src={logo} alt="" className="w-5 h-5 object-contain invert" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-ink">{m.a.title}</h3>
                      <p className="text-[15px] leading-[1.6] text-ink mt-1.5">{m.a.body}</p>
                      {m.a.bullets && (
                        <ul className="mt-3 space-y-1.5">
                          {m.a.bullets.map((b) => (
                            <li key={b} className="text-[15px] leading-[1.55] text-ink pl-4 relative">
                              <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-ink" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                      {m.a.showcase && (
                        <div className="grid sm:grid-cols-2 gap-3 mt-4">
                          {m.a.showcase.map((p) => (
                            <a
                              key={p.name}
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group border border-fog rounded-[14px] overflow-hidden hover:border-ink transition-colors bg-snow"
                            >
                              <div className="aspect-[16/10] bg-paper overflow-hidden">
                                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                              </div>
                              <div className="p-3">
                                <p className="text-[11px] uppercase tracking-[0.12em] text-ash">{p.category}</p>
                                <p className="text-[14px] font-medium text-ink mt-0.5 flex items-center gap-1">
                                  {p.name} <ExternalLink className="w-3 h-3 text-ash" />
                                </p>
                                <p className="text-[13px] text-smoke leading-snug mt-1">{p.tagline}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                      {m.a.ctas && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {m.a.ctas.map((c) =>
                            c.external ? (
                              <a
                                key={c.label}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[14px] font-medium transition-colors ${
                                  c.primary ? "bg-ink text-white hover:bg-[#1f1f1f]" : "border border-fog text-ink hover:bg-fog"
                                }`}
                              >
                                {c.label}
                              </a>
                            ) : (
                              <Link
                                key={c.label}
                                to={c.href}
                                className={`inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[14px] font-medium transition-colors ${
                                  c.primary ? "bg-ink text-white hover:bg-[#1f1f1f]" : "border border-fog text-ink hover:bg-fog"
                                }`}
                              >
                                {c.label}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-transparent">
          <div className="max-w-[760px] mx-auto px-5 md:px-8 pb-4 pt-2">
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="bg-snow border border-fog rounded-[26px] shadow-pill flex items-end gap-2 px-3 py-2.5 focus-within:border-ash transition-colors"
            >
              <button
                type="button"
                className="p-2 rounded-full hover:bg-fog text-ink shrink-0"
                aria-label="Add attachment"
                onClick={() => send("Show me your past work")}
              >
                <Plus className="w-[18px] h-[18px]" />
              </button>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
                }}
                rows={1}
                placeholder="Ask anything"
                className="flex-1 resize-none bg-transparent text-[16px] text-ink placeholder:text-ash py-2 outline-none max-h-40"
              />
              {input.trim() ? (
                <button
                  type="submit"
                  className="bg-ink text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#1f1f1f] shrink-0"
                  aria-label="Send"
                >
                  <ArrowUp className="w-[18px] h-[18px]" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => send("Tell me about DataBuks")}
                  className="bg-ink text-white rounded-full px-3 h-9 flex items-center gap-1.5 text-[13px] font-medium hover:bg-[#1f1f1f] shrink-0"
                  aria-label="Voice"
                >
                  <Mic className="w-[14px] h-[14px]" /> Voice
                </button>
              )}
            </form>

            {empty && (
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {SUGGESTIONS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.label}
                      onClick={() => send(s.prompt)}
                      className="inline-flex items-center gap-2 border border-fog rounded-[10px] px-3 py-2 text-[13px] text-ink hover:bg-fog transition-colors"
                    >
                      <Icon className="w-4 h-4" /> {s.label}
                    </button>
                  );
                })}
              </div>
            )}

            <p className="text-center text-[12px] text-ash mt-3">
              DataBuks ships custom websites, apps and AI workflows. We reply within hours.
            </p>
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Home;
