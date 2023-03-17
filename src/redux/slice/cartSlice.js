import { createSlice } from "@reduxjs/toolkit";

// save cart to LocalStorage
const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

// func get cart from LocalStorage
const setItemFunc = (item) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
};

const initialState = {
  // cart: [],
  cart: items,

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      console.log(newItem, 'newItem');
      const cartItem = state.cart.find((item) => item.id === newItem.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({
          // id: newItem.id,
          // productName: newItem.productName,
          // imgUrl: newItem.imgUrl,
          // price: newItem.price,
          ...newItem,
          // quantity: 1,
          quantity: newItem.isProductCard ? 1 : newItem.quantity
        });
      }
      setItemFunc(state.cart.map((item) => item));
    },
    increamentItem: (state, action) => {
      const newItem = action.payload;
      const cartItem = state.cart.find((item) => item.id === newItem);

      cartItem.quantity++;

      setItemFunc(state.cart.map((item) => item));
    },
    decreamentItem: (state, action) => {
      const newItem = action.payload;
      const cartItem = state.cart.find((item) => item.id === newItem);

      if (cartItem.quantity === 1) {
        cartItem.quantity = 1;
      } else {
        cartItem.quantity--;
      }
      setItemFunc(state.cart.map((item) => item));
    },
    removeItem: (state, action) => {
      const newItem = action.payload;
      const cartItem = state.cart.filter((item) => item.id !== newItem);
      state.cart = cartItem;

      setItemFunc(state.cart.map((item) => item));
    },
    clearAllItem: (state, action) => {
      state.cart = [];

      setItemFunc(state.cart.map((item) => item));
    },
  },
});

export const {
  addToCart,
  increamentItem,
  decreamentItem,
  removeItem,
  clearAllItem,
} = cartSlice.actions;

export default cartSlice.reducer;
