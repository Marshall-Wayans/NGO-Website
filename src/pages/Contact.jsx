import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".contact-reveal");
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="contact-page-wrapper">
      
      <header className="contact-header">
        
        <div className="contact-floating-icons">
          <i className="floating-icon icon-mail">✉️</i>
          <i className="floating-icon icon-phone">📞</i>
          <i className="floating-icon icon-pin">📍</i>
        </div>

        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>
            Have questions or want to get involved? We’d love to hear from you.
          </p>
        </div>
      </header>

      
      <section className="contact-main-section">
        <div className="contact-grid">
          
          <div className="contact-form contact-reveal">
            <h2>Send Us a Message</h2>
            <form>
              <div className="contact-form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Sponsorship Inquiry"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

          
          <div className="contact-info contact-reveal">
            <h2>Contact Information</h2>

            <div className="contact-info-item">
              <MapPin className="contact-icon" />
              <div>
                <h3>Our Office</h3>
                <p>
                  International Child Care Mission Kenya
                  <br />
                  Nairobi, Kenya
                  <br />
                  P.O. Box 806 - 00502
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>
                  +254114285487
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <Mail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>
                  info@IccmKenya.org
                  
                </p>
              </div>
            </div>

            
            <div className="contact-socials">
              <h3>Connect With Us</h3>
              <div className="contact-social-icons">
                <a href="https://facebook.com">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

           
            <div className="contact-map contact-reveal">
              <div className="contact-map-overlay">
                <p>Map view coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="contact-faq-section">
        <h2 className="contact-reveal">Frequently Asked Questions</h2>
        <div className="contact-faq-grid">
          <div className="contact-faq-item contact-reveal">
            <h3>How does sponsorship work?</h3>
            <p>
              Your monthly contribution of $35 provides a child with education,
              nutrition, healthcare, and spiritual support. You’ll receive
              regular updates and letters from your sponsored child.
            </p>
          </div>

          <div className="contact-faq-item contact-reveal">
            <h3>How long does sponsorship last?</h3>
            <p>
              We encourage sponsors to support until education completion, but
              you can adjust or end anytime. Many sponsors build lifelong
              connections.
            </p>
          </div>

          <div className="contact-faq-item contact-reveal">
            <h3>Can I visit my sponsored child?</h3>
            <p>
              Yes! We organize sponsor visits and mission trips to Kenya where
              you can meet your sponsored child and see our work in person.
            </p>
          </div>

          <div className="contact-faq-item contact-reveal">
            <h3>How else can I get involved?</h3>
            <p>
              You can help through project donations, volunteering, fundraising,
              or advocacy. Reach out — your skills and passion matter!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}