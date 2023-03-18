import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductShirts } from "../../redux/slice/productSlice";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";

const ProductShirt = () => {
  // const [shirtProducts, setShirtProducts] = useState([]);
  const dispacth = useDispatch()

  const { productShirts} = useSelector(state => state.products)

  // set shirt product to Storage
  const getShirtProducts = async () => {
    try {
      const res = await client.get("/products");
      //   console.log(res.data);
      if (res.data !== "string") {
        const filterShirtProducts = res.data.filter((item) => {
          return item.category === "shirt";
        });
        // console.log(filterShirtProducts, '----');
        dispacth(addProductShirts(filterShirtProducts))
        // localStorage.setItem("shirt", JSON.stringify(filterShirtProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get shirt products from Storage
  // const getShirtProductsStorage = () => {
  //   const localData = localStorage.getItem("shirt");
  //   const d = localData !== null ? JSON.parse(localData) : [];
  //   console.log(d);
  // };
  useEffect(() => {
    getShirtProducts();
    // getShirtProductsStorage();
  }, []);
  return <div>
    <ProductList data={productShirts} />
  </div>;
};

export default ProductShirt;
