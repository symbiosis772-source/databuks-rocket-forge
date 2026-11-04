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

      <main className="min-h-screen bg-[#F7F4EE]">
        {/* Header Hero */}
        <section className="bg-[#FFFFFF] border-b border-[#DDDCD4] py-14 md:py-18">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A43F2B] block">
                Start a Conversation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#242621]">
                Let’s understand your project.
              </h1>
              <p className="text-base sm:text-lg text-[#62665E] leading-relaxed">
                Tell us what you're looking to build. We'll review your requirements and respond with straightforward questions or an initial consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 md:py-18">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#DDDCD4] shadow-card">
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#F1DDD1] text-[#A43F2B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#242621]">
                      Thank you, {name}!
                    </h2>
                    <p className="text-sm md:text-base text-[#62665E] max-w-md mx-auto leading-relaxed">
                      We have received your project details. A member of our development team will review your requirements and reach out via your preferred method ({preferredMethod}).
                    </p>
                    <div className="pt-4 border-t border-[#DDDCD4] max-w-md mx-auto space-y-3">
                      <p className="text-xs text-[#62665E]">
                        Prefer to discuss immediately? You can also message us directly on WhatsApp with your note:
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-lg shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4 text-[#F1DDD1]" />
                        <span>Open WhatsApp with your note</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#242621] mb-1.5">
                        Your Name <span className="text-[#A43F2B]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Patel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#DDDCD4] bg-[#F7F4EE] text-[#242621] placeholder:text-[#62665E]/60 text-sm focus-ring"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#242621] mb-1.5">
                          WhatsApp / Phone Number <span className="text-[#A43F2B]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98765 43210"
                          className="w-full px-4 py-3 rounded-lg border border-[#DDDCD4] bg-[#F7F4EE] text-[#242621] placeholder:text-[#62665E]/60 text-sm focus-ring"
                        />
                        <span className="text-[11px] text-[#62665E] mt-1 block">
                          Provide at least phone or email
                        </span>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#242621] mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@business.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#DDDCD4] bg-[#F7F4EE] text-[#242621] placeholder:text-[#62665E]/60 text-sm focus-ring"
                        />
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#182822] mb-1.5">
                        Service Needed <span className="text-[#123B32]">*</span>
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#DDDCD4] bg-[#F7F4EE] text-[#242621] text-sm focus-ring"
                      >
                        <option value="">Select a service category...</option>
                        <option value="Website Development">Website Development (Business site, e-commerce, catalogue)</option>
                        <option value="Apps & Custom Software">Apps & Custom Software (Customer portal, ERP, MVP)</option>
                        <option value="Business Automation">Business Automation (WhatsApp alerts, CRM sync, reporting)</option>
                        <option value="AI Agents & Integrations">AI Agents & Integrations (Knowledge assistant, triage)</option>
                        <option value="Sales Agent (In-House Product)">Sales Agent (In-House Product — Concept / Early Access)</option>
                        <option value="Customizable Voice Agent (In-House Product)">Customizable Voice Agent (In-House Product — Early Access)</option>
                        <option value="Other / Not Sure">Other / Need guidance</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-[#242621] mb-1.5">
                        Project Description <span className="text-[#A43F2B]">*</span>
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us what you want to achieve, key features, reference websites, or current operational bottlenecks..."
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#DDDCD4] bg-[#F7F4EE] text-[#242621] placeholder:text-[#62665E]/60 text-sm focus-ring"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label htmlFor="method" className="block text-xs font-bold uppercase tracking-wider text-[#242621] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="method"
                        value={preferredMethod}
                        onChange={(e) => setPreferredMethod(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-[#DDDCD4] bg-[#F7F4EE] text-[#242621] text-sm focus-ring"
                      >
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Phone call">Phone Call</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>

                    {/* Privacy Microcopy */}
                    <p className="text-[11px] text-[#62665E] leading-relaxed">
                      We respect your privacy. The information you share is only used to review your requirements and discuss your project. We do not sell your contact information or send spam.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] disabled:bg-[#A43F2B]/50 rounded-xl shadow-sm transition-all focus-ring active:scale-[0.99]"
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
                <div className="bg-[#E5E7DA] rounded-2xl p-6 sm:p-7 border border-[#DDDCD4] space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#242621] text-[#F1DDD1] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#242621]">
                      Prefer a quick chat?
                    </h3>
                    <p className="text-xs md:text-sm text-[#62665E] mt-1 leading-relaxed">
                      You can message us directly on WhatsApp. We typically respond promptly during business hours.
                    </p>
                  </div>

                  <a
                    href={siteConfig.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-xl shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#F1DDD1]" />
                    <span>Chat on WhatsApp ({siteConfig.brand.phoneDisplay})</span>
                  </a>

                  <div className="pt-2 text-xs text-[#242621] font-semibold">
                    ✓ {siteConfig.brand.supportedLanguages}
                  </div>
                </div>

                {/* Office & Direct Details */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#DDDCD4] space-y-4 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#62665E]">
                    Direct Contact Details
                  </h3>

                  <div className="space-y-3 text-xs md:text-sm text-[#242621]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#242621] font-semibold">Location</strong>
                        <span className="text-[#62665E]">{siteConfig.brand.addressSummary}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#242621] font-semibold">Phone / WhatsApp</strong>
                        <span className="text-[#62665E]">{siteConfig.brand.phoneDisplay}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#242621] font-semibold">Email</strong>
                        <span className="text-[#62665E]">{siteConfig.brand.email}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#A43F2B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#242621] font-semibold">Working Hours</strong>
                        <span className="text-[#62665E]">Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next box */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#DDDCD4] space-y-2.5 shadow-card">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#A43F2B]">
                    What happens next?
                  </h3>
                  <ol className="space-y-2 text-xs text-[#62665E] leading-relaxed list-decimal pl-4">
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
