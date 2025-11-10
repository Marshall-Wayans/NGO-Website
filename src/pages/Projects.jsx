import React, { useEffect, useRef } from "react";
import "./Projects.css";
import distribution from "../assets/distribution.jpg";
import study from "../assets/biblestudy.jpg";
import backpack from "../assets/backpack.jpg";
import water from "../assets/water.jpg";
import foodrive from "../assets/foodrivee.jpg";
import animal from "../assets/Animal.jpg";
import build from "../assets/building.jpg";

const projects = [
  {
    id: 1,
    title: "Shoe Distribution",
    category: "Distribution",
    description:
      "Delivering quality shoes to underprivileged children,\nensuring comfort, dignity, and safety as they walk long distances to school each day.",
    image: distribution,
  },
  {
    id: 2,
    title: "Vocational Bible Study",
    category: "Bible Study",
    description:
      "Equipping young people with practical vocational skills\nwhile nurturing their spiritual growth through Bible-based mentorship and community service.",
    image: study,
  },
  {
    id: 3,
    title: "Clean Water",
    category: "Development",
    description:
      "Installing boreholes and water systems\nfor schools and communities to improve health and learning environments.",
    image: water,
  },
  {
    id: 4,
    title: "Backpack Distribution",
    category: "Distribution",
    description:
      "Providing students with essential school backpacks filled with learning materials,\nto encourage school attendance and promote equal learning opportunities for all children.",
    image: backpack,
  },
  {
    id: 5,
    title: "Food Drive",
    category: "Togetherness",
    description:
      "Covid-19 saw many families struggle to get their daily meal.\nThere were massive job losses, business closures, and disruptions to family life.\nFood security was the most affected.\nICCM Kenya responded by purchasing shopping vouchers redeemable for food items at supermarkets.\nIn rural areas, food was bought and shared among families by ICCM staff.",
    image: foodrive,
  },
  {
    id: 6,
    title: "Animal Projects",
    category: "Projects",
    description:
      "Animals benefit children at ICCM Kenya by producing nutritional and economic benefits for their families.\nWe have issued cows and chickens to some of our children.\nThey rear these animals and get milk, eggs, and more chickens for sale and consumption.",
    image: animal,
  },
  {
    id: 7,
    title: "Building and Repairs",
    category: "Projects",
    description:
      "ICCM Kenya has helped restore the image of some of our schools through building and repairs of classrooms.\nRecently, a classroom collapsed due to heavy rains in Masat, Siaya County.\nWe were able to rebuild it before schools reopened.\nWe have also built classrooms in Mathare and Kibera Free Methodist Schools, and a toilet in Kibera Free Methodist School.",
    image: build,
  },
];

const milestones = [
  { year: "1996", event: "First school partnership established in Nairobi" },
  { year: "2000", event: "Launched school meals program" },
  { year: "2005", event: "Expanded to 5 schools across Kenya" },
  { year: "2010", event: "Implemented first computer literacy program" },
  { year: "2015", event: "Reached 10,000 children milestone" },
  { year: "2020", event: "Established clean water initiative" },
  { year: "2023", event: "Supporting 13 schools and 400+ children" },
];

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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [className]);

  return elementsRef;
};

export default function Projects() {
  const fadeRefs = useScrollFadeIn("projects-visible");

  return (
    <div className="projects-wrapper">
     
      <div className="projects-header projects-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <h1>Our Projects</h1>
        <p>
          Discover the initiatives we undertake to support children's education,
          nutrition, community development, and empowerment across Kenya.
        </p>
      </div>

     
      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="projects-card projects-fade-in"
              ref={(el) => fadeRefs.current.push(el)}
            >
              <div className="projects-card-image">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="projects-card-content">
                <div className="projects-category">{proj.category}</div>
                <h3>{proj.title}</h3>
                <p>
                  {proj.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="projects-milestones">
        <h2 className="projects-fade-in" ref={(el) => fadeRefs.current.push(el)}>
          Our Journey
        </h2>
        <div className="projects-timeline">
          {milestones.map((mile, index) => (
            <div
              key={index}
              className="projects-timeline-item projects-fade-in"
              ref={(el) => fadeRefs.current.push(el)}
            >
              <span className="projects-timeline-year">{mile.year}</span>
              <div className="projects-timeline-event">{mile.event}</div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="projects-cta projects-fade-in" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Get Involved</h2>
        <p>
          Join us in empowering children and communities across Kenya through
          education, health, and development programs.
        </p>
        <div className="projects-cta-buttons">
          <a href="/sponsor" className="projects-btn sponsor">
            Sponsor a Child
          </a>
          <a href="/contact" className="projects-btn contact">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
