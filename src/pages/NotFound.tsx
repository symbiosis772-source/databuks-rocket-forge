import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Compass, Phone } from "lucide-react";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — DataBuks</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-[70vh] flex items-center justify-center bg-[#FAFAFA] dark:bg-[#090909] py-16 px-5 text-[#111111] dark:text-[#F5F5F5] transition-colors duration-200">
        <div className="max-w-md w-full bg-[#FFFFFF] dark:bg-[#171717] rounded-2xl p-8 border border-[#DADADA] dark:border-[#303030] shadow-card text-center space-y-4">
          <span className="text-4xl font-extrabold font-mono text-[#111111] dark:text-[#F5F5F5] block">
            404
          </span>
          <h1 className="text-2xl font-bold text-[#111111] dark:text-[#F5F5F5] font-sans tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
            The page you requested at <code className="px-1.5 py-0.5 bg-[#F1F1F1] dark:bg-[#111111] rounded text-xs font-mono text-[#111111] dark:text-[#F5F5F5] border border-[#DADADA] dark:border-[#303030]">{location.pathname}</code> does not exist or has been relocated.
          </p>

          <div className="pt-4 border-t border-[#DADADA] dark:border-[#303030] space-y-2">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-lg shadow-subtle transition-colors group"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </Link>
            <div className="flex gap-2">
              <Link
                to="/services"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] bg-[#F1F1F1] hover:bg-[#E5E5E5] dark:bg-[#111111] dark:hover:bg-[#222222] border border-[#DADADA] dark:border-[#303030] rounded-lg transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Services</span>
              </Link>
              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] bg-[#F1F1F1] hover:bg-[#E5E5E5] dark:bg-[#111111] dark:hover:bg-[#222222] border border-[#DADADA] dark:border-[#303030] rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
