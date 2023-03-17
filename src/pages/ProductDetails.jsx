import React, { useEffect, useState } from "react";
import "../style/productDetails.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import {
  AiFillPhone,
  AiFillStar,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  increamentItem,
  decreamentItem,
  addToCart,
} from "../redux/slice/cartSlice";
// avatar
import img1 from "../assets/images-avatar/avatar-1.jfif";
import img2 from "../assets/images-avatar/avatar-2.jfif";
import img3 from "../assets/images-avatar/avatar-3.jfif";

// grid
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import ThumbnailsSlide from "../components/ThumbnailsSlide/ThumbnailsSlide";

const ProductDetails = ({ products }) => {
  const [numQuantity, setNumQuantity] = useState(1);
  // console.log(numQuantity);

  const [productSingle, setProductSingle] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  const { productName, imgUrl, imgDetails, description, price, quantity } = productSingle;

  // const { cart } = useSelector((state) => state.cart);
  const product = products.find((item) => item.id === id);
  console.log(product);

  // set  single product details
  const setViewProductSingle = () => {
    try {
      // console.log(product);
      localStorage.setItem("productSingle", JSON.stringify(product));
    } catch (error) {
      console.log(error);
    }
  };

  // get single product details
  const getViewProductSingle = () => {
    try {
      const localData = localStorage.getItem("productSingle");
      const d = localData !== null ? JSON.parse(localData) : [];
      // const d = JSON.parse(localData);
      console.log(d);
      setProductSingle(d);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setViewProductSingle();
    
    getViewProductSingle();

    // setViewRelatedProducts();
  }, [product]);

  // handle increament
  const handleIncreament = () => {
    // console.log(increamentItem(id));
    // dispatch(increamentItem(id));

    setNumQuantity((prev) => {
      let temmQty = prev + 1;
      if (temmQty > price) {
        temmQty = price
      };
      return temmQty;
    });
  };

  // handle decreament
  const handleDecreament = () => {
    // console.log(decreamentItem(id));
    // dispatch(decreamentItem(id));

    setNumQuantity((prev) => {
      let temQty = prev - 1;
      if (temQty < 1) {
        temQty = 1
      };
      return temQty;
    });
  };

  // add to cart use distpatch
  const handleAddToCart = () => {
    
    console.log(numQuantity, 'num');
    dispatch(
      addToCart({
        id: id,
        productName: productName,
        imgUrl: imgUrl,
        price: price,
        quantity: numQuantity,
        isProduct: false
      })
    );
    toast.success("Thêm vào giỏ hàng thành công !", {
      position: "top-center",
    });
  };
  // category,,
  // imgDetails,

  // reviews,
  // shortDesc,
  // console.log(id);
  // console.log(products);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  }));

  return (
    <div className="product__details ">
      <div className="product__details_container container">
        {/* title */}
        <div className="product__details__title">
          <div className="flex">
            <Link to="/" className="text-black fw-600 fs-14">
              Trang chủ
            </Link>
            <span className="" style={{ margin: "0 5px" }}>
              <IoIosArrowForward />
            </span>
            <Link to="/shop" className="text-black  fs-14">
              Sản phẩm
            </Link>
            <span className="" style={{ margin: "0 5px" }}>
              <IoIosArrowForward />
            </span>
            <p className=" fs-14">{productName}</p>
          </div>
        </div>
        {/* content */}
        <div className="product__details__body mt-1">
          <Grid container spacing={1} rowSpacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Item>
                <div className="product__details__left">
                  {/* <ThumbnailsSlide imgDetails={imgDetails} /> */}
                  <img src={imgUrl} alt="" />
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>
                <div
                  className="product__details__right"
                  // style={{ position: "fixed" }}
                >
                  <h1
                    className="fs-23 fw-700"
                    style={{ textTransform: "unset" }}
                  >
                    {productName}
                  </h1>
                  <div className="evaluate flex">
                    <span className="mr-1">(Đánh giá : 1253)</span>
                    <div className="star flex" style={{ color: "#d0011b" }}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex mt-1 mb-1">
                    <span className="fs-22 text-red fw-700 mr-1 ">
                      {price / 1000}.000₫
                    </span>
                    <div className="old_price">
                      <p
                        style={{ textDecoration: "line-through" }}
                        className="fs-18 text-grey"
                      >
                        699.000 ₫
                      </p>
                    </div>
                  </div>
                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  <div className="code__product ">
                    <span className="mr-1 flex fw-700">
                      Mã sản phẩm: <p className="fw-700 ml-1">QJF221208601</p>
                    </span>
                    <span className="flex">
                      Tình trạng: <p className="fw-700 ml-1">Còn hàng</p>
                    </span>
                  </div>
                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  <div className="quantity flex mt-2 mb-2">
                    <span
                      className="mr-2 fw-700 fs-16"
                      style={{ textTransform: "uppercase" }}
                    >
                      Số lượng:
                    </span>
                    <button
                      className="quantity__icon px-2 py-3 flex flex-center"
                      style={{
                        border: "1px solid #ccc ",
                        borderRadius: "10px",
                        outline: "none",
                      }}
                    >
                      <button
                        className="mr-2 fs-23 fw-500 flex flex-center"
                        onClick={() => handleDecreament()}
                      >
                        -
                      </button>
                      <span className="fw-700 fs-20 ">{numQuantity}</span>
                      <button
                        className="ml-2 fs-23 fw-500 flex flex-center"
                        onClick={() => handleIncreament()}
                      >
                        +
                      </button>
                    </button>
                  </div>
                  <div className="add__cart flex">
                    <Button
                      className=" mr-2 flex fs-16 flex-center"
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "10px 20px",
                        color: "#fff",
                        borderRadius: "25px",
                        backgroundColor: "#252a2b",
                      }}
                      onClick={handleAddToCart}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                    <Button
                      className="px-2 py-5 fs-16 flex flex-center"
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "10px 20px",
                        color: "#fff",
                        borderRadius: "25px",
                        textTransform: "uppercase",
                        backgroundColor: "#ff4b52",
                      }}
                    >
                      Mua ngay
                    </Button>
                  </div>
                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  <div className="advise flex">
                    <span className="fw-700 fs-14 mr-1">Tư vấn mua hàng:</span>
                    <AiFillPhone className="mr-1" />
                    <span className="flex">
                      <p className="fs-22 fw-700 mr-1 text-red">
                        0123.456.789{" "}
                      </p>
                      <p>(8:00 - 22:00)</p>
                    </span>
                  </div>
                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  {/* desc product */}
                  <div className="desc__product">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <span
                            className="fw-700"
                            style={{ textTransform: "uppercase" }}
                          >
                            Mô tả sản phẩm
                          </span>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="fs-14">- {description}</span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  {/* accordion */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<AddIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <span
                          className="fw-700"
                          style={{ textTransform: "uppercase" }}
                        >
                          Quy định đổi trả
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="fs-14">
                          - <b className="fw-700">ĐỔI</b> sản phẩm trong vòng 07
                          ngày trên toàn HỆ THỐNG CỬA HÀNG
                          <br />- Không áp dụng <b className="fw-700">ĐỔI</b>
                          sản phẩm trong CTKM
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<AddIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        <span
                          className="fw-700"
                          style={{ textTransform: "uppercase" }}
                        >
                          Membership
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="fs-14">
                          - Thành viên SILVER được giảm 5% khi tích đủ 5 triệu{" "}
                          <br />- Thành viên GOLD được giảm 10% khi tích đủ 12
                          triệu <br />- Thành viên DIAMOND được giảm 15% khi
                          tích đủ 28 triệu
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <div className="flex flex-center">
                    <div className="ship flex mt-2 mb-2 mr-2">
                      <span
                        style={{
                          marginRight: "5px",
                          fontSize: "22px",
                          color: "red",
                          fontWeight: "700",
                        }}
                      >
                        <FaShippingFast />
                      </span>
                      <p className="fs-16"> Giao hàng toàn quốc</p>
                    </div>
                    <div className="ship flex mt-2 mb-2">
                      <span
                        style={{
                          marginRight: "5px",
                          fontSize: "22px",
                          color: "red",
                          fontWeight: "700",
                        }}
                      >
                        <GiNotebook />
                      </span>
                      <p className="fs-16">Tích điểm tất cả sản phẩm</p>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>
        {/* eval */}
        <div className="product__eval mt-1">
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "18px",
            }}
            className="fw-600"
          >
            Đánh Giá sản phẩm
          </h1>
          {/* 1 */}
          <div className="eval__wrapper">
            {/* 1 */}
            <div className="eval__title mt-1 flex">
              <img
                src={img1}
                alt=""
                style={{
                  width: "38px",
                  height: "38px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="eval__name">
                <p className="fs-13">lethuthao_01</p>
                <div className="eval__star flex" style={{ color: "#d0011b" }}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
            <div className="eval__body ml-5 mb-1">
              <div className="eval_date fs-13">
                <span>2023-02-05 </span>
                <span>16:01</span>
                <span>|</span>
                <span>Phân loại: Đen</span>
              </div>
              <div className="eval__content">
                <p className="fs-14">
                  Sản phẩm oki tuyệt vời khá là thích kiểu dáng như thế này mình
                  10đ
                </p>
              </div>
              <div className="eval__like flex">
                <AiOutlineLike style={{ marginRight: "5px" }} /> 18
                <AiOutlineDislike style={{ marginLeft: "5px" }} />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="eval__wrapper">
            <div className="eval__title flex">
              <img
                src={img2}
                alt=""
                style={{
                  width: "38px",
                  height: "38px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="eval__name">
                <p className="fs-13">hoangthaotrang_20</p>
                <div className="eval__star flex" style={{ color: "#d0011b" }}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </div>
              </div>
            </div>
            <div className="eval__body ml-5 mb-1">
              <div className="eval_date fs-13">
                <span>2023-02-11 </span>
                <span>12:31</span>
                <span>|</span>
                <span>Phân loại: Xanh than</span>
              </div>
              <div className="eval__content">
                <p className="fs-14">
                  <p>Sản phẩm rất đẹp</p>
                  <p>Chất lượng tuyệt với</p>
                  10đ
                </p>
              </div>
              <div className="eval__like flex">
                <AiOutlineLike style={{ marginRight: "5px" }} /> 24{" "}
                <AiOutlineDislike style={{ marginLeft: "5px" }} />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="eval__wrapper">
            <div className="eval__title flex">
              <img
                src={img3}
                alt=""
                style={{
                  width: "38px",
                  height: "38px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="eval__name">
                <p className="fs-13">dangha_18</p>
                <div className="eval__star flex" style={{ color: "#d0011b" }}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </div>
              </div>
            </div>
            <div className="eval__body ml-5 mb-1">
              <div className="eval_date fs-13">
                <span>2023-02-14 </span>
                <span>9:25</span>
                <span>|</span>
                <span>Phân loại: Xám</span>
              </div>
              <div className="eval__content">
                <p className="fs-14">
                  <p>Sản phẩm rất đẹp</p>
                  <p>Sản phẩm rất hài lòng</p>
                  <p>Shipper thân thiện, nhiệt tình</p>
                  10đ
                </p>
              </div>
              <div className="eval__like flex">
                <AiOutlineLike style={{ marginRight: "5px" }} /> 78{" "}
                <AiOutlineDislike style={{ marginLeft: "5px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* comment */}
        <div className="product__comment flex mt-1">
          <img
            src={img1}
            alt=""
            style={{
              width: "38px",
              height: "38px",
              objectFit: "cover",
              display: "block",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <input type="text" placeholder="viết comment" />
          <button type="submit">Gửi</button>
        </div>

        {/* related */}
        <div className="product__related mt-3 ">
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "18px",
            }}
            className="fw-600"
          >
            Sản phẩm liên quan
          </h1>
          <div className="body">Đang cập nhật</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
