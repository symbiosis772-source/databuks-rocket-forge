import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlowCube from "@/components/GlowCube";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-void text-phosphor">
      <div className="absolute inset-0 bg-terminal-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000,transparent)]" />

      <div className="relative container mx-auto px-5 pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6 inline-flex items-center pulse-dot">
            Programmable Studio · v2026
          </p>

          <h1 className="text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-phosphor font-medium animate-fade-up">
            Ship software.<br/>
            <span className="text-reactor">In weeks.</span>
          </h1>

          <p
            className="mt-6 text-base md:text-[17px] text-lichen max-w-md mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Custom web, apps, and AI infrastructure for teams that need to move now.
          </p>

          <div
            className="mt-8 flex items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/portfolio">See work</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <GlowCube size={320} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
