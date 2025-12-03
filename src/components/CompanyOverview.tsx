import { Rocket, Workflow, Code, Plug, Bot, MessageCircle } from "lucide-react";

const CompanyOverview = () => {
  const specializations = [
    { icon: Rocket, label: "Full product builds" },
    { icon: Code, label: "Startup MVP development" },
    { icon: Workflow, label: "Automations & workflows" },
    { icon: Code, label: "Frontend + Backend development" },
    { icon: Plug, label: "API integrations" },
    { icon: Bot, label: "AI-enabled tools" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About DataBuks
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modern Technology Services{" "}
              <span className="gradient-text">You Can Trust</span>
            </h2>
          </div>

          <div className="space-y-6 text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              DataBuks is a modern technology service agency delivering high-quality 
              custom websites, apps, internal tools, workflows, automations, and AI-powered systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help businesses, creators, brands, and startups bring their digital ideas to life — 
              quickly, affordably, and professionally.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground text-center mb-6">
              We specialize in:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specializations.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="font-heading font-semibold text-foreground">Our Promise</span>
            </div>
            <p className="text-muted-foreground">
              With clear communication, clean code, and fast timelines, 
              DataBuks makes product building simple and smooth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
