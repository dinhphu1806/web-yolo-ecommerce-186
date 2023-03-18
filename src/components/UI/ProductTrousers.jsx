import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";
import { addProductTrousers } from "../../redux/slice/productSlice";

const ProductTrousers = () => {
  // const [trouserProducts, setTrouserProducts] = useState([]);

  const dispatch = useDispatch()

  const { productTrousers} = useSelector(state => state.products)

  const setTrousersToStorage = async () => {
    try {
      const res = await client.get("/products");
      //   console.log(res.data);
      if (res.data !== "string") {
        const filterTrousers = res.data.filter((item) => {
          return item.category === "trousers";
        });
        // console.log(filterTrousers, '-------');
        // console.log(filterTrousers, 'filterTrousers');
        dispatch(
          addProductTrousers(filterTrousers)
        )
        // console.log(filterTrousers);
        // localStorage.setItem("trouser", JSON.stringify(filterTrousers));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getTrousersFromStorage = () => {
  //   const dataLocal = localStorage.getItem("trouser");
  //   const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
  //   // console.log(d);
  //   setTrouserProducts(d);
  // };

  useEffect(() => {
    setTrousersToStorage();
    // getTrousersFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={productTrousers} />
    </div>
  );
};

export default ProductTrousers;
