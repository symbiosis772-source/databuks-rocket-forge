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
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio | DataBuks — Custom websites, apps & MVPs"
        description="Selected work from DataBuks: real estate marketplaces, e-commerce, school portals, ERPs, SaaS dashboards and MVPs shipped in weeks."
        path="/portfolio"
      />
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-muted-foreground mb-4">Portfolio</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.04] mb-6">
              Real products. <em className="italic">Real teams.</em>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              A selection of websites, apps, portals and ERPs we've designed and shipped for clients across industries.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  active === c
                    ? "bg-navy-deep text-white shadow-md"
                    : "bg-card text-foreground/70 hover:text-foreground shadow-floating"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-3xl overflow-hidden shadow-floating hover:shadow-elevated transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{p.category}</p>
                      <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{p.description}</p>
                </div>
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
