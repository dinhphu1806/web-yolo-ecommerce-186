import React, { useState, useEffect } from "react";
import client from "../../api/axiosClient";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { addProductHats } from "../../redux/slice/productSlice";

const ProductHats = () => {
  // const [hatProducts, setHatProducts] = useState([]);

  // dispatch product in store 
  const dispatch = useDispatch()
  // get product from store
  const { productHats } = useSelector(state => state.products)

  const getHatProducts = async () => {
    try {
      const res = await client.get("/products");
      // console.log(res.data);
      if (typeof res.data !== "string") {
        const filterHatProducts = res.data.filter(
          (item) => item.category === "hat"
        );
        // console.log(filterHatProducts);
        dispatch(
          addProductHats(filterHatProducts)
        )

        // localStorage.setItem("hat", JSON.stringify(filterHatProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get hat from Storage
  // const getHatProductsFromStorage = () => {
  //   try {
  //     const dataLocal = localStorage.getItem("hat"); // console.log(dataLocal);
  //     const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
  //     // console.log(d);
  //     // setProducts(d); // setCoat
  //     // setLoading(false);
  //     setHatProducts(d);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    getHatProducts();
    // getHatProductsFromStorage();
  }, []);

  return (
    <div>
      <ProductList data={productHats } />
    </div>
  );
};

export default ProductHats;
