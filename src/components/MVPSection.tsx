import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MVPSection = () => {
  return (
    <section className="bg-void py-24 border-t border-fern">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl">
          <p className="eyebrow mb-10">MVP Sprint</p>
          <h2 className="text-display text-phosphor mb-10">
            Launch in <span className="font-bold">1–1.5 weeks.</span>
          </h2>
          <p className="text-[18px] leading-[1.5] text-phosphor/80 max-w-lg mb-10">
            Working prototype. Clean UI. Core features. Scalable backend. Test your idea with real users — fast.
          </p>
          <Button asChild>
            <Link to="/contact">
              BUILD MY MVP
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MVPSection;
