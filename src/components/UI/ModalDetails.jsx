import React from "react";
import "../../style/modalDetails.scss";

import { closeModal } from "../../redux/slice/modalSlice";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

const ModalDetails = () => {
  const dispatch = useDispatch();

  // const [productModal, setProductModal] = useState([]);

  // console.log(products);
  // const { id } = useParams();

  // const setViewModalProductStorage = () => {
  //   try {
  //     const product = products.find((item) => item.id === id);
  //     localStorage.setItem("viewModalProduct", JSON.stringify(product));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getViewModalProductStorage = () => {
  //   const localData = localStorage.getItem("viewModalProduct");
  //   const d = JSON.parse(localData);
  //   console.log(d);
  //   setProductModal(d);
  // };

  // useEffect(() => {
  //   setViewModalProductStorage();
  //   getViewModalProductStorage();
  // }, []);

  // const { productName, imgUrl, price, description } = productModal;

  return (
    <div className="modal">
      <div className="modal__container p-2">
        {/* <div className="modal__overlay"></div> */}
        <div className="modal__body">
          <div
            className="modal__close px-2 py-2 fs-22 fw-500"
            onClick={() => dispatch(closeModal())}
          >
            X
          </div>
          <div className="modal__content flex flex-between">
            <div className="modal__content__left">Left</div>
            <div className="modal__content__right">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
