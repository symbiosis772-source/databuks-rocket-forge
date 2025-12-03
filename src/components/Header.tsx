import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { label: "Services", href: isHomePage ? "#services" : "/#services" },
    { label: "Technologies", href: "/technologies", isRoute: true },
    { label: "Projects", href: isHomePage ? "#projects" : "/#projects" },
    { label: "Pricing", href: isHomePage ? "#pricing" : "/#pricing" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">D</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Data<span className="text-primary">Buks</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className={`transition-colors font-medium ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">Get Quote</a>
          </Button>
          <Button variant="whatsapp" size="sm" asChild>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-colors font-medium py-2 ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button variant="outline" asChild>
                <a href="#contact">Get Quote</a>
              </Button>
              <Button variant="whatsapp" asChild>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
