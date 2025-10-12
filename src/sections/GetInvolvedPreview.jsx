import React, { useEffect, useRef } from "react";
import "./GetInvolvedPreview.css";

export default function GetInvolved() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".involvement-card");
    let triggered = false;

    const revealCards = () => {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, i * 150); // stagger each card
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !triggered) {
          triggered = true;
          revealCards();
          sectionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const options = [
    {
      title: "Sponsor a Child",
      description:
        "Change a child's life through monthly sponsorship providing education, nutrition, and hope.",
      color: "yellow",
      link: "/sponsor-a-child",
      primary: true,
    },
    {
      title: "Volunteer",
      description:
        "Share your time and skills to make a difference in our programs and communities.",
      color: "blue",
      link: "/volunteer",
      primary: false,
    },
    {
      title: "Donate",
      description:
        "Support our work with a one-time or recurring gift that helps children thrive.",
      color: "green",
      link: "/donate",
      primary: false,
    },
    {
      title: "Partnerships",
      description:
        "Partner with us as an organization to create lasting change for children in need.",
      color: "purple",
      link: "/partnerships",
      primary: false,
    },
  ];

  return (
    <section className="get-involved section" ref={sectionRef}>
      <div className="container">
        <div className="intro-text fade-in">
          <h2 className="section-title">Get Involved</h2>
          <p className="section-subtitle">
            There are many ways to support our mission and make a difference in
            the lives of children. Join us in creating a brighter future for
            them.
          </p>
        </div>

        <div className="involvement-cards">
          {options.map((option, i) => (
            <div
              key={i}
              className={`involvement-card ${
                option.primary ? "highlight" : ""
              }`}
            >
              <div className={`card-bar ${option.color}`}></div>
              <div className="card-content">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <a
                  href={option.link}
                  className={`btn ${
                    option.primary ? "primary-btn" : "secondary-btn"
                  }`}
                >
                  {option.primary ? "Sponsor Now" : "Learn More"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}