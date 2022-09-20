import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlistCounterSlice";

const store = configureStore({
  reducer: {
    wishlistCounter: wishlistReducer,
  },
});

export default store;
