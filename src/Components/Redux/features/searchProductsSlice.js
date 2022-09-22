import { createSlice } from "@reduxjs/toolkit";

export const searchProductsSlice = createSlice({
  name: "searchProduct",
  initialState: { products: [] },
  reducers: {
    setSearchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setSearchProducts } = searchProductsSlice.actions;

export default searchProductsSlice.reducer;
