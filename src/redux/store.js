import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice,
    products: productSlice
  },
});

export default store;
