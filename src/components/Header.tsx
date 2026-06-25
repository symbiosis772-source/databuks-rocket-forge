import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/brand/databuks-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Technologies", href: "/technologies" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-snow/85 backdrop-blur border-b border-fog">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="DataBuks home">
          <img src={logo} alt="DataBuks" className="h-8 w-auto object-contain" />
          <span className="text-[18px] font-semibold tracking-[-0.015em] text-ink">DataBuks</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link
                key={l.label}
                to={l.href}
                className={`px-3 py-1.5 text-[14px] rounded-[10px] transition-colors ${
                  active ? "bg-fog text-ink" : "text-ink hover:bg-fog"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact" className="text-[14px] text-ink hover:text-smoke transition-colors px-2">
            Sign in
          </Link>
          <Button asChild size="sm">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-fog bg-snow">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-[15px] text-ink rounded-[10px] hover:bg-fog"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Start a project</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
