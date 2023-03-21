import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { menuData } from "./MenuItem";
import { NavLink } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addLoginAuth } from "../../redux/slice/authenSlice";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { FiLogOut } from 'react-icons/fi';

import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// auth change
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

// logout
import { signOut } from 'firebase/auth';
import { toast } from "react-toastify";
// import { auth } from "../../firebase/firebase.config";

const Header = () => {
  const dispatch = useDispatch()
  const { loginAuth } = useSelector(state => state.authen)
  const [openMobile, setOpenMobile] = useState(false);
  const [ displayName, setDisplayName ] = useState({})
 
  const navigate = useNavigate();

  // handle logout
  const handleLogOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Đăng xuất thành công")
        navigate("/")
      }).catch((error) => {
        // toast.error("error.message")
        toast.error(error.message);
    });
  }

   // auth change
  //  const [ displayName, setDisplayName ] = useState({})

   useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       if (user) {
         const uid = user.uid;
         console.log(user.displayName); // null
         // setDisplayName(user.displayName)
         dispatch(addLoginAuth(user.displayName))
         setDisplayName(loginAuth)
         
       } else {
         setDisplayName('')
       }
     });
   })
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
            style={{marginRight: '20px', cursor: 'pointer'}}
            title="Giỏ hàng"
          >
            <HiOutlineShoppingBag className="cart fs-18" />
            <span
              className="num flex flex-center fs-14"
              style={{ backgroundColor: "#252a2b" }}
            >
              {getTotalQuantity() || 0}
            </span>
          </div>

          {/* auth change */}
          {displayName ? `Hi, ${displayName}` : ""}

          {/* icon__user */}
          {displayName ? '' : (
              <NavLink to="/login">
                <FaUserCircle className="header__icon__user " />
              </NavLink>
          )}

           {/* auth change */}
          
           <NavLink to='' onClick={handleLogOut} style={{marginLeft: '5px', cursor: 'pointer', color:'#000'}} title='Đăng xuất'>
              {displayName ? (
                <FiLogOut />
              ) : ''}
           </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
