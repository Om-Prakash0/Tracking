import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('Send Message');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message Sent');
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form">
            <h3>Let&apos;s Make Your School Safer</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email Address" required />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                {status}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
