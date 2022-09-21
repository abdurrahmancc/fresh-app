import { configureStore } from "@reduxjs/toolkit";
import compareCartReducer from "../features/compareCounterSlice";
import shoppingCartReducer from "../features/shoppingCartCounterSlice";
import wishlistReducer from "../features/wishlistCounterSlice";

const store = configureStore({
  reducer: {
    wishlistCounter: wishlistReducer,
    shoppingCartsCounter: shoppingCartReducer,
    compareListCounter: compareCartReducer,
  },
});

export default store;
