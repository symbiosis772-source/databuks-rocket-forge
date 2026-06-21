const TestimonialsPreview = () => {
  const testimonials = [
    { quote: "Clean work, fast delivery, and great communication.", author: "Founder, SaaS startup" },
    { quote: "Our website and automation workflow shipped smoothly. Amazing experience.", author: "Marketing lead, agency" },
  ];

  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm text-muted-foreground mb-3">In their words</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
            Teams that <em className="italic">trust us.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-3xl p-8 shadow-floating">
              <p className="font-display text-xl text-foreground leading-snug mb-6">
                "{t.quote}"
              </p>
              <p className="text-sm text-muted-foreground">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
