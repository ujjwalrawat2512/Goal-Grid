import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-logo">GG</div>
        <span className="brand-name">GoalGrid</span>
      </div>
      <div className="navbar-links">
        <a href="#live">Live Scores</a>
        <a href="#standings">Standings</a>
        <a href="#analytics">Analytics</a>
        <a href="#news">News</a>
      </div>
    </nav>
  );
};