import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductShoes = () => {
  const [shoeProducts, setShoeProducts] = useState([]);
  // set shoe in Storage
  const setShoeProductsToStorage = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterShoeProducts = res.data.filter(
        (item) => item.category === "shoe"
      );
      //   console.log(filterShoeProducts);
      localStorage.setItem("shoe", JSON.stringify(filterShoeProducts));
    }
  };

  // get shoe from Storage
  const getShoeProductsFromStorage = () => {
    const localData = localStorage.getItem("shoe");
    const d = localData !== null ? JSON.parse(localData) : [];
    // console.log(d);
    setShoeProducts(d);
  };

  useEffect(() => {
    setShoeProductsToStorage();
    getShoeProductsFromStorage();
  }, []);
  return (
    <div>
      <ProductList data={shoeProducts} />
    </div>
  );
};

export default ProductShoes;
