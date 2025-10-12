import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MissionValues.css';


gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const missionRef = useRef(null);

  
  const principles = [
    { name: 'Community', icon: '👪' },
    { name: 'Humility', icon: '🙏' },
    { name: 'Integrity', icon: '⚖️' },
    { name: 'Image of God', icon: '✨' },
    { name: 'Family', icon: '🏠' },
    { name: 'Watchfulness', icon: '👀' },
    { name: 'Giving Voice', icon: '🗣️' },
    { name: 'The Transforming Gospel', icon: '📖' },
    { name: 'Creation', icon: '🌱' },
    { name: 'Generosity', icon: '🤲' },
    { name: 'Stewardship', icon: '🌍' },
    { name: 'Flexibility', icon: '🌊' },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.principle-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
     
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="mission section" ref={missionRef}>
      <div className="container">
        <h2 className="text-center">Our Core Principles</h2>
        <p className ="text-center"> We envision a world where every child is loved, safe, and developing their God-given potential. Through sponsorship, we provide education, supplies, nutrition, and activities for holistic development.</p>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div className="principle-card" key={index}>
              <div className="principle-icon">{principle.icon}</div>
              <h3 className="principle-name">{principle.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;