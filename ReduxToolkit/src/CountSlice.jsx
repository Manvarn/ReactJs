import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
  name: "Count",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = CountSlice.actions;
export default CountSlice.reducer;
