import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "./components/store";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  const [itemsPurchased, setItemsPurchased] = useState(0);
  const [productsSelected, setProductsSelected] = useState([]);

  useEffect(() => {
    console.log(productsSelected);
  }, [productsSelected]);

  //Get information of the products added to cart and
  //put it in a state
  const handleClick = (e) => {
    setItemsPurchased(itemsPurchased + 1);
    let productInfo = {
      image: e.target.parentNode.previousElementSibling.firstChild.src,
      productTitle:
        e.target.parentNode.previousElementSibling.children[1].textContent,
      price: parseInt(
        e.target.parentNode.previousElementSibling.children[2].textContent
      ),
    };
    setProductsSelected((prevProducts) => [...prevProducts, productInfo]);
  };

  return (
    <BrowserRouter>
      <div data-testid="test-app" className="App">
        <Header quantity={itemsPurchased} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store count={handleClick} items={itemsPurchased} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
