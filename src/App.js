import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Furnitures from "./components/Categories-pages/Furnitures";
import Electronics from "./components/Categories-pages/Electronics";
import Lamps from "./components/Categories-pages/Lamps";
import Kitchen from "./components/Categories-pages/Kitchen";
import Chairs from "./components/Categories-pages/Chairs";
import SkinCare from "./components/Categories-pages/SkinCare";
import ProductPage, { CartContext } from "./pages/ProductPage";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="cricket" element={<Furnitures />} />
          <Route path="basketball" element={<Electronics />} />
          <Route path="tennis" element={<Lamps />} />
          <Route path="running" element={<Kitchen />} />
          <Route path="football" element={<Chairs />} />
          <Route path="gym" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
