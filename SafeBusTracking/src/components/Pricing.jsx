import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: "80px 0", background: "#f5f7fb" }}>
      <div className="container">
        <h2
          className="section-title"
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Simple Pricing
        </h2>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "50px" }}>
          Choose the perfect plan for your school 🚀
        </p>

        <div
          className="pricing-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Basic Plan */}
          <div
            className="pricing-card"
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "15px",
              width: "280px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>Basic</h3>

            <div
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Free
            </div>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
              <li>✔ Student Management</li>
              <li>✔ Basic Dashboard</li>
              <li>✔ Attendance Tracking</li>
              <li>❌ Advanced Reports</li>
              <li>❌ Priority Support</li>
            </ul>

            <button
              style={{
                padding: "12px 25px",
                borderRadius: "8px",
                border: "2px solid #4f46e5",
                background: "transparent",
                color: "#4f46e5",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Start Free
            </button>
          </div>

          {/* School Plan */}
          <div
            className="pricing-card featured"
            style={{
              background: "#4f46e5",
              padding: "45px",
              borderRadius: "15px",
              width: "300px",
              textAlign: "center",
              color: "white",
              transform: "scale(1.05)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ fontSize: "26px", marginBottom: "10px" }}>
              School Plan ⭐
            </h3>

            <div
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              ₹4,999
            </div>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
              <li>✔ Unlimited Students</li>
              <li>✔ Advanced Dashboard</li>
              <li>✔ Attendance + Reports</li>
              <li>✔ Parent Notifications</li>
              <li>✔ Priority Support</li>
            </ul>

            <button
              style={{
                padding: "12px 25px",
                borderRadius: "8px",
                border: "none",
                background: "white",
                color: "#4f46e5",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;