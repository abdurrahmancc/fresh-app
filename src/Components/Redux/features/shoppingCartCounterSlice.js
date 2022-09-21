import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartCounterSlice = createSlice({
  name: "shoppingCartCounter",
  initialState: { shoppingCart: [] },
  reducers: {
    setCartList: (state, action) => {
      state.shoppingCart = action.payload;
    },
  },
});

export const { setCartList } = shoppingCartCounterSlice.actions;

export default shoppingCartCounterSlice.reducer;
