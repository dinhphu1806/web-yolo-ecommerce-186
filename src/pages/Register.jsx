import React, { useState } from "react";
import "../style/register.scss";

import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillFacebook, AiOutlineGooglePlus } from "react-icons/ai";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      alert("Mật khẩu không khớp ! Vui lòng nhập lại");
      setPassword("");
      setCPassword("");
    }
    console.log({ firstName, lastName, email, password, cPassword });
  };
  return (
    <div className="register">
      <div className="register__container container w-full relative">
        <div className="register__title flex ">
          <NavLink
            to="/"
            className="text-black fw-700 fs-15"
            style={{ margin: "5px" }}
          >
            Trang chủ
          </NavLink>
          <span style={{ margin: "5px" }}>
            <IoIosArrowForward />
          </span>
          <span className="fs-15">Đăng ký</span>
        </div>
        <div className="mt-1 mb-1 px-1 title">
          <h1 className="fs-18 fw-600 uppercase">Đăng ký tài khoản</h1>
          <hr className="w-full px-1" />
        </div>
        <div className="register__body relative">
          <div className="register__body__container">
            <h1 className="fs-18 fw-700 text-center uppercase mb-2">
              Thông tin đăng ký
            </h1>
            <p className="fs-13 fw-600 mb-1">
              Nếu bạn có một tài khoản, xin vui lòng đăng nhập
            </p>
            <div className="register__with">
              <div className="flex">
                <button
                  className="flex mr-1 fs-14 flex flex-center"
                  style={{
                    border: "1px solid #3B5998",
                    backgroundColor: "#3B5998",
                    color: "#fff",
                  }}
                >
                  <AiFillFacebook
                    style={{ marginRight: "5px" }}
                    className="fs-22"
                  />
                  <p className="fs-12">Facebook</p>
                </button>
                <button
                  className="flex fs-14 flex flex-center"
                  style={{
                    border: "1px solid #E14B33",
                    backgroundColor: "#E14B33",
                    color: "#fff",
                  }}
                >
                  <AiOutlineGooglePlus
                    style={{ marginRight: "5px" }}
                    className="fs-24"
                  />
                  <p className="fs-12">Google</p>
                </button>
              </div>
            </div>
            <form
              action=""
              className="form mt-1"
              onSubmit={handleSubmitRegister}
            >
              <div className="field__txt">
                <label className="fs-16 fw-700" htmlFor="firstname">
                  Tên *
                </label>
                <input
                  type="text"
                  id="firstname"
                  autoComplete="false"
                  required
                  placeholder="Tên"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="field__txt mt-1">
                <label className="fs-16 fw-700" htmlFor="lastname">
                  Họ *
                </label>
                <input
                  type="text"
                  id="lastname"
                  autoComplete="false"
                  required
                  placeholder="Họ"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="field__txt mt-1">
                <label className="fs-16 fw-700" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="false"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field__txt mt-1">
                <label className="fs-16 fw-700" htmlFor="password">
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  id="password"
                  autoComplete="false"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="field__txt mt-1">
                <label className="fs-16 fw-700" htmlFor="cPassword">
                  Nhập lại mật khẩu *
                </label>
                <input
                  type="password"
                  id="cPassword"
                  autoComplete="false"
                  required
                  placeholder="Confirm password"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>

              <div className="btn flex flex-between mt-1">
                <button type="submit" className="fs-14 mt-1 mb-1">
                  Đăng ký
                </button>
                <button className="fs-14 mt-1 mb-1">
                  <div className="">
                    <NavLink to="/login" style={{ color: "#fff" }}>
                      <i className="fa fa-reply mr-1"></i>
                      Quay lại
                    </NavLink>
                  </div>
                </button>
              </div>
              <span className="flex fs-14 flex-wrap">
                Nếu đã có tài khoản, click vào
                <NavLink
                  to="/login"
                  style={{ margin: "0 5px", color: "#000" }}
                  className="fw-600"
                >
                  đây
                </NavLink>
                để đăng nhập.
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
