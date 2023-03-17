import React from "react";
import "../../style/productCard.scss";
import "../../sass/index.scss";
import { toast } from "react-toastify";

// grid
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { AiFillEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
// import { openModal } from "../../redux/slice/modalSlice";
// import ModalDetails from "./ModalDetails";

import { useNavigate } from "react-router-dom";

// redux
import { addToCart } from "../../redux/slice/cartSlice";

const ProductCard = ({ item }) => {
  const { id, productName, imgUrl, price, imgDetails, quantity = 1 } = item;
  //   console.log(item);
  const dispatch = useDispatch();
  // const { IsModal } = useSelector((state) => state.modal);

  // console.log(modal);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // console.log(
    //   addToCart({
    //     id: id,
    //     productName: productName,
    //     imgUrl: imgUrl,
    //     price: price,
    //     quantity: quantity,
    //   })
    // );
    dispatch(
      addToCart({
        id: id,
        productName: productName,
        imgUrl: imgUrl,
        price: price,
        // quantity: quantity,
        // quantity: 1,
        isProductCard: true
      })
    );
    
    toast.success("Thêm vào giỏ hàng thành công !", {
      position: "top-center",
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid item xs={6} sm={4} md={3} className="product">
        <Item className="product__item">
          <img src={imgUrl} alt="" className="img-cover" />
          <div className="product__info"></div>
          <div
            className="product__icon__eye"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            title="Xem chi tiết"
            onClick={() => navigate(`/shop/${id}`)}
          >
            <AiFillEye />
          </div>
          <div className="product__bottom flex flex-evenly">
            <button
              title="Thêm vào giỏ hàng"
              // onClick={() => dispatch(openModal())}
              onClick={handleAddToCart}
              className="flex"
            >
              <FaShoppingCart
                className="product__bottom__icon"
                style={{ marginRight: "5px" }}
              />
              Thêm vào giỏ
            </button>
            <div className="under"></div>
            <button
              title="Xem chi tiết"
              className="flex fs-13"
              onClick={() => navigate(`/shop/${id}`)}
            >
              <AiFillEye
                className="product__bottom__icon"
                style={{ marginRight: "5px" }}
              />
              Xem chi tiết
            </button>
          </div>
          <div className="product__title">
            <h2>{productName}</h2>
          </div>
          <div className="product__price">
            <span>{price / 1000},000 ₫</span>
          </div>
        </Item>
      </Grid>
    </>
  );
};

export default ProductCard;
