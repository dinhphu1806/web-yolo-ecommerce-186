import React, { useState, useEffect } from "react";
import "../style/home.scss";
import Hero from "../components/Hero/Hero";
import Policy from "../components/Policy/Policy";
import SliderProduct from "../components/SliderProduct/SliderProduct";
import ProductList from "../components/UI/ProductList";
// import "../../style/modalDetails.scss";
import "../style/modalDetails.scss";
import { useSelector, useDispatch } from "react-redux";
import { addProductCoat, addProducts } from "../redux/slice/productSlice";

import { IoMdFlash } from "react-icons/io";
// import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";
// call api
import client from "../api/axiosClient";
// import ProductTrousers from "../components/UI/ProductTrousers";
import AccessoryTab from "../components/UI/AccessoryTab";
import TrouserTab from "../components/UI/TrouserTab";
// import ModalDetails from "../components/UI/ModalDetails";

// import ProductHats from "../components/UI/ProductHats";
// import ProductShoes from "../components/UI/ProductShoes";
// import ProductBags from "../components/UI/ProductBags";
// import ProductBelt from "../components/UI/ProductBelt";

import ReceiveInfo from "../components/ReceiveInfo/ReceiveInfo";
import ProductCoat from "../components/UI/ProductCoat";

const Home = () => {
  const [products, setProducts] = useState([]);
  // const [coatProducts, setCoatProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const { IsModal } = useSelector((state) => state.modal);
  

  // useEffect(() => {
  //   try {
  //     // setLoading(true)
  //     const fecthProduct = async () => {
  //       const res = await client.get("/products");
  //       // console.log(res.data);

  //       localStorage.setItem("product", JSON.stringify(res));
  //       // setProducts(res.data);
  //     };

  //     fecthProduct();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const setDataToStorage = async () => {
    try {
      // setLoading(true);
      const res = await client.get("/products");
      // console.log(res.data);
      if (typeof res.data !== "string") {
        // localStorage.setItem("product", JSON.stringify(res.data));
        // console.log(res.data);
        const filterCoatProducts = res.data.filter(
          (item) => item.category === "coat"
        );  
        dispatch(
          addProducts(res?.data)
        );
       
      
        localStorage.setItem("product", JSON.stringify(filterCoatProducts));
        localStorage.setItem("productAll", JSON.stringify(res.data));
        // return filterCoatProducts;
      }
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  ///////////// đoạn này thêm or chuyển sang file Coat thêm get
  // const getDataFromStorage = () => {
  //   try {
  //     const dataLocal = localStorage.getItem("product"); // console.log(dataLocal);
  //     const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
  //     // console.log(typeof d);
  //     // setProducts(d); // setCoat
  //     const dataLocalAll = localStorage.getItem("productAll");
  //     const da = dataLocalAll !== null ? JSON.parse(dataLocalAll) : [];
  //     // console.log(typeof da);
  //     // setLoading(false);
  //     setCoatProducts(d);
  //     setProducts(da);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  ////////////////

  useEffect(() => {
    setDataToStorage();
    // getDataFromStorage();
  }, []);
  // console.log(coatProducts);
  return (
    <div className="container" style={{ position: "relative" }}>
      {/* hero */}
      <Hero />

      {/* policy */}
      <Policy />

      {/* {loading && <h1>Loading ... </h1>} */}
      <div className="secsion">
        {/* <div className="secsion flex flex-between">
          <div className="heading__title flex">
            <h1 className="fs-20 fw-500">Sản phẩm mới nhất</h1>
            <span>
              <IoMdFlash className="fs-25 fw-500" style={{ color: "red" }} />
            </span>
          </div>
          <Link to="/shop">Xem chi tiết ...</Link>
        </div>
        <div className="product__list">
          <ProductList data={coatProducts} />
        </div> */}
        <ProductCoat />
      </div>

      {/* trouser tab */}
      <div className="secsion">
        <TrouserTab />
      </div>
      {/* trousers */}
      {/* <div>
        <div className="secsion flex flex-between">
          <div className="heading__title flex">
            <h1 className="fs-20 fw-500">Quần âu</h1>
          </div>

          <a href="">Xem chi tiết ...</a>
        </div>
        <div className="product__list flex flex-between">
          <ProductTrousers />
        </div>
      </div> */}

      {/* slick slider product */}
      <div className="secsion slider">
        <div
          className="container slider__product"
          style={{ backgroundColor: "#aabec6", padding: "30px" }}
        >
          <h1 className="text-center fs-30 fw-500 my-2">What's new ?</h1>
          <SliderProduct />
        </div>
      </div>

      {/* accessory */}
      <AccessoryTab />

      {/* <div>
        <ProductHats />
        <ProductShoes />
        <ProductBags />
        <ProductBelt />
      </div> */}

      {/* more */}
      <div className="more my-2">
        <div className="container w-full flex flex-center ">
          <Link to="/shop" className="p-1" style={{ border: "1px solid #ccc" }}>
            More
          </Link>
        </div>
      </div>

      {/* receive Info */}
      <ReceiveInfo />
      {/* modal */}
      {/* {IsModal && <ModalDetails products={products} />} */}
    </div>
  );
};

export default Home;
