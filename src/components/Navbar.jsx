import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container">
      <h1 className="megrim-regular">AstroWorld</h1>
      <nav className="navbar__nav">
        <Link to="/">HOME</Link>
        <Link to="/photo">PHOTOGRAPHY</Link>
        <Link to="/universe">UNIVERSE</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </div>
  );
}
