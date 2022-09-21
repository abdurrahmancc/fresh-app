import { createSlice } from "@reduxjs/toolkit";

export const wishlistCounterSlice = createSlice({
  name: "wishlistCounter",
  initialState: { wishlist: [] },
  reducers: {
    setWishList: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { setWishList } = wishlistCounterSlice.actions;

export default wishlistCounterSlice.reducer;
