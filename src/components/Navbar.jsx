import { Menu, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-[#0b0320]/60 border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(255,0,200,0.35)]" : "bg-transparent"
    }`}>
      <div className="relative h-1 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 to-cyan-400"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ width: "200%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400 shadow-lg shadow-pink-300/40 grid place-items-center rotate-3"
          >
            <ShoppingBag className="text-fuchsia-900/80" size={22} />
          </motion.div>
          <div className="leading-tight">
            <p className="text-white/90 font-extrabold tracking-tight text-xl">Playground Street</p>
            <p className="text-white/60 text-xs -mt-0.5">Surreal drip, cozy chaos</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          {[
            { label: "New", href: "#new" },
            { label: "Tops", href: "#tops" },
            { label: "Shoes", href: "#shoes" },
            { label: "Accessories", href: "#accessories" },
          ].map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="relative hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {l.label}
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 rounded-full"
                initial={{ opacity: 0, scaleX: 0 }}
                whileHover={{ opacity: 1, scaleX: 1 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-2 rounded-xl border border-white/15">
            <Search size={16} className="text-white/70" />
            <input
              className="bg-transparent outline-none text-white placeholder:text-white/50 text-sm w-40"
              placeholder="Search weird wonders"
            />
          </div>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
