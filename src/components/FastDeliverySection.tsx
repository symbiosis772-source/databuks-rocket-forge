import { Zap, Workflow, Code2, MessageCircle } from "lucide-react";

const FastDeliverySection = () => {
  const items = [
    { icon: Zap, label: "Sprint-based delivery" },
    { icon: Workflow, label: "Automation-backed flow" },
    { icon: Code2, label: "Modern stack" },
    { icon: MessageCircle, label: "Direct comms" },
  ];

  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-muted-foreground mb-3">How we ship fast</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
            Speed without the <em className="italic">shortcuts.</em>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {items.map((i) => (
            <div key={i.label} className="bg-card rounded-2xl p-6 shadow-floating">
              <i.icon className="w-5 h-5 text-foreground/70 mb-4" />
              <p className="text-sm text-foreground font-medium">{i.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastDeliverySection;
