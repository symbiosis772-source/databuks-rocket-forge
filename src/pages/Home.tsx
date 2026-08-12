import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const services = [
  {
    title: "Custom websites",
    body: "Marketing sites, e-commerce and dashboards designed from scratch. Lighthouse 95+ on launch day.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "MVPs for founders",
    body: "Working product with auth, payments and a real database — shipped in 1–1.5 weeks, not a clickable mockup.",
    tags: ["Supabase", "Stripe", "Postgres"],
  },
  {
    title: "AI features that ship",
    body: "Custom GPTs, RAG over your own data, voice and vision agents plugged into your existing product.",
    tags: ["OpenAI", "Anthropic", "n8n"],
  },
  {
    title: "Automations & workflows",
    body: "Internal tools, integrations, and pipelines that quietly do the boring work every day.",
    tags: ["Node", "Zapier", "Edge Functions"],
  },
];

const stats = [
  { n: "40+", label: "shipped products" },
  { n: "1–1.5w", label: "average MVP delivery" },
  { n: "8 yrs", label: "combined studio experience" },
];

const Home = () => {
  const showcase = portfolio.slice(0, 6);

  return (
    <div className="min-h-screen text-charcoal">
      <SEO
        title="DataBuks — a technology studio for founders"
        description="DataBuks builds custom websites, apps and AI workflows for startups and creators. Fast delivery, warm-paper product craft, founder-direct communication."
        path="/home"
      />
      <main className="pt-8 md:pt-16">
        {/* HERO */}
        <section className="relative overflow-hidden -mt-8 md:-mt-16 pt-32 md:pt-44 pb-20 md:pb-32">
          <img
            src={heroNagpur.url}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/80" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
            }}
          />

          <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center animate-fade-up">
            <span className="eyebrow hidden md:inline-flex items-center gap-2 mb-5 md:mb-6 text-[10px] md:text-[12px] text-white/90">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />
              A studio in Nagpur, working worldwide
            </span>
            <h1 className="text-display-xl mx-auto max-w-[900px] text-white">
              A quiet studio that ships loud products.
            </h1>
            <p className="mt-4 md:mt-6 text-[15px] md:text-[23px] leading-[1.45] tracking-[-0.01em] text-white/80 max-w-[720px] mx-auto px-2">
              DataBuks designs and builds custom websites, MVPs and AI workflows for founders and
              creators — delivered in weeks, not months.
            </p>

            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Start a project</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>

            <div className="mt-5 md:mt-6 text-[12px] md:text-[14px] text-white/70 flex items-center justify-center gap-2 px-2 text-center">
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white shrink-0" /> Free 30-min discovery call · fixed quote in 24 hours
            </div>
          </div>
        </section>


        {/* SERVICES */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="eyebrow">What we make</span>
              <h2 className="text-heading-vivid mt-3 max-w-[640px]">
                Four practices, one small senior team behind every one.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-[15px] text-graphite hover:opacity-70">
              All services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="glass rounded-[12px] p-6 md:p-7 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-pebble/60 mb-5" />
                <h3 className="text-[23px] md:text-[27px] leading-[1.3] tracking-[-0.01em] text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.5] text-slate-c">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] px-3 py-1 rounded-full border border-hairline text-iron bg-white/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="glass-stone rounded-[24px] p-8 md:p-14">
            <div className="grid sm:grid-cols-3 gap-8 md:gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-graphite">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[15px] text-slate-c">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-20 md:pb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="text-heading-vivid mt-3 max-w-[640px]">
                A small slice — most of what we ship is under NDA.
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-[15px] text-graphite hover:opacity-70">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {showcase.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-[12px] overflow-hidden block animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-linen">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-c">{p.category}</p>
                  <p className="mt-1 text-[17px] text-charcoal flex items-center gap-1.5">
                    {p.name} <ExternalLink className="w-3.5 h-3.5 text-ash" />
                  </p>
                  <p className="mt-1 text-[14px] text-slate-c leading-[1.5]">{p.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-24 md:pb-32">
          <div className="glass-dark rounded-[24px] p-10 md:p-16 text-center">
            <h2 className="text-display max-w-[820px] mx-auto" style={{ color: "hsl(var(--frost))" }}>
              Have an idea worth shipping?
            </h2>
            <p className="mt-5 text-[17px] md:text-[19px] leading-[1.4] text-white/70 max-w-[620px] mx-auto">
              Tell us the shape of the thing. We'll come back within a day with a fixed quote and a
              honest timeline.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start a project</Link>
              </Button>
              <a
                href="https://wa.me/918788606608"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/25 text-white text-[16px] hover:bg-white/10 transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
