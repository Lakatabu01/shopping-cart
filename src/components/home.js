import React from "react";
import homeImage from "../assets/model.jpg";

export const Home = () => {
  return (
    <div>
      <div className="home-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          omnis et? Eaque voluptatum culpa mollitia ipsa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad
          esse ducimus neque voluptate nobis.
        </p>
      </div>

      <div>
        <img src={homeImage} alt="Woman with shopping bags" />
      </div>
    </div>
  );
};
