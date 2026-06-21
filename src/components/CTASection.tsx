import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero text-white p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 max-w-2xl mx-auto">
              Ready to <em className="italic">ship?</em>
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8">
              Tell us about your idea. We'll send a plan back within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
