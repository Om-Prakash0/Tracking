export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot"></span> Zero Hardware Required
            </div>
            <h1 className="hero-title">
              Real-Time School Bus <span className="accent">Safety</span>
            </h1>
            <p className="hero-sub">Track live, get instant alerts, and ensure safe pickups for every child.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary btn-lg">Start Free Trial</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone">
              <div className="phone-screen">
                <div className="map-area">
                  <div className="bus-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}