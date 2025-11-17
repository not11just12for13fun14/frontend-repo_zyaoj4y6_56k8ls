import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0320] via-transparent to-transparent opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
        <div className="text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Streetwear from a Parallel Cartoon
          </h1>
          <p className="mt-3 sm:mt-4 text-white/90 max-w-xl text-sm sm:text-base">
            Step into a trippy, childlike-yet-surreal playground. Floaty hoodies, orbit shoes, jelly tees — crafted chaos that actually looks good.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#featured" className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg shadow-pink-500/30 transition-colors">Shop Featured</a>
            <a href="#new" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur">
              Explore the World
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
