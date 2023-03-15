import React from "react";
import "./receiveInfo.scss";
import "../../sass/__variables.scss";
import "../../sass/__reset.scss";
import images from "../../assets/images-receive-info/receive.jpg";
import { FaPaperPlane } from "react-icons/fa";

const ReceiveInfo = () => {
  return (
    <div className="receive__info">
      <div className="receive__container relative">
        <img src={images} alt="" className="receive__image " />
        <div
          className="receive__content bg-dark"
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "50%",
          //   transform: "translate(-50%, -50%)",
          //   padding: "15px",
          // }}
        >
          <h1
            className="text-white fw-700"
            style={{ textTransform: "uppercase" }}
          >
            Đăng ký nhận thông tin
          </h1>
          <p className="text-white">
            Đăng ký nhận thông tin và nhận nhiều ưu đãi từ YOLO SHOP
          </p>
          <div className="input flex mt-1" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Nhập email của bạn"
              //   className="p-1"
              style={{
                width: "100%",
                padding: "7px 20px",
              }}
            />
            <button
              className="text-black"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveInfo;
