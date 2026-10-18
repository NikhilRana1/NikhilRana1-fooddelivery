import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <MdFastfood size={22} color="white" />
            </div>
            <span className="footer-logo-text">Food<span>ie</span></span>
          </div>
          <p className="footer-desc">
            Your favourite food, delivered hot & fresh right to your doorstep.
            Fast, reliable & delicious.
          </p>
          <div className="footer-socials">
            {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
              <button key={i} className="social-btn" aria-label="social">
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {["Home", "Menu", "About Us", "Blog", "Contact"].map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            {["Pizza", "Burgers", "Pasta", "Soup", "Breakfast", "Main Course"].map((cat) => (
              <li key={cat}><a href="#">{cat}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>📍 123 Food Street, Delhi, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@foodie.com</li>
            <li>🕐 Open: 9 AM – 11 PM</li>
          </ul>
          <div className="footer-newsletter">
            <p>Newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Go</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Foodie. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
