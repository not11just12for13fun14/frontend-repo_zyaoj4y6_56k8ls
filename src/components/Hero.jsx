import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative w-full h-[82vh] md:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Colorful gradient veils for readability and vibe */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0320] via-transparent to-transparent opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,0,200,0.18),transparent_60%)]" />
      <div className="absolute -right-20 -top-20 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full blur-3xl opacity-50 bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
        <div className="text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Streetwear from a Parallel Cartoon
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
            className="mt-3 sm:mt-4 text-white/90 max-w-xl text-sm sm:text-base"
          >
            Step into a trippy, childlike-yet-surreal playground. Floaty hoodies, orbit shoes, jelly tees — crafted chaos that actually looks good.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#featured"
              className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg shadow-pink-500/30 transition-colors"
            >
              Shop Featured
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#new"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur"
            >
              Explore the World
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
