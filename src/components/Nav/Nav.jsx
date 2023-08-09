import React from "react";
import "../Nav/Nav.scss";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <Link to="/" className="nav_left">
              <img src={logo} alt="Organic_Logo" />
              <h1>Organic</h1>
            </Link>
            <div className="nav_center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Service</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/news">News</Link>
            </div>
            <div className="nav_right">
              <Link to="/login">
                <button className="log_btn">Log In</button>
              </Link>

              <Link to="/cart">
                <button className="cart_btn">
                  <img src={cart} alt="Shopping-Cart" />
                  Cart (0)
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
