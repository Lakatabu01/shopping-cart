import React from "react";
import homeImage from "../assets/model.jpg";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <p>
          Welcome to our shopping cart - your one-stop destination for all your
          shopping needs! With our wide range of products, competitive prices,
          and easy-to-use platform, we make shopping a breeze. Whether you're
          looking for trendy fashion, cutting-edge technology, or everyday
          household essentials, we've got you covered.
        </p>
        <p>
          Our user-friendly interface allows you to browse through thousands of
          products with ease, add items to your cart, and checkout securely in
          just a few clicks. So why wait? Start shopping now and experience the
          convenience and affordability of our shopping cart!
        </p>

        <NavLink to="/store">
          <button className="button-17">Lets Go</button>
        </NavLink>
      </div>

      <div>
        <img
          className="dominant-img"
          src={homeImage}
          alt="Woman with shopping bags"
        />
      </div>
    </div>
  );
};
