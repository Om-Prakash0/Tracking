import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Driver Starts Trip',
      desc: 'Driver opens the SafeRoute app and starts the morning trip with one tap.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'GPS Shared Live',
      desc: 'Bus location is broadcast in real-time to all parents and school admins.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Attendance Marked',
      desc: 'Conductor marks each student present as they board at their stop.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Parents Notified',
      desc: 'Instant push notification when your child boards, with stop name and time.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Secure Drop-Off',
      desc: 'Guardian verified with photo + OTP before child is released. Safe every time.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9,12 11,14 15,10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="howitworks">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">Simple. Smart. Secure.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            SafeRoute works seamlessly for drivers, conductors, parents, and school admins,
            all from one app.
          </p>
        </div>

        <div className="steps-wrap" id="stepsWrap">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="step-num">
                {step.icon}
                <div className="num-badge">{step.id}</div>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
