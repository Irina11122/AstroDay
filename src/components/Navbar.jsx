import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* PRAXIS LOGO */}
      <Link to="/" className="navbar-praxis">
        <img
          src="/praxis-logo.png"
          alt="PRAXIS Greece"
          className="praxis-img"
        />
      </Link>

      {/* ASTROGRAVIA */}
      <div className="navbar-brand">
        <Link to="/" className="astrogravia-logo">
          ASTROGRAVIA
        </Link>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="navbar__nav">
        <Link to="/">HOME</Link>
        <Link to="/photo">PHOTOGRAPHY</Link>
        <Link to="/universe">UNIVERSE</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/club-serres-unesco">UNESCO</Link>
      </nav>

      {/* EMAIL */}
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

      {/* MOBILE MENU BUTTON */}
      <button
        className={`mobile-menu-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
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
