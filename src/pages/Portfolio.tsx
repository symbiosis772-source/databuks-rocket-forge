import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { portfolio } from "@/data/portfolio";

const Portfolio = () => {
  const categories = useMemo(() => {
    const set = new Set(portfolio.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-void">
      <SEO
        title="Portfolio | DataBuks — Custom websites, apps & MVPs"
        description="Selected DataBuks work: real estate marketplaces, e-commerce, school portals, ERPs, SaaS dashboards and MVPs shipped in weeks."
        path="/portfolio"
      />
      <Header />

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">// Portfolio</p>
            <h1 className="text-4xl md:text-6xl text-phosphor tracking-tight leading-[1.05] mb-6">
              Real products. <span className="text-reactor">Real teams.</span>
            </h1>
            <p className="text-base text-lichen max-w-xl">
              A selection of websites, apps, portals and ERPs we've designed and shipped.
            </p>
          </div>

          {/* Confidential disclaimer */}
          <div className="mb-10 p-4 border border-fern bg-carbon/50 rounded">
            <p className="text-sm text-phosphor">
              <span className="text-reactor mr-2">●</span>
              <span className="font-medium">Confidentiality note:</span>{" "}
              <span className="text-lichen">
                What you see here is only a small subset of our older, publicly shareable work.
                The majority of our projects — enterprise dashboards, internal tools, fintech and
                client-specific platforms — are under NDA and cannot be displayed. We've shipped
                far more than what's visible below.
              </span>
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all border ${
                  active === c
                    ? "bg-reactor text-void border-reactor"
                    : "bg-transparent text-lichen border-fern hover:text-phosphor hover:border-phosphor"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fern border border-fern">
            {filtered.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-void hover:bg-carbon transition-colors p-4"
              >
                <div className="aspect-[16/10] overflow-hidden bg-carbon border border-fern mb-4">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="eyebrow mb-1">{p.category}</p>
                    <h3 className="text-lg text-phosphor tracking-tight">{p.name}</h3>
                    <p className="text-sm text-lichen mt-1">{p.tagline}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-lichen group-hover:text-reactor group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-sm text-lichen leading-relaxed">{p.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
