const Footer = () => {
  return (
    <footer className="bg-[#214a3a] text-white">

      <div className="max-w-[95%] mx-auto px-6 py-8">

        {/* TOP */}
        <div className="flex flex-col items-center text-center">

          {/* BIG HEADING */}
          <h1 className="text-7xl md:text-7xl font-bold tracking-tight">
            KeenKeeper
          </h1>

          {/* ONE-LINE DESCRIPTION */}
          <p className="mt-4 text-sm text-white/70 whitespace-nowrap">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* SOCIAL TITLE (BOLD) */}
          <div className="mt-5">

            <p className="text-m font-bold tracking-wide">
              Social Links
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">

              <button className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-semibold hover:scale-110 transition">
                <img src="/instagram.png" alt="instagram" />
              </button>

              <button className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-semibold hover:scale-110 transition">
                <img src="/facebook.png" alt="facebook" />
              </button>

              <button className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-semibold hover:scale-110 transition">
                <img src="/twitter.png" alt="twitter" />
              </button>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-white/10"></div>

        {/* BOTTOM */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4">

          <div>© 2026 KeenKeeper. All rights reserved.</div>

          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;