import { Zap, Palette, Settings, Headphones } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    { icon: Zap, title: "Fast", desc: "1–1.5 weeks. No bloat." },
    { icon: Palette, title: "Crafted", desc: "Designed, not templated." },
    { icon: Settings, title: "Custom", desc: "Zero theme code. Yours." },
    { icon: Headphones, title: "End-to-end", desc: "Plan → ship → support." },
  ];

  return (
    <section className="bg-void py-24 border-t border-fern">
      <div className="container mx-auto px-5">
        <p className="eyebrow mb-4">// Why teams choose us</p>
        <h2 className="text-3xl md:text-5xl text-phosphor tracking-tight mb-12 max-w-xl">
          Built on trust.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-fern border border-fern">
          {reasons.map((r) => (
            <div key={r.title} className="bg-void p-6">
              <r.icon className="w-5 h-5 text-reactor mb-4" strokeWidth={1.5} />
              <h3 className="text-lg text-phosphor mb-1">{r.title}</h3>
              <p className="text-sm text-lichen">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
