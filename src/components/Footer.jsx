const Footer = () => {
  return (
    <footer className="bg-[#214a3a] text-white overflow-hidden">

      <div className="w-full px-6 sm:px-10 py-8">

        {/* TOP */}
        <div className="flex flex-col items-center text-center">

          {/* HEADING */}
          <h1 className="text-7xl md:text-7xl font-bold tracking-tight">
            KeenKeeper
          </h1>

          {/* DESCRIPTION — wraps on small screens, no whitespace-nowrap */}
          <p className="mt-4 text-sm text-white/70 max-w-sm px-2 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* SOCIAL LINKS */}
          <div className="mt-5">
            <p className="text-sm font-bold tracking-wide">Social Links</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <img src="/instagram.png" alt="instagram" />
              </button>
              <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <img src="/facebook.png" alt="facebook" />
              </button>
              <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
                <img src="/twitter.png" alt="twitter" />
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-3 text-center">
          <div>© 2026 KeenKeeper. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
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
