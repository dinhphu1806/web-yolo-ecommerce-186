import React from "react";
import "../style/checkout.scss";
import "../sass/__variables.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import Button from "@mui/material/Button";

// redux
import { useSelector } from "react-redux";

// numberFormat price
import numberWithCommas from "./../ultils/numberWithCommas";
// input
import TextField from "@mui/material/TextField";

// radio
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// grid
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// devider
import Divider from "@mui/material/Divider";
import { toast } from "react-toastify";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  // console.log(cart);

  const getSubtotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const getSubtotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const getShip = () => {
    let shipPrice = 0;
    cart.forEach((item) => {
      let ship = item.price * item.quantity;
      if (ship < 450000) {
        return (shipPrice = 35000);
      } else {
        return (shipPrice = 0);
      }
    });
    return shipPrice;
  };

  const handleOrder = () => {
    toast.success("Đặt hàng thành công !", {
      position: "top-center",
    });

    navigate("/");
  };
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__title flex ">
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
          <Link
            to="/cart"
            className="text-black fw-700 fs-15"
            style={{ margin: "5px" }}
          >
            Giỏ hàng
          </Link>
          <span style={{ margin: "5px" }}>
            <IoIosArrowForward />
          </span>
          <span className="fs-15">Thanh toán</span>
        </div>
        <div className="checkout__body">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8}>
                <span className="flex mb-1">
                  <i className="fa-sharp fa-regular fa-address-card mr-1"></i>
                  <h1
                    className="fs-18 fw-600"
                    style={{ textTransform: "uppercase" }}
                  >
                    Thông tin nhận hàng
                  </h1>
                </span>

                <Item>
                  <Grid>
                    <Grid item xs={12} md={12} style={{ width: "100%" }}>
                      <Item>
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": { m: 1, width: "25ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            style={{
                              width: "100%",
                              maxWidth: "500px",
                              margin: "0 auto",
                              marginBottom: "10px",
                            }}
                          />
                          <TextField
                            id="filled-basic"
                            label="Họ và tên"
                            variant="filled"
                            style={{
                              width: "100%",
                              maxWidth: "500px",
                              margin: "0 auto",
                              marginBottom: "10px",
                            }}
                          />
                          <TextField
                            id="filled-basic"
                            label="Số điện thoại"
                            variant="filled"
                            style={{
                              width: "100%",
                              maxWidth: "500px",
                              margin: "0 auto",
                              marginBottom: "10px",
                            }}
                          />
                          <TextField
                            id="filled-basic"
                            label="Địa chỉ"
                            variant="filled"
                            style={{
                              width: "100%",
                              maxWidth: "500px",
                              margin: "0 auto",
                              marginBottom: "10px",
                            }}
                          />
                          <TextField
                            id="standard-multiline-static"
                            label="Ghi chú(Tùy chọn)"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="standard"
                            style={{
                              width: "100%",
                              maxWidth: "500px",
                              margin: "0 auto",
                              marginBottom: "10px",
                            }}
                          />
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <span className="flex mt-2">
                        <FaShippingFast className="shiper mr-1 fs-20" />
                        <h1
                          className="fs-18 fw-600"
                          style={{ textTransform: "uppercase" }}
                        >
                          Vận chuyển
                        </h1>
                      </span>
                      <Item>
                        <FormControl
                          style={{ width: "100%", marginLeft: "10px" }}
                        >
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            // defaultValue="delivery"
                            name="radio-buttons-group"
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <FormControlLabel
                              value="delivery"
                              control={<Radio />}
                              label="GIAO HÀNG"
                            />
                            <FormLabel id="demo-radio-buttons-group-label">
                              35.000₫
                            </FormLabel>
                          </RadioGroup>

                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            // defaultValue="freeship"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel
                              value="freeship"
                              control={<Radio />}
                              label="FREESHIP"
                            />
                            <FormLabel id="demo-radio-buttons-group-label">
                              Miễn phí
                            </FormLabel>
                          </RadioGroup>
                        </FormControl>
                      </Item>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <span className="flex mt-2">
                        <MdPayment className="shiper mr-1 fs-20" />
                        <h1
                          className="fs-18 fw-600"
                          style={{ textTransform: "uppercase" }}
                        >
                          Thanh toán
                        </h1>
                      </span>
                      <Item>
                        <FormControl
                          style={{ width: "100%", marginLeft: "10px" }}
                        >
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            // defaultValue="delivery"
                            name="radio-buttons-group"
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <FormControlLabel
                              value="delivery"
                              control={<Radio />}
                              label="Thanh toán khi giao hàng (COD)"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Item>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>

              {/* // đơn hàng */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                style={{
                  maxHeight: "400px",
                  height: "100%",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <Grid
                  style={{
                    padding: "20px",
                    backgroundColor: "#ccc",
                  }}
                >
                  <div className="flex mb-1">
                    <i className="fa-sharp fa-regular fa-address-card mr-1"></i>
                    <h1
                      className="fs-18 fw-600"
                      style={{ textTransform: "uppercase" }}
                    >
                      Đơn hàng
                    </h1>
                  </div>
                  <div className="flex flex-between">
                    <h1 style={{ textTransform: "unset" }}>Số lượng: </h1>
                    <span>{getSubtotalQuantity()}</span>
                  </div>
                  <div className="flex flex-between">
                    <h1 style={{ textTransform: "unset" }}>Tổng cộng: </h1>
                    <span>{numberWithCommas(getSubtotalPrice())} ₫</span>
                  </div>

                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  <div className="flex flex-between">
                    <span>Tạm tính: </span>
                    <span>{numberWithCommas(getSubtotalPrice())} ₫</span>
                  </div>
                  <div className="flex flex-between">
                    <span>Thuế và phí vận chuyển </span>
                    <span>{numberWithCommas(getShip())} ₫</span>
                  </div>
                  <div className="mt-1 mb-1">
                    <Divider />
                  </div>
                  <div className="flex flex-between">
                    <h1
                      className="fs-18 fw-700"
                      style={{ textTransform: "unset" }}
                    >
                      Thành tiền:
                    </h1>
                    <span className="fs-22 fw-700">
                      {numberWithCommas(getSubtotalPrice() - getShip())} ₫
                    </span>
                  </div>

                  <div className="flex flex-center mt-1">
                    <Button
                      variant="contained"
                      style={{ padding: "15px 20px" }}
                      onClick={handleOrder}
                    >
                      Đặt hàng
                    </Button>
                  </div>
                </Grid>

                <div className="back__cart mt-1 ml-1">
                  <Link to="/cart" className="flex">
                    <span className="text-black">
                      <BsArrowLeft />
                    </span>
                    <span className="text-black " style={{ marginLeft: "5px" }}>
                      Quay lại giỏ hàng
                    </span>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
