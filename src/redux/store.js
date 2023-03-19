import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import categoryProduct from "./slice/categoryProduct";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice,
    products: productSlice,
    categoryProduct: categoryProduct
  },
});

export default store;
