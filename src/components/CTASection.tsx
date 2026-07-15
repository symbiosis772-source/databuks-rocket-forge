import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/brand/databuks-logo.png";

const CTASection = () => {
  return (
    <section className="relative bg-obsidian py-28 md:py-36 overflow-hidden">
      {/* subtle dusk wash at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none opacity-60"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(26,71,136,0.25) 60%, rgba(64,138,193,0.25) 100%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="DataBuks"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <p className="eyebrow mb-6">Get started</p>
        <h2 className="text-display text-white max-w-3xl mx-auto">
          Ship your first app in <em className="italic font-normal">minutes.</em>
        </h2>
        <p className="mt-6 text-[18px] leading-[1.5] text-frost max-w-md mx-auto">
          Tell us your idea. We send a plan within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
          <Button asChild>
            <Link to="/contact">
              Start a project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
