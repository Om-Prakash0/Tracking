import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">Safe<span>Route</span></a>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#howitworks">Process</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  )
}