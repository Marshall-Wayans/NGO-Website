import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './HeroSection.css';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      );

    return () => tl.kill();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 ref={headlineRef}>Changing Lives, One Child at a Time</h1>
        <p ref={subtextRef}>
          Join us in creating a world where every child is loved, safe, and thriving.
        </p>
        <div className="hero-buttons" ref={buttonsRef}>
          <Link to="/sponsor" className="primary-button">
            Sponsor a Child
          </Link>
          <Link to="/about" className="secondary-button">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}