import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const PortfolioSection = () => {
  const featured = portfolio.slice(0, 6);

  return (
    <section className="bg-void py-24 border-t border-fern">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">// Selected work</p>
            <h2 className="text-3xl md:text-5xl text-phosphor tracking-tight leading-[1.05]">
              Products we've shipped.
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/portfolio">
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fern border border-fern">
          {featured.map((p) => (
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
                  alt={`${p.name} preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow mb-1">{p.category}</p>
                  <h3 className="text-lg text-phosphor tracking-tight">{p.name}</h3>
                  <p className="text-sm text-lichen mt-1">{p.tagline}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-lichen group-hover:text-reactor group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </a>
          ))}
        </div>

        {/* Confidential note */}
        <p className="mt-8 text-xs text-lichen max-w-2xl">
          <span className="text-reactor">●</span>{" "}
          These are a few of our older, publicly shareable projects. Most of our work is under NDA and cannot be displayed here — we've shipped many more enterprise builds for clients across India and abroad.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
