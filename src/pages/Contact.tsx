import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import {
  Send,
  MessageSquare,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form states (No budget question)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("WhatsApp");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize service from URL query params if present
  useEffect(() => {
    const param = searchParams.get("service") || searchParams.get("product");
    if (param) {
      const lower = param.toLowerCase();
      if (lower.includes("sales")) setService("Sales Agent (In-House Product)");
      else if (lower.includes("voice")) setService("Customizable Voice Agent (In-House Product)");
      else if (lower.includes("website")) setService("Website Development");
      else if (lower.includes("app") || lower.includes("software")) setService("Apps & Custom Software");
      else if (lower.includes("auto")) setService("Business Automation");
      else if (lower.includes("ai")) setService("AI Agents & Integrations");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!email.trim() && !phone.trim()) {
      setErrorMessage("Please provide either your Email address or WhatsApp number so we can reach you.");
      return;
    }

    if (!service) {
      setErrorMessage("Please select the service category you are interested in.");
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      setErrorMessage("Please share a brief description of what you are looking to build (at least 10 characters).");
      return;
    }

    setLoading(true);

    // Reliable enquiry acceptance without budget field
    setTimeout(() => {
      try {
        const lead = {
          id: `db-${Date.now()}`,
          name: name.trim(),
          email: email.trim() || undefined,
          phone: phone.trim() || undefined,
          service,
          description: description.trim(),
          preferredMethod,
          date: new Date().toISOString(),
        };

        const existing = JSON.parse(localStorage.getItem("databuks_enquiries") || "[]");
        existing.push(lead);
        localStorage.setItem("databuks_enquiries", JSON.stringify(existing));

        setLoading(false);
        setSubmitted(true);
      } catch (err) {
        setLoading(false);
        setErrorMessage("Something went wrong saving your enquiry. Please use our direct WhatsApp option below.");
      }
    }, 700);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi DataBuks, I’d like to discuss a project.\nName: ${name || "Client"}\nService: ${service || "General enquiry"}\nRequirement: ${description || "Let's connect"}`
    );
    window.open(`https://wa.me/918788606608?text=${text}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Let’s Understand Your Project — Contact DataBuks Nagpur</title>
        <meta
          name="description"
          content="Discuss your website, custom software application, or business automation project with DataBuks. Direct developer consultation in English and Hindi. Based in Nagpur, India."
        />
        <link rel="canonical" href="https://databuks.org/contact" />
      </Helmet>

      <main className="min-h-screen bg-[#080D16] text-[#F4F7FC]">
        {/* Header Hero */}
        <section className="bg-[#101827] border-b border-[#2A3850] py-14 md:py-18">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#67E8F9] block">
                Start a Conversation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FC]">
                Let’s understand your project.
              </h1>
              <p className="text-base sm:text-lg text-[#B5C1D3] leading-relaxed">
                Tell us what you're looking to build. We'll review your requirements and respond with straightforward questions or an initial consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 md:py-18 bg-[#080D16]">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 bg-[#151F30] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#2A3850] shadow-card">
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#2563EB]/20 text-[#67E8F9] border border-[#2563EB]/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#F4F7FC]">
                      Thank you, {name}!
                    </h2>
                    <p className="text-sm md:text-base text-[#B5C1D3] max-w-md mx-auto leading-relaxed">
                      We have received your project details. A member of our development team will review your requirements and reach out via your preferred method ({preferredMethod}).
                    </p>
                    <div className="pt-4 border-t border-[#2A3850] max-w-md mx-auto space-y-3">
                      <p className="text-xs text-[#B5C1D3]">
                        Prefer to discuss immediately? You can also message us directly on WhatsApp with your note:
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg shadow-sm transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 text-[#67E8F9]" />
                        <span>Open WhatsApp with your note</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FC] mb-1.5">
                        Your Name <span className="text-[#67E8F9]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Patel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#2A3850] bg-[#101827] text-[#F4F7FC] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FC] mb-1.5">
                          WhatsApp / Phone Number <span className="text-[#67E8F9]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98765 43210"
                          className="w-full px-4 py-3 rounded-lg border border-[#2A3850] bg-[#101827] text-[#F4F7FC] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                        />
                        <span className="text-[11px] text-[#B5C1D3] mt-1 block">
                          Provide at least phone or email
                        </span>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FC] mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@business.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#2A3850] bg-[#101827] text-[#F4F7FC] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                        />
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FC] mb-1.5">
                        Service Needed <span className="text-[#67E8F9]">*</span>
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#2A3850] bg-[#101827] text-[#F4F7FC] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      >
                        <option value="" className="bg-[#101827] text-[#F4F7FC]">Select a service category...</option>
                        <option value="Website Development" className="bg-[#101827] text-[#F4F7FC]">Website Development (Business site, e-commerce, catalogue)</option>
                        <option value="Apps & Custom Software" className="bg-[#101827] text-[#F4F7FC]">Apps & Custom Software (Customer portal, ERP, MVP)</option>
                        <option value="Business Automation" className="bg-[#101827] text-[#F4F7FC]">Business Automation (WhatsApp alerts, CRM sync, reporting)</option>
                        <option value="AI Agents & Integrations" className="bg-[#101827] text-[#F4F7FC]">AI Agents & Integrations (Knowledge assistant, triage)</option>
                        <option value="Sales Agent (In-House Product)" className="bg-[#101827] text-[#F4F7FC]">Sales Agent (In-House Product — Concept / Early Access)</option>
                        <option value="Customizable Voice Agent (In-House Product)" className="bg-[#101827] text-[#F4F7FC]">Customizable Voice Agent (In-House Product — Early Access)</option>
                        <option value="Other / Not Sure" className="bg-[#101827] text-[#F4F7FC]">Other / Need guidance</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FC] mb-1.5">
                        Project Description <span className="text-[#67E8F9]">*</span>
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us what you want to achieve, key features, reference websites, or current operational bottlenecks..."
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#2A3850] bg-[#101827] text-[#F4F7FC] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label htmlFor="method" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FC] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="method"
                        value={preferredMethod}
                        onChange={(e) => setPreferredMethod(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-[#2A3850] bg-[#101827] text-[#F4F7FC] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                      >
                        <option value="WhatsApp" className="bg-[#101827] text-[#F4F7FC]">WhatsApp Message</option>
                        <option value="Phone call" className="bg-[#101827] text-[#F4F7FC]">Phone Call</option>
                        <option value="Email" className="bg-[#101827] text-[#F4F7FC]">Email</option>
                      </select>
                    </div>

                    {/* Privacy Microcopy */}
                    <p className="text-[11px] text-[#B5C1D3] leading-relaxed">
                      We respect your privacy. The information you share is only used to review your requirements and discuss your project. We do not sell your contact information or send spam.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-[#2563EB]/50 rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
                    >
                      {loading ? (
                        <span>Submitting enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Direct Contact & WhatsApp Alternatives */}
              <div className="lg:col-span-5 space-y-6">
                {/* Fast WhatsApp Box */}
                <div className="bg-[#101827] rounded-2xl p-6 sm:p-7 border border-[#2A3850] space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#151F30] border border-[#2A3850] text-[#67E8F9] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F4F7FC]">
                      Prefer a quick chat?
                    </h3>
                    <p className="text-xs md:text-sm text-[#B5C1D3] mt-1 leading-relaxed">
                      You can message us directly on WhatsApp. We typically respond promptly during business hours.
                    </p>
                  </div>

                  <a
                    href={siteConfig.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#67E8F9]" />
                    <span>Chat on WhatsApp ({siteConfig.brand.phoneDisplay})</span>
                  </a>

                  <div className="pt-2 text-xs text-[#B5C1D3] font-semibold">
                    ✓ {siteConfig.brand.supportedLanguages}
                  </div>
                </div>

                {/* Office & Direct Details */}
                <div className="bg-[#151F30] rounded-2xl p-6 sm:p-7 border border-[#2A3850] space-y-4 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#67E8F9]">
                    Direct Contact Details
                  </h3>

                  <div className="space-y-3 text-xs md:text-sm text-[#F4F7FC]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#F4F7FC] font-semibold">Location</strong>
                        <span className="text-[#B5C1D3]">{siteConfig.brand.addressSummary}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#F4F7FC] font-semibold">Phone / WhatsApp</strong>
                        <span className="text-[#B5C1D3]">{siteConfig.brand.phoneDisplay}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#F4F7FC] font-semibold">Email</strong>
                        <span className="text-[#B5C1D3]">{siteConfig.brand.email}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#F4F7FC] font-semibold">Working Hours</strong>
                        <span className="text-[#B5C1D3]">Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next box */}
                <div className="bg-[#151F30] rounded-2xl p-6 border border-[#2A3850] space-y-2.5 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#67E8F9]">
                    What happens next?
                  </h3>
                  <ol className="space-y-2 text-xs text-[#B5C1D3] leading-relaxed list-decimal pl-4">
                    <li>We review your requirements and check technical feasibility.</li>
                    <li>We reach out with clarifying questions or schedule a brief call.</li>
                    <li>We prepare a written scope breakdown and milestone estimate.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;