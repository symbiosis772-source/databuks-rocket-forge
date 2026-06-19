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
  const navLinks = [{
    label: "Home",
    href: "/home"
  }, {
    label: "About",
    href: "/about"
  }, {
    label: "Services",
    href: "/services"
  }, {
    label: "Technologies",
    href: "/technologies"
  }, {
    label: "Pricing",
    href: "/pricing"
  }, {
    label: "Contact",
    href: "/contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-white ${isScrolled ? "border-b border-black" : ""}`}>
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-mono-label">[DATABUKS]</Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => <Link key={link.label} to={link.href} className={`font-mono-label hover:opacity-60 ${location.pathname === link.href ? "underline underline-offset-4" : ""}`}>
              {link.label.toUpperCase()}{location.pathname === link.href ? " ⊙" : ""}
            </Link>)}
        </nav>

        <div className="hidden md:flex items-center">
          <Link to="/contact" className="font-mono-label bg-[#ebff00] text-[#080707] px-3 py-1.5" style={{ borderRadius: '84px' }}>
            BOOK A CALL ↗
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map(link => <Link key={link.label} to={link.href} className={`transition-colors font-medium py-2 ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>)}
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button variant="outline" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button variant="whatsapp" asChild>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>}
    </header>;
};
export default Header;