import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCart, deleteCart, deleteCarts, getCarts } from "./shoppingCartAPI";

const initialState = {
  isLoading: false,
  carts: [],
  isExist: false,
  isError: false,
  error: "",
};

export const fetchCarts = createAsyncThunk("shoppingCart/fetchCarts", async () => {
  const carts = await getCarts();
  return carts;
});

export const removeToCart = createAsyncThunk("shoppingCart/removeCart", async (id) => {
  const cart = await deleteCart(id);
  return cart;
});

export const removeAllCarts = createAsyncThunk("shoppingCart/removeAllCarts", async () => {
  const carts = await deleteCarts();
  return carts;
});

export const addToCart = createAsyncThunk("shoppingCart/addCart", async (data) => {
  const cart = await addCart(data);
  return cart;
});

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.carts = [];
        state.error = action.error?.message;
      })
      .addCase(removeToCart.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeToCart.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = false;
        state.carts = state.carts.filter((t) => t._id !== action.meta?.arg);
      })
      .addCase(removeToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.carts = [];
        state.error = action.error?.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isExist = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        if (!action.payload?._id) {
          state.carts = [...state.carts];
          state.isExist = true;
        } else {
          state.isExist = false;
          state.carts = [...state.carts, action.payload];
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isExist = false;
        state.error = action.error?.message;
      })
      .addCase(removeAllCarts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isExist = false;
      })
      .addCase(removeAllCarts.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = [];
      })
      .addCase(removeAllCarts.rejected, (state, action) => {
        state.isLoading = false;
        state.isExist = false;
        state.error = action.error?.message;
      });
  },
});

export default shoppingCartSlice.reducer;
