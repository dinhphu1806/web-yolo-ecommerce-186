import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="contact__title flex">
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
          <span className="fs-15">Liên hệ</span>
        </div>
        <div className="contact__body">Updating contact page ...</div>
      </div>
    </div>
  );
};

export default Contact;
