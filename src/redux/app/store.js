import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/shoppingCart/shoppingCartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import compareReducer from "../features/compare/compareListSlice";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    wishlist: wishlistReducer,
    compareList: compareReducer,
  },
});

export default store;
