import React, { useEffect, useState } from "react";
import "../BackToTop/backToTop.scss";
import { BsFillFileArrowUpFill } from "react-icons/bs";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBacktop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleListenToScroll = () => {
    let heightToHidden = 120;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleListenToScroll);
    return () => {
      window.removeEventListener("scroll", handleListenToScroll);
    };
  });

  return (
    <React.Fragment>
      {isVisible && (
        <div
          className="back-to-top"
          title="Lên đầu trang"
          onClick={handleBacktop}
        >
          <BsFillFileArrowUpFill />
        </div>
      )}
    </React.Fragment>
  );
};

export default BackToTop;
