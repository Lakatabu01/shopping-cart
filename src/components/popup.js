import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const PopUp = (props) => {
  const [initialCart, setInitialCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Checks if the product image has not been displayed
  //to prevent multiple renders of same image
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

  //This sums up the total price of items added to cart
  useEffect(() => {
    const totPrice = initialCart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);

    setTotal(totPrice);
  }, [initialCart]);

  const productNumber = {
    margin: "2px",
    width: "20px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(233, 231, 231)",
    alignItems: "center",
    padding: "10px",
  };

  return (
    <div className={props.visibility}>
      <div className="quantity-info">
        <div>
          <h1>My Shopping Cart</h1>
          <div className="scroll">
            {initialCart.map((object) => (
              <div className="carted" key={uuidv4()}>
                <div className="carted-info">
                  <img
                    className="products-img"
                    src={object.image}
                    alt="product"
                  />
                  <p>{object.productTitle}</p>
                  <p>$ {object.price}</p>
                </div>

                <div className="increment">
                  <button
                    className="minus"
                    onClick={() => {
                      if (object.quantity > 0) {
                        const updatedCart = initialCart.map((item) => {
                          if (item.image === object.image) {
                            return { ...item, quantity: item.quantity - 1 };
                          }
                          return item;
                        });
                        setInitialCart(updatedCart);
                      }
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <div style={productNumber}> {object.quantity} </div>
                  <button
                    className="plus"
                    onClick={() => {
                      if (object.quantity > -1) {
                        const updatedCart = initialCart.map((item) => {
                          if (item.image === object.image) {
                            return { ...item, quantity: item.quantity + 1 };
                          }
                          return item;
                        });
                        setInitialCart(updatedCart);
                      }
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>Total: $ {total}</h3>

            <button className="checkout-btn">Checkout</button>
            <button className="bck-btn">Back</button>
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
