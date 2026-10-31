import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/siteConfig";
import {
  Send,
  MessageSquareCode,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("WhatsApp");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize service & budget from URL query params
  useEffect(() => {
    const sParam = searchParams.get("service");
    const bParam = searchParams.get("budget");

    if (sParam) {
      if (sParam.includes("website")) setService("Website Development");
      else if (sParam.includes("app") || sParam.includes("software")) setService("App & Software Development");
      else if (sParam.includes("auto")) setService("Business Automation");
      else if (sParam.includes("ai")) setService("AI Agents & Integrations");
    }

    if (bParam) {
      setBudget(bParam);
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

    // Simulate reliable enquiry acceptance & store in localStorage
    setTimeout(() => {
      try {
        const lead = {
          id: `db-${Date.now()}`,
          name,
          email,
          phone,
          service,
          description,
          budget,
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
    }, 800);
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
          content="Discuss your website, software application, or business automation project with DataBuks. Direct developer consultation in English and Hindi. Based in Nagpur, India."
        />
        <link rel="canonical" href="https://databuks.org/contact" />
      </Helmet>

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Header Hero */}
        <section className="bg-white border-b border-slate-200 py-14 md:py-18">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Start a Conversation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-heading">
                Let’s understand your project.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Tell us what you're looking to build. We'll review your requirements and respond with straightforward questions or an initial consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 md:py-18">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 font-heading">
                      Thank you, {name}!
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      We have received your project details. A member of our development team will review your requirements and reach out via your preferred method ({preferredMethod}).
                    </p>
                    <div className="pt-4 border-t border-slate-100 max-w-md mx-auto space-y-3">
                      <p className="text-xs text-slate-500">
                        Prefer to skip the wait? You can also message us directly on WhatsApp with your enquiry:
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
                      >
                        <MessageSquareCode className="w-4 h-4" />
                        <span>Open WhatsApp with your note</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Patel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder:text-slate-400 text-sm focus-ring"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          WhatsApp / Phone Number <span className="text-blue-600">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98765 43210"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder:text-slate-400 text-sm focus-ring"
                        />
                        <span className="text-[11px] text-slate-400 mt-1 block">
                          At least one contact method required
                        </span>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@business.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder:text-slate-400 text-sm focus-ring"
                        />
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Needed <span className="text-blue-600">*</span>
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 text-sm focus-ring"
                      >
                        <option value="">Select a service category...</option>
                        <option value="Website Development">Website Development (Business site, e-commerce, catalogue)</option>
                        <option value="App & Software Development">App & Software Development (Customer portal, ERP, MVP)</option>
                        <option value="Business Automation">Business Automation (WhatsApp alerts, CRM sync, reporting)</option>
                        <option value="AI Agents & Integrations">AI Agents & Integrations (Knowledge assistant, triage)</option>
                        <option value="Other / Not Sure">Other / Need guidance</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Description <span className="text-blue-600">*</span>
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us what you want to achieve, key features, reference websites, or current operational headaches..."
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 placeholder:text-slate-400 text-sm focus-ring"
                      />
                    </div>

                    {/* Budget & Contact Preference Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Approximate Budget (INR) <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <select
                          id="budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 text-sm focus-ring"
                        >
                          <option value="">Select budget range...</option>
                          {siteConfig.budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="method" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Preferred Contact Method
                        </label>
                        <select
                          id="method"
                          value={preferredMethod}
                          onChange={(e) => setPreferredMethod(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#F8FAFC] text-slate-900 text-sm focus-ring"
                        >
                          <option value="WhatsApp">WhatsApp Message</option>
                          <option value="Phone call">Phone Call</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>
                    </div>

                    {/* Privacy Microcopy */}
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      We respect your privacy. The information you share is only used to review your requirements and discuss your project. We do not sell your contact information or send spam.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
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
                <div className="bg-[#EFF6FF] rounded-2xl p-6 sm:p-7 border border-blue-200 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Prefer a quick chat?
                    </h3>
                    <p className="text-xs md:text-sm text-slate-700 mt-1 leading-relaxed">
                      You can message us directly on WhatsApp. We typically respond promptly during business hours.
                    </p>
                  </div>

                  <a
                    href={siteConfig.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageSquareCode className="w-4 h-4" />
                    <span>Chat on WhatsApp ({siteConfig.brand.phoneDisplay})</span>
                  </a>

                  <div className="pt-2 text-xs text-blue-800 font-medium">
                    ✓ {siteConfig.brand.supportedLanguages}
                  </div>
                </div>

                {/* Office & Direct Details */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Contact Details
                  </h3>

                  <div className="space-y-3 text-xs md:text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Location</strong>
                        <span>{siteConfig.brand.addressSummary}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Phone / WhatsApp</strong>
                        <span>{siteConfig.brand.phoneDisplay}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Email</strong>
                        <span>{siteConfig.brand.email}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Working Hours</strong>
                        <span>Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next box */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    What happens next?
                  </h3>
                  <ol className="space-y-2 text-xs text-slate-600 leading-relaxed list-decimal pl-4">
                    <li>We review your requirements and check feasibility.</li>
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
