import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className="brand-logo">GG</div>
        <span className="brand-name">GoalGrid</span>
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/matches" className="nav-link">Live Scores</Link>
        <Link to="/leagues" className="nav-link">Leagues</Link>
        <Link to="/news" className="nav-link">News</Link>

        {/* Dynamic Auth Section */}
        <div className="auth-nav-buttons">
          <Link to="/login" className="btn-secondary">Login</Link>
          <Link to="/register" className="btn-primary">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};