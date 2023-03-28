import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./component.css";
import cartSvg from "../assets/cart-variant.svg";
import PopUp from "./popup";

export const Header = (props) => {
  const [visible, setVisible] = useState(false);

  const logoStyle = {
    color: "#FFCBA4",
  };

  //This updates the state to make pop-up visible
  const openPopup = () => {
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <PopUp
        //populatePopup={props.populatePopup}
        productsSelected={props.productsSelected}
        close={closePopup}
        visibility={`popup ${visible ? "visible" : ""}`}
      />

      <p style={logoStyle} className="logo-style">
        Dura_glam Store
      </p>

      <div className="left-header">
        <ul>
          <Link to="/shopping-cart/">
            <li>Home</li>
          </Link>

          <NavLink
            data-testid="test-app"
            className={"link"}
            to="/shopping-cart/store"
          >
            <li>Store</li>
          </NavLink>

          <NavLink to="/shopping-cart/about">
            <li>About</li>
          </NavLink>
        </ul>

        <div onClick={openPopup} className="svg-container">
          <div className="svg-background">
            <img src={cartSvg} alt="cart icon" className="cart" />

            {/* This piece of code checks if an item 
        has been added to cart then displays a
        notification*/}
            {props.quantity > 0 ? (
              <div className="quantity">
                <div> * </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
