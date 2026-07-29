import React from 'react';

export const Hero = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
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
      </div>
    </section>
  );
};