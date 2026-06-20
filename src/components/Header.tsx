import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import databuksLogo from "@/assets/databuks-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-space/90 backdrop-blur-md border-b border-lead/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-[1200px]">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={databuksLogo}
            alt="DataBuks Logo"
            width={40}
            height={40}
            fetchPriority="high"
            decoding="async"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="font-heading text-xl text-starlight tracking-tight">
            DataBuks
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`transition-colors text-sm tracking-wide ${
                location.pathname === link.href
                  ? "text-mercury-blue"
                  : "text-starlight hover:text-mercury-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="header" size="sm" asChild>
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-starlight"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-deep-space/95 backdrop-blur-md border-b border-lead/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3 max-w-[1200px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`transition-colors py-2 text-sm ${
                  location.pathname === link.href
                    ? "text-mercury-blue"
                    : "text-starlight hover:text-mercury-blue"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-lead/20">
              <Button variant="default" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
