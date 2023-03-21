import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginAuth: []
}

const authenSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {
    addLoginAuth: (state, action) => {
        const newItem = action.payload;
        state.loginAuth = newItem
    }
  }
});

export const {
    addLoginAuth
} = authenSlice.actions

export default authenSlice.reducer