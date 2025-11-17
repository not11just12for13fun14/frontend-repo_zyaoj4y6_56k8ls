import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products?limit=8`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="featured" className="relative py-16 md:py-20 bg-gradient-to-b from-[#0b0320] to-[#13073a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Featured Drops</h2>
            <p className="text-white/70 mt-2">Fresh picks from the cartoon dimension</p>
          </div>
          <a href="#" className="text-pink-300 hover:text-pink-200">View all</a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {items.map((item) => (
              <article key={item.id} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 md:p-4 text-white">
                  <h3 className="font-bold leading-tight line-clamp-1">{item.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-extrabold">${'{'}item.price.toFixed(2){'}'}</span>
                    {item.colorway && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200">{item.colorway}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Featured
