import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Shop from "../pages/Shop";

import client from "../api/axiosClient";
import Checkout from "../pages/Checkout";
import Clothes from "../pages/Clothes";

const Router = () => {
  const [products, setProducts] = useState([]);

  const setProductsToStorage = async () => {
    try {
      const res = await client.get("/products");
      // console.log(res.data);
      if (res.data !== "string") {
        localStorage.setItem("productDetails", JSON.stringify(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsFromStorage = () => {
    const localData = localStorage.getItem("productDetails");
    const d = localData !== null ? JSON.parse(localData) : [];
    // console.log(d);
    setProducts(d);
  };

  useEffect(() => {
    setProductsToStorage();
    getProductsFromStorage();
  }, []);

  // console.log(products);
  return (
    <Routes>
      <Route index exact path="/" element={<Home />} />
      {/* <Route path="/shop" element={<Shop productData={products} />} /> */}
      {/* <Route
        path="/shop/:id"
        element={<ProductDetails products={products} />}
      /> */}
      <Route path="/news" element={<News />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Clothes products={products} />} />
      <Route
        path="/shop/:id"
        element={<ProductDetails products={products} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
