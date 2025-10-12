import React, { useEffect, useRef } from "react";
import "./Partners.css";
import wunders from "../assets/wunders.jpg";
import scripture from "../assets/scripture.png";

const partners = [
  {
    id: 1,
    name: "Wunders Foundation",
    logo: wunders,
  },
  {
    id: 2,
    name: "Scripture Union",
    logo: scripture,
  },
];

export default function Partners() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".partner-card");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

 
  useEffect(() => {
    const cards = document.querySelectorAll(".partner-card");
    cards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / 20).toFixed(2);
        const rotateY = ((centerX - x) / 20).toFixed(2);
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
      });
    });
  }, []);

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-header">
        <h2>Our Partners</h2>
        <p>
          We collaborate with trusted global organizations to create lasting impact.
        </p>
      </div>

      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <h3>{partner.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
