import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductJeans } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductJeans = () => {
  // const [bagProducts, setBagProducts] = useState([]);

  const dispatch = useDispatch()

  const { productJeans } = useSelector(state => state.products)

  // set bag to Storage
  const getJeanProducts = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterJeanProducts = res.data.filter(
        (item) => item.category === "jeans"
      );
        // console.log(filterBagProducts, '-----');
        dispatch( addProductJeans(filterJeanProducts))
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
    getJeanProducts();
    // getBagProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={productJeans} />
    </div>
  );
};

export default ProductJeans;
