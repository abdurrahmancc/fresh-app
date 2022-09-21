import { createSlice } from "@reduxjs/toolkit";

export const compareCounterSlice = createSlice({
  name: "compareCounter",
  initialState: { compareList: [] },
  reducers: {
    setCompareList: (state, action) => {
      state.compareList = action.payload;
    },
  },
});

export const { setCompareList } = compareCounterSlice.actions;

export default compareCounterSlice.reducer;
