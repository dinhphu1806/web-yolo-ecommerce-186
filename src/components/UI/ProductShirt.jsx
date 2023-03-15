import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";

const ProductShirt = () => {
  const [shirtProducts, setShirtProducts] = useState([]);

  // set shirt product to Storage
  const setShirtProductsStorage = async () => {
    try {
      const res = await client.get("/products");
      //   console.log(res.data);
      if (res.data !== "string") {
        const filterShirtProducts = res.data.filter((item) => {
          return item.category === "shirt";
        });
        // console.log(filterShirtProducts);
        localStorage.setItem("shirt", JSON.stringify(filterShirtProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get shirt products from Storage
  const getShirtProductsStorage = () => {
    const localData = localStorage.getItem("shirt");
    const d = localData !== null ? JSON.parse(localData) : [];
    console.log(d);
  };
  useEffect(() => {
    setShirtProductsStorage();
    getShirtProductsStorage();
  }, []);
  return <div>ProductShirt</div>;
};

export default ProductShirt;
