import React from "react";
import "./headerTop.scss";
import { BsTelephonePlusFill, BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top__container container flex flex-between">
        <div className="header-top__left flex">
          <p className="flex" style={{ color: "#252a2b", marginRight: "15px" }}>
            <BsTelephonePlusFill />
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "1px",
                fontWeight: "600",
                marginLeft: "10px",
              }}
            >
              0123.456.789
            </span>
          </p>
          <p
            style={{
              color: "#252a2b",
              marginRight: "15px",
              fontStyle: "italic",
            }}
            className="fw-600 ls-1"
          >
            abc123@gmail.com
          </p>
        </div>
        <div className="header-top__right flex">
          <span>
            <BsFacebook />
          </span>
          <span>
            <AiFillInstagram />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <AiFillLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
