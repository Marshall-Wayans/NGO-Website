import React, { useEffect, useRef, useState } from "react";
import "./Sponsor.css";
import { BookOpenIcon, HeartIcon, HomeIcon } from "lucide-react";

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

export default function Sponsor() {
  const fadeRefs = useScrollFadeIn("sponsor-visible");
  const [filters, setFilters] = useState({ age: "", gender: "", region: "" });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="sponsor-wrapper">
      
      <section className="sponsor-hero sponsor-fade" ref={(el) => fadeRefs.current.push(el)}>
        <div className="sponsor-hero-overlay"></div>
        <div className="sponsor-hero-bg"></div>
        <div className="sponsor-hero-content">
          <h1>Sponsor a Child. Change a Life.</h1>
          <p>Give hope, education, and opportunity starting at $38/month.</p>
          <button
            className="sponsor-btn-primary"
            onClick={() =>
              document.getElementById("lookup-section")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Find a Child to Sponsor
          </button>
        </div>
      </section>

     
      <section className="sponsor-info sponsor-fade" ref={(el) => fadeRefs.current.push(el)}>
        <p>
          You can sponsor a child starting at <strong>$38/month</strong>. Children aged 13–14 are a
          priority — your support helps them complete primary education.
        </p>
        <div className="sponsor-info-grid">
          <div className="sponsor-card">
            <div className="sponsor-icon">
              <BookOpenIcon />
            </div>
            <h3>Education</h3>
            <p>Your sponsorship provides school fees, supplies, and mentorship.</p>
          </div>

          <div className="sponsor-card">
            <div className="sponsor-icon">
              <HeartIcon />
            </div>
            <h3>Nutrition & Care</h3>
            <p>Ensuring every child grows in a safe, healthy environment.</p>
          </div>

          <div className="sponsor-card">
            <div className="sponsor-icon">
              <HomeIcon />
            </div>
            <h3>Faith & Community</h3>
            <p>Partnering with local churches to nurture every child's full potential.</p>
          </div>
        </div>
      </section>

      
      <section className="sponsor-priority sponsor-fade" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Older children (ages 13 & 14) need sponsors the most</h2>
        <p>Help them finish their journey with dignity and hope.</p>
        <button className="sponsor-btn-secondary">Sponsor an Older Child</button>
      </section>

      
      <section id="lookup-section" className="sponsor-lookup sponsor-fade" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Find a Child to Sponsor</h2>
        <div className="sponsor-filters">
          <select name="age" value={filters.age} onChange={handleFilterChange}>
            <option value="">All Ages</option>
            <option value="5-8">5-8 years</option>
            <option value="9-12">9-12 years</option>
            <option value="13-14">13-14 years (Priority)</option>
          </select>
          <select name="gender" value={filters.gender} onChange={handleFilterChange}>
            <option value="">All Genders</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
          <select name="region" value={filters.region} onChange={handleFilterChange}>
            <option value="">All Regions</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
            <option value="kisumu">Kisumu</option>
          </select>
        </div>

        <div className="sponsor-grid">
          {[
            {
              name: "Faith",
              age: 13,
              region: "Nairobi",
              img: "https://images.unsplash.com/photo-1548187669-0b84908e5035?auto=format&fit=crop&w=1770&q=80",
              quote: "I love mathematics and hope to become a doctor one day.",
            },
            {
              name: "Daniel",
              age: 14,
              region: "Mombasa",
              img: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&w=1770&q=80",
              quote: "I enjoy studying science and want to be an engineer.",
            },
            {
              name: "Grace",
              age: 12,
              region: "Kisumu",
              img: "https://images.unsplash.com/photo-1604006852748-903fccbc4019?auto=format&fit=crop&w=1770&q=80",
              quote: "I love reading stories and singing in the church choir.",
            },
          ].map((child, i) => (
            <div key={i} className="sponsor-child-card">
              <div className="sponsor-child-img">
                <img src={child.img} alt={child.name} />
                <div className="sponsor-child-overlay">
                  <h3>{child.name}</h3>
                  <p>{child.age} years • {child.region}</p>
                </div>
              </div>
              <p className="sponsor-quote">“{child.quote}”</p>
              <button className="sponsor-btn-primary">Sponsor {child.name}</button>
            </div>
          ))}
        </div>
      </section>

      
      <section className="sponsor-cta sponsor-fade" ref={(el) => fadeRefs.current.push(el)}>
        <h2>Give hope today.</h2>
        <p>Start your sponsorship and see lives transformed.</p>
        <div className="sponsor-cta-buttons">
          <button className="sponsor-btn-primary">Sponsor a Child</button>
          <button className="sponsor-btn-outline">Contact Us</button>
        </div>
      </section>
    </div>
  );
}