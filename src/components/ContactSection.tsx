import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-deep-space">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
                Get In Touch
              </span>
              <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
                Let's Build Something{" "}
                <span className="text-silver">Great Together</span>
              </h2>
              <p className="text-body text-silver mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message
                and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/918788606608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-lead/20 hover:border-lead/40 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-mercury-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-body text-starlight">WhatsApp</p>
                    <p className="text-body-sm text-silver">+91 87886 06608</p>
                  </div>
                </a>

                <a
                  href="mailto:databuksllc@gmail.com"
                  className="flex items-center gap-4 p-4 border border-lead/20 hover:border-lead/40 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-mercury-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-body text-starlight">Email</p>
                    <p className="text-body-sm text-silver">databuksllc@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-lead/20">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-mercury-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-body text-starlight">Location</p>
                    <p className="text-body-sm text-silver">Mahal, Nagpur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-lead/20">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-body-sm text-starlight mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rahul Sharma"
                    required
                    className="h-12 bg-transparent border-lead/40 text-starlight placeholder:text-lead focus:border-mercury-blue"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-sm text-starlight mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    required
                    className="h-12 bg-transparent border-lead/40 text-starlight placeholder:text-lead focus:border-mercury-blue"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-body-sm text-starlight mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9999999999"
                    className="h-12 bg-transparent border-lead/40 text-starlight placeholder:text-lead focus:border-mercury-blue"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm text-starlight mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="resize-none bg-transparent border-lead/40 text-starlight placeholder:text-lead focus:border-mercury-blue"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
