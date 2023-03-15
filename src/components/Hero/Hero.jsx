import React from "react";
import "./hero.scss";
import { DataHero } from "./DataHero";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn">
      <motion.button
        whileTap={{ scale: 1.3 }}
        className="next"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </motion.button>
    </div>
  );
};

// prev
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn">
      <motion.button
        whileTap={{ scale: 1.3 }}
        className="prev"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </motion.button>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplaySpeed: 2000,
  initialSlide: 0,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1, // hieen thi anh
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1, // anh con 2
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 678,
      settings: {
        slidesToShow: 1, // anh con 1
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        // centerMode: true,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1, // anh con 1
        slidesToScroll: 1,
        // nextArrow: false,
        // prevArrow: false,
        // centerMode: true,
        initialSlide: 1,
        lazyLoad: true,
      },
    },
  ],
};

const Hero = () => {
  return (
    <div className="hero">
      <Slider className="owl-theme hero__container" {...settings}>
        {DataHero.map((item) => {
          return (
            <div className="hero__item" key={item.id}>
              <img src={item.img} alt="hero image img-cover" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
