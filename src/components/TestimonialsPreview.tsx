import { Star, Quote } from "lucide-react";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Founder, Foster Digital",
      content: "DataBuks delivered our website in just 5 days. The design was exactly what we wanted, and communication was crystal clear throughout. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Deshmukh",
      role: "CEO, Arinal Software",
      content: "We needed a custom CRM dashboard urgently. DataBuks understood our requirements perfectly and delivered a clean, functional system on time. Great work!",
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
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
