import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCompareList, deleteCompare, addCompare } from "./compareListAPI";

const initialState = {
  isLoading: false,
  compareList: [],
  isExist: false,
  isError: false,
  error: "",
};

export const fetchCompareList = createAsyncThunk("compare/fetchCompare", async () => {
  const comparList = await getCompareList();
  return comparList;
});

export const removeToCompare = createAsyncThunk("compare/removeToCompare", async (id) => {
  const compare = await deleteCompare(id);
  return compare;
});

export const addToCompare = createAsyncThunk("compare/addToCompare", async (data) => {
  const compare = await addCompare(data);
  return compare;
});

const compareListSlice = createSlice({
  name: "compare",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompareList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCompareList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.compareList = action.payload;
      })
      .addCase(fetchCompareList.rejected, (state, action) => {
        state.isLoading = false;
        state.compareList = [];
        state.compareList = action.error?.message;
      })
      .addCase(removeToCompare.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeToCompare.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.compareList = state.compareList.filter((t) => t._id !== action.meta?.arg);
      })
      .addCase(removeToCompare.rejected, (state, action) => {
        state.isLoading = false;
        state.compareList = [];
        state.error = action.error?.message;
      })
      .addCase(addToCompare.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isExist = false;
      })
      .addCase(addToCompare.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;

        if (!action.payload?._id) {
          state.compareList = [...state.compareList];
          state.isExist = true;
        } else {
          state.isExist = false;
          state.compareList = [...state.compareList, action.payload];
        }
      })
      .addCase(addToCompare.rejected, (state, action) => {
        state.isLoading = false;
        state.isExist = false;
        state.compareList = [];
        state.error = action.error?.message;
      });
  },
});

export default compareListSlice.reducer;
