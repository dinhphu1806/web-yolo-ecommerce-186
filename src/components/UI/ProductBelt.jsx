import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductBelt = () => {
  const [beltProducts, setBeltProducts] = useState([]);

  // set bag to Storage
  const setBeltProductsToStorage = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterBeltProducts = res.data.filter(
        (item) => item.category === "belt"
      );
      //   console.log(filterBagProducts);
      localStorage.setItem("belt", JSON.stringify(filterBeltProducts));
    }
  };

  // get bag from Storage
  const getBeltProductsFromStorage = () => {
    const dataLocal = localStorage.getItem("belt");
    const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
    // console.log(d);
    setBeltProducts(d);
  };
  useEffect(() => {
    setBeltProductsToStorage();
    getBeltProductsFromStorage();
  }, []);
  return (
    <div>
      <ProductList data={beltProducts} />
    </div>
  );
};

export default ProductBelt;
