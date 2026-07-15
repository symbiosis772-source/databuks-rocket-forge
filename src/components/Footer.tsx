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
    <footer className="glass-strong border-t border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DataBuks" className="h-20 md:h-24 w-auto object-contain -my-2" />
        </Link>
        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <Link key={l.label} to={l.href} className="text-[15px] text-iron hover:text-graphite transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-[14px] text-slate-c">
          <span className="pulse-dot">Online — replies within hours</span>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 pb-8 text-[13px] text-ash">
        © {new Date().getFullYear()} DataBuks · Made in India
      </div>
    </footer>
  );
};

export default Footer;
