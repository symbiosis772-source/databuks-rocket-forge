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
    <section className="py-24 bg-deep-space">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
            Testimonials
          </span>
          <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
            What Our{" "}
            <span className="text-silver">Clients Say</span>
          </h2>
          <p className="text-body text-silver">
            Real feedback from real clients who trusted us with their projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 border border-lead/20 hover:border-lead/40 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-mercury-blue/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mercury-blue text-mercury-blue" />
                ))}
              </div>

              <p className="text-body text-starlight leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <p className="text-body-sm text-silver font-medium">
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
