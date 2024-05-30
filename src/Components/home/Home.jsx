import React from "react";
import "./home.css";
import biryaniImage from "../assets/240_F_441200344_iTkgSlBqkep1bcSmdWXTA1ZkCRFl9J6a.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Biryani...</h1>
        <h2> Khaaya Kya?</h2>
        <p>
          Biryani is a mixed rice dish originating among the Indian subcontinent.
          It is made with Indian spices, rice, and usually some type of meat.
          Biryani is one of the most popular dishes in South Asia.
          <br />
          <br />
          <strong>Buy One Get One Free on all Biryani for just ₹279!</strong>
        </p>
        <button className="order-button">Order Online <span className="arrow">→</span></button>
      </div>
      <div className="image-container">
        <img className="biryani-image" src={biryaniImage} alt="Biryani" />
      </div>
      <div className="additional-content">
        <h2>What our customers say</h2>
        <div className="testimonial">
          <p>"The biryani here is amazing! I've been ordering from them for years and it never disappoints."</p>
          <p className="customer">- John Doe</p>
        </div>
        <div className="testimonial">
          <p>"Absolutely delicious! The flavors are just perfect and the portion sizes are generous."</p>
          <p className="customer">- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
