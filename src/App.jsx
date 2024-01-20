import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import ShowProduct from "./components/ShowProduct";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <>
      <Router>
        <ProductProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ShowProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ProductProvider>
      </Router>
    </>
  );
}

export default App;
