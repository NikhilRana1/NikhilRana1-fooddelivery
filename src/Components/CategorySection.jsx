import React, { useState } from "react";
import Categories from "../Category";

function CategorySection({ onSelect }) {
  const [activeId, setActiveId] = useState(1);

  const handleClick = (item) => {
    setActiveId(item.Id);
    if (onSelect) onSelect(item.name);
  };

  return (
    <section className="category-section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Browse Categories</h2>
          <p className="section-subtitle">What are you craving today?</p>
        </div>

        <div className="category-scroll scrollbar-hide">
          {Categories.map((item) => (
            <button
              key={item.Id}
              className={`cat-btn ${activeId === item.Id ? "active" : ""}`}
              onClick={() => handleClick(item)}
            >
              <span className="cat-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
