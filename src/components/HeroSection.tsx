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
            Build Websites, Apps, Software & MVPs —{" "}
            <span className="gradient-text">Fast and Professional</span>
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
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        
      </div>
    </section>;
};
export default HeroSection;