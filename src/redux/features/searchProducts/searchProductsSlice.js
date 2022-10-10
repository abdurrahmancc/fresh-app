import { createSlice } from "@reduxjs/toolkit";

export const searchProductsSlice = createSlice({
  name: "searchProduct",
  initialState: { products: [], isSearchProducts: false },
  reducers: {
    setSearchProducts: (state, action) => {
      state.products = action.payload;
      state.isSearchProducts = true;
    },
  },
});

export const { setSearchProducts } = searchProductsSlice.actions;

export default searchProductsSlice.reducer;
