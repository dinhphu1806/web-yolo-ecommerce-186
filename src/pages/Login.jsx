import React, { useState } from "react";
import "../style/login.scss";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillFacebook, AiOutlineGooglePlus } from "react-icons/ai";

import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitLogin = (e) => {
    setIsLoading(!isLoading);
    e.preventDefault();
    // if (isRemember) {
    //   alert("Bạn điền thiếu thông tin");
    // }
    console.log({ email, password, isRemember });
    alert("Đăng nhập thành công");

    navigate("/");
  };

  return (
    <div className="login">
      <div className="login__container container w-full relative">
        <div className="login__title flex ">
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
          <span className="fs-15">Đăng nhập</span>
        </div>
        <div className="mt-1 mb-1 px-1 title">
          <h1 className="fs-18 fw-600 uppercase">Đăng nhập tài khoản</h1>
          <hr className="w-full px-1" />
        </div>
        {isLoading ? (
          <div>
            <h1>Loading ... </h1>
          </div>
        ) : (
          <div className="login__body relative">
            <div className="login__body__container">
              <h1 className="fs-18 fw-700 text-center uppercase mb-2">
                Thông tin đăng nhập
              </h1>
              <p className="fs-13 fw-600 mb-1">
                Nếu bạn có một tài khoản, xin vui lòng đăng nhập
              </p>
              <div className="login__with">
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
                className="form mt-2"
                onSubmit={handleSubmitLogin}
              >
                <div className="field__txt">
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
                <div className="mt-1 flex">
                  <input
                    type="checkbox"
                    className="mr-1"
                    onClick={() => setIsRemember(!isRemember)}
                  />
                  <label htmlFor="checkbox" className="fs-14">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <div className="btn flex">
                  <button type="submit" className="fs-14 mt-1 mb-1">
                    Đăng nhập
                  </button>
                  <a href="" className="ml-1 fs-14">
                    Quên mật khẩu?
                  </a>
                </div>
                <span className="flex fs-14 flex-wrap">
                  Nếu chưa có tài khoản, click vào
                  <NavLink
                    to="/register"
                    style={{ margin: "0 5px", color: "#000" }}
                    className="fw-600"
                  >
                    đây
                  </NavLink>
                  để đăng ký.
                </span>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
