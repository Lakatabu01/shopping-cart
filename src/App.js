import "./App.css";
import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Store } from "./components/store";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Footer } from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
