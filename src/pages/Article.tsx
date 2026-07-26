import { Link, useParams } from "react-router-dom"

const articles: Record<string, {
  tag: string
  title: string
  subtitle: string
  author: string
  authorAvatar: string
  authorRole: string
  date: string
  readTime: string
  img: string
  body: { type: "p" | "h2" | "blockquote"; text: string }[]
  related: { id: string; title: string; tag: string; img: string }[]
}> = {
  "feat-1": {
    tag: "Champions League",
    title: "Vinicius Jr Masterclass Sends Real Madrid Into Semi-Finals",
    subtitle: "A stunning hat-trick from the Brazilian winger dismantled Manchester City's defensive structure as Los Blancos sealed a 4–1 aggregate victory.",
    author: "Carlos Mendez",
    authorAvatar: "CM",
    authorRole: "Senior Football Correspondent",
    date: "24 July 2025",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&h=700&fit=crop&auto=format",
    body: [
      { type: "p", text: "The Santiago Bernabéu witnessed one of those moments on Tuesday night that remind you why Champions League football continues to capture the imagination of millions around the globe. Vinicius Júnior, operating at a level of pure expression that few players in the modern game can reach, produced a hat-trick that was simultaneously clinical and otherworldly in its creativity." },
      { type: "h2", text: "A Night That Began Under Pressure" },
      { type: "p", text: "Manchester City arrived in Madrid holding a 1–0 first-leg lead from the Etihad, and Pep Guardiola's defensive shape in the opening quarter of an hour suggested he intended to make the tie deeply uncomfortable for Carlo Ancelotti's men. The press was organised, the low block was compact, and for fifteen minutes Real Madrid struggled to find the precise combination play that unlocks City's structure." },
      { type: "p", text: "Then, in the 17th minute, Bellingham slipped a through ball into the channel that no other player on the pitch had seen. Vinicius met it on the run, cut inside Kyle Walker with a shimmy that left the England right-back rooted to the Bernabéu turf, and finished low and hard past Ederson into the far corner." },
      { type: "blockquote", text: '"He is the best player in the world right now. What he did tonight was not football — it was art." — Carlo Ancelotti' },
      { type: "h2", text: "The Aggregate Picture" },
      { type: "p", text: "By the 34th minute, Vinicius had his second: a towering header from a Carvajal cross that caught the City centre-backs flat-footed, levelling the aggregate score. The Bernabéu roared with a collective energy that physically altered the game's momentum." },
      { type: "p", text: "Erling Haaland pulled one back in the 61st minute to restore City's aggregate advantage, but Real Madrid's response was immediate and devastating. Vinicius completed his hat-trick in the 68th minute with a audacious backheel finish from a Modric pass that few players would have even attempted, let alone converted." },
      { type: "h2", text: "Looking Ahead" },
      { type: "p", text: "Real Madrid now face Bayern Munich in the semi-finals — a rematch of a tie that produced extraordinary drama last season. Vinicius will enter that contest with confidence that borders on invincibility, and there is a growing argument among football's observers that his recent run of performances places him among the transformative figures in Champions League history." },
    ],
    related: [
      { id: "art-3", title: "El Clásico Preview: Pressure Mounts on Xavi", tag: "La Liga", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=250&fit=crop&auto=format" },
      { id: "art-2", title: "Mbappé's Camp Opens Talks With Three Top European Clubs", tag: "Transfers", img: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=400&h=250&fit=crop&auto=format" },
      { id: "art-4", title: "Leverkusen's Unbeaten Season: The Numbers Behind the Miracle", tag: "Bundesliga", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=250&fit=crop&auto=format" },
    ],
  },
}

const fallback = articles["feat-1"]

export default function Article() {
  const { id } = useParams<{ id: string }>()
  const article = (id && articles[id]) || fallback

  return (
    <div className="min-h-screen pb-16" style={{ backgroundColor: "#080b14" }}>
      {/* Hero image */}
      <div className="relative w-full" style={{ height: "clamp(300px, 50vh, 520px)", backgroundColor: "#0f1422" }}>
        <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,20,1) 0%, rgba(8,11,20,0.4) 60%, transparent 100%)" }} />
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-24 relative z-10">
        {/* Article header */}
        <div className="mb-8">
          <span className="inline-block mb-4 px-3 py-1 rounded text-xs font-bold text-[#080b14] uppercase tracking-widest" style={{ backgroundColor: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>
            {article.tag}
          </span>
          <h1 className="mb-4 leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e8edf8", letterSpacing: "0.01em" }}>
            {article.title}
          </h1>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: "#8b9bbf" }}>{article.subtitle}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 pb-6" style={{ borderBottom: "1px solid #1e2537" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#c3f53c22", color: "#c3f53c", border: "1px solid #c3f53c44", fontFamily: "Barlow Condensed, sans-serif" }}>
              {article.authorAvatar}
            </div>
            <div>
              <div className="font-medium text-sm" style={{ color: "#e8edf8" }}>{article.author}</div>
              <div className="text-xs" style={{ color: "#6b7a99" }}>{article.authorRole}</div>
            </div>
            <div className="ml-auto flex items-center gap-3 text-xs" style={{ color: "#6b7a99", fontFamily: "JetBrains Mono, monospace" }}>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mb-12">
          {article.body.map((block, i) => {
            if (block.type === "h2") return (
              <h2 key={i} className="mt-8 mb-3" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#e8edf8", letterSpacing: "0.02em" }}>
                {block.text}
              </h2>
            )
            if (block.type === "blockquote") return (
              <blockquote key={i} className="my-6 pl-5 py-1" style={{ borderLeft: "3px solid #c3f53c" }}>
                <p className="text-base italic leading-relaxed" style={{ color: "#8b9bbf" }}>{block.text}</p>
              </blockquote>
            )
            return (
              <p key={i} className="mb-4 leading-relaxed text-base" style={{ color: "#b0bbd4" }}>{block.text}</p>
            )
          })}
        </div>

        {/* Tags + Share */}
        <div className="flex items-center justify-between py-5 mb-10" style={{ borderTop: "1px solid #1e2537", borderBottom: "1px solid #1e2537" }}>
          <div className="flex gap-2">
            {["Champions League", "Real Madrid", "Vinicius Jr"].map((t) => (
              <span key={t} className="px-2.5 py-1 rounded text-xs font-bold uppercase" style={{ backgroundColor: "#1e2537", color: "#8b9bbf", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.06em" }}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-80" style={{ backgroundColor: "#c3f53c22", color: "#c3f53c", border: "1px solid #c3f53c44", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.1em" }}>
              Share
            </button>
          </div>
        </div>

        {/* Related */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#e8edf8", letterSpacing: "0.04em" }}>RELATED STORIES</h2>
            <div className="flex-1 h-px" style={{ backgroundColor: "#1e2537" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {article.related.map((r) => (
              <Link key={r.id} to={`/news/${r.id}`} className="group rounded-xl overflow-hidden" style={{ backgroundColor: "#0f1422", border: "1px solid #1e2537" }}>
                <div className="overflow-hidden" style={{ height: 130, backgroundColor: "#0a0e1a" }}>
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3">
                  <span className="text-xs font-bold uppercase" style={{ color: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif" }}>{r.tag}</span>
                  <p className="text-sm mt-1 leading-snug" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#e8edf8" }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link to="/news" className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#e8edf8]" style={{ color: "#c3f53c", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.1em" }}>
            ← Back to News
          </Link>
        </div>
      </div>
    </div>
  )
}
