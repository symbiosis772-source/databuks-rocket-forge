import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const MVPSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-elevated p-10 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs text-foreground/70 mb-6">
            <Rocket className="w-3.5 h-3.5" />
            MVP Sprint
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05] mb-4">
            Launch your <em className="italic">MVP</em> in 1–1.5 weeks.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Working prototype, clean UI, core features, scalable backend. Test your idea with real users — fast.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Build my MVP
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MVPSection;
