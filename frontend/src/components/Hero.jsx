
export const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <span className="hero-tag">⚡ Live scores updated every minute</span>
        <h1>Welcome to GoalGrid ⚽</h1>
        <p>
          Your central hub for real-time football scores, match stats, league tables, and breaking news updates.
        </p>
        <div className="hero-actions">
          <a href="#live" className="hero-btn primary">
            View Live Matches
          </a>
          <a href="#standings" className="hero-btn secondary">
            Explore Standings
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">6+</span>
            <span className="hero-stat-label">Top Leagues</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">120+</span>
            <span className="hero-stat-label">Teams Tracked</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">24/7</span>
            <span className="hero-stat-label">Live Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
