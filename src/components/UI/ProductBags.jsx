import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductBags } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductBags = () => {
  // const [bagProducts, setBagProducts] = useState([]);

  const dispatch = useDispatch()

  const { productBags } = useSelector(state => state.products)

  // set bag to Storage
  const getBagProducts = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterBagProducts = res.data.filter(
        (item) => item.category === "bag"
      );
        // console.log(filterBagProducts, '-----');
        dispatch( addProductBags(filterBagProducts))
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
    getBagProducts();
    // getBagProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={productBags} />
    </div>
  );
};

export default ProductBags;
