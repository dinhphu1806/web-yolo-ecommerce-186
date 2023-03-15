import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductHats = () => {
  const [hatProducts, setHatProducts] = useState([]);

  // set hat in localStorage
  const setHatProductsToStorage = async () => {
    try {
      const res = await client.get("/products");
      // console.log(res.data);
      if (typeof res.data !== "string") {
        const filterHatProducts = res.data.filter(
          (item) => item.category === "hat"
        );
        localStorage.setItem("hat", JSON.stringify(filterHatProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get hat from Storage
  const getHatProductsFromStorage = () => {
    try {
      const dataLocal = localStorage.getItem("hat"); // console.log(dataLocal);
      const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
      // console.log(d);
      // setProducts(d); // setCoat
      // setLoading(false);
      setHatProducts(d);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setHatProductsToStorage();
    getHatProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={hatProducts} />
    </div>
  );
};

export default ProductHats;
