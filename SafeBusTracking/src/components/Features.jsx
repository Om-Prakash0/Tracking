export default function Features() {
  const features = [
    { title: "Live Tracking", desc: "Sub-30s GPS refresh rates." },
    { title: "OTP Pickup", desc: "Secure verification for guardians." },
    { title: "SOS Alerts", desc: "Instant emergency notifications." }
  ];

  return (
    <section id="features">
      <div className="container">
        <h2 className="section-title">Smart Features</h2>
        <div className="features-grid">
          {features.map((item, idx) => (
            <div key={idx} className="feat-card fade-up">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}