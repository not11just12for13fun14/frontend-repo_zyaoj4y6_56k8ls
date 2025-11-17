import { Menu, ShoppingBag, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400 shadow-lg shadow-pink-300/40 grid place-items-center rotate-3">
            <ShoppingBag className="text-fuchsia-900/80" size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-white/90 font-extrabold tracking-tight text-xl">Playground Street</p>
            <p className="text-white/60 text-xs -mt-0.5">Surreal drip, cozy chaos</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white/80">
          <a className="hover:text-white transition-colors" href="#new">New</a>
          <a className="hover:text-white transition-colors" href="#tops">Tops</a>
          <a className="hover:text-white transition-colors" href="#shoes">Shoes</a>
          <a className="hover:text-white transition-colors" href="#accessories">Accessories</a>
        </div>

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
