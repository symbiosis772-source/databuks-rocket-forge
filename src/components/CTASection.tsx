import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-deep-space relative overflow-hidden">
      {/* Soft glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(closest-side, rgba(82, 102, 235, 0.2) 0%, transparent 80%)',
        }}
      />

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
            Get Started
          </span>
          <h2 className="text-heading-lg md:text-display font-light text-starlight mb-6">
            Ready to Build Your Website, App, Software, or{" "}
            <span className="text-silver">MVP?</span>
          </h2>
          <p className="text-body text-silver mb-12 max-w-2xl mx-auto">
            Let's create something powerful and fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/pricing">
                <MessageCircle className="w-5 h-5" />
                View Pricing
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-body-sm text-silver">
            Or chat directly on{" "}
            <a
              href="https://wa.me/918788606608"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mercury-blue hover:underline font-medium"
            >
              WhatsApp
            </a>{" "}
            for quick response
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
