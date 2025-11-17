import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'tops', label: 'Tops' },
  { key: 'shoes', label: 'Shoes' },
  { key: 'accessories', label: 'Accessories' },
]

function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products?limit=24`)
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

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return items.filter((it) => {
      const inCat = active === 'all' || (it.category || '').toLowerCase() === active
      const inQuery = !q || `${it.title} ${it.description} ${it.colorway}`.toLowerCase().includes(q)
      return inCat && inQuery
    })
  }, [items, active, query])

  return (
    <section id="featured" className="relative py-18 md:py-24 bg-gradient-to-b from-[#0b0320] via-[#120733] to-[#1a0a4d]">
      {/* floating colorful bubbles */}
      <motion.div
        className="pointer-events-none absolute -z-0 -left-10 top-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400 blur-3xl opacity-30"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -z-0 right-0 bottom-20 w-56 h-56 rounded-full bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 blur-3xl opacity-25"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Featured Drops</h2>
            <p className="text-white/70 mt-2">Fresh picks from the cartoon dimension</p>
          </div>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-sm placeholder:text-white/50 text-white"
              placeholder="Search colors, items, vibes"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
          <AnimatePresence initial={false}>
            {categories.map((c) => (
              <motion.button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`px-4 py-2 rounded-full border backdrop-blur text-sm transition ${
                  active === c.key
                    ? 'bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 text-[#160a34] border-white/0'
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                {c.label}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition relative"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 md:p-4 text-white">
                    <h3 className="font-bold leading-tight line-clamp-1">{item.title}</h3>
                    <p className="text-white/70 text-xs md:text-sm line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-extrabold">${item.price.toFixed(2)}</span>
                      {item.colorway && (
                        <span className="text-[10px] px-2 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200">{item.colorway}</span>
                      )}
                    </div>
                  </div>
                  <motion.div
                    className="absolute right-3 top-3 px-2 py-1 text-[10px] rounded-full text-[#160a34] bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    New
                  </motion.div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Featured
