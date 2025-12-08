import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />

      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-50 h-full w-full 
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      <div className="container mx-auto px-4 pt-32 pb-16 lg:pt-40">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Eyebrow */}
            <span className="inline-flex items-center text-sm text-muted-foreground font-sans px-5 py-2 
              bg-gradient-to-tr from-muted/20 via-muted/10 to-transparent  
              border border-border/30 rounded-full tracking-tight uppercase mb-6">
              Technology Services Agency
              <ChevronRight className="w-4 h-4 ml-2" />
            </span>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-6 text-foreground">
              Where ideas become products and products become{" "}
              <span className="text-primary">impact.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              DataBuks creates custom websites, software systems, automations, and MVPs with fast delivery timelines of 1–1.5 weeks — quality, speed, and affordability in one place.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 relative h-[400px] lg:h-[500px] w-full">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted to-transparent" />
    </section>
  );
};

export default HeroSection;
