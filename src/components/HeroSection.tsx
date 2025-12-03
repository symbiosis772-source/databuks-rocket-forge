import { ArrowRight, Zap, Clock, DollarSign, Headphones, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const highlights = [
    { icon: Clock, label: "Fast Turnaround" },
    { icon: DollarSign, label: "Affordable Pricing" },
    { icon: Zap, label: "Fully Customized" },
    { icon: Headphones, label: "24×7 Support" },
  ];

  return (
    <section className="relative min-h-[100vh] gradient-bg overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-[10%] w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-48 right-[15%] w-2 h-2 bg-blue-400/50 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-[20%] w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 right-[25%] w-2 h-2 bg-blue-500/40 rounded-full animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm md:text-base font-semibold border border-primary/20 shadow-lg shadow-primary/5">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              Technology Services Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 md:mb-10 animate-fade-up leading-[1.1] tracking-tight" style={{ animationDelay: '0.1s' }}>
            Fast and Professional{" "}
            <span className="gradient-text block mt-2 md:mt-4">Website, App & Automation</span>{" "}
            <span className="block mt-2">Services.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-10 md:mb-14 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Get custom websites, applications, software tools, automations, integrations, 
            and AI-powered solutions built exactly to your needs — with fast delivery and clear communication.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 px-5 py-3 bg-background/80 backdrop-blur-sm rounded-full shadow-md border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300" asChild>
              <a href="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 md:mt-28 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "3-7", label: "Days Avg. Delivery" },
            { value: "100%", label: "Custom Solutions" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 md:p-8 rounded-2xl bg-background/70 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
