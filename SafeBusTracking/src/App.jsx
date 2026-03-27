import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.fade-up, .sol-card, .problem-point, .step, .benefit-item');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Contact />
      <footer style={{ background: '#0A2540', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <p>© 2026 SafeRoute Technologies · All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App