import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductShorts } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductShorts = () => {
  // const [bagProducts, setBagProducts] = useState([]);

  const dispatch = useDispatch()

  const { productShorts } = useSelector(state => state.products)

  // set bag to Storage
  const getShortProducts = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterShortProducts = res.data.filter(
        (item) => item.category === "short"
      );
        // console.log(filterBagProducts, '-----');
        dispatch( addProductShorts(filterShortProducts))
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
    getShortProducts();
    // getBagProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={productShorts} />
    </div>
  );
};

export default ProductShorts;
