function Footer() {
  return (
    <footer className="bg-[#13073a] text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-3">About</h4>
          <p className="text-sm">A surreal streetwear microverse. We design playful, comfy gear that feels like dreams you can wear.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Help</h4>
          <ul className="space-y-2 text-sm">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Follow</h4>
          <ul className="space-y-2 text-sm">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3">Newsletter</h4>
          <div className="flex gap-2">
            <input className="flex-1 bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-sm placeholder:text-white/50" placeholder="email" />
            <button className="px-4 py-2 bg-pink-500 rounded-xl text-white font-semibold">Join</button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Playground Street</div>
    </footer>
  )
}

export default Footer
