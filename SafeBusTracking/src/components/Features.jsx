import React from 'react';

const Features = () => {
  const features = [
    { title: "Live GPS", desc: "Real-time location with sub-30s refresh." },
    { title: "Smart Attendance", desc: "Digital marking by conductors." },
    { title: "SOS Alerts", desc: "One-tap emergency notifications." }
  ];

  return (
    <section id="features">
      <div className="container">
        <h2 className="section-title">Everything You Need</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feat-card fade-up">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;