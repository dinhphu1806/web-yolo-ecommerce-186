import React, { useState, useEffect } from "react";

import { useSelector , useDispatch} from "react-redux";
import { addProductCoats } from "../../redux/slice/productSlice";

import ProductList from "./ProductList";
import { IoMdFlash } from "react-icons/io";
import { Link } from "react-router-dom";
import client from "../../api/axiosClient";

const ProductCoat = () => {
  // const [coatProducts, setCoatProducts] = useState([]);

  const dispatch = useDispatch()

  const { productCoats } = useSelector((state) => state.products);

  // đã setDataToStorage từ file Home
  const getDataFromStorage = async () => {
    try {
      // const dataLocal = localStorage.getItem("product"); // console.log(dataLocatl);
      // const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
      // // console.log(typeof d);
      // // setProducts(d); // setCoat
      // const dataLocalAll = localStorage.getItem("productAll");
      // const da = dataLocalAll !== null ? JSON.parse(dataLocalAll) : [];

      // console.log(typeof da);
      // setLoading(false);
      const res = await client.get("/products")
      // console.log(res, 'okokok');
      const filterCoatProducts = res.data.filter(
        (item) => item.category === "coat"
      );  
      // console.log(filterCoatProducts);
        dispatch(
          addProductCoats(filterCoatProducts)
        )
     
      //   setProducts(da);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromStorage();
    // getDataFromStorage();
  }, []);
  return (
    <div>
      <div className="secsion flex flex-between">
        <div className="heading__title flex">
          <h1 className="fs-20 fw-500">Sản phẩm mới nhất</h1>
          <span>
            <IoMdFlash className="fs-25 fw-500" style={{ color: "red" }} />
          </span>
        </div>
        <Link to="/shop">Xem chi tiết ...</Link>
      </div>
      <div className="product__list">
        <ProductList data={productCoats} />
      </div>
    </div>
  );
};

export default ProductCoat;
