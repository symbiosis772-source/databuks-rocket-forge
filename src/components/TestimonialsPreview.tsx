const TestimonialsPreview = () => {
  const testimonials = [
    { quote: "Clean work, fast delivery, and great communication.", name: "Aarav S.", role: "Founder, SaaS startup" },
    { quote: "Our website and automation workflow shipped smoothly. Amazing experience.", name: "Priya R.", role: "Marketing lead, agency" },
    { quote: "They turned our idea into a working product in under two weeks.", name: "Rohit K.", role: "Co-founder, fintech" },
  ];

  return (
    <section className="bg-mist py-24">
      <div className="container mx-auto px-5">
        <p className="text-xs uppercase tracking-[0.1em] text-lichen mb-4 font-medium">// Customer voices</p>
        <h2 className="text-3xl md:text-5xl text-void tracking-tight mb-12 max-w-xl">
          Teams that trust us.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-pale-mist border border-sage/30 rounded-2xl p-6">
              <p className="text-base text-void leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-sage/30">
                <div className="w-10 h-10 rounded-full bg-moss flex items-center justify-center text-phosphor text-sm font-medium">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm text-void font-semibold">{t.name}</p>
                  <p className="text-xs text-lichen">{t.role}</p>
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
