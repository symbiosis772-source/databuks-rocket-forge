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
    { label: "EXPERTISE", href: "/services" },
    { label: "WORK", href: "/portfolio" },
    { label: "STACK", href: "/technologies" },
    { label: "PRICING", href: "/pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-slate-veil/85 backdrop-blur-md border-b border-graphite"
          : "bg-transparent border-b border-transparent"
      }`}
      style={isScrolled ? undefined : { borderColor: "transparent" }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="DataBuks home">
          <img
            src={logo}
            alt="DataBuks"
            className="h-12 md:h-14 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-[22px]">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[14px] tracking-[0.04em] transition-colors ${
                  active ? "text-phosphor" : "text-phosphor/80 hover:text-phosphor"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Button asChild>
            <Link to="/contact">CONTACT</Link>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-veil border-b border-graphite animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-1 py-2 text-[15px] tracking-[0.04em] text-phosphor"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-graphite">
              <Button asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
