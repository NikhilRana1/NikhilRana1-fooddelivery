import React, { useState } from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import FoodMenu from "../Components/FoodMenu";
import Footer from "../Components/Footer";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="bg-white w-full min-h-screen font-sans">
      <Nav cartCount={cartCount} />
      <Hero />
      <CategorySection onSelect={setSelectedCategory} />
      <FoodMenu selectedCategory={selectedCategory} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default Home;
