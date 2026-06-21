import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Hero pages keep transparent-on-dark nav until scroll
  const darkRoutes = ["/", "/home"];
  const isDarkHero = darkRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Technologies", href: "/technologies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const onDark = isDarkHero && !isScrolled;
  const textClr = onDark ? "text-white/90" : "text-foreground/80";
  const activeClr = onDark ? "text-white" : "text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border py-3"
          : onDark
          ? "bg-transparent py-5"
          : "bg-background/80 backdrop-blur py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-md flex items-center justify-center ${onDark ? "bg-chartreuse" : "bg-navy-deep"}`}>
            <span className={`font-display text-sm font-medium ${onDark ? "text-navy" : "text-white"}`}>D</span>
          </div>
          <span className={`font-display text-lg ${onDark ? "text-white" : "text-foreground"}`}>
            DataBuks
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-3 py-1.5 text-sm transition-colors rounded-full ${
                location.pathname === link.href ? activeClr : `${textClr} hover:${activeClr}`
              }`}
              style={{ letterSpacing: "-0.015em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {onDark ? (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Log in</Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Log in</Link>
            </Button>
          )}
          <Button variant="default" size="sm" asChild>
            <Link to="/contact">Book a demo</Link>
          </Button>
        </div>

        <button
          className={`md:hidden p-2 ${onDark ? "text-white" : "text-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-sm rounded-md ${
                  location.pathname === link.href
                    ? "text-foreground bg-muted"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
              <Button variant="outline" asChild>
                <Link to="/contact">Log in</Link>
              </Button>
              <Button variant="default" asChild>
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
