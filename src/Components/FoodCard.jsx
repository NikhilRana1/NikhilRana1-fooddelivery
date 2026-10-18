import React, { useState } from "react";
import { FaStar, FaClock, FaPlus, FaHeart, FaCheck } from "react-icons/fa";

const tagClass = {
  "Bestseller": "tag-bestseller",
  "Popular":    "tag-popular",
  "Spicy":      "tag-spicy",
  "Healthy":    "tag-healthy",
  "Must Try":   "tag-musttry",
  "Chef's Pick":"tag-chefspick",
  "New":        "tag-new",
  "Veg":        "tag-veg",
};

function FoodCard({ item, onAddToCart }) {
  const [liked, setLiked]   = useState(false);
  const [added, setAdded]   = useState(false);

  const handleAdd = () => {
    if (added) return;
    setAdded(true);
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleLike = () => {
    setLiked(prev => !prev);
  };

  return (
    <div className="food-card">
      {/* ── Image Area ── */}
      <div className="food-card-img">
        <span className="food-emoji">{item.emoji}</span>

        <span className={`food-tag ${tagClass[item.tag] || ""}`}>
          {item.tag}
        </span>

        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
          aria-label="Like this item"
        >
          <FaHeart color={liked ? "#ef4444" : "#d1d5db"} size={14} />
        </button>
      </div>

      {/* ── Body ── */}
      <div className="food-card-body">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-desc">{item.desc}</p>

        <div className="food-meta">
          <span>
            <FaStar className="star-icon" size={13} />
            <span className="rating-val">{item.rating}</span>
          </span>
          <span>
            <FaClock className="clock-icon" size={13} />
            {item.time}
          </span>
        </div>

        <div className="food-footer">
          <div>
            <div className="food-price-label">Price</div>
            <div className="food-price">₹{item.price}</div>
          </div>

          <button
            className={`btn-add ${added ? "added" : ""}`}
            onClick={handleAdd}
            aria-label="Add to cart"
          >
            {added ? (
              <>
                <FaCheck size={12} />
                Added!
              </>
            ) : (
              <>
                <FaPlus size={11} className="plus-icon" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
