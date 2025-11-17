import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0320]">
      <Navbar />
      <main className="pt-16">{/* offset fixed nav */}
        <Hero />
        <Featured />
      </main>
      <Footer />
    </div>
  )
}

export default App
