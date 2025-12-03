import { Link } from "react-router-dom";
import { 
  Rocket, 
  CheckCircle, 
  Users, 
  Lightbulb, 
  Building2, 
  Wrench, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MVPSection = () => {
  const features = [
    "Full working prototype",
    "Clean UI",
    "Core features implemented",
    "Scalable backend",
    "Affordable pricing",
    "Delivery in 1–1.5 months",
  ];

  const perfectFor = [
    { icon: Rocket, label: "Startup founders" },
    { icon: Lightbulb, label: "Creators launching their first tool" },
    { icon: Building2, label: "SaaS concepts" },
    { icon: Users, label: "New business models" },
    { icon: Wrench, label: "Internal tool testing" },
  ];

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 inline mr-2" />
              MVP Development
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Launch Your MVP{" "}
              <span className="gradient-text">Fast</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Startups need speed. DataBuks builds clean, functional MVPs that help you 
              launch quickly, test your idea, and validate your product with real users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What you get */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                What you get:
              </h3>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfect for */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Perfect for:
              </h3>
              <div className="space-y-4">
                {perfectFor.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-heading font-semibold text-foreground mb-6">
              Launch fast, test fast, grow fast.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Build My MVP
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPSection;
