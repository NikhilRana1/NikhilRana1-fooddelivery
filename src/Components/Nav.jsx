import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <MdFastfood size={24} color="white" />
          </div>
          <span className="nav-logo-text">Food<span>ie</span></span>
        </div>

        {/* Search */}
        <form className="nav-search">
          <FaSearch color="#22c55e" size={16} />
          <input type="text" placeholder="Search for food, restaurants..." />
        </form>

        {/* Right */}
        <div className="nav-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn-order">Order Now</button>

          <button className="nav-cart">
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <MdOutlineShoppingCart size={22} color="#22c55e" />
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-search">
          <FaSearch color="#22c55e" size={14} />
          <input type="text" placeholder="Search for food..." />
        </div>
        <button className="btn-signin" style={{ textAlign: "left" }}>Sign In</button>
        <button className="btn-order" style={{ width: "100%" }}>Order Now</button>
      </div>
    </nav>
  );
}

export default Nav;
