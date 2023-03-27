import React from "react";
import { NavLink } from "react-router-dom";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-div">
        Welcome to our shopping cart! We are a team dedicated to providing you
        with a seamless and enjoyable online shopping experience. Our
        user-friendly website offers a wide selection of high-quality products
        at great prices. Our top priority is exceptional customer service, and
        we're always available to answer your questions. Thank you for choosing
        our shopping cart for all your online shopping needs!
      </div>

      <div className="socials">
        <NavLink to="https://github.com/Lakatabu01">
          <div>
            <img className="sm" src={github} alt="" />
          </div>
        </NavLink>

        <NavLink to="https://twitter.com/lakatabu01">
          <img className="sm" src={twitter} alt="" />
        </NavLink>

        <NavLink to="https://www.linkedin.com/in/bamgbade-olanrewaju-072a7a20a/">
          <img className="sm" src={linkedin} alt="" />
        </NavLink>

        <NavLink to="https://web.facebook.com/bamgbade.olanrewaju">
          <img className="sm" src={facebook} alt="" />
        </NavLink>
      </div>
    </div>
  );
};
