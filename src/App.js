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

  //Get right information to update productsSelected state
  const handleClick = (e) => {
    setItemsPurchased(itemsPurchased + 1);
    let productInfo = {
      image: e.target.parentNode.parentNode.firstChild.firstChild.src,
      productTitle:
        e.target.parentNode.parentNode.firstChild.lastChild.textContent,
      price: parseInt(
        e.target.parentNode.previousElementSibling.lastChild.textContent
      ),
      quantity: 1,
    };
    setProductsSelected((prevProducts) => [...prevProducts, productInfo]);
  };

  return (
    <BrowserRouter>
      <div data-testid="test-all" className="App">
        <Header quantity={itemsPurchased} productsSelected={productsSelected} />
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
