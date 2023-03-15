import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductTrousers = () => {
  const [trouserProducts, setTrouserProducts] = useState([]);

  const setTrousersToStorage = async () => {
    try {
      const res = await client.get("/products");
      //   console.log(res.data);
      if (res.data !== "string") {
        const filterTrousers = res.data.filter((item) => {
          return item.category === "trousers";
        });
        // console.log(filterTrousers);
        localStorage.setItem("trouser", JSON.stringify(filterTrousers));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTrousersFromStorage = () => {
    const dataLocal = localStorage.getItem("trouser");
    const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
    // console.log(d);
    setTrouserProducts(d);
  };

  useEffect(() => {
    setTrousersToStorage();
    getTrousersFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={trouserProducts} />
    </div>
  );
};

export default ProductTrousers;
