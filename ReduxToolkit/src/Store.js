import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./CountSlice";

const Store = configureStore({
  reducer: {
    count: CountSlice,
  },
});

export default Store;
