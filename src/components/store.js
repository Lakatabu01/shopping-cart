import React, { useEffect, useState } from "react";
import { fetchProduct } from "./api";
import loadGif from "../assets/loading.gif";

export const Store = (props) => {
  useEffect(() => {
    fetchInfo();
  }, []);

  const [products, setProducts] = useState(null);

  const fetchInfo = async () => {
    const data = await fetchProduct();
    setProducts(data);
    console.log(data);
  };

  //Display Loading while waiting for for the API to fetch
  if (!products) {
    return (
      <div className="gif-div">
        <img src={loadGif} alt="gif" />
      </div>
    );
  }
  //loop through the state and return image and price of the products
  return (
    <div>
      <div className="products-tray">
        {products.map((item) => (
          <div key={item.id}>
            <div className="each-item">
              <div>
                <img className="products-img" src={item.image} alt="cloth" />
                <p>{item.title}</p>
              </div>

              <div className="price">
                <p>$</p>
                <p> {item.price}</p>
              </div>

              <div className="btn-div">
                <button className="cart-button" onClick={props.count}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
