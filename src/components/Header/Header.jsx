import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { menuData } from "./MenuItem";
import { NavLink } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const navigate = useNavigate();

  // use when total quantity
  const { cart } = useSelector((state) => state.cart);

  // console.log(cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    // console.log(total);
    return total;
  };
  // };

  // use when make sticky header
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    // func clean
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });

  return (
    <div className="header" ref={headerRef}>
      <div className="header__container container relative flex flex-between">
        {/* icon__bars */}
        <div
          className="header__icon__bars"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? (
            <ImCross
              className="header__close fw-500"
              style={{
                border: "1px solid #08162f",
                backgroundColor: "#08162f",
                width: "25px",
                height: "25px",
                color: "#fff",
              }}
            />
          ) : (
            <FaBars className=" fw-500" />
          )}
        </div>
        {/* logo */}
        <NavLink to="/" className="header__logo ls-2 fs-24 fw-600 text-black">
          YoloShop
        </NavLink>

        {/* nav */}

        <ul
          className={
            openMobile
              ? `header__nav-mobile flex flex-column text-center`
              : `header__nav flex`
          }
        >
          {menuData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}

          {/* search mobile */}
          <div className="header__search__mobile relative">
            {/* <input type="text" placeholder="search ..." /> */}
            <button type="button" className="color-white">
              <BiSearch />
            </button>
          </div>
        </ul>

        {/* search desktop */}
        <div className="header__search__desktop relative">
          <input
            type="text"
            placeholder="search ..."
            className="relative"
            style={{ borderRadius: "10px", border: "2px solid #636a6b" }}
          />
          <button type="button" className="header__btn-search fs-20">
            <BiSearch />
          </button>
        </div>

        {/* icon cart, user, bars*/}
        <div className="header__icon flex relative">
          {/* icon__cart */}
          <div
            className="header__icon__cart flex flex-center relative"
            onClick={() => navigate("/cart")}
          >
            <HiOutlineShoppingBag className="cart fs-18" />
            <span
              className="num flex flex-center fs-14"
              style={{ backgroundColor: "#252a2b" }}
            >
              {getTotalQuantity() || 0}
            </span>
          </div>

          {/* icon__user */}
          <NavLink to="/login">
            <FaUserCircle className="header__icon__user " />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
