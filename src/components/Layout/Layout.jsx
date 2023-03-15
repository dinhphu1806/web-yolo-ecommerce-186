import React from "react";
import Router from "../../routers/Router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderTop from "../HeaderTop/HeaderTop";
import BackToTop from "../BackToTop/BackToTop";

const style = {
  position: "relative",
};

const Layout = () => {
  return (
    <div style={style}>
      <HeaderTop />
      <Header />
      <Router />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
