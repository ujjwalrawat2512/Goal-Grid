import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Radio } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/matches', label: 'Live Scores' },
    { to: '/leagues', label: 'Leagues' },
    { to: '/news', label: 'News' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <div className="brand-logo">GG</div>
        <span className="brand-name">GoalGrid</span>
      </Link>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}

        <div className="auth-nav-buttons">
          <Link to="/login" className="btn-secondary" onClick={closeMenu}>Login</Link>
          <Link to="/register" className="btn-primary" onClick={closeMenu}>Sign up</Link>
        </div>
      </div>

      <div className="navbar-actions">
        <span className="live-indicator" title="Live matches in progress">
          <Radio size={13} />
          LIVE
        </span>

        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark / light mode"
          title="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="menu-toggle-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
