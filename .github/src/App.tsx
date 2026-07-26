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
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/results" element={<Results />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<Article />} />
        </Routes>

        {/* GoalGrid Custom Footer */}
        <footer className="mt-16 py-8 border-t" style={{ backgroundColor: "#080b14", borderColor: "#1e2537" }}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Logo & Website Name */}
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded flex items-center justify-center text-xs font-black text-[#080b14]" 
                style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}
              >
                GG
              </div>
              <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#e8edf8", letterSpacing: "0.05em" }}>
                GOAL<span style={{ color: "#c3f53c" }}>GRID</span>
              </span>
            </div>

            {/* Footer Links & Copyright */}
            <div className="flex gap-6 text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
              <span>© {new Date().getFullYear()} GoalGrid</span>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}