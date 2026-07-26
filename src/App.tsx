import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Results from "./pages/Results"
import Standings from "./pages/Standings"
import Live from "./pages/Live"
import News from "./pages/News"
import Article from "./pages/Article"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", backgroundColor: "#080b14" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/results" element={<Results />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<Article />} />
        </Routes>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t" style={{ backgroundColor: "#080b14", borderColor: "#1e2537" }}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-[#080b14]" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800 }}>
                FC
              </div>
              <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8edf8", letterSpacing: "0.04em" }}>
                PITCH<span style={{ color: "#c3f53c" }}>WIRE</span>
              </span>
            </div>
            <div className="flex gap-6 text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
              <span>© 2025 PitchWire</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Contact</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
