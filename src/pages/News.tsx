import { useState } from "react"
import { Link } from "react-router-dom"

const allArticles = [
  {
    id: "art-1",
    tag: "Premier League",
    title: "Arsenal's Title Push: How Arteta's Men Have Kept 11 Clean Sheets in 14 Games",
    excerpt: "Mikel Arteta has engineered one of the most defensively resilient Arsenal sides in the club's history, a shift that has put them on the cusp of their first league title since 2004.",
    author: "Jamie Rowe",
    authorAvatar: "JR",
    time: "4h ago",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1551958219-acbc38a73e4c?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    id: "art-2",
    tag: "Transfer Rumours",
    title: "Exclusive: Mbappé's Camp Opens Talks With Three Top European Clubs",
    excerpt: "Sources close to the player suggest his agent has held preliminary conversations with Real Madrid, PSG, and a Premier League club in recent weeks.",
    author: "Lena Fischer",
    authorAvatar: "LF",
    time: "6h ago",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "art-3",
    tag: "La Liga",
    title: "El Clásico Preview: Pressure Mounts on Xavi as Barca Visit the Bernabéu",
    excerpt: "With Real Madrid six points clear at the top, Saturday's Clásico has taken on existential proportions for Barcelona's season.",
    author: "Santiago Blanco",
    authorAvatar: "SB",
    time: "8h ago",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "art-4",
    tag: "Bundesliga",
    title: "Bayer Leverkusen's Unbeaten Season: The Numbers Behind the Miracle",
    excerpt: "Xabi Alonso's Leverkusen have rewritten Bundesliga history. We break down the metrics that made an entire season without a defeat possible.",
    author: "Moritz Klein",
    authorAvatar: "MK",
    time: "10h ago",
    readTime: "9 min",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "art-5",
    tag: "Champions League",
    title: "Vinicius Jr Masterclass Sends Real Madrid Into Semi-Finals",
    excerpt: "A stunning hat-trick from the Brazilian winger dismantled Manchester City's defensive structure at the Bernabéu.",
    author: "Carlos Mendez",
    authorAvatar: "CM",
    time: "2h ago",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    id: "art-6",
    tag: "Analysis",
    title: "How High Pressing Changed the Tactical DNA of the Premier League",
    excerpt: "From Klopp's Liverpool to Arteta's Arsenal — a deep dive into how gegenpressing transformed English football's highest level.",
    author: "Emma Clarke",
    authorAvatar: "EC",
    time: "1d ago",
    readTime: "12 min",
    img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
]

const tags = ["All", "Premier League", "Champions League", "La Liga", "Bundesliga", "Transfer Rumours", "Analysis"]

export default function News() {
  const [activeTag, setActiveTag] = useState("All")

  const filtered = activeTag === "All" ? allArticles : allArticles.filter((a) => a.tag === activeTag)
  const [hero, ...rest] = filtered

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#080b14" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#e8edf8", letterSpacing: "0.04em" }}>NEWS & ANALYSIS</h1>
          <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
        </div>

        {/* Tag filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className="px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                letterSpacing: "0.08em",
                backgroundColor: activeTag === t ? "#c3f53c" : "#0f1422",
                color: activeTag === t ? "#080b14" : "#8b9bbf",
                border: activeTag === t ? "1px solid #c3f53c" : "1px solid #1e2537",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Hero article */}
        {hero && (
          <Link to={`/news/${hero.id}`} className="group block rounded-xl overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-[1fr_480px]" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537", minHeight: 280 }}>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block mb-3 px-2.5 py-0.5 rounded text-xs font-bold text-[#080b14] uppercase tracking-widest self-start" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>
                {hero.tag}
              </span>
              <h2 className="mb-3 leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#e8edf8", letterSpacing: "0.01em" }}>
                {hero.title}
              </h2>
              <p className="mb-4 leading-relaxed text-sm" style={{ color: "#8b9bbf" }}>{hero.excerpt}</p>
              <div className="flex items-center gap-3 text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#c3f53c22", color: "#c3f53c", border: "1px solid #c3f53c44" }}>
                  {hero.authorAvatar}
                </div>
                <span>{hero.author}</span>
                <span>·</span>
                <span>{hero.time}</span>
                <span>·</span>
                <span>{hero.readTime} read</span>
              </div>
            </div>
            <div className="relative overflow-hidden" style={{ backgroundColor: "#0a0e1a", minHeight: 220 }}>
              <img src={hero.img} alt={hero.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ minHeight: 220 }} />
            </div>
          </Link>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((a) => (
              <Link key={a.id} to={`/news/${a.id}`} className="group rounded-xl overflow-hidden flex flex-col" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}>
                <div className="relative overflow-hidden" style={{ height: 200, backgroundColor: "#0a0e1a" }}>
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold text-[#080b14]" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>
                    {a.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="mb-2 leading-snug" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8edf8", letterSpacing: "0.01em" }}>
                    {a.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#8b9bbf" }}>{a.excerpt.slice(0, 100)}…</p>
                  <div className="flex items-center gap-2 mt-auto text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "#c3f53c22", color: "#c3f53c", border: "1px solid #c3f53c44", fontSize: "0.55rem" }}>
                      {a.authorAvatar}
                    </div>
                    <span>{a.author}</span>
                    <span>·</span>
                    <span>{a.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
            No articles in this category yet.
          </div>
        )}
      </div>
    </div>
  )
}
