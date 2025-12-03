import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioPreview = () => {
  const projects = [
    {
      title: "Foster Digital Marketing",
      category: "Marketing Agency Website",
      description: "Modern website with lead generation features",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "RGVP Software Services",
      category: "Software Company Website",
      description: "Professional portfolio with service showcase",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    },
    {
      title: "Arinal Software Tech",
      category: "Tech Startup Website",
      description: "Clean modern design with animations",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      title: "Website Design Nagpur",
      category: "Web Agency Portfolio",
      description: "Full portfolio website with case studies",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A glimpse of our recent work — websites, apps, and digital solutions we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="font-heading font-semibold text-foreground mt-2 mb-1">
                  {project.title}
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
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
