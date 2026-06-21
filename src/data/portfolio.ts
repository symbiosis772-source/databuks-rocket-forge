import reraproperty from "@/assets/portfolio/reraproperty.png";
import aghanoor from "@/assets/portfolio/aghanoor.png";
import audiotonic from "@/assets/portfolio/audiotonic.png";
import dnyanpath from "@/assets/portfolio/dnyanpath.png";
import sioura from "@/assets/portfolio/sioura.png";
import lottoball from "@/assets/portfolio/lottoball.png";
import bizflow from "@/assets/portfolio/bizflow.png";
import spiceparadise from "@/assets/portfolio/spiceparadise.png";
import stjohns from "@/assets/portfolio/stjohns.png";
import edumanage from "@/assets/portfolio/edumanage.png";
import centralbiotech from "@/assets/portfolio/centralbiotech.png";

export interface PortfolioItem {
  name: string;
  tagline: string;
  description: string;
  category: string;
  url: string;
  image: string;
}

export const portfolio: PortfolioItem[] = [
  {
    name: "ReraProperty.com",
    tagline: "RERA-verified real estate marketplace",
    description: "Property listing platform for verified RERA-registered residential, commercial and industrial projects across Maharashtra. Search by location, project name, or RERA number.",
    category: "Real Estate",
    url: "https://reraproperty.com",
    image: reraproperty,
  },
  {
    name: "Agha Noor",
    tagline: "Premium eastern fashion e-commerce",
    description: "Multi-region storefront for a Pakistani luxury fashion label, with country-aware checkout for Pakistan, UK and rest of world.",
    category: "E-commerce",
    url: "https://aghanoorofficial.com",
    image: aghanoor,
  },
  {
    name: "AudioTonic Trader",
    tagline: "Distributor portal for audio retailers",
    description: "Trader-facing dashboard for AudioTonic Nagpur — order management, account access and trader-only catalog.",
    category: "B2B Portal",
    url: "https://app.audiotonicnagpur.com",
    image: audiotonic,
  },
  {
    name: "DnyanPath Publication",
    tagline: "Self-publishing for Indian authors",
    description: "Leading book publication house in India. 12K+ books published, 10K+ authors, sell in 120+ countries.",
    category: "Publishing",
    url: "https://dnyanpath.com",
    image: dnyanpath,
  },
  {
    name: "Sioura Jewellery",
    tagline: "Demifine jewellery storefront",
    description: "Elegant WooCommerce experience for a handcrafted jewellery brand — aesthetic combos, bracelets, login, shipment tracking.",
    category: "E-commerce",
    url: "https://siourajewellery.com",
    image: sioura,
  },
  {
    name: "LottoBall",
    tagline: "Provably fair number draw games",
    description: "Magic-link auth, gameplay portal and transparent draw mechanics for a skill-and-chance number game.",
    category: "Web App",
    url: "https://lucky-picks-play.lovable.app",
    image: lottoball,
  },
  {
    name: "BizFlow",
    tagline: "Small business operations suite",
    description: "Sign-in based business workflow app — built for SMB owners to centralise day-to-day operations.",
    category: "SaaS",
    url: "https://bizflow-forge-76-1p53.vercel.app",
    image: bizflow,
  },
  {
    name: "Spice Paradise",
    tagline: "Restaurant menu & ordering",
    description: "K-Star Dine restaurant experience — menu, reservations, billing, orders, profile and admin in one place.",
    category: "Restaurant",
    url: "https://tasty-table-hub-70.vercel.app",
    image: spiceparadise,
  },
  {
    name: "St. John Mission School",
    tagline: "School management portal",
    description: "End-to-end student management, attendance, fees, exams, reports and SMS/email notifications for an English-medium school.",
    category: "Education",
    url: "https://saint-johns-portal.vercel.app",
    image: stjohns,
  },
  {
    name: "EduManage",
    tagline: "Tuition & coaching institute platform",
    description: "Role-based portal (Admin, Student, Parent) for institutes to manage students, attendance, notes, schedules and progress.",
    category: "Education",
    url: "https://class-connect-hub-ten.vercel.app",
    image: edumanage,
  },
  {
    name: "Central Biotech",
    tagline: "ERP for agrochemical manufacturing",
    description: "End-to-end ERP — inventory, formulation, COA and users — for agrochemical manufacturing operations.",
    category: "ERP",
    url: "https://central-bloom-forge.vercel.app",
    image: centralbiotech,
  },
  {
    name: "K-Star Technology",
    tagline: "Tech consulting & services",
    description: "Marketing site for a technology services brand showcasing capabilities and offerings.",
    category: "Agency",
    url: "https://k-star-technology.vercel.app",
    image: spiceparadise, // placeholder reused; site is currently offline
  },
];
