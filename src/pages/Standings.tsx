import { useState } from "react"

type Team = {
  pos: number
  name: string
  flag: string
  played: number
  won: number
  drawn: number
  lost: number
  gf: number
  ga: number
  pts: number
  form: ("W" | "D" | "L")[]
  badge: string
}

const leagues: Record<string, Team[]> = {
  "Premier League": [
    { pos: 1, name: "Arsenal", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 22, drawn: 6, lost: 4, gf: 74, ga: 31, pts: 72, form: ["W","W","D","W","W"], badge: "🔴" },
    { pos: 2, name: "Manchester City", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 21, drawn: 7, lost: 4, gf: 70, ga: 36, pts: 70, form: ["W","L","W","W","D"], badge: "🔵" },
    { pos: 3, name: "Liverpool", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 20, drawn: 6, lost: 6, gf: 68, ga: 38, pts: 66, form: ["W","W","W","L","W"], badge: "🔴" },
    { pos: 4, name: "Chelsea", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 18, drawn: 5, lost: 9, gf: 62, ga: 44, pts: 59, form: ["D","W","W","L","D"], badge: "🔵" },
    { pos: 5, name: "Tottenham", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 16, drawn: 6, lost: 10, gf: 55, ga: 48, pts: 54, form: ["W","D","L","W","L"], badge: "⚪" },
    { pos: 6, name: "Newcastle", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 15, drawn: 5, lost: 12, gf: 52, ga: 50, pts: 50, form: ["L","W","D","W","W"], badge: "⚫" },
    { pos: 7, name: "Man United", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 13, drawn: 7, lost: 12, gf: 44, ga: 48, pts: 46, form: ["D","L","W","D","L"], badge: "🔴" },
    { pos: 8, name: "Aston Villa", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 12, drawn: 8, lost: 12, gf: 48, ga: 50, pts: 44, form: ["W","W","L","D","L"], badge: "🟣" },
    { pos: 9, name: "West Ham", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 11, drawn: 7, lost: 14, gf: 42, ga: 55, pts: 40, form: ["L","D","L","W","D"], badge: "🔴" },
    { pos: 10, name: "Brighton", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 32, won: 10, drawn: 9, lost: 13, gf: 48, ga: 54, pts: 39, form: ["D","W","L","D","W"], badge: "🔵" },
  ],
  "La Liga": [
    { pos: 1, name: "Real Madrid", flag: "🇪🇸", played: 32, won: 23, drawn: 4, lost: 5, gf: 78, ga: 32, pts: 73, form: ["W","W","W","D","W"], badge: "⚪" },
    { pos: 2, name: "Barcelona", flag: "🇪🇸", played: 32, won: 22, drawn: 5, lost: 5, gf: 71, ga: 35, pts: 71, form: ["W","W","L","W","W"], badge: "🔵" },
    { pos: 3, name: "Atletico Madrid", flag: "🇪🇸", played: 32, won: 19, drawn: 6, lost: 7, gf: 60, ga: 40, pts: 63, form: ["W","D","W","L","W"], badge: "🔴" },
    { pos: 4, name: "Athletic Bilbao", flag: "🇪🇸", played: 32, won: 16, drawn: 5, lost: 11, gf: 52, ga: 46, pts: 53, form: ["W","W","D","L","W"], badge: "🔴" },
    { pos: 5, name: "Real Sociedad", flag: "🇪🇸", played: 32, won: 14, drawn: 8, lost: 10, gf: 48, ga: 44, pts: 50, form: ["D","L","W","W","D"], badge: "⚪" },
  ],
  "Bundesliga": [
    { pos: 1, name: "Bayer Leverkusen", flag: "🇩🇪", played: 32, won: 26, drawn: 6, lost: 0, gf: 82, ga: 22, pts: 84, form: ["W","W","D","W","W"], badge: "🔴" },
    { pos: 2, name: "Bayern Munich", flag: "🇩🇪", played: 32, won: 23, drawn: 3, lost: 6, gf: 76, ga: 35, pts: 72, form: ["W","L","W","W","W"], badge: "🔴" },
    { pos: 3, name: "Borussia Dortmund", flag: "🇩🇪", played: 32, won: 18, drawn: 4, lost: 10, gf: 61, ga: 48, pts: 58, form: ["W","W","D","L","W"], badge: "🟡" },
    { pos: 4, name: "RB Leipzig", flag: "🇩🇪", played: 32, won: 16, drawn: 5, lost: 11, gf: 57, ga: 50, pts: 53, form: ["L","W","W","D","W"], badge: "🔴" },
    { pos: 5, name: "Eintracht Frankfurt", flag: "🇩🇪", played: 32, won: 14, drawn: 6, lost: 12, gf: 52, ga: 52, pts: 48, form: ["D","W","L","W","L"], badge: "⚫" },
  ],
}

const formColor = {
  W: { bg: "#c3f53c22", text: "#c3f53c", border: "#c3f53c44" },
  D: { bg: "#8b9bbf22", text: "#8b9bbf", border: "#8b9bbf44" },
  L: { bg: "#ff2d5522", text: "#ff2d55", border: "#ff2d5544" },
}

export default function Standings() {
  const [league, setLeague] = useState("Premier League")
  const teams = leagues[league]

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#080b14" }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#e8edf8", letterSpacing: "0.04em" }}>STANDINGS</h1>
          <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
        </div>

        {/* League tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {Object.keys(leagues).map((l) => (
            <button
              key={l}
              onClick={() => setLeague(l)}
              className="px-4 py-2 rounded text-sm font-bold uppercase tracking-wider transition-all"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                letterSpacing: "0.08em",
                backgroundColor: league === l ? "#c3f53c" : "#0f1422",
                color: league === l ? "#080b14" : "#8b9bbf",
                border: league === l ? "1px solid #c3f53c" : "1px solid #1e2537",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #1e2537" }}>
          {/* Header */}
          <div className="grid items-center px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#0a0e1a", color: "#6b7a99", fontFamily: "JetBrains Mono, monospace", gridTemplateColumns: "2rem 1fr 2.5rem 2.5rem 2.5rem 2.5rem 3rem 3rem 3rem 5rem 3rem" }}>
            <span>#</span>
            <span>Club</span>
            <span className="text-center">P</span>
            <span className="text-center">W</span>
            <span className="text-center">D</span>
            <span className="text-center">L</span>
            <span className="text-center">GF</span>
            <span className="text-center">GA</span>
            <span className="text-center">GD</span>
            <span className="text-center">Form</span>
            <span className="text-center">Pts</span>
          </div>

          {teams.map((t, i) => {
            const gd = t.gf - t.ga
            const isUcl = t.pos <= 4
            const isUel = t.pos === 5
            return (
              <div
                key={t.name}
                className="grid items-center px-4 py-3 transition-colors hover:bg-[#c3f53c08] cursor-pointer"
                style={{
                  backgroundColor: i % 2 === 0 ? "#0f1422" : "#0c1019",
                  borderLeft: isUcl ? "2px solid #c3f53c" : isUel ? "2px solid #ff8c00" : "2px solid transparent",
                  gridTemplateColumns: "2rem 1fr 2.5rem 2.5rem 2.5rem 2.5rem 3rem 3rem 3rem 5rem 3rem",
                }}
              >
                <span className="text-sm font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: "#6b7a99" }}>{t.pos}</span>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base">{t.badge}</span>
                  <span className="font-bold truncate" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#e8edf8" }}>{t.name}</span>
                  <span className="text-xs">{t.flag}</span>
                </div>
                {[t.played, t.won, t.drawn, t.lost, t.gf, t.ga].map((v, j) => (
                  <span key={j} className="text-sm text-center" style={{ fontFamily: "JetBrains Mono, monospace", color: "#8b9bbf" }}>{v}</span>
                ))}
                <span className="text-sm text-center font-medium" style={{ fontFamily: "JetBrains Mono, monospace", color: gd > 0 ? "#c3f53c" : gd < 0 ? "#ff2d55" : "#8b9bbf" }}>
                  {gd > 0 ? "+" : ""}{gd}
                </span>
                <div className="flex gap-0.5 justify-center">
                  {t.form.map((f, j) => (
                    <span
                      key={j}
                      className="w-5 h-5 rounded-sm text-xs font-bold flex items-center justify-center"
                      style={{
                        backgroundColor: formColor[f].bg,
                        color: formColor[f].text,
                        border: `1px solid ${formColor[f].border}`,
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.6rem",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="text-base font-bold text-center" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#c3f53c" }}>{t.pts}</span>
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#c3f53c" }} />
            <span className="text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>Champions League</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#ff8c00" }} />
            <span className="text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>Europa League</span>
          </div>
        </div>
      </div>
    </div>
  )
}
