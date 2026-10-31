import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft, Shield } from "lucide-react";

export const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — DataBuks</title>
        <meta
          name="description"
          content="Privacy policy of DataBuks Technology Services. How we handle project enquiries, client data and communications."
        />
        <link rel="canonical" href="https://databuks.org/privacy" />
      </Helmet>

      <main className="min-h-screen bg-[#F8FAFC]">
        <div className="bg-white border-b border-slate-200 py-4">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-5 md:px-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-5">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4" />
                <span>Legal & Data Policy</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 font-heading">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Last updated: July 2026 • DataBuks Technology Services (Nagpur, India)
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                1. Overview
              </h2>
              <p>
                DataBuks Technology Services ("DataBuks", "we", "us", or "our") respects your privacy. This policy outlines how we handle information received when you visit our website (databuks.org), submit an enquiry form, or contact us via WhatsApp, phone, or email.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                2. Information We Collect
              </h2>
              <p>
                We only collect information necessary to respond to your project enquiries and provide software development services:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-slate-600">
                <li><strong>Contact details:</strong> Name, email address, phone/WhatsApp number.</li>
                <li><strong>Project details:</strong> Business name, requirements description, budget preferences.</li>
                <li><strong>Technical logs:</strong> Basic non-identifying server logs (browser type, IP address, referring URL) for security monitoring.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                3. How We Use Your Information
              </h2>
              <p>
                The information you provide is used solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-slate-600">
                <li>Evaluate your project scope and prepare proposals.</li>
                <li>Respond to your direct enquiries and messages.</li>
                <li>Communicate during active development milestones.</li>
              </ul>
              <p className="font-semibold text-slate-800">
                We do not sell, rent, or trade your contact information with third-party marketers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                4. Third-Party Services
              </h2>
              <p>
                When you interact with our website or services, standard third-party infrastructure may be utilised:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-slate-600">
                <li><strong>Hosting & CDN:</strong> Vercel and Cloudflare for secure content delivery.</li>
                <li><strong>Messaging:</strong> WhatsApp / Meta Cloud API when you choose to message our business phone number.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                5. Client Data Confidentiality
              </h2>
              <p>
                During custom software development, any proprietary business workflows, databases, or client credentials shared with DataBuks are treated with strict confidentiality. We sign formal Non-Disclosure Agreements (NDAs) upon request before reviewing proprietary codebases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                6. Your Rights & Contact Information
              </h2>
              <p>
                You may request access to, correction of, or deletion of your contact records at any time by contacting us:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1 font-mono">
                <div>DataBuks Technology Services</div>
                <div>Nagpur, Maharashtra, India</div>
                <div>Email: {siteConfig.brand.email}</div>
                <div>WhatsApp / Phone: {siteConfig.brand.phoneDisplay}</div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Privacy;

