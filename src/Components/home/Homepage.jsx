import React from "react";
import Navbar from "../header/Navbar";
import Home from "./Home";
import ProductSection from "../product/ProductSection";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ProductSection />
    </div>
  );
};

export default Homepage;
