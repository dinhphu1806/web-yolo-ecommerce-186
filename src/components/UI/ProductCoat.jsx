import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { IoMdFlash } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCoat = () => {
  const [coatProducts, setCoatProducts] = useState([]);

  // đã setDataToStorage từ file Home
  const getDataFromStorage = () => {
    try {
      const dataLocal = localStorage.getItem("product"); // console.log(dataLocal);
      const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
      // console.log(typeof d);
      // setProducts(d); // setCoat
      const dataLocalAll = localStorage.getItem("productAll");
      const da = dataLocalAll !== null ? JSON.parse(dataLocalAll) : [];
      // console.log(typeof da);
      // setLoading(false);
      setCoatProducts(d);
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
        {/* <ProductList data={coatProducts} /> */}
        {/* <ProductList /> */}
        <ProductList data={coatProducts} />
      </div>
    </div>
  );
};

export default ProductCoat;
