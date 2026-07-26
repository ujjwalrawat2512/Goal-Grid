import { useState } from "react"

type Match = {
  home: string
  homeScore: number
  away: string
  awayScore: number
  time: string
  competition: string
  status: "FT" | "AET" | "PEN"
  homeFlag: string
  awayFlag: string
}

type MatchDay = {
  date: string
  matches: Match[]
}

const data: MatchDay[] = [
  {
    date: "Thursday, 24 July 2025",
    matches: [
      { home: "Real Madrid", homeScore: 3, away: "Man City", awayScore: 1, time: "21:00", competition: "Champions League", status: "FT", homeFlag: "🇪🇸", awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { home: "Arsenal", homeScore: 2, away: "PSG", awayScore: 2, time: "21:00", competition: "Champions League", status: "AET", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag: "🇫🇷" },
      { home: "Juventus", homeScore: 0, away: "Bayern Munich", awayScore: 2, time: "21:00", competition: "Champions League", status: "FT", homeFlag: "🇮🇹", awayFlag: "🇩🇪" },
    ],
  },
  {
    date: "Wednesday, 23 July 2025",
    matches: [
      { home: "Liverpool", homeScore: 4, away: "Everton", awayScore: 0, time: "17:30", competition: "Premier League", status: "FT", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { home: "Chelsea", homeScore: 1, away: "Tottenham", awayScore: 1, time: "20:00", competition: "Premier League", status: "FT", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { home: "Barcelona", homeScore: 3, away: "Villarreal", awayScore: 0, time: "21:00", competition: "La Liga", status: "FT", homeFlag: "🇪🇸", awayFlag: "🇪🇸" },
      { home: "Inter Milan", homeScore: 2, away: "Napoli", awayScore: 1, time: "21:45", competition: "Serie A", status: "FT", homeFlag: "🇮🇹", awayFlag: "🇮🇹" },
    ],
  },
  {
    date: "Tuesday, 22 July 2025",
    matches: [
      { home: "Dortmund", homeScore: 3, away: "Leverkusen", awayScore: 2, time: "20:30", competition: "Bundesliga", status: "FT", homeFlag: "🇩🇪", awayFlag: "🇩🇪" },
      { home: "Atletico Madrid", homeScore: 1, away: "Sevilla", awayScore: 0, time: "21:00", competition: "La Liga", status: "FT", homeFlag: "🇪🇸", awayFlag: "🇪🇸" },
      { home: "PSG", homeScore: 5, away: "Marseille", awayScore: 1, time: "21:00", competition: "Ligue 1", status: "FT", homeFlag: "🇫🇷", awayFlag: "🇫🇷" },
    ],
  },
]

const competitions = ["All", "Premier League", "Champions League", "La Liga", "Bundesliga", "Serie A", "Ligue 1"]

export default function Results() {
  const [filter, setFilter] = useState("All")

  const filtered = data.map((d) => ({
    ...d,
    matches: d.matches.filter((m) => filter === "All" || m.competition === filter),
  })).filter((d) => d.matches.length > 0)

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#080b14" }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#e8edf8", letterSpacing: "0.04em" }}>RESULTS</h1>
          <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {competitions.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                letterSpacing: "0.08em",
                backgroundColor: filter === c ? "#c3f53c" : "#0f1422",
                color: filter === c ? "#080b14" : "#8b9bbf",
                border: filter === c ? "1px solid #c3f53c" : "1px solid #1e2537",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Match days */}
        <div className="flex flex-col gap-8">
          {filtered.map((day) => (
            <div key={day.date}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.12em" }}>
                  {day.date}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
              </div>

              <div className="flex flex-col gap-2">
                {day.matches.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl px-5 py-4 flex items-center gap-4 transition-colors hover:border-[#c3f53c44] cursor-pointer"
                    style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}
                  >
                    {/* Competition badge */}
                    <span className="hidden sm:block text-xs px-2 py-0.5 rounded shrink-0 w-28 text-center truncate" style={{ backgroundColor: "#1e2537", color: "#8b9bbf", fontFamily: "JetBrains Mono, monospace" }}>
                      {m.competition}
                    </span>

                    {/* Home team */}
                    <div className="flex items-center gap-2 flex-1 justify-end">
                      <span className="font-bold text-right hidden sm:block" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8edf8" }}>{m.home}</span>
                      <span className="sm:hidden font-bold text-right" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8edf8" }}>{m.homeFlag} {m.home}</span>
                      <span className="hidden sm:block text-xl">{m.homeFlag}</span>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-2xl font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#e8edf8", minWidth: 24, textAlign: "center" }}>{m.homeScore}</span>
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: m.status === "FT" ? "#1e2537" : "#c3f53c22", color: m.status === "FT" ? "#6b7a99" : "#c3f53c", fontFamily: "JetBrains Mono, monospace", border: m.status !== "FT" ? "1px solid #c3f53c44" : "none" }}>
                          {m.status}
                        </span>
                      </div>
                      <span className="text-2xl font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#e8edf8", minWidth: 24, textAlign: "center" }}>{m.awayScore}</span>
                    </div>

                    {/* Away team */}
                    <div className="flex items-center gap-2 flex-1 justify-start">
                      <span className="hidden sm:block text-xl">{m.awayFlag}</span>
                      <span className="font-bold hidden sm:block" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8edf8" }}>{m.away}</span>
                      <span className="sm:hidden font-bold" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8edf8" }}>{m.awayFlag} {m.away}</span>
                    </div>

                    {/* Arrow */}
                    <span className="text-[#1e2537] text-sm shrink-0 hidden sm:block">›</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
