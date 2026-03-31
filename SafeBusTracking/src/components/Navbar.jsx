import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav id="navbar">
        <div className="nav-inner">
          <a href="#hero" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 17l9-9 4 4 5-5M3 7h4v4" />
                <circle cx="19" cy="17" r="2" />
                <circle cx="8" cy="17" r="2" />
                <path d="M1 17h5M11 17h6M21 17h2" />
              </svg>
            </div>
            Safe<span>Route</span>
          </a>
          <ul className="nav-links">
            <li><a href="#howitworks">How it Works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <button className="btn btn-outline">Request Demo</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={() => setIsMenuOpen(false)}>&times;</span>
        <a href="#howitworks" onClick={() => setIsMenuOpen(false)}>How it Works</a>
        <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
        <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
