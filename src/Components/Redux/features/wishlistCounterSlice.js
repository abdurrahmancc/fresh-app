import { createSlice } from "@reduxjs/toolkit";

export const wishlistCounterSlice = createSlice({
  name: "wishlistCounter",
  initialState: { wishlist: [] },
  reducers: {
    increment: (state, action) => {
      state.wishlist = action.payload;
    },
    decrement: (state) => {
      state.wishlist = state.wishlist - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset, incrementByValue } = wishlistCounterSlice.actions;

export default wishlistCounterSlice.reducer;
