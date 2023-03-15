import React from "react";
import "./footer.scss";
import "../../sass/__variables.scss";
import { AiFillHeart } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
// grid
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { addressFooter } from "./DataFooter";
import { informationFooter } from "./DataFooter";
import { storesFooter } from "./DataFooter";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  }));

  return (
    <div className="footer mt-5">
      <div className="footer__container container">
        <div className="footer__top ">
          <Grid
            container
            spacing={1}
            rowSpacing={2}
            className="footer__container"
          >
            <Grid item xs={12} sm={12} md={3}>
              <Item>
                <h1 className="fs-30 ls-2 fw-700 text-white">YoloShop</h1>
                {addressFooter.map((item) => {
                  return (
                    <div key={item.id} style={{ padding: "7px 0" }}>
                      <span className="fs-14 fw-500 text-white">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item>
                <h1
                  className="fs-16 fw-600 text-white"
                  style={{ textTransform: "unset" }}
                >
                  Thông tin
                </h1>
                {informationFooter.map((item) => {
                  return (
                    <div key={item.id} style={{ padding: "7px 0" }}>
                      <span className="fs-14 fw-500 text-white">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item>
                <h1
                  className="fs-16 fw-600 text-white"
                  style={{ textTransform: "unset" }}
                >
                  Các chi nhánh cửa hàng
                </h1>
                {storesFooter.map((item) => {
                  return (
                    <div key={item.id} style={{ padding: "7px 0" }}>
                      <span className="fs-14 fw-500 text-white">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item>
                <h1
                  className="fs-16 fw-600 text-white mb-1"
                  style={{ textTransform: "unset" }}
                >
                  Kêt nối với chúng tôi
                </h1>
                <div className="img" style={{ position: "relative" }}>
                  <img
                    src="https://lbcint.com/wp-content/uploads/2020/10/thi-truong-nganh-ban-le-hien-nay-dang-phat-trien-rat-nang-dong.jpg"
                    alt=""
                  />
                  <div
                    className="social text-white bg-dark"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      padding: "10px",
                      width: "100%",
                      maxWidth: "200px",
                    }}
                  >
                    <div className="social__title flex flex-column">
                      <span className="fs-14 fw-600">YOLO SHOP</span>
                      <span className="fs-12">244.862 lượt thích</span>
                    </div>
                    <div className="social__bottom flex flex-between mt-1">
                      <span
                        className="flex"
                        style={{
                          backgroundColor: "#fff",
                          padding: " 3px 7px",
                          cursor: "pointer",
                        }}
                      >
                        <AiFillFacebook
                          style={{ color: "#2374E1", fontWeight: "700" }}
                        />
                        <p
                          style={{
                            marginLeft: "5px",
                            fontSize: "12px",
                            color: "#000",
                          }}
                        >
                          Thích trang
                        </p>
                      </span>
                      <span
                        className="flex"
                        style={{
                          backgroundColor: "#fff",
                          padding: " 3px 7px",
                          cursor: "pointer",
                        }}
                      >
                        <FaShare
                          style={{ color: "#4b4f56", fontWeight: "700" }}
                        />
                        <p
                          style={{
                            marginLeft: "5px",
                            fontSize: "12px",
                            color: "#000",
                          }}
                        >
                          Chia sẻ
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>
        <div className="footer__bottom">
          <div className="flex flex-center text-white fs-16 p-2">
            Bản quyền 2023 được phát triển bởi dinhphu1806
            <span className="flex ml-1 fs-14">
              <AiFillHeart className="text-red" />
              <AiFillHeart className="text-red" />
              <AiFillHeart className="text-red" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
