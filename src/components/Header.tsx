import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/brand/databuks-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Stack", href: "/technologies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-carbon/90 backdrop-blur-xl border-b border-fern"
          : "bg-void/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-5 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="DataBuks"
            className="h-7 w-auto invert brightness-0 contrast-200"
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm transition-colors relative py-1 ${
                  active ? "text-phosphor" : "text-lichen hover:text-phosphor"
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-px left-0 right-0 h-px bg-reactor" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="text-sm text-lichen hover:text-phosphor transition-colors">
            Log in
          </Link>
          <Button size="sm" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-phosphor"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-carbon border-b border-fern animate-fade-in">
          <nav className="container mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm rounded ${
                  location.pathname === link.href ? "text-phosphor bg-moss" : "text-lichen"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-fern">
              <Button variant="outline" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
