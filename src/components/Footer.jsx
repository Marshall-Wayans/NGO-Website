import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-section about">
            <h3>ICCM</h3>
            <p>
              International Child Care Ministries is dedicated to helping
              children around the world receive education, nutrition, and hope.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="social-icon facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="social-icon twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="social-icon instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="social-icon youtube"></i>
              </a>
            </div>
          </div>

          
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/sponsor">Sponsor a Child</Link>
              </li>
              <li>
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="contact-icon location"></i> 123 Hope Street,
                Nairobi, Kenya
              </li>
              <li>
                <i className="contact-icon phone"></i> +254 123 456 789
              </li>
              <li>
                <i className="contact-icon email"></i> info@iccm.org
              </li>
            </ul>
          </div>

          
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest news and events.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" required />
               <Link to="/" className="sponsor-btn">
                    Subscribe
                  </Link>
            </form>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} International Child Care Ministries. All rights
            reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}