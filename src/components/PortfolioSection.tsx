import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const PortfolioSection = () => {
  const featured = portfolio.slice(0, 6);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3">Selected work</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
              Products we've <em className="italic">shipped.</em>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/portfolio">
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p) => (
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
                  alt={`${p.name} preview`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{p.category}</p>
                    <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
