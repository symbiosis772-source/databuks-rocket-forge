import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import prism from "@/assets/prism-hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-veil text-phosphor min-h-screen flex items-center">
      {/* Glass prism — sole decorative element */}
      <img
        src={prism}
        alt=""
        aria-hidden="true"
        width={1280}
        height={1280}
        className="pointer-events-none select-none absolute right-[-8%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[820px] opacity-90 mask-fade-radial"
      />

      <div className="relative container mx-auto px-6 pt-40 pb-24 md:pt-44 md:pb-32 w-full">
        <div className="max-w-[1100px]">
          <p className="eyebrow mb-10 inline-flex items-center pulse-dot">
            Programmable Studio — Est. 2026
          </p>

          <h1 className="text-display-xl text-phosphor animate-fade-up">
            Ideas,<br />
            shipped as <span className="font-bold">products.</span>
          </h1>

          <div className="mt-16 grid md:grid-cols-2 gap-10 items-end">
            <p
              className="text-[18px] md:text-[20px] leading-[1.5] text-phosphor/85 max-w-md animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              A technology studio crafting custom web, apps, and AI infrastructure for teams that need to move now.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 md:justify-end animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button asChild>
                <Link to="/contact">START A PROJECT</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/portfolio">SEE WORK</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
