import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductBags = () => {
  const [bagProducts, setBagProducts] = useState([]);

  // set bag to Storage
  const setBagProductsToStorage = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterBagProducts = res.data.filter(
        (item) => item.category === "bag"
      );
      //   console.log(filterBagProducts);

      localStorage.setItem("bag", JSON.stringify(filterBagProducts));
    }
  };

  // get bag from Storage
  const getBagProductsFromStorage = () => {
    const dataLocal = localStorage.getItem("bag");
    const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
    // console.log(d);
    setBagProducts(d);
  };
  useEffect(() => {
    setBagProductsToStorage();
    getBagProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={bagProducts} />
    </div>
  );
};

export default ProductBags;
