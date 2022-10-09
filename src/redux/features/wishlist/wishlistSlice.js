import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addWishlist, deleteAllWishlist, deleteWishlist, getWishlist } from "./wishlistAPI";

const initialState = {
  isLoading: false,
  wishlist: [],
  isExist: false,
  isError: false,
  error: "",
};

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async () => {
  const wishlist = await getWishlist();
  return wishlist;
});

export const removeToWishlist = createAsyncThunk("wishlist/removeWishlist", async (id) => {
  const wishlist = await deleteWishlist(id);
  return wishlist;
});

export const removeAllWishlist = createAsyncThunk("shoppingCart/removeAllCarts", async () => {
  const carts = await deleteAllWishlist();
  return carts;
});

export const addToWishlist = createAsyncThunk("wishlist/addWishlist", async (data) => {
  const wishlist = await addWishlist(data);
  return wishlist;
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.wishlist = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.wishlist = [];
        state.error = action.error?.message;
      })
      .addCase(removeToWishlist.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeToWishlist.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = false;
        state.wishlist = state.wishlist.filter((t) => t._id !== action.meta?.arg);
      })
      .addCase(removeToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.wishlist = [];
        state.error = action.error?.message;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isExist = false;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        if (!action.payload?._id) {
          state.wishlist = [...state.wishlist];
          state.isExist = true;
        } else {
          state.isExist = false;
          state.wishlist = [...state.wishlist, action.payload];
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isExist = false;
        state.wishlist = [];
        state.error = action.error?.message;
      })
      .addCase(removeAllWishlist.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isExist = false;
      })
      .addCase(removeAllWishlist.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.wishlist = [];
      })
      .addCase(removeAllWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isExist = false;
        state.error = action.error?.message;
      });
  },
});

export default wishlistSlice.reducer;
