import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects: { name: string; category: string; description: string }[] = [];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Take a look at some of our recent work that showcases our expertise and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center relative">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              View More Work
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
