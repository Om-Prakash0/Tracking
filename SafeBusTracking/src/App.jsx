import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll(
      '.fade-up, .step, .feat-card, .pricing-card, .contact-form',
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Contact />
      <footer
        className="footer-bottom"
        style={{
          background: 'var(--blue-deep)',
          padding: '20px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <p>&copy; 2026 SafeRoute Technologies | Made with care in India</p>
      </footer>
    </div>
  );
}

export default App;
