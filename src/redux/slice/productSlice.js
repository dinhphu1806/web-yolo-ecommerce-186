import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    productCoats: [],
    productTrousers: [],
    productHats: [],
    productShoes: [],
    productBags: [],
    productBelts: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
        const newItem = action.payload;
        // console.log(newItem);
        state.products = newItem
        // console.log(state);
        
        // setItemFunc(state.cart.map((item) => item));
      },
      addProductCoats: (state, action) => {
        const newItem = action.payload;
        state.productCoats = newItem
      },
      addProductTrousers: (state, action) => {
        const newItem = action.payload;
        state.productTrousers = newItem
      },
      addProductHats: (state, action) => {
        const newItem = action.payload;
        state.productHats = newItem
      },
      addProductShoes: (state, action) => {
        const newItem = action.payload;
        state.productShoes = newItem
      },
      addProductBags: (state, action) => {
        const newItem = action.payload;
        state.productBags = newItem
      },
      addProductBelts: (state, action) => {
        const newItem = action.payload;
        state.productBelts = newItem
      },
  }
});

export const {
    addProducts,
    addProductCoats,
    addProductTrousers,
    addProductHats,
    addProductShoes,
    addProductBags,
    addProductBelts
} = productSlice.actions

export default productSlice.reducer