import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductBelts } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductBelt = () => {
  // const [beltProducts, setBeltProducts] = useState([]);

  const dispatch = useDispatch()
  const {  productBelts } = useSelector(state => state.products)

  // set bag to Storage
  const getBeltProducts = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterBeltProducts = res.data.filter(
        (item) => item.category === "belt"
      );
      //   console.log(filterBagProducts);
      // console.log(filterBeltProducts, '------');

      dispatch(addProductBelts(filterBeltProducts))
      // localStorage.setItem("belt", JSON.stringify(filterBeltProducts));
    }
  };

  // get bag from Storage
  // const getBeltProductsFromStorage = () => {
  //   const dataLocal = localStorage.getItem("belt");
  //   const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
  //   // console.log(d);
  //   setBeltProducts(d);
  // };
  useEffect(() => {
    getBeltProducts();
    // getBeltProductsFromStorage();
  }, []);
  return (
    <div>
      <ProductList data={productBelts} />
    </div>
  );
};

export default ProductBelt;
