import { ArrowRight, Globe, Rocket, Zap, Workflow, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const highlights = [{
    icon: Globe,
    label: "Custom Websites & Apps"
  }, {
    icon: Rocket,
    label: "MVP Development for Startups"
  }, {
    icon: Zap,
    label: "Fast 1–1.5 Month Delivery"
  }, {
    icon: Workflow,
    label: "Automation & API Integrations"
  }, {
    icon: Palette,
    label: "Modern UI/UX"
  }, {
    icon: Code,
    label: "High-Quality Development"
  }];
  const stats = [{
    value: "1-1.5",
    label: "Weeks Avg. Delivery"
  }, {
    value: "100%",
    label: "Custom Solutions"
  }, {
    value: "24/7",
    label: "Support Available"
  }];
  return <section className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
      backgroundSize: "60px 60px"
    }} />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Technology Services Agency
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            Where ideas become products and products become{" "}
            <span className="gradient-text">impact.</span>
          </h1>

          

          {/* Highlights */}
          

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              
            </Button>
          </div>
        </div>

        {/* Stats */}
        
      </div>
    </section>;
};
export default HeroSection;