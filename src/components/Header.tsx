import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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
    { label: "PRODUCTS", href: "/services" },
    { label: "WORK", href: "/portfolio" },
    { label: "RESOURCES", href: "/technologies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-obsidian/80 backdrop-blur-md border-b border-[#2e2e2e]/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="DataBuks home">
          <img
            src={logo}
            alt="DataBuks"
            className="h-11 md:h-12 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Center nav cluster */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 text-[11px] tracking-[0.182em] rounded-lg transition-colors ${
                  active ? "text-white bg-white/5" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: ghost + white pill */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="px-4 py-3 text-[11px] tracking-[0.182em] text-white hover:text-white/70 transition-colors uppercase"
          >
            Log in
          </Link>
          <Button asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-obsidian border-b border-[#2e2e2e] animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-1 py-2 text-[12px] tracking-[0.182em] uppercase text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 mt-2 border-t border-[#2e2e2e]">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-[11px] tracking-[0.182em] text-white uppercase"
              >
                Log in
              </Link>
              <Button asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
