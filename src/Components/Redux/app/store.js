import { configureStore } from "@reduxjs/toolkit";
import compareCartReducer from "../features/compareCounterSlice";
import searchProducts from "../features/searchProductsSlice";
import shoppingCartReducer from "../features/shoppingCartCounterSlice";
import wishlistReducer from "../features/wishlistCounterSlice";
import cartReducer from "../features/testSlice";

const store = configureStore({
  reducer: {
    wishlistCounter: wishlistReducer,
    shoppingCartsCounter: shoppingCartReducer,
    compareListCounter: compareCartReducer,
    searchProducts: searchProducts,
    carts: cartReducer,
  },
});

export default store;
