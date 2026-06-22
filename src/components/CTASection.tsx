import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GlowCube from "@/components/GlowCube";

const CTASection = () => {
  return (
    <section className="bg-void py-24 md:py-32 border-t border-fern">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <GlowCube size={260} />
          </div>
          <div>
            <p className="eyebrow mb-4">// Get started</p>
            <h2 className="text-3xl md:text-5xl text-phosphor tracking-tight leading-[1.1] mb-6 max-w-md">
              Ship your first app in <span className="text-reactor">minutes.</span>
            </h2>
            <p className="text-lichen max-w-md mb-8">
              Tell us your idea. We send a plan within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Start a project</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
