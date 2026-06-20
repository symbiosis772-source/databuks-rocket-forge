import { Star, Quote } from "lucide-react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      content: "Clean work, fast delivery, and great communication. Highly recommended.",
      rating: 5,
    },
    {
      content: "Our website + automation workflow was delivered smoothly. Amazing experience.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Real feedback from real clients who trusted us with their projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>
              
              <p className="text-sm text-muted-foreground font-medium">
                — Client Review
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
