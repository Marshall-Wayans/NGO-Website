import React, { useEffect, useRef, useState } from "react";
import "./Donate.css";
import { BookOpen, Heart, Home, Check } from "lucide-react";


const useScrollFadeIn = (className) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [className]);

  return elementsRef;
};

export default function DonatePage() {
  const fadeRefs = useScrollFadeIn("donate-visible");
  const [donationAmount, setDonationAmount] = useState("50");
  const [donationType, setDonationType] = useState("one-time");
  const [customAmount, setCustomAmount] = useState("");

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(e.target.value);
  };

  const handleScrollToDonate = () => {
    const section = document.getElementById("donate-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="donate-wrapper">
     
      <section className="donate-hero donate-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <div className="donate-hero-overlay"></div>
        <div className="donate-hero-content">
          <h1>Your Gift Makes a Difference</h1>
          <p>Every donation empowers children through faith, education, and love.</p>
          <button className="donate-btn-primary" onClick={handleScrollToDonate}>
            Donate Now
          </button>
        </div>
      </section>

    
      <section className="donate-why donate-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Why Donate?</h2>
        <div className="donate-why-grid">
          <div className="donate-card">
            <BookOpen className="donate-icon" />
            <h3>Educate</h3>
            <p>Support tuition, uniforms, and materials for children in need.</p>
          </div>
          <div className="donate-card">
            <Heart className="donate-icon" />
            <h3>Care</h3>
            <p>Provide nutrition, healthcare, and safe shelters for children.</p>
          </div>
          <div className="donate-card">
            <Home className="donate-icon" />
            <h3>Empower</h3>
            <p>Build faith and community resilience through local partnerships.</p>
          </div>
        </div>
      </section>

      
      <section id="donate-section" className="donate-form-section donate-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Make Your Donation</h2>
        <div className="donate-form-container">
          <div className="donate-amounts">
            <h3>Select Amount</h3>
            <div className="donate-buttons">
              {["25", "50", "100", "200"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setDonationAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`donate-amount-btn ${donationAmount === amount ? "active" : ""}`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="donate-custom">
              <label>Custom Amount</label>
              <div className="donate-input-wrap">
                <span>$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </div>
            </div>
          </div>

          <div className="donate-type">
            <h3>Donation Type</h3>
            <div className="donate-type-buttons">
              <button
                className={donationType === "one-time" ? "active" : ""}
                onClick={() => setDonationType("one-time")}
              >
                One-Time
              </button>
              <button
                className={donationType === "monthly" ? "active" : ""}
                onClick={() => setDonationType("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>

          <form className="donate-form">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Message (optional)"></textarea>
            <button type="submit" className="donate-btn-primary">
              Donate ${donationAmount || "0"}{" "}
              {donationType === "monthly" ? "Monthly" : ""}
            </button>
            <p className="donate-note">
              Your donation is secure and encrypted. You’ll receive a receipt via email.
            </p>
          </form>
        </div>
      </section>

      
      <section className="donate-transparency donate-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Where Your Money Goes</h2>
        <div className="donate-transparency-grid">
          <div className="donate-transparency-card">
            <div className="donate-circle">70%</div>
            <h3>Child Programs</h3>
            <p>Direct support for education, health, and well-being.</p>
          </div>
          <div className="donate-transparency-card">
            <div className="donate-circle">20%</div>
            <h3>Education Materials</h3>
            <p>Books, supplies, and learning resources for effective education.</p>
          </div>
          <div className="donate-transparency-card">
            <div className="donate-circle">10%</div>
            <h3>Admin & Support</h3>
            <p>Essential operations and community development programs.</p>
          </div>
        </div>
        <p className="donate-transparency-footer">
          ICCM Kenya is committed to transparency and accountability.{" "}
          <a href="#">View our annual report</a> for more information.
        </p>
      </section>

     
      <section className="donate-impact donate-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <div className="donate-impact-quote">
          <div className="donate-impact-overlay"></div>
          <div className="donate-impact-text">
            <blockquote>
              "Your generosity has changed lives in ways words can't describe. Together,
              we’re building a future filled with faith and education."
            </blockquote>
            <cite>— Pastor James, ICCM Kenya Director</cite>
          </div>
        </div>

        <div className="donate-impact-grid">
          <div className="donate-impact-card">
            <h3>Our Impact By Numbers</h3>
            <ul>
              <li><Check /> 500+ children sponsored</li>
              <li><Check /> 85% primary school completion</li>
              <li><Check /> 12 community schools supported</li>
              <li><Check /> Thousands of meals provided annually</li>
            </ul>
          </div>
          <div className="donate-impact-card">
            <h3>Faith’s Story</h3>
            <p>
              Faith joined our program at age 10 after losing her parents. Through sponsorship,
              she stayed in school and excelled academically. Today, she’s studying nursing and
              hopes to give back to her community.
            </p>
          </div>
        </div>
      </section>

     
      <section className="donate-cta donate-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <h2>
          Join us in transforming children's futures — one donation at a time.
        </h2>
        <div className="donate-cta-buttons">
          <button className="donate-btn-primary" onClick={handleScrollToDonate}>
            Donate Now
          </button>
          <a href="/sponsor" className="donate-btn-outline">
            Sponsor a Child
          </a>
        </div>
      </section>
    </div>
  );
}
