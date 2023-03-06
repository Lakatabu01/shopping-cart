import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./component.css";
import cartSvg from "../assets/cart-variant.svg";

export const Header = (props) => {
  const logoStyle = {
    color: "#FFFF00",
  };

  return (
    <div className="header">
      <p style={logoStyle}>Top Store</p>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <NavLink to="/store">
          <li>Store</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>
      </ul>

      <div className="svg-container">
        <div className="svg-background">
          <img src={cartSvg} alt="cart icon" className="cart" />

          {/* This piece of code checks if an item 
        has been added to cart then displays a
        notification*/}
          {props.quantity > 0 ? (
            <div className="quantity">
              <div> {props.quantity} </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
