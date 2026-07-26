import { useState } from "react"
import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/live", label: "Live" },
  { to: "/results", label: "Results" },
  { to: "/standings", label: "Standings" },
  { to: "/news", label: "News" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: "#080b14", borderBottom: "1px solid #1e2537" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* GoalGrid Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-[#080b14] font-bold text-sm"
            style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif", fontSize: "1.1rem", fontWeight: 800 }}
          >
            GG
          </div>
          <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#e8edf8", letterSpacing: "0.04em" }}>
            GOAL<span style={{ color: "#c3f53c" }}>GRID</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded text-sm font-medium transition-colors duration-150 ` +
                (isActive
                  ? "text-[#c3f53c] bg-[#c3f53c]/10"
                  : "text-[#8b9bbf] hover:text-[#e8edf8]")
              }
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.06em" }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ backgroundColor: "#ff2d5520", border: "1px solid #ff2d5540" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d55] animate-pulse" />
            <span className="text-[#ff2d55] text-xs font-medium" style={{ fontFamily: "JetBrains Mono, monospace" }}>3 LIVE</span>
          </div>
          <button className="px-4 py-1.5 rounded text-xs font-semibold text-[#080b14] transition-opacity hover:opacity-80" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, letterSpacing: "0.06em", fontSize: "0.9rem" }}>
            SIGN IN
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#8b9bbf] p-2" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open
              ? <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              : <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1e2537] px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded text-sm font-medium ` +
                (isActive ? "text-[#c3f53c] bg-[#c3f53c]/10" : "text-[#8b9bbf]")
              }
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, letterSpacing: "0.04em" }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}