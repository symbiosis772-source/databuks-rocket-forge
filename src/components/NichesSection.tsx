import { 
  Building2, 
  GraduationCap, 
  Store, 
  ShoppingCart, 
  Megaphone, 
  Truck,
  Stethoscope,
  UtensilsCrossed,
  User,
  Video 
} from "lucide-react";

const NichesSection = () => {
  const niches = [
    { icon: Building2, name: "Real Estate" },
    { icon: GraduationCap, name: "Coaching & Education" },
    { icon: Store, name: "Small Businesses" },
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Megaphone, name: "Marketing Agencies" },
    { icon: Truck, name: "Logistics" },
    { icon: Stethoscope, name: "Healthcare & Clinics" },
    { icon: UtensilsCrossed, name: "Restaurants & Food" },
    { icon: User, name: "Personal Brands" },
    { icon: Video, name: "Creators & Influencers" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Client{" "}
            <span className="gradient-text">Niches</span>
          </h2>
          <p className="text-muted-foreground">
            We work with businesses across diverse industries, delivering tailored solutions for each sector.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {niches.map((niche) => (
            <div
              key={niche.name}
              className="flex items-center gap-3 px-5 py-3 bg-card rounded-full border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <niche.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium text-foreground">{niche.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
