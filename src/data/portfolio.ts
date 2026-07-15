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
import lovewithtrade from "@/assets/portfolio/lovewithtrade.png";

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
    description: "Property listings for verified RERA-registered projects across Maharashtra. Search by location, project, or RERA number.",
    category: "Real Estate",
    url: "https://reraproperty.com",
    image: reraproperty,
  },
  {
    name: "Agha Noor",
    tagline: "Premium fashion e-commerce",
    description: "Multi-region storefront for a Pakistani luxury label. Country-aware checkout for PK, UK and rest of world.",
    category: "E-commerce",
    url: "https://aghanoorofficial.com",
    image: aghanoor,
  },
  {
    name: "AudioTonic Trader",
    tagline: "Distributor portal & management system",
    description: "Trader dashboard for AudioTonic Nagpur — total sales, bills, quotations, stock analytics, and inventory.",
    category: "B2B Portal",
    url: "https://app.audiotonicnagpur.com",
    image: audiotonic,
  },
  {
    name: "DnyanPath Publication",
    tagline: "Self-publishing for Indian authors",
    description: "Leading book publication house. 12K+ books, 10K+ authors, sold in 120+ countries.",
    category: "Publishing",
    url: "https://dnyanpath.com",
    image: dnyanpath,
  },
  {
    name: "Sioura Jewellery",
    tagline: "Demifine jewellery storefront",
    description: "Elegant WooCommerce experience for a handcrafted jewellery brand.",
    category: "E-commerce",
    url: "https://siourajewellery.com",
    image: sioura,
  },
  {
    name: "LottoBall",
    tagline: "Provably fair number draw games",
    description: "Wallet-driven gameplay portal with multiple game modes — Morning Ball 29, 36, and Golden — plus results, history, and admin.",
    category: "Web App",
    url: "https://lucky-picks-play.lovable.app",
    image: lottoball,
  },
  {
    name: "BizFlow ERP",
    tagline: "Distribution & operations ERP",
    description: "End-to-end ERP for sales, distributors, employees, schemes, file management, stock transfer, DMS and dynamic reports.",
    category: "ERP",
    url: "https://bizflow-forge-76-1p53.vercel.app",
    image: bizflow,
  },
  {
    name: "Spice Paradise",
    tagline: "Restaurant menu & ordering",
    description: "K-Star Dine experience — menu, reservations, billing, orders, profile and admin in one place.",
    category: "Restaurant",
    url: "https://tasty-table-hub-70.vercel.app",
    image: spiceparadise,
  },
  {
    name: "St. John Mission High School",
    tagline: "Digital school management portal",
    description: "Complete school management — students, teachers, classes, attendance, fees, exams, reports, SMS & email notifications.",
    category: "Education",
    url: "https://www.stjohnssaoner.in/",
    image: stjohns,
  },
  {
    name: "EduManage",
    tagline: "Tuition & coaching institute platform",
    description: "Role-based portal for Admin, Student and Parent — students, attendance, notes, materials, schedules and notifications.",
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
    name: "LoveWithTrade",
    tagline: "Crypto trading automation platform",
    description: "Automated crypto trading with bots, strategy marketplace, smart trailing and portfolio management across Binance, Bybit, Bitget, KuCoin, MEXC, BingX and BitMart.",
    category: "Fintech",
    url: "https://lovewithtrade.com/",
    image: lovewithtrade,
  },
];
