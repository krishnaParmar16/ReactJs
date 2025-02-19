import { configureStore } from "@reduxjs/toolkit";
import  counter  from "../feature/CounterSlice";

export const store = configureStore({
  reducer: {
    counterReducer: counter,
  },
});
