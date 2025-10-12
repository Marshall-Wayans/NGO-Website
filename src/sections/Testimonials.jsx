import React, { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./Testimonials.css"

const Testimonials = () => {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)

  
  const testimonials = [
    {
      quote:
        "ICCM changed my life. Thanks to my sponsor, I was able to finish school and now I'm studying to become a doctor so I can help others in my community.",
      name: "Grace Mutua",
      role: "Former Sponsored Child",
      location: "Kenya",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "Sponsoring a child through ICCM has been one of the most rewarding experiences. Seeing my sponsored child grow and thrive gives me so much joy.",
      name: "Michael Johnson",
      role: "Child Sponsor",
      location: "United States",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      quote:
        "The holistic approach ICCM takes to child development has transformed our entire community. Children are healthier, more educated, and full of hope.",
      name: "Pastor James Kimani",
      role: "Community Leader",
      location: "Kenya",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  
  useEffect(() => {
    const section = sectionRef.current
    const fadeElements = section.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    fadeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-header fade-in">
          <h2>Stories of Hope</h2>
          <p>
            Hear from the children, sponsors, and communities whose lives have
            been transformed through ICCM.
          </p>
        </div>

        <div className="testimonial-card fade-in">
          <div className="testimonial-inner">
            <div className="testimonial-image">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
              />
            </div>
            <div className="testimonial-text">
              <blockquote>"{testimonials[current].quote}"</blockquote>
              <div className="testimonial-meta">
                <span className="testimonial-name">
                  {testimonials[current].name}
                </span>
                <span className="testimonial-role">
                  {testimonials[current].role}
                </span>
                <span className="testimonial-location">
                  {testimonials[current].location}
                </span>
              </div>
            </div>
          </div>

          
          <div className="testimonial-nav">
            <button onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>

          
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={index === current ? "active" : ""}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials