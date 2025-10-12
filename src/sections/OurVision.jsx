import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OurVision.css";

const Vision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fadeElements = section.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="container">
        <div className="vision-content fade-in">
          <h2>Our Vision</h2>

          <p className="vision-quote fade-in">
            "We envision a world where every child is loved, safe, and
            developing their God-given potential."
          </p>

          <div className="vision-details">
            <div className="vision-detail fade-in">
              <div className="vision-icon">📚</div>
              <h3>Education</h3>
              <p>Providing access to quality education for all children</p>
            </div>

            <div className="vision-detail fade-in">
              <div className="vision-icon">🍎</div>
              <h3>Nutrition</h3>
              <p>Ensuring children receive proper nutrition for healthy development</p>
            </div>

            <div className="vision-detail fade-in">
              <div className="vision-icon">❤️</div>
              <h3>Hope</h3>
              <p>The most essential gift of all for a bright future</p>
            </div>
          </div>

          <p className="vision-impact fade-in">
            Sponsorship can change the entire trajectory of a child's life.
          </p>

          <Link to="/sponsor" className="sponsor-btn fade-in">
            Become a Sponsor Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Vision;

