
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand-col">
          <div className="navbar-brand">
            <div className="brand-logo">GG</div>
            <span className="brand-name" style={{ color: 'var(--text-main)' }}>
              GoalGrid
            </span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} GoalGrid. Real-time football insights & analytics.
          </p>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
