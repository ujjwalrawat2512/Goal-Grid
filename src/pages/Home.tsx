import { Link } from "react-router-dom"

const featured = {
  id: "feat-1",
  tag: "Champions League",
  title: "Vinicius Jr Masterclass Sends Real Madrid Into Semi-Finals",
  excerpt: "A stunning hat-trick from the Brazilian winger dismantled Manchester City's defensive structure as Los Blancos sealed a 4–1 aggregate victory at the Bernabéu.",
  author: "Carlos Mendez",
  time: "2 hours ago",
  readTime: "6 min read",
  img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=680&fit=crop&auto=format",
}

const articles = [
  {
    id: "art-1",
    tag: "Premier League",
    title: "Arsenal's Title Push: How Arteta's Men Have Kept 11 Clean Sheets in 14 Games",
    author: "Jamie Rowe",
    time: "4h ago",
    img: "https://images.unsplash.com/photo-1551958219-acbc38a73e4c?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: "art-2",
    tag: "Transfer Rumours",
    title: "Exclusive: Mbappé's Camp Opens Talks With Three Top European Clubs",
    author: "Lena Fischer",
    time: "6h ago",
    img: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: "art-3",
    tag: "La Liga",
    title: "El Clásico Preview: Pressure Mounts on Xavi as Barca Visit the Bernabéu",
    author: "Santiago Blanco",
    time: "8h ago",
    img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: "art-4",
    tag: "Bundesliga",
    title: "Bayer Leverkusen's Unbeaten Season: The Numbers Behind the Miracle",
    author: "Moritz Klein",
    time: "10h ago",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=380&fit=crop&auto=format",
  },
]

const scorers = [
  { rank: 1, name: "Erling Haaland", club: "Man City", goals: 24, flag: "🇳🇴" },
  { rank: 2, name: "Harry Kane", club: "Bayern", goals: 22, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { rank: 3, name: "Kylian Mbappé", club: "Real Madrid", goals: 20, flag: "🇫🇷" },
  { rank: 4, name: "Mohamed Salah", club: "Liverpool", goals: 18, flag: "🇪🇬" },
  { rank: 5, name: "Lautaro Martínez", club: "Inter Milan", goals: 16, flag: "🇦🇷" },
]

const upcomingMatches = [
  { home: "Arsenal", away: "Chelsea", date: "Sat 27 Jul", time: "12:30", competition: "PL" },
  { home: "Barcelona", away: "Atlético", date: "Sat 27 Jul", time: "16:00", competition: "LL" },
  { home: "Bayern", away: "Dortmund", date: "Sun 28 Jul", time: "15:30", competition: "BL" },
]

const ticker = [
  "FULL TIME: Real Madrid 3–1 Man City · UCL",
  "GOAL: Salah 67' Liverpool 2–0 Everton",
  "YELLOW CARD: Rüdiger 45+2' Real Madrid",
  "KICK OFF: PSG vs Bayern Munich · UCL",
  "PENALTY MISS: Kane 71' Bayern 1–1 Arsenal",
]

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080b14" }}>
      {/* Ticker */}
      <div className="overflow-hidden py-2.5 border-b" style={{ backgroundColor: "#0f1422", borderColor: "#1e2537" }}>
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: "ticker 40s linear infinite",
          }}
        >
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="text-xs flex items-center gap-2" style={{ fontFamily: "JetBrains Mono, monospace", color: "#8b9bbf" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c3f53c] shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero + sidebar grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-10">
          {/* Featured article */}
          <Link to="/news/feat-1" className="group block relative rounded-xl overflow-hidden" style={{ backgroundColor: "#0f1422", minHeight: 440 }}>
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,20,0.97) 0%, rgba(8,11,20,0.5) 50%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block mb-3 px-2.5 py-0.5 rounded text-xs font-bold text-[#080b14] uppercase tracking-widest" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>
                {featured.tag}
              </span>
              <h1 className="text-white mb-3 leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", letterSpacing: "0.01em" }}>
                {featured.title}
              </h1>
              <p className="text-sm mb-4 max-w-2xl leading-relaxed" style={{ color: "#8b9bbf" }}>{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.time}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Top scorers */}
            <div className="rounded-xl p-4" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "Barlow Condensed, sans-serif", color: "#c3f53c", letterSpacing: "0.12em" }}>
                  Top Scorers
                </h2>
                <span className="text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>2024/25</span>
              </div>
              <div className="flex flex-col gap-3">
                {scorers.map((s) => (
                  <div key={s.rank} className="flex items-center gap-3">
                    <span className="w-5 text-xs text-right shrink-0" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>{s.rank}</span>
                    <span className="text-lg">{s.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate" style={{ color: "#e8edf8" }}>{s.name}</div>
                      <div className="text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>{s.club}</div>
                    </div>
                    <div className="text-lg font-bold shrink-0" style={{ fontFamily: "Barlow Condensed, sans-serif", color: "#c3f53c", fontWeight: 700 }}>{s.goals}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming matches */}
            <div className="rounded-xl p-4" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "Barlow Condensed, sans-serif", color: "#c3f53c", letterSpacing: "0.12em" }}>
                Upcoming
              </h2>
              <div className="flex flex-col gap-3">
                {upcomingMatches.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ borderBottom: i < upcomingMatches.length - 1 ? "1px solid #1e2537" : "none", paddingBottom: i < upcomingMatches.length - 1 ? "0.75rem" : 0 }}>
                    <span className="text-xs px-1.5 py-0.5 rounded font-bold" style={{ backgroundColor: "#1e2537", color: "#8b9bbf", fontFamily: "JetBrains Mono, monospace" }}>{m.competition}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 600, color: "#e8edf8" }}>{m.home} vs {m.away}</div>
                      <div className="text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>{m.date}</div>
                    </div>
                    <span className="font-bold shrink-0" style={{ fontFamily: "JetBrains Mono, monospace", color: "#c3f53c", fontSize: "0.75rem" }}>{m.time}</span>
                  </div>
                ))}
              </div>
              <Link to="/results" className="mt-4 flex items-center justify-center gap-1 w-full py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors hover:bg-[#c3f53c]/20" style={{ border: "1px solid #c3f53c33", color: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>
                Full Schedule →
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Latest News */}
        <div className="mb-3 flex items-center gap-3">
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#e8edf8", letterSpacing: "0.04em" }}>LATEST NEWS</h2>
          <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
          <Link to="/news" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#e8edf8]" style={{ color: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.1em" }}>
            All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((a) => (
            <Link key={a.id} to={`/news/${a.id}`} className="group rounded-xl overflow-hidden flex flex-col" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}>
              <div className="relative overflow-hidden" style={{ height: 180, backgroundColor: "#0f1422" }}>
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,20,34,0.6) 0%, transparent 60%)" }} />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold text-[#080b14]" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>
                  {a.tag}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm leading-snug mb-auto" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8edf8", letterSpacing: "0.01em" }}>
                  {a.title}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
                  <span>{a.author}</span>
                  <span>·</span>
                  <span>{a.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
