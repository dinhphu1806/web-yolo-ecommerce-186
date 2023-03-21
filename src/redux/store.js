import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";
import categoryProduct from "./slice/categoryProduct";
import authenSlice from "./slice/authenSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice,
    products: productSlice,
    categoryProduct: categoryProduct,
    authen: authenSlice
  },
});

export default store;
