import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <img src="/praxis-logo.png" alt="PRAXIS Greece" className="praxis-img" />
      <div className="navbar-brand">
        <Link to="/" className="astrogravia-logo">
          ASTROGRAVIA
        </Link>
      </div>
      <nav className="navbar__nav">
        <Link to="/">HOME</Link>
        <Link to="/photo">PHOTOGRAPHY</Link>
        <Link to="/universe">UNIVERSE</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/club-serres-unesco">UNESCO</Link>
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
    </header>
  );
}
