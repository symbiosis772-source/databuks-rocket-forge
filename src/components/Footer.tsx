import { Link } from "react-router-dom";
import logo from "@/assets/brand/databuks-logo.png";

const Footer = () => {
  const links = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <footer className="bg-snow border-t border-fog">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="DataBuks" className="h-7 w-auto object-contain" />
          <span className="text-[15px] font-semibold tracking-[-0.015em] text-ink">DataBuks</span>
        </Link>
        <nav className="flex flex-wrap gap-1">
          {links.map((l) => (
            <Link key={l.label} to={l.href} className="px-3 py-1.5 text-[14px] text-ink rounded-[10px] hover:bg-fog">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="text-[13px] text-ash">
          © {new Date().getFullYear()} DataBuks · Made in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
