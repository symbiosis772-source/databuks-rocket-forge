import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import duskSky from "@/assets/dusk-sky.jpg";
import logo from "@/assets/brand/databuks-logo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-obsidian text-white min-h-[100svh] flex items-center">
      {/* Dusk-sky atmosphere */}
      <img
        src={duskSky}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-90"
      />
      {/* Vignette + dusk gradient blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/95 via-obsidian/50 to-obsidian" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,16,17,0.85) 0%, rgba(19,29,39,0.5) 30%, rgba(26,71,136,0.25) 60%, rgba(15,16,17,0.95) 100%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32 w-full text-center">
        {/* Promo pill */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/40 text-[11px] tracking-[0.182em] uppercase text-white"
            style={{ background: "rgba(15,16,17,0.5)" }}
          >
            <span className="pulse-dot" />
            Limited slots — Dec 2026
          </span>
        </div>

        {/* Logo lockup above the headline */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <img
            src={logo}
            alt="DataBuks"
            width={320}
            height={80}
            className="h-12 md:h-14 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Editorial display headline */}
        <h1 className="text-display-xl text-white animate-fade-up max-w-[1000px] mx-auto">
          Own your <em className="italic font-normal">wealth</em> of ideas.
        </h1>

        <p
          className="mt-8 text-[18px] leading-[1.5] text-frost max-w-[520px] mx-auto animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          A technology studio crafting custom web, apps, and AI infrastructure — delivered in weeks, not months.
        </p>

        {/* CTA pill */}
        <div
          className="mt-10 flex flex-wrap justify-center items-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button asChild>
            <Link to="/contact">
              Start a project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/portfolio">
              See work
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Floating conversational search bar */}
        <div
          className="mt-12 mx-auto max-w-[640px] animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="flex items-center gap-3 px-5 py-4 rounded-[30px] border border-white/10"
            style={{ background: "rgba(46,46,46,0.55)", backdropFilter: "blur(12px)" }}
          >
            <input
              type="text"
              placeholder="Describe your idea — we'll send a plan in 24 hours…"
              className="flex-1 bg-transparent border-0 outline-none text-[15px] text-white placeholder:text-frost"
              aria-label="Describe your idea"
            />
            <Link
              to="/contact"
              aria-label="Submit"
              className="shrink-0 w-9 h-9 rounded-full bg-white text-[#090a0b] flex items-center justify-center hover:bg-[#f5f5f7] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Award badges */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-10 text-white/80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { name: "Forbes", tag: "Top Studios 2026" },
            { name: "FastCo", tag: "Most Innovative" },
          ].map((b) => (
            <div key={b.name} className="flex items-center gap-3">
              <span className="text-white/40">❮</span>
              <div className="text-center">
                <p className="font-display text-[18px] leading-none">{b.name}</p>
                <p className="mt-1 text-[10px] tracking-[0.182em] uppercase text-frost">{b.tag}</p>
              </div>
              <span className="text-white/40">❯</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
