import { ArrowRight, Globe, Rocket, Zap, Workflow, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BackgroundPaths } from "@/components/ui/background-paths";

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
      {/* Background Paths Animation */}
      <BackgroundPaths />
      
      {/* Background Blur Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

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
            Where ideas become products{" "}
            <span className="gradient-text">and products become impact.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            DataBuks creates custom websites, software systems, automations, and MVPs 
            with fast delivery timelines of 1–1.5 weeks — quality, speed, and affordability in one place.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            {highlights.map(item => <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full shadow-sm border border-border">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>)}
          </div>

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
          </div>
        </div>

        {/* Stats */}
        
      </div>
    </section>;
};
export default HeroSection;