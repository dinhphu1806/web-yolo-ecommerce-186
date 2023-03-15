import React from "react";
import "../../sass/__variables.scss";
import { useDispatch } from "react-redux";
import {
  increamentItem,
  decreamentItem,
  removeItem,
} from "../../redux/slice/cartSlice";
import { motion } from "framer-motion";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { toast } from "react-toastify";

// number format price
import numberWithCommas from "../../ultils/numberWithCommas";

const CartItem = ({ id, imgUrl, productName, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  const handleIncreamentItem = () => {
    dispatch(increamentItem(id));
  };
  // handle decreament
  const handleDecreamentItem = () => {
    dispatch(decreamentItem(id));
  };

  // remove decreament
  const handleRemoveItem = () => {
    // console.log(removeItem(id));
    dispatch(removeItem(id));
    toast.success(`Xóa sản phẩm ${productName} thành công !`, {
      position: "top-center",
    });
  };
  return (
    <TableRow
      key={id}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        <img
          src={imgUrl}
          alt=""
          style={{
            width: "60px",
            height: "60px",
            objectFit: "cover",
          }}
        />
      </TableCell>
      <TableCell align="left">
        <span className="fs-14 fw-600">{productName}</span>
      </TableCell>
      <TableCell align="center">
        <span className="fs-15 fw-600">{numberWithCommas(price)}</span>
      </TableCell>
      <TableCell align="center">
        <div className="flex">
          <button
            style={{
              border: "1px solid #ccc",
              padding: "3px 10px",
              fontWeight: "600",
            }}
            onClick={handleDecreamentItem}
          >
            -
          </button>
          <span className="fs-14 fw-600 ml-1 mr-1">{quantity}</span>
          <button
            style={{
              border: "1px solid #ccc",
              padding: "3px 10px",
              fontWeight: "600",
            }}
            onClick={handleIncreamentItem}
          >
            +
          </button>
        </div>
      </TableCell>
      <TableCell align="center">
        <span className="fs-15 fw-600">
          {numberWithCommas(price * quantity)}
        </span>
      </TableCell>
      <TableCell align="center">
        <motion.div
          whileTap={{ scale: 1.2 }}
          className="fa-solid fa-trash"
          style={{ cursor: "pointer" }}
          onClick={handleRemoveItem}
        ></motion.div>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
