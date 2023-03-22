import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductFeltPants } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductFeltPants = () => {
  // const [bagProducts, setBagProducts] = useState([]);

  const dispatch = useDispatch()

  const { productFeltPants } = useSelector(state => state.products)

  // set bag to Storage
  const getProductFeltPants = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterProductFeltPants = res.data.filter(
        (item) => item.category === "felt-pants"
      );
        // console.log(filterBagProducts, '-----');
        dispatch( addProductFeltPants(filterProductFeltPants))
      // localStorage.setItem("bag", JSON.stringify(filterBagProducts));
    }
  };

  // get bag from Storage
  // const getBagProductsFromStorage = () => {
  //   const dataLocal = localStorage.getItem("bag");
  //   const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
  //   // console.log(d);
  //   setBagProducts(d);
  // };
  useEffect(() => {
    getProductFeltPants();
    // getBagProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={productFeltPants} />
    </div>
  );
};

export default ProductFeltPants;
