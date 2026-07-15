import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] border-0"
      style={{ paddingTop: "env(safe-area-inset-top)", backgroundColor: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 h-28 md:h-32 flex items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center" aria-label="DataBuks home">
          <img
            src={logo}
            alt="DataBuks"
            className="block h-[110px] w-auto md:h-[150px] lg:h-[170px] object-contain object-left"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link
                key={l.label}
                to={l.href}
                className={`text-[14px] tracking-[-0.005em] transition-colors ${
                  active ? "text-graphite" : "text-iron hover:text-graphite"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-black/5 text-charcoal"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="w-5 h-5" strokeWidth={1.75} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[110] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        />

        {/* Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 h-full w-[82%] max-w-[340px] bg-linen/95 backdrop-blur-xl border-l border-black/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-14 border-b border-black/5">
            <span className="eyebrow text-[10px]">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/60 border border-black/5 text-charcoal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
            {navLinks.map((l) => {
              const active = location.pathname === l.href;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl text-[16px] transition-colors ${
                    active
                      ? "bg-charcoal text-frost"
                      : "text-charcoal hover:bg-white/70"
                  }`}
                >
                  <span>{l.label}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      active ? "opacity-100" : "opacity-40 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="px-4 pb-6 pt-3 border-t border-black/5 flex flex-col gap-3">
            <Button asChild size="lg" className="w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start a project
              </Link>
            </Button>
            <a
              href="https://wa.me/918788606608"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[13px] text-slate-c hover:text-charcoal transition-colors"
            >
              or WhatsApp us →
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
