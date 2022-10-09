import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

export const shoppingCartCounterSlice = createSlice({
  name: "shoppingCartCounter",
  initialState,
  reducers: {
    setCartList: (state, action) => {
      state.shoppingCart = action.payload;
    },
  },
});

export const { setCartList } = shoppingCartCounterSlice.actions;

export default shoppingCartCounterSlice.reducer;
