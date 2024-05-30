import React, { useState } from "react";
import "./navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
     <div className="navbar">
      <span className="left">BiriwaniWalla</span>
      <div className={`middle ${isOpen ? "open" : ""}`}>
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="">Blog</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Account</a>
      </div>
      <div className="right">
        <div className="cart">
          <FaCartShopping className="icon"  />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
