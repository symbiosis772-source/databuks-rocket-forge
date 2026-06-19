const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="hairline" />
      <div className="container mx-auto px-6 py-[71px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-caption">
            SUITE 507<br />
            46 KIPPAX STREET<br />
            SURRY HILLS NSW 2010
          </div>

          <div className="text-caption space-y-[10px]">
            <a href="mailto:databuksllc@gmail.com" className="block hover:underline">EMAIL</a>
            <a href="#" className="block hover:underline">INSTAGRAM</a>
            <a href="#" className="block hover:underline">LINKEDIN</a>
            <a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer" className="block hover:underline">WHATSAPP</a>
          </div>

          <div className="text-caption md:text-right">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:underline"
            >
              BACK TO TOP ↑
            </button>
            <div className="mt-[35px] text-black/60">
              © {new Date().getFullYear()} DATABUKS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
