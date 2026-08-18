import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container">
      <Link to="/" className="navbar-logo">
        <h1 className="megrim-regular">AstroWorld</h1>
      </Link>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar__nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          HOME
        </Link>

        <Link to="/photo" onClick={() => setMenuOpen(false)}>
          PHOTOGRAPHY
        </Link>

        <Link to="/universe" onClick={() => setMenuOpen(false)}>
          UNIVERSE
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
