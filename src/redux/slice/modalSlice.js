import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.IsModal = true;
    },
    closeModal: (state, action) => {
      state.IsModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
