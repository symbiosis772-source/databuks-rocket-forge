import { Zap, Workflow, Code2, MessageCircle } from "lucide-react";

const FastDeliverySection = () => {
  const items = [
    { icon: Zap, label: "Sprint delivery" },
    { icon: Workflow, label: "Automated flow" },
    { icon: Code2, label: "Modern stack" },
    { icon: MessageCircle, label: "Direct comms" },
  ];

  return (
    <section className="bg-void py-24 border-t border-fern">
      <div className="container mx-auto px-5">
        <p className="eyebrow mb-4">// How we ship fast</p>
        <h2 className="text-3xl md:text-5xl text-phosphor tracking-tight mb-12 max-w-xl">
          Speed without the shortcuts.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-fern border border-fern">
          {items.map((i) => (
            <div key={i.label} className="bg-void p-6">
              <i.icon className="w-5 h-5 text-reactor mb-4" strokeWidth={1.5} />
              <p className="text-sm text-phosphor">{i.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastDeliverySection;
