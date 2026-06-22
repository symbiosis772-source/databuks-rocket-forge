const CompanyOverview = () => {
  const stats = [
    { value: "1–1.5w", label: "Avg delivery" },
    { value: "30+", label: "Projects shipped" },
    { value: "100%", label: "Custom built" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-void border-t border-fern">
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-fern">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center">
              <div className="text-2xl md:text-3xl text-phosphor font-medium tracking-tight">{s.value}</div>
              <div className="eyebrow mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
