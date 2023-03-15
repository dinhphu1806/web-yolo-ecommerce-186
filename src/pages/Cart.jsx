import React from "react";
import "../style/cart.scss";
import "../sass/__variables.scss";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// numberFormat
import numberWithCommas from "../ultils/numberWithCommas";
// redux
import { useSelector, useDispatch } from "react-redux";
// import {
//   increamentItem,
//   decreamentItem,
//   removeItem,
//   clearAllItem,
// } from "../redux/slice/cartSlice";

import { clearAllItem } from "../redux/slice/cartSlice";
// grid
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CartItem from "../components/CartItem/CartItem";
// import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
// grid
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  // console.log(cart);

  // const { id } = cart;
  //
  // console.log(id);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // handle increament
  // const handleIncreamentItem = () => {
  //   dispatch(increamentItem(id));
  // };
  // // handle decreament
  // const handleDecreamentItem = () => {
  //   dispatch(decreamentItem(id));
  // };

  // // remove decreament
  // const handleRemoveItem = () => {
  //   // dispatch(removeItem(id));
  //   console.log(removeItem(id));
  // };

  // clear all item
  const handleClearAll = () => {
    dispatch(clearAllItem(cart));
    // toast.success("Xóa tất cả thành công");
    toast.success("Xóa tất cả thành công", {
      position: "top-center",
    });
  };

  // sub total quantity
  const getSubtotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  // sub total price
  const getSubtotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  // hanlde checkout
  const handleCheckout = () => {
    if (cart.length == 0) {
      toast.error("Bạn chưa có sản phẩm nào trong giỏ hàng !", {
        position: "top-center",
      });
      navigate("/cart");
    } else if (cart.length > 0) {
      navigate("/checkout");
    }
  };
  return (
    <div className="container">
      <div className="cart__title flex">
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
        <span className="fs-15">Giỏ hàng</span>
      </div>
      <Box
        sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
      >
        <Grid container spacing={2}>
          {cart.length === 0 ? (
            <h2
              className="container text__title text-center flex flex-center"
              style={{
                textTransform: "unset",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              Bạn chưa có sản phẩm nào trong giỏ hàng.
              <br />
              <Link to="/shop" className="text-black fw-700 flex">
                Tiếp tục mua sắm nha
                <span style={{ fontSize: "28px" }}> &#128526;</span>;
              </Link>
            </h2>
          ) : (
            <Grid item xs={12} sm={12} md={8}>
              <Item className="">
                <TableContainer component={Paper}>
                  <Table sx={{ maxWidth: 700 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          sx={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                          Ảnh sản phẩm
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                          Tên sản phẩm
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                          Đơn giá
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                          Số lượng
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold", fontSize: "14px" }}
                        >
                          Thành tiền{" "}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "bold" }}
                          title="Xóa"
                        >
                          Xóa
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {cart?.map((item) => {
                        return (
                          <CartItem
                            key={item.id}
                            id={item.id}
                            productName={item.productName}
                            imgUrl={item.imgUrl}
                            price={item.price}
                            quantity={item.quantity}
                          />
                        );
                      })}
                    </TableBody>
                  </Table>
                  <button
                    style={{
                      padding: "10px",
                      backgroundColor: "#1A2027",
                      color: "#fff",
                    }}
                    onClick={handleClearAll}
                  >
                    Xóa tất cả
                  </button>
                </TableContainer>
              </Item>
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={4}>
            <Item>
              <div className="cart__subQuantity">
                <h3
                  className="fs-18 fw-700 flex flex-between"
                  style={{ textTransform: "unset" }}
                >
                  Tổng số lượng:
                  <span>{getSubtotalQuantity() || 0}</span>
                </h3>
              </div>
              <div className="cart__subtotal mb-1 flex flex-between">
                <h3 className="fs-18 fw-700" style={{ textTransform: "unset" }}>
                  Tổng tiền thanh toán:
                </h3>
                <span className="fs-20 fw-700">
                  {numberWithCommas(getSubtotalPrice()) || 0} ₫
                </span>
              </div>
              <p className="sub__text">
                Thuế và vận chuyển sẽ được tính khi thanh toán
              </p>
              <div className="pay fw-700 fs-16 mt-2">
                <button
                  className="buy__btn"
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#252a2b",
                    color: "#fff",
                    textTransform: "uppercase",
                    // borderRadius: "25px",
                  }}
                  onClick={handleCheckout}
                  title="Thanh toán"
                >
                  Tiến hành thanh toán
                </button>
              </div>
              <div className="pay fw-700 fs-16 mt-2">
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#252a2b",
                    // borderRadius: "25px",
                  }}
                >
                  <Link
                    to="/shop"
                    style={{ color: "#fff" }}
                    title="Tiếp tục mua sắm"
                  >
                    Tiếp tục mua sắm
                  </Link>
                </button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Cart;
