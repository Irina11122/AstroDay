import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-praxis">
        <img
          src="/praxis-logo.png"
          alt="PRAXIS Greece"
          className="praxis-img"
        />
      </Link>
      <Link to="/unesco" className="navbar-unesco">
        <img
          src="/5c38783c-c6ce-45a1-a4a1-511c12ff9f6d.png"
          alt="PRAXIS Greece"
          className="praxis-img"
        />
      </Link>

      <div className="navbar-brand">
        <Link to="/" className="astrogravia-logo">
          ASTROWORLD FOR PRAXIS
        </Link>
      </div>

      <nav className="navbar__nav">
        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>
        <Link to="/photo" onClick={closeMenu}>
          PHOTOGRAPHY
        </Link>
        <Link to="/universe" onClick={closeMenu}>
          UNIVERSE
        </Link>
        <Link to="/gallery" onClick={closeMenu}>
          GALLERY
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          CONTACT
        </Link>
        <Link to="/club-serres-unesco" onClick={closeMenu}>
          CLUB SERRES FOR UNESCO
        </Link>
      </nav>

      <div className="navbar-partners">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=praxis@praxisgreece.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-email"
        >
          praxis@praxisgreece.com
        </a>
      </div>

      <button
        className={`mobile-menu-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <Link to="/photo" onClick={closeMenu}>
          PHOTOGRAPHY
        </Link>

        <Link to="/universe" onClick={closeMenu}>
          UNIVERSE
        </Link>

        <Link to="/gallery" onClick={closeMenu}>
          GALLERY
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          CONTACT
        </Link>

        <Link to="/club-serres-unesco" onClick={closeMenu}>
          CLUB SERRES FOR UNESCO
        </Link>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=praxis@praxisgreece.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-email"
        >
          praxis@praxisgreece.com
        </a>
      </nav>
    </header>
  );
}
