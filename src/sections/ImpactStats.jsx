import React, { useEffect, useRef } from "react";
import "./ImpactStats.css";

export default function ImpactStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters = sectionRef.current.querySelectorAll(".counter");
    let started = false;

    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 4000; 
        const startTime = performance.now();

        const updateCount = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); 
          const value = Math.floor(target * eased);

          
          const prefix = counter.getAttribute("data-prefix") || "";
          const suffix = counter.getAttribute("data-suffix") || "";
          counter.innerText = `${prefix}${value}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = `${prefix}${target}${suffix}`;
          }
        };

        requestAnimationFrame(updateCount);
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          animateCounters();
          sectionRef.current.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );
 
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-stats section" ref={sectionRef}>
      
      <div className="overlay"></div>

      <div className="container">
        <h2 className="section-title fade-in">Our Impact</h2>
        <p className="section-subtitle fade-in">
          For over 25 years, we've been making a difference in the lives of
          children around the world. Here's what we've accomplished together:
        </p>

        <div className="stats-grid">
          <div className="stat-item fade-in">
            <span className="counter" data-target="20000" data-suffix="+">0</span>
            <p>Children Sponsored</p>
          </div>

          <div className="stat-item fade-in">
            <span className="counter" data-target="27">0</span>
            <p>Years of Service</p>
          </div>

          <div className="stat-item fade-in">
            <span className="counter" data-target="300" data-suffix="+">0</span>
            <p>Communities Supported</p>
          </div>

          <div className="stat-item fade-in">
            <span className="counter" data-target="95" data-suffix="%">0</span>
            <p>Donations to Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}