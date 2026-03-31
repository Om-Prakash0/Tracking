import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot"></span>
              Zero Hardware Required | Runs on Driver&apos;s Phone
            </div>
            <h1 className="hero-title">
              Real-Time School Bus
              <br />
              <span className="accent">Safety</span> for Every <span className="accent-green">Parent</span>
            </h1>
            <p className="hero-sub">
              Track your child&apos;s school bus live, get instant notifications, and ensure
              safe pickup every single day.
            </p>
            <div className="hero-btns">
              <button className="btn btn-primary btn-lg">Get Started Free</button>
              <button className="btn btn-outline btn-lg">Watch Demo</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone-wrap">
              <div className="phone">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="phone-header">
                    <div className="title" style={{ color: 'white', fontSize: '12px' }}>
                      SafeRoute Live
                    </div>
                  </div>
                  <div className="map-area">
                    <div className="bus-dot"></div>
                  </div>
                  <div className="phone-info">
                    <div className="eta-card">
                      <div className="value">8 mins away</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
