// pm swiper
import React, { useState } from "react";
import "./thumbnailsSlide.scss";
import "../../sass/__variables.scss";

const ThumbnailsSlide = ({ imgDetails }) => {
  // console.log(imgDetails);

  const imgs = [
    {
      id: 1,
      url: "https://res.cloudinary.com/ds6bxvrco/image/upload/v1675530530/ecommerce/%C3%A1o%20new/image-1/20221116_e7J4N53Q6ec6QjrA2IY6XYxp_emncol.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/ds6bxvrco/image/upload/v1675530553/ecommerce/%C3%A1o%20new/image-1/20221217_2WU9pZjSsCU9pCecdkPuispF_bnrcvi.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/ds6bxvrco/image/upload/v1675530548/ecommerce/%C3%A1o%20new/image-1/20221217_71Nah02GcGhC4e3txbVc0Y5d_fjmi5b.jpg",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/ds6bxvrco/image/upload/v1675530543/ecommerce/%C3%A1o%20new/image-1/20221217_C1xQ7eu78lFzjjVAFv1NEGq5_y2q3du.jpg",
    },
  ];
  // console.log(typeof imgs);
  // console.log(imgDetails);
  const [dataImg, setDataImg] = useState(imgs[0]);

  const handleClick = (index) => {
    // console.log(index);
    const slider = imgs[index];
    // console.log(slider);
    setDataImg(slider); // update img
  };

  return (
    <div className="thumbnails">
      <div className="thumbnails__main">
        <img src={dataImg.url} alt="" />
      </div>
      <div className="flex flex-center">
        {imgs.map((item, index) => {
          return (
            <div className="thumbnails__list__img" key={index}>
              <img
                src={item.url}
                alt=""
                onClick={() => handleClick(index)}
                // height="70"
                // width="100"
                className={dataImg.id == index + 1 ? "clicked" : ""}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThumbnailsSlide;
