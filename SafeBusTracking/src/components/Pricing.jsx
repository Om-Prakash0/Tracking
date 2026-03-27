import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <h2 className="section-title" style={{textAlign: 'center'}}>Simple Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-plan">Basic</div>
            <div className="pricing-price">Free</div>
            <button className="btn btn-outline">Start Free</button>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-plan">School</div>
            <div className="pricing-price">₹4,999</div>
            <button className="btn btn-primary">Select Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;