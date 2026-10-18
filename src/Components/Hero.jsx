import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">

        {/* ── Left ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Free delivery on first order 🎉
          </div>

          <h1 className="hero-title">
            Delicious Food{" "}
            <span className="highlight">Delivered</span>
            <br />
            To Your Door 🚪
          </h1>

          <p className="hero-desc">
            Order from the best restaurants near you. Fresh food, fast delivery,
            unbeatable taste — every single time.
          </p>

          <div className="hero-buttons">
            <button className="btn-hero-primary">
              <span>Order Now</span>
              <FaArrowRight size={14} className="btn-icon" />
            </button>
            <button className="btn-hero-secondary">
              <span>View Menu</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Restaurants</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">4.9 ⭐</span>
              <span className="stat-label">App Rating</span>
            </div>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="hero-right">
          <div className="hero-circle">🍕</div>

          <div className="hero-float-card top-left">
            <MdDeliveryDining size={30} color="#22c55e" />
            <div>
              <div className="float-label">Delivery Time</div>
              <div className="float-value">30 min</div>
            </div>
          </div>

          <div className="hero-float-card middle-right">
            <FaStar size={22} color="#facc15" />
            <div>
              <div className="float-label">Rating</div>
              <div className="float-value">4.9 / 5.0</div>
            </div>
          </div>

          <div className="hero-float-card bottom-right">
            <BiTimeFive size={24} color="#fb923c" />
            <div>
              <div className="float-label">Live Orders</div>
              <div className="float-value">2.4k Active</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
