import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918788606608"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-mercury-blue rounded-full flex items-center justify-center hover:bg-mercury-blue/90 transition-all duration-300 hover:scale-110 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-pure-white" />
    </a>
  );
};

export default WhatsAppButton;
