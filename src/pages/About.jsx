import React, { useEffect } from "react";
import Footer from "../components/Footer";
import wunders from "../assets/wunders.jpg";
import scripture from "../assets/scripture.png";
import "./About.css";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".about-section, .about-mission-card, .about-principle-card, .about-partner-card, .about-cta"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.style.transitionDelay = `${i * 0.1}s`;
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* HERO */}
      <header className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>Who We Are</h1>
            <p>
              We’re a faith-driven non-profit transforming lives through
              education, compassion, and community — empowering the next
              generation to thrive.
            </p>
            <a href="#mission" className="about-btn about-btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* MISSION */}
      <section id="mission" className="about-section">
        <h2 className="about-title">Our Mission</h2>
        <p className="about-subtext">
          Our mission is to bring hope and opportunity through education,
          healthcare, and spiritual growth. Every child deserves a chance to
          dream, learn, and lead.
        </p>

        <div className="about-mission-grid">
          {[
            {
              title: "🎓 Education",
              desc: "Providing access to quality education and essential resources for underprivileged children — building schools, equipping classrooms, and nurturing curiosity.",
            },
            {
              title: "🙏 Faith",
              desc: "Guiding hearts through spiritual mentorship and moral leadership. Inspiring hope and compassion through faith-centered programs.",
            },
            {
              title: "🤝 Community",
              desc: "Partnering with families and local leaders to create sustainable change, empower self-reliance, and strengthen communities.",
            },
            {
              title: "💧 Health & Nutrition",
              desc: "Ensuring every child has access to clean water, nutritious meals, and healthcare to help them thrive in every aspect of life.",
            },
          ].map((m, i) => (
            <div key={i} className="about-mission-card">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="about-section">
        <h2 className="about-title">Our Journey</h2>
        <div className="about-timeline">
          {[
            { year: "1996", event: "Founded our first education program in Nairobi." },
            { year: "2000", event: "Launched a school meal initiative serving over 500 children daily." },
            { year: "2008", event: "Expanded to rural communities, building new classrooms and wells." },
            { year: "2015", event: "Reached 10,000 sponsored children nationwide." },
            { year: "2019", event: "Introduced digital learning and teacher training programs." },
            { year: "2021", event: "Started environmental sustainability campaigns." },
            { year: "2023", event: "Formed global partnerships for child development." },
            { year: "2025", event: "Launched the 'Future Leaders' mentorship program for teens." },
          ].map((item, index) => (
            <div key={index} className="about-timeline-item">
              <span className="about-timeline-year">{item.year}</span>
              <p className="about-timeline-event">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-section about-principles">
        <h2 className="about-title">Our Guiding Principles</h2>
        <p className="about-subtext">
          These principles define who we are and how we serve — guiding every action, partnership, and decision we make.
        </p>

        <div className="about-principles-grid">
          {[
            { title: "Integrity", desc: "We act with honesty and uphold strong moral values in every action." },
            { title: "Service", desc: "Driven by selfless dedication to uplift and support others." },
            { title: "Faith", desc: "Trusting in God’s guidance and reflecting His love in our work." },
            { title: "Excellence", desc: "Striving for the highest standards in everything we do." },
            { title: "Humility", desc: "Leading by listening, learning, and serving others." },
            { title: "Compassion", desc: "Acting with empathy and kindness in all relationships." },
            { title: "Stewardship", desc: "Managing resources responsibly for lasting impact." },
            { title: "Empowerment", desc: "Equipping individuals to drive their own transformation." },
            { title: "Teamwork", desc: "Working together to achieve shared goals and dreams." },
            { title: "Transparency", desc: "Being open and honest in all we communicate." },
            { title: "Respect", desc: "Valuing every person’s dignity, culture, and story." },
            { title: "Sustainability", desc: "Building long-term solutions that care for people and planet." },
            { title: "Accountability", desc: "Owning our actions and delivering on our promises." },
            { title: "Innovation", desc: "Using creativity and technology for greater impact." },
            { title: "Gratitude", desc: "Appreciating every partner, donor, and volunteer." },
          ].map((p, i) => (
            <div key={i} className="about-principle-card" style={{ transitionDelay: `${i * 0.1}s` }}>
              <h3 className="principle-title">✦ {p.title}</h3>
              <p className="principle-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="about-section about-partners">
        <h2 className="about-title">Global Partnerships</h2>
        <p className="about-subtext">
          We proudly collaborate with faith-driven organizations to amplify our reach and create meaningful, sustainable impact.
        </p>

        <div className="about-partners-grid">
          {[wunders, scripture].map((logo, i) => (
            <div key={i} className="about-partner-card">
              <img src={logo} alt={`Partner ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-section about-cta">
        <h2>Join Us in Making a Difference</h2>
        <p>
          Your support transforms communities, educates children, and brings
          hope where it’s needed most. Be part of the change today.
        </p>
        <div className="about-cta-buttons">
          <a href="/sponsor" className="about-btn about-btn-primary">
            Sponsor a Child
          </a>
          <a href="/contact" className="about-btn about-btn-outline">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}