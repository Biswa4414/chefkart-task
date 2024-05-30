import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendarAlt, FaClock, FaStar, FaLeaf } from "react-icons/fa";
import "./product.css";
import biryaniImg from "../assets/biri-home.jpg";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
        );
        console.log("API Response:", response.data);

        if (
          response.data &&
          response.data.dishes &&
          response.data.popularDishes
        ) {
          setDishes(response.data.dishes);
          setPopularDishes(response.data.popularDishes);
          setError(null);
        } else {
          setError("Invalid response data");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-section">
      <h1>Select Dishes</h1>
      <div className="calendar-clock">
        <div className="calendar">
          <FaCalendarAlt />
          <p>21 May 2021</p>
        </div>
        <div className="clock">
          <FaClock />
          <p>10:30 AM - 12:30 PM</p>
        </div>
      </div>
      <div className="options">
        <div className="option-buttons">
          <button>Indian</button>
          <button>Italian</button>
          <button>Chinese</button>
          <button>Indian</button>
          <button>Italian</button>
          <button>Chinese</button>
        </div>
      </div>
      <h2 className="popular-heading">Popular Dishes</h2>
      {error && <p className="error">{error}</p>}
      <div className="popular-dishes">
        <div className="popular-dish">
          <img src={biryaniImg} alt="Biryani" className="circle-img" />
          <div className="overlay">Biryani</div>
        </div>
        {popularDishes.map((dish, index) => (
          <div key={index} className="popular-dish">
            <img src={dish.image} alt={dish.name} className="circle-img" />
            <div className="overlay">{dish.name}</div>
          </div>
        ))}
      </div>
      <h2 className="recommended-heading">Recommended Dishes</h2>
      <div className="recommended-dishes">
        {dishes.map((dish, index) => (
          <div key={index} className="recommended-dish">
            <div className="recommended-info">
              <div className="dish-header">
                <p>{dish.name}</p>
                <div className="rating-icons">
                  <FaStar /> {dish.rating}
                  <FaLeaf className="veg-icon" />
                </div>
              </div>
              <div className="refrigerator-icons">
                <CgSmartHomeRefrigerator />
                <CgSmartHomeRefrigerator />
              </div>
              <Link to={"/ingredient"}>
                <button className="ingredients-button">Ingredients</button>
              </Link>
              <p className="description">{dish.description}</p>
            </div>
            <div className="recommended-img">
              <img src={dish.image} alt={dish.name} />
            </div>
          </div>
        ))}
      </div>
      <Link to={"/ingredient"}>
        <button className="select">3 food items selected →</button>
      </Link>
    </div>
  );
};

export default ProductSection;
