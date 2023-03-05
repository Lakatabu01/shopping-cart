import React, { useEffect, useState } from "react";

//i need to figure out how it wont affect in production because
// the api needs to first of all fetch before it can render to the UI
//commit the code

export const Store = () => {
  useEffect(() => {
    fetchInfo();
  }, []);

  const [products, setProducts] = useState(null);

  const fetchInfo = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const refinedData = await data.json();
    setProducts(refinedData);
    console.log(refinedData);
  };

  //Display Loading while waiting for for the API to fetch
  if (!products) {
    return <div>Loading...</div>;
  }
  //loop through the state and return image and price of the products
  return (
    <div>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="cloth" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <div>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
