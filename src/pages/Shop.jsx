import React, { useState, useEffect } from "react";
import "../style/shop.scss";
import "../sass/__variables.scss";
import "../style/modalDetails.scss";
import { AiOutlineFilter } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import client from "../api/axiosClient";
import ProductList from "../components/UI/ProductList";

// import pagin
// import ReactPaginate from "react-paginate";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// const styleArrow = {
//   width: "25px",
//   height: "25px",
//   backgroundColor: "#ccc",
// };

const Shop = ({ productData }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // pagin
  // const [currentItems, setCurrentItems] = useState([]);
  // const [itemOffset, setItemOffset] = useState(0);
  // const [pageCount, setPageCount] = useState(0);
  // const itemsPerPage = 8;

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(products.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(products.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, products]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % products.length;
  //   setItemOffset(newOffset);
  // };

  const setDataToStorage = async () => {
    try {
      // setLoading(true);
      const res = await client.get("/products");
      // console.log(res.data);
      if (typeof res.data !== "string") {
        localStorage.setItem("productAllShop", JSON.stringify(res.data));
      }
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  const getDataFromStorage = () => {
    setIsLoading(true);
    try {
      const dataLocalAll = localStorage.getItem("productAllShop");
      const da = dataLocalAll !== null ? JSON.parse(dataLocalAll) : [];
      // const productRandom = Math.floor(Math.random() * da.length);
      console.log(da);
      // const dataRamdom = Math.floor(Math.random(da.length));
      // console.log(dataRamdom);
      setIsLoading(false);
      setProducts(da);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setDataToStorage();
    getDataFromStorage();
  }, []);

  // handle filter
  const handleFilterProduct = (e) => {
    const { value } = e.target;

    // filter trousers
    if (value === "trousers") {
      const filterTrousers = products.filter(
        (item) => item.category === "trousers"
      );
      // console.log(filterTrousers);
      localStorage.setItem("filterTrouser", JSON.stringify(filterTrousers));
      const dataLocal = localStorage.getItem("filterTrouser");
      localStorage.getItem("filterHat");
      const d = JSON.parse(dataLocal);
      console.log(d);
      setProducts(d);
      // setProducts(filterHat);
    }

    // filter jeans

    // filtr sort

    // filter sweatpant

    // filter hat
    if (value === "hat") {
      const filterHats = products.filter((item) => item.category === "hat");
      // console.log(filterHats);
      localStorage.setItem("filterHat", JSON.stringify(filterHats));
      const dataLocal = localStorage.getItem("filterHat");
      localStorage.getItem("filterTrouser");
      const d = JSON.parse(dataLocal);
      console.log(d);
      setProducts(d);
      // setProducts(filterHats);
    }
    //filter shoe
    if (value === "shoe") {
      const filterShoes = products.filter((item) => item.category === "shoe");
      // console.log(filterShoes);
      // setProducts(filterShoes);
    }
    // filter bag
    if (value === "bag") {
      const filterBags = products.filter((item) => item.category === "bag");
      // console.log(filterBags);
      // setProducts(filterBags);
    }
  };

  // handle search
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    // const { productName } = products;
    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    localStorage.setItem("searchProduct", JSON.stringify(searchProducts));
    const data = localStorage.getItem("searchProduct");
    const d = data !== null ? JSON.parse(data) : {};
    console.log(d);
    setProducts(d);
    // console.log(searchProducts);
    // setProducts(searchProducts);
  };

  // handle sort

  return (
    <>
      <div className="product ">
        <div className="product__container container ">
          <div className="product__title flex">
            <Link
              to="/"
              className="text-black fw-700 fs-15"
              style={{ margin: "5px" }}
            >
              Trang chủ
            </Link>
            <span style={{ margin: "5px" }}>
              <IoIosArrowForward />
            </span>
            <span className="fs-15">Sản phẩm</span>
          </div>
          <div className="product__category flex flex-evenly mb-2">
            <div className="product__filter flex">
              <h1
                className="flex"
                style={{ textTransform: "unset", marginLeft: "10px" }}
              >
                <AiOutlineFilter /> Lọc
              </h1>
              <select name="" id="" onChange={handleFilterProduct}>
                <option value="#">--Lựa chọn--</option>
                <option value="trousers">Quần âu</option>
                <option value="">Quần jeans</option>
                <option value="">Quần sort</option>
                <option value="">Quần nỉ dài</option>
                <option value="hat">Mũ</option>
                <option value="shoe">Giày</option>
                <option value="bag">Túi đeo chéo</option>
                <option value="">Dây lưng</option>
              </select>
            </div>

            <div className="product__search">
              <div className="product__search__box flex">
                <input
                  type="text"
                  placeholder="Search ..."
                  onChange={handleSearch}
                />
                <span>
                  <BiSearch />
                </span>
              </div>
            </div>

            <div className="product__widget">
              <select name="sort" id="sort">
                <option>Sắp xếp </option>
                <option value="ascending">Tăng dần theo giá</option>
                <option value="descending">Giảm dần theo giá</option>
                <option value="descending">Tăng dần từ A - Z</option>
                <option value="descending">Giảm dần từ Z - A</option>
              </select>
            </div>
          </div>

          {/* list product */}
          {products.length === 0 ? (
            <h1
              style={{
                textAlign: "center",
                padding: "20px",
                textTransform: "unset",
              }}
            >
              Không tìm thấy sản phẩm
            </h1>
          ) : (
            <ProductList data={products} />
          )}

          {/* <div className="images">
          {currentItems.map((item) => {
            return (
              <div>
                <img src={item.imgUrl} alt="" />
              </div>
            );
          })}
        </div> */}
          {/* <div className="">
          <ReactPaginate
            breakLabel={<span className="">...</span>}
            previousLabel={
              <span className="flex flex-center mr-1" style={styleArrow}>
                <BsChevronLeft />
              </span>
            }
            nextLabel={
              <span className="flex flex-center ml-1" style={styleArrow}>
                <BsChevronRight />
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={8}
            // pageCount={10}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="flex flex-center mt-5"
            pageClassName="page flex flex-center"
            activeClassName="active"
          />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Shop;
