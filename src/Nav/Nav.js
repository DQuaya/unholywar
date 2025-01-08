import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav({ cartCount, cartItems, setCartItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems); // Make sure this is the correct function
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          UW
        </NavLink>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/shirts">Shirts</NavLink></li>
          <li><NavLink to="/sweaters">Sweaters</NavLink></li>
          <li onClick={togglePopup} style={{ cursor: "pointer" }}>
            <FaShoppingCart size={20} className="icon-shopping-cart" />
            <span className="cart-count">{cartCount}</span>
          </li>
        </ul>
      </div>

      {isPopupOpen && (
        <div className="cart-popup">
          <h3>Cart Items</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.category} className="cart-item-image" />
                  <div className="cart-item-details">
                    <span>{item.category}</span>  <span>{item.price.discounted}</span>
                  </div>
                  <button
                    className="remove-item-button"
                    onClick={() => handleRemoveItem(index)}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <button className="checkout-button">Check Out</button>
        </div>
      )}
    </nav>
  );
}

export default Nav;






