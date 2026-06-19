const Footer = () => {
  return (
    <footer className="bg-[#080707] text-white">
      <div className="w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="font-mono-label space-y-2">
            <div className="opacity-60">[STUDIO]</div>
            <div>DATABUKS LLC</div>
            <div>EST. 2024</div>
          </div>

          <div className="font-mono-label space-y-2">
            <div className="opacity-60">[CONNECT]</div>
            <a href="mailto:databuksllc@gmail.com" className="block hover:text-[#ebff00]">EMAIL ↗</a>
            <a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer" className="block hover:text-[#ebff00]">WHATSAPP ↗</a>
            <a href="#" className="block hover:text-[#ebff00]">LINKEDIN ↗</a>
            <a href="#" className="block hover:text-[#ebff00]">INSTAGRAM ↗</a>
          </div>

          <div className="font-mono-label md:text-right space-y-2">
            <div className="opacity-60">[INDEX]</div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#ebff00]"
            >
              BACK TO TOP ↑
            </button>
            <div className="opacity-60 pt-4">© {new Date().getFullYear()} — ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
