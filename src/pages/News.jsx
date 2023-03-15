import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const News = () => {
  return (
    <div className="news">
      <div className="news__container container">
        <div className="news__title flex">
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
          <span className="fs-15">Tin tức</span>
        </div>
        <div className="news__body">Updating news page ...</div>
      </div>
    </div>
  );
};

export default News;
