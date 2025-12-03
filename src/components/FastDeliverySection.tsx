import { Link } from "react-router-dom";
import { 
  Zap, 
  Workflow, 
  Bot, 
  Code2, 
  MessageCircle, 
  Target,
  ArrowRight,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FastDeliverySection = () => {
  const reasons = [
    { icon: Workflow, label: "Efficient internal workflows" },
    { icon: Bot, label: "Automation-backed development" },
    { icon: Code2, label: "Modern tech stack" },
    { icon: MessageCircle, label: "Clear communication" },
    { icon: Target, label: "Focused execution" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Fast Delivery
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fast Delivery You Can Trust{" "}
              <span className="gradient-text">(1–1.5 Months)</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver complete software, web apps, websites, workflows, and MVPs 
              in 1–1.5 months, thanks to:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {reasons.map((reason) => (
              <div
                key={reason.label}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {reason.label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border text-center mb-8">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-foreground font-medium">
              This means your idea becomes reality without delays or complications.
            </p>
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Fast
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastDeliverySection;
