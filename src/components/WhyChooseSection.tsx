import { Zap, Palette, Settings, Headphones } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    { icon: Zap, title: "Fast delivery", description: "1–1.5 weeks. No bloat." },
    { icon: Palette, title: "Modern design", description: "Crafted, not templated." },
    { icon: Settings, title: "Custom-built", description: "Zero theme code. Yours." },
    { icon: Headphones, title: "End-to-end", description: "Plan → ship → support." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-sm text-muted-foreground mb-3">Why teams choose us</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
            Built on trust, <em className="italic">delivered with care.</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-2xl p-6 shadow-floating">
              <r.icon className="w-5 h-5 text-foreground/70 mb-4" />
              <h3 className="font-display text-lg text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
