import { useState, useEffect } from "react"

type LiveMatch = {
  id: number
  competition: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  minute: number
  homeFlag: string
  awayFlag: string
  events: { time: number; type: "goal" | "yellow" | "red" | "sub"; team: "home" | "away"; player: string }[]
}

const initialMatches: LiveMatch[] = [
  {
    id: 1,
    competition: "Champions League",
    homeTeam: "PSG",
    awayTeam: "Bayern Munich",
    homeScore: 1,
    awayScore: 2,
    minute: 67,
    homeFlag: "🇫🇷",
    awayFlag: "🇩🇪",
    events: [
      { time: 12, type: "goal", team: "away", player: "H. Kane" },
      { time: 34, type: "yellow", team: "home", player: "Marquinhos" },
      { time: 51, type: "goal", team: "home", player: "Mbappé" },
      { time: 63, type: "goal", team: "away", player: "Musiala" },
    ],
  },
  {
    id: 2,
    competition: "Premier League",
    homeTeam: "Liverpool",
    awayTeam: "Man United",
    homeScore: 3,
    awayScore: 0,
    minute: 82,
    homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    events: [
      { time: 18, type: "goal", team: "home", player: "M. Salah" },
      { time: 45, type: "goal", team: "home", player: "Díaz" },
      { time: 58, type: "red", team: "away", player: "B. Fernandes" },
      { time: 77, type: "goal", team: "home", player: "Núñez" },
    ],
  },
  {
    id: 3,
    competition: "La Liga",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    homeScore: 2,
    awayScore: 2,
    minute: 45,
    homeFlag: "🇪🇸",
    awayFlag: "🇪🇸",
    events: [
      { time: 8, type: "goal", team: "away", player: "Vinícius Jr" },
      { time: 27, type: "goal", team: "home", player: "Pedri" },
      { time: 39, type: "yellow", team: "away", player: "Bellingham" },
      { time: 43, type: "goal", team: "home", player: "Lewandowski" },
      { time: 44, type: "goal", team: "away", player: "Bellingham" },
    ],
  },
]

const eventIcon = {
  goal: { icon: "⚽", color: "#c3f53c" },
  yellow: { icon: "🟨", color: "#f59e0b" },
  red: { icon: "🟥", color: "#ff2d55" },
  sub: { icon: "🔄", color: "#60a5fa" },
}

export default function Live() {
  const [matches, setMatches] = useState(initialMatches)
  const [selected, setSelected] = useState<number | null>(1)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1)
      setMatches((prev) =>
        prev.map((m) => ({
          ...m,
          minute: Math.min(m.minute + 1, m.minute < 90 ? m.minute + 1 : m.minute),
        }))
      )
    }, 8000)
    return () => clearInterval(id)
  }, [])

  const active = matches.find((m) => m.id === selected)

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#080b14" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d55] animate-pulse" />
            <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#e8edf8", letterSpacing: "0.04em" }}>LIVE SCORES</h1>
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
          <span className="text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
            {matches.length} matches in progress
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Match list */}
          <div className="flex flex-col gap-3">
            {matches.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className="w-full text-left rounded-xl p-5 transition-all"
                style={{
                  backgroundColor: selected === m.id ? "#141b2d" : "#0f1422",
                  border: selected === m.id ? "1px solid #c3f53c44" : "1px solid #1e2537",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase" style={{ color: "#8b9bbf", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em" }}>{m.competition}</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full" style={{ backgroundColor: "#ff2d5520", border: "1px solid #ff2d5544" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d55] animate-pulse" />
                    <span className="text-xs font-bold" style={{ color: "#ff2d55", fontFamily: "JetBrains Mono, monospace" }}>{m.minute}&apos;</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  {/* Home */}
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-2xl">{m.homeFlag}</span>
                    <span className="font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8edf8" }}>{m.homeTeam}</span>
                  </div>

                  {/* Score */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-4xl font-black" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#e8edf8" }}>{m.homeScore}</span>
                    <span style={{ color: "#1e2537", fontSize: "1.5rem" }}>–</span>
                    <span className="text-4xl font-black" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#e8edf8" }}>{m.awayScore}</span>
                  </div>

                  {/* Away */}
                  <div className="flex items-center gap-2 flex-1 justify-end">
                    <span className="font-bold text-right" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8edf8" }}>{m.awayTeam}</span>
                    <span className="text-2xl">{m.awayFlag}</span>
                  </div>
                </div>

                {/* Latest events row */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {m.events.slice(-3).map((e, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#1e2537", color: "#8b9bbf", fontFamily: "JetBrains Mono, monospace" }}>
                      <span>{eventIcon[e.type].icon}</span>
                      <span>{e.time}&apos;</span>
                      <span style={{ color: "#e8edf8" }}>{e.player}</span>
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Match detail panel */}
          {active && (
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}>
              {/* Score header */}
              <div className="p-6 text-center" style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #111827 100%)", borderBottom: "1px solid #1e2537" }}>
                <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#c3f53c", fontFamily: "JetBrains Mono, monospace" }}>
                  {active.competition}
                </span>
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-1">{active.homeFlag}</div>
                    <div className="font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8edf8" }}>{active.homeTeam}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#e8edf8" }}>{active.homeScore}</span>
                      <span className="text-3xl" style={{ color: "#1e2537" }}>–</span>
                      <span className="text-6xl font-black" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#e8edf8" }}>{active.awayScore}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d55] animate-pulse" />
                      <span className="text-sm font-bold" style={{ color: "#ff2d55", fontFamily: "JetBrains Mono, monospace" }}>{active.minute}&apos;</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-1">{active.awayFlag}</div>
                    <div className="font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8edf8" }}>{active.awayTeam}</div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-4">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.12em" }}>Match Events</h3>
                <div className="flex flex-col gap-3">
                  {[...active.events].reverse().map((e, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 ${e.team === "away" ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-xs font-bold w-8 shrink-0 text-center" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>{e.time}&apos;</span>
                      <span className="text-base">{eventIcon[e.type].icon}</span>
                      <div className={`flex-1 px-3 py-1.5 rounded-lg text-sm ${e.team === "away" ? "text-right" : ""}`} style={{ backgroundColor: "#1e2537" }}>
                        <span className="font-medium" style={{ color: "#e8edf8", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600 }}>{e.player}</span>
                        <span className="ml-2 text-xs" style={{ color: "#6b7a99" }}>{e.team === "home" ? active.homeTeam : active.awayTeam}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
