import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_60%,#000,transparent)]" />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] gradient-radial-glow" />

      <div className="relative container mx-auto px-4 pt-40 pb-28 md:pt-48 md:pb-36 text-center">
        {/* Announcement pill */}
        <div className="inline-flex items-center gap-2 px-2 py-1 pr-4 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm animate-fade-in">
          <span className="px-2 py-0.5 rounded-full bg-chartreuse text-navy text-xs font-medium">New</span>
          <span className="text-white/90">Introducing MVPs delivered in 1–1.5 weeks</span>
          <ArrowRight className="w-3.5 h-3.5 text-white/70" />
        </div>

        {/* Display headline — editorial serif */}
        <h1
          className="font-display font-normal text-5xl md:text-6xl lg:text-7xl text-white leading-[1.04] tracking-tight max-w-4xl mx-auto mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both", letterSpacing: "-0.02em" }}
        >
          Ideas, shipped as <em className="italic text-white/95">products.</em>
        </h1>

        <p
          className="max-w-xl mx-auto text-base md:text-lg text-white/70 mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Custom websites, apps and AI workflows. Delivered in weeks, not months.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Book a demo</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link to="/portfolio">
              <Sparkles className="w-4 h-4" />
              See work
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom fade into light section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
