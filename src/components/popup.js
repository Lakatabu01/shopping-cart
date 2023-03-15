import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const PopUp = (props) => {
  const [initialCart, setInitialCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const filteredProducts = props.productsSelected.filter((object) => {
      if (initialCart) {
        const initialCartDeterminant = initialCart.find(
          (element) => element.image === object.image
        );

        return initialCartDeterminant === undefined;
      } else {
        return false;
      }
    });

    setInitialCart([...initialCart, ...filteredProducts]);
  }, [props.productsSelected]);

  useEffect(() => {
    const totPrice = initialCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    setTotal(totPrice);
  }, [initialCart]);

  return (
    <div className={props.visibility}>
      <div className="quantity-info">
        <div>
          <h1>My Shopping Cart</h1>
          <div className="scroll">
            {initialCart.map((object) => (
              <div key={uuidv4()}>
                <div>
                  <img src={object.image} alt="product" />
                  <p>{object.productTitle}</p>
                  <p>{object.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>Total: $ {total}</h3>

            <button>Checkout</button>
            <button>Back</button>
          </div>
        </div>
        <div>
          <button onClick={props.close}>X</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
