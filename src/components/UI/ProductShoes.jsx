import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductShoes } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductShoes = () => {
  // const [shoeProducts, setShoeProducts] = useState([]);
  // set shoe in Storage

  const dispatch = useDispatch()

  const { productShoes } = useSelector(state => state.products)

   // get shoe 
  const getShoeProducts = async () => {
    const res = await client.get("/products");
    // console.log(res.data);
    if (typeof res.data !== "string") {
      const filterShoeProducts = res.data.filter(
        (item) => item.category === "shoe"
      );
      // console.log(filterShoeProducts, '-----');
      dispatch(addProductShoes(filterShoeProducts))
      //   console.log(filterShoeProducts);
      // localStorage.setItem("shoe", JSON.stringify(filterShoeProducts));
    }
  };

  // get shoe from Storage
  // const getShoeProductsFromStorage = () => {
  //   const localData = localStorage.getItem("shoe");
  //   const d = localData !== null ? JSON.parse(localData) : [];
  //   // console.log(d);
  //   setShoeProducts(d);
  // };

  useEffect(() => {
    getShoeProducts();
    // getShoeProductsFromStorage();
  }, []);
  return (
    <div>
      <ProductList data={productShoes} />
    </div>
  );
};

export default ProductShoes;
