import React from "react";
import FoodCard from "./FoodCard";
import { foodItems } from "../food";

const categoryMap = {
  All: "all",
  Breakfast: "breakfast",
  Soup: "soup",
  Pasta: "pasta",
  "Main Course": "main_course",
  Pizza: "pizza",
  Burger: "burger",
};

function FoodMenu({ selectedCategory = "All", onAddToCart }) {
  const key = categoryMap[selectedCategory] || "all";
  const filtered =
    key === "all"
      ? foodItems
      : foodItems.filter((item) => item.category === key);

  return (
    <section className="food-menu-section">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">
            {selectedCategory === "All" ? "All Items" : selectedCategory}
          </h2>
          <p className="section-subtitle">{filtered.length} items available</p>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <span className="empty-emoji">😕</span>
            <p>No items found</p>
            <small>Try a different category</small>
          </div>
        ) : (
          <div className="food-grid">
            {filtered.map((item) => (
              <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FoodMenu;
