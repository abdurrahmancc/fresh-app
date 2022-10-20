import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/shoppingCart/shoppingCartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import compareReducer from "../features/compare/compareListSlice";
import searchProducts from "../features/searchProducts/searchProductsSlice";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    wishlist: wishlistReducer,
    compareList: compareReducer,
    searchProducts: searchProducts,
  },
});

export default store;
