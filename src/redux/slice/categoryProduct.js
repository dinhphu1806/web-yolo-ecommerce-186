import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryProduct: [],
    filterProducts: [],
    searchProducts: [],
    sortProducts: []
}

const categoryProduct = createSlice({
  name: 'categoryProduct',
  initialState,
  reducers: {
    addcategoryProduct: (state, action) => {
        const newItem = action.payload;
        state.categoryProduct = newItem
    },
    addFilterProducts: (state, action) => {
      const newItem = action.payload;
      state.filterProducts = newItem
    },
    addSearchProducts: (state, action) => {
      const newItem = action.payload;
      state.searchProducts = newItem
    },
    addSortProducts: (state, action) => {
      const newItem = action.payload;
      state.sortProducts = newItem
    }
  }
});

export const {
    addcategoryProduct,
    addFilterProducts,
    addSearchProducts,
    addSortProducts
} = categoryProduct.actions

export default categoryProduct.reducer