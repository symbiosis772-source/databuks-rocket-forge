import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MVPSection = () => {
  return (
    <section className="bg-void py-24 border-t border-fern">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">// MVP Sprint</p>
          <h2 className="text-3xl md:text-5xl text-phosphor tracking-tight mb-4">
            Launch in 1–1.5 weeks.
          </h2>
          <p className="text-lichen max-w-lg mb-8">
            Working prototype. Clean UI. Core features. Scalable backend. Test your idea with real users — fast.
          </p>
          <Button asChild>
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
