import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice
  },
});

export default store;
