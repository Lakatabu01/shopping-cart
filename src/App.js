import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "./components/store";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  const [itemsPurchased, setItemsPurchased] = useState(0);

  const handleClick = () => {
    setItemsPurchased(itemsPurchased + 1);
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
