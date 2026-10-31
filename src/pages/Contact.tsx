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
    const sParam = searchParams.get("service");
    if (sParam) {
      if (sParam.includes("website")) setService("Website Development");
      else if (sParam.includes("app") || sParam.includes("software")) setService("Apps & Custom Software");
      else if (sParam.includes("auto")) setService("Business Automation");
      else if (sParam.includes("ai")) setService("AI Agents & Integrations");
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

      <main className="min-h-screen bg-[#F6F5EF]">
        {/* Header Hero */}
        <section className="bg-[#FFFFFF] border-b border-[#D8E0D8] py-14 md:py-18">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#123B32] block">
                Start a Conversation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#182822] font-heading">
                Let’s understand your project.
              </h1>
              <p className="text-base sm:text-lg text-[#53635C] leading-relaxed">
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
              <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#D8E0D8] shadow-card">
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#E5ECE5] text-[#123B32] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#182822] font-heading">
                      Thank you, {name}!
                    </h2>
                    <p className="text-sm md:text-base text-[#53635C] max-w-md mx-auto leading-relaxed">
                      We have received your project details. A member of our development team will review your requirements and reach out via your preferred method ({preferredMethod}).
                    </p>
                    <div className="pt-4 border-t border-[#D8E0D8] max-w-md mx-auto space-y-3">
                      <p className="text-xs text-[#53635C]">
                        Prefer to discuss immediately? You can also message us directly on WhatsApp with your note:
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4 text-[#D6F279]" />
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
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#182822] mb-1.5">
                        Your Name <span className="text-[#123B32]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ramesh Patel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0D8] bg-[#F6F5EF] text-[#182822] placeholder:text-[#53635C]/60 text-sm focus-ring"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#182822] mb-1.5">
                          WhatsApp / Phone Number <span className="text-[#123B32]">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 98765 43210"
                          className="w-full px-4 py-3 rounded-lg border border-[#D8E0D8] bg-[#F6F5EF] text-[#182822] placeholder:text-[#53635C]/60 text-sm focus-ring"
                        />
                        <span className="text-[11px] text-[#53635C] mt-1 block">
                          Provide at least phone or email
                        </span>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#182822] mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@business.com"
                          className="w-full px-4 py-3 rounded-lg border border-[#D8E0D8] bg-[#F6F5EF] text-[#182822] placeholder:text-[#53635C]/60 text-sm focus-ring"
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
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0D8] bg-[#F6F5EF] text-[#182822] text-sm focus-ring"
                      >
                        <option value="">Select a service category...</option>
                        <option value="Website Development">Website Development (Business site, e-commerce, catalogue)</option>
                        <option value="Apps & Custom Software">Apps & Custom Software (Customer portal, ERP, MVP)</option>
                        <option value="Business Automation">Business Automation (WhatsApp alerts, CRM sync, reporting)</option>
                        <option value="AI Agents & Integrations">AI Agents & Integrations (Knowledge assistant, triage)</option>
                        <option value="Other / Not Sure">Other / Need guidance</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-[#182822] mb-1.5">
                        Project Description <span className="text-[#123B32]">*</span>
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us what you want to achieve, key features, reference websites, or current operational bottlenecks..."
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0D8] bg-[#F6F5EF] text-[#182822] placeholder:text-[#53635C]/60 text-sm focus-ring"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label htmlFor="method" className="block text-xs font-bold uppercase tracking-wider text-[#182822] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="method"
                        value={preferredMethod}
                        onChange={(e) => setPreferredMethod(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-[#D8E0D8] bg-[#F6F5EF] text-[#182822] text-sm focus-ring"
                      >
                        <option value="WhatsApp">WhatsApp Message</option>
                        <option value="Phone call">Phone Call</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>

                    {/* Privacy Microcopy */}
                    <p className="text-[11px] text-[#53635C] leading-relaxed">
                      We respect your privacy. The information you share is only used to review your requirements and discuss your project. We do not sell your contact information or send spam.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] disabled:bg-[#123B32]/50 rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
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
                <div className="bg-[#E5ECE5] rounded-2xl p-6 sm:p-7 border border-[#D8E0D8] space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#123B32] text-[#D6F279] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#182822] font-heading">
                      Prefer a quick chat?
                    </h3>
                    <p className="text-xs md:text-sm text-[#53635C] mt-1 leading-relaxed">
                      You can message us directly on WhatsApp. We typically respond promptly during business hours.
                    </p>
                  </div>

                  <a
                    href={siteConfig.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D6F279]" />
                    <span>Chat on WhatsApp ({siteConfig.brand.phoneDisplay})</span>
                  </a>

                  <div className="pt-2 text-xs text-[#123B32] font-semibold">
                    ✓ {siteConfig.brand.supportedLanguages}
                  </div>
                </div>

                {/* Office & Direct Details */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#D8E0D8] space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#53635C]">
                    Direct Contact Details
                  </h3>

                  <div className="space-y-3 text-xs md:text-sm text-[#182822]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#123B32] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#182822] font-semibold">Location</strong>
                        <span className="text-[#53635C]">{siteConfig.brand.addressSummary}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#123B32] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#182822] font-semibold">Phone / WhatsApp</strong>
                        <span className="text-[#53635C]">{siteConfig.brand.phoneDisplay}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#123B32] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#182822] font-semibold">Email</strong>
                        <span className="text-[#53635C]">{siteConfig.brand.email}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#123B32] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[#182822] font-semibold">Working Hours</strong>
                        <span className="text-[#53635C]">Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next box */}
                <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#D8E0D8] space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B32]">
                    What happens next?
                  </h3>
                  <ol className="space-y-2 text-xs text-[#53635C] leading-relaxed list-decimal pl-4">
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
