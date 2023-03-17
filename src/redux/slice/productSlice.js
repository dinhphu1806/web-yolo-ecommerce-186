import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
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
  }
});

export const {
    addProducts
} = productSlice.actions

export default productSlice.reducer