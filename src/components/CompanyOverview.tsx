import { Rocket, Code, Workflow, Bot } from "lucide-react";

const CompanyOverview = () => {
  const stats = [
    { value: "1–1.5w", label: "Avg. delivery" },
    { value: "30+", label: "Projects shipped" },
    { value: "100%", label: "Custom built" },
    { value: "24/7", label: "Support" },
  ];

  const pills = [
    { icon: Rocket, label: "Product builds" },
    { icon: Code, label: "MVPs" },
    { icon: Workflow, label: "Automations" },
    { icon: Bot, label: "AI tools" },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4" style={{ letterSpacing: "-0.015em" }}>
            A technology studio for shipping fast.
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-[1.05]">
            We help teams ship <em className="italic text-foreground/90">real products,</em><br />
            not just prototypes.
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {pills.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-sm text-foreground shadow-floating"
              >
                <p.icon className="w-3.5 h-3.5 text-foreground/60" />
                {p.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-6 text-center shadow-floating">
              <div className="font-display text-3xl text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
